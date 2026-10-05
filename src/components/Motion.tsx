"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { READY_EVENT, setLenis, scrollToTarget } from "@/lib/lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Global motion engine. Content is server-rendered; this component wires
 * declarative data-attributes to GSAP once fonts + preloader are ready.
 *
 *  [data-split]          masked line reveal on enter (hero = intro)
 *  [data-fill]           word-by-word opacity scrub (manifesto)
 *  [data-reveal]         fade-up on enter (data-delay optional)
 *  [data-count]          number count-up
 *  [data-hscroll]        pinned horizontal gallery (desktop only)
 *  [data-stack]          stacking card depth scrub
 *  [data-magnetic]       magnetic hover (pointer:fine only)
 *  [data-parallax]       y-parallax by factor
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = root.classList.contains("reduce");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    ScrollTrigger.config({ ignoreMobileResize: true });

    // ── Smooth scroll: desktop pointers only, native on touch ──
    let lenis: Lenis | null = null;
    const raf = (t: number) => lenis?.raf(t * 1000);
    if (!reduce && fine) {
      lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
      setLenis(lenis);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      if (root.classList.contains("is-loading")) lenis.stop();
    }

    // ── In-page anchor links go through Lenis ──
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!;
      if (id.length < 2) return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      e.preventDefault();
      scrollToTarget(id === "#top" ? 0 : el);
      history.replaceState(null, "", id);
    };
    document.addEventListener("click", onClick);

    const splits: SplitText[] = [];
    const introTweens: gsap.core.Tween[] = [];
    let started = false;
    let ctx: gsap.Context | null = null;

    const build = () => {
      ctx = gsap.context(() => {
        if (reduce) {
          gsap.set("[data-split],[data-reveal]", { clearProps: "all", visibility: "visible", opacity: 1 });
          gsap.set(".score__ring .fg", { strokeDashoffset: 0 });
          return;
        }

        const mm = gsap.matchMedia();

        // Masked line reveals
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          const split = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            maskClass: "split-line-mask",
            linesClass: "split-line-inner",
            autoSplit: true,
            onSplit(self) {
              gsap.set(el, { visibility: "visible" });
              const isIntro = el.dataset.split === "intro";
              const tween = gsap.from(self.lines, {
                yPercent: 110,
                rotate: isIntro ? 2 : 0,
                duration: isIntro ? 1.5 : 1.2,
                ease: "expo.out",
                stagger: isIntro ? 0.11 : 0.08,
                delay: Number(el.dataset.delay || 0),
                paused: isIntro && !started,
                scrollTrigger: isIntro ? undefined : { trigger: el, start: "top 88%", once: true },
              });
              if (isIntro && !started) introTweens.push(tween);
              return tween;
            },
          });
          splits.push(split);
        });

        // Word-fill manifesto
        gsap.utils.toArray<HTMLElement>("[data-fill]").forEach((el) => {
          const split = SplitText.create(el, { type: "words", wordsClass: "word" });
          splits.push(split);
          gsap.to(split.words, {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
          });
        });

        // Fade-up reveals (batched)
        ScrollTrigger.batch("[data-reveal]:not([data-intro])", {
          start: "top 90%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: "expo.out", stagger: 0.08, overwrite: true }),
        });

        // Rules draw in
        gsap.utils.toArray<HTMLElement>(".rule").forEach((el) =>
          gsap.from(el, { scaleX: 0, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } })
        );

        // Counters
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = Number(el.dataset.count);
          const obj = { v: 0 };
          el.textContent = "0";
          gsap.to(obj, {
            v: end,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => (el.textContent = String(Math.round(obj.v))),
          });
        });

        // Lighthouse rings
        gsap.to(".score__ring .fg", {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".scores", start: "top 85%", once: true },
        });

        // Parallax
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) =>
          gsap.to(el, {
            yPercent: Number(el.dataset.parallax) * 100,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          })
        );

        // Desktop-only choreography
        mm.add("(min-width: 1025px)", () => {
          // Pinned horizontal gallery
          const section = document.querySelector<HTMLElement>("[data-hscroll]");
          const track = section?.querySelector<HTMLElement>(".build__track");
          if (section && track) {
            const dist = () => track.scrollWidth - window.innerWidth;
            gsap.to(track, {
              x: () => -dist(),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${dist()}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
              },
            });
            gsap.to(".build__progress i", {
              scaleX: 1,
              ease: "none",
              scrollTrigger: { trigger: section, start: "top top", end: () => `+=${dist()}`, scrub: true },
            });
          }

          // Hero title drifts & softens as you leave
          gsap.to(".hero__title", {
            yPercent: -12,
            opacity: 0.25,
            ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
          });
        });

        // Stacking cards — previous card recedes as the next arrives
        const cards = gsap.utils.toArray<HTMLElement>("[data-stack] .pcard");
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          gsap.to(card, {
            scale: 0.92,
            filter: "brightness(0.55)",
            ease: "none",
            scrollTrigger: { trigger: next, start: "top 85%", end: "top 25%", scrub: true },
          });
        });

        // Footer wordmark rises from below
        gsap.from(".footer__logo svg", {
          yPercent: 55,
          ease: "none",
          scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: true },
        });

        // Magnetic elements
        if (fine) {
          gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
            const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
            const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
            const strength = Number(el.dataset.magnetic || 0.35);
            const move = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * strength);
              yTo((e.clientY - (r.top + r.height / 2)) * strength);
            };
            const leave = () => {
              xTo(0);
              yTo(0);
            };
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", leave);
          });
        }
      });
    };

    // ── Hero intro, played after preloader hand-off ──
    const intro = () => {
      root.classList.remove("is-loading");
      lenis?.start();
      if (reduce) return;
      introTweens.forEach((t) => t.play());
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1.2, clearProps: "all" }, 0.2)
        .to("[data-intro]", { opacity: 1, y: 0, duration: 1.2, stagger: 0.08 }, 0.55)
        .from(".hero__badge", { scale: 0, rotate: -120, duration: 1.6 }, 0.7);
    };

    const start = () => {
      if (started) return;
      started = true;
      intro();
      ScrollTrigger.refresh();
    };

    document.fonts.ready.then(() => {
      build();
      if (!root.classList.contains("is-loading")) start();
    });
    window.addEventListener(READY_EVENT, start);

    // Safety net: never leave content hidden.
    const failsafe = window.setTimeout(start, 4500);

    return () => {
      window.clearTimeout(failsafe);
      window.removeEventListener(READY_EVENT, start);
      document.removeEventListener("click", onClick);
      splits.forEach((s) => s.revert());
      ctx?.revert();
      gsap.ticker.remove(raf);
      lenis?.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
