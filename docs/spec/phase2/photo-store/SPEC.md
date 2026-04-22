# 写真販売・購入 仕様書

**実装フェーズ**: Phase 2 (収益化・品質向上)  
**担当サービス**: Photo_Store_Service  
**関連モジュール**: Payment_Service, Delivery_Service

---

## 要件 16: 写真販売登録（フォトグラファー）

- **ユーザーストーリー:** フォトグラファーとして、自身の作品に価格を設定して販売公開したい。そうすることで、撮影依頼以外の収益を得られる。

### 受け入れ基準

1. THE Photo_Store_Service SHALL フォトグラファーが作品画像に価格・タイトル・説明を設定して販売公開できる機能を提供する
2. THE Photo_Store_Service SHALL 販売価格の最低金額を 100 円とする
3. IF 設定価格が 100 円未満のとき、THEN THE Photo_Store_Service SHALL「販売価格は 100 円以上に設定してください」というエラーを返す
4. THE Photo_Store_Service SHALL フォトグラファーが作品の公開・非公開を切り替えられる機能を提供する
5. WHEN 作品が購入されたとき、THE Payment_Service SHALL 手数料を差し引いた金額をフォトグラファーの売上残高に加算する

---

## 要件 17: 写真購入（依頼者）

- **ユーザーストーリー:** 依頼者として、公開されているおすすめ写真を選択・購入したい。そうすることで、気に入った作品を入手できる。

### 受け入れ基準

1. THE Photo_Store_Service SHALL 依頼者が公開中の作品を閲覧・購入できる機能を提供する
2. WHEN 依頼者が作品を購入したとき、THE Delivery_Service SHALL 高解像度画像のダウンロード URL を発行する
3. THE Photo_Store_Service SHALL 購入前の作品プレビューにウォーターマークを付与する
4. THE Photo_Store_Service SHALL 購入済み作品の一覧を依頼者のマイページに表示する

---

## 要件 18: ウォーターマーク

- **ユーザーストーリー:** フォトグラファーとして、購入前の写真に透かしを付与して不正保存を防止したい。そうすることで、作品の著作権を保護できる。

### 受け入れ基準

1. THE Photo_Store_Service SHALL 未購入の作品プレビュー画像にウォーターマークを付与して配信する
2. THE Photo_Store_Service SHALL ウォーターマークを画像の中央に配置し、元画像の視認性を損なわない透明度で表示する
3. WHEN 作品が購入されたとき、THE Delivery_Service SHALL ウォーターマークなしの高解像度画像を提供する
