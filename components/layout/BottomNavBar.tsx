"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoHomeOutline,
  IoHome,
  IoSearchOutline,
  IoSearch,
  IoBriefcaseOutline,
  IoBriefcase,
  IoCameraOutline,
  IoCamera,
  IoChatbubbleOutline,
  IoChatbubble,
} from "react-icons/io5";
import type { AuthenticatedUser } from "@/server/auth/auth-context";

type NavItem = {
  href: string;
  label: string;
  IconDefault: React.ComponentType<{ className?: string }>;
  IconActive: React.ComponentType<{ className?: string }>;
  requireAuth: boolean;
};

const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "ホーム",
    IconDefault: IoHomeOutline,
    IconActive: IoHome,
    requireAuth: false,
  },
  {
    href: "/search",
    label: "探す",
    IconDefault: IoSearchOutline,
    IconActive: IoSearch,
    requireAuth: false,
  },
  {
    href: "/jobs",
    label: "案件",
    IconDefault: IoBriefcaseOutline,
    IconActive: IoBriefcase,
    requireAuth: false,
  },
  {
    href: "/requests/new",
    label: "依頼する",
    IconDefault: IoCameraOutline,
    IconActive: IoCamera,
    requireAuth: true,
  },
  {
    href: "/chats",
    label: "チャット",
    IconDefault: IoChatbubbleOutline,
    IconActive: IoChatbubble,
    requireAuth: true,
  },
];

type BottomNavBarProps = {
  user: AuthenticatedUser | null;
};

export default function BottomNavBar({ user }: BottomNavBarProps) {
  const pathname = usePathname();

  const visibleItems = NAV_ITEMS.filter(
    (item) => !item.requireAuth || user !== null,
  );

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[rgba(238,224,208,0.95)] backdrop-blur-[8px] rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_-4px_12px_0px_rgba(0,0,0,0.05)]">
      <ul className="flex items-center justify-around h-16 px-2">
        {visibleItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = isActive ? item.IconActive : item.IconDefault;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 px-4 py-1 rounded-full transition-colors"
                style={
                  isActive
                    ? { backgroundColor: "rgba(255,221,177,0.4)" }
                    : undefined
                }
              >
                <Icon
                  className={`w-[18px] h-[18px] ${isActive ? "text-[#6f5224]" : "text-[#4e453a]"}`}
                />
                <span
                  className={`text-[11px] font-medium whitespace-nowrap ${isActive ? "text-[#6f5224]" : "text-[#4e453a]"}`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
