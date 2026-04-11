# PhotoMatch

写真撮影の依頼者とフォトグラファーをつなぐマッチングサービスの開発リポジトリです。

現在の実装は主に `/lp` のランディングページと、Auth.js / Prisma / PostgreSQL を前提にした開発基盤です。

## セットアップ

```bash
pnpm install
```

ルートに `.env` を作成し、以下を設定してください。

```bash
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
DATABASE_URL=
BLOB_READ_WRITE_TOKEN=

# optional
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Prisma Client を生成します。

```bash
pnpm db:generate
```

開発サーバーを起動します。

```bash
pnpm dev
```

## 開発時の確認先

- `http://localhost:3000/` : 現在は Next.js 初期ページ
- `http://localhost:3000/lp` : 実装済みの LP

## よく使うコマンド

```bash
pnpm dev
pnpm build
pnpm lint
pnpm format
pnpm test
pnpm test:e2e
pnpm db:generate
pnpm db:migrate
pnpm db:push
pnpm db:studio
```

## メモ

- 環境変数は `lib/env.ts` で検証しています
- Prisma Client は `app/generated/prisma` に生成されます
- Prisma 利用時は `lib/prisma.ts` のシングルトンを使います
- 詳細要件は `docs/SPEC.md` を参照してください
