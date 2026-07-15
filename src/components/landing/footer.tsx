"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";

const columns = [
  {
    title: "Plan",
    links: [
      { label: "Free tools", href: "#planning-tools" },
      { label: "Budget calculator", href: "/budget-calculator" },
      { label: "Wedding checklist", href: "/checklist" },
      { label: "Guest list", href: "/guest-list" },
      { label: "Timeline", href: "/timeline" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Find suppliers", href: "#suppliers" },
      { label: "Inspiration", href: "#inspiration" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Become a supplier", href: "/register" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#terms" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-slate-900 text-[var(--foreground-on-dark)]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="ambient-glow bottom-0 left-1/3 h-64 w-96 bg-[var(--accent)]/10" />
      </div>

      <div className="relative mx-auto max-w-[var(--max-width)] px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mb-14 grid gap-12 md:grid-cols-4 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col items-start text-left lg:col-span-5">
            <Link href="/" className="group flex select-none items-center gap-2.5">
              <div className="relative h-8 w-8 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={logo}
                  alt="WedVisa Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                wed<span className="text-[var(--accent)]">visa</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[0.8125rem] leading-relaxed text-white/50">
              The free UK wedding planning platform.
              <br />
              Plan it, celebrate it, remember it.
            </p>
          </div>

          {columns.map((col) => (
            <div
              key={col.title}
              className="flex flex-col items-start text-left lg:col-span-2 last:lg:col-span-3"
            >
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                {col.title}
              </h3>
              <ul className="space-y-3.5">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[0.8125rem] text-white/50 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © 2026 Wedvisa Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Made in the UK</p>
        </div>
      </div>
    </footer>
  );
}
