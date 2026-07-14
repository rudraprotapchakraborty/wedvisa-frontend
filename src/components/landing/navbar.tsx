"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Find suppliers", href: "#suppliers" },
    { label: "Free tools", href: "#tools" },
    { label: "Inspiration", href: "#inspiration" },
  ];

  return (
    <header className="w-full bg-[#f6efe7] border-b border-[#dfd2c4]/50 shadow-sm shadow-slate-900/[0.02]">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none group">
          <div className="relative h-8 w-8 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logo}
              alt="WedVisa Logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#000000] font-sans">
            wed<span className="text-[#e85a23]">visa</span>
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-slate-700 hover:text-[#000000] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4.5">
          <Link
            href="/login"
            className="text-[14px] font-semibold text-slate-700 hover:text-[#000000] transition-colors duration-200 px-3 py-2"
          >
            Sign in
          </Link>
          <Button
            asChild
            className="h-10 px-5 rounded-full border border-slate-300 bg-transparent text-[#000000] hover:bg-slate-100/50 font-semibold text-xs"
          >
            <Link href="/register">Become a supplier</Link>
          </Button>
          <Button
            asChild
            className="h-10 px-5 rounded-full bg-[#e85a23] text-white hover:bg-[#d04b19] font-semibold text-xs shadow-sm shadow-[#e85a23]/10"
          >
            <Link href="/register">Start planning free</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 w-full bg-[#f6efe7] border-t border-[#dfd2c4]/50 lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-6 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-semibold text-slate-800 hover:text-[#e85a23] py-2 border-b border-[#dfd2c4]/20"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/login"
                className="text-center font-semibold text-slate-700 hover:text-[#e85a23] py-3 rounded-full border border-slate-300"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/register" onClick={() => setMobileOpen(false)}>
                  Become a supplier
                </Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-[#e85a23] hover:bg-[#d04b19]">
                <Link href="/register" onClick={() => setMobileOpen(false)}>
                  Start planning free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
