/**
 * 利用の流れセクション
 * - PDFのP4: 5ステップフロー（検索・発見 → 事前調整 → 安心決済 → 撮影実施 → 納品・評価）
 */

/** ステップのデータ型 */
type Step = {
  number: string;
  title: string;
  description: string;
  iconPath: string;
};

/** ステップデータ */
const STEPS: Step[] = [
  {
    number: "01",
    title: "検索・発見",
    description:
      "エリア、ジャンル、評価でフォトグラファーを検索。ポートフォリオを確認して理想のカメラマンを見つけます。",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    number: "02",
    title: "事前調整",
    description:
      "チャットで撮影日時、場所、カット数を相談。撮影前の打ち合わせもアプリ内で完結します。",
    iconPath:
      "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    number: "03",
    title: "安心決済",
    description:
      "エスクロー払い（事務局が一時預かり）。撮影完了・受領確認後にフォトグラファーへ送金されます。",
    iconPath:
      "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    number: "04",
    title: "撮影実施",
    description:
      "オフラインでの撮影を実行。当日の連絡もチャットで即座に対応できます。",
    iconPath:
      "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    number: "05",
    title: "納品・評価",
    description:
      "マイページからデータをダウンロード。受領確認後にレビューを投稿して、次の依頼者の参考に。",
    iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-lp-dark mb-4">
            5ステップで完結
          </h2>
          <p className="text-lp-gray text-lg max-w-xl mx-auto leading-relaxed">
            検索から納品まで、すべてがシンプルな流れで進みます。
          </p>
        </div>

        {/* ステップリスト */}
        <div className="relative">
          {/* 縦の接続線（md以上） */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-lp-gold-light -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {STEPS.map((step, index) => {
              /* 偶数インデックスは左寄せ、奇数は右寄せ（デスクトップのみ） */
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                    isEven ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* カード */}
                  <div
                    className={`relative z-10 bg-lp-cream rounded-2xl p-6 border border-lp-gold-light hover:shadow-md transition-shadow ${
                      isEven
                        ? "md:col-start-1 md:mr-8"
                        : "md:col-start-2 md:ml-8"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* アイコン */}
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-lp-gold/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-lp-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={step.iconPath}
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-lp-gold tracking-widest">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-lp-dark mb-2">
                          {step.title}
                        </h3>
                        <p className="text-lp-gray text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 中央の丸マーカー（md以上） */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-lp-gold items-center justify-center z-20 shadow-md">
                    <span className="text-white text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* 空の列（レイアウト維持のため） */}
                  <div
                    className={isEven ? "md:col-start-2" : "md:col-start-1"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
