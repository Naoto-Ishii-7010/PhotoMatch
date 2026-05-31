/**
 * ログインページの左側ヒーローパネル（デスクトップのみ表示）
 * - 写真背景 + グラデーションオーバーレイ + キャッチコピー
 */
export default function LoginHeroPanel() {
  return (
    <div className="relative hidden overflow-hidden lg:block lg:w-3/5">
      {/* 背景写真 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=1200&fit=crop&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* ヒーローテキスト */}
      <div className="absolute bottom-16 left-8 right-16 p-8">
        <h2
          className="text-[32px] font-medium leading-tight text-white drop-shadow-[0px_2px_1px_rgba(0,0,0,0.06),0px_4px_1.5px_rgba(0,0,0,0.07)]"
          style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
        >
          瞬間を、永遠に。
        </h2>
        <p
          className="mt-4 text-[16px] leading-relaxed text-[#f2ede5] drop-shadow-[0px_2px_1px_rgba(0,0,0,0.06),0px_4px_1.5px_rgba(0,0,0,0.07)]"
          style={{ fontFamily: "var(--font-zen-kaku, sans-serif)" }}
        >
          最高の瞬間を切り取るプロフェッショナルと、あなたを繋ぐ。
          <br />
          PhotoMatchで、新しいビジュアル体験を始めましょう。
        </p>
      </div>
    </div>
  );
}
