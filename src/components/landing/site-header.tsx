"use client";

import { AnnouncementBar } from "@/components/landing/announcement-bar";
import { Navbar } from "@/components/landing/navbar";

/** Fixed top chrome so transparent nav sits over the dark hero. */
export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar />
      <Navbar />
    </div>
  );
}
