"use client";

import React from "react";
import { ExternalLink, Info, Code2 } from "lucide-react";
import { Resource } from "@/types/resource";
import { CopyButton } from "@/components/ui/CopyButton";

interface ResourceRowProps {
  resource: Resource;
  onSelect: (resource: Resource) => void;
}

export function ResourceRow({ resource, onSelect }: ResourceRowProps) {
  const cloneCommand = `git clone ${resource.url}.git`;

  return (
    <div
      onClick={() => onSelect(resource)}
      className="group p-5 sm:p-6 rounded-xl bg-[#14110E] hover:bg-[#1D1712] border border-[#302720] hover:border-[#A47550]/60 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left Information */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-base sm:text-lg font-bold text-[#F7F4EF] group-hover:text-white transition-colors truncate">
              {resource.name}
            </h3>
            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#A47550]/15 text-[#D5A06B] border border-[#A47550]/30 shrink-0">
              {resource.category}
            </span>
            <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-[#1D1712] text-[#B8ABA0] border border-[#302720] shrink-0">
              {resource.license}
            </span>
          </div>

          <p className="text-sm text-[#B8ABA0] line-clamp-2 leading-relaxed mb-3 group-hover:text-[#F7F4EF]/90 transition-colors">
            {resource.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-[#B8ABA0]/70 flex items-center gap-1 mr-1">
              <Code2 className="w-3.5 h-3.5 text-[#A47550]" />
              Stack:
            </span>
            {resource.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs rounded-md bg-[#090807] border border-[#302720] text-[#B8ABA0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Action Buttons */}
        <div
          className="flex flex-wrap items-center gap-2 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#302720]/60 shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <CopyButton
            textToCopy={cloneCommand}
            label="git clone"
            successLabel="Nusxalandi!"
            className="w-full sm:w-auto"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(resource);
            }}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-[#1D1712] hover:bg-[#261E17] text-[#F7F4EF] border border-[#302720] hover:border-[#584231] transition-colors flex-1 sm:flex-initial"
          >
            <Info className="w-3.5 h-3.5 text-[#D5A06B]" />
            <span>Batafsil</span>
          </button>

          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${resource.name} GitHub sahifasini ochish`}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-[#A47550] hover:bg-[#BD8A60] text-white transition-colors flex-1 sm:flex-initial"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
