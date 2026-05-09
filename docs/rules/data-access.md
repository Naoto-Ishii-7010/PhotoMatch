# データアクセス方針

- アプリの DB 読み書きは Prisma 経由のサーバーアクセスを原則とする
- Supabase Data API や `supabase-js` による DB 直アクセスは採用しない
- `anon key` は DB アクセス用途では使用しない
- Server Component の read は DAL / repository を経由し、その内部で Prisma にアクセスする
- Client Component の mutation は Server Action を起点に実装する。ただし認証開始など外部認証 SDK の都合がある処理は例外とする
- Route Handler は OAuth callback / webhook / 外部クライアント向け API など、HTTP エンドポイントが必要な場合に限定する
- 認可は Server Action、Route Handler、service、permission 層で実装する
- チャットのメッセージ受信は Supabase Realtime / SSE ではなくポーリングで実装する
- 画像保存には Supabase Storage を利用する
- アバター画像の公開方式は機能要件に応じて別途定義する
- ポートフォリオ画像は private bucket を原則とする
- ポートフォリオ画像のアップロードは signed upload URL、表示は signed download URL を原則とする
- 非公開作品を public bucket や恒久公開 URL で配信しない
