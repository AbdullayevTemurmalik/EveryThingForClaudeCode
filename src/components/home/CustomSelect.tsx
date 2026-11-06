"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

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
  placeholder = "Tanlang...",
  label,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-xs font-semibold text-[#B8ABA0] uppercase tracking-wider mb-1.5">
          {label}
        </label>
      )}

      {/* Select Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 bg-[#14110E] hover:bg-[#1D1712] border ${
          isOpen ? "border-[#A47550] ring-1 ring-[#D5A06B]/50" : "border-[#302720] hover:border-[#584231]"
        } rounded-xl text-left text-sm text-[#F7F4EF] transition-all cursor-pointer`}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : <span className="text-[#B8ABA0]">{placeholder}</span>}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#B8ABA0] transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? "transform rotate-180 text-[#D5A06B]" : ""
          }`}
        />
      </button>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-40 w-full mt-1.5 bg-[#14110E] border border-[#302720] rounded-xl shadow-2xl overflow-hidden py-1.5 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <div
                key={option.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[#A47550]/20 text-[#F7F4EF] font-medium border-l-2 border-[#A47550]"
                    : "text-[#B8ABA0] hover:bg-[#1D1712] hover:text-[#F7F4EF]"
                }`}
              >
                <div className="flex flex-col gap-0.5 truncate pr-2">
                  <span className="truncate text-[#F7F4EF] font-medium">{option.label}</span>
                  {option.description && (
                    <span className="text-[11px] text-[#B8ABA0]/70 truncate">
                      {option.description}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {option.badge && (
                    <span className="px-2 py-0.5 text-[10px] rounded-full bg-[#1D1712] border border-[#302720] text-[#D5A06B]">
                      {option.badge}
                    </span>
                  )}
                  {isSelected && <Check className="w-4 h-4 text-[#D5A06B]" />}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
