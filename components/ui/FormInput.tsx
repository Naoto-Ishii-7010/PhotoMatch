import type { InputHTMLAttributes } from "react";
import { BiErrorCircle } from "react-icons/bi";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
};

export default function FormInput({
  label,
  id,
  error,
  className = "",
  ...props
}: FormInputProps) {
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`text-sm font-medium leading-[1.6] ${hasError ? "text-[#ba1a1a]" : "text-lp-ink"}`}
      >
        {label}
      </label>

      <input
        id={id}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={`
          w-full rounded-lg px-4 py-[18px] text-base leading-normal
          shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]
          outline-none transition-all duration-150
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
