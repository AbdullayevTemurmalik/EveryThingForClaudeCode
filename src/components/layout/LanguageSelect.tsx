"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { ChevronDown, Check, Globe } from "lucide-react";

interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "uz", label: "O'zbekcha", shortLabel: "UZ", flag: "🇺🇿" },
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
  { code: "ru", label: "Русский", shortLabel: "RU", flag: "🇷🇺" },
];

export function LanguageSelect() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-[#14110E] hover:bg-[#1D1712] text-[#F7F4EF] border border-[#302720] hover:border-[#584231] focus:outline-none focus:ring-1 focus:ring-[#A47550] transition-all cursor-pointer shadow-sm"
      >
        <span className="text-sm leading-none">{currentLang.flag}</span>
        <span className="font-mono text-[#D5A06B] font-bold">{currentLang.shortLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#B8ABA0] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#D5A06B]" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-1.5 w-40 rounded-xl bg-[#14110E] border border-[#302720] shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md"
        >
          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#B8ABA0]/70 border-b border-[#302720]/60 mb-1 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#D5A06B]" />
            <span>Til / Language</span>
          </div>

          {LANGUAGES.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(item.code)}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#1D1712] text-[#D5A06B] font-semibold"
                    : "text-[#F7F4EF] hover:bg-[#1D1712]/80 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-sm leading-none">{item.flag}</span>
                  <span>{item.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#D5A06B]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
