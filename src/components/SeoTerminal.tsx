"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Tab = { file: string; code: ReactNode };

const c = (t: string) => <span className="c">{t}</span>;
const k = (t: string) => <span className="k">{t}</span>;
const s = (t: string) => <span className="s">{t}</span>;
const t = (x: string) => <span className="t">{x}</span>;

const tabs: Tab[] = [
  {
    file: "layout.tsx",
    code: (
      <>
        {c("// Every page ships with complete metadata")}
        {"\n"}
        {k("export const")} metadata = {"{"}
        {"\n  "}title: {s('"Your Brand — What you do, where"')},
        {"\n  "}description: {s('"155 characters that earn the click…"')},
        {"\n  "}alternates: {"{ "}canonical: {s('"/"')} {"}"},
        {"\n  "}openGraph: {"{"}
        {"\n    "}type: {s('"website"')}, images: [{s('"/og.png"')}],
        {"\n  "}{"}"},
        {"\n  "}twitter: {"{ "}card: {s('"summary_large_image"')} {"}"},
        {"\n  "}robots: {"{ "}index: {t("true")}, follow: {t("true")} {"}"},
        {"\n  "}verification: {"{ "}google: {s('"gsc-token"')} {"}"},
        {"\n"}
        {"};"}
      </>
    ),
  },
  {
    file: "robots.txt",
    code: (
      <>
        {c("# Crawl rules for search + AI answer engines")}
        {"\n"}
        {k("User-agent:")} *{"\n"}
        {k("Allow:")} /{"\n"}
        {k("Disallow:")} /api/{"\n\n"}
        {k("User-agent:")} GPTBot{"\n"}
        {k("User-agent:")} PerplexityBot{"\n"}
        {k("Allow:")} /{"\n\n"}
        {k("Sitemap:")} {s("https://yourbrand.com/sitemap.xml")}
      </>
    ),
  },
  {
    file: "sitemap.xml",
    code: (
      <>
        {c('<?xml version="1.0" encoding="UTF-8"?>')}
        {"\n"}
        {k("<urlset")} xmlns={s('"http://www.sitemaps.org/…"')}
        {k(">")}
        {"\n  "}
        {k("<url>")}
        {"\n    "}
        {k("<loc>")}https://yourbrand.com/{k("</loc>")}
        {"\n    "}
        {k("<lastmod>")}2026-10-05{k("</lastmod>")}
        {"\n    "}
        {k("<priority>")}1.0{k("</priority>")}
        {"\n  "}
        {k("</url>")}
        {"\n  "}
        {c("<!-- regenerated on every deploy -->")}
        {"\n"}
        {k("</urlset>")}
      </>
    ),
  },
  {
    file: "schema.json",
    code: (
      <>
        {"{"}
        {"\n  "}
        {s('"@context"')}: {s('"https://schema.org"')},
        {"\n  "}
        {s('"@type"')}: {s('"Product"')},
        {"\n  "}
        {s('"name"')}: {s('"Signature Hoodie"')},
        {"\n  "}
        {s('"offers"')}: {"{"}
        {"\n    "}
        {s('"@type"')}: {s('"Offer"')}, {s('"price"')}: {t("89")},
        {"\n    "}
        {s('"priceCurrency"')}: {s('"USD"')},
        {"\n    "}
        {s('"availability"')}: {s('"InStock"')}
        {"\n  "}
        {"}"}
        {"\n"}
        {"}"}
      </>
    ),
  },
  {
    file: "analytics.ts",
    code: (
      <>
        {c("// GA4 events + affiliate link hygiene")}
        {"\n"}
        {k("import")} {"{ "}sendGAEvent{" }"} {k("from")} {s('"@next/third-parties/google"')};
        {"\n\n"}
        sendGAEvent({s('"event"')}, {s('"generate_lead"')}, {"{"}
        {"\n  "}form: {s('"contact"')}, value: {t("1")}
        {"\n"}
        {"});"}
        {"\n\n"}
        {c("// Affiliate links are always disclosed")}
        {"\n"}
        {k("<a")} href={s('"…?ref=partner"')} rel={s('"sponsored nofollow"')}
        {k(">")}
      </>
    ),
  },
];

/** Tabbed code window. Auto-cycles until the visitor takes control. */
export default function SeoTerminal() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!auto || document.documentElement.classList.contains("reduce")) return;
    let id = 0;
    const io = new IntersectionObserver(([e]) => {
      window.clearInterval(id);
      if (e.isIntersecting) id = window.setInterval(() => setActive((a) => (a + 1) % tabs.length), 3800);
    });
    if (ref.current) io.observe(ref.current);
    return () => {
      io.disconnect();
      window.clearInterval(id);
    };
  }, [auto]);

  return (
    <div className="term" ref={ref} data-reveal>
      <div className="term__bar">
        <div className="term__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="term__tabs" role="tablist" aria-label="Technical SEO files">
          {tabs.map((tab, i) => (
            <button
              key={tab.file}
              type="button"
              role="tab"
              id={`tab-${tab.file}`}
              aria-selected={i === active}
              aria-controls="seo-panel"
              className="term__tab"
              onClick={() => {
                setAuto(false);
                setActive(i);
              }}
            >
              {tab.file}
            </button>
          ))}
        </div>
      </div>
      <pre className="term__body" id="seo-panel" role="tabpanel" aria-labelledby={`tab-${tabs[active].file}`} tabIndex={0}>
        <code key={active}>
          {tabs[active].code}
          {"\n"}
          <span className="caret" aria-hidden="true" />
        </code>
      </pre>
    </div>
  );
}
