/**
 * Storiesセクション
 * - 具体的な利用シナリオを紹介
 */
export default function StoriesSection() {
  const stories = [
    {
      tag: "CASE 01 / WEDDING",
      quote: "30代・ご結婚予定",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80",
      voice:
        "「ウェディングフォトを綺麗に残したい。でも、プロに頼むと何十万円も…ちょっと もったいない んです。」",
      location: "希望場所：お二人の思い出の公園",
      budget: "予算：¥15,000〜",
      solution:
        "あなたが予算と場所を提示するだけ。趣味で撮っている方の中にも、驚くほど素敵な写真を撮る方が大勢います。プロの1/5〜1/10の予算で、記念の一枚が残せます。",
    },
    {
      tag: "CASE 02 / KIDS SPORTS",
      quote: "40代・お父さん",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop&q=80",
      voice:
        "「子供のサッカーの試合を撮りたい。でも技術もないし、自分は応援に集中したい んだよな。」",
      location: "希望場所：◯◯サッカー場",
      budget: "予算：¥5,000〜",
      solution:
        "試合会場と時間を指定するだけ。スポーツ撮影が得意なホストが、決定的瞬間を捉えてくれます。あなたは全力で応援に集中して、大切な瞬間はプロ顔負けの一枚で残せます。",
    },
  ];

  return (
    <section
      id="stories"
      className="py-24 bg-gradient-to-b from-lp-cream to-lp-cream-2 relative"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-brand tracking-[0.3em] font-bold uppercase mb-3.5">
            Real Stories
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] mb-5 text-lp-ink">
            こんな「もったいない」、ありませんか？
          </h2>
          <p className="text-lp-ink-soft max-w-[680px] mx-auto text-[15px]">
            PhotoMatchは、プロに頼むほどじゃないけれど、ちゃんと残したい瞬間のためのサービスです。
          </p>
        </div>

        {/* ストーリーグリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-[1100px] mx-auto">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_1px_2px_rgba(40,32,22,0.04),0_8px_24px_rgba(40,32,22,0.08)] flex flex-col hover:-translate-y-1.5 hover:shadow-[0_4px_8px_rgba(40,32,22,0.06),0_24px_60px_rgba(40,32,22,0.18)] transition-all duration-300"
            >
              {/* 画像 */}
              <div
                className="h-[280px] bg-cover bg-center relative"
                style={{ backgroundImage: `url('${story.image}')` }}
              >
                <span className="absolute top-[18px] left-[18px] bg-white text-lp-ink px-3.5 py-2 rounded-lg text-[11px] font-black tracking-widest">
                  {story.tag}
                </span>
                <span className="absolute bottom-[18px] right-[18px] bg-lp-ink/90 backdrop-blur-md text-lp-cream px-4 py-2.5 rounded-[10px] text-xs font-bold">
                  {story.quote}
                </span>
              </div>

              {/* コンテンツ */}
              <div className="p-8 flex-1 flex flex-col">
                {/* ボイス */}
                <div className="font-[family-name:var(--font-noto-serif)] text-xl font-bold leading-[1.65] mb-5 text-lp-ink pl-5 border-l-[3px] border-lp-accent">
                  <span className="block text-[11px] font-[family-name:var(--font-playfair)] tracking-[0.25em] text-lp-brand font-bold mb-2">
                    Voice
                  </span>
                  {story.voice}
                </div>

                {/* メタ情報 */}
                <div className="flex gap-3 mb-4.5 text-xs text-lp-ink-muted flex-wrap">
                  <span className="inline-flex items-center gap-1">
                    📍 {story.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    💰 {story.budget}
                  </span>
                </div>

                {/* ソリューション */}
                <div className="bg-lp-cream px-5 py-4.5 rounded-xl text-[13px] text-lp-ink-soft mt-auto border border-dashed border-lp-brand-2">
                  <strong className="block text-lp-brand font-black text-xs tracking-wider mb-1">
                    PhotoMatchでは
                  </strong>
                  {story.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
