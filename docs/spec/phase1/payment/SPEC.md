# 決済・売上管理 仕様書

**実装フェーズ**: Phase 1 (MVP)  
**担当サービス**: Payment_Service  
**関連モジュール**: Booking_Service, Delivery_Service, Notification_Service

---

## 要件 10: 決済保護（エスクロー）

- **ユーザーストーリー:** 依頼者・フォトグラファーとして、納品完了まで代金が安全に保護されることを確認したい。そうすることで、安心して取引できる。

### 受け入れ基準

1. WHEN 予約が確定したとき、THE Payment_Service SHALL 依頼者に対して代金の事前決済を要求する
2. WHILE 代金がエスクロー保留中のとき、THE Payment_Service SHALL フォトグラファーへの送金を保留する
3. WHEN 依頼者が受領完了を承認したとき、THE Payment_Service SHALL 手数料を差し引いた金額をフォトグラファーの売上残高に加算する
4. IF 依頼者が納品から 7 日以内に受領完了を承認しないとき、THEN THE Payment_Service SHALL 自動的に受領完了とみなし、フォトグラファーへの送金処理を行う
5. THE Payment_Service SHALL クレジットカード決済（Visa・Mastercard・JCB・American Express）を提供する

---

## 要件 11: 売上・振込管理

- **ユーザーストーリー:** フォトグラファーとして、売上を確認して自身の口座に振込申請したい。そうすることで、報酬を適切に受け取れる。

### 受け入れ基準

1. THE Payment_Service SHALL フォトグラファーが売上残高・取引履歴を確認できるダッシュボードを提供する
2. THE Payment_Service SHALL フォトグラファーが振込申請できる機能を提供する
3. THE Payment_Service SHALL 振込申請の最低金額を 1,000 円とする
4. IF 振込申請額が売上残高を超えるとき、THEN THE Payment_Service SHALL「残高が不足しています」というエラーを返す
5. WHEN 振込申請が承認されたとき、THE Payment_Service SHALL 3 営業日以内に指定口座へ振込を実行する
