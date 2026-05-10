import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "light" | "dark";
  width?: "auto" | "full";
};

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const sizeClassNames = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm",
} as const;

const variantClassNames = {
  light:
    "bg-white text-slate-950 hover:bg-amber-100 focus-visible:ring-slate-400",
  dark: "bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-500",
} as const;

const widthClassNames = {
  auto: "w-auto",
  full: "w-full",
} as const;

export default function Button({
  children,
  className = "",
  size = "md",
  type = "button",
  variant = "dark",
  width = "auto",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClassName} ${sizeClassNames[size]} ${variantClassNames[variant]} ${widthClassNames[width]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
