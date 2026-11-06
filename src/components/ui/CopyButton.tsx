"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  successLabel?: string;
  className?: string;
  iconOnly?: boolean;
}

export function CopyButton({
  textToCopy,
  label = "Nusxalash",
  successLabel = "Nusxalandi!",
  className = "",
  iconOnly = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older environments
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Nusxalashda xatolik yuz berdi. Iltimos, qo'lda nusxalang.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? successLabel : label}
      title={copied ? successLabel : label}
      className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-lg transition-colors border ${
        copied
          ? "bg-[#2E7D32]/20 border-[#2E7D32] text-[#4ADE80]"
          : "bg-[#1D1712] hover:bg-[#261E17] border-[#302720] hover:border-[#584231] text-[#F7F4EF]"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-[#4ADE80]" aria-hidden="true" />
          {!iconOnly && <span>{successLabel}</span>}
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-[#B8ABA0]" aria-hidden="true" />
          {!iconOnly && <span>{label}</span>}
        </>
      )}
    </button>
  );
}
