"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { FadeIn, Ornament } from "@/components/landing/animated-section";
import { easeOutExpo } from "@/lib/motion";

function ChecklistIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PadlockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

const miniFeatures = [
  { title: "Smart planning", description: "All your details, in perfect order.", icon: ChecklistIcon },
  { title: "Everyone in sync", description: "Guests, partners and tasks together.", icon: UsersIcon },
  { title: "Beautiful timelines", description: "See everything, right on time.", icon: CalendarIcon },
  { title: "Stress-free journey", description: "Tools that simplify, so you can enjoy.", icon: PadlockIcon },
];

export function FinalCta() {
  return (
    <section id="final-cta" className="w-full overflow-hidden bg-[var(--background-elevated)]">
      <div className="grid min-h-[620px] grid-cols-12">
        <div className="relative z-20 col-span-12 flex flex-col justify-center p-8 text-left sm:p-12 md:p-16 lg:col-span-7 lg:p-20">
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-[200px] w-[250px] select-none bg-contain bg-left-bottom bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/watercolor-floral-bg.jpg')" }}
            aria-hidden
          />

          <FadeIn className="relative z-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Plan beautifully. Celebrate fully.
            </p>

            <h2 className="mt-5 max-w-lg font-serif text-4xl font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[2.85rem]">
              Your wedding,
              <br />
              all in{" "}
              <em className="not-italic font-serif italic text-[var(--accent)]">
                one place.
              </em>
            </h2>

            <Ornament className="my-6" />

            <p className="mt-2 max-w-md text-base leading-relaxed text-slate-600">
              Start with the free tools, create your plan when you&apos;re
              ready. No wall, no pressure.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Magnetic strength={0.18}>
                <Button asChild size="lg" className="light-sweep">
                  <Link href="/?auth=register">
                    Start planning free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.12}>
                <Button asChild size="lg" variant="outlineDark">
                  <Link href="/suppliers">
                    Find suppliers
                    <Users className="h-4 w-4 text-slate-400" />
                  </Link>
                </Button>
              </Magnetic>
            </div>

            <div className="mt-16 grid max-w-xl grid-cols-2 gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-4">
              {miniFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex flex-col items-start text-left">
                    <div className="mb-2.5 text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-[11.5px] font-bold tracking-wide text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-[10.5px] font-medium leading-relaxed text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

        <div className="relative z-10 col-span-12 min-h-[400px] overflow-hidden bg-slate-900 lg:col-span-5 lg:min-h-full">
          <Image
            src="/final-cta.jpg"
            alt="Wedding reception outdoor tables at dusk"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

          <svg
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 hidden h-full w-24 -translate-x-px fill-current text-[var(--background-elevated)] lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d="M0 0 L100 0 C 40 30, 20 70, 100 100 L0 100 Z" />
          </svg>

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: easeOutExpo }}
            className="absolute bottom-6 left-6 right-6 z-20 flex max-w-sm items-center gap-4 rounded-[1.25rem] border border-white/60 bg-white/95 p-4 shadow-[var(--shadow-xl)] backdrop-blur-md sm:p-5 lg:left-8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[var(--shadow-accent)]">
              <Heart className="h-4 w-4 fill-white" />
            </div>
            <div className="text-left">
              <h5 className="font-serif text-sm font-semibold leading-tight text-slate-900">
                Everything you need, nothing you don&apos;t.
              </h5>
              <p className="mt-1.5 text-[10.5px] font-medium leading-relaxed text-slate-500">
                Budget, guest lists, timelines, suppliers and more — all working
                together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
