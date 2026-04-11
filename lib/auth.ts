// Auth.js（next-auth v4）の設定
// Google OAuth プロバイダーのみを使用

import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { serverEnv } from "./env";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: serverEnv.AUTH_GOOGLE_ID,
      clientSecret: serverEnv.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: serverEnv.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      // セッションにユーザーIDとロールを付与する
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
