# チャット・メッセージ 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Chat_Service  
**関連モジュール**: Booking_Service, Notification_Service

---

## 要件 8: チャット・メッセージ

- **ユーザーストーリー:** 依頼者・フォトグラファーとして、撮影前の打ち合わせや場所の相談をチャットで行いたい。そうすることで、スムーズなコミュニケーションができる。

### 受け入れ基準

1. THE Chat_Service SHALL 予約が確定した依頼者とフォトグラファーの間にチャットルームを作成する
2. THE Chat_Service SHALL テキストメッセージの送受信をリアルタイムで提供する
3. THE Chat_Service SHALL 画像・PDF ファイル（最大 10MB）の送信を提供する
4. IF 送信ファイルが 10MB を超えるとき、THEN THE Chat_Service SHALL「ファイルサイズは 10MB 以下にしてください」というエラーを返す
5. WHEN 新しいメッセージが届いたとき、THE Notification_Service SHALL 受信者にプッシュ通知またはメール通知を送信する
6. THE Chat_Service SHALL メッセージの既読・未読状態を管理する
