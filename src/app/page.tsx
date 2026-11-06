"use client";

import React, { useState, useMemo } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { GitHubShowcase } from "@/components/home/GitHubShowcase";
import { SearchBar } from "@/components/home/SearchBar";
import { CategoryFilters } from "@/components/home/CategoryFilters";
import { CustomSelect, SelectOption } from "@/components/home/CustomSelect";
import { ResourceRow } from "@/components/resources/ResourceRow";
import { ResourceDetailModal } from "@/components/resources/ResourceDetailModal";
import { EmptyState } from "@/components/ui/EmptyState";
import { RESOURCES, CATEGORIES } from "@/data/resources";
import { Resource, ResourceCategory } from "@/types/resource";
import { SlidersHorizontal } from "lucide-react";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("Barchasi");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  // Dynamic counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      Barchasi: RESOURCES.length,
    };
    CATEGORIES.forEach((cat) => {
      if (cat !== "Barchasi") {
        counts[cat] = RESOURCES.filter((r) => r.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered resources based on search and category
  const filteredResources = useMemo(() => {
    return RESOURCES.filter((resource) => {
      // Category filter
      const matchesCategory =
        activeCategory === "Barchasi" || resource.category === activeCategory;

      // Search query filter (case-insensitive across name, description, category, and technologies)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        resource.name.toLowerCase().includes(q) ||
        resource.shortDescription.toLowerCase().includes(q) ||
        resource.category.toLowerCase().includes(q) ||
        resource.technologies.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Handle navigation click from sidebar
  const handleNavClick = (navId: string) => {
    setActiveNav(navId);
    if (navId === "home" || navId === "all") {
      setActiveCategory("Barchasi");
      setSearchQuery("");
    } else if (navId === "ai-tools") {
      setActiveCategory("AI Developer Tools");
    } else if (navId === "ui-ux") {
      setActiveCategory("UI/UX & Design");
    } else if (navId === "dev-tools") {
      setActiveCategory("AI Developer Tools");
    } else if (navId === "api-models") {
      setActiveCategory("AI Gateway");
    } else if (navId === "security") {
      setActiveCategory("Cybersecurity");
    } else if (navId === "guides") {
      // Open first resource modal as guide
      setSelectedResource(RESOURCES[0]);
    }
  };

  // Custom Select options for direct tool navigation
  const resourceSelectOptions: SelectOption[] = useMemo(() => {
    return [
      {
        value: "all",
        label: "Barcha vositalarni ko'rish",
        badge: `${RESOURCES.length} ta`,
      },
      ...RESOURCES.map((r) => ({
        value: r.id,
        label: r.name,
        badge: r.category,
        description: r.shortDescription,
      })),
    ];
  }, []);

  const handleQuickSelect = (value: string) => {
    if (value === "all") {
      setActiveCategory("Barchasi");
      setSearchQuery("");
      return;
    }
    const found = RESOURCES.find((r) => r.id === value);
    if (found) {
      setSelectedResource(found);
    }
  };

  const handleResetFilters = () => {
    setActiveCategory("Barchasi");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#090807] text-[#F7F4EF] flex flex-col">
      {/* Sidebar for Desktop & Mobile Drawer */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Mobile Header */}
        <Header onMenuToggle={() => setSidebarOpen(true)} />

        {/* Page Container */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
          {/* Hero Section */}
          <Hero totalCount={RESOURCES.length} />

          {/* GitHub Integration & Community Showcase (Section 16) */}
          <GitHubShowcase />

          {/* Search, Custom Select & Filtering Controls */}
          <section className="space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              {/* Buttonless Search Input */}
              <div className="flex-1">
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  resultCount={filteredResources.length}
                />
              </div>

              {/* Custom Designed Select for Direct Tool Link/Open */}
              <div className="w-full md:w-72 shrink-0">
                <CustomSelect
                  options={resourceSelectOptions}
                  value=""
                  onChange={handleQuickSelect}
                  placeholder="Loyihani tezkor tanlash..."
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 pt-1">
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#B8ABA0] pr-1 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#A47550]" />
                Kategoriyalar:
              </span>
              <CategoryFilters
                categories={CATEGORIES}
                activeCategory={activeCategory}
                categoryCounts={categoryCounts}
                onSelectCategory={setActiveCategory}
              />
            </div>
          </section>

          {/* Repository List (Sammi Reference Layout) */}
          <section className="space-y-3">
            <div className="flex items-center justify-between pb-1 text-xs font-semibold uppercase tracking-wider text-[#B8ABA0]">
              <span>Tavsiya etilgan ochiq manbalar ({filteredResources.length})</span>
              <span className="font-mono text-[11px] text-[#A47550]">
                {activeCategory !== "Barchasi" ? activeCategory : "Barcha toifalar"}
              </span>
            </div>

            {filteredResources.length > 0 ? (
              <div className="space-y-3">
                {filteredResources.map((resource) => (
                  <ResourceRow
                    key={resource.id}
                    resource={resource}
                    onSelect={setSelectedResource}
                  />
                ))}
              </div>
            ) : (
              <EmptyState onReset={handleResetFilters} />
            )}
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Resource Detail Modal */}
      <ResourceDetailModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </div>
  );
}
