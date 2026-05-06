"use client"; // クライアントコンポーネントとして動作（アコーディオン機能のため）

import { useState } from "react";

/**
 * FAQセクション
 * - よくある質問をアコーディオンで表示
 */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "価格は相談制とのことですが、どう決めるのですか？",
      answer:
        "ゲスト側が希望予算・撮影内容・場所を投稿し、興味を持ったホストが価格と条件を提案します。双方の合意で価格が決まる「相談制」の仕組みです。「この予算でできる方いますか？」という投稿もOKなので、予算の主導権は完全にゲスト側にあります。",
    },
    {
      question: "撮影場所はどう決めるのですか？",
      answer:
        "撮影場所は、依頼するゲスト側が自由に指定できます。思い出の場所・ご自宅・近所の公園・お子様のサッカー場・結婚式の前撮り場所など、どこでも大丈夫です。ホストがその場所まで来てくれます（交通費の取り扱いは事前相談で決定）。",
    },
    {
      question: "アマチュアのホストに依頼するのは不安です",
      answer:
        "事前にチャットでやり取りができ、過去のポートフォリオ・レビュー・評価を全て確認してから依頼できます。また全ホストは本人確認済み、万が一満足できない場合は運営が仲介し返金対応いたしますのでご安心ください。",
    },
    {
      question: "料金の支払いはいつ、どうやって？",
      answer:
        "PhotoMatch上のクレジットカード決済で完結します。撮影前に仮押さえ、納品確認後に確定する仕組みなので、現金のやり取りは一切なく、お互い安心です。",
    },
    {
      question: "キャンセルや雨天の場合はどうなりますか？",
      answer:
        "撮影日の一定期間前までは無料キャンセル可能です。雨天等の場合はホストと相談のうえ日程変更、もしくは無料キャンセル対応できます。",
    },
    {
      question: "ホストとして始めるのに、プロ機材は必要ですか？",
      answer:
        "必須ではありません。スマホや手持ちのコンパクトカメラからでも始められます。実際、スマホ撮影専門のホストも人気です。",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="font-[family-name:var(--font-playfair)] text-sm text-lp-brand tracking-[0.3em] font-bold uppercase mb-3.5">
            FAQ
          </div>
          <h2 className="font-[family-name:var(--font-noto-serif)] font-black text-[clamp(28px,3.8vw,44px)] leading-[1.4] text-lp-ink">
            よくあるご質問
          </h2>
        </div>

        {/* FAQリスト */}
        <div className="max-w-[820px] mx-auto flex flex-col gap-2.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="bg-lp-cream rounded-[14px] px-6 py-5 border border-lp-line cursor-pointer hover:border-lp-brand-2 transition-all duration-200"
            >
              <div className="text-[15px] font-bold flex gap-3.5 items-center text-lp-ink">
                <span className="font-[family-name:var(--font-playfair)] text-lp-accent text-[22px] font-black">
                  Q
                </span>
                {faq.question}
              </div>
              {openIndex === index && (
                <div className="mt-3 pl-9 text-[13px] text-lp-ink-soft leading-[1.85]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
