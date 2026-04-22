# 通知機能 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Notification_Service  
**関連モジュール**: Booking_Service, Chat_Service, Payment_Service

---

## 要件 12: 通知機能

- **ユーザーストーリー:** 依頼者・フォトグラファーとして、依頼・メッセージ・支払い等の重要なイベントをリアルタイムで通知されたい。そうすることで、迅速に対応できる。

### 受け入れ基準

1. THE Notification_Service SHALL 予約リクエスト・承認・拒否・キャンセルのイベントで対象ユーザーに通知を送信する
2. THE Notification_Service SHALL 新着メッセージのイベントで受信者に通知を送信する
3. THE Notification_Service SHALL 支払い完了・受領完了・振込完了のイベントで対象ユーザーに通知を送信する
4. THE Notification_Service SHALL アプリ内通知とメール通知の両方を提供する
5. THE Notification_Service SHALL ユーザーが通知種別ごとに受信設定を変更できる機能を提供する
