"use client";

import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { MAIN_REPOSITORY } from "@/data/resources";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { ClaudeIcon } from "@/components/ui/ClaudeIcon";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#302720] bg-[#090807]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo with official Claude App Icon */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D5A06B]/40 shadow-lg flex items-center justify-center bg-[#1D1712]">
            <img
              src="/claude-app-icon-transparent.png"
              alt="Claude Code Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#F7F4EF] text-base sm:text-lg tracking-tight">
                Everything for Claude Code
              </span>
              <img
                src="/claude-starburst-transparent.png"
                alt="Claude Starburst"
                className="w-5 h-5 object-contain"
              />
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded-full bg-[#1D1712] border border-[#302720] text-[#D5A06B]">
                ECC
              </span>
            </div>
            <p className="text-[11px] text-[#B8ABA0] hidden xs:block">
              Open Source & AI Developer Tools Platform
            </p>
          </div>
        </div>

        {/* Right Action: GitHub Link */}
        <div className="flex items-center gap-3">
          <a
            href={MAIN_REPOSITORY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#14110E] hover:bg-[#1D1712] text-[#F7F4EF] border border-[#302720] hover:border-[#584231] transition-all group"
          >
            <GithubIcon className="w-4 h-4 text-[#D5A06B]" />
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B8ABA0] group-hover:text-white" />
          </a>

          <a
            href={MAIN_REPOSITORY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#A47550] hover:bg-[#BD8A60] text-white transition-all shadow-sm"
          >
            <Star className="w-3.5 h-3.5 fill-white" />
            <span className="hidden sm:inline">Star</span>
          </a>
        </div>
      </div>
    </header>
  );
}
