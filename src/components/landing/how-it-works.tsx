"use client";

import { useEffect, useRef } from "react";
import {
  CalendarRange,
  ClipboardList,
  Store,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AnimatedSection,
  FadeIn,
  Ornament,
} from "@/components/landing/animated-section";

const steps = [
  {
    step: "01",
    title: "Create your event",
    description:
      "Set your date, budget and guest count. Your personal planner is ready instantly.",
    icon: CalendarRange,
  },
  {
    step: "02",
    title: "Plan in one place",
    description:
      "Budget, checklist, guest list, timeline and seating – all connected, always in sync.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Find your suppliers",
    description:
      "Browse UK photographers, venues, caterers and florists and enquire directly.",
    icon: Store,
  },
  {
    step: "04",
    title: "Celebrate & remember",
    description:
      "A private gallery your guests can add to – then plan the next milestone too.",
    icon: ImageIcon,
  },
];

export function HowItWorks() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const root = cardsRef.current;
    if (!root) return;

    const cards = root.querySelectorAll<HTMLElement>("[data-step-card]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, rotateX: 8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            once: true,
          },
        }
      );

      // Connecting line draw
      const line = root.querySelector<HTMLElement>("[data-path-line]");
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: root,
              start: "top 70%",
              once: true,
            },
          }
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[var(--background)]">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 opacity-[0.12]"
        aria-hidden
      >
        <div
          className="h-full w-full bg-cover bg-left bg-no-repeat"
          style={{ backgroundImage: "url('/watercolor-floral-bg.jpg')" }}
        />
      </div>

      <AnimatedSection
        id="how-it-works"
        className="relative z-10 mx-auto max-w-[var(--max-width)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                How It Works
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <Ornament className="my-4 max-w-[8rem]" />
            </FadeIn>
            <FadeIn delay={0.08} blur>
              <h2 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[2.85rem]">
                From &ldquo;yes&rdquo; to &ldquo;I do&rdquo;,
                <br className="hidden sm:block" />
                <em className="not-italic font-serif italic text-[var(--accent)]">
                  perfectly organised.
                </em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
                One free account holds every part of your wedding — and any
                celebration that comes after it.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn direction="right" className="relative perspective-[1200px]">
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--background-muted)] shadow-[var(--shadow-lg)]">
                <Image
                  src="/wedding-planning-couple.jpg"
                  alt="Couple planning wedding together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                {/* Light sweep on hover */}
                <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[120%]" />
              </div>
              <div
                className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full rounded-[1.75rem] border border-[var(--border)] bg-[var(--background-muted)] md:block"
                aria-hidden
              />
            </FadeIn>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="relative mx-auto mt-20 max-w-6xl lg:mt-28"
          style={{ perspective: "1200px" }}
        >
          {/* Path line behind cards */}
          <div
            data-path-line
            className="pointer-events-none absolute left-[8%] right-[8%] top-[3.25rem] hidden h-px origin-left bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent lg:block"
            aria-hidden
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  data-step-card
                  className="relative h-full opacity-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="group relative flex h-full flex-col items-center rounded-[1.5rem] border border-[var(--border)] bg-white px-6 pb-8 pt-10 text-center shadow-[var(--shadow-sm)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)]">
                    <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[11px] font-bold tracking-wide text-[var(--accent)] shadow-[var(--shadow-sm)]">
                      {step.step}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background-muted)]/50 text-[var(--accent)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--accent-soft)] group-hover:shadow-[0_0_24px_var(--accent-glow)]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-serif text-[1.05rem] font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.2} className="mt-16 text-center sm:mt-20">
          <p className="font-script text-[2rem] leading-none tracking-wide text-[var(--accent)] sm:text-[2.35rem]">
            Organise everything. Enjoy every moment.
          </p>
        </FadeIn>
      </AnimatedSection>
    </div>
  );
}
