"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Lock, Shield, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const trustItems = [
  { label: "Private", icon: Lock },
  { label: "Secure", icon: Shield },
  { label: "AI Powered", icon: Sparkles },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Ambient premium fallback if video is unavailable */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-slate-950 to-fuchsia-950" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-600/40 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-fuchsia-600/30 blur-[100px]" />
        </div>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/40 via-transparent to-slate-950/50" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-28 pt-[8.5rem] text-center sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-violet-200" />
          AI-powered wedding visa platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-serif text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.5rem]"
        >
          Make Your Wedding Visa Journey Effortless.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[700px] text-lg leading-relaxed text-white/80 sm:text-xl"
        >
          WedVisa guides couples through eligibility, evidence, documents, and
          interviews—so you can focus on your future together, not the paperwork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button asChild size="xl" variant="gradient" className="min-w-[220px]">
            <Link href="/register">
              Start Your Application
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline" className="min-w-[180px]">
            <Link href="#how-it-works">Learn More</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-5"
        >
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="flex items-center gap-0.5 text-amber-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-medium text-white/85">
              Trusted by couples worldwide
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-violet-200" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Curved white divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-16 w-full sm:h-20 md:h-28"
          aria-hidden="true"
        >
          <path
            d="M0,64 C240,120 480,120 720,80 C960,40 1200,16 1440,48 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
