"use client";

import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative h-12 w-full overflow-hidden bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-medium sm:text-sm">
          <motion.span
            className="rounded-full bg-white/15 px-2.5 py-0.5 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
            transition={{ duration: 0.2 }}
          >
            WedVisa AI
          </motion.span>
          <span className="hidden text-white/70 sm:inline">·</span>
          <motion.span
            className="hidden cursor-default sm:inline"
            whileHover={{ opacity: 1, x: 2 }}
            initial={{ opacity: 0.9 }}
          >
            Partner Visa
          </motion.span>
        </div>

        <motion.p
          className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-semibold tracking-wide sm:block"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          95% Approval Guidance
        </motion.p>

        <div className="flex items-center gap-1 sm:gap-2">
          <motion.button
            type="button"
            aria-label="Search"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="h-4 w-4" />
          </motion.button>
          <motion.button
            type="button"
            className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white sm:text-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            EN
            <ChevronDown className="h-3.5 w-3.5 opacity-80" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
