import HeroSection from "../../features/lp/components/HeroSection";
import WhatIsSection from "../../features/lp/components/WhatIsSection";
import StoriesSection from "../../features/lp/components/StoriesSection";
import YouDecideSection from "../../features/lp/components/YouDecideSection";
import UseCasesSection from "../../features/lp/components/UseCasesSection";
import HostsSection from "../../features/lp/components/HostsSection";
import PriceMechanismSection from "../../features/lp/components/PriceMechanismSection";
import SafetySection from "../../features/lp/components/SafetySection";
import DualCtaSection from "../../features/lp/components/DualCtaSection";
import StepsSection from "../../features/lp/components/StepsSection";
import FaqSection from "../../features/lp/components/FaqSection";
import FinalCtaSection from "../../features/lp/components/FinalCtaSection";

/**
 * LPメインページ（/lp）
 * - アプリ本体とは独立したルートグループ
 * - 認証不要の公開ページ
 * - サービスの価値提案・ターゲット・利用フロー・機能・安全性・CTAで構成
 */
export default function LpPage() {
  return (
    <>
      {/* Hero — メインキャッチコピーと背景画像 */}
      <HeroSection />

      {/* WhatIs — 「撮ってほしい」と「撮りたい」をつなぐ */}
      <WhatIsSection />

      {/* Stories — 具体的な利用シナリオ */}
      <StoriesSection />

      {/* YouDecide — 価格と場所をあなたが決める */}
      <YouDecideSection />

      {/* UseCases — こんなシーンで使われています */}
      <UseCasesSection />

      {/* Hosts — 活躍中のホスト・作品例 */}
      <HostsSection />

      {/* PriceMechanism — 価格相談制の仕組み */}
      <PriceMechanismSection />

      {/* Safety — 安心・安全な仕組み */}
      <SafetySection />

      {/* DualCta — あなたは、どちらで使いますか？ */}
      <DualCtaSection />

      {/* Steps — 5ステップで完了 */}
      <StepsSection />

      {/* Faq — よくあるご質問 */}
      <FaqSection />

      {/* FinalCta — 最終CTA */}
      <FinalCtaSection />
    </>
  );
}
