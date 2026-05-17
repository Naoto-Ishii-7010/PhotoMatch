# データアクセス方針

- アプリの DB 読み書きは Prisma 経由のサーバーアクセスを原則とする
- Supabase Data API や `supabase-js` による DB 直アクセスは採用しない
- `anon key` は DB アクセス用途では使用しない
- `service_role` を使う処理はサーバー専用コードに閉じ込め、Client Component やブラウザへ露出させない
- Server Component の read は DAL / repository を経由し、その内部で Prisma にアクセスする
- Client Component の mutation は Server Action を起点に実装する。ただし認証開始など外部認証 SDK の都合がある処理は例外とする
- Route Handler は OAuth callback / webhook / 外部クライアント向け API など、HTTP エンドポイントが必要な場合に限定する
- 認可は Server Action、Route Handler、service、permission 層で実装する
- Supabase の exposed schema（`public` を含む）に置くアプリ用テーブルは、DB 直アクセスを採用しない場合でも RLS を必須とする
- RLS はアプリ層の認可を置き換えるものではなく、Data API の誤公開や将来のアクセス経路追加に備える防御層として扱う
- 各テーブルには少なくとも `anon` / `authenticated` / `service_role` の想定アクセス可否を明文化し、必要な `SELECT` / `INSERT` / `UPDATE` / `DELETE` policy を作成する
- チャットのメッセージ受信は Supabase Realtime / SSE ではなくポーリングで実装する
- 画像保存には Supabase Storage を利用する
- アバター画像の公開方式は機能要件に応じて別途定義する
- ポートフォリオ画像は private bucket を原則とする
- private bucket の RLS を有効にしても、ブラウザ配信用の公開 URL が不要になるわけではない。配信は signed download URL または認可付きサーバー中継のいずれかで設計する
- ポートフォリオ画像のアップロードは signed upload URL、表示は signed download URL を原則とする
- 非公開作品を public bucket や恒久公開 URL で配信しない

## Prisma で表現しない DB 制約

- Prisma schema に出ない `CHECK` 制約や部分 unique index は、必要に応じて SQL migration で追加する
- そのような制約を追加した場合は、対象テーブル、意図、制約名をこのファイルにも追記する
- 現在の手書き制約は [prisma/migrations/20260517115918_add_sql_integrity_constraints/migration.sql](/Users/s31653/Application/photo-match/prisma/migrations/20260517115918_add_sql_integrity_constraints/migration.sql:1) にある
- `Follow`: 自己フォロー禁止
- `DirectRequest`: 自己依頼禁止、`PENDING` 状態の同一依頼者・同一相手への重複依頼禁止
- `ChatRoom`: `directRequestId` と `openRequestId` のどちらか片方にだけ紐づく
- `Report`: 対象列の多重セット禁止、`targetType` と対象列の整合、解決状態と `resolved*` / `resolution*` 列の整合
- `AuditLog`: 対象列の多重セット禁止、`actionType` と対象列の整合
- `Notification`: `SYSTEM` 通知は `targetId` を持たず、それ以外は `targetId` を必須とする
