"use client";

import { useEffect, useRef } from "react";
import {
  Calculator,
  Check,
  Users,
  Calendar,
  ClipboardList,
  Coins,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AnimatedSection,
  FadeIn,
  Ornament,
} from "@/components/landing/animated-section";

const tools = [
  {
    title: "Budget Calculator",
    description:
      "Set your total, allocate by category, and see exactly where your money goes.",
    linkText: "Open calculator",
    href: "/budget-calculator",
    icon: Calculator,
  },
  {
    title: "Wedding Checklist",
    description:
      "A complete UK planning checklist that adjusts to how far away your date is.",
    linkText: "Open checklist",
    href: "/checklist",
    icon: Check,
  },
  {
    title: "Guest List Manager",
    description:
      "Build your list, track RSVPs, and manage daytime and evening invites.",
    linkText: "Open guest list",
    href: "/guest-list",
    icon: Users,
  },
  {
    title: "Timeline Planner",
    description:
      "Map out your day from morning to night with our smart timeline builder.",
    linkText: "Open timeline",
    href: "/timeline",
    icon: Calendar,
  },
  {
    title: "Vendor Tracker",
    description:
      "Keep all your suppliers, contracts, and payments organized in one place.",
    linkText: "Open tracker",
    href: "/vendor-tracker",
    icon: ClipboardList,
  },
  {
    title: "Savings Finder",
    description:
      "Find smart ways to save on your wedding without compromising.",
    linkText: "Open savings finder",
    href: "/savings-finder",
    icon: Coins,
  },
];

export function PlanningTools() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>("[data-tool-card]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 70, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          stagger: {
            each: 0.08,
            from: "start",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[var(--background-elevated)]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "url('/watercolor-floral-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-elevated)] via-[var(--background-elevated)]/90 to-[var(--background-elevated)]" />
        <div className="ambient-glow left-1/2 top-0 h-[40vmax] w-[60vmax] -translate-x-1/2 bg-[var(--accent)]/[0.04]" />
      </div>

      <AnimatedSection
        id="planning-tools"
        className="relative z-10 px-4 py-[var(--section-y)] sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-[var(--max-width)] text-center">
          <FadeIn>
            <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/70 px-3.5 py-1 text-[12px] font-medium tracking-wide text-slate-600 shadow-[var(--shadow-sm)] backdrop-blur-sm">
              + No account needed
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="mt-7 flex flex-col items-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Free Planning Tools
            </p>
            <Ornament className="mt-4" />
          </FadeIn>

          <FadeIn delay={0.1} blur className="mt-5">
            <h2 className="mx-auto max-w-3xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[2.85rem]">
              Start planning right now —{" "}
              <em className="not-italic font-serif italic text-[var(--accent)]">
                for free.
              </em>
            </h2>
          </FadeIn>

          <FadeIn delay={0.16} className="mt-5">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
              Six interactive tools you can use today, no sign-up required. Save
              your work whenever you&apos;re ready to create a free account.
            </p>
          </FadeIn>

          <div
            ref={gridRef}
            className="mx-auto mt-16 grid max-w-6xl gap-5 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.title}
                  data-tool-card
                  className="h-full opacity-0"
                >
                  <Link
                    href={tool.href}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white/90 p-7 shadow-[var(--shadow-sm)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)] md:p-8 cursor-magnetic"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent)]/[0.0] transition-all duration-700 group-hover:bg-[var(--accent)]/[0.08]" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-[120%]" />
                    </div>

                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-muted)]/60 text-[var(--accent)] transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--accent)]/25 group-hover:bg-[var(--accent-soft)] group-hover:shadow-[0_0_28px_var(--accent-glow)]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="mt-6 font-serif text-[1.25rem] font-semibold tracking-tight text-slate-900">
                        {tool.title}
                      </h3>
                      <p className="mt-3 text-[0.875rem] leading-relaxed text-slate-500">
                        {tool.description}
                      </p>
                    </div>

                    <div className="relative mt-7">
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)]">
                        {tool.linkText}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
