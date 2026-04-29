import Link from "next/link";

/**
 * Heroセクション
 * - メインキャッチコピー・背景画像・CTA・統計情報を配置
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[680px] bg-lp-ink">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.55] saturate-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=1000&fit=crop&q=80')",
        }}
      >
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-r from-lp-ink/85 via-lp-ink/55 to-lp-ink/15" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(216, 92, 58, 0.25), transparent 60%)",
          }}
        />
      </div>

      {/* コンテンツ */}
      <div className="relative max-w-[1200px] mx-auto px-6 py-[100px] pb-[120px] text-lp-cream">
        {/* リボン */}
        <span className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full bg-lp-cream/10 backdrop-blur-sm text-lp-cream text-xs font-bold tracking-widest">
          📸 写真のC2Cマッチングサービス
        </span>

        {/* メインタイトル */}
        <h1 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(38px,6vw,76px)] leading-[1.18] tracking-tight mt-[22px] mb-6 max-w-[780px]">
          プロじゃなくていい。
          <br />
          <span className="relative text-lp-accent-2">
            「いい写真」
            <span className="absolute left-[-4px] right-[-4px] bottom-[6px] h-[14px] bg-lp-accent/30 -z-10" />
          </span>
          は、
          <br />
          もっと気軽に。
        </h1>

        {/* リード文 */}
        <p className="text-[17px] text-lp-cream/85 max-w-[560px] mb-7 leading-relaxed">
          趣味で写真を撮るアマチュアと、
          <br />
          素敵な一枚を手頃に残したい人をつなぐマッチングサービス。
          <br />
          好きが仕事に、思い出がもっと身近に。
        </p>

        {/* バッジ群 */}
        <div className="flex flex-wrap gap-2.5 mb-9">
          <div className="inline-flex items-center gap-2 bg-lp-cream/12 backdrop-blur-md border border-lp-cream/20 px-3.5 py-2 rounded-[10px] text-[13px] font-bold text-lp-cream">
            <span className="text-lp-gold text-[15px]">💰</span>
            価格はあなたが決める
          </div>
          <div className="inline-flex items-center gap-2 bg-lp-cream/12 backdrop-blur-md border border-lp-cream/20 px-3.5 py-2 rounded-[10px] text-[13px] font-bold text-lp-cream">
            <span className="text-lp-gold text-[15px]">📍</span>
            場所もあなたが決める
          </div>
          <div className="inline-flex items-center gap-2 bg-lp-cream/12 backdrop-blur-md border border-lp-cream/20 px-3.5 py-2 rounded-[10px] text-[13px] font-bold text-lp-cream">
            <span className="text-lp-gold text-[15px]">💬</span>
            事前チャットで安心
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/auth/register?role=requester"
            className="inline-flex items-center justify-center gap-2.5 px-[30px] py-4 rounded-full text-[15px] font-bold text-white bg-lp-guest shadow-[0_8px_20px_rgba(45,107,99,0.3)] hover:-translate-y-0.5 hover:brightness-105 transition-all duration-200"
          >
            撮ってほしい方はこちら →
          </Link>
          <Link
            href="/auth/register?role=photographer"
            className="inline-flex items-center justify-center gap-2.5 px-[30px] py-4 rounded-full text-[15px] font-bold text-white bg-lp-host shadow-[0_8px_20px_rgba(196,122,46,0.3)] hover:-translate-y-0.5 hover:brightness-105 transition-all duration-200"
          >
            撮りたい方はこちら →
          </Link>
        </div>

        {/* 統計 */}
        <div className="flex gap-10 pt-8 border-t border-lp-cream/20 max-w-[600px]">
          <div>
            <span className="font-[family-name:var(--font-playfair)] font-black text-[30px] text-lp-gold block leading-none">
              2,400+
            </span>
            <span className="text-xs text-lp-cream/70 mt-1.5 tracking-wide block">
              登録ホスト
            </span>
          </div>
          <div>
            <span className="font-[family-name:var(--font-playfair)] font-black text-[30px] text-lp-gold block leading-none">
              18,000+
            </span>
            <span className="text-xs text-lp-cream/70 mt-1.5 tracking-wide block">
              マッチング実績
            </span>
          </div>
          <div>
            <span className="font-[family-name:var(--font-playfair)] font-black text-[30px] text-lp-gold block leading-none">
              ★4.8
            </span>
            <span className="text-xs text-lp-cream/70 mt-1.5 tracking-wide block">
              平均満足度
            </span>
          </div>
        </div>
      </div>

      {/* スクロールヒント */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lp-cream/50 text-[11px] tracking-[0.3em]">
        <div className="flex flex-col items-center">
          <span className="[writing-mode:vertical-rl]">SCROLL</span>
          <span className="block w-px h-9 bg-lp-cream/50 mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
