"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="text-6xl font-bold text-gray-300">500</p>
      <h1 className="text-xl font-semibold text-gray-700">
        エラーが発生しました
      </h1>
      <p className="text-sm text-gray-500">
        予期しないエラーが発生しました。しばらく経ってから再度お試しください。
      </p>
      <Button className="mt-4" onClick={reset}>
        再試行する
      </Button>
    </div>
  );
}
