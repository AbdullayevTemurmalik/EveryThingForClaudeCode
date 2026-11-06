"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { GitHubShowcase } from "@/components/home/GitHubShowcase";
import { CustomSelect, SelectOption } from "@/components/home/CustomSelect";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceDetailModal } from "@/components/resources/ResourceDetailModal";
import { RESOURCES } from "@/data/resources";
import { Resource } from "@/types/resource";
import { RotateCcw, Sparkles, LayoutGrid } from "lucide-react";

export default function HomePage() {
  const [selectedResourceId, setSelectedResourceId] = useState<string>("all");
  const [modalResource, setModalResource] = useState<Resource | null>(null);

  // Custom Select options
  const selectOptions: SelectOption[] = useMemo(() => {
    return [
      {
        value: "all",
        label: "Barcha manbalarni ko'rsatish",
        badge: `${RESOURCES.length} ta manba`,
        description: "Kutubxonadagi barcha 8 ta loyihani to'liq jadvalda ko'rish",
      },
      ...RESOURCES.map((r) => ({
        value: r.id,
        label: r.name,
        badge: r.category,
        description: r.shortDescription,
      })),
    ];
  }, []);

  // Filtered resources list
  const displayedResources = useMemo(() => {
    if (selectedResourceId === "all") {
      return RESOURCES;
    }
    return RESOURCES.filter((r) => r.id === selectedResourceId);
  }, [selectedResourceId]);

  const handleSelectChange = (val: string) => {
    setSelectedResourceId(val);
  };

  const handleResetToAll = () => {
    setSelectedResourceId("all");
  };

  return (
    <div className="min-h-screen bg-[#090807] text-[#F7F4EF] flex flex-col antialiased selection:bg-[#A47550] selection:text-white">
      {/* Top Navbar with Claude Code Logo & Everything for Claude Code */}
      <Navbar />

      {/* Main Full-Screen Centered Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Section */}
        <Hero totalCount={RESOURCES.length} />

        {/* GitHub Integration & Community Showcase */}
        <GitHubShowcase />

        {/* Custom Select Dropdown Section (Only Select, no search inputs, no category clutter) */}
        <section className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A47550]" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F7F4EF]">
                Ochiq manba vositasini tanlang:
              </h2>
            </div>

            {selectedResourceId !== "all" && (
              <button
                type="button"
                onClick={handleResetToAll}
                className="inline-flex items-center gap-1.5 text-xs text-[#D5A06B] hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Barcha manbalarni qaytarish</span>
              </button>
            )}
          </div>

          {/* Premium Custom Select */}
          <div className="w-full">
            <CustomSelect
              options={selectOptions}
              value={selectedResourceId}
              onChange={handleSelectChange}
              placeholder="Ochiq manbali vositani tanlang..."
            />
          </div>
        </section>

        {/* Repository Compact Cards Grid (Sammi Academy 3-column Style) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-1 text-xs font-semibold uppercase tracking-wider text-[#B8ABA0]">
            <span className="flex items-center gap-1.5">
              <LayoutGrid className="w-3.5 h-3.5 text-[#A47550]" />
              {selectedResourceId === "all"
                ? `Barcha ochiq manbalar (${displayedResources.length})`
                : "Tanlangan manba natijasi:"}
            </span>
            <span className="font-mono text-[11px] text-[#A47550]">
              {selectedResourceId === "all"
                ? "Barchasi ko'rsatilmoqda"
                : displayedResources[0]?.category}
            </span>
          </div>

          {/* Cards Grid (Exact 4 Columns - 2 Rows of 4 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onSelect={(res) => setModalResource(res)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Resource Detail Modal */}
      <ResourceDetailModal
        resource={modalResource}
        onClose={() => setModalResource(null)}
      />
    </div>
  );
}
