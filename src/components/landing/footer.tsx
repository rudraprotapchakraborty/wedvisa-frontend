"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";

export function Footer() {
  return (
    <footer className="w-full bg-[#2b221c] text-white font-sans">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-12 mb-12">
          {/* Logo Section */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <Link href="/" className="flex items-center gap-2 select-none group">
              <div className="relative h-8 w-8 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={logo}
                  alt="WedVisa Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                wed<span className="text-[#e85a23]">visa</span>
              </span>
            </Link>
            <p className="mt-4 text-[13px] text-[#eee5db]/70 leading-relaxed font-sans max-w-xs">
              The free UK wedding planning platform.<br />
              Plan it, celebrate it, remember it.
            </p>
          </div>

          {/* Plan Column */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-5">
              Plan
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Free tools", href: "#tools" },
                { label: "Budget calculator", href: "#budget" },
                { label: "Wedding checklist", href: "#checklist" },
                { label: "Guest list", href: "#guests" },
                { label: "Seating plan", href: "#seating" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#eee5db]/80 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover Column */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-5">
              Discover
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Find suppliers", href: "#suppliers" },
                { label: "Inspiration", href: "#inspiration" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Become a supplier", href: "#supplier-signup" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#eee5db]/80 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-4">
              {[
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Terms", href: "#terms" },
                { label: "Privacy", href: "#privacy" },
                { label: "Cookies", href: "#cookies" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#eee5db]/80 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#eee5db]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#eee5db]/40 font-sans">
            © 2026 Wedvisa Ltd. All rights reserved.
          </p>
          <p className="text-xs text-[#eee5db]/40 font-sans">
            Made in the UK
          </p>
        </div>
      </div>
    </footer>
  );
}