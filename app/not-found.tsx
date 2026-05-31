import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="text-6xl font-bold text-gray-300">404</p>
      <h1 className="text-xl font-semibold text-gray-700">
        ページが見つかりません
      </h1>
      <p className="text-sm text-gray-500">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link href="/" className="mt-4">
        <Button>トップへ戻る</Button>
      </Link>
    </div>
  );
}
