"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ShieldAlert, Cpu, CheckCircle2, Terminal } from "lucide-react";
import { Resource } from "@/types/resource";
import { CopyButton } from "@/components/ui/CopyButton";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ResourceDetailModalProps {
  resource: Resource | null;
  onClose: () => void;
}

export function ResourceDetailModal({
  resource,
  onClose,
}: ResourceDetailModalProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language] || TRANSLATIONS.uz;

  const labels = {
    uz: {
      author: "Muallif:",
      compatibility: "Google Antigravity bilan mosligi",
      overview: "Loyiha haqida",
      features: "Asosiy imkoniyatlari",
      recommended: "Tavsiya etilgan foydalanish holati",
      install: "O'rnatish va ishga tushirish buyruqlari",
      openGithub: "GitHub Repozitoriyasini ochish",
      warningTitle: "Xavfsizlik ogohlantirishi",
      close: "Yopish",
      copied: "Nusxalandi!",
    },
    en: {
      author: "Author:",
      compatibility: "Google Antigravity Compatibility",
      overview: "About the Project",
      features: "Key Features",
      recommended: "Recommended Use Case",
      install: "Installation & Run Commands",
      openGithub: "Open GitHub Repository",
      warningTitle: "Security Notice",
      close: "Close",
      copied: "Copied!",
    },
    ru: {
      author: "Автор:",
      compatibility: "Совместимость с Google Antigravity",
      overview: "О проекте",
      features: "Основные возможности",
      recommended: "Рекомендуемые сценарии",
      install: "Команды установки и запуска",
      openGithub: "Открыть репозиторий GitHub",
      warningTitle: "Предупреждение безопасности",
      close: "Закрыть",
      copied: "Скопировано!",
    },
  }[language] || {
    author: "Muallif:",
    compatibility: "Google Antigravity bilan mosligi",
    overview: "Loyiha haqida",
    features: "Asosiy imkoniyatlari",
    recommended: "Tavsiya etilgan foydalanish holati",
    install: "O'rnatish va ishga tushirish buyruqlari",
    openGithub: "GitHub Repozitoriyasini ochish",
    warningTitle: "Xavfsizlik ogohlantirishi",
    close: "Yopish",
    copied: "Nusxalandi!",
  };

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
              {labels.author} <span className="text-[#F7F4EF]">{resource.owner}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            className="p-2 rounded-lg text-[#B8ABA0] hover:text-[#F7F4EF] hover:bg-[#261E17] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#F7F4EF]/90">
          {/* Antigravity Compatibility */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1D1712] border border-[#302720]">
            <Cpu className="w-5 h-5 text-[#A47550] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#F7F4EF] text-xs uppercase tracking-wider mb-0.5">
                {labels.compatibility}
              </h4>
              <p className="text-xs text-[#B8ABA0]">{resource.antigravityCompatibility}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-[#F7F4EF] mb-2 text-base">{labels.overview}</h3>
            <p className="text-[#B8ABA0] leading-relaxed">{resource.fullDescription}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-[#F7F4EF] mb-2 text-base">{labels.features}</h3>
            <ul className="space-y-2">
              {resource.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#B8ABA0]">
                  <CheckCircle2 className="w-4 h-4 text-[#D5A06B] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Use */}
          <div>
            <h3 className="font-semibold text-[#F7F4EF] mb-1.5 text-base">{labels.recommended}</h3>
            <p className="text-xs text-[#B8ABA0] bg-[#1D1712] p-3 rounded-lg border border-[#302720]">
              {resource.recommendedUse}
            </p>
          </div>

          {/* Warning banner */}
          {resource.warning && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#2A1510] border border-[#7A2E1E] text-xs text-[#FCA5A5]">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-[#EF4444]" />
              <div>
                <span className="font-semibold">{labels.warningTitle}: </span>
                {resource.warning}
              </div>
            </div>
          )}

          {/* Install Commands */}
          <div>
            <h3 className="font-semibold text-[#F7F4EF] mb-2 text-base flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#A47550]" />
              <span>{labels.install}</span>
            </h3>
            <div className="space-y-2">
              {resource.installCommands.map((cmd, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#090807] border border-[#302720] font-mono text-xs text-[#E6DFD5] overflow-x-auto"
                >
                  <code className="text-[#D5A06B] mr-2">{cmd}</code>
                  {!cmd.startsWith("#") && (
                    <CopyButton textToCopy={cmd} label="Copy" successLabel={labels.copied} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#302720] bg-[#1D1712] flex items-center justify-between gap-3">
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#A47550] hover:bg-[#BD8A60] text-white transition-colors"
          >
            <span>{labels.openGithub}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#14110E] hover:bg-[#261E17] text-[#B8ABA0] hover:text-[#F7F4EF] border border-[#302720] transition-colors"
          >
            {labels.close}
          </button>
        </div>
      </div>
    </div>
  );
}
