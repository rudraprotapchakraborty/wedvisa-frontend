/**
 * Lightweight shared state for scroll + pointer → 3D / motion systems.
 * No React re-renders — consumers read refs every frame.
 */

export type Vec2 = { x: number; y: number };

const scroll = {
  progress: 0,
  heroProgress: 0,
  journeyProgress: 0,
  velocity: 0,
  y: 0,
};

const pointer = {
  x: 0,
  y: 0,
  nx: 0, // -1..1
  ny: 0,
  sx: 0, // smoothed
  sy: 0,
};

const listeners = new Set<() => void>();

export const cinematic = {
  scroll,
  pointer,

  setScroll(partial: Partial<typeof scroll>) {
    let changed = false;
    (Object.keys(partial) as (keyof typeof scroll)[]).forEach((key) => {
      const next = partial[key];
      if (typeof next === "number" && scroll[key] !== next) {
        scroll[key] = next;
        changed = true;
      }
    });
    if (changed) {
      listeners.forEach((fn) => fn());
    }
  },

  setPointer(clientX: number, clientY: number) {
    pointer.x = clientX;
    pointer.y = clientY;
    if (typeof window !== "undefined") {
      pointer.nx = (clientX / window.innerWidth) * 2 - 1;
      pointer.ny = (clientY / window.innerHeight) * 2 - 1;
    }
  },

  /** Call once per frame to ease pointer toward target */
  smoothPointer(alpha = 0.08) {
    pointer.sx += (pointer.nx - pointer.sx) * alpha;
    pointer.sy += (pointer.ny - pointer.sy) * alpha;
  },

  subscribe(fn: () => void) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  },
};
