"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/landing/animated-section";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-600" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.2),_transparent_50%)]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-violet-300/25 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-100">
            Begin today
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to start your journey?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Join couples worldwide who trust WedVisa to organize evidence,
            generate documents, and move forward with confidence.
          </p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            whileHover={{ scale: 1.01 }}
          >
            <Button
              asChild
              size="xl"
              variant="secondary"
              className="min-w-[200px] shadow-xl"
            >
              <Link href="/register">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="min-w-[180px] border-white/40"
            >
              <Link href="#pricing">View pricing</Link>
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
