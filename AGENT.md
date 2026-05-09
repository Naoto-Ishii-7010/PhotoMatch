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
- Linter: ESLint
- フォーマッター: Prettier

## ディレクトリ構成

```
photo-match/
  ├── app/
  │   ├── layout.tsx                    # ルートレイアウト
  │   ├── page.tsx                      # ルートページ
  │   ├── globals.css                   # グローバルスタイル
  │   ├── favicon.ico
  │   │
  │   ├── (marketing)/                  # LP・案内ページなどの公開向けルートグループ
  │   ├── (public)/                     # 未ログインでも閲覧できるルートグループ
  │   ├── (auth)/                       # ログイン・登録などの認証系ルートグループ
  │   ├── (member)/                     # ログイン後ユーザー向けルートグループ
  │   ├── (admin)/                      # 管理者向けルートグループ
  │   │
  │   ├── api/                          # Route Handler のみを置く
  │   │   └── ...
  │   │
  │   ├── not-found.tsx                 # 404 ページ
  │   ├── error.tsx                     # エラーページ
  │   └── loading.tsx                   # ローディング UI
  │
  ├── features/                         # 業務機能ごとの主置き場
  │   ├── some-feature/
  │   │   ├── components/               # その機能専用の UI コンポーネント
  │   │   ├── hooks/                    # その機能専用の hook
  │   │   ├── api-client/               # Route Handler を呼び出す関数
  │   │   ├── schemas.ts                # Zod スキーマ
  │   │   ├── types.ts                  # その機能内で使う型
  │   │   ├── constants.ts              # その機能内の定数
  │   │   ├── helpers.ts                # 純粋関数・軽量な補助関数
  │   │   ├── some-feature.service.ts   # 業務ロジック
  │   │   └── some-feature.repository.ts# DB とのやり取り
  │   └── shared/                       # 複数featureで共有するが、業務知識を持つ部品（業務知識がなければ components/ または lib/ へ）
  │
  ├── components/
  │   ├── ui/                           # 業務知識を持たない汎用 UI
  │   └── layout/                       # 複数画面で使うレイアウト部品
  │
  ├── server/                           # サーバー専用コード
  │   ├── auth/                         # 認証・セッション・ガード
  │   ├── db/                           # Prisma など DB 関連
  │   ├── permissions/                  # 権限制御・認可
  │   ├── services/                     # 複数機能をまたぐ業務処理
  │   ├── repositories/                 # 共通化された永続化処理
  │   └── errors/                       # 業務エラー・HTTP エラー変換
  │
  ├── lib/                              # 軽量な共通 util
  │   ├── constants.ts                  # アプリ全体で使う定数
  │   ├── utils.ts                      # 汎用ユーティリティ
  │   ├── date.ts                       # 日付処理
  │   └── format.ts                     # 表示整形
  │
  ├── types/                            # feature をまたぐ共通型
  ├── public/                           # 静的ファイル
  ├── docs/                             # 仕様書・設計メモ
  ├── tests/                            # 横断的なテストを置く場合のみ使用
  ├── prisma/                           # Prisma schema / migrations / seed
  └── proxy.ts                          # 必要な場合のみ使用するルーティング制御
```

## コーディング規約

- コンポーネントファイル名: `PascalCase.tsx`
- ディレクトリ名: `kebab-case`
- 型定義は `interface` より `type` を基本とする
- コンポーネントは Server Component を基本とし、Client Component は最小限にとどめる
- コメントは日本語で細かく書く

## 禁止事項

- `any` 型を使わない
- 将来的なネイティブアプリ化も踏まえ、Server Actionsは使用せず、Route Handler（API Routes）を使用してクライアントとサーバーの境界を明確にすること。
- Route Handler では必ず認証チェックとロール確認を行う
- 更新処理を行う際は、必ずフロントエンド・バックエンド両方でバリデーションを行う。

## テスト方針

- **Vitest（Unit/Integration）**: ビジネスロジック・Route Handler・バリデーション等の重要機能のみ
- **Playwright（E2E）**: 主要なユーザーフロー（登録・ログイン・予約確定等）の重要機能のみ。e2eは開発者から依頼がない限りは実装しなくて良い。

## 開発

```bash
pnpm dev        # 開発サーバーを起動
pnpm build      # 本番用ビルド
pnpm lint:check # ESLint を実行
pnpm code:check # ESLint と Prettier と TypeScript を実行
```

- コード生成、変更、削除時には、`pnpm code:check` を実行すること

- リリースまでのTODOは `docs/tasks.md` に記載すること。完了したタスクはチェックを入れること。

## 参照ルール

- ルールは `/docs/rules/README.md` に列挙されたファイルを参照すること

## 仕様書

- プロジェクト全体の概要、共通ルール、機能一覧は [`docs/SPEC.md`](docs/SPEC.md) を参照すること
- 各機能・各画面の詳細仕様は `docs/spec/domain/**/SPEC.md` と `docs/spec/ui/**/SPEC.md` を参照すること

## カスタムスキル

プロジェクト固有のスキルは `.agent/skills/` にあります。使い方は各ファイルを参照してください。
