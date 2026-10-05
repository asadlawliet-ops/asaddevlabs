"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import Clock from "@/components/Clock";
import { getLenis } from "@/lib/lenis";

function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const last = useRef(0);

  // Hide on scroll down, reveal on scroll up; toggle mobile CTA after the hero.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - last.current;
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > window.innerHeight * 0.6);
        last.current = y;
      }
      const footer = document.querySelector(".contact");
      const nearEnd = footer ? footer.getBoundingClientRect().top < window.innerHeight * 0.6 : false;
      setShowCta(y > window.innerHeight * 0.85 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll + Escape to close while the mobile menu is open.
  useEffect(() => {
    const lenis = getLenis();
    document.body.classList.toggle("menu-open", open);
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={`header${hidden && !open ? " is-hidden" : ""}`}>
        <a href="#top" className="header__logo" aria-label={`${site.name} — back to top`} onClick={close}>
          <Logo />
        </a>
        <nav className="header__nav" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              <Roll>{n.label}</Roll>
            </a>
          ))}
        </nav>
        <div className="header__right">
          <span className="header__clock">
            Karachi <Clock />
          </span>
          <a href="#contact" className="header__cta" data-magnetic="0.25">
            Start a project
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
            <span className="menu-btn__icon" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mmenu${open ? " is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <ul className="mmenu__links">
          {[...nav, { label: "Contact", href: "#contact" }].map((n, i) => (
            <li key={n.href}>
              <a href={n.href} onClick={close} style={{ transitionDelay: open ? `${0.25 + i * 0.05}s` : "0s" }}>
                {n.label}
                <small>{String(i + 1).padStart(2, "0")}</small>
              </a>
            </li>
          ))}
        </ul>
        <div className="mmenu__foot">
          <a href={`mailto:${site.email}`} className="contact__mail">
            {site.email}
          </a>
          <div className="mmenu__social eyebrow">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
          <span className="eyebrow muted">
            {site.location} · <Clock />
          </span>
        </div>
      </div>

      <div className={`mcta${showCta && !open ? " is-visible" : ""}`} aria-hidden={!showCta}>
        <a href="#contact" className="btn btn--signal" tabIndex={showCta ? 0 : -1}>
          Start a project
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </a>
        <a href={`mailto:${site.email}`} className="mcta__mail" aria-label="Email the studio" tabIndex={showCta ? 0 : -1}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>
      </div>
    </>
  );
}
