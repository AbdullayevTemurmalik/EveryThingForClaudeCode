"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Sparkles } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  badge?: string;
  description?: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Ochiq manbali vositani tanlang...",
  label,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {label && (
        <label className="block text-xs font-semibold text-[#B8ABA0] uppercase tracking-wider mb-2">
          {label}
        </label>
      )}

      {/* Trigger Button - Fully Custom Styled */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left transition-all duration-200 outline-none ${
          isOpen
            ? "bg-[#1D1712] border-2 border-[#A47550] shadow-[0_0_20px_rgba(164,117,80,0.25)]"
            : "bg-[#14110E] hover:bg-[#1D1712] border border-[#302720] hover:border-[#A47550]/80 shadow-md"
        }`}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-[#090807] border border-[#302720] flex items-center justify-center text-[#D5A06B] shrink-0">
            <Sparkles className="w-4 h-4 text-[#A47550]" />
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-sm font-semibold text-[#F7F4EF] truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            {selectedOption?.badge && (
              <span className="text-[11px] text-[#D5A06B] font-mono truncate">
                {selectedOption.badge}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 pl-3 shrink-0">
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-[#1D1712] text-[#B8ABA0] border border-[#302720]">
            {isOpen ? "Yopish" : "Tanlash"}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#D5A06B] transition-transform duration-200 ${
              isOpen ? "rotate-180 text-white" : ""
            }`}
          />
        </div>
      </button>

      {/* Custom Dropdown Floating Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#14110E] border-2 border-[#A47550]/60 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <div className="p-2 border-b border-[#302720] bg-[#090807]/60 flex items-center justify-between text-xs text-[#B8ABA0]">
            <span className="font-medium text-[#D5A06B]">Mavjud ochiq manbalar:</span>
            <span className="font-mono text-[10px]">{options.length} ta manba</span>
          </div>

          <ul
            role="listbox"
            className="max-h-72 overflow-y-auto divide-y divide-[#302720]/40 p-1.5 focus:outline-none scrollbar-thin scrollbar-thumb-[#302720] scrollbar-track-transparent"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[#1D1712] text-white border-l-4 border-[#A47550] shadow-sm"
                      : "hover:bg-[#1D1712]/80 text-[#E6DFD5] hover:text-[#F7F4EF]"
                  }`}
                >
                  <div className="flex flex-col gap-0.5 min-w-0 pr-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm ${
                          isSelected ? "font-bold text-white" : "font-medium"
                        }`}
                      >
                        {option.label}
                      </span>
                      {option.badge && (
                        <span className="inline-block px-2 py-0.5 text-[10px] font-mono rounded-full bg-[#090807] border border-[#302720] text-[#D5A06B]">
                          {option.badge}
                        </span>
                      )}
                    </div>
                    {option.description && (
                      <span className="text-[11px] text-[#B8ABA0] line-clamp-1">
                        {option.description}
                      </span>
                    )}
                  </div>

                  <div className="shrink-0 flex items-center justify-center w-5 h-5">
                    {isSelected ? (
                      <Check className="w-4 h-4 text-[#A47550]" />
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
