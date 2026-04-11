/**
 * サービス概要セクション
 * - PDFのP2: 「オンデマンド撮影予約」と「ストックフォト販売」のベン図イメージ
 * - 2つの価値軸と中央の統合価値を視覚的に表現
 */
export default function ServiceOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-lp-dark mb-4">
            2つの価値を、1つのプラットフォームで
          </h2>
          <p className="text-lp-gray text-lg max-w-xl mx-auto leading-relaxed">
            撮影の依頼から写真の購入まで、フォト体験をすべてここで完結できます。
          </p>
        </div>

        {/* ベン図風の2カラムレイアウト */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* 左: オンデマンド撮影予約 */}
          <div className="bg-lp-cream rounded-3xl p-8 text-center border border-lp-gold-light">
            <div className="w-16 h-16 rounded-full bg-lp-gold/20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-lp-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-lp-dark mb-3">
              オンデマンド
              <br />
              撮影予約
            </h3>
            <p className="text-lp-gray text-sm leading-relaxed">
              指名型・公募型による柔軟な撮影依頼。希望のフォトグラファーを見つけて、大切なシーンを依頼できます。
            </p>
          </div>

          {/* 中央: シームレスなプラットフォーム */}
          <div className="bg-lp-gold rounded-3xl p-8 text-center shadow-lg md:-mx-2 md:z-10 relative">
            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              シームレスな
              <br />
              プラットフォーム
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              検索・チャット・決済・納品まで、すべてが一元管理。面倒な手続きなしで、撮影体験に集中できます。
            </p>
          </div>

          {/* 右: ストックフォト販売 */}
          <div className="bg-lp-cream rounded-3xl p-8 text-center border border-lp-gold-light">
            <div className="w-16 h-16 rounded-full bg-lp-green/20 flex items-center justify-center mx-auto mb-6">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-lp-dark mb-3">
              ストックフォト
              <br />
              販売
            </h3>
            <p className="text-lp-gray text-sm leading-relaxed">
              過去の作品の即時購入・ダウンロード。フォトグラファーの作品を気軽に入手できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
