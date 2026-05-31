import type { ReactNode } from "react";

/**
 * モバイル用ログインラッパー（グラスモーフィズムカード）
 * - デスクトップでは非表示、モバイルで全画面表示
 */
export default function MobileLoginWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 lg:hidden"
      style={{
        background: "linear-gradient(135deg, #faf6ef 0%, #f3ece0 100%)",
      }}
    >
      {/* ぼかし背景写真 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop&q=60"
        alt=""
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-sm brightness-90"
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-[rgba(255,248,243,0.85)] backdrop-blur-[1px]" />

      {/* グラスモーフィズムカード */}
      <div className="relative z-10 w-full max-w-[400px] rounded-xl border border-[rgba(210,196,182,0.3)] bg-[rgba(255,255,255,0.95)] p-8 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] backdrop-blur-[6px]">
        {children}
      </div>
    </div>
  );
}
