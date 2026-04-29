# **要件定義書 — PhotoMatch App**

## **はじめに**

PhotoMatch は、写真撮影を依頼したいユーザー（依頼者）とフォトグラファーをマッチングするプラットフォームです。

依頼者は指名型・公募型の2通りで撮影を依頼でき、フォトグラファーはポートフォリオ公開・スケジュール管理・写真納品・写真販売を一元管理できます。

実装はフェーズ1（MVP）→ フェーズ2（収益化・品質向上）→ フェーズ3（運営強化）の順で段階的に行います。

---

## **用語集**

| 用語                     | 定義                                                 |
| ------------------------ | ---------------------------------------------------- |
| **System**               | PhotoMatch プラットフォーム全体                      |
| **Auth_Service**         | 認証・アカウント管理を担うモジュール                 |
| **Profile_Service**      | プロフィール・本人確認を担うモジュール               |
| **Search_Service**       | フォトグラファー検索を担うモジュール                 |
| **Booking_Service**      | 撮影依頼・予約を担うモジュール                       |
| **Chat_Service**         | チャット・メッセージを担うモジュール                 |
| **Portfolio_Service**    | ポートフォリオ登録・管理を担うモジュール             |
| **Schedule_Service**     | スケジュール管理を担うモジュール                     |
| **Delivery_Service**     | 写真納品を担うモジュール                             |
| **Payment_Service**      | 決済・エスクロー・売上管理を担うモジュール           |
| **Notification_Service** | 通知配信を担うモジュール                             |
| **Review_Service**       | レビュー・評価を担うモジュール                       |
| **Photo_Store_Service**  | 写真販売・購入を担うモジュール                       |
| **Admin_Service**        | 運営管理を担うモジュール                             |
| **依頼者**               | 撮影を依頼するユーザー                               |
| **フォトグラファー**     | 撮影を提供するユーザー                               |
| **指名型依頼**           | 特定のフォトグラファーを指定して行う予約             |
| **公募型依頼**           | 日時・予算を公開してフォトグラファーの応募を募る依頼 |
| **エスクロー**           | 納品完了まで事務局が代金を預かる仕組み               |

---

## **実装フェーズまとめ**

### **Phase 1 (MVP) — コア機能**

| 要件       | 機能                             | 仕様書                                                     | 担当サービス         |
| ---------- | -------------------------------- | ---------------------------------------------------------- | -------------------- |
| 要件1      | 会員登録・ログイン               | [auth/SPEC.md](./spec/phase1/auth/SPEC.md)                 | Auth_Service         |
| 要件2      | プロフィール管理                 | [profile/SPEC.md](./spec/phase1/profile/SPEC.md)           | Profile_Service      |
| 要件3      | フォトグラファー検索             | [search/SPEC.md](./spec/phase1/search/SPEC.md)             | Search_Service       |
| 要件4      | ポートフォリオ登録               | [portfolio/SPEC.md](./spec/phase1/portfolio/SPEC.md)       | Portfolio_Service    |
| 要件5      | スケジュール管理                 | [schedule/SPEC.md](./spec/phase1/schedule/SPEC.md)         | Schedule_Service     |
| 要件6, 7   | 撮影依頼（指名型・公募型）       | [booking/SPEC.md](./spec/phase1/booking/SPEC.md)           | Booking_Service      |
| 要件8      | チャット・メッセージ             | [chat/SPEC.md](./spec/phase1/chat/SPEC.md)                 | Chat_Service         |
| 要件9      | 写真納品                         | [delivery/SPEC.md](./spec/phase1/delivery/SPEC.md)         | Delivery_Service     |
| 要件10, 11 | 決済保護（エスクロー）・売上管理 | [payment/SPEC.md](./spec/phase1/payment/SPEC.md)           | Payment_Service      |
| 要件12     | 通知機能                         | [notification/SPEC.md](./spec/phase1/notification/SPEC.md) | Notification_Service |
| 要件13, 14 | 運営管理（ユーザー・取引）       | [admin/SPEC.md](./spec/phase1/admin/SPEC.md)               | Admin_Service        |

### **Phase 2 (収益化・品質向上)**

| 要件           | 機能                             | 仕様書                                                   | 担当サービス        |
| -------------- | -------------------------------- | -------------------------------------------------------- | ------------------- |
| 要件15         | レビュー投稿                     | [review/SPEC.md](./spec/phase2/review/SPEC.md)           | Review_Service      |
| 要件16, 17, 18 | 写真販売・購入・ウォーターマーク | [photo-store/SPEC.md](./spec/phase2/photo-store/SPEC.md) | Photo_Store_Service |

### **Phase 3 (運営強化・拡張)**

| 要件   | 機能                     | 仕様書                                                                           | 担当サービス    |
| ------ | ------------------------ | -------------------------------------------------------------------------------- | --------------- |
| 要件19 | クレジットカード詳細管理 | [payment-card-management/SPEC.md](./spec/phase3/payment-card-management/SPEC.md) | Payment_Service |

---

## **サービス間依存関係**

以下は主要なサービス間の依存関係です:

### **認証・プロフィール系**

- **Profile_Service** → **Auth_Service**: ユーザー認証情報の参照
- **Admin_Service** → **Auth_Service**: アカウント停止時のセッション無効化

### **検索・予約系**

- **Search_Service** → **Profile_Service**, **Portfolio_Service**: フォトグラファー情報の取得
- **Booking_Service** → **Schedule_Service**: 空き状況の確認・予約時のスロット更新
- **Booking_Service** → **Payment_Service**: 予約確定時の事前決済
- **Booking_Service** → **Notification_Service**: 予約リクエスト・承認・拒否通知

### **コミュニケーション系**

- **Chat_Service** → **Booking_Service**: 確定予約に紐づくチャットルーム作成
- **Chat_Service** → **Notification_Service**: 新着メッセージ通知

### **納品・決済系**

- **Delivery_Service** → **Booking_Service**: 予約に紐づく写真納品
- **Delivery_Service** → **Payment_Service**: 受領完了時のエスクロー解放
- **Delivery_Service** → **Notification_Service**: 納品通知
- **Payment_Service** → **Notification_Service**: 支払い完了・振込完了通知

### **レビュー・販売系**

- **Review_Service** → **Booking_Service**, **Delivery_Service**: 受領完了後のレビュー投稿
- **Photo_Store_Service** → **Payment_Service**: 写真購入時の決済処理
- **Photo_Store_Service** → **Delivery_Service**: 購入作品のダウンロードURL発行

### **運営管理系**

- **Admin_Service** → **Auth_Service**, **Profile_Service**, **Payment_Service**: 各種管理機能

---

## **詳細仕様の参照方法**

各機能の詳細な要件・受け入れ基準は、上記テーブルのリンクから対応する仕様書を参照してください。

仕様書は以下のディレクトリ構造で整理されています:

```
docs/
├── SPEC.md (本ファイル)
└── spec/
    ├── phase1/  # MVP機能（11モジュール）
    ├── phase2/  # 収益化・品質向上（2モジュール）
    └── phase3/  # 運営強化（1モジュール）
```
