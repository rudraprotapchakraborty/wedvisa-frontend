"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth/auth-modal";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo, springSnappy } from "@/lib/motion";

const navLinks = [
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "How it works", href: "#how-it-works", id: "how-it-works" },
  { label: "Free tools", href: "#planning-tools", id: "planning-tools" },
  { label: "Suppliers", href: "#suppliers", id: "suppliers" },
  { label: "Inspiration", href: "#inspiration", id: "inspiration" },
];

function AnimatedMenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-4 w-5" aria-hidden>
      <motion.span
        className="absolute left-0 top-0 block h-[1.5px] w-full origin-center rounded-full bg-current"
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.35, ease: easeOutExpo }}
      />
      <motion.span
        className="absolute left-0 top-[7px] block h-[1.5px] w-full rounded-full bg-current"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.25, ease: easeOutExpo }}
      />
      <motion.span
        className="absolute left-0 top-[14px] block h-[1.5px] w-full origin-center rounded-full bg-current"
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.35, ease: easeOutExpo }}
      />
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navListRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const indicatorLeft = useMotionValue(0);
  const indicatorWidth = useMotionValue(0);
  const springLeft = useSpring(indicatorLeft, springSnappy);
  const springWidth = useSpring(indicatorWidth, springSnappy);

  const { scrollY } = useScroll();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const updateIndicator = useCallback(
    (key: string | null) => {
      if (!key || !navListRef.current) {
        indicatorWidth.set(0);
        return;
      }
      const el = linkRefs.current.get(key);
      const parent = navListRef.current;
      if (!el) {
        indicatorWidth.set(0);
        return;
      }
      const parentRect = parent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      indicatorLeft.set(rect.left - parentRect.left);
      indicatorWidth.set(rect.width);
    },
    [indicatorLeft, indicatorWidth]
  );

  useEffect(() => {
    updateIndicator(hoveredLink ?? activeSection);
  }, [hoveredLink, activeSection, updateIndicator]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = navLinks.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const lenis = (
      window as unknown as {
        __lenis?: { stop: () => void; start: () => void };
      }
    ).__lenis;
    if (mobileOpen) lenis?.stop?.();
    else lenis?.start?.();
    return () => {
      document.body.style.overflow = "";
      lenis?.start?.();
    };
  }, [mobileOpen]);

  useEffect(() => {
    const auth = searchParams.get("auth");
    if (auth === "login") {
      setActiveTab("signin");
      setAuthOpen(true);
    } else if (auth === "register") {
      setActiveTab("signup");
      setAuthOpen(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const handleClose = () => {
    setAuthOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth");
    const qs = params.toString();
    router.replace(qs ? `/?${qs}` : "/", { scroll: false });
  };

  const openAuth = (tab: "signin" | "signup") => {
    setActiveTab(tab);
    setAuthOpen(true);
    setMobileOpen(false);
  };

  const elevated = scrolled || mobileOpen;
  const linkHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <>
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <header
          className={cn(
            "w-full max-w-[var(--max-width)]",
            "transition-[box-shadow,border-radius,background,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            elevated
              ? "rounded-2xl border border-[var(--border)] bg-[var(--background)]/85 shadow-[var(--shadow-lg)] backdrop-blur-2xl sm:rounded-full"
              : "rounded-none border border-transparent bg-transparent shadow-none"
          )}
        >
          {/*
            Single-row flex: [logo + links] ........ [actions]
            No absolute positioning — impossible for Inspiration and Sign in to overlap.
          */}
          <nav
            className={cn(
              "flex w-full items-center justify-between gap-4 transition-[height,padding] duration-500",
              elevated
                ? "h-14 px-3 sm:h-[3.75rem] sm:px-5"
                : "h-[var(--header-height)] px-4 sm:px-6 lg:px-8"
            )}
            aria-label="Primary"
          >
            {/* LEFT: logo + desktop links */}
            <div className="flex min-w-0 items-center gap-6 xl:gap-8">
              <Link
                href="/"
                className="group flex shrink-0 select-none items-center gap-2 sm:gap-2.5"
                onClick={() => setMobileOpen(false)}
              >
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-[var(--border)] transition-all duration-500 group-hover:ring-[var(--accent)]/30 group-hover:shadow-[0_0_20px_var(--accent-glow)]">
                  <Image
                    src={logo}
                    alt="WedVisa Logo"
                    fill
                    sizes="32px"
                    className="object-contain p-0.5 transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </span>
                <span className="whitespace-nowrap text-[1.125rem] font-bold tracking-tight text-slate-900 sm:text-xl">
                  wed<span className="text-[var(--accent)]">visa</span>
                </span>
              </Link>

              {/* Desktop links — sit beside logo, never absolute */}
              <div
                ref={navListRef}
                className="relative hidden items-center lg:flex"
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="relative flex items-center">
                  <motion.div
                    className="pointer-events-none absolute top-0.5 bottom-0.5 rounded-full bg-slate-900/[0.05] ring-1 ring-[var(--border)]"
                    style={{
                      left: springLeft,
                      width: springWidth,
                    }}
                    aria-hidden
                  />

                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    const isHot = hoveredLink === link.id || isActive;
                    return (
                      <Link
                        key={link.id}
                        ref={(el) => {
                          if (el) linkRefs.current.set(link.id, el);
                          else linkRefs.current.delete(link.id);
                        }}
                        href={linkHref(link.href)}
                        onMouseEnter={() => setHoveredLink(link.id)}
                        onFocus={() => setHoveredLink(link.id)}
                        onBlur={() => setHoveredLink(null)}
                        className={cn(
                          "relative z-10 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12.5px] font-medium tracking-[-0.01em] transition-colors duration-300 xl:px-3 xl:text-[13px]",
                          isHot
                            ? "text-slate-900"
                            : "text-slate-500 hover:text-slate-800"
                        )}
                        aria-current={isActive ? "true" : undefined}
                      >
                        {link.label}
                        <motion.span
                          className="absolute bottom-0.5 left-1/2 h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-[var(--accent)]"
                          initial={false}
                          animate={{
                            opacity: isActive && !hoveredLink ? 1 : 0,
                            scale: isActive && !hoveredLink ? 1 : 0.5,
                          }}
                          transition={{ duration: 0.25 }}
                          aria-hidden
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: actions only — isolated from nav links */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
              <div className="hidden items-center gap-2 lg:flex">
                <button
                  type="button"
                  onClick={() => openAuth("signin")}
                  className="shrink-0 cursor-pointer whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold text-slate-600 transition-colors duration-300 hover:bg-slate-900/[0.04] hover:text-slate-900"
                >
                  Sign in
                </button>

                <Button
                  asChild
                  variant="outlineDark"
                  size="sm"
                  className={cn(
                    "h-9 shrink-0 whitespace-nowrap px-3.5 text-[12.5px]",
                    elevated && "border-[var(--border-strong)] bg-white/70"
                  )}
                >
                  <Link href="/register">Become a supplier</Link>
                </Button>

                <Button
                  type="button"
                  size="sm"
                  className="h-9 shrink-0 cursor-pointer whitespace-nowrap px-3.5 text-[12.5px] light-sweep shadow-[var(--shadow-accent)]"
                  onClick={() => openAuth("signup")}
                >
                  Start planning free
                </Button>
              </div>

              <button
                type="button"
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-800 transition-all duration-300 lg:hidden",
                  mobileOpen
                    ? "bg-slate-900 text-white"
                    : "hover:bg-slate-900/[0.06]"
                )}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <AnimatedMenuIcon open={mobileOpen} />
              </button>
            </div>
          </nav>
        </header>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ y: "-4%", opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              exit={{ y: "-2%", opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.55, ease: easeOutExpo }}
              className="absolute inset-x-3 top-[4.75rem] bottom-3 overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--background)]/95 shadow-[var(--shadow-xl)] backdrop-blur-2xl sm:inset-x-4"
            >
              <div className="relative flex h-full flex-col overflow-y-auto px-6 py-8 sm:px-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Navigate
                </p>

                <div className="mt-6 flex flex-col">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.div
                        key={link.id}
                        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{
                          delay: 0.06 + i * 0.055,
                          duration: 0.5,
                          ease: easeOutExpo,
                        }}
                      >
                        <Link
                          href={linkHref(link.href)}
                          className={cn(
                            "group flex items-center justify-between border-b border-[var(--border)] py-5 transition-colors",
                            isActive ? "text-[var(--accent)]" : "text-slate-900"
                          )}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="font-serif text-xs tabular-nums text-slate-300">
                              0{i + 1}
                            </span>
                            <span className="font-serif text-[1.75rem] font-medium tracking-tight sm:text-[2rem]">
                              {link.label}
                            </span>
                          </span>
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              isActive
                                ? "bg-[var(--accent)]"
                                : "bg-slate-200"
                            )}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5, ease: easeOutExpo }}
                  className="mt-auto flex flex-col gap-3 pt-10"
                >
                  <Button
                    type="button"
                    variant="outlineDark"
                    size="lg"
                    className="h-12 w-full cursor-pointer"
                    onClick={() => openAuth("signin")}
                  >
                    Sign in
                  </Button>
                  <Button
                    asChild
                    variant="outlineDark"
                    size="lg"
                    className="h-12 w-full"
                  >
                    <Link href="/register" onClick={() => setMobileOpen(false)}>
                      Become a supplier
                    </Link>
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    className="h-12 w-full cursor-pointer light-sweep"
                    onClick={() => openAuth("signup")}
                  >
                    Start planning free
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AuthModal
        isOpen={authOpen}
        onClose={handleClose}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
}
