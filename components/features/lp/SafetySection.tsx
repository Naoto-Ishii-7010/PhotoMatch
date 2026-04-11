/**
 * 安心・安全セクション
 * - PDFのP10: 本人確認・エスクロー機能・ウォーターマーク付与の3つの安全機能を紹介
 */

/** 安全機能アイテムのProps型 */
type SafetyItemProps = {
  iconPath: string;
  title: string;
  description: string;
};

/** 安全機能アイテムコンポーネント */
function SafetyItem({ iconPath, title, description }: SafetyItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-lp-green/20 hover:border-lp-green/50 hover:shadow-md transition-all">
      {/* アイコン */}
      <div className="w-16 h-16 rounded-full bg-lp-green/10 flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-lp-green"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={iconPath}
          />
        </svg>
      </div>

      <h3 className="text-lg font-bold text-lp-dark mb-3">{title}</h3>
      <p className="text-lp-gray text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function SafetySection() {
  return (
    <section id="safety" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          {/* シールドアイコン */}
          <div className="w-20 h-20 rounded-full bg-lp-green/10 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-lp-green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-lp-dark mb-4">
            安心・安全な取引のために
          </h2>
          <p className="text-lp-gray text-lg max-w-xl mx-auto leading-relaxed">
            PhotoMatch
            は、依頼者とフォトグラファーが安心して取引できる環境を整えています。
          </p>
        </div>

        {/* 3つの安全機能 */}
        <div className="grid md:grid-cols-3 gap-6">
          <SafetyItem
            title="本人確認"
            description="免許証等の提出を必須化し、プラットフォームの信頼性を確保。管理者が審査してバッジを付与します。"
            iconPath="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
          <SafetyItem
            title="エスクロー機能"
            description="納品完了ボタンが押されるまで事務局が代金を保持し、金銭トラブルを防止。安全が確認されてから送金します。"
            iconPath="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
          <SafetyItem
            title="ウォーターマーク付与"
            description="写真購入前のプレビュー画像に自動で透かしを付与し、不正保存を防止。フォトグラファーの著作権を守ります。"
            iconPath="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </div>

        {/* 補足テキスト */}
        <p className="text-center text-lp-gray text-sm mt-10">
          ※ プラットフォーム手数料は取引成立時のみ発生します（20%）
        </p>
      </div>
    </section>
  );
}
