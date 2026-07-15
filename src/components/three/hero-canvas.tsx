"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
        <div className="absolute inset-6 rounded-full border border-[var(--accent)]/25 hero-orbit-slow" />
        <div className="absolute inset-2 rounded-full border border-[var(--accent)]/35 hero-orbit-med" />
        <div className="absolute inset-14 rounded-full border border-slate-900/10 hero-orbit-fast" />
        <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/60 shadow-[0_0_24px_var(--accent-glow)]" />
      </div>
    </div>
  );
}

/**
 * Lazy WebGL with graceful degradation for reduced motion / low-end / mobile.
 * Mobile gets the CSS fallback — WebGL under text is pure lag on phones.
 */
export function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const saveData = !!conn?.saveData;
    const slowNet =
      conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g";
    const cores = navigator.hardwareConcurrency || 4;
    const mem =
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
    const lowEnd = cores <= 2 || mem <= 2;

    setEnabled(desktop && !reduced && !saveData && !slowNet && !lowEnd);
  }, []);

  if (!enabled) {
    return <HeroSceneFallback />;
  }

  return <HeroScene />;
}
