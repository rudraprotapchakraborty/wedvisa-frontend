"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "@/lib/motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  /** Split by word for staggered kinetic reveal */
  mode?: "words" | "lines";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  mode = "words",
}: TextRevealProps) {
  const parts = mode === "words" ? text.split(" ") : text.split("\n");

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      {parts.map((part, i) => (
        <span
          key={`${part}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: {
                  duration: 0.85,
                  delay: delay + i * 0.045,
                  ease: easeOutExpo,
                },
              },
            }}
            aria-hidden
          >
            {part}
            {mode === "words" && i < parts.length - 1 ? "\u00A0" : null}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
