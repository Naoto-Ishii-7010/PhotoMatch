# 運営管理 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Admin_Service  
**関連モジュール**: Auth_Service, Profile_Service, Payment_Service

---

## 要件 13: ユーザー管理（運営）

- **ユーザーストーリー:** 運営管理者として、ユーザーのステータス確認・違反報告対応を行いたい。そうすることで、プラットフォームの健全性を維持できる。

### 受け入れ基準

1. THE Admin_Service SHALL 管理者がユーザー一覧・ステータス・登録日時を確認できる管理画面を提供する
2. THE Admin_Service SHALL 管理者がユーザーアカウントを停止・再開できる機能を提供する
3. WHEN ユーザーアカウントが停止されたとき、THE Auth_Service SHALL 該当ユーザーのセッションを無効化する
4. THE Admin_Service SHALL 管理者が本人確認書類を審査して承認・拒否できる機能を提供する
5. THE Admin_Service SHALL 管理者が違反報告を確認して対応ステータスを管理できる機能を提供する

---

## 要件 14: 取引・決済管理（運営）

- **ユーザーストーリー:** 運営管理者として、キャンセル・返金処理・売上手数料を管理したい。そうすることで、健全な取引環境を維持できる。

### 受け入れ基準

1. THE Admin_Service SHALL 管理者が取引一覧・ステータス・金額を確認できる機能を提供する
2. THE Admin_Service SHALL 管理者が手動でキャンセル・返金処理を実行できる機能を提供する
3. WHEN 返金処理が実行されたとき、THE Payment_Service SHALL 5 営業日以内に依頼者の支払い方法に返金する
4. THE Admin_Service SHALL プラットフォーム手数料率を設定・変更できる機能を提供する
5. THE Admin_Service SHALL 期間別の売上・手数料収入のレポートを提供する
