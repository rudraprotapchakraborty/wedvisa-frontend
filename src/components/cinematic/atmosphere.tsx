"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cinematic } from "@/lib/cinematic-store";
import { springMagnetic } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Global cinematic atmosphere:
 * - film grain + vignette
 * - scroll progress rail
 * - refined custom cursor (desktop only)
 */
export function CinematicAtmosphere() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);

  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const sx = useSpring(cx, springMagnetic);
  const sy = useSpring(cy, springMagnetic);
  const scale = useSpring(1, { stiffness: 280, damping: 22 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
    if (!fine || reduced) return;

    document.documentElement.classList.add("has-cinematic-cursor");

    const onMove = (e: PointerEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest?.(
        "a, button, [role='button'], input, textarea, select, label, .cursor-magnetic"
      );
      const next = !!interactive;
      hoveringRef.current = next;
      setHovering(next);
      scale.set(next ? 2.4 : 1);
    };

    const onDown = () => {
      scale.set(hoveringRef.current ? 1.7 : 0.7);
    };
    const onUp = () => {
      scale.set(hoveringRef.current ? 2.4 : 1);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    let raf = 0;
    const tick = () => {
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${cinematic.scroll.progress})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-cinematic-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
    };
  }, [cx, cy, scale]);

  return (
    <>
      <div className="cinematic-grain pointer-events-none fixed inset-0 z-[90]" aria-hidden />
      <div className="cinematic-vignette pointer-events-none fixed inset-0 z-[89]" aria-hidden />

      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left"
        aria-hidden
      >
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]"
        />
      </div>

      {enabled ? (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[110] mix-blend-difference will-change-transform"
          style={{
            x: sx,
            y: sy,
          }}
          aria-hidden
        >
          <div
            className={cn(
              "-translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,background-color,border-color] duration-300 ease-out",
              hovering
                ? "h-11 w-11 border-white bg-white/15"
                : "h-3 w-3 border-white bg-white"
            )}
          />
        </motion.div>
      ) : null}
    </>
  );
}
