"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.section>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: 28 },
    right: { x: -28 },
    none: {},
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto mb-14 max-w-3xl md:mb-20",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow ? (
        <FadeIn>
          <p
            className={cn(
              "mb-4 text-sm font-semibold uppercase tracking-[0.2em]",
              light ? "text-violet-200" : "text-violet-600"
            )}
          >
            {eyebrow}
          </p>
        </FadeIn>
      ) : null}
      <FadeIn delay={0.05}>
        <h2
          className={cn(
            "font-serif text-4xl font-medium tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]",
            light ? "text-white" : "text-slate-900"
          )}
        >
          {title}
        </h2>
      </FadeIn>
      {description ? (
        <FadeIn delay={0.1}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed md:text-xl",
              light ? "text-white/75" : "text-slate-600"
            )}
          >
            {description}
          </p>
        </FadeIn>
      ) : null}
    </div>
  );
}
