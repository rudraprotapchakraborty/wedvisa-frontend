"use client";

import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatedSection,
  FadeIn,
  Ornament,
} from "@/components/landing/animated-section";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

const cards = [
  {
    href: "/blog/partner-visa-checklist-2026",
    src: "/inspiration-1.jpg",
    alt: "Bride and groom exit with confetti",
    badge: "Planning Guides",
    title: "Wedding Budget Calculator UK - Free Tool + Real Breakdown",
    description:
      "Plan your UK wedding budget in minutes using Wedvisa's free budget calculator tool based on industry insights and the right budget allocation.",
    readTime: "8 min to read",
    span: "lg:col-span-7",
  },
  {
    href: "/blog/uk-spouse-visa-evidence-guide",
    src: "/inspiration-2.jpg",
    alt: "Bride and groom at manor house",
    badge: "Planning Guides",
    title: "How much does a UK wedding actually cost in 2026?",
    description:
      "Real figures from UK surveys, broken down by category — venue, catering, photography and more.",
    readTime: "5 min to read",
    span: "lg:col-span-5",
  },
];

export function Inspiration() {
  return (
    <AnimatedSection
      id="inspiration"
      className="relative w-full overflow-hidden bg-[var(--background)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-[var(--max-width)] text-center">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Inspiration
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <Ornament className="mx-auto mt-4" />
        </FadeIn>
        <FadeIn delay={0.08} blur className="mt-5">
          <h2 className="mx-auto max-w-3xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[2.85rem]">
            Real weddings &amp;{" "}
            <em className="not-italic font-serif italic text-[var(--accent)]">
              honest guides.
            </em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.12} className="mt-5">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
            Planning advice grounded in real UK wedding costs and culture — not
            generic listicles.
          </p>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-12 gap-6 text-left lg:gap-8">
          {cards.map((card, i) => (
            <div key={card.href} className={`col-span-12 ${card.span}`}>
              <FadeIn delay={i * 0.08} className="h-full">
                <Link
                  href={card.href}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)] sm:p-5"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.1rem] bg-slate-100">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={75}
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                      <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-[var(--shadow-sm)] backdrop-blur-sm">
                        {card.badge}
                      </div>
                    </div>
                    <h3 className="mt-6 font-serif text-[1.25rem] font-semibold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[var(--accent)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[0.875rem] leading-relaxed text-slate-500">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 border-t border-[var(--border)] pt-4 text-[11px] font-bold text-slate-400">
                    <BookOpen className="h-3.5 w-3.5" strokeWidth={2.25} />
                    <span>{card.readTime}</span>
                  </div>
                </Link>
              </FadeIn>
            </div>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-14 flex justify-center">
          <Magnetic strength={0.15}>
            <Button asChild variant="outlineDark" size="lg">
              <Link href="/blog">
                Explore all inspiration
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Magnetic>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
