DO $$
BEGIN
  CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$
BEGIN
  CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'SUSPENDED');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DROP TABLE IF EXISTS "Account";
DROP TABLE IF EXISTS "Session";

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'User'
      AND column_name = 'name'
  ) AND NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'User'
      AND column_name = 'displayName'
  ) THEN
    ALTER TABLE "User" RENAME COLUMN "name" TO "displayName";
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'User'
      AND column_name = 'image'
  ) AND NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'User'
      AND column_name = 'avatarUrl'
  ) THEN
    ALTER TABLE "User" RENAME COLUMN "image" TO "avatarUrl";
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'User'
      AND column_name = 'id'
      AND udt_name <> 'uuid'
  ) THEN
    ALTER TABLE "User"
      ALTER COLUMN "id" TYPE UUID USING "id"::uuid;
  END IF;
END $$;

ALTER TABLE "User"
  DROP COLUMN IF EXISTS "emailVerified";

ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS "displayName" TEXT,
  ADD COLUMN IF NOT EXISTS "avatarUrl" TEXT,
  ADD COLUMN IF NOT EXISTS "role" "UserRole" NOT NULL DEFAULT 'USER',
  ADD COLUMN IF NOT EXISTS "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE';

CREATE INDEX IF NOT EXISTS "User_role_idx" ON "User"("role");
CREATE INDEX IF NOT EXISTS "User_status_idx" ON "User"("status");

ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'auth'
      AND p.proname = 'uid'
  ) THEN
    DROP POLICY IF EXISTS "Users can read own row" ON "User";
    EXECUTE '
      CREATE POLICY "Users can read own row"
        ON "User"
        FOR SELECT
        TO authenticated
        USING ((SELECT auth.uid()) = "id")
    ';

    DROP POLICY IF EXISTS "Users can update own row" ON "User";
    EXECUTE '
      CREATE POLICY "Users can update own row"
        ON "User"
        FOR UPDATE
        TO authenticated
        USING ((SELECT auth.uid()) = "id")
        WITH CHECK ((SELECT auth.uid()) = "id")
    ';
  END IF;
END $$;
