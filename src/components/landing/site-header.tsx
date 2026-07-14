"use client";

import { Suspense } from "react";
import { Navbar } from "@/components/landing/navbar";

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <Suspense fallback={<div className="h-[72px] bg-[#f6efe7] border-b border-[#dfd2c4]/50" />}>
        <Navbar />
      </Suspense>
    </div>
  );
}
