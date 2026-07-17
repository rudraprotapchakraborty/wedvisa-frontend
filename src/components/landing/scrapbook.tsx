"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Calendar, Users, Heart, Camera, Flower, Home, Moon } from "lucide-react";
import {
  AnimatedSection,
  FadeIn,
  Ornament,
} from "@/components/landing/animated-section";

const scrapbookItems = [
  {
    id: "wedding",
    src: "/Polaroid 1 .png",
    alt: "Wedding",
    title: "The Big Day",
    caption: "Wedding",
    description: "Track your overall checklist, schedule timeline, and important dates under one dashboard.",
    icon: Calendar,
    color: "from-amber-500/10 to-transparent",
    // Desktop layout scatter offsets
    left: "5%",
    top: "10%",
    rotate: -8,
  },
  {
    id: "venue",
    src: "/Polaroid 8.png",
    alt: "Venue",
    title: "The Setting",
    caption: "Venue",
    description: "Coordinate with your venue, map out table placements, and manage guest seat arrangements.",
    icon: Home,
    color: "from-emerald-500/10 to-transparent",
    left: "32%",
    top: "4%",
    rotate: 6,
  },
  {
    id: "photographer",
    src: "/Polaroid 6.png",
    alt: "Photographer",
    title: "The Memories",
    caption: "Photographer",
    description: "Build shot lists, store contracts, and align the day's timeline with your photography team.",
    icon: Camera,
    color: "from-blue-500/10 to-transparent",
    left: "60%",
    top: "8%",
    rotate: -4,
  },
  {
    id: "florist",
    src: "/Polaroid 5.png",
    alt: "Florist",
    title: "The Styling",
    caption: "Florist",
    description: "Curate color boards, track bouquet designs, and manage floristry budget allocations.",
    icon: Flower,
    color: "from-pink-500/10 to-transparent",
    left: "81%",
    top: "12%",
    rotate: 9,
  },
  {
    id: "love",
    src: "/Polaroid 4.png",
    alt: "Love",
    title: "Your Story",
    caption: "Love",
    description: "Save personal vows, inspiration notes, and share checklists directly with your partner.",
    icon: Heart,
    color: "from-red-500/10 to-transparent",
    left: "18%",
    top: "54%",
    rotate: 5,
  },
  {
    id: "guest",
    src: "/Polaroid 2.png",
    alt: "Guest",
    title: "The Loved Ones",
    caption: "Guest",
    description: "Track RSVPs, manage dietary requirements, and coordinate daytime vs evening guests.",
    icon: Users,
    color: "from-purple-500/10 to-transparent",
    left: "46%",
    top: "58%",
    rotate: -7,
  },
  {
    id: "wedding-night",
    src: "/Polaroid 7.png",
    alt: "Wedding Night",
    title: "The Afterparty",
    caption: "Wedding Night",
    description: "Organize post-wedding details, morning brunch plans, and overnight stays for guests.",
    icon: Moon,
    color: "from-indigo-500/10 to-transparent",
    left: "73%",
    top: "50%",
    rotate: 3,
  },
];

