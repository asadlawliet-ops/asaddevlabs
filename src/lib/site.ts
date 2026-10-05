/**
 * Central site configuration & content.
 * Edit this file to update copy, contact details and social links.
 */

export const site = {
  name: "AsadDevLabs",
  legalName: "AsadDevLabs Studio",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://asaddevlabs.vercel.app").replace(/\/$/, ""),
  title: "AsadDevLabs — Awwwards-level Websites, Technical SEO & Automation",
  shortTitle: "AsadDevLabs — Independent Web Studio",
  description:
    "AsadDevLabs designs and engineers full-custom, Awwwards-level websites — landing pages, multi-page sites and e-commerce — plus technical SEO, Stripe & Shopify, Sanity CMS, Android apps, n8n automation, Chrome extensions and Google Workspace add-ons.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Asadlawliet@gmail.com",
  location: "Karachi, Pakistan",
  timezone: "Asia/Karachi",
  tzLabel: "PKT",
  founder: "Asad",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asad-lawliet/" },
  ],
  keywords: [
    "custom website design",
    "Awwwards website",
    "web design studio",
    "landing page design",
    "multi-page website",
    "ecommerce website development",
    "Next.js developer",
    "technical SEO",
    "Shopify developer",
    "Stripe integration",
    "Sanity CMS",
    "Vercel",
    "Netlify",
    "Android app development",
    "n8n automation",
    "Chrome extension development",
    "Google Workspace add-on development",
  ],
} as const;

