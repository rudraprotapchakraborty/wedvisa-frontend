"use client";

import Image from "next/image";
import {
  AnimatedSection,
  FadeIn,
  Ornament,
  StaggerItem,
  StaggerGroup,
} from "@/components/landing/animated-section";

function GiftHeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="8" width="18" height="14" rx="2" />
      <path d="M12 8V22" />
      <path d="M3 12h18" />
      <path d="M12 8a2.5 2.5 0 0 1-2.5-2.5c0-2 2.5-3 2.5-3s2.5 1 2.5 3A2.5 2.5 0 0 1 12 8z" />
      <path d="M12 17.5c-.8-.72-2.7-2.28-2.7-3.3a1.5 1.5 0 0 1 2.7-.9 1.5 1.5 0 0 1 2.7.9c0 1.02-1.9 2.58-2.7 3.3z" fill="white" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function GlobeHeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M12 2v20" />
      <path d="M12 14.5c-.8-.72-2.7-2.28-2.7-3.3a1.5 1.5 0 0 1 2.7-.9 1.5 1.5 0 0 1 2.7.9c0 1.02-1.9 2.58-2.7 3.3z" fill="white" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function RingsHeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="13" r="5" />
      <circle cx="15" cy="13" r="5" />
      <path d="M12 13.5c-.4-.36-1.35-1.14-1.35-1.65a.75.75 0 0 1 1.35-.45.75.75 0 0 1 1.35.45c0 .51-.95 1.29-1.35 1.65z" fill="white" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function CalendarHeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M12 17.5c-.8-.72-2.7-2.28-2.7-3.3a1.5 1.5 0 0 1 2.7-.9 1.5 1.5 0 0 1 2.7.9c0 1.02-1.9 2.58-2.7 3.3z" fill="white" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

const highlights = [
  {
    title: "Free to start, no wall",
    description:
      "Use the tools and your planner without paying or signing up first. Pay only if you choose Mira for an event.",
    icon: GiftHeartIcon,
  },
  {
    title: "Built for every culture",
    description:
      "Civil, religious, Nikah, Hindu, Sikh, multicultural – planning and guidance that fits your traditions, not a generic template.",
    icon: GlobeHeartIcon,
  },
  {
    title: "Everything connected",
    description:
      "Your budget, guests, timeline and suppliers all talk to each other. Change one, the rest keep up.",
    icon: RingsHeartIcon,
  },
  {
    title: "One account, every event",
    description:
      "Engagement party, the wedding, the anniversary after. Plan each celebration from the same home.",
    icon: CalendarHeartIcon,
  },
];

const arches = [
  {
    src: "/why-wedvisa-1.jpg",
    alt: "Invitation cards and ring macro shot",
    className: "aspect-[3/4.5] rounded-t-[5rem]",
    delay: 0.05,
  },
  {
    src: "/why-wedvisa-2.jpg",
    alt: "Bride and groom embracing",
    className: "aspect-[3/5] rounded-t-[6.25rem]",
    delay: 0.1,
  },
  {
    src: "/why-wedvisa-3.jpg",
    alt: "Wedding reception table setting",
    className: "aspect-[3/4.5] rounded-t-[5rem]",
    delay: 0.15,
  },
];

export function WhyWedvisa() {
  return (
    <div className="relative w-full overflow-hidden bg-[var(--background-elevated)]">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/4 opacity-[0.12]"
        aria-hidden
      >
        <div
          className="h-full w-full bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/watercolor-floral-bg.jpg')" }}
        />
      </div>

      <AnimatedSection
        id="why-wedvisa"
        className="relative z-10 mx-auto flex max-w-[var(--max-width)] flex-col gap-24 px-4 py-[var(--section-y)] sm:px-6 lg:gap-32 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Why Wedvisa
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <Ornament className="my-4" />
            </FadeIn>
            <FadeIn delay={0.08} blur>
              <h2 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[2.85rem]">
                More than a
                <br />
                <em className="not-italic font-serif italic text-[var(--accent)]">
                  checklist
                </em>{" "}
                app.
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
                Most wedding tools do one thing. Wedvisa connects your whole day
                — and respects that no two weddings look the same.
              </p>
            </FadeIn>
          </div>

          <div className="flex w-full justify-center lg:col-span-6">
            <div className="grid w-full max-w-[30rem] grid-cols-3 items-end gap-3.5">
              {arches.map((arch) => (
                <FadeIn
                  key={arch.src}
                  direction="up"
                  delay={arch.delay}
                  className="w-full"
                >
                  <div
                    className={`relative w-full overflow-hidden border border-[var(--border)] bg-white shadow-[var(--shadow-md)] ${arch.className}`}
                  >
                    <Image
                      src={arch.src}
                      alt={arch.alt}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <StaggerGroup className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.title}
                className="relative flex flex-col items-center px-6"
              >
                {idx > 0 ? (
                  <div
                    className="absolute left-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-[var(--border-strong)] lg:block"
                    aria-hidden
                  >
                    <div className="absolute -left-[3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--accent)]" />
                  </div>
                ) : null}

                <StaggerItem className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--accent)] shadow-[var(--shadow-sm)] transition-shadow duration-400 hover:shadow-[var(--shadow-md)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-base font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-slate-500">
                    {highlight.description}
                  </p>
                </StaggerItem>
              </div>
            );
          })}
        </StaggerGroup>
      </AnimatedSection>
    </div>
  );
}
