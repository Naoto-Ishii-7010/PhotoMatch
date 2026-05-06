"use client"; // クライアントコンポーネントとして動作（タブ切り替え機能のため）

import { useState } from "react";

/**
 * Stepsセクション
 * - 5ステップで完了の流れを表示
 */
export default function StepsSection() {
  const [activeTab, setActiveTab] = useState<"guest" | "host">("guest");

  const steps = [
    {
      num: "1",
      title: "無料登録",
      desc: "30秒で完了。\nメールアドレスだけでOK",
    },
    { num: "2", title: "希望を投稿", desc: "シーン・場所・予算\nを自由に投稿" },
    {
      num: "3",
      title: "ホストと相談",
      desc: "提案を比較、\nチャットで詳細を確認",
    },
    {
      num: "4",
      title: "撮影当日",
      desc: "合意した場所・時間で\nリラックスして撮影",
    },
    { num: "5", title: "納品・決済", desc: "写真を受取り、\n確認後に決済完了" },
  ];

  return (
    <section className="py-24 bg-lp-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-brand tracking-[0.3em] font-bold uppercase mb-3.5">
            How It Works
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] text-lp-ink">
            5ステップで完了
          </h2>
        </div>

        {/* タブ */}
        <div className="flex gap-0 justify-center mb-12 bg-white rounded-full p-1.5 max-w-[380px] mx-auto shadow-[0_1px_2px_rgba(40,32,22,0.04),0_8px_24px_rgba(40,32,22,0.08)]">
          <button
            onClick={() => setActiveTab("guest")}
            className={`flex-1 px-5.5 py-2.5 rounded-full text-[13px] font-bold text-center transition-all duration-200 ${
              activeTab === "guest"
                ? "bg-lp-brand text-white"
                : "text-lp-ink-soft"
            }`}
          >
            ゲスト向け
          </button>
          <button
            onClick={() => setActiveTab("host")}
            className={`flex-1 px-5.5 py-2.5 rounded-full text-[13px] font-bold text-center transition-all duration-200 ${
              activeTab === "host"
                ? "bg-lp-brand text-white"
                : "text-lp-ink-soft"
            }`}
          >
            ホスト向け
          </button>
        </div>

        {/* ステップリスト */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-[1100px] mx-auto relative">
          {/* 背景のライン（PCのみ表示） */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-[repeating-linear-gradient(to_right,#b08a52_0_8px,transparent_8px_16px)] z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center relative z-10 bg-lp-cream px-1.5"
            >
              <div className="w-16 h-16 rounded-full bg-white border-2 border-lp-brand flex items-center justify-center font-[family-name:var(--font-playfair)] font-black text-2xl text-lp-brand mx-auto mb-3.5">
                {step.num}
              </div>
              <h5 className="text-sm font-bold mb-1 text-lp-ink">
                {step.title}
              </h5>
              <p className="text-xs text-lp-ink-soft leading-[1.7] whitespace-pre-line">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
