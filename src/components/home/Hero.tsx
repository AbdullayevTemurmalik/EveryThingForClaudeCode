import React from "react";
import { CheckCircle } from "lucide-react";
import { ClaudeIcon } from "@/components/ui/ClaudeIcon";

interface HeroProps {
  totalCount: number;
}

export function Hero({ totalCount }: HeroProps) {
  return (
    <section className="relative pt-6 pb-6 border-b border-[#302720]/60">
      <div className="flex flex-col items-start gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1712] border border-[#302720] text-xs text-[#D5A06B]">
          <img
            src="/claude-starburst-transparent.png"
            alt="Claude Starburst"
            className="w-4 h-4 object-contain"
          />
          <span className="font-semibold text-[#F7F4EF]">Everything for Claude Code</span>
          <span className="w-1 h-1 rounded-full bg-[#A47550]"></span>
          <span className="font-mono text-[11px] text-[#B8ABA0] flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-[#4ADE80]" />
            {totalCount} ta tekshirilgan manba
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F7F4EF] flex items-center flex-wrap gap-3">
          <span>Everything for Claude Code</span>
          <img
            src="/claude-starburst-transparent.png"
            alt="Claude Starburst"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain inline-block drop-shadow-[0_0_16px_rgba(217,119,87,0.4)]"
          />
        </h1>

        <p className="text-base sm:text-lg text-[#E6DFD5] font-medium">
          Dasturchilar uchun eng yaxshi ochiq manbalar va AI vositalari
        </p>

        <p className="text-sm sm:text-base text-[#B8ABA0] max-w-2xl leading-relaxed">
          AI vositalari, dasturlash resurslari, tayyor yechimlar va foydali GitHub loyihalari —
          barchasi bir joyda.
        </p>
      </div>
    </section>
  );
}
