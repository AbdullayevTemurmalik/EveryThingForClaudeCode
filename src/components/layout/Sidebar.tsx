"use client";

import React from "react";
import {
  Home,
  Boxes,
  Bot,
  Palette,
  Wrench,
  Cpu,
  ShieldCheck,
  BookOpen,
  X,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { MAIN_REPOSITORY } from "@/data/resources";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeNav: string;
  onNavClick: (navId: string) => void;
}

export function Sidebar({ isOpen, onClose, activeNav, onNavClick }: SidebarProps) {
  const navItems = [
    { id: "home", label: "Bosh sahifa", icon: Home },
    { id: "all", label: "Barcha manbalar", icon: Boxes },
    { id: "ai-tools", label: "AI vositalari", icon: Bot },
    { id: "ui-ux", label: "UI/UX dizayn", icon: Palette },
    { id: "dev-tools", label: "Developer Tools", icon: Wrench },
    { id: "api-models", label: "API va modellar", icon: Cpu },
    { id: "security", label: "Xavfsizlik", icon: ShieldCheck },
    { id: "guides", label: "Qo'llanmalar", icon: BookOpen },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#14110E] border-r border-[#302720] flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand / Logo */}
        <div className="flex items-center justify-between p-5 border-b border-[#302720] bg-[#14110E]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#A47550] to-[#584231] flex items-center justify-center shadow-md">
              <Boxes className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#F7F4EF] tracking-tight text-base">DEV-LIB</span>
                <span className="px-1.5 py-0.2 text-[10px] font-mono rounded bg-[#1D1712] border border-[#302720] text-[#D5A06B]">
                  v1.0
                </span>
              </div>
              <p className="text-[11px] text-[#B8ABA0]">Open Source & AI Hub</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Menyuni yopish"
            className="p-1.5 rounded-lg text-[#B8ABA0] hover:text-[#F7F4EF] hover:bg-[#261E17] lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <div className="px-3 py-2 text-[11px] font-semibold text-[#B8ABA0]/70 uppercase tracking-wider">
            Navigatsiya
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavClick(item.id);
                  onClose();
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#A47550]/15 text-white border-l-2 border-[#A47550] font-semibold"
                    : "text-[#B8ABA0] hover:text-[#F7F4EF] hover:bg-[#1D1712]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? "text-[#D5A06B]" : "text-[#B8ABA0]"
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer: GitHub Repo Link */}
        <div className="p-4 border-t border-[#302720] bg-[#090807]/50 space-y-3">
          <a
            href={MAIN_REPOSITORY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#14110E] hover:bg-[#1D1712] border border-[#302720] hover:border-[#584231] transition-all text-xs text-[#F7F4EF] group"
          >
            <div className="flex items-center gap-2 truncate pr-2">
              <GithubIcon className="w-4 h-4 text-[#D5A06B] shrink-0" />
              <div className="truncate">
                <p className="font-semibold truncate">EveryThingForClaudeCode</p>
                <p className="text-[10px] text-[#B8ABA0] truncate">AbdullayevTemurmalik</p>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#B8ABA0] group-hover:text-white shrink-0" />
          </a>

          <p className="text-[10px] text-center text-[#B8ABA0]/60">
            © 2026 Abdullayev Temurmalik. MIT License.
          </p>
        </div>
      </aside>
    </>
  );
}
