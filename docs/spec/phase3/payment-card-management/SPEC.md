# クレジットカード詳細管理 仕様書

**実装フェーズ**: Phase 3 (運営強化・拡張)  
**担当サービス**: Payment_Service  
**関連モジュール**: Auth_Service

---

## 要件 19: オンライン決済（クレジットカード）

- **ユーザーストーリー:** 依頼者として、クレジットカードでオンライン決済したい。そうすることで、安全かつ簡単に支払いができる。

### 受け入れ基準

1. THE Payment_Service SHALL Visa・Mastercard・JCB・American Express のクレジットカード決済を提供する
2. THE Payment_Service SHALL カード情報を PCI DSS 準拠の決済プロバイダー（Stripe 等）に委託し、System 内にカード番号を保存しない
3. IF 決済が失敗したとき、THEN THE Payment_Service SHALL「決済に失敗しました。カード情報をご確認ください」というエラーを返す
4. WHEN 決済が完了したとき、THE Payment_Service SHALL 依頼者にメールで領収書を送信する
5. THE Payment_Service SHALL 依頼者が複数のクレジットカードを登録・管理できる機能を提供する
