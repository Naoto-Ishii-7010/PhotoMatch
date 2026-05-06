/**
 * WhatIsセクション
 * - 「撮ってほしい」と「撮りたい」を、フェアな相談価格でつなぐ
 */
export default function WhatIsSection() {
  return (
    <section
      id="what"
      className="py-24 bg-white border-t border-b border-lp-line"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-brand tracking-[0.3em] font-bold uppercase mb-3.5">
            What is PhotoMatch
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] mb-5 text-lp-ink">
            「撮ってほしい」と「撮りたい」を、
            <br />
            フェアな相談価格でつなぐ。
          </h2>
          <p className="text-lp-ink-soft max-w-[680px] mx-auto text-[15px]">
            従来のプロ撮影より手頃に、一般的な友人撮影よりクオリティ高く。
            <br />
            価格も撮影場所も、依頼者のあなたが自由に決められます。
          </p>
        </div>

        {/* ペルソナカード */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-stretch max-w-[1040px] mx-auto">
          {/* ゲストカード */}
          <div className="bg-lp-cream rounded-3xl overflow-hidden border border-lp-line flex flex-col">
            <div
              className="h-[180px] bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-7 flex-1">
              <span className="inline-block px-3 py-1.5 rounded-md bg-lp-guest text-white text-[11px] font-black tracking-wider mb-3.5">
                GUEST / 撮ってほしい方
              </span>
              <h3 className="font-[family-name:var(--font-noto-serif)] text-[22px] leading-[1.5] mb-3.5 text-lp-ink">
                「プロに頼むほどじゃない、
                <br />
                でもスマホ写真じゃ物足りない」
              </h3>
              <p className="text-sm text-lp-ink-soft">
                予算も場所もあなたが決める。ホストから提案が届き、相談しながら進められます。
              </p>
            </div>
          </div>

          {/* リンクアロー */}
          <div className="flex flex-col items-center justify-center text-center lg:self-center">
            <div className="font-[family-name:var(--font-playfair)] text-[72px] font-black text-lp-brand leading-none lg:rotate-0 rotate-90">
              ×
            </div>
            <span className="block text-[11px] font-bold text-lp-ink-muted tracking-[0.3em] mt-2.5 lg:rotate-0 -rotate-90">
              MATCH
            </span>
          </div>

          {/* ホストカード */}
          <div className="bg-lp-cream rounded-3xl overflow-hidden border border-lp-line flex flex-col">
            <div
              className="h-[180px] bg-cover bg-center relative"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&h=900&fit=crop&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-7 flex-1">
              <span className="inline-block px-3 py-1.5 rounded-md bg-lp-host text-white text-[11px] font-black tracking-wider mb-3.5">
                HOST / 撮りたい方
              </span>
              <h3 className="font-[family-name:var(--font-noto-serif)] text-[22px] leading-[1.5] mb-3.5 text-lp-ink">
                「カメラが趣味。
                <br />
                せっかくなら人に喜んでほしい」
              </h3>
              <p className="text-sm text-lp-ink-soft">
                週末だけ・月に数回だけでもOK。自分のペースで、好きを仕事にできます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
