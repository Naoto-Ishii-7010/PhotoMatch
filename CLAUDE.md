# CLAUDE.md

## プロジェクト概要

参照：/docs/SPEC.md

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

## テスト方針

- **Vitest（Unit/Integration）**: ビジネスロジック・Route Handler・バリデーション等の重要機能のみ
- **Playwright（E2E）**: 主要なユーザーフロー（登録・ログイン・予約確定等）の重要機能のみ

## 開発

```bash
pnpm dev      # 開発サーバーを起動
pnpm build    # 本番用ビルド
pnpm lint     # Oxlint を実行
```

- コード生成、変更、削除時には、Lint, Format, TypeScriptの型チェックを行うこと

## 参照ルール

- ルールは `rules/README.md` に列挙されたファイルを参照すること

## 仕様書

- プロジェクトの全要件仕様は [`docs/SPEC.md`](docs/SPEC.md) を参照すること
- 各機能の詳細仕様へのリンク・サービスモジュール一覧・依存関係などは全て `docs/SPEC.md` に記載されています

## カスタムスキル

プロジェクト固有のスキルは `.claude/skills/` にあります。使い方は各ファイルを参照してください。
