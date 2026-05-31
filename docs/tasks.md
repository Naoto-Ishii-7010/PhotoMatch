# リリースチェックリスト

リリースまでに対応すべき作業を時系列順にまとめた一覧。完了したものは `[x]` に変更する。

優先度：🔴 必須 / 🟡 推奨 / 🟢 任意

---

## 完了済み

- [x] ドキュメント整備（全体仕様・機能仕様・画面仕様・デザイン仕様）
- [x] 技術選定・パッケージインストール
- [x] Supabase プロジェクト接続準備（Prisma 接続・MCP/Skills 設定）
- [x] Supabase Auth 設定（Google認証）
- [x] Skills / MCP 設定
- [x] LP 実装
- [x] ESLint / Prettier 設定
- [x] Figma デザイン作成

---

## Step 1: インフラ・環境構築

他のすべての作業の前提となる基盤を整える。

- [x] [インフラ 🔴] Vercel プロジェクト作成・デプロイ設定
- [x] [インフラ 🔴] 環境変数の整理（開発/本番分離）と Vercel への登録
- [x] [インフラ 🔴] Supabase Data API を使わない前提のデータアクセス方針確定（DB は Prisma 経由、anon key 不使用、exposed schema は RLS 必須）
- [x] [インフラ 🔴] Supabase Storage バケット作成とRLS設定（アバター・ポートフォリオ画像）
- [ ] [CI/CD 🔴] GitHub Actions CI パイプライン（lint・typecheck・test を PR 時に実行）
- [ ] [インフラ 🟡] Supabase Pooler（コネクションプール）設定
- [ ] [インフラ 🟡] カスタムドメイン設定

---

## Step 2: DB スキーマ設計・マイグレーション

現状は認証関連の Prisma ドメインモデルを未定義とし、以下を追加する。

- [x] DB 🔴] `User` モデル追加（Supabase Auth と紐づく、メール・名前・ロール・状態など）
- [x] [DB 🔴] `User` へプロフィール項目統合（表示名・アバター・自己紹介・活動エリア・ジャンル）
- [x] [DB 🔴] `Portfolio` モデル追加（作品画像・タイトル・説明・公開フラグ）
- [x] [DB 🔴] `DirectRequest` モデル追加（指名型依頼・状態管理）
- [x] [DB 🔴] `OpenRequest` モデル追加（公募型依頼・募集締切・状態管理）
- [x] [DB 🔴] `Proposal` モデル追加（公募への提案・金額・状態）
- [x] [DB 🔴] `ChatRoom` モデル追加（案件に紐づく 1 対 1 チャットルーム）
- [x] [DB 🔴] `Message` モデル追加（本文・既読フラグ・送信者）
- [x] [DB 🔴] `Follow` モデル追加（フォロー関係）
- [x] [DB 🔴] `Notification` モデル追加（種別・既読・遷移先）
- [x] [DB 🔴] `Report` モデル追加（通報対象種別・理由・対応状況）
- [x] [DB 🔴] `AuditLog` モデル追加（管理操作の監査ログ）
- [x] [DB 🔴] 管理者ロール追加（`User` への `role` フィールド、または `AdminUser` モデル）
- [x] [DB 🔴] 共通 enum 追加（ジャンル・都道府県・案件状態・通知種別）
- [x] [DB 🔴] Prisma で表現できない DB 制約を SQL migration で追加（自己フォロー禁止・案件重複防止・対象排他制約など）
- [ ] [DB 🟡] 検索掲載条件と一覧取得を支える index / unique 制約の見直し
- [ ] [DB 🟡] exposed schema の全アプリテーブルで RLS を有効化
- [ ] [DB 🟡] 各テーブルの RLS policy 定義（`anon` / `authenticated` / `service_role` / 管理者のアクセス可否整理を含む）

---

## Step 3: 認証・セキュリティ基盤

機能実装の前に、アクセス制御の共通基盤を整える。

- [x] [認証 🔴] Server Action / Route Handler 共通の認証チェック・ロール確認ヘルパー実装（`server/auth/`）
- [x] [認証 🔴] 管理者ロールの判定実装（`server/permissions/`）
- [x] [認証 🔴] 停止済みアカウントのログイン拒否（auth コールバック実装）
- [x] [認証 🔴] 停止済みユーザーの既存セッション無効化
- [ ] [認証 🟡] 規約同意フローの構築
- [ ] [認証 🟡] セッション有効期限設定（Supabase Proプランでないと設定できない）
- [ ] [認証 🟡] CSRF / CORS 設定確認

---

## Step 4: 共通 UI・レイアウト基盤

各機能画面で使う共通部品を先に整備する。

