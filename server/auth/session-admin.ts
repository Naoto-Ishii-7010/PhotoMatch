import "server-only";

import { createAdminClient } from "@/lib/supabase/admin";

// 指定ユーザーのすべての Supabase セッションを強制失効させる
// ユーザー停止処理と必ずセットで呼び出すこと
// アカウント復元時は updateUserById(userId, { ban_duration: "none" }) も呼び出すこと
export async function revokeAllSessions(userId: string): Promise<void> {
  const supabase = createAdminClient();

  const { error } = await supabase.auth.admin.updateUserById(userId, {
    // 実質的に永久停止（約100年）で既存 JWT を即座に無効化する
    ban_duration: "876000h",
  });

  if (error) {
    throw new Error(`Supabase セッション失効に失敗しました: ${error.message}`);
  }
}

// 指定ユーザーの Supabase 側の停止を解除する
// ユーザー復元処理と必ずセットで呼び出すこと
export async function restoreSession(userId: string): Promise<void> {
  const supabase = createAdminClient();

  const { error } = await supabase.auth.admin.updateUserById(userId, {
    ban_duration: "none",
  });

  if (error) {
    throw new Error(
      `Supabase セッション停止解除に失敗しました: ${error.message}`,
    );
  }
}
