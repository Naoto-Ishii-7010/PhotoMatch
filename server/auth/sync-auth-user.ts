import "server-only";

import type { User as SupabaseUser } from "@supabase/supabase-js";
import { prisma } from "@/server/db";

const getMetadataString = (
  metadata: SupabaseUser["user_metadata"],
  keys: string[],
) => {
  for (const key of keys) {
    const value = metadata?.[key];

    if (typeof value === "string" && value.trim().length > 0) {
      return value;
    }
  }

  return null;
};

export async function syncAuthUser(authUser: SupabaseUser) {
  if (!authUser.email) {
    throw new Error("Supabase Auth user email is missing.");
  }

  const displayName = getMetadataString(authUser.user_metadata, [
    "full_name",
    "name",
    "user_name",
  ]);
  const avatarUrl = getMetadataString(authUser.user_metadata, [
    "avatar_url",
    "picture",
  ]);

  return prisma.user.upsert({
    where: { id: authUser.id },
    create: {
      id: authUser.id,
      email: authUser.email,
      displayName,
      avatarUrl,
    },
    update: {
      email: authUser.email,
    },
  });
}