- [x] [UI 🔴] 汎用 UI コンポーネント整備（Button・Input・Modal・Toast 等、`components/ui/`）
- [x] [UI 🔴] ログイン画面（`/(auth)/login`）
- [x] [UI 🔴] サービス内Layout.tsx（グローバルヘッダー・フッター）の実装（ナビ・通知バッジ・アバター・ログイン・ログアウト）
- [ ] [UI 🟡] 利用規約ページ
- [ ] [UI 🟡] プライバシーポリシーページ
- [ ] [UI 🟡] 404 ページ（`not-found.tsx`）
- [ ] [UI 🟡] エラーページ（`error.tsx`）
- [ ] [UI 🟡] ローディング UI（`loading.tsx`・Suspense）

---

## Step 5: 画像アップロード基盤

プロフィール・ポートフォリオで使う画像処理を共通化する。

- [ ] [画像 🔴] Supabase Storage クライアント実装（`server/` 配下）
- [ ] [画像 🔴] アバター画像アップロード Server Action（10MB 以下・JPEG/PNG/WEBP）
- [ ] [画像 🔴] ポートフォリオ画像アップロード Server Action
- [ ] [画像 🔴] ストレージへの不正アクセス防止（signed upload URL / signed download URL、portfolio は private bucket）
- [ ] [画像 🟡] サムネイル生成（Supabase Image Transformation または外部サービス）

---

## Step 6: プロフィール管理

他の多くの機能の前提となるため早めに実装する。

- [ ] [プロフィール 🔴] 初回ログイン時の利用規約・プライバシーポリシー同意フロー
- [ ] [プロフィール 🔴] プロフィール編集 Server Action（Zod バリデーション）
- [ ] [プロフィール 🔴] プロフィール編集画面（`/(member)/profile/edit`）
- [ ] [プロフィール 🔴] 初回登録後プロフィール初期設定画面への誘導
- [ ] [プロフィール 🔴] フォトグラファー公開条件チェックロジック（表示名・自己紹介・エリア・ジャンル・公開ポートフォリオ1件以上）

---

## Step 7: ポートフォリオ管理

検索掲載の前提条件となる機能。

- [ ] [ポートフォリオ 🔴] ポートフォリオ CRUD Server Action
- [ ] [ポートフォリオ 🔴] 公開/非公開切り替え Server Action
- [ ] [ポートフォリオ 🔴] ポートフォリオ管理画面（`/(member)/portfolio/manage`）
- [ ] [ポートフォリオ 🔴] ポートフォリオ詳細ページ（`/(public)/portfolio/[id]`）

---

## Step 8: 検索（依頼者向け）

未ログインでも使える公開機能。依頼者の主な導線となる。

- [ ] [検索 🔴] フォトグラファー検索クエリ実装（Server Component → DAL → Prisma、エリア・ジャンルフィルタ）
- [ ] [検索 🔴] ポートフォリオ検索クエリ実装（Server Component → DAL → Prisma）
- [ ] [検索 🔴] 検索画面（`/(public)/search`）
- [ ] [検索 🔴] フォトグラファー詳細ページ（`/(public)/photographer/[id]`）
- [ ] [検索 🟡] SEO 対応（OGP・メタデータ設定）

---

## Step 9: フォロー

検索・詳細ページと並行して実装できる。

- [ ] [フォロー 🔴] フォロー / アンフォロー Server Action
- [ ] [フォロー 🔴] フォロー一覧画面（`/(member)/follows`）

---

## Step 10: ホーム画面（ログイン後）

ログイン後のランディングページ。

- [ ] [ホーム 🔴] ホーム画面（`/(member)/home`）

---

## Step 11: 指名型依頼

依頼者が特定フォトグラファーへ直接依頼する機能。

- [ ] [指名依頼 🔴] 指名型依頼作成 Server Action
- [ ] [指名依頼 🔴] 依頼承認・辞退 Server Action
- [ ] [指名依頼 🔴] 承認期限切れ処理（72時間で自動キャンセル）
- [ ] [指名依頼 🔴] 依頼フォーム画面（`/(member)/direct-request/new`）
- [ ] [指名依頼 🔴] 依頼詳細画面（`/(member)/direct-request/[id]`）

---

## Step 12: 公募型依頼・提案

フォトグラファーが案件を見つけて提案する機能。

- [ ] [公募 🔴] 公募作成 Server Action
- [ ] [公募 🔴] 提案送信 Server Action
- [ ] [公募 🔴] 提案採用 Server Action（マッチ成立）
- [ ] [公募 🔴] 公募締切後の新規提案受付停止ロジック
- [ ] [公募 🔴] 公募作成画面（`/(member)/open-request/new`）
- [ ] [公募 🔴] 公募詳細画面（`/(public)/open-request/[id]`）
- [ ] [公募 🔴] 提案フォーム画面（`/(member)/open-request/[id]/propose`）
- [ ] [公募 🔴] 提案一覧・比較画面（`/(member)/open-request/[id]/proposals`）

---

## Step 13: 案件検索（フォトグラファー向け）

フォトグラファーが公募案件を探す機能。

- [ ] [案件検索 🔴] 公募検索クエリ実装（Server Component → DAL → Prisma、ジャンル・エリア・締切フィルタ）
- [ ] [案件検索 🔴] 案件検索画面（`/(member)/job-search`）

---

