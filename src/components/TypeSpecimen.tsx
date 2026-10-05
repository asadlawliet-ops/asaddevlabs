"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const W = { min: 400, max: 900 };
const O = { min: 6, max: 96 };

/**
 * Live specimen of the ADL Didone display face. Pointer X drives weight,
 * pointer Y drives optical size; touch users get sliders + an idle "breathing" loop.
 */
export default function TypeSpecimen() {
  const stage = useRef<HTMLDivElement>(null);
  const glyph = useRef<HTMLDivElement>(null);
  const state = useRef({ w: 520, o: 96 });
  const [ui, setUi] = useState({ w: 520, o: 96 });
  const idleRef = useRef<gsap.core.Tween | null>(null);
  const stopIdle = () => {
    idleRef.current?.kill();
    idleRef.current = null;
  };

  const apply = (w: number, o: number, sync = true) => {
    state.current = { w, o };
    if (glyph.current) {
      glyph.current.style.fontWeight = String(Math.round(w));
      glyph.current.style.fontVariationSettings = `"opsz" ${Math.round(o)}`;
    }
    if (sync) setUi({ w: Math.round(w), o: Math.round(o) });
  };

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    apply(state.current.w, state.current.o);
    const reduce = document.documentElement.classList.contains("reduce");

    // Idle breathing loop while in view (stops once the user interacts)
    if (!reduce) {
      const proxy = { ...state.current };
      idleRef.current = gsap.to(proxy, {
        w: 880,
        o: 18,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        paused: true,
        onUpdate: () => apply(proxy.w, proxy.o),
      });
    }
    const io = new IntersectionObserver(([e]) =>
      e.isIntersecting ? idleRef.current?.play() : idleRef.current?.pause()
    );
    io.observe(el);

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      stopIdle();
      const r = el.getBoundingClientRect();
      const x = gsap.utils.clamp(0, 1, (e.clientX - r.left) / r.width);
      const y = gsap.utils.clamp(0, 1, (e.clientY - r.top) / r.height);
      apply(W.min + x * (W.max - W.min), O.max - y * (O.max - O.min));
    };
    el.addEventListener("pointermove", move);
    return () => {
      io.disconnect();
      stopIdle();
      el.removeEventListener("pointermove", move);
    };
     
  }, []);

  return (
    <div className="spec__stage-wrap">
      <div ref={stage} className="spec__stage" data-cursor="Move">
        <div className="spec__tl eyebrow">
          <span>ADL Didone — Display</span>
          <span className="accent">Variable</span>
        </div>
        <div ref={glyph} className="spec__glyph" aria-hidden="true">
          A<em>a</em>&amp;
        </div>
        <div className="spec__axes">
          <span>
            wght <b>{ui.w}</b>
          </span>
          <span className="hide-sm">← move to explore →</span>
          <span>
            opsz <b>{ui.o}</b>
          </span>
        </div>
      </div>
      <div className="spec__sliders eyebrow">
        <label>
          Weight
          <input
            type="range"
            min={W.min}
            max={W.max}
            value={ui.w}
            onChange={(e) => { stopIdle(); apply(Number(e.target.value), state.current.o); }}
          />
          <span>{ui.w}</span>
        </label>
        <label>
          Optical
          <input
            type="range"
            min={O.min}
            max={O.max}
            value={ui.o}
            onChange={(e) => { stopIdle(); apply(state.current.w, Number(e.target.value)); }}
          />
          <span>{ui.o}</span>
        </label>
      </div>
    </div>
  );
}