export function Scrapbook() {
  const [activeItem, setActiveItem] = useState<(typeof scrapbookItems)[0] | null>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden bg-[var(--background-elevated)] border-b border-[var(--border)]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/watercolor-floral-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-elevated)] via-[var(--background-elevated)]/85 to-[var(--background-elevated)]" />
        <div className="ambient-glow left-[15%] top-[10%] h-[35vmax] w-[35vmax] bg-[var(--accent)]/[0.04]" />
        <div className="ambient-glow right-[10%] bottom-[10%] h-[40vmax] w-[40vmax] bg-white/10" />
      </div>

      <AnimatedSection
        id="scrapbook"
        className="relative z-10 mx-auto max-w-[var(--max-width)] px-4 py-[var(--section-y)] sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white/70 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] shadow-[var(--shadow-sm)] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Your Wedding Scrapbook
            </div>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-5 flex flex-col items-center">
            <h2 className="font-serif text-3xl font-medium leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.85rem] max-w-3xl">
              Every detail,{" "}
              <em className="not-italic font-serif italic text-[var(--accent)]">
                beautifully arranged.
              </em>
            </h2>
            <Ornament className="mt-4" />
          </FadeIn>
          <FadeIn delay={0.12} className="mt-4">
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500 md:text-base">
              Wedvisa connects every part of your planning journey. Drag the polaroid cards around, or hover over them to view what&apos;s inside.
            </p>
          </FadeIn>
        </div>

        {/* Desktop Collage Board */}
        <div className="relative mt-16 hidden min-h-[660px] w-full lg:block" ref={constraintsRef}>
          {/* Detailed Info Card Panel (Absolute / Fixed center position) */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeItem ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-[420px] rounded-[1.75rem] border border-[var(--border-strong)] bg-white/95 p-8 shadow-[var(--shadow-xl)] backdrop-blur-md text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] text-[var(--accent)] shadow-[var(--shadow-sm)]">
                    <activeItem.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-serif text-[1.35rem] font-semibold text-slate-900">
                    {activeItem.title}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-slate-500">
                    {activeItem.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                    <span>Category: {activeItem.caption}</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  className="w-full max-w-[340px] rounded-2xl border border-dashed border-slate-300 p-8 text-center"
                >
                  <p className="text-xs font-medium tracking-wide text-slate-400">
                    Hover, drag, or tap a Polaroid to explore planning details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scattered Polaroids */}
          {scrapbookItems.map((item) => {
            const isActive = activeItem?.id === item.id;
            return (
              <motion.div
                key={item.id}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.08}
                whileDrag={{ scale: 1.08, rotate: item.rotate * 0.5, zIndex: 50 }}
                style={{
                  left: item.left,
                  top: item.top,
                  rotate: item.rotate,
                }}
                className={`absolute z-10 w-[9.25rem] cursor-grab active:cursor-grabbing select-none transition-shadow duration-300 ${
                  isActive ? "!z-40" : ""
                }`}
                onHoverStart={() => setActiveItem(item)}
                onHoverEnd={() => setActiveItem(null)}
                onClick={() => setActiveItem(isActive ? null : item)}
              >
                <div
                  className={`rounded-sm bg-[#faf7f2] p-1.5 pb-4 shadow-[0_6px_16px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(12,10,9,0.14)] ${
                    isActive ? "ring-[var(--accent-ring)] ring-2 -translate-y-2 shadow-[0_20px_42px_rgba(12,10,9,0.16)]" : ""
                  }`}
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100/50">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="180px"
                      priority
                      className="pointer-events-none object-cover transition-transform duration-500"
                    />
                  </div>
                  {/* Subtle caption matching the script font design */}
                  <div className="mt-3 text-center">
                    <span className="font-script text-[1.25rem] leading-none text-slate-800 tracking-wide select-none">
                      {item.caption}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipeable Track */}
        <div className="mt-12 flex w-full flex-col gap-6 lg:hidden">
          <div className="scrollbar-hide flex w-full gap-5 overflow-x-auto pb-4 snap-x snap-mandatory px-2">
            {scrapbookItems.map((item) => (
              <div
                key={item.id}
                className="w-[11.5rem] shrink-0 snap-center select-none"
              >
                <div className="rounded-lg bg-[#faf7f2] p-2 pb-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.02]">
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100/50 rounded-sm">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="220px"
                      className="pointer-events-none object-cover"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <span className="font-script text-[1.4rem] leading-none text-slate-800 tracking-wide">
                      {item.caption}
                    </span>
                  </div>
                </div>
                
                {/* Description directly below on mobile */}
                <div className="mt-4 px-2 text-center">
                  <h4 className="font-serif text-sm font-semibold text-slate-900 flex items-center justify-center gap-1.5">
                    <item.icon className="h-3.5 w-3.5 text-[var(--accent)]" strokeWidth={2} />
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              ← Swipe cards to explore →
            </span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
