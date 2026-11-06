"use client";

import React from "react";
import { Resource } from "@/types/resource";
import { CopyButton } from "@/components/ui/CopyButton";
import {
  ExternalLink,
  Shield,
  Cpu,
  Palette,
  Terminal,
  Zap,
  Bot,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { ClaudeIcon } from "@/components/ui/ClaudeIcon";

interface ResourceCardProps {
  resource: Resource;
  onSelect: (resource: Resource) => void;
}

// Icon mapper for cards
function getResourceIcon(id: string) {
  switch (id) {
    case "everything-for-claude-code":
    case "ecc-temurmalik":
    case "ecc-affaan":
    case "ecc":
      return <ClaudeIcon className="w-7 h-7 text-[#D5A06B]" />;
    case "omniroute":
      return <Zap className="w-7 h-7 text-[#D5A06B]" />;
    case "ui-ux-pro-max-skill":
      return <Palette className="w-7 h-7 text-[#D5A06B]" />;
    case "headroom":
      return <Layers className="w-7 h-7 text-[#D5A06B]" />;
    case "freellmapi":
      return <Cpu className="w-7 h-7 text-[#D5A06B]" />;
    case "claude-mem":
      return <Bot className="w-7 h-7 text-[#D5A06B]" />;
    case "strix":
      return <Shield className="w-7 h-7 text-[#D5A06B]" />;
    default:
      return <Terminal className="w-7 h-7 text-[#D5A06B]" />;
  }
}

export function ResourceCard({ resource, onSelect }: ResourceCardProps) {
  const cloneCommand = `git clone ${resource.url}.git`;

  return (
    <div
      onClick={() => onSelect(resource)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(resource);
        }
      }}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#14110E] hover:bg-[#1A1511] border border-[#302720] hover:border-[#A47550] transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
    >
      {/* Top Banner / Visual Header */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Tool Icon Box */}
          <div className="w-14 h-14 rounded-xl bg-[#090807] border border-[#302720] group-hover:border-[#A47550]/60 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
            {getResourceIcon(resource.id)}
          </div>

          {/* Category Pill */}
          <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[#1D1712] border border-[#302720] text-[#D5A06B] truncate max-w-[140px]">
            {resource.category}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <h3 className="text-base font-bold text-[#F7F4EF] group-hover:text-white transition-colors truncate">
            {resource.name}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-[#B8ABA0] opacity-0 group-hover:opacity-100 group-hover:text-[#D5A06B] transition-opacity shrink-0" />
        </div>

        {/* Short Description */}
        <p className="text-xs text-[#B8ABA0] line-clamp-3 leading-relaxed mb-4 group-hover:text-[#F7F4EF]/90 transition-colors min-h-[48px]">
          {resource.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {resource.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] rounded-md bg-[#090807] border border-[#302720] text-[#B8ABA0]"
            >
              {tech}
            </span>
          ))}
          <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#1D1712] text-[#B8ABA0] border border-[#302720]">
            {resource.license}
          </span>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div
        className="p-4 pt-3 border-t border-[#302720]/80 bg-[#0E0C0A] flex items-center justify-between gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <CopyButton
          textToCopy={cloneCommand}
          label="git clone"
          successLabel="Nusxalandi!"
          className="text-[11px] py-1.5 px-2.5"
        />

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(resource);
            }}
            className="px-3 py-1.5 text-[11px] font-medium rounded-lg bg-[#1D1712] hover:bg-[#261E17] text-[#F7F4EF] border border-[#302720] hover:border-[#584231] transition-colors"
          >
            Batafsil
          </button>

          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${resource.name} GitHub`}
            className="p-2 rounded-lg bg-[#A47550] hover:bg-[#BD8A60] text-white transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
