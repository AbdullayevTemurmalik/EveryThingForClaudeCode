import React from "react";
import { Sparkles, CheckCircle } from "lucide-react";

interface HeroProps {
  totalCount: number;
}

export function Hero({ totalCount }: HeroProps) {
  return (
    <section className="relative pt-6 pb-8 border-b border-[#302720]/60">
      <div className="flex flex-col items-start gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1712] border border-[#302720] text-xs text-[#D5A06B]">
          <Sparkles className="w-3.5 h-3.5 text-[#A47550]" />
          <span className="font-medium">Ochiq Manba & AI Dasturchilar Hamjamiyati</span>
          <span className="w-1 h-1 rounded-full bg-[#A47550]"></span>
          <span className="font-mono text-[11px] text-[#B8ABA0] flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-[#4ADE80]" />
            {totalCount} ta tekshirilgan manba
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F7F4EF]">
          Dasturchilar uchun eng yaxshi ochiq manbalar
        </h1>

        <p className="text-sm sm:text-base text-[#B8ABA0] max-w-2xl leading-relaxed">
          AI vositalari, dasturlash resurslari, tayyor yechimlar va foydali GitHub loyihalari —
          barchasi bir joyda.
        </p>
      </div>
    </section>
  );
}
