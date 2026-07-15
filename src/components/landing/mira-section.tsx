"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeIn } from "@/components/landing/animated-section";
import { easeOutExpo } from "@/lib/motion";

const messages = [
  {
    role: "user" as const,
    text: "We've got £25k and 120 guests in Manchester. Where do we start?",
  },
  {
    role: "mira" as const,
    text: "Let's lock your venue first — it shapes everything. For 120 guests at that budget I'd aim for £6–8k on the venue. Want me to shortlist three near Manchester?",
  },
  {
    role: "user" as const,
    text: "Yes please ✨",
  },
];

export function MiraSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const card = cardRef.current;
    const chat = chatRef.current;
    if (!card || !chat) return;

    const bubbles = chat.querySelectorAll<HTMLElement>("[data-bubble]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, rotateX: 6 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        bubbles,
        { y: 24, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.22,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chat,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, card);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="mira-assistant"
      className="relative mx-auto max-w-[var(--max-width)] px-4 py-16 sm:px-6 md:py-24 lg:px-8"
      style={{ perspective: "1400px" }}
    >
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 px-8 py-12 shadow-[var(--shadow-xl)] opacity-0 sm:px-12 lg:px-16 lg:py-16"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="ambient-glow right-0 top-1/2 h-[70%] w-[50%] -translate-y-1/2 bg-[var(--accent)]/30" />
          <div className="ambient-glow left-0 bottom-0 h-48 w-48 bg-white/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,83,29,0.15),transparent_55%)]" />
          {/* Animated scan line */}
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start text-left lg:col-span-6">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                <Sparkles className="h-3.5 w-3.5" />
                Coming Soon
              </span>
            </FadeIn>

            <FadeIn delay={0.08} blur>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
                Meet Mira, your{" "}
                <em className="not-italic font-serif italic text-[var(--accent)]">
                  AI planning assistant.
                </em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-white/55">
                When you&apos;re ready, add Mira to any event and she&apos;ll
                build your plan, suggest suppliers that fit your budget and
                style, and keep everything on track. Optional, per event —
                only when you want the help.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-medium text-white/70 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </span>
                Launching later this year
              </div>
            </FadeIn>
          </div>

          <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
            <div
              ref={chatRef}
              className="flex w-full max-w-[26rem] flex-col gap-3.5 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[var(--shadow-xl)] backdrop-blur-xl sm:p-7"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  data-bubble
                  className="flex flex-col items-start opacity-0"
                >
                  <div
                    className={
                      msg.role === "mira"
                        ? "max-w-[92%] rounded-[1.15rem] rounded-tl-sm bg-[var(--accent)] px-4 py-3 text-[13.5px] font-medium leading-relaxed text-white shadow-[var(--shadow-accent)]"
                        : "max-w-[90%] rounded-[1.15rem] rounded-tl-sm bg-white/10 px-4 py-3 text-[13.5px] font-medium leading-relaxed text-white/90"
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              <div className="mt-1 flex items-center gap-1.5 px-1" aria-hidden>
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-white/30"
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: d * 0.15,
                      ease: easeOutExpo,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
