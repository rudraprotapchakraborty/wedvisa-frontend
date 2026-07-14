"use client";

import { cn } from "@/lib/utils";
import { blogCategories } from "@/lib/data";

interface BlogFiltersProps {
  active: string;
  onChange: (category: string) => void;
}

export function BlogFilters({ active, onChange }: BlogFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {blogCategories.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              isActive
                ? "bg-violet-600 text-white shadow-md shadow-violet-600/25"
                : "border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-700"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
