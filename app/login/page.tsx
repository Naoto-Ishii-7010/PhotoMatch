import { Suspense } from "react";
import LoginHeroPanel from "@/features/auth/components/LoginHeroPanel";
import LoginForm from "@/features/auth/components/LoginForm";
import MobileLoginWrapper from "@/features/auth/components/MobileLoginWrapper";
import MobileLoginCard from "@/features/auth/components/MobileLoginCard";

/**
 * ログインページ（/login）
 * - ログイン・新規登録で共通使用（?mode=signup で新規登録モード）
 * - デスクトップ: 左ヒーロー写真 + 右フォームの2カラム
 * - モバイル: グラスモーフィズムカードを中央配置
 */
export default function LoginPage() {
  return (
    <>
      {/* デスクトップレイアウト */}
      <div className="hidden min-h-screen lg:flex">
        <LoginHeroPanel />
        <Suspense
          fallback={
            <div className="flex w-2/5 items-center justify-center bg-[#fff8f3]" />
          }
        >
          <LoginForm />
        </Suspense>
      </div>

      {/* モバイルレイアウト */}
      <MobileLoginWrapper>
        <Suspense fallback={null}>
          <MobileLoginCard />
        </Suspense>
      </MobileLoginWrapper>
    </>
  );
}
