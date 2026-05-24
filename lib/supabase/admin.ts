import "server-only";

import { createClient } from "@supabase/supabase-js";

// サービスロールキーを使用する Supabase 管理者クライアントを生成する
// セッション強制失効など、管理者権限が必要な操作にのみ使用すること
// クライアントコンポーネントやブラウザへ露出させてはならない
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL または SUPABASE_SERVICE_ROLE_KEY が未設定です。",
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      // サーバー上で使用するためセッション永続化は不要
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
