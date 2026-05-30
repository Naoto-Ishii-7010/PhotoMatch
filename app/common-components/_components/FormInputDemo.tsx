"use client";

import { useState } from "react";
import FormInput from "@/components/ui/FormInput";

export default function FormInputDemo() {
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const error =
    submitted && location.trim() === ""
      ? "場所を入力してください。"
      : undefined;

  return (
    <div className="flex flex-col gap-4">
      <FormInput
        id="location-demo"
        label="場所（インタラクティブ）"
        placeholder="都市名または地域を入力"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
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
