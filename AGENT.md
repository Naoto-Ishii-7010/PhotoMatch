# AGENT.md

## プロジェクト概要

PhotoMatch — 写真撮影を依頼したいユーザー（依頼者）とフォトグラファーをマッチングするプラットフォーム。

- 依頼者は指名型・公募型の2通りで撮影を依頼できる
- フォトグラファーはポートフォリオ公開・スケジュール管理・写真納品・写真販売を一元管理できる
- ターゲットユーザー: 日本人のみ
- 1ユーザーは依頼者・フォトグラファーどちらか一方の役割のみ持つ

## 技術スタック

- フレームワーク: Next.js v16 (App Router)
- UI ライブラリ: React v19
- 言語: TypeScript
- パッケージマネージャー: pnpm (pnpm-workspace.yaml)
- スタイリング: Tailwind CSS
- アイコン: ReactIcons
- バリデーション: zod
- 認証: Auth.js
- ORM: Prisma
- データベース: PostgreSQL
- テスト (Unit/Integration): Vitest
- テスト (E2E): Playwright
- ホスティング: Vercel
- CI/CD: GitHub Actions
- Linter: Oxlint
- フォーマッター: Prettier

## バックエンド実装方針

- フロントエンドは継続して Next.js を使用する
- 将来的にバックエンドは Go で別リポジトリとして実装する予定
- ただし、バックエンド開発者の着手前は Next.js がバックエンド機能も暫定的に担う
- 当面の API 通信は `app/api` 配下の Route Handler を API 境界として統一する
- フロントエンドからのデータ更新・取得は、原則として Route Handler 経由で行う
- 将来 Go バックエンドへ移行しやすいよう、画面側は Route Handler を内部 API として扱い、バックエンド実装詳細に直接依存しない構成を優先する
- ビジネスロジックはできるだけ Route Handler 直下に閉じ込めず、再利用・移行しやすい形で `lib/` などに分離する

## プロジェクト構成

```
app/
├── lp/              # ランディングページ（認証不要・アプリ本体とは独立ルート /lp）
├── (public)/        # 認証不要のページ
├── (auth)/          # 認証ページ
├── (requester)/     # 依頼者向けページ
├── (photographer)/  # フォトグラファー向けページ
├── (shared)/        # 両ロール共通ページ（チャット・通知等）
├── (admin)/         # 管理者向けページ
└── api/             # Route Handlers

components/
├── ui/              # 汎用UIコンポーネント
└── features/        # ドメイン別コンポーネント
    └── lp/          # LPセクションコンポーネント群

lib/                 # Prismaクライアント・Auth設定・ユーティリティ
types/               # 型定義
hooks/               # カスタムフック
```

## コーディング規約

- コンポーネントファイル名: `PascalCase.tsx`
- ディレクトリ名: `kebab-case`
- import パスエイリアス（`@/`）は使用しない（相対パスを使う）
- 型定義は `interface` より `type` を基本とする
- コンポーネントは Server Component を基本とし、`"use client"` は最小限にとどめる
- コメントは日本語で細かく書く

## 禁止事項

- `any` 型を使わない
- Server Actions は使わず、Route Handler に統一する
- `"use client"` を使う場合は理由をコメントで明記する
- Route Handler では必ず認証チェックとロール確認を行う
- API の境界（Route Handler の入口）では必ず zod でバリデーションする
- `process.env` を直接参照しない。必ず `lib/env.ts` で型安全に管理する
- `new PrismaClient()` を直接呼び出さない。`lib/prisma.ts` のシングルトンのみを使う

## 環境変数

```
# Auth.js
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

# Database
DATABASE_URL=

# Vercel Blob（画像ストレージ）
BLOB_READ_WRITE_TOKEN=

# Stripe（フェーズ3）
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

## テスト方針

- **Vitest（Unit/Integration）**: ビジネスロジック・Route Handler・バリデーション等の重要機能のみ
- **Playwright（E2E）**: 主要なユーザーフロー（登録・ログイン・予約確定等）の重要機能のみ

## 実装フェーズ

現在はフェーズ1から着手中。

| フェーズ         | 内容                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| フェーズ1（MVP） | 認証・プロフィール・検索・ポートフォリオ・スケジュール・指名型依頼・公募型依頼・チャット・納品・エスクロー・売上管理・通知・運営管理 |
| フェーズ2        | レビュー・写真販売・写真購入・ウォーターマーク                                                                                       |
| フェーズ3        | クレジットカード詳細管理                                                                                                             |

## 開発

```bash
pnpm dev      # 開発サーバーを起動
pnpm build    # 本番用ビルド
pnpm lint     # Oxlint を実行
```

- コード生成、変更、削除時には、Lint, Format, TypeScriptの型チェックを行うこと

## カスタムスキル

プロジェクト固有のスキルは `.agents/skills/` にあります。使い方は各ファイルを参照してください。
