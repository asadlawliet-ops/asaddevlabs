"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Augments (never replaces) the native cursor: a signal dot that trails the
 * pointer, swells over links and morphs into a labelled disc on [data-cursor].
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (document.documentElement.classList.contains("reduce")) return;

    const label = el.querySelector<HTMLElement>(".cursor__ring span")!;
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    const move = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      const labelled = t.closest<HTMLElement>("[data-cursor]");
      const interactive = t.closest("a, button, summary, label, input, textarea, select");
      el.classList.toggle("is-label", !!labelled);
      el.classList.toggle("is-hover", !labelled && !!interactive);
      if (labelled) label.textContent = labelled.dataset.cursor || "";
    };
    const leave = () => el.classList.add("is-hidden");
    const enter = () => el.classList.remove("is-hidden");

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerenter", enter);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerenter", enter);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <div className="cursor__dot" />
      <div className="cursor__ring">
        <span />
      </div>
    </div>
  );
}
