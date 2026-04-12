# Auth Rules

Next.js モノリス（将来 Go BFF 移行予定）における認証・認可の実装ルール。コード生成・編集前に必ず本ドキュメントを参照すること。

## 0. 大原則

- セッションの source of truth は **DB (Prisma)**。**Database Session 方式**で、JWT は使わない。
- セッション ID は **HttpOnly Cookie** でのみ受け渡す。
- **Server Component から Prisma を直接呼ばない**。全てのデータ取得は `lib/dal.ts` 経由で内部 API Routes を叩く。
- 認証ロジックは `lib/auth/` に集約。API Routes はそれを呼ぶだけ。
- 将来の Go 移行時、**書き換えは `lib/auth/` と `app/api/*` の中身だけで完結させる**。これが本設計の最重要原則。

## 1. レイヤー構成と Prisma の import 可否

| レイヤー         | 場所                                | Prisma import |
| ---------------- | ----------------------------------- | ------------- |
| `lib/auth/`      | パスワード検証・セッション発行/破棄 | ⭕            |
| API Routes       | `app/api/**/route.ts`               | ⭕            |
| DAL              | `lib/dal.ts`                        | ❌            |
| DTO              | `lib/dto/*.ts`                      | ❌            |
| Server Component | `app/**/page.tsx`                   | ❌            |
| Client Component | `'use client'`                      | ❌            |

**`import { prisma }` が許されるのは `lib/auth/` と `app/api/` 配下のみ**。それ以外で見つけたら必ずリジェクト。

## 2. 絶対禁止事項（Hard Rules）

以下に該当するコードは**生成してはならない**:

- ❌ Server / Client Component から Prisma を直接 import
- ❌ DAL を経由せず生 `fetch` で API Routes を呼ぶ
- ❌ Client Component から DB に直接アクセス
- ❌ セッションを `localStorage` / `sessionStorage` / React Context に保存
- ❌ `session_id` を URL クエリや JS から見える場所に渡す
- ❌ JWT の発行・検証
- ❌ `proxy.ts` から DB / API Routes へ往復
- ❌ Layout (`layout.tsx`) で認可チェックを完結させる
- ❌ Server Action / Route Handler で認可チェック省略
- ❌ Prisma の型や DB レコードをそのまま Client Component に渡す
- ❌ ログアウト時に `router.push` のみで遷移
- ❌ UI 非表示だけで認可を済ませる（サーバー側で必ずチェック）
- ❌ パスワードハッシュ化・セッション発行を `lib/auth/` 以外に書く

## 3. データ取得経路

| 用途                                    | 経由するもの                          |
| --------------------------------------- | ------------------------------------- |
| Server Component でのデータ取得         | DAL (`serverFetch`) → 内部 API Routes |
| Client のフォーム送信・ミューテーション | **Server Actions（推奨）**            |
| Client での読み取り                     | Route Handler を `fetch`              |
| ログイン状態の確認                      | DAL の `verifySession()`              |

Server Component から Prisma 直叩きが許されない理由: Go 移行時の書き換え範囲を **API Routes 内部だけ**に閉じ込めるため。性能より移行容易性を優先する。

## 4. `lib/auth/` 実装ルール

- ファイル先頭に `import 'server-only'` 必須
- セッション ID は `crypto.randomBytes(32).toString('hex')` 等、暗号学的に安全な乱数で生成
- セッションは必ず `expiresAt` を持ち、`findSession` で期限検証＋期限切れは削除
- パスワードは bcrypt / argon2 でハッシュ化（平文保存厳禁）
- 公開関数は最低限: `hashPassword` / `verifyPassword` / `createSession` / `findSession` / `deleteSession`

```ts
// lib/auth/session.ts（抜粋）
import "server-only";
import { randomBytes } from "crypto";
import { prisma } from "@/lib/prisma";

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;

export async function createSession(userId: string) {
  const sessionId = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await prisma.session.create({ data: { id: sessionId, userId, expiresAt } });
  return { sessionId, expiresAt };
}

export async function findSession(sessionId: string) {
  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: { select: { id: true, role: true } } },
  });
  if (!session) return null;
  if (session.expiresAt < new Date()) {
    await prisma.session.delete({ where: { id: sessionId } });
    return null;
  }
  return session;
}
```

## 5. DAL (`lib/dal.ts`) 実装ルール

