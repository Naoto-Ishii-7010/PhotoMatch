import type { Metadata } from "next";

/**
 * ログイン専用レイアウト
 */
export const metadata: Metadata = {
  title: "ログイン — PhotoMatch",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
