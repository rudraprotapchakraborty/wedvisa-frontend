"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/landing/mega-menu";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Transparent white nav only over the home hero; solid elsewhere
  const isLight = !isHome || scrolled || servicesOpen || mobileOpen;

  return (
    <header
      className={cn(
        "w-full transition-all duration-500",
        isLight
          ? "border-b border-slate-200/60 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <nav className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-md shadow-violet-600/25 transition-transform duration-300 group-hover:scale-105">
            <span className="font-serif text-lg font-semibold text-white">W</span>
          </span>
          <span
            className={cn(
              "text-lg font-semibold tracking-tight transition-colors duration-300",
              isLight ? "text-slate-900" : "text-white"
            )}
          >
            WedVisa
          </span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            if (link.hasDropdown && link.label === "Services") {
              return (
                <button
                  key={link.label}
                  type="button"
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300",
                    isLight
                      ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      : "text-white hover:bg-white/10 hover:text-white",
                    servicesOpen && "bg-slate-100 text-slate-900"
                  )}
                  onMouseEnter={() => setServicesOpen(true)}
                  onFocus={() => setServicesOpen(true)}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>
              );
            }

            const isActive =
              link.href === "/blog"
                ? pathname.startsWith("/blog")
                : pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300",
                  isLight
                    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    : "text-white hover:bg-white/10 hover:text-white",
                  isActive && isLight && "bg-violet-50 text-violet-700"
                )}
                onMouseEnter={() => setServicesOpen(false)}
              >
                {link.label}
                {link.hasDropdown ? (
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              isLight
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            )}
          >
            Log In
          </Link>
          <Button asChild size="default" variant="gradient">
            <Link href="/register">Start Free</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            isLight
              ? "text-slate-900 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className="hidden lg:block">
        <MegaMenu open={servicesOpen} onClose={() => setServicesOpen(false)} />
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="flex max-h-[calc(100dvh-7.5rem)] flex-col gap-1 overflow-y-auto px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-violet-50 hover:text-violet-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-4">
                <Button asChild variant="outlineDark" size="lg">
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button asChild variant="gradient" size="lg">
                  <Link href="/register" onClick={() => setMobileOpen(false)}>
                    Start Free
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