- `import 'server-only'` 必須
- `verifySession` は `cache()` でラップ（同一レンダリング内の重複呼び出し防止）
- 未認証時は呼び出し側で if を書かず、`verifySession` 内で `redirect('/login')`
- `cache: 'no-store'` 必須（セッション情報は ISR/Data Cache に乗せない）
- **DAL から Prisma を import しない**。API Routes を fetch する層
- Go 移行時は `getBaseUrl()` の差し替えだけで済む構造を維持

```ts
// lib/dal.ts
import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function getBaseUrl() {
  return process.env.APP_BASE_URL ?? "http://localhost:3000";
}

export const verifySession = cache(async () => {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session_id")?.value;
  if (!sessionId) redirect("/login");

  const res = await fetch(`${getBaseUrl()}/api/me`, {
    headers: { Cookie: `session_id=${sessionId}` },
    cache: "no-store",
  });
  if (res.status === 401) redirect("/login");
  if (!res.ok) throw new Error("Failed to verify session");

  const user = await res.json();
  return { isAuth: true, userId: user.id, role: user.role };
});

export async function serverFetch(path: string, init?: RequestInit) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session_id")?.value ?? "";
  return fetch(`${getBaseUrl()}${path}`, {
    ...init,
    headers: { ...init?.headers, Cookie: `session_id=${sessionId}` },
    cache: "no-store",
  });
}
```

## 6. DTO (`lib/dto/*.ts`) 実装ルール

API Routes のレスポンスを **そのまま Client に渡してはいけない**。`lib/dto/` で必要フィールドのみに絞る。

- `'server-only'` 必須
- パスワードハッシュ・内部 ID・他人の email など機微フィールドを返さない
- 権限による出し分けは DTO 内で行う（Client 側で隠すのは NG）
- 戻り値の型を明示し、Prisma 型 (`User` 等) をそのまま再エクスポートしない

```ts
// lib/dto/profile.ts
import "server-only";
import { verifySession, serverFetch } from "@/lib/dal";

export async function getProfileDTO(userId: string) {
  const session = await verifySession();
  const res = await serverFetch(`/api/users/${userId}`);
  if (!res.ok) return null;
  const user = await res.json();
  return {
    id: user.id,
    name: user.name,
    email: session.userId === user.id ? user.email : null,
  };
}
```

## 7. 認可: 2 段階チェック

| 種類       | 場所              | 役割                                         |
| ---------- | ----------------- | -------------------------------------------- |
| Optimistic | `proxy.ts`        | Cookie の存在確認のみ。DB / API 呼び出し禁止 |
| Secure     | `verifySession()` | DB に問い合わせて実検証                      |

### 認可チェックを書く場所

- ✅ DAL の関数内（データ取得＝認可チェックを不可分にする）
- ✅ API Routes の冒頭（Cookie → `findSession`）
- ✅ 葉の Server Component（UI 出し分け用）
- ✅ Server Action の冒頭
- ❌ Layout（Partial Rendering で再実行されない）

### Proxy

```ts
// proxy.ts
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/settings"];
const publicRoutes = ["/login", "/signup", "/"];

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.some((p) => path.startsWith(p));
  const isPublic = publicRoutes.includes(path);
  const sessionId = req.cookies.get("session_id")?.value;

  if (isProtected && !sessionId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (isPublic && sessionId && !path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
```

`proxy` の役割は UX 上の早期リダイレクトのみ。**`fetch` / Prisma を呼ばない**。最終防衛は DAL に任せる。

## 8. API Routes 実装ルール

API Routes は **Go 移行の境界線**。業務ロジックを詰め込みすぎず、`lib/auth/` や Prisma クエリへの薄いラッパーとして実装する。

- 入力バリデーションは **Zod 等で必須**（多層防御）
- 認証必須エンドポイントは関数冒頭で `findSession` を呼ぶ
- 認証ロジックは `lib/auth/` 経由のみ。Route Handler に直書きしない
- エラーはユーザー向けメッセージと内部ログを分離

```ts
// app/api/me/route.ts
import { cookies } from "next/headers";
import { findSession } from "@/lib/auth/session";

export async function GET() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session_id")?.value;
  if (!sessionId)
    return Response.json({ error: "unauthorized" }, { status: 401 });

  const session = await findSession(sessionId);
  if (!session)
    return Response.json({ error: "unauthorized" }, { status: 401 });

  return Response.json({ id: session.user.id, role: session.user.role });
}
```

```ts
// app/api/login/route.ts
import { cookies } from "next/headers";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json());
  if (!parsed.success)
    return Response.json({ error: "invalid_input" }, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: parsed.data.email },
  });
  if (
    !user ||
    !(await verifyPassword(parsed.data.password, user.passwordHash))
  ) {
    return Response.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const { sessionId, expiresAt } = await createSession(user.id);
  const cookieStore = await cookies();
  cookieStore.set("session_id", sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
  return Response.json({ ok: true });
}
```

