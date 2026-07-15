"use client";

import { cn } from "@/lib/utils";
import { blogCategories } from "@/lib/data";

interface BlogFiltersProps {
  active: string;
  onChange: (category: string) => void;
}

export function BlogFilters({ active, onChange }: BlogFiltersProps) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2"
      role="tablist"
      aria-label="Filter articles by category"
    >
      {blogCategories.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              isActive
                ? "bg-[var(--accent)] text-white shadow-[var(--shadow-accent)]"
                : "border border-[var(--border)] bg-white text-slate-600 hover:border-[var(--border-strong)] hover:text-slate-900"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
