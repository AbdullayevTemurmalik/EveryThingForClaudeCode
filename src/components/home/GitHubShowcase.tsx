"use client";

import React, { useEffect, useState } from "react";
import { Star, GitFork, AlertCircle, ExternalLink } from "lucide-react";
import { MAIN_REPOSITORY } from "@/data/resources";
import { GitHubRepoStats } from "@/types/resource";

export function GitHubShowcase() {
  const [stats, setStats] = useState<GitHubRepoStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchStats() {
      try {
        const res = await fetch("/api/github-stats");
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setStats(data);
        } else {
          if (isMounted) setStats({ stars: null, forks: null, openIssues: null, error: true });
        }
      } catch {
        if (isMounted) setStats({ stars: null, forks: null, openIssues: null, error: true });
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchStats();
    return () => {
      isMounted = false;
    };
  }, []);

  const hasRealStats =
    stats &&
    !stats.error &&
    typeof stats.stars === "number" &&
    typeof stats.forks === "number";

  return (
    <section className="my-6 p-6 sm:p-7 rounded-xl bg-gradient-to-r from-[#14110E] via-[#1D1712] to-[#14110E] border border-[#302720] hover:border-[#584231] transition-all">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Information */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-5 h-5 text-[#D5A06B]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D5A06B]">
              Rasmiy GitHub Hamjamiyati
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-[#F7F4EF] mb-2">
            {MAIN_REPOSITORY.title}
          </h2>

          <p className="text-sm text-[#B8ABA0] leading-relaxed">
            {MAIN_REPOSITORY.description}
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-[#302720]/60 text-xs">
            {loading ? (
              <span className="text-[#B8ABA0]/70 flex items-center gap-1.5 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#A47550] animate-pulse"></span>
                GitHub statistikasi yangilanmoqda...
              </span>
            ) : hasRealStats ? (
              <>
                <div className="flex items-center gap-1.5 text-[#F7F4EF] font-mono">
                  <Star className="w-3.5 h-3.5 text-[#D5A06B]" />
                  <span className="font-semibold">{stats.stars}</span>
                  <span className="text-[#B8ABA0]">yulduz</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#F7F4EF] font-mono">
                  <GitFork className="w-3.5 h-3.5 text-[#B8ABA0]" />
                  <span className="font-semibold">{stats.forks}</span>
                  <span className="text-[#B8ABA0]">fork</span>
                </div>
                {typeof stats.openIssues === "number" && (
                  <div className="flex items-center gap-1.5 text-[#B8ABA0] font-mono">
                    <span>{stats.openIssues} ochiq masala</span>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center gap-1.5 text-[#B8ABA0]/80">
                <AlertCircle className="w-3.5 h-3.5 text-[#A47550]" />
                <span className="text-xs">
                  Statistika vaqtincha yuklanmadi (repository sozlanmoqda)
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <a
            href={MAIN_REPOSITORY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#A47550] hover:bg-[#BD8A60] text-white shadow-md transition-colors"
          >
            <Star className="w-4 h-4 fill-white" />
            <span>GitHub’da yulduzcha qo‘yish</span>
          </a>

          <a
            href={MAIN_REPOSITORY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-[#14110E] hover:bg-[#261E17] text-[#F7F4EF] border border-[#302720] hover:border-[#584231] transition-colors"
          >
            <span>Repositoryni ko‘rish</span>
            <ExternalLink className="w-4 h-4 text-[#B8ABA0]" />
          </a>
        </div>
      </div>
    </section>
  );
}
