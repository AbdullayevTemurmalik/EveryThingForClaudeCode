import React from "react";
import { Heart, Shield } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { MAIN_REPOSITORY } from "@/data/resources";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#302720] bg-[#14110E] py-10 px-4 sm:px-8 text-xs text-[#B8ABA0]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Information */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#F7F4EF] text-sm">DEV-LIB</span>
            <span className="text-[#302720]">|</span>
            <span>Open Source & AI Developer Library</span>
          </div>
          <p className="text-[#B8ABA0]/80 max-w-md">
            Dasturchilar va AI agentlar uchun eng yaxshi vositalar, ko&apos;nikmalar va arxitektura
            yechimlari jamlangan mustaqil platforma.
          </p>
        </div>

        {/* Right Links & Attribution */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="flex items-center gap-4">
            <a
              href={MAIN_REPOSITORY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F7F4EF] hover:text-[#D5A06B] transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#A47550]" />
              <span>GitHub Repository</span>
            </a>
            <span className="text-[#302720]">•</span>
            <span className="flex items-center gap-1 text-[#B8ABA0]">
              <Shield className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>MIT License</span>
            </span>
          </div>

          <p className="text-[11px] text-[#B8ABA0]/60 flex items-center gap-1">
            Muallif: <span className="text-[#F7F4EF]">Abdullayev Temurmalik</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
