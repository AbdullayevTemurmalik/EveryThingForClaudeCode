"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { GitHubShowcase } from "@/components/home/GitHubShowcase";
import { CustomSelect, SelectOption } from "@/components/home/CustomSelect";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceDetailModal } from "@/components/resources/ResourceDetailModal";
import { getLocalizedResources } from "@/data/localizedResources";
import { Resource } from "@/types/resource";
import { RotateCcw, Sparkles, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function HomePage() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language] || TRANSLATIONS.uz;

  const [selectedResourceId, setSelectedResourceId] = useState<string>("all");
  const [modalResource, setModalResource] = useState<Resource | null>(null);

  // Localized resources list dynamically updated when language changes
  const resources = useMemo(() => {
    return getLocalizedResources(language);
  }, [language]);

  // Keep open modal in sync with active language
  const activeModalResource = useMemo(() => {
    if (!modalResource) return null;
    return resources.find((r) => r.id === modalResource.id) || modalResource;
  }, [modalResource, resources]);

  // Custom Select options in active language
  const selectOptions: SelectOption[] = useMemo(() => {
    return [
      {
        value: "all",
        label: t.select.allLabel,
        badge: t.select.allBadge,
        description: t.select.allDesc,
      },
      ...resources.map((r) => ({
        value: r.id,
        label: r.name,
        badge: r.category,
        description: r.shortDescription,
      })),
    ];
  }, [resources, t]);

  // Filtered resources list
  const displayedResources = useMemo(() => {
    if (selectedResourceId === "all") {
      return resources;
    }
    return resources.filter((r) => r.id === selectedResourceId);
  }, [selectedResourceId, resources]);

  const handleSelectChange = (val: string) => {
    setSelectedResourceId(val);
  };

  const handleResetToAll = () => {
    setSelectedResourceId("all");
  };

  return (
    <div className="min-h-screen bg-[#090807] text-[#F7F4EF] flex flex-col antialiased selection:bg-[#A47550] selection:text-white">
      {/* Top Navbar with Claude Code Logo, Language Select & GitHub */}
      <Navbar />

      {/* Main Full-Screen Centered Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Section */}
        <Hero totalCount={resources.length} />

        {/* GitHub Integration & Community Showcase */}
        <GitHubShowcase />

        {/* Custom Select Dropdown Section */}
        <section className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A47550]" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#F7F4EF]">
                {t.select.heading}
              </h2>
            </div>

            {selectedResourceId !== "all" && (
              <button
                type="button"
                onClick={handleResetToAll}
                className="inline-flex items-center gap-1.5 text-xs text-[#D5A06B] hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.select.reset}</span>
              </button>
            )}
          </div>

          {/* Premium Custom Select */}
          <div className="w-full">
            <CustomSelect
              options={selectOptions}
              value={selectedResourceId}
              onChange={handleSelectChange}
              placeholder={t.select.placeholder}
            />
          </div>
        </section>

        {/* Repository Compact Cards Grid (Exact 4 Columns) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-1 text-xs font-semibold uppercase tracking-wider text-[#B8ABA0]">
            <span className="flex items-center gap-1.5">
              <LayoutGrid className="w-3.5 h-3.5 text-[#A47550]" />
              {selectedResourceId === "all"
                ? `${t.select.allBadge} (${displayedResources.length})`
                : `${displayedResources[0]?.name}`}
            </span>
            <span className="font-mono text-[11px] text-[#A47550]">
              {selectedResourceId === "all"
                ? t.select.allLabel
                : displayedResources[0]?.category}
            </span>
          </div>

          {/* Cards Grid */}
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
        resource={activeModalResource}
        onClose={() => setModalResource(null)}
      />
    </div>
  );
}
