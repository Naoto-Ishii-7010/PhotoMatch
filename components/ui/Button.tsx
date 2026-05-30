import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

// ホバー時の影はFigmaのhover stateに合わせている
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-lp-brand text-[#fff2e5] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]",
  secondary:
    "border border-[#6f5224] text-[#6f5224] bg-transparent shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[#f4e6d5] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]",
  danger:
    "bg-lp-accent text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#a7391a] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center px-6 py-4 rounded-xl text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
