# 撮影依頼・予約 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Booking_Service  
**関連モジュール**: Schedule_Service, Notification_Service, Payment_Service

---

## 要件 6: 撮影依頼（指名型）

- **ユーザーストーリー:** 依頼者として、特定のフォトグラファーの空き状況を確認して予約したい。そうすることで、希望のフォトグラファーに撮影を依頼できる。

### 受け入れ基準

1. THE Booking_Service SHALL 依頼者が特定のフォトグラファーの空き日時スロットを選択して予約リクエストを送信できる機能を提供する
2. WHEN 予約リクエストが送信されたとき、THE Booking_Service SHALL フォトグラファーに通知を送信する
3. WHEN フォトグラファーが予約を承認したとき、THE Booking_Service SHALL 予約ステータスを「確定」に変更し、依頼者に通知する
4. WHEN フォトグラファーが予約を拒否したとき、THE Booking_Service SHALL 予約ステータスを「拒否」に変更し、依頼者に通知する
5. IF フォトグラファーが 48 時間以内に応答しないとき、THEN THE Booking_Service SHALL 予約リクエストを自動的にキャンセルし、依頼者に通知する
6. THE Booking_Service SHALL 依頼者が撮影場所・希望内容・予算を入力できるフォームを提供する

---

## 要件 7: 撮影依頼（公募型）

- **ユーザーストーリー:** 依頼者として、日時・予算・希望内容を投稿してフォトグラファーからの応募を募りたい。そうすることで、複数のフォトグラファーから提案を受けられる。

### 受け入れ基準

1. THE Booking_Service SHALL 依頼者が撮影日時・場所・予算・希望内容を含む公募依頼を投稿できる機能を提供する
2. WHEN 公募依頼が投稿されたとき、THE Booking_Service SHALL 条件に合うフォトグラファーに通知を送信する
3. THE Booking_Service SHALL フォトグラファーが公募依頼に対して提案（金額・コメント）を送信できる機能を提供する
4. WHEN 依頼者が提案を承認したとき、THE Booking_Service SHALL 予約ステータスを「確定」に変更し、双方に通知する
5. THE Booking_Service SHALL 公募依頼の有効期限を投稿から 7 日間とする
6. WHEN 公募依頼が期限切れになったとき、THE Booking_Service SHALL ステータスを「期限切れ」に変更する
