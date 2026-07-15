"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  {
    lead: "6",
    accent: "free",
    caption: "Planning tools, no sign-up",
  },
  {
    lead: "Every",
    accent: "event",
    caption: "One account, multiple celebrations",
  },
  {
    lead: "UK",
    accent: "built",
    caption: "Real UK costs, suppliers & guidance",
  },
];

export function StatsBar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-stat]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { y: 36, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden border-y border-white/5 bg-slate-900 text-[var(--foreground-on-dark)]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="ambient-glow left-1/4 top-1/2 h-48 w-48 -translate-y-1/2 bg-[var(--accent)]/25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(196,83,29,0.04),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-[var(--max-width)] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.caption}
              data-stat
              className="flex flex-col items-center px-6 py-12 text-center opacity-0 md:py-14"
            >
              <h3 className="font-serif text-4xl font-medium tracking-tight md:text-[2.65rem]">
                {stat.lead}{" "}
                <span className="italic text-[var(--accent)]">{stat.accent}</span>
              </h3>
              <p className="mt-3 text-sm font-medium tracking-wide text-white/50">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
