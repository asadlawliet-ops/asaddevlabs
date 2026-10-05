import { Logo } from "@/components/Logo";
import Motion from "@/components/Motion";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import Clock from "@/components/Clock";
import ServicesList from "@/components/ServicesList";
import SeoTerminal from "@/components/SeoTerminal";
import TypeSpecimen from "@/components/TypeSpecimen";
import ContactForm from "@/components/ContactForm";
import BuildArt from "@/components/BuildArt";
import { buildTypes, engagements, faqs, marquee, nav, seoChecklist, site, stack, stats, steps } from "@/lib/site";

const Star = () => (
  <svg className="star" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 0c.6 5.6 1.9 9 6.6 10.4L24 12l-5.4 1.6C13.9 15 12.6 18.4 12 24c-.6-5.6-1.9-9-6.6-10.4L0 12l5.4-1.6C10.1 9 11.4 5.6 12 0Z"
    />
  </svg>
);

const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    →
  </span>
);

function SecHead({ idx, label, children }: { idx: string; label: string; children: React.ReactNode }) {
  return (
    <div className="sec-head">
      <p className="sec-label eyebrow">
        <span className="idx">({idx})</span>
        <span>{label}</span>
      </p>
      <h2 className="sec-title display h2" data-split>
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  const marqueeItems = (
    <>
      {marquee.map((m) => (
        <span className="item" key={m}>
          {m}
          <Star />
        </span>
      ))}
    </>
  );

  return (
    <>
      <Preloader />
      <Motion />
      <Cursor />
      <Header />

      <main id="main">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="hero wrap" id="top" aria-label="Introduction">
          <div className="hero__meta eyebrow" data-reveal data-intro>
            <span>Independent web studio</span>
            <span>Design · Engineering · SEO</span>
            <span>
              {site.location} — <Clock />
            </span>
            <span className="status">
              <span className="status__dot" aria-hidden="true" />
              Available for new projects
            </span>
          </div>

          <h1 className="hero__title display" data-split="intro" data-delay="0.05">
            <span className="l1">Websites that</span>
            <br />
            <span className="l2">
              win <em>awards</em>
            </span>
            <br />
            <span className="l3">
              <span className="amp">&amp;</span>customers.
            </span>
          </h1>

          <div className="hero__bottom">
            <p className="hero__lead lead" data-reveal data-intro>
              Full-custom, Awwwards-level websites, technical SEO and automation — designed, engineered and shipped by{" "}
              <strong style={{ fontWeight: 500 }}>{site.name}</strong>.
            </p>
            <div className="hero__ctas" data-reveal data-intro>
              <a href="#contact" className="btn" data-magnetic="0.3">
                Start a project
                <Arrow />
              </a>
              <a href="#services" className="btn btn--ghost">
                Explore services
              </a>
            </div>
            <a href="#studio" className="hero__badge" aria-label="Scroll to studio">
              <svg className="ring" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text>
                  <textPath href="#badge-circle">Awwwards-level · Custom design · Scroll ·</textPath>
                </text>
              </svg>
              <span className="core" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </section>

        {/* ── MARQUEE BAND ────────────────────────────────── */}
        <div className="on-dark band" aria-hidden="true">
          <div className="marquee">
            <div className="marquee__track">{marqueeItems}</div>
            <div className="marquee__track">{marqueeItems}</div>
          </div>
        </div>

        {/* ── 01 STUDIO ───────────────────────────────────── */}
        <section className="section wrap" id="studio" aria-labelledby="studio-title">
          <div className="grid">
            <p className="eyebrow sec-label" style={{ gridColumn: "1 / span 3", display: "flex", gap: "0.75rem" }}>
              <span className="accent">(01)</span>
              <span id="studio-title">The studio</span>
            </p>
            <p className="manifesto" data-fill>
              {site.name} is an independent studio for brands that refuse to look like a template. Every pixel is{" "}
              <em>designed from scratch</em>, every line of code written for speed, and every page engineered to be found — so
              your website doesn&rsquo;t just exist, it <em>performs</em>.
            </p>
            <div className="pillars">
              {[
                ["Design", "Bespoke art direction, custom typography and motion that make your brand unforgettable."],
                ["Engineering", "Next.js on the edge. Sub-second loads, 60fps animation and accessible, semantic code."],
                ["Growth", "Technical SEO, analytics, payments and automation wired in from day one."],
              ].map(([t, d], i) => (
                <div className="pillar" key={t} data-reveal>
                  <span className="eyebrow muted">0{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label} data-reveal>
                <div className="stat__num">
                  <span data-count={s.value}>{s.value}</span>
                  {s.suffix ? <sup>{s.suffix}</sup> : null}
                </div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 SERVICES ─────────────────────────────────── */}
        <section className="section wrap" id="services" aria-label="Services" style={{ paddingTop: 0 }}>
          <SecHead idx="02" label="Capabilities">
            Everything your brand needs <em>online</em>.
          </SecHead>
          <ServicesList />
        </section>

        {/* ── 03 BUILD TYPES (pinned horizontal) ──────────── */}
        <section className="build" id="build" aria-label="Types of websites" data-hscroll>
          <div className="build__pin">
            <div className="build__head wrap">
              <div>
                <p className="eyebrow" style={{ display: "flex", gap: "0.75rem", marginBottom: "1.2rem" }}>
                  <span className="accent">(03)</span> What I build
                </p>
                <h2 className="display h2" data-split>
                  Every kind of <em>website</em>.
                </h2>
              </div>
              <div className="build__progress" aria-hidden="true">
                <i />
              </div>
            </div>
            <div className="build__viewport">
              <ul className="build__track">
                {buildTypes.map((b, i) => (
                  <li className="bcard" key={b.title} data-cursor="Drag">
                    <div className="bcard__top eyebrow">
                      <span className="accent">{String(i + 1).padStart(2, "0")}</span>
                      <span className="muted">{b.meta}</span>
                    </div>
                    <div className="bcard__art" aria-hidden="true">
                      <div className="bcard__art-visual">
                        <BuildArt art={b.art} />
                      </div>
                    </div>
                    <div className="bcard__info">
                      <h3>
                        {b.title} <em>{b.italic}</em>
                      </h3>
                      <p>{b.text}</p>
                    </div>
                  </li>
                ))}
                <li className="bcard bcard--end" data-cursor="Contact">
                  <div className="bcard__top eyebrow">
                    <span className="accent">09</span>
                    <span className="muted">Custom</span>
                  </div>
                  <div className="bcard__art bcard__art--end" aria-hidden="true">
                    <div className="bcard__art-visual art-stage art-stage--end">
                      <div className="art-end-code">
                        <span className="art-pulse-dot" style={{ background: "var(--signal)" }} />
                        <pre><code>{`// Bespoke scope\nconst project = await studio.build({\n  awwwards: true,\n  performance: 100,\n  scale: "unlimited"\n});`}</code></pre>
                      </div>
                      <div className="art-floating art-floating--end">
                        <span>Full-Stack · Mobile · AI · Tools</span>
                      </div>
                    </div>
                  </div>
                  <div className="bcard__info">
                    <span className="eyebrow accent" style={{ display: "block", marginBottom: "0.35rem" }}>Something else?</span>
                    <h3>
                      If it lives on a screen, <em>I&rsquo;ll build it.</em>
                    </h3>
                    <a href="#contact" className="btn btn--signal" style={{ alignSelf: "flex-start", marginTop: "0.75rem" }}>
                      Tell me about it
                      <Arrow />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 04 TECHNICAL SEO ────────────────────────────── */}
        <section className="section wrap on-dark" id="seo" aria-label="Technical SEO">
          <div className="seo__grid">
            <div className="seo__left">
              <p className="eyebrow" style={{ display: "flex", gap: "0.75rem", marginBottom: "1.6rem" }}>
                <span className="accent">(04)</span> Technical SEO
              </p>
              <h2 className="display h2" data-split>
                Engineered to be <em>found</em>.
              </h2>
              <p className="lead muted" style={{ marginTop: "1.6rem" }} data-reveal>
                Beautiful is pointless if nobody sees it. Every build ships with the full technical foundation for Google
                — and for AI answer engines like ChatGPT and Perplexity.
              </p>
              <ul className="checklist">
                {seoChecklist.map((c) => (
                  <li key={c.k} data-reveal>
                    <span className="tick" aria-hidden="true">
                      ✓
                    </span>
                    <code>{c.k}</code>
                    <span className="v">{c.v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="seo__right">
              <SeoTerminal />
            </div>
            <div className="scores" aria-label="Lighthouse targets">
              {["Performance", "Accessibility", "Best Practices", "SEO"].map((s) => (
                <div className="score" key={s} data-reveal>
                  <div className="score__ring">
                    <svg viewBox="0 0 40 40" aria-hidden="true">
                      <circle className="bg" cx="20" cy="20" r="17" pathLength={100} />
                      <circle className="fg" cx="20" cy="20" r="17" pathLength={100} />
                    </svg>
                    <span>100</span>
                  </div>
                  <span className="eyebrow">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 TYPOGRAPHY / BRAND SYSTEM ────────────────── */}
        <section className="section wrap" id="type" aria-label="Typography and brand system">
          <SecHead idx="05" label="In-house type system">
            Typography with <em>intent</em>.
          </SecHead>
          <div className="spec">
            <TypeSpecimen />
            <div className="spec__info">
              <p className="eyebrow muted">The ADL system — three voices</p>
              <div className="face" data-reveal>
                <span className="eyebrow accent">Display</span>
                <span className="face__name display" style={{ fontSize: "var(--step-3)" }}>
                  Fraunces <em>Italic</em>
                </span>
                <span className="face__chars">
                  Fraunces Variable: optical size dynamically scaled (opsz 9–144), variable weight (100–900), and softened serif curvature.
                </span>
              </div>
              <div className="face" data-reveal>
                <span className="eyebrow accent">Text</span>
                <span className="face__name" style={{ fontFamily: "var(--font-sans)" }}>
                  Geist Grotesk
                </span>
                <span className="face__chars">Neutral, precise body copy — ABCDEFGHIJKLM abcdefghijklm 0123456789</span>
              </div>
              <div className="face" data-reveal>
                <span className="eyebrow accent">Code</span>
                <span className="face__name" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--step-1)" }}>
                  Geist Mono
                </span>
                <span className="face__chars" style={{ fontFamily: "var(--font-mono)" }}>
                  {"{ indexes, labels, metadata } → 01 02 03"}
                </span>
              </div>
            </div>

            <ul className="scale" aria-label="Type scale">
              {[
                ["Display", "Websites that win", "13.5rem / 0.92", "display", "var(--step-4)"],
                ["Heading", "Engineered to be found", "7.4rem / 0.92", "display", "var(--step-3)"],
                ["Lead", "Designed, engineered and shipped", "1.55rem / 1.4", "", "var(--step-1)"],
                ["Body", "Every pixel designed from scratch, every line of code written for speed.", "1.125rem / 1.5", "", "var(--step-0)"],
              ].map(([n, sample, spec, cls, size]) => (
                <li key={n} data-reveal>
                  <span className="eyebrow muted">{n}</span>
                  <span className={cls} style={{ fontSize: size }}>
                    {sample}
                  </span>
                  <span className="eyebrow muted">{spec}</span>
                </li>
              ))}
            </ul>

            <div className="palette" aria-label="Colour palette">
              {[
                ["Bone", "#F2EEE6", "var(--bone)", "var(--ink)"],
                ["Parchment", "#E8E2D6", "var(--bone-2)", "var(--ink)"],
                ["Stone", "#6B675F", "var(--stone)", "var(--bone)"],
                ["Ink", "#0E0E0C", "var(--ink)", "var(--bone)"],
                ["Signal", "#FF4D1A", "var(--signal)", "var(--ink)"],
              ].map(([n, hex, bg, fg]) => (
                <div className="swatch" key={n} style={{ background: bg, color: fg }} data-reveal>
                  <span className="eyebrow">{hex}</span>
                  <strong>{n}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 STACK ────────────────────────────────────── */}
        <section className="stack" aria-label="Technology stack">
          <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "2rem" }}>
            <p className="eyebrow">
              <span className="accent">(06)</span>&nbsp;&nbsp;Toolkit
            </p>
            <p className="eyebrow muted">Best-in-class, battle-tested</p>
          </div>
          {[stack.slice(0, 11), stack.slice(11)].map((row, r) => (
            <div className={`marquee${r ? " marquee--rev" : ""}`} key={r} style={{ ["--dur" as string]: "55s" }}>
              {[0, 1].map((k) => (
                <div className="marquee__track" key={k} aria-hidden={k === 1}>
                  {row.map((t) => (
                    <span className="chip" key={t}>
                      <i aria-hidden="true" />
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* ── 07 PROCESS ──────────────────────────────────── */}
        <section className="section wrap" id="process" aria-label="Process" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)" }}>
          <div className="proc">
            <div className="proc__aside">
              <div className="proc__sticky">
                <p className="eyebrow" style={{ display: "flex", gap: "0.75rem" }}>
                  <span className="accent">(07)</span> Process
                </p>
                <h2 className="display h2" data-split>
                  From brief to <em>launch</em>.
                </h2>
                <p className="muted" style={{ maxWidth: "34ch" }} data-reveal>
                  A transparent, four-step process with fixed quotes, weekly previews and a live staging link from day one.
                </p>
                <a href="#contact" className="btn" style={{ justifySelf: "start" }} data-reveal>
                  Book a discovery call
                  <Arrow />
                </a>
              </div>
            </div>
            <ol className="proc__cards" data-stack>
              {steps.map((s, i) => (
                <li className="pcard" key={s.n} style={{ ["--i" as string]: i }}>
                  <div className="pcard__top">
                    <span className="pcard__n">{s.n}</span>
                    <span className="eyebrow muted">Step {i + 1} / 4</span>
                  </div>
                  <div>
                    <h3>
                      {s.title} <em>{s.italic}</em>
                    </h3>
                    <p>{s.text}</p>
                  </div>
                  <div className="pcard__points">
                    {s.points.map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 08 ENGAGEMENTS ──────────────────────────────── */}
        <section className="section wrap" id="engagements" aria-label="Engagement models" style={{ paddingTop: 0 }}>
          <SecHead idx="08" label="Engagements">
            Ways to work <em>together</em>.
          </SecHead>
          <div className="plans">
            {engagements.map((e) => (
              <article className={`plan${e.featured ? " plan--feat" : ""}`} key={e.name} data-reveal>
                <div className="plan__head">
                  <span className="tag">{e.time}</span>
                  {e.featured ? <span className="eyebrow accent">Most popular</span> : null}
                </div>
                <h3 className="plan__name">
                  {e.name}
                  <em>{e.italic}</em>
                </h3>
                <p>{e.text}</p>
                <ul>
                  {e.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="plans__note" data-reveal>
            <p className="lead">Every project is quoted individually — fixed price, no surprises, reply within 24 hours.</p>
            <a href="#contact" className="btn btn--signal" data-magnetic="0.3">
              Get a custom quote
              <Arrow />
            </a>
          </div>
        </section>

        {/* ── 09 FAQ ──────────────────────────────────────── */}
        <section className="section wrap" id="faq" aria-label="Frequently asked questions" style={{ paddingTop: 0 }}>
          <div className="faq">
            <div className="faq__aside">
              <p className="eyebrow" style={{ display: "flex", gap: "0.75rem" }}>
                <span className="accent">(09)</span> FAQ
              </p>
              <h2 className="display h2" data-split>
                Good <em>questions</em>.
              </h2>
              <p className="muted" data-reveal>
                Can&rsquo;t find what you&rsquo;re looking for?{" "}
                <a className="link-u" href={`mailto:${site.email}`} style={{ color: "var(--ink)" }}>
                  Email the studio
                </a>
                .
              </p>
            </div>
            <div className="faq__list">
              {faqs.map((f, i) => (
                <details className="qa" key={f.q} name="faq" open={i === 0} data-reveal>
                  <summary>
                    {f.q}
                    <span className="svc__plus" aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10 CONTACT ──────────────────────────────────── */}
        <section className="section wrap on-dark contact" id="contact" aria-label="Contact">
          <p className="eyebrow" style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem" }}>
            <span className="accent">(10)</span> Start a project
          </p>
          <h2 className="display contact__title" data-split>
            Let&rsquo;s build something <em>remarkable</em>.
          </h2>
          <div className="contact__grid">
            <div className="contact__info">
              <div data-reveal>
                <p className="eyebrow muted" style={{ marginBottom: "0.6rem" }}>
                  Email
                </p>
                <a className="contact__mail link-u" href={`mailto:${site.email}`} data-cursor="Write">
                  {site.email}
                </a>
              </div>
              <div data-reveal>
                <p className="eyebrow muted" style={{ marginBottom: "0.6rem" }}>
                  Studio
                </p>
                <p>
                  {site.location}
                  <br />
                  Local time <Clock />
                  <br />
                  Working worldwide, all time zones
                </p>
              </div>
              <div data-reveal>
                <p className="eyebrow muted" style={{ marginBottom: "0.6rem" }}>
                  Elsewhere
                </p>
                <ul style={{ display: "grid", gap: "0.3rem" }}>
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a className="link-u" href={s.href} target="_blank" rel="noopener noreferrer">
                        {s.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="footer wrap on-dark">
        <div className="footer__cols">
          <div className="footer__col">
            <p className="eyebrow muted">Navigate</p>
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="link-u" style={{ justifySelf: "start" }}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="footer__col">
            <p className="eyebrow muted">Services</p>
            <span>Custom web design</span>
            <span>Landing &amp; multi-page sites</span>
            <span>E-commerce · Stripe · Shopify</span>
            <span>Technical SEO</span>
          </div>
          <div className="footer__col">
            <p className="eyebrow muted">Also</p>
            <span>Sanity CMS · Vercel · Netlify</span>
            <span>Android apps</span>
            <span>n8n automation</span>
            <span>Chrome &amp; Workspace add-ons</span>
          </div>
          <div className="footer__col">
            <p className="eyebrow muted">Contact</p>
            <a href={`mailto:${site.email}`} className="link-u" style={{ justifySelf: "start" }}>
              {site.email}
            </a>
            <a
              href={site.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-u"
              style={{ justifySelf: "start" }}
            >
              LinkedIn ↗
            </a>
            <span>{site.location}</span>
            <span>
              <Clock />
            </span>
          </div>
        </div>
        <div className="footer__logo" aria-hidden="true">
          <Logo variant="light" />
        </div>
        <div className="footer__base eyebrow muted">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Designed &amp; engineered in-house</span>
          <a href="#top" className="totop link-u">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
