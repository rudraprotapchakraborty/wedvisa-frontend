"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((m) => m.HeroScene),
  {
    ssr: false,
    loading: () => <HeroSceneFallback />,
  }
);

function HeroSceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
      <div className="relative h-56 w-56 sm:h-72 sm:w-72">
        <motion.div
          className="absolute inset-6 rounded-full border border-[var(--accent)]/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-[var(--accent)]/35"
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-14 rounded-full border border-slate-900/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/60 shadow-[0_0_24px_var(--accent-glow)]" />
      </div>
    </div>
  );
}

/**
 * Lazy WebGL with graceful degradation for reduced motion / low-end devices.
 */
export function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData =
      "connection" in navigator &&
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
        ?.saveData;
    // Detect very low cores as a coarse proxy for weak GPUs
    const lowEnd =
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency > 0 &&
      navigator.hardwareConcurrency <= 2;

    setEnabled(!reduced && !saveData && !lowEnd);
  }, []);

  if (!enabled) {
    return <HeroSceneFallback />;
  }

  return <HeroScene />;
}