export const nav = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Work types", href: "#build" },
  { label: "SEO", href: "#seo" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const marquee = [
  "Landing Pages",
  "Multi-page Websites",
  "E-commerce",
  "Technical SEO",
  "Stripe",
  "Shopify",
  "Sanity CMS",
  "Android Apps",
  "n8n Automation",
  "Chrome Extensions",
  "Workspace Add-ons",
];

export type Service = {
  id: string;
  title: string;
  italic: string;
  summary: string;
  items: string[];
  tags: string[];
};

export const services: Service[] = [
  {
    id: "design",
    title: "Custom Web",
    italic: "Design",
    summary:
      "Awwwards-level, 100% bespoke art direction. No templates, no page builders — a visual identity for the web designed around your brand and your customer.",
    items: [
      "Art direction & moodboards",
      "Custom typography & design systems",
      "Motion, scroll & interaction design",
      "High-fidelity Figma prototypes",
    ],
    tags: ["Figma", "Art Direction", "Motion"],
  },
  {
    id: "dev",
    title: "Website",
    italic: "Development",
    summary:
      "Landing pages, multi-page websites, portfolios, SaaS marketing sites and web apps — engineered in Next.js & React for sub-second loads and buttery 60fps animation.",
    items: [
      "Landing pages & one-page sites",
      "Multi-page corporate websites",
      "GSAP, scroll & WebGL animation",
      "Mobile-first, accessible builds",
    ],
    tags: ["Next.js", "React", "GSAP"],
  },
  {
    id: "commerce",
    title: "E-commerce &",
    italic: "Payments",
    summary:
      "Stores that convert. Custom Shopify themes and headless storefronts, Stripe checkouts, subscriptions and invoicing wired straight into your product.",
    items: [
      "Shopify themes & headless Hydrogen",
      "Stripe Checkout, Billing & webhooks",
      "Product catalogues & variants",
      "Conversion-focused checkout UX",
    ],
    tags: ["Shopify", "Stripe", "Headless"],
  },
  {
    id: "seo",
    title: "Technical",
    italic: "SEO",
    summary:
      "Built to be found. The full technical foundation — so search engines and AI answer engines understand, index and rank every page you publish.",
    items: [
      "sitemap.xml, robots.txt & canonical URLs",
      "Metadata, Open Graph & Twitter Cards",
      "JSON-LD structured data & Core Web Vitals",
      "GA4, Search Console & affiliate links",
    ],
    tags: ["GA4", "Search Console", "Schema"],
  },
  {
    id: "cms",
    title: "CMS &",
    italic: "Deployment",
    summary:
      "Edit your site without calling a developer. Sanity CMS content models, Git-based workflows and global edge hosting on Vercel or Netlify.",
    items: [
      "Sanity CMS schemas & Studio",
      "Vercel & Netlify edge hosting",
      "GitHub repos, CI/CD & previews",
      "Domains, DNS, SSL & redirects",
    ],
    tags: ["Sanity", "Vercel", "Netlify", "GitHub"],
  },
  {
    id: "android",
    title: "Android App",
    italic: "Development",
    summary:
      "Native-feeling Android apps that extend your brand to the pocket — from first prototype to Google Play launch, analytics and updates.",
    items: [
      "Kotlin & cross-platform builds",
      "API, auth & payment integration",
      "Push notifications & analytics",
      "Google Play Store launch",
    ],
    tags: ["Android", "Kotlin", "Play Store"],
  },
  {
    id: "automation",
    title: "n8n",
    italic: "Automation",
    summary:
      "Put repetitive work on autopilot. Lead routing, CRM sync, AI agents, reporting and hundreds of app integrations stitched together with n8n.",
    items: [
      "Lead capture → CRM pipelines",
      "AI agents & LLM workflows",
      "Stripe, Sheets, Slack & email ops",
      "Self-hosted or cloud n8n",
    ],
    tags: ["n8n", "AI Agents", "APIs"],
  },
  {
    id: "extensions",
    title: "Extensions &",
    italic: "Add-ons",
    summary:
      "Tools that live where your users work: Chrome extensions on Manifest V3 and Google Workspace add-ons for Gmail, Sheets, Docs and Calendar.",
    items: [
      "Chrome extensions (Manifest V3)",
      "Google Workspace add-ons",
      "Apps Script & Marketplace publishing",
      "Internal productivity tooling",
    ],
    tags: ["Chrome", "Workspace", "Apps Script"],
  },
];

export type BuildType = {
  title: string;
  italic: string;
  text: string;
  meta: string;
  art: "landing" | "multi" | "shop" | "app" | "folio" | "saas" | "blog" | "android";
};

export const buildTypes: BuildType[] = [
  { title: "Landing", italic: "Pages", text: "One page, one goal. Story-driven launches engineered to convert cold traffic.", meta: "1–2 weeks", art: "landing" },
  { title: "Multi-page", italic: "Websites", text: "Corporate and brand sites with deep information architecture and a CMS your team will love.", meta: "3–6 weeks", art: "multi" },
  { title: "E-commerce", italic: "Stores", text: "Shopify or headless storefronts with Stripe-powered checkout and lightning-fast product pages.", meta: "4–8 weeks", art: "shop" },
  { title: "Web Apps &", italic: "Dashboards", text: "Authenticated products, portals and dashboards with real data, roles and payments.", meta: "Scoped", art: "app" },
  { title: "Portfolios &", italic: "Personal Brands", text: "Editorial, award-chasing portfolios for creators, founders and studios.", meta: "2–4 weeks", art: "folio" },
  { title: "SaaS", italic: "Marketing Sites", text: "Pricing, docs, changelogs and product storytelling for software companies.", meta: "3–5 weeks", art: "saas" },
  { title: "CMS-powered", italic: "Blogs", text: "Sanity-driven publications structured for SEO and AI answer engines.", meta: "2–4 weeks", art: "blog" },
  { title: "Android", italic: "Apps", text: "Companion apps that bring your service to Google Play.", meta: "Scoped", art: "android" },
];

export const seoChecklist = [
  { k: "sitemap.xml", v: "Auto-generated, always fresh" },
  { k: "robots.txt", v: "Crawl rules for search & AI bots" },
  { k: "Metadata", v: "Titles, descriptions, canonicals" },
  { k: "Open Graph", v: "Rich previews on every share" },
  { k: "Twitter Card", v: "summary_large_image, done right" },
  { k: "JSON-LD", v: "Organization, FAQ, Product schema" },
  { k: "Affiliate links", v: "rel=\"sponsored nofollow\" & tracking" },
  { k: "GA4 + Search Console", v: "Events, conversions, indexing" },
];

export const stack = [
  "Next.js", "React", "TypeScript", "GSAP", "Lenis", "Tailwind", "Figma", "Sanity",
  "Shopify", "Stripe", "Vercel", "Netlify", "GitHub", "n8n", "Kotlin", "Android",
  "Chrome MV3", "Apps Script", "Google Analytics 4", "Search Console", "Node.js", "Supabase",
];

export const steps = [
  {
    n: "01",
    title: "Discover",
    italic: "& define",
    text: "A deep-dive call, competitor and audience research, sitemap and success metrics. You get a clear scope, timeline and fixed quote.",
    points: ["Brief & goals", "Research", "Sitemap", "Fixed quote"],
  },
  {
    n: "02",
    title: "Design",
    italic: "& direct",
    text: "Art direction, custom typography and motion prototypes in Figma. We iterate together until every screen feels unmistakably yours.",
    points: ["Moodboard", "Type system", "Hi-fi UI", "Motion study"],
  },
  {
    n: "03",
    title: "Develop",
    italic: "& refine",
    text: "Pixel-perfect Next.js engineering, CMS, payments and integrations — tested on real phones, tablets and desktops.",
    points: ["Next.js build", "CMS & APIs", "Animation", "Device QA"],
  },
  {
    n: "04",
    title: "Launch",
    italic: "& grow",
    text: "Deployed from GitHub to Vercel or Netlify with technical SEO, analytics and Search Console live on day one — then ongoing care.",
    points: ["Go-live", "SEO & GA4", "Training", "Support"],
  },
];

export const stats = [
  { value: 100, suffix: "", label: "Lighthouse score we build toward" },
  { value: 0, suffix: "", label: "Templates or page builders used" },
  { value: 24, suffix: "h", label: "Reply time on every enquiry" },
  { value: 15, suffix: "+", label: "Services under one roof" },
];

export const engagements = [
  {
    name: "Launch",
    italic: "Landing page",
    time: "1–2 weeks",
    text: "A single, high-impact page to launch a product, campaign or personal brand.",
    items: ["Custom design & motion", "Mobile-optimised variant", "Technical SEO setup", "GA4 + Search Console", "Vercel / Netlify deploy"],
  },
  {
    name: "Studio",
    italic: "Multi-page site",
    time: "3–6 weeks",
    text: "A complete brand website with CMS so your team can publish without code.",
    items: ["Everything in Launch", "Up to 10 unique templates", "Sanity CMS", "Structured data", "Training session"],
    featured: true,
  },
  {
    name: "Commerce",
    italic: "Online store",
    time: "4–8 weeks",
    text: "Shopify or headless commerce with Stripe-grade checkout and product SEO.",
    items: ["Everything in Studio", "Shopify / Stripe", "Product schema", "Analytics events", "Automation hooks"],
  },
  {
    name: "Lab",
    italic: "Retainer",
    time: "Monthly",
    text: "Ongoing design, development, SEO and automation — your on-call web lab.",
    items: ["Priority requests", "n8n automations", "Apps & extensions", "Monthly SEO report", "Cancel anytime"],
  },
];

export const faqs = [
  {
    q: "What does “Awwwards-level” actually mean?",
    a: "It means the site is fully custom-designed with a distinct art direction, refined typography, purposeful motion and flawless engineering — the standard judged by Awwwards across design, usability, creativity and content. Every project is designed from a blank canvas; nothing is templated.",
  },
  {
    q: "How long does a website take?",
    a: "A landing page typically takes 1–2 weeks, a multi-page website 3–6 weeks and an e-commerce store 4–8 weeks. You get a precise timeline and fixed quote after the discovery call.",
  },
  {
    q: "Do you include technical SEO?",
    a: "Yes — every build ships with a sitemap.xml, robots.txt, canonical URLs, metadata, Open Graph and Twitter Card tags, JSON-LD structured data, Core Web Vitals optimisation, Google Analytics 4 and Google Search Console set up and verified.",
  },
  {
    q: "Will my website work perfectly on mobile?",
    a: "Always. Every site gets a dedicated mobile-optimised variant — layouts, typography and animations are re-composed for touch screens rather than simply shrunk down, and tested on real devices.",
  },
  {
    q: "Can I edit the content myself?",
    a: "Yes. Sites can be connected to Sanity CMS so you can update pages, blog posts and products in a friendly editor, with changes going live automatically through Vercel or Netlify.",
  },
  {
    q: "Do you build e-commerce and payments?",
    a: "Yes — custom Shopify themes, headless Shopify storefronts and Stripe integrations including Checkout, subscriptions, invoices and webhooks.",
  },
  {
    q: "What else can you build besides websites?",
    a: "Android apps, Chrome extensions (Manifest V3), Google Workspace add-ons for Gmail, Sheets and Docs, and n8n automation workflows that connect your tools, CRM and AI agents.",
  },
  {
    q: "Where are you based and who do you work with?",
    a: "AsadDevLabs is based in Karachi, Pakistan and works remotely with founders, brands and agencies worldwide across all time zones.",
  },
];
