import type { BuildType } from "@/lib/site";

/**
 * Rich, bespoke motion graphics for each website & engineering build type.
 * Crafted with SVG vector fidelity, live indicators, and editorial details.
 */
export default function BuildArt({ art }: { art: BuildType["art"] }) {
  switch (art) {
    case "landing":
      return <LandingVisual />;
    case "multi":
      return <MultiVisual />;
    case "shop":
      return <ShopVisual />;
    case "app":
      return <AppVisual />;
    case "folio":
      return <FolioVisual />;
    case "saas":
      return <SaasVisual />;
    case "blog":
      return <BlogVisual />;
    case "android":
      return <AndroidVisual />;
  }
}

/** 01: Landing Pages — High-converting hero, live conversion metrics, social proof */
function LandingVisual() {
  return (
    <div className="art-stage art-stage--landing">
      <div className="art-browser">
        <div className="art-browser__bar">
          <div className="art-browser__dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="art-browser__url">asaddevlabs.com/launch</div>
          <div className="art-browser__cta-mini">CTA</div>
        </div>
        <div className="art-browser__body">
          <div className="art-landing__hero">
            <div className="art-landing__badge">
              <span className="art-pulse-dot" />
              <span>98.4% Conversion Rate</span>
            </div>
            <div className="art-landing__heading">
              <span className="art-landing__line art-landing__line--strong">Transform Traffic</span>
              <span className="art-landing__line art-landing__line--sub">into Paying Clients.</span>
            </div>
            <div className="art-landing__ctas">
              <span className="art-btn art-btn--primary">
                Claim Access
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span className="art-btn art-btn--ghost">Watch Demo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating high-impact badges */}
      <div className="art-floating art-floating--proof">
        <div className="art-avatars">
          <span className="art-avatar" style={{ background: "#FF4D1A" }}>A</span>
          <span className="art-avatar" style={{ background: "#2C2B26" }}>L</span>
          <span className="art-avatar" style={{ background: "#6B675F" }}>D</span>
        </div>
        <div className="art-proof__text">
          <div className="art-stars">★★★★★</div>
          <small>250+ Founders</small>
        </div>
      </div>

      <div className="art-floating art-floating--metric">
        <span className="art-metric-arrow">↑</span>
        <div>
          <b>+340%</b>
          <small>Pipeline ROI</small>
        </div>
      </div>
    </div>
  );
}

/** 02: Multi-page Websites — Information architecture tree, connected sitemap & Sanity CMS sync */
function MultiVisual() {
  return (
    <div className="art-stage art-stage--multi">
      <div className="art-tree">
        {/* Root Page */}
        <div className="art-tree__root">
          <div className="art-page-card art-page-card--root">
            <div className="art-page-card__bar">
              <span className="art-page-card__tag">ROOT</span>
              <span className="art-status-pill art-status-pill--ok">200 OK</span>
            </div>
            <div className="art-page-card__title">/ index (Home)</div>
            <div className="art-page-card__grid-mini">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* Tree Branch Vectors */}
        <svg className="art-tree__lines" viewBox="0 0 280 40" fill="none">
          <path d="M140 0 V18 M140 18 H46 V38 M140 18 H140 V38 M140 18 H234 V38" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="140" cy="18" r="2.5" fill="var(--signal)" />
        </svg>

        {/* Child Pages */}
        <div className="art-tree__branches">
          <div className="art-page-card art-page-card--sub">
            <span className="art-page-card__slug">/solutions</span>
            <div className="art-wire-lines">
              <span style={{ width: "80%" }} />
              <span style={{ width: "50%" }} />
            </div>
          </div>
          <div className="art-page-card art-page-card--sub art-page-card--active">
            <span className="art-page-card__slug">/case-studies</span>
            <div className="art-wire-grid">
              <span />
              <span />
            </div>
          </div>
          <div className="art-page-card art-page-card--sub">
            <span className="art-page-card__slug">/about</span>
            <div className="art-wire-lines">
              <span style={{ width: "70%" }} />
              <span style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating CMS Sync Chip */}
      <div className="art-floating art-floating--cms">
        <span className="art-pulse-dot" style={{ background: "#FF4D1A" }} />
        <span>Sanity CMS · Instant Live Edge Sync</span>
      </div>
    </div>
  );
}

