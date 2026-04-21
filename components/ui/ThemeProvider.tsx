"use client";

import { createContext, useContext, useEffect, useState } from "react";

// "use client" を使用する理由:
// テーマの状態管理、localStorage アクセス、システム設定の監視が必要なため

type Theme = "light" | "dark" | "system";

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
};

const ThemeProviderContext = createContext<
  ThemeProviderContextType | undefined
>(undefined);

const THEME_STORAGE_KEY = "photomatch-theme";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

/**
 * テーマプロバイダー
 * - ダークモード / ライトモード / システム設定に基づく自動切り替えをサポート
 * - localStorage でユーザーの設定を永続化
 * - システムの prefers-color-scheme を監視して自動反映
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // 初回マウント時に localStorage から設定を読み込む
  // Safari プライベートモード等で localStorage が使えない場合はデフォルトのまま
  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (stored && ["light", "dark", "system"].includes(stored)) {
        setThemeState(stored);
      }
    } catch {
      // localStorage へのアクセスが拒否された場合は無視してデフォルトを使う
    }
    setMounted(true);
  }, []);

  // テーマ変更時に DOM と localStorage を更新
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    const applyTheme = (resolved: "light" | "dark") => {
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
      setResolvedTheme(resolved);
    };

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      applyTheme(systemTheme);

      // システム設定の変更を監視
      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? "dark" : "light");
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // localStorage への書き込みが拒否された場合は無視
    }
  };

  // ハイドレーションミスマッチを防ぐため、マウント前は何も表示しない
  // または、デフォルトのライトテーマで表示
  if (!mounted) {
    return (
      <ThemeProviderContext.Provider
        value={{
          theme: defaultTheme,
          setTheme: () => {},
          resolvedTheme: "light",
        }}
      >
        {children}
      </ThemeProviderContext.Provider>
    );
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

/**
 * テーマコンテキストを取得するカスタムフック
 */
export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme は ThemeProvider 内で使用してください");
  }
  return context;
}
