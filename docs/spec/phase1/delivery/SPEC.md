# 写真納品 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Delivery_Service  
**関連モジュール**: Booking_Service, Payment_Service, Notification_Service

---

## 要件 9: 写真納品

- **ユーザーストーリー:** フォトグラファーとして、撮影した写真データをアップロードして依頼者に納品したい。そうすることで、安全かつ確実に成果物を届けられる。

### 受け入れ基準

1. THE Delivery_Service SHALL フォトグラファーが撮影済み写真を予約に紐づけてアップロードできる機能を提供する
2. THE Delivery_Service SHALL アップロードされた写真に対してダウンロード用 URL を生成する
3. WHEN 写真がアップロードされたとき、THE Delivery_Service SHALL 依頼者に納品通知を送信する
4. THE Delivery_Service SHALL 依頼者が納品物を確認して「受領完了」を承認できる機能を提供する
5. WHEN 依頼者が受領完了を承認したとき、THE Payment_Service SHALL エスクロー保留中の代金をフォトグラファーに送金する
6. THE Delivery_Service SHALL 納品 URL の有効期限を受領完了から 30 日間とする
