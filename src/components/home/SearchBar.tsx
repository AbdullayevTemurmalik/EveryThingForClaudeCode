"use client";

import React, { useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  resultCount,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <div className="absolute left-3.5 pointer-events-none text-[#B8ABA0]">
          <Search className="w-4 h-4" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Nom, texnologiya yoki tavsif bo'yicha qidiring..."
          aria-label="Manbalarni qidirish"
          className="w-full pl-10 pr-24 py-3 bg-[#14110E] hover:bg-[#1D1712] focus:bg-[#14110E] text-sm text-[#F7F4EF] placeholder-[#B8ABA0]/60 border border-[#302720] focus:border-[#A47550] rounded-xl outline-none transition-all"
        />

        <div className="absolute right-3 flex items-center gap-1.5">
          {searchQuery ? (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Qidiruvni tozalash"
              className="p-1 rounded-md text-[#B8ABA0] hover:text-[#F7F4EF] hover:bg-[#261E17] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-[#B8ABA0] bg-[#1D1712] border border-[#302720] rounded">
              <span className="text-[11px]">⌘</span>K
            </kbd>
          )}

          <span className="text-xs font-mono text-[#B8ABA0]/80 pl-1.5 border-l border-[#302720]">
            {resultCount} ta
          </span>
        </div>
      </div>
    </div>
  );
}
