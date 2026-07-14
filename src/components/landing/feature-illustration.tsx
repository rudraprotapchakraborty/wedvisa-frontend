"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureIllustrationProps {
  icon: LucideIcon;
  title: string;
  accent?: "violet" | "fuchsia" | "indigo";
  className?: string;
}

const accents = {
  violet: {
    bg: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    orb: "bg-violet-500/30",
    icon: "from-violet-600 to-purple-600",
    ring: "ring-violet-200/60",
  },
  fuchsia: {
    bg: "from-fuchsia-500/20 via-pink-500/10 to-violet-500/20",
    orb: "bg-fuchsia-500/30",
    icon: "from-fuchsia-600 to-pink-600",
    ring: "ring-fuchsia-200/60",
  },
  indigo: {
    bg: "from-indigo-500/20 via-violet-500/10 to-purple-500/20",
    orb: "bg-indigo-500/30",
    icon: "from-indigo-600 to-violet-600",
    ring: "ring-indigo-200/60",
  },
};

export function FeatureIllustration({
  icon: Icon,
  title,
  accent = "violet",
  className,
}: FeatureIllustrationProps) {
  const colors = accents[accent];

  return (
    <motion.div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br p-8 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200/80",
        colors.bg,
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl",
          colors.orb
        )}
      />
      <div
        className={cn(
          "absolute -bottom-12 -left-8 h-48 w-48 rounded-full blur-3xl",
          colors.orb
        )}
      />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
              colors.icon
            )}
          >
            <Icon className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-3 w-2/3 rounded-full bg-white/70" />
          <div className="h-3 w-1/2 rounded-full bg-white/50" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  "rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur-sm ring-1",
                  colors.ring
                )}
              >
                <div className="mb-2 h-2 w-8 rounded-full bg-slate-200" />
                <div className="h-2 w-full rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm font-medium text-slate-600">{title}</p>
      </div>
    </motion.div>
  );
}
