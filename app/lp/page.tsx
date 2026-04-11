import HeroSection from "../../components/features/lp/HeroSection";
import ServiceOverviewSection from "../../components/features/lp/ServiceOverviewSection";
import TargetUsersSection from "../../components/features/lp/TargetUsersSection";
import HowItWorksSection from "../../components/features/lp/HowItWorksSection";
import FeaturesSection from "../../components/features/lp/FeaturesSection";
import SafetySection from "../../components/features/lp/SafetySection";
import CtaSection from "../../components/features/lp/CtaSection";

/**
 * LPメインページ（/lp）
 * - アプリ本体とは独立したルートグループ
 * - 認証不要の公開ページ
 * - サービスの価値提案・ターゲット・利用フロー・機能・安全性・CTAで構成
 */
export default function LpPage() {
  return (
    <>
      {/* P1: ヒーロー — キャッチコピーとスマートフォンモックアップ */}
      <HeroSection />

      {/* P2: サービス概要 — 2軸の価値（撮影予約 / ストックフォト） */}
      <ServiceOverviewSection />

      {/* P3: ターゲットユーザー — 依頼者・フォトグラファーのペルソナ */}
      <TargetUsersSection />

      {/* P4: 利用の流れ — 5ステップフロー */}
      <HowItWorksSection />

      {/* P5〜P9: 機能紹介 — 主要機能のショーケース */}
      <FeaturesSection />

      {/* P10: 安心・安全 — 本人確認・エスクロー・ウォーターマーク */}
      <SafetySection />

      {/* P12: 最終CTA — 新規会員登録訴求 */}
      <CtaSection />
    </>
  );
}
