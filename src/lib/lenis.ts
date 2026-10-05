import type Lenis from "lenis";

/** Module-level handle so any client component can drive smooth scroll. */
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};
export const getLenis = () => instance;

export function scrollToTarget(target: string | HTMLElement | number) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/** Fired by the preloader once the intro hand-off should begin. */
export const READY_EVENT = "adl:ready";
