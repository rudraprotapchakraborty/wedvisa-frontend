"use client";

import { useEffect, useRef, useState } from "react";
import { cinematic } from "@/lib/cinematic-store";
import { cn } from "@/lib/utils";

/**
 * Global cinematic atmosphere (GPU-cheap):
 * - static film grain + vignette (no mix-blend, no continuous animation)
 * - scroll progress rail
 * - custom cursor via direct DOM (no Framer springs / mix-blend-difference)
 */
export function CinematicAtmosphere() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const pos = useRef({ x: -100, y: -100, tx: -100, ty: -100, s: 1, ts: 1 });
  const rafRef = useRef(0);
  const movingRef = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
    if (!fine || reduced) return;

    document.documentElement.classList.add("has-cinematic-cursor");

    const onMove = (e: PointerEvent) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
      movingRef.current = true;
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest?.(
        "a, button, [role='button'], input, textarea, select, label, .cursor-magnetic"
      );
      const next = !!interactive;
      hoveringRef.current = next;
      setHovering(next);
      pos.current.ts = next ? 2.4 : 1;
      movingRef.current = true;
    };

    const onDown = () => {
      pos.current.ts = hoveringRef.current ? 1.7 : 0.7;
      movingRef.current = true;
    };
    const onUp = () => {
      pos.current.ts = hoveringRef.current ? 2.4 : 1;
      movingRef.current = true;
    };

    // Single rAF only while cursor is settling — not forever
    const tick = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.22;
      p.y += (p.ty - p.y) * 0.22;
      p.s += (p.ts - p.s) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${p.s})`;
      }

      const settled =
        Math.abs(p.tx - p.x) < 0.15 &&
        Math.abs(p.ty - p.y) < 0.15 &&
        Math.abs(p.ts - p.s) < 0.01;

      if (!settled) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        movingRef.current = false;
        rafRef.current = 0;
      }
    };

    const kick = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    const onMoveKick = (e: PointerEvent) => {
      onMove(e);
      kick();
    };
    const onOverKick = (e: PointerEvent) => {
      onOver(e);
      kick();
    };
    const onDownKick = () => {
      onDown();
      kick();
    };
    const onUpKick = () => {
      onUp();
      kick();
    };

    window.addEventListener("pointermove", onMoveKick, { passive: true });
    window.addEventListener("pointerover", onOverKick, { passive: true });
    window.addEventListener("pointerdown", onDownKick);
    window.addEventListener("pointerup", onUpKick);

    const applyProgress = () => {
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${cinematic.scroll.progress})`;
      }
    };
    applyProgress();
    const unsub = cinematic.subscribe(applyProgress);

    return () => {
      document.documentElement.classList.remove("has-cinematic-cursor");
      window.removeEventListener("pointermove", onMoveKick);
      window.removeEventListener("pointerover", onOverKick);
      window.removeEventListener("pointerdown", onDownKick);
      window.removeEventListener("pointerup", onUpKick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      unsub();
    };
  }, []);

  return (
    <>
      {/* Static grain — no animation, no mix-blend (those force full-page recomposite) */}
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
        <div
          ref={cursorRef}
          className="pointer-events-none fixed left-0 top-0 z-[110]"
          style={{ transform: "translate3d(-100px, -100px, 0)" }}
          aria-hidden
        >
          <div
            className={cn(
              "-translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-900 bg-slate-900 transition-[width,height,background-color,border-color,opacity] duration-200 ease-out",
              hovering
                ? "h-11 w-11 border-slate-900/40 bg-slate-900/10"
                : "h-3 w-3 opacity-90"
            )}
          />
        </div>
      ) : null}
    </>
  );
}
