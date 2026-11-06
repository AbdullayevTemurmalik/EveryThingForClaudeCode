"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ShieldAlert, Cpu, CheckCircle2, Terminal } from "lucide-react";
import { Resource } from "@/types/resource";
import { CopyButton } from "@/components/ui/CopyButton";

interface ResourceDetailModalProps {
  resource: Resource | null;
  onClose: () => void;
}

export function ResourceDetailModal({
  resource,
  onClose,
}: ResourceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (resource) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [resource, onClose]);

  if (!resource) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#14110E] border border-[#302720] rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#302720] bg-[#1D1712]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#A47550]/20 text-[#D5A06B] border border-[#A47550]/40">
                {resource.category}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-[#14110E] text-[#B8ABA0] border border-[#302720]">
                {resource.license}
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#F7F4EF]">
              {resource.name}
            </h2>
            <p className="text-xs text-[#B8ABA0] mt-1 font-mono">
              Muallif: <span className="text-[#F7F4EF]">{resource.owner}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Yopish"
            className="p-2 rounded-lg text-[#B8ABA0] hover:text-[#F7F4EF] hover:bg-[#261E17] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#F7F4EF]/90">
          {/* Antigravity Mosligi */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1D1712] border border-[#302720]">
            <Cpu className="w-5 h-5 text-[#A47550] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#F7F4EF] text-xs uppercase tracking-wider mb-0.5">
                Google Antigravity bilan mosligi
              </h4>
              <p className="text-xs text-[#B8ABA0]">{resource.antigravityCompatibility}</p>
            </div>
          </div>

          {/* Tavsif */}
          <div>
            <h3 className="font-semibold text-[#F7F4EF] mb-2 text-base">Loyiha haqida</h3>
            <p className="text-[#B8ABA0] leading-relaxed">{resource.fullDescription}</p>
          </div>

          {/* Asosiy Imkoniyatlar */}
          <div>
            <h3 className="font-semibold text-[#F7F4EF] mb-2 text-base">Asosiy imkoniyatlari</h3>
            <ul className="space-y-2">
              {resource.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#B8ABA0]">
                  <CheckCircle2 className="w-4 h-4 text-[#A47550] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Texnologiyalar */}
          <div>
            <h3 className="font-semibold text-[#F7F4EF] mb-2 text-base">Texnologiyalar</h3>
            <div className="flex flex-wrap gap-1.5">
              {resource.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#1D1712] border border-[#302720] text-[#B8ABA0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* O'rnatish yo'riqnomasi */}
          <div>
            <h3 className="font-semibold text-[#F7F4EF] mb-2 text-base flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#A47550]" />
              <span>O&apos;rnatish va ishga tushirish</span>
            </h3>
            <div className="space-y-2">
              {resource.installCommands.map((cmd, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#090807] border border-[#302720] font-mono text-xs text-[#F7F4EF]"
                >
                  <span className="truncate mr-2">{cmd}</span>
                  <CopyButton textToCopy={cmd} iconOnly label="Nusxalash" />
                </div>
              ))}
            </div>
          </div>

          {/* Tavsiya etilgan foydalanish sohasi */}
          <div className="p-4 rounded-lg bg-[#1D1712] border border-[#302720]">
            <h4 className="font-semibold text-[#F7F4EF] text-xs uppercase tracking-wider mb-1">
              Tavsiya etilgan foydalanish sohasi
            </h4>
            <p className="text-xs text-[#B8ABA0]">{resource.recommendedUse}</p>
          </div>

          {/* Ogohlantirish (Mavjud bo'lsa) */}
          {resource.warning && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-[#C77700]/10 border border-[#C77700]/40 text-[#D5A06B]">
              <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs uppercase tracking-wider mb-1 text-[#F7F4EF]">
                  Diqqat va Xavfsizlik Eslatmasi
                </h4>
                <p className="text-xs leading-relaxed">{resource.warning}</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-t border-[#302720] bg-[#1D1712]">
          <div className="flex items-center gap-2">
            <CopyButton
              textToCopy={resource.cloneUrl}
              label="git clone buyrug'i"
              successLabel="Clone nusxalandi!"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-lg text-[#B8ABA0] hover:text-[#F7F4EF] hover:bg-[#261E17] border border-[#302720]"
            >
              Yopish
            </button>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-[#A47550] hover:bg-[#BD8A60] text-white transition-colors"
            >
              <span>GitHub&apos;da ko&apos;rish</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