## 9. Server Actions 実装ルール

Client から呼べる public-facing なエンドポイントと同じセキュリティ意識で扱う。

- 関数の **1 行目で `await verifySession()`**
- ロール/権限チェックはその直後
- DB アクセスは Server Action 内に書かず、必ず API Routes 経由
- 入力バリデーションは Zod 等で必須

```ts
// app/actions/update-post.ts
"use server";
import { verifySession, serverFetch } from "@/lib/dal";

export async function updatePost(postId: string, formData: FormData) {
  const session = await verifySession();
  if (session.role !== "admin" && session.role !== "editor") {
    return { error: "forbidden" };
  }
  const res = await serverFetch(`/api/posts/${postId}`, {
    method: "PATCH",
    body: JSON.stringify({ title: formData.get("title") }),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) return { error: "failed" };
  return { ok: true };
}
```

## 10. ログイン / ログアウト

### ログイン

1. フォームを Server Action か `/api/login` に POST
2. API Routes が `lib/auth/` でパスワード検証 → セッション発行
3. `cookies().set('session_id', ...)` で HttpOnly Cookie 発行
4. クライアント側で **`window.location.href = '/dashboard'`** で遷移（キャッシュ汚染回避）

### ログアウト

```ts
// Client Component
async function handleLogout() {
  await fetch("/api/logout", { method: "POST" });
  // ❌ router.push('/login') は使わない
  // ✅ フルリロードでキャッシュ・RSC payload・state を完全リセット
  window.location.href = "/login";
}
```

```ts
// app/api/logout/route.ts
import { cookies } from "next/headers";
import { deleteSession } from "@/lib/auth/session";

export async function POST() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session_id")?.value;
  if (sessionId) {
    await deleteSession(sessionId);
    cookieStore.delete("session_id");
  }
  return Response.json({ ok: true });
}
```

**`window.location.href` 必須**。`router.push` だと Next.js のキャッシュ・RSC payload・React state がログイン済み状態で残る。

## 11. Cookie 属性（固定）

| 属性       | 値                                      |
| ---------- | --------------------------------------- |
| `HttpOnly` | `true`                                  |
| `Secure`   | `process.env.NODE_ENV === 'production'` |
| `SameSite` | `Lax`                                   |
| `Path`     | `/`                                     |
| `expires`  | セッションの `expiresAt` と一致         |

`HttpOnly` のため JS から Cookie は見えない。`document.cookie` を読むコードは書かない。

## 12. Go 移行に備える原則

- 業務ロジックは API Routes の中に閉じ込める（DAL / DTO / Server Component / Server Action にビジネスロジックを書かない）
- Prisma の型を Client / Server Component に漏らさない（必ず DTO で別型に変換）
- DAL は HTTP 越しに API を叩く構造を維持。Server Component から Prisma 直呼びのショートカットを作らない
- 移行時は `lib/auth/` と `app/api/*` を Go に書き換え、DAL の `getBaseUrl()` を差し替えるだけで済む状態を保つ

## 13. 生成前チェックリスト

コードを生成・編集する前に **必ず**自問すること。1 つでも ☐ が残るならマージ不可。

1. ☐ Server / Client Component から Prisma を直接 import していないか?
2. ☐ API Routes 呼び出しは `lib/dal.ts` 経由か?
3. ☐ Server Component / Server Action の冒頭で `verifySession()` を呼んでいるか?
4. ☐ API Routes の冒頭で `findSession` を呼んでいるか?
5. ☐ 認証ロジックは `lib/auth/` に書かれているか?
6. ☐ Client に渡す前に DTO で絞っているか?
7. ☐ `'server-only'` を `lib/dal.ts` / `lib/dto/*` / `lib/auth/*` に付けたか?
8. ☐ proxy で `fetch` / Prisma を呼んでいないか?
9. ☐ Layout で認可チェックを完結させていないか?
10. ☐ ログアウトで `window.location.href` を使っているか?
11. ☐ Client から API 直叩きより Server Action で代替できないか検討したか?
12. ☐ セッション情報を `localStorage` / Context に入れていないか?
13. ☐ `verifySession` を `cache()` でラップしているか?
14. ☐ Prisma 型をそのまま Client に漏らしていないか?
15. ☐ 入力バリデーションを Zod 等で行っているか?
