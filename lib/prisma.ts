// Prisma クライアントのシングルトンインスタンス
// new PrismaClient() を直接呼び出す代わりに、このファイルを通じてアクセスする
// Prisma v7 はドライバーアダプターを使用して PostgreSQL に接続する

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
// Prisma v7 では client.ts を直接 import する
import { PrismaClient } from "../app/generated/prisma/client";

// 開発環境ではホットリロード時に複数のインスタンスが生成されないよう
// グローバル変数に保持する
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
