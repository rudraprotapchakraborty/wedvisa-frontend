"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Check, FileText, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { HeroCanvas } from "@/components/three/hero-canvas";
import { easeOutExpo } from "@/lib/motion";
import { cinematic } from "@/lib/cinematic-store";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";

const checklist = [
  { label: "Choose your venue", status: "done" as const },
  { label: "Book photographer", status: "done" as const },
  { label: "Confirm caterer", status: "progress" as const },
  { label: "Send save-the-dates", status: "pending" as const },
  { label: "Track guest RSVPs", status: "pending" as const },
];

const headlineWords = ["Plan", "your", "wedding", "without", "the"];

export function Hero() {
  const pinRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      cinematic.setScroll({ heroProgress: v });
    });
    return () => unsub();
  }, [scrollYProgress]);

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  const titleY = useTransform(smooth, [0, 0.35, 0.7], [0, -40, -120]);
  const titleOpacity = useTransform(smooth, [0, 0.25, 0.55], [1, 1, 0]);
  const titleBlur = useTransform(smooth, [0, 0.45, 0.65], [0, 0, 12]);
  const titleFilter = useMotionTemplate`blur(${titleBlur}px)`;

  const sceneScale = useTransform(smooth, [0, 0.5, 1], [1, 1.08, 1.18]);
  const sceneOpacity = useTransform(smooth, [0, 0.7, 1], [1, 1, 0.35]);
  const sceneX = useTransform(smooth, [0, 1], [0, 40]);

  const glowAX = useTransform(smooth, [0, 1], [0, 80]);
  const glowAY = useTransform(smooth, [0, 1], [0, 60]);
  const glowBX = useTransform(smooth, [0, 1], [0, -60]);

  const cardOpacity = useTransform(smooth, [0.15, 0.35, 0.85, 1], [0, 1, 1, 0.4]);
  const cardY = useTransform(smooth, [0.15, 0.4, 1], [80, 0, -40]);
  const cardRotate = useTransform(smooth, [0.15, 0.45], [8, 0]);
  const cardScale = useTransform(smooth, [0.15, 0.4], [0.92, 1]);
  const progressWidth = useTransform(smooth, [0.2, 0.55], ["0%", "62%"]);

  const ctaOpacity = useTransform(smooth, [0, 0.2, 0.55], [1, 1, 0]);
  const ctaY = useTransform(smooth, [0, 0.5], [0, 40]);

  const letterbox = useTransform(smooth, [0, 0.08, 0.9, 1], [0, 0, 0, 48]);
  const scrollHintOpacity = useTransform(smooth, [0, 0.12], [1, 0]);

  const polaroidA = useTransform(smooth, [0, 0.5], [0, -90]);
  const polaroidB = useTransform(smooth, [0, 0.5], [0, -60]);
  const polaroidC = useTransform(smooth, [0, 0.5], [0, 70]);
  const polaroidD = useTransform(smooth, [0, 0.5], [0, 50]);
  const polaroidRotA = useTransform(smooth, [0, 0.5], [-12, -22]);
  const polaroidRotB = useTransform(smooth, [0, 0.5], [14, 24]);
  const polaroidRotC = useTransform(smooth, [0, 0.5], [6, 14]);
  const polaroidRotD = useTransform(smooth, [0, 0.5], [-8, -16]);

  return (
    <section ref={pinRef} className="relative h-[240vh] w-full">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[var(--background)]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <motion.div
            className="ambient-glow left-[-15%] top-[5%] h-[55vmax] w-[55vmax] bg-[var(--accent)]/[0.07]"
            style={{ x: glowAX, y: glowAY }}
          />
          <motion.div
            className="ambient-glow right-[-8%] top-[15%] h-[45vmax] w-[45vmax] bg-[#e8ddd0]/50"
            style={{ x: glowBX }}
          />
          <div className="ambient-glow bottom-[-15%] left-[25%] h-[35vmax] w-[35vmax] bg-[var(--accent)]/[0.05]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(196,83,29,0.08),transparent_55%)]" />
        </div>

        <div className="grain pointer-events-none absolute inset-0 overflow-hidden" aria-hidden />

        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{ scale: sceneScale, opacity: sceneOpacity, x: sceneX }}
        >
          <div className="absolute inset-0 lg:left-[28%] lg:right-[-5%]">
            <HeroCanvas />
          </div>
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[var(--background)] via-[var(--background)]/85 to-transparent lg:w-[55%]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" />
        </motion.div>

        <div className="relative z-20 mx-auto flex h-full max-w-[var(--max-width)] flex-col justify-center px-4 pt-[var(--header-height)] sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6 xl:col-span-5">
              <motion.div style={{ y: titleY, opacity: titleOpacity, filter: titleFilter }}>
                <motion.div
                  initial={{ opacity: 0, y: 16, clipPath: "inset(0 100% 0 0)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.1, ease: easeOutExpo }}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] shadow-[var(--shadow-sm)] backdrop-blur-md"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  The Free UK Wedding Planner
                </motion.div>

                <h1 className="mt-7 font-serif text-[2.75rem] font-medium leading-[1.02] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[4.35rem]">
                  <span className="sr-only">Plan your wedding without the chaos.</span>
                  <span aria-hidden className="flex flex-wrap gap-x-[0.28em]">
                    {headlineWords.map((word, i) => (
                      <span key={word + i} className="inline-block overflow-hidden pb-1">
                        <motion.span
                          className="inline-block"
                          initial={{ y: "110%", rotate: 4 }}
                          animate={{ y: "0%", rotate: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.12 + i * 0.07,
                            ease: easeOutExpo,
                          }}
                        >
                          {word}
                        </motion.span>
                      </span>
                    ))}
                  </span>
                  <span className="mt-1 block overflow-hidden pb-1">
                    <motion.em
                      className="inline-block not-italic font-serif italic text-[var(--accent)]"
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{ duration: 1.1, delay: 0.55, ease: easeOutExpo }}
                    >
                      chaos.
                    </motion.em>
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.65, ease: easeOutExpo }}
                  className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  Budget, guest list, timeline, suppliers — every part of your day
                  in one calm place. Free to use, no account needed to start.
                </motion.p>
              </motion.div>

              <motion.div style={{ opacity: ctaOpacity, y: ctaY }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.8, ease: easeOutExpo }}
                  className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
                >
                  <Magnetic strength={0.22}>
                    <Button asChild size="lg" className="light-sweep min-w-[200px] cursor-magnetic">
                      <Link href="/?auth=register">
                        Start planning free
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </Magnetic>
                  <Magnetic strength={0.16}>
                    <Button
                      asChild
                      size="lg"
                      variant="outlineDark"
                      className="min-w-[170px] cursor-magnetic"
                    >
                      <Link href="#planning-tools">
                        <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                        Try the free tools
                      </Link>
                    </Button>
                  </Magnetic>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-500"
                >
                  <Check className="h-3.5 w-3.5 text-[var(--accent)]" strokeWidth={2.5} />
                  No credit card. No sign-up wall. Start in seconds.
                </motion.p>
              </motion.div>
            </div>

            <div className="relative hidden min-h-[420px] items-center justify-center lg:col-span-6 lg:flex xl:col-span-7">
              <motion.div
                style={{ y: polaroidA, rotate: polaroidRotA }}
                className="absolute left-[2%] top-[6%] z-10 w-[7.5rem] bg-white p-1.5 pb-4 shadow-[var(--shadow-lg)] ring-1 ring-black/[0.04]"
                aria-hidden
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image src="/1.png" alt="" fill sizes="120px" className="object-cover" />
                </div>
              </motion.div>
              <motion.div
                style={{ y: polaroidB, rotate: polaroidRotB }}
                className="absolute right-[4%] top-[2%] z-10 w-[7rem] bg-white p-1.5 pb-4 shadow-[var(--shadow-lg)] ring-1 ring-black/[0.04]"
                aria-hidden
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image src="/2.png" alt="" fill sizes="120px" className="object-cover" />
                </div>
              </motion.div>
              <motion.div
                style={{ y: polaroidC, rotate: polaroidRotC }}
                className="absolute bottom-[12%] left-[4%] z-10 w-[7rem] bg-white p-1.5 pb-4 shadow-[var(--shadow-lg)] ring-1 ring-black/[0.04]"
                aria-hidden
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image src="/3.png" alt="" fill sizes="120px" className="object-cover" />
                </div>
              </motion.div>
              <motion.div
                style={{ y: polaroidD, rotate: polaroidRotD }}
                className="absolute bottom-[10%] right-[6%] z-10 w-[6.5rem] bg-white p-1.5 pb-4 shadow-[var(--shadow-lg)] ring-1 ring-black/[0.04]"
                aria-hidden
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image src="/4.png" alt="" fill sizes="110px" className="object-cover" />
                </div>
              </motion.div>

              <motion.div
                style={{
                  opacity: cardOpacity,
                  y: cardY,
                  rotate: cardRotate,
                  scale: cardScale,
                }}
                className="relative z-20 w-full max-w-[330px]"
              >
                <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/92 shadow-[var(--shadow-xl)] backdrop-blur-2xl">
                  <div className="flex items-center justify-between bg-slate-900 px-5 py-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold shadow-[0_0_20px_var(--accent-glow)]">
                        E&J
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-none">Emma & Jack</p>
                        <p className="mt-1.5 text-[10px] leading-none text-white/45">
                          14 June 2027 · 280 days
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/70">
                      Wedding day
                    </span>
                  </div>

                  <div className="space-y-5 p-5">
                    <div>
                      <div className="mb-2 flex justify-between text-[11px] font-semibold">
                        <span className="text-slate-500">Planning progress</span>
                        <span className="text-[var(--accent)]">62%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          className="h-full rounded-full bg-[var(--accent)]"
                          style={{ width: progressWidth }}
                        />
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {checklist.map((item) => (
                        <li key={item.label} className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            {item.status === "done" ? (
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                            ) : item.status === "progress" ? (
                              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[var(--accent)]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                              </span>
                            ) : (
                              <span className="h-5 w-5 rounded-full border border-slate-200" />
                            )}
                            <span
                              className={`text-[12px] font-medium ${
                                item.status === "pending" ? "text-slate-400" : "text-slate-800"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>
                          {item.status === "done" && (
                            <span className="text-[10px] font-semibold text-slate-400">Done</span>
                          )}
                          {item.status === "progress" && (
                            <span className="text-[10px] font-semibold text-[var(--accent)]">
                              In progress
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-4 z-30 flex w-[11.5rem] items-center gap-3 rounded-2xl border border-[var(--border)] bg-white p-3.5 shadow-[var(--shadow-lg)] sm:-right-6">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-slate-900">3 tasks due</p>
                    <p className="mt-0.5 text-[10px] text-slate-400">this month</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 z-40 bg-slate-900"
          style={{ height: letterbox }}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-40 bg-slate-900"
          style={{ height: letterbox }}
          aria-hidden
        />
      </div>
    </section>
  );
}
