"use client";

import { useState } from "react";
import Textarea from "@/components/ui/Textarea";

export default function TextareaDemo() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const error =
    submitted && value.trim() === ""
      ? "自己紹介を入力してください。"
      : undefined;

  return (
    <div className="flex flex-col gap-4">
      <Textarea
        id="bio-demo"
        label="自己紹介（インタラクティブ）"
        placeholder="あなたのプロフィールを入力してください"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setSubmitted(false);
        }}
        error={error}
      />
      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="self-start px-4 py-2 rounded-lg text-sm bg-lp-ink text-white hover:bg-lp-ink/80 transition-colors"
      >
        バリデーション確認
      </button>
    </div>
  );
}
