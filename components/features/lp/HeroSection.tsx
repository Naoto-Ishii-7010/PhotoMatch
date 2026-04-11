import Link from "next/link";

/**
 * LPヒーローセクション
 * - サービスのキャッチコピー・サブコピー・CTAボタンを配置
 * - PDFのP1デザイン: 左にテキスト、右にスマートフォンモックアップ
 */
export default function HeroSection() {
  return (
    <section className="bg-lp-cream min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* テキストエリア */}
          <div>
            <p className="text-lp-gold text-sm font-medium tracking-widest uppercase mb-4">
              フォトマッチングプラットフォーム
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lp-dark leading-tight mb-6">
              プロの技術を
              <br />
              手軽に。
            </h1>
            <p className="text-lp-gray text-lg leading-relaxed mb-8 max-w-md">
              写真を依頼したいゲストと、スキルを提供するホストを繋ぐ次世代エコシステム。
              <br />
              あなたの大切な瞬間を、プロが形にします。
            </p>

            {/* CTAボタン群 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center bg-lp-gold text-white px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-md"
              >
                無料で始める
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center border border-lp-dark text-lp-dark px-8 py-4 rounded-full text-base font-medium hover:bg-lp-dark hover:text-white transition-colors"
              >
                使い方を見る
              </Link>
            </div>

            {/* 補足テキスト */}
            <p className="text-lp-gray text-xs mt-4">
              ※ 登録無料・クレジットカード不要
            </p>
          </div>

          {/* スマートフォンモックアップ */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* スマートフォン外枠 */}
              <div className="w-64 h-[520px] sm:w-72 sm:h-[580px] bg-lp-dark rounded-[3rem] shadow-2xl p-3 relative">
                {/* ノッチ */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-lp-dark rounded-b-2xl z-10" />
                {/* 画面 */}
                <div className="w-full h-full bg-lp-cream rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* ステータスバー */}
                  <div className="h-8 bg-white/20 flex items-center justify-between px-6 pt-2">
                    <span className="text-[10px] text-lp-dark font-medium">
                      9:41
                    </span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-lp-dark/40" />
                      <div className="w-3 h-3 rounded-full bg-lp-dark/40" />
                      <div className="w-3 h-3 rounded-full bg-lp-dark" />
                    </div>
                  </div>

                  {/* モックアップコンテンツ: ホーム画面風 */}
                  <div className="flex-1 p-4 flex flex-col gap-3">
                    {/* 検索バー */}
                    <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                      <svg
                        className="w-4 h-4 text-lp-gray"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="text-xs text-lp-gray">
                        キーワード、エリア、日付で検索
                      </span>
                    </div>

                    {/* カテゴリグリッド */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "家族写真",
                        "SNS",
                        "風景",
                        "ポートレート",
                        "イベント",
                        "グルメ",
                      ].map((cat) => (
                        <div
                          key={cat}
                          className="bg-white rounded-lg p-2 flex flex-col items-center gap-1 shadow-sm"
                        >
                          <div className="w-8 h-8 rounded-full bg-lp-gold/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-lp-gold/60" />
                          </div>
                          <span className="text-[9px] text-lp-dark font-medium text-center leading-tight">
                            {cat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 今週のピックアップ */}
                    <div>
                      <p className="text-[10px] font-semibold text-lp-dark mb-2">
                        今週のピックアップ
                      </p>
                      <div className="bg-lp-green/20 rounded-xl h-20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-10 h-10 rounded-full bg-lp-gold/40 mx-auto mb-1" />
                          <span className="text-[9px] text-lp-dark">
                            山田 健太 ★4.9
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ボトムナビ */}
                  <div className="h-12 bg-white border-t border-gray-100 flex items-center justify-around px-4">
                    {[
                      {
                        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                        active: true,
                      },
                      {
                        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                        active: false,
                      },
                      {
                        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                        active: false,
                      },
                      {
                        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                        active: false,
                      },
                    ].map((item, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${item.active ? "text-lp-gold" : "text-lp-gray/50"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={item.active ? 2.5 : 1.5}
                          d={item.icon}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* 装飾: 背景の円 */}
              <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 rounded-full bg-lp-gold/10" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 rounded-full bg-lp-green/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
