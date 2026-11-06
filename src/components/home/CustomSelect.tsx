"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

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
  label,
  className = "",
}: CustomSelectProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {label && (
        <label className="block text-xs font-semibold text-[#B8ABA0] uppercase tracking-wider mb-1.5">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label || "Ochiq manbali vositani tanlang"}
          className="w-full appearance-none px-4 py-3 bg-[#14110E] hover:bg-[#1D1712] focus:bg-[#14110E] border border-[#302720] hover:border-[#A47550] focus:border-[#A47550] focus:ring-1 focus:ring-[#D5A06B] rounded-xl text-sm font-medium text-[#F7F4EF] cursor-pointer outline-none transition-all pr-10 shadow-sm"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#14110E] text-[#F7F4EF] py-2"
            >
              {option.label} {option.badge ? `(${option.badge})` : ""}
            </option>
          ))}
        </select>

        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#D5A06B]">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
