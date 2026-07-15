"use client";

import { Suspense } from "react";
import { Navbar } from "@/components/landing/navbar";

export function SiteHeader() {
  return (
    <Suspense
      fallback={
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="h-14 w-full max-w-[var(--max-width)] rounded-2xl border border-[var(--border)] bg-[var(--background)]/75 shadow-[var(--shadow-sm)] backdrop-blur-xl sm:h-[3.75rem] sm:rounded-full" />
        </div>
      }
    >
      <Navbar />
    </Suspense>
  );
}
