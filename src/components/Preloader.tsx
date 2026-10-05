"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Logo } from "@/components/Logo";
import { READY_EVENT } from "@/lib/lenis";

/** Once-per-session intro: wordmark fills left→right with a 0–100 counter, then the curtain lifts. */
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    const done = () => {
      try {
        sessionStorage.setItem("adl-seen", "1");
      } catch {}
      window.dispatchEvent(new Event(READY_EVENT));
    };
    if (!el || !root.classList.contains("is-loading")) {
      done();
      return;
    }

    const count = el.querySelector<HTMLElement>(".preloader__count")!;
    const obj = { p: 0 };
    const tl = gsap.timeline({ defaults: { ease: "expo.inOut" } });
    tl.to(obj, {
      p: 100,
      duration: 1.7,
      ease: "power2.inOut",
      onUpdate: () => {
        count.textContent = String(Math.round(obj.p)).padStart(3, "0");
      },
    })
      .to(".preloader__logo .fill", { clipPath: "inset(0 0% 0 0)", duration: 1.7, ease: "power2.inOut" }, 0)
      .to(".preloader__logo", { scale: 0.94, opacity: 0, duration: 0.7, ease: "power3.in" }, "+=0.15")
      .to(".preloader__meta", { opacity: 0, duration: 0.4 }, "<")
      .add(done, "-=0.1")
      .to(el, { clipPath: "inset(0 0 100% 0)", duration: 1.1 }, "-=0.15")
      .set(el, { display: "none" });

    const skip = () => tl.progress(1);
    el.addEventListener("click", skip);
    return () => {
      el.removeEventListener("click", skip);
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} className="preloader" aria-hidden="true">
      <div className="preloader__logo">
        <Logo className="ghost" />
        <div className="fill">
          <Logo />
        </div>
      </div>
      <div className="preloader__meta">
        <span className="eyebrow">Independent web studio — loading experience</span>
        <span className="preloader__count">000</span>
      </div>
    </div>
  );
}
