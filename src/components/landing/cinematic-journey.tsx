"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { easeOutExpo } from "@/lib/motion";

const chapters = [
  {
    num: "01",
    title: "The moment after yes",
    body: "Everything arrives at once — budgets, guest lists, venues, family opinions. Wedvisa turns noise into a single, calm workspace.",
    accent: "Clarity first.",
  },
  {
    num: "02",
    title: "One connected plan",
    body: "Change the guest count and the budget flexes. Move the date and the checklist rewrites itself. Every tool speaks the same language.",
    accent: "Intelligence, quietly.",
  },
  {
    num: "03",
    title: "From plan to people",
    body: "Browse UK suppliers who fit your style and spend. Enquire without leaving the plan. Keep contracts, deposits, and dates in one place.",
    accent: "Craft meets logistics.",
  },
  {
    num: "04",
    title: "Celebrate, then continue",
    body: "A private gallery. Shared memories. Then the anniversary, the blessing, the next chapter — still under one account.",
    accent: "A lifetime of days.",
  },
];

/**
 * Sticky multi-chapter film sequence — scroll as camera.
 * Desktop: GSAP pin + horizontal scrub. Mobile: stacked chapters.
 */
export function CinematicJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !desktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !pin || !track) return;

    const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScroll() * 1.15}`,
          pin: pin,
          scrub: 1.15,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (progress) progress.style.transform = `scaleX(${p})`;
            const idx = Math.min(
              chapters.length - 1,
              Math.floor(p * chapters.length)
            );
            setActive(idx);
          },
        },
      });

      // Chapter scale/opacity micro-beats
      gsap.utils.toArray<HTMLElement>("[data-chapter]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0.35, scale: 0.94 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => `top+=${(getScroll() * 1.15 * i) / chapters.length} top`,
              end: () =>
                `top+=${(getScroll() * 1.15 * (i + 0.85)) / chapters.length} top`,
              scrub: true,
            },
          }
        );
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, section);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative bg-slate-900 text-[var(--foreground-on-dark)]"
    >
      {/* Mobile stack */}
      <div className="lg:hidden">
        <div className="px-4 py-20 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            The journey
          </p>
          <h2 className="mt-4 max-w-lg font-serif text-4xl font-medium leading-[1.1] tracking-tight">
            Four acts.{" "}
            <em className="not-italic font-serif italic text-[var(--accent)]">
              One continuous film.
            </em>
          </h2>
          <div className="mt-14 space-y-16">
            {chapters.map((ch, i) => (
              <motion.article
                key={ch.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: easeOutExpo }}
              >
                <span className="font-serif text-6xl font-medium text-white/10">
                  {ch.num}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-medium">{ch.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
                  {ch.body}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  {ch.accent}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop cinema pin target */}
      <div
        ref={pinRef}
        className="relative hidden h-[100svh] w-full overflow-hidden lg:block"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="ambient-glow left-[10%] top-[20%] h-[50vmax] w-[50vmax] bg-[var(--accent)]/20" />
          <div className="ambient-glow right-[5%] bottom-[10%] h-[40vmax] w-[40vmax] bg-white/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(12,10,9,0.75)_100%)]" />
          {/* Film perforations */}
          <div className="absolute inset-y-0 left-0 flex w-6 flex-col justify-around px-1.5 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-3 w-full rounded-sm bg-white/40" />
            ))}
          </div>
          <div className="absolute inset-y-0 right-0 flex w-6 flex-col justify-around px-1.5 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-3 w-full rounded-sm bg-white/40" />
            ))}
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-8 z-20 border border-white/[0.06]"
          aria-hidden
        >
          <div className="absolute left-0 top-0 h-5 w-5 border-l border-t border-white/30" />
          <div className="absolute right-0 top-0 h-5 w-5 border-r border-t border-white/30" />
          <div className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/30" />
          <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white/30" />
        </div>

        <div className="absolute left-12 top-12 z-30 max-w-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            The journey
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight xl:text-4xl">
            Scroll to direct the story
          </h2>
        </div>

        <div className="absolute bottom-12 left-12 right-12 z-30 flex items-center gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Act 0{active + 1}
          </span>
          <div className="h-px flex-1 overflow-hidden bg-white/10">
            <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]"
            />
          </div>
          <span className="font-serif text-sm text-white/50">04</span>
        </div>

        <div
          ref={trackRef}
          className="flex h-full w-max items-center will-change-transform pl-[26vw] pr-[18vw]"
        >
          {chapters.map((ch, i) => (
            <article
              key={ch.num}
              data-chapter
              className="relative flex h-full w-[68vw] max-w-[50rem] shrink-0 flex-col justify-center px-10 xl:px-16"
            >
              <div className="relative">
                <span className="pointer-events-none absolute -left-2 -top-20 font-serif text-[10rem] font-medium leading-none text-white/[0.045] xl:text-[12rem]">
                  {ch.num}
                </span>
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Chapter {ch.num}
                </p>
                <h3 className="relative mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.08] tracking-tight xl:text-[3.25rem]">
                  {ch.title}
                </h3>
                <p className="relative mt-6 max-w-md text-base leading-relaxed text-white/55 xl:text-lg">
                  {ch.body}
                </p>
                <p className="relative mt-8 text-sm font-semibold tracking-wide text-white/90">
                  <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-[var(--accent)]" />
                  {ch.accent}
                </p>
                <div className="relative mt-12 flex gap-2">
                  {chapters.map((_, di) => (
                    <span
                      key={di}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        di === i && active === i
                          ? "w-8 bg-[var(--accent)]"
                          : di === active
                            ? "w-8 bg-[var(--accent)]"
                            : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
