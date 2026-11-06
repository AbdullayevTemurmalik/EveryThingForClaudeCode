"use client";

import React from "react";
import { Menu, Boxes } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { MAIN_REPOSITORY } from "@/data/resources";

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#14110E]/95 backdrop-blur-md border-b border-[#302720]">
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label="Menyuni ochish"
          className="p-2 rounded-lg text-[#B8ABA0] hover:text-[#F7F4EF] hover:bg-[#1D1712] border border-[#302720] transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#A47550] flex items-center justify-center">
            <Boxes className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-[#F7F4EF] text-sm tracking-tight">DEV-LIB</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={MAIN_REPOSITORY.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="p-2 rounded-lg text-[#B8ABA0] hover:text-white hover:bg-[#1D1712] border border-[#302720] transition-colors"
        >
          <GithubIcon className="w-4 h-4 text-[#D5A06B]" />
        </a>
      </div>
    </header>
  );
}
