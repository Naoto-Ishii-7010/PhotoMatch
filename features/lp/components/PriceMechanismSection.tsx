/**
 * PriceMechanismセクション
 * - 価格相談制の仕組みを説明
 */
export default function PriceMechanismSection() {
  return (
    <section
      id="price"
      className="py-24 bg-gradient-to-b from-lp-cream-2 to-lp-cream"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-brand tracking-[0.3em] font-bold uppercase mb-3.5">
            How Pricing Works
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] mb-5 text-lp-ink">
            価格は「相談制」。
            <br />
            お互い納得できる金額で。
          </h2>
          <p className="text-lp-ink-soft max-w-[680px] mx-auto text-[15px]">
            PhotoMatchは固定料金ではなく、
            <strong>ゲストが予算を提示し、ホストが提案する</strong>仕組み。
            <br />
            予算・撮影内容・時間に合わせてフェアな価格でマッチングできます。
          </p>
        </div>

        {/* プライスボックス */}
        <div className="max-w-[960px] mx-auto bg-white rounded-[28px] p-14 border border-lp-line shadow-[0_1px_2px_rgba(40,32,22,0.04),0_8px_24px_rgba(40,32,22,0.08)]">
          {/* ヘッド */}
          <div className="text-center mb-10">
            <span className="inline-block bg-lp-accent text-white px-4.5 py-[7px] rounded-full text-xs font-black tracking-widest mb-5.5">
              価格相談制の3ステップ
            </span>
            <h3 className="font-[family-name:var(--font-noto-serif)] text-[30px] leading-[1.5] text-lp-ink">
              ゲストが<span className="text-lp-accent">予算</span>と
              <span className="text-lp-accent">場所</span>
              を提示。
              <br />
              ホストが<span className="text-lp-accent">条件</span>を提案。双方
              <span className="text-lp-accent">合意</span>で成立。
            </h3>
          </div>

          {/* フローステップ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            <div className="text-center px-3">
              <div className="w-[54px] h-[54px] rounded-full bg-lp-brand text-white flex items-center justify-center font-[family-name:var(--font-playfair)] font-black text-2xl mx-auto mb-4 shadow-[0_4px_12px_rgba(138,106,58,0.3)]">
                1
              </div>
              <h5 className="text-base font-bold mb-2.5 text-lp-ink">
                ゲストが希望を投稿
              </h5>
              <p className="text-[13px] text-lp-ink-soft leading-[1.8]">
                撮影シーン・希望場所・予算感を投稿。「カップルで1時間、¥5,000くらいで」など気軽に。
              </p>
            </div>
            <div className="text-center px-3">
              <div className="w-[54px] h-[54px] rounded-full bg-lp-brand text-white flex items-center justify-center font-[family-name:var(--font-playfair)] font-black text-2xl mx-auto mb-4 shadow-[0_4px_12px_rgba(138,106,58,0.3)]">
                2
              </div>
              <h5 className="text-base font-bold mb-2.5 text-lp-ink">
                ホストが提案
              </h5>
              <p className="text-[13px] text-lp-ink-soft leading-[1.8]">
                興味を持ったホストが、価格・内容・納品形式をチャットで提案します。
              </p>
            </div>
            <div className="text-center px-3">
              <div className="w-[54px] h-[54px] rounded-full bg-lp-brand text-white flex items-center justify-center font-[family-name:var(--font-playfair)] font-black text-2xl mx-auto mb-4 shadow-[0_4px_12px_rgba(138,106,58,0.3)]">
                3
              </div>
              <h5 className="text-base font-bold mb-2.5 text-lp-ink">
                双方合意で確定
              </h5>
              <p className="text-[13px] text-lp-ink-soft leading-[1.8]">
                お互い納得の条件で成立。決済もPhotoMatch上で完結するので安心です。
              </p>
            </div>
          </div>

          {/* 比較 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mt-10 pt-9 border-t border-lp-line">
            <div className="bg-[#f5f1e9] rounded-2xl p-6 text-center text-lp-ink-muted">
              <div className="text-xs font-bold tracking-widest mb-2">
                一般的なプロ撮影
              </div>
              <span className="font-[family-name:var(--font-noto-serif)] font-black text-[28px] block line-through">
                ¥30,000〜
              </span>
              <div className="text-xs mt-2">
                固定料金・スタジオ指定・最低料金あり
              </div>
            </div>
            <div className="bg-[#fff5ef] border-2 border-lp-accent rounded-2xl p-6 text-center text-lp-accent">
              <div className="text-xs font-bold tracking-widest mb-2">
                PhotoMatch（相談制）
              </div>
              <span className="font-[family-name:var(--font-noto-serif)] font-black text-[28px] block">
                ¥2,000〜
              </span>
              <div className="text-xs text-lp-ink-soft mt-2">
                予算・場所・時間をあなたが自由に指定可能
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
