import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        ".next/",
        "app/generated/",
        "**/*.config.*",
        "**/types/**",
      ],
    },
  },
  resolve: {
    alias: {
      // Next.js / TypeScript と同じ @/ エイリアスを Vitest でも解決する
      "@": path.resolve(__dirname, "."),
      // Next.js の server-only は Vitest では解決できないため、テスト時は空スタブに差し替える
      "server-only": path.resolve(__dirname, "tests/stubs/server-only.ts"),
    },
  },
});
