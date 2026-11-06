"use client";

import React from "react";
import { ResourceCategory } from "@/types/resource";

interface CategoryFiltersProps {
  categories: readonly ResourceCategory[];
  activeCategory: ResourceCategory;
  categoryCounts: Record<string, number>;
  onSelectCategory: (category: ResourceCategory) => void;
}

export function CategoryFilters({
  categories,
  activeCategory,
  categoryCounts,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar py-1">
      {categories.map((cat) => {
        const count = categoryCounts[cat] || 0;
        const isActive = activeCategory === cat;

        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all border ${
              isActive
                ? "bg-[#A47550] border-[#A47550] text-white shadow-sm"
                : "bg-[#14110E] hover:bg-[#1D1712] border-[#302720] hover:border-[#584231] text-[#B8ABA0] hover:text-[#F7F4EF]"
            }`}
          >
            <span>{cat}</span>
            <span
              className={`px-1.5 py-0.2 text-[10px] font-mono rounded-full ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-[#1D1712] text-[#B8ABA0] border border-[#302720]"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
