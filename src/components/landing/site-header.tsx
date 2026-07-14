"use client";

import { Navbar } from "@/components/landing/navbar";

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <Navbar />
    </div>
  );
}
