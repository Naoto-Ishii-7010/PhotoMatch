/**
 * Safetyセクション
 * - 安心・安全な仕組みを紹介
 */
export default function SafetySection() {
  return (
    <section
      id="safety"
      className="py-24 bg-gradient-to-b from-lp-cream to-white relative"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-brand tracking-[0.3em] font-bold uppercase mb-3.5">
            Safety &amp; Trust
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] mb-5 text-lp-ink">
            アマチュア × 相談制だからこそ、
            <br />
            安心設計を徹底しています。
          </h2>
          <p className="text-lp-ink-soft max-w-[680px] mx-auto text-[15px]">
            「知らない人と会うのは不安」——その気持ちに、真剣に向き合いました。
            <br />
            事前のやり取りで納得してから、撮影に進める仕組みです。
          </p>
        </div>

        {/* メインカード2つ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1080px] mx-auto mb-6">
          {/* カード1 */}
          <div className="bg-white border border-lp-line rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-[180px_1fr] hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(40,32,22,0.04),0_8px_24px_rgba(40,32,22,0.08)] transition-all duration-200">
            <div
              className="h-[180px] md:h-auto bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=400&fit=crop&q=80')",
              }}
            />
            <div className="p-6">
              <h4 className="font-[family-name:var(--font-noto-serif)] text-lg font-bold mb-2 flex items-center gap-2 text-lp-ink">
                <span className="w-6 h-6 rounded-full bg-lp-brand text-white flex items-center justify-center font-[family-name:var(--font-playfair)] text-xs font-black">
                  1
                </span>
                事前チャットで納得してから依頼
              </h4>
              <p className="text-[13px] text-lp-ink-soft leading-[1.8]">
                依頼を確定する前に、アプリ内チャットでホストとじっくりやり取り可能。撮影スタイル・当日の流れ・納品形式など、気になることは事前に相談して納得してから進められます。
              </p>
            </div>
          </div>

          {/* カード2 */}
          <div className="bg-white border border-lp-line rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-[180px_1fr] hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(40,32,22,0.04),0_8px_24px_rgba(40,32,22,0.08)] transition-all duration-200">
            <div
              className="h-[180px] md:h-auto bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop&q=80')",
              }}
            />
            <div className="p-6">
              <h4 className="font-[family-name:var(--font-noto-serif)] text-lg font-bold mb-2 flex items-center gap-2 text-lp-ink">
                <span className="w-6 h-6 rounded-full bg-lp-brand text-white flex items-center justify-center font-[family-name:var(--font-playfair)] text-xs font-black">
                  2
                </span>
                レビュー・評価で実力を事前確認
              </h4>
              <p className="text-[13px] text-lp-ink-soft leading-[1.8]">
                過去の依頼者による★評価とレビューコメントを、依頼前に必ずチェックできます。作品ポートフォリオも公開されているので、「どんな写真を撮る方か」を事前にしっかり確認できます。
              </p>
            </div>
          </div>
        </div>

        {/* 追加の安心要素 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1080px] mx-auto">
          <div className="bg-lp-cream border border-lp-line rounded-xl p-5 text-center">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-lp-brand-2 flex items-center justify-center text-[22px] mx-auto mb-2.5">
              🪪
            </div>
            <h5 className="text-sm font-bold mb-1 text-lp-ink">本人確認必須</h5>
            <p className="text-xs text-lp-ink-soft">
              免許証・マイナンバーで全ホスト本人確認済み
            </p>
          </div>
          <div className="bg-lp-cream border border-lp-line rounded-xl p-5 text-center">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-lp-brand-2 flex items-center justify-center text-[22px] mx-auto mb-2.5">
              💳
            </div>
            <h5 className="text-sm font-bold mb-1 text-lp-ink">
              安全な決済システム
            </h5>
            <p className="text-xs text-lp-ink-soft">
              アプリ内決済で料金トラブルなし。現金授受なし
            </p>
          </div>
          <div className="bg-lp-cream border border-lp-line rounded-xl p-5 text-center">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-lp-brand-2 flex items-center justify-center text-[22px] mx-auto mb-2.5">
              🛡️
            </div>
            <h5 className="text-sm font-bold mb-1 text-lp-ink">
              満足保証・返金対応
            </h5>
            <p className="text-xs text-lp-ink-soft">
              納品に満足できない場合は運営が仲介・返金対応
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
