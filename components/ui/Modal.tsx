"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { BiX } from "react-icons/bi";

type ModalSize = "sm" | "md" | "lg";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
};

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  // ESCキー（cancel イベント）でonCloseを呼ぶ
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handler = () => onClose();
    dialog.addEventListener("cancel", handler);
    return () => dialog.removeEventListener("cancel", handler);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      // backdropクリックで閉じる（dialogの外側をクリックしたとき、targetがdialog自身になる）
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className={`
        ${sizeClasses[size]} w-full m-auto p-0
        bg-[#fff8f3] rounded-2xl
        shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]
        open:animate-none
      `}
    >
      {/* ヘッダー */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[rgba(210,196,182,0.4)]">
        <h2 className="text-lg font-bold text-lp-ink">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          className="p-1 rounded-lg text-lp-ink-muted hover:text-lp-ink hover:bg-[#f2ede5] transition-colors"
        >
          <BiX className="text-xl" />
        </button>
      </div>

      {/* ボディ */}
      <div className="px-6 py-5 text-base text-lp-ink-soft leading-relaxed">
        {children}
      </div>

      {/* フッター */}
      {footer && (
        <div className="flex justify-end gap-3 px-6 pb-6 pt-2 border-t border-[rgba(210,196,182,0.4)]">
          {footer}
        </div>
      )}
    </dialog>
  );
}
