import HeroSection from "../../components/features/lp/HeroSection";
import WhatIsSection from "../../components/features/lp/WhatIsSection";
import StoriesSection from "../../components/features/lp/StoriesSection";
import YouDecideSection from "../../components/features/lp/YouDecideSection";
import UseCasesSection from "../../components/features/lp/UseCasesSection";
import HostsSection from "../../components/features/lp/HostsSection";
import PriceMechanismSection from "../../components/features/lp/PriceMechanismSection";
import SafetySection from "../../components/features/lp/SafetySection";
import DualCtaSection from "../../components/features/lp/DualCtaSection";
import StepsSection from "../../components/features/lp/StepsSection";
import FaqSection from "../../components/features/lp/FaqSection";
import FinalCtaSection from "../../components/features/lp/FinalCtaSection";

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