/** 03: E-commerce Stores — Headless storefront, product card, variant picker & Stripe checkout */
function ShopVisual() {
  return (
    <div className="art-stage art-stage--shop">
      <div className="art-product-card">
        <div className="art-product-card__header">
          <span className="art-product-card__badge">LIMITED EDITION</span>
          <span className="art-product-card__stock">● In Stock</span>
        </div>

        {/* Product Visual Centerpiece */}
        <div className="art-product-preview">
          <div className="art-product-glow" />
          <svg className="art-product-icon" viewBox="0 0 80 80" fill="none">
            {/* Minimalist luxury watch / tech timepiece silhouette */}
            <circle cx="40" cy="40" r="28" stroke="var(--ink)" strokeWidth="3" />
            <circle cx="40" cy="40" r="24" fill="var(--bone-2)" stroke="var(--line)" strokeWidth="1" />
            <circle cx="40" cy="40" r="3" fill="var(--signal)" />
            <line x1="40" y1="40" x2="40" y2="24" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="40" y1="40" x2="52" y2="40" stroke="var(--signal)" strokeWidth="2" strokeLinecap="round" />
            <rect x="36" y="6" width="8" height="6" rx="2" fill="var(--stone)" />
            <rect x="36" y="68" width="8" height="6" rx="2" fill="var(--stone)" />
          </svg>
        </div>

        {/* Product Details */}
        <div className="art-product-meta">
          <div className="art-product-title-row">
            <span className="art-product-name">Chronograph Studio 01</span>
            <span className="art-product-price">$280<small>.00</small></span>
          </div>

          <div className="art-product-variants">
            <span className="art-variant-pill">40mm</span>
            <span className="art-variant-pill art-variant-pill--active">42mm</span>
            <span className="art-variant-pill">44mm</span>
          </div>

          <div className="art-product-action">
            <div className="art-btn art-btn--shop">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Instant Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stripe / Shopify pill */}
      <div className="art-floating art-floating--stripe">
        <span className="art-stripe-logo">⚡</span>
        <div>
          <b>Stripe &amp; Shopify</b>
          <small>Sub-second 1-click Pay</small>
        </div>
      </div>
    </div>
  );
}

/** 04: Web Apps & Dashboards — SaaS analytics console, SVG revenue graph, live events */
function AppVisual() {
  return (
    <div className="art-stage art-stage--app">
      <div className="art-app-console">
        {/* App Sidebar */}
        <div className="art-app-sidebar">
          <span className="art-app-dot art-app-dot--active" />
          <span className="art-app-dot" />
          <span className="art-app-dot" />
          <span className="art-app-dot" />
        </div>

        {/* App Main Area */}
        <div className="art-app-content">
          {/* Top Metrics Row */}
          <div className="art-app-kpis">
            <div className="art-kpi-card">
              <small>MRR</small>
              <b>$48,250</b>
              <span className="art-kpi-pill art-kpi-pill--up">+24%</span>
            </div>
            <div className="art-kpi-card">
              <small>ACTIVE USERS</small>
              <b>14,820</b>
              <span className="art-kpi-pill">Live</span>
            </div>
          </div>

          {/* Detailed SVG Graph */}
          <div className="art-app-chart">
            <svg viewBox="0 0 200 65" className="art-chart-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--signal)" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Gridlines */}
              <line x1="0" y1="15" x2="200" y2="15" stroke="var(--line)" strokeWidth="0.75" strokeDasharray="3 3" />
              <line x1="0" y1="40" x2="200" y2="40" stroke="var(--line)" strokeWidth="0.75" strokeDasharray="3 3" />
              {/* Area & Line */}
              <path d="M 0 55 Q 30 50, 50 35 T 100 38 T 140 20 T 180 12 L 200 8 L 200 65 L 0 65 Z" fill="url(#chartGrad)" />
              <path d="M 0 55 Q 30 50, 50 35 T 100 38 T 140 20 T 180 12 L 200 8" fill="none" stroke="var(--signal)" strokeWidth="2.5" />
              {/* Pulse marker at peak */}
              <circle cx="180" cy="12" r="3.5" fill="var(--ink)" stroke="var(--signal)" strokeWidth="2" />
            </svg>
            <div className="art-chart-tooltip">+$12.4k Peak</div>
          </div>

          {/* Activity item */}
          <div className="art-app-feed">
            <span className="art-pulse-dot" />
            <small>Stripe: Enterprise seat renewed · <strong>$2,400</strong></small>
          </div>
        </div>
      </div>

      <div className="art-floating art-floating--role">
        <span>Admin · 2FA Active · 99.99% SLA</span>
      </div>
    </div>
  );
}

/** 05: Portfolios & Personal Brands — High-contrast editorial typography, Awwwards badge, swatches */
function FolioVisual() {
  return (
    <div className="art-stage art-stage--folio">
      <div className="art-folio-canvas">
        {/* Editorial Type Specimen */}
        <div className="art-folio-masthead">
          <div className="art-folio-serif">
            Aa<span className="art-folio-dot">.</span>
          </div>
          <div className="art-folio-sub">
            <span>EDITORIAL DIRECTION</span>
            <small>Variable 100–900 / 60fps Motion</small>
          </div>
        </div>

        {/* Featured Project Frame */}
        <div className="art-folio-preview">
          <div className="art-folio-bar">
            <span>PROJECT [01]</span>
            <small>2026 ARCHIVE</small>
          </div>
          <div className="art-folio-wire">
            <span className="art-folio-wire__img" />
            <div className="art-folio-wire__text">
              <b />
              <i />
            </div>
          </div>
        </div>

        {/* Brand Token Swatches */}
        <div className="art-swatches">
          <div className="art-swatch" style={{ background: "#0E0E0C", color: "#F2EEE6" }}>
            <span>#0E0E0C</span>
          </div>
          <div className="art-swatch" style={{ background: "#E8E2D6", color: "#0E0E0C" }}>
            <span>#E8E2D6</span>
          </div>
          <div className="art-swatch" style={{ background: "#FF4D1A", color: "#FFFFFF" }}>
            <span>#FF4D1A</span>
          </div>
        </div>
      </div>

      {/* Floating Awwwards ribbon */}
      <div className="art-floating art-floating--award">
        <span className="art-award-icon">★</span>
        <div>
          <b>SOTD WINNER</b>
          <small>Awwwards &amp; FWA Nominee</small>
        </div>
      </div>
    </div>
  );
}

