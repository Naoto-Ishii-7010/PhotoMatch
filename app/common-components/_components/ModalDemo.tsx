"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

type ModalDemoProps = {
  title: string;
  description: string;
  size?: "sm" | "md" | "lg";
  hasFooter?: boolean;
};

export default function ModalDemo({
  title,
  description,
  size = "md",
  hasFooter = true,
}: ModalDemoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        {title}を開く
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        size={size}
        footer={
          hasFooter ? (
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                キャンセル
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                確認
              </Button>
            </>
          ) : undefined
        }
      >
        <p>{description}</p>
      </Modal>
    </>
  );
}