## Step 14: チャット

マッチ成立後の 1 対 1 コミュニケーション。準リアルタイム実装を含む。

- [ ] [チャット 🔴] チャットルーム自動生成（マッチ成立時）
- [ ] [チャット 🔴] メッセージ送信 Server Action
- [ ] [チャット 🔴] ポーリングによる準リアルタイム受信
- [ ] [チャット 🔴] 既読管理 Server Action
- [ ] [チャット 🔴] 完了操作 Server Action（`完了待ち` → `完了`）
- [ ] [チャット 🔴] 7日後自動完了バッチ / Cron ジョブ
- [ ] [チャット 🔴] チャット一覧画面（`/(member)/chat`）
- [ ] [チャット 🔴] チャットルーム画面（`/(member)/chat/[id]`）
- [ ] [チャット 🔴] 案件状態遷移（`進行中`・`完了待ち`・`完了`）の UI 反映

---

## Step 15: 通知

各機能と連動してイベントを届ける。

- [ ] [通知 🔴] 通知レコード生成ロジック（各イベントトリガー）
- [ ] [通知 🔴] アプリ内通知一覧取得クエリ実装（Server Component → DAL → Prisma）
- [ ] [通知 🔴] 通知既読 Server Action
- [ ] [通知 🔴] 通知一覧画面（`/(member)/notifications`）
- [ ] [通知 🔴] 未読件数バッジ（ヘッダーに反映）
- [ ] [通知 🟡] Web Push 通知（FCM または Web Push API）

---

## Step 16: 運営管理画面

サービスの安全性維持に必要な管理機能。

- [ ] [管理 🔴] 管理者専用ルートガード（`/(admin)/`）
- [ ] [管理 🔴] ユーザー一覧・検索クエリ実装（管理者向け、Server Component → DAL → Prisma）
- [ ] [管理 🔴] ユーザー詳細取得クエリと停止・再開 Server Action
- [ ] [管理 🔴] 通報受付 Server Action（一般ユーザーからの通報）
- [ ] [管理 🔴] 通報一覧・詳細クエリと対応記録 Server Action
- [ ] [管理 🔴] 監査ログ記録ロジック
- [ ] [管理 🔴] 管理者：ユーザー一覧画面（`/(admin)/users`）
- [ ] [管理 🔴] 管理者：ユーザー詳細画面（`/(admin)/users/[id]`）
- [ ] [管理 🔴] 管理者：通報一覧画面（`/(admin)/reports`）
- [ ] [管理 🔴] 管理者：通報詳細画面（`/(admin)/reports/[id]`）

---

## Step 17: テスト

- [ ] [テスト 🔴] Vitest：各 Server Action / Route Handler の認証・バリデーションテスト
- [ ] [テスト 🔴] Vitest：案件状態遷移ロジックのユニットテスト
- [ ] [テスト 🟡] Vitest：Zod スキーマのバリデーションテスト
- [ ] [テスト 🟡] Playwright E2E：登録・ログインフロー（依頼がある場合のみ）

---

## Step 18: CI/CD・運用

- [ ] [CI/CD 🟡] GitHub Actions：main マージ時に Vercel へ自動デプロイ
- [ ] [CI/CD 🟡] Vercel Preview デプロイ設定（PR ごと）
- [ ] [運用 🔴] 自動完了 Cron ジョブの本番設定（Vercel Cron または外部）
- [ ] [運用 🟡] エラー監視設定（Sentry 等）
- [ ] [運用 🟡] DB バックアップ設定確認（Supabase 自動バックアップ）

---

## Step 19: リリース前最終確認

- [ ] [確認 🔴] Route Handler を使う箇所に認証チェック・ロール確認が実装されていること
- [ ] [確認 🔴] フロント・バックエンド両方でバリデーションが実装されていること
- [ ] [確認 🔴] `any` 型が使われていないこと（`pnpm code:check` でエラーなし）
- [ ] [確認 🔴] Client Component からの更新処理が Server Action 経由であること（認証開始などの例外を除く）
- [ ] [確認 🔴] 停止ユーザーが各種機能を利用できないことの確認
- [ ] [確認 🔴] 未ログインユーザーが認証必須の Server Action / Route Handler を実行できないことの確認
- [ ] [確認 🔴] 管理者ロール以外が管理系 Server Action / Route Handler を実行できないことの確認
- [ ] [確認 🔴] exposed schema の全アプリテーブルで RLS が有効化されていること
- [ ] [確認 🔴] RLS policy により `anon` / `authenticated` / `service_role` の想定外アクセスが許可されていないこと
- [ ] [確認 🔴] 画像アップロードの上限・形式チェックが機能していること
- [ ] [確認 🔴] 本番環境変数がすべて Vercel に登録されていること
- [ ] [確認 🔴] `pnpm build` がエラーなく完了すること
- [ ] [確認 🔴] 利用規約・プライバシーポリシーの法的レビュー
- [ ] [確認 🔴] スマートフォン・PC の主要ブラウザで動作確認
