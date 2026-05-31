import { getAuthContext } from "@/server/auth/auth-context";
import ServiceHeader from "@/components/layout/ServiceHeader";
import ServiceFooter from "@/components/layout/ServiceFooter";
import BottomNavBar from "@/components/layout/BottomNavBar";

export default async function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authContext = await getAuthContext();
  const user = authContext?.user ?? null;

  return (
    <>
      <ServiceHeader user={user} />
      {/* モバイルではボトムナビバー分（64px）の余白を確保 */}
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <ServiceFooter />
      <BottomNavBar user={user} />
    </>
  );
}
