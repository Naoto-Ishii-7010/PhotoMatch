# PhotoMatch

PhotoMatch は、写真撮影を依頼したい人と、趣味または副業で撮影を行うフォトグラファーをつなぐ C2C 写真撮影マッチングサービスです。

日本国内向け、日本語のみを前提としたサービスとして設計しています。

## サービス概要

- 依頼者は、家族写真、プロフィール写真、記念日、ペット、イベント撮影などを気軽に依頼できます
- フォトグラファーは、自分の作品を公開し、無理のない範囲で撮影依頼を受けられます
- プロスタジオほど大掛かりではないが、スマホ写真以上の品質を求める需要を想定しています

MVP では、以下のような体験を目指しています。

- Google 認証による登録・ログイン
- プロフィール管理
- ポートフォリオ管理
- フォトグラファー検索、作品検索
- 指名型依頼
- 公募型依頼と提案比較
- マッチ成立後の 1 対 1 チャット
- 通知機能
- 運営管理画面

## 技術スタック

- Next.js 16（App Router）
- React 19
- TypeScript
- Tailwind CSS 4
- Zod
- Auth.js / NextAuth.js
- Prisma
- PostgreSQL
- Vitest
- Playwright
- ESLint
- Prettier
- pnpm

## セットアップ

### 前提

- Node.js 20 以上を推奨
- pnpm を利用

### インストール

```bash
pnpm install
```

### 開発サーバー起動

```bash
pnpm dev
```

起動後は以下を確認できます。

- LP: `http://localhost:3000/lp`
- トップ: `http://localhost:3000/`

## 主要コマンド

```bash
pnpm dev            # 開発サーバー
pnpm build          # 本番ビルド
pnpm start          # 本番ビルドの起動
pnpm lint:check     # ESLint チェック
pnpm lint:fix       # ESLint 自動修正
pnpm format:check   # Prettier チェック
pnpm format:fix     # Prettier 整形
pnpm code:check     # ESLint + Prettier + TypeScript チェック
pnpm code:fix       # ESLint + Prettier 自動修正 + TypeScript チェック
pnpm typecheck      # TypeScript 型チェック
pnpm test           # Vitest
pnpm test:watch     # Vitest watch
pnpm test:coverage  # Vitest coverage
pnpm test:e2e       # Playwright
pnpm test:e2e:ui    # Playwright UI
```

## ディレクトリ概要

現在の主要ディレクトリは以下です。

```text
app/           Next.js App Router のルート
components/    LP 用の UI コンポーネント
docs/          サービス仕様、画面仕様、設計メモ
public/        画像などの静的ファイル
rules/         プロジェクト内ルールの整理
types/         共通型置き場
```

## ドキュメントの読み方

README は人向けの入口ドキュメントです。詳細は用途ごとに以下を参照してください。

- サービス全体の要件と業務ルール: [`docs/SPEC.md`](docs/SPEC.md)
- 画面仕様の全体像: [`docs/spec/ui/SPEC.md`](docs/spec/ui/SPEC.md)
- デザインメモ: `docs/design/`
- 開発ルール一覧: [`rules/README.md`](rules/README.md)
