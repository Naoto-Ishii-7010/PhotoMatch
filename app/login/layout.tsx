import type { Metadata } from "next";
import LpHeader from "../../features/lp/components/LpHeader";
import LpFooter from "../../features/lp/components/LpFooter";

/**
 * LP専用レイアウト
 * - アプリ本体のルートレイアウト（app/layout.tsx）の内側にネストされる
 * - LP専用ヘッダー・フッターを提供する
 */
export const metadata: Metadata = {
  title: "PhotoMatch — プロの技術を手軽に。フォトマッチングプラットフォーム",
  description:
    "写真を依頼したいゲストと、スキルを提供するホストを繋ぐ次世代エコシステム。指名型・公募型の撮影依頼、ストックフォト販売まで一元管理。",
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LpHeader />
      <main className="flex-1">{children}</main>
      <LpFooter />
    </>
  );
}
