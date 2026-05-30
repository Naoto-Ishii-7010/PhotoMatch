import type { TextareaHTMLAttributes } from "react";
import { BiErrorCircle } from "react-icons/bi";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  id: string;
  error?: string;
};

export default function Textarea({
  label,
  id,
  error,
  rows = 5,
  className = "",
  ...props
}: TextareaProps) {
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`text-sm font-medium leading-[1.6] ${hasError ? "text-[#ba1a1a]" : "text-lp-ink"}`}
      >
        {label}
      </label>

      <textarea
        id={id}
        rows={rows}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={`
          w-full rounded-[6px] px-[17px] py-[13px] text-base leading-[1.5]
          shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
          outline-none transition-all duration-150 resize-y
          placeholder:text-[#b3a899] text-lp-ink
          ${
            hasError
              ? "bg-[rgba(255,218,214,0.2)] ring-2 ring-[#ba1a1a]"
              : "bg-[#f2ede5] focus:bg-[#fff8f3] focus:ring-2 focus:ring-[#6f5224]"
          }
          ${className}
        `.trim()}
        {...props}
      />

      {hasError && (
        <span
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1 text-sm text-[#ba1a1a]"
        >
          <BiErrorCircle className="shrink-0 text-[13px]" />
          {error}
        </span>
      )}
    </div>
  );
}