/** 06: SaaS Marketing Sites — High-converting pricing tier, feature matrix, trial conversion */
function SaasVisual() {
  return (
    <div className="art-stage art-stage--saas">
      {/* Tier Switch */}
      <div className="art-saas-toggle">
        <span className="art-toggle-pill art-toggle-pill--active">Annual (-20%)</span>
        <span className="art-toggle-pill">Monthly</span>
      </div>

      {/* Featured Tier Card */}
      <div className="art-saas-card">
        <div className="art-saas-card__top">
          <div>
            <span className="art-saas-tier">PRO ENTERPRISE</span>
            <div className="art-saas-price">
              <b>$79</b>
              <small>/ mo</small>
            </div>
          </div>
          <span className="art-badge-popular">POPULAR</span>
        </div>

        {/* Features Checklist */}
        <div className="art-saas-features">
          <div className="art-saas-item">
            <span className="art-check">✓</span>
            <span>Unlimited team seats</span>
          </div>
          <div className="art-saas-item">
            <span className="art-check">✓</span>
            <span>GraphQL API &amp; Webhooks</span>
          </div>
          <div className="art-saas-item">
            <span className="art-check">✓</span>
            <span>Custom domain + SSL</span>
          </div>
          <div className="art-saas-item">
            <span className="art-check">✓</span>
            <span>99.99% Uptime SLA</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="art-btn art-btn--saas">
          <span>Start 14-day Free Trial</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="art-floating art-floating--edge">
        <span className="art-pulse-dot" />
        <span>12ms Global Edge Latency</span>
      </div>
    </div>
  );
}

/** 07: CMS-powered Blogs — Sanity publication, structured schema, AI answer engine indexing */
function BlogVisual() {
  return (
    <div className="art-stage art-stage--blog">
      <div className="art-blog-card">
        <div className="art-blog-card__meta">
          <span className="art-blog-tag">SEO &amp; AI PUBLICATION</span>
          <small>4 min read</small>
        </div>

        <div className="art-blog-title">
          Engineering Content for AI Answer Engines
        </div>

        {/* Structured Schema preview block */}
        <div className="art-blog-schema">
          <div className="art-schema-bar">
            <span>JSON-LD Schema</span>
            <small>Schema.org/TechArticle</small>
          </div>
          <pre className="art-schema-code">
{`{
  "@type": "TechArticle",
  "ai_indexable": true,
  "canonical": "auto"
}`}
          </pre>
        </div>

        {/* Live Indexing Status */}
        <div className="art-blog-status">
          <div className="art-status-chip">
            <span className="art-pulse-dot" />
            <span>Google: Position 1</span>
          </div>
          <div className="art-status-chip art-status-chip--ai">
            <span>✦ ChatGPT &amp; Perplexity Indexed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 08: Android Apps — Modern smartphone shell, Material 3 native app UI, Play Store rating */
function AndroidVisual() {
  return (
    <div className="art-stage art-stage--android">
      {/* Smartphone Chassis */}
      <div className="art-phone">
        {/* Camera Punchhole */}
        <div className="art-phone__camera" />

        {/* Android Status Bar */}
        <div className="art-phone__status">
          <span>09:41</span>
          <div className="art-phone__icons">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z"/>
            </svg>
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Native Mobile Screen Content */}
        <div className="art-phone__screen">
          <div className="art-phone__header">
            <div>
              <small>Welcome back</small>
              <b>Asad Studio</b>
            </div>
            <span className="art-phone__avatar" />
          </div>

          {/* Quick Action Matrix */}
          <div className="art-phone__actions">
            <span className="art-action-pill art-action-pill--active">Send</span>
            <span className="art-action-pill">Receive</span>
            <span className="art-action-pill">Analytics</span>
          </div>

          {/* Mini Card Preview */}
          <div className="art-phone__card">
            <small>Active Balance</small>
            <b>$24,800</b>
            <div className="art-phone__curve" />
          </div>

          {/* Bottom Navigation */}
          <div className="art-phone__nav">
            <span className="art-nav-item art-nav-item--active" />
            <span className="art-nav-item" />
            <span className="art-nav-item" />
          </div>
        </div>
      </div>

      {/* Floating Play Store chip */}
      <div className="art-floating art-floating--play">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M3 3l15 9-15 9V3z" fill="var(--signal)" />
        </svg>
        <div>
          <b>Google Play</b>
          <small>★ 4.9 · Kotlin Native</small>
        </div>
      </div>
    </div>
  );
}
