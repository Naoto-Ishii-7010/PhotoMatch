// 環境変数を型安全に管理するモジュール
// process.env を直接参照する代わりに、このファイルを通じてアクセスする

import { z } from "zod";

// サーバーサイド専用の環境変数スキーマ
const serverEnvSchema = z.object({
  // Auth.js
  AUTH_SECRET: z.string().min(1),
  AUTH_GOOGLE_ID: z.string().min(1),
  AUTH_GOOGLE_SECRET: z.string().min(1),

  // Database
  DATABASE_URL: z.string().url(),

  // Vercel Blob
  BLOB_READ_WRITE_TOKEN: z.string().min(1),

  // Stripe（フェーズ3 - 任意）
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
});

// クライアントサイドでも使用可能な環境変数スキーマ（NEXT_PUBLIC_ プレフィックス必須）
const clientEnvSchema = z.object({
  // Stripe（フェーズ3 - 任意）
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
});

// サーバーサイド環境変数（サーバーコンポーネント・Route Handler のみ使用可）
export const serverEnv = serverEnvSchema.parse(process.env);

// クライアントサイド環境変数（どこでも使用可）
export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
});
