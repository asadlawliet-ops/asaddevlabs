# AsadDevLabs — Studio Website

Awwwards-grade single-page site for **AsadDevLabs**: custom web design and development, technical SEO, e-commerce, apps and automation.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript). Server-rendered content with small client islands.
- **GSAP 3.15** (ScrollTrigger and SplitText) handles masked line reveals, word-fill scrub, the pinned horizontal gallery, stacking cards, counters and magnetic buttons.
- **Lenis** provides smooth scroll on fine pointers only. Touch devices keep native scrolling.
- **ADL type system**:
  - Bodoni Moda (variable `wght` and `opsz`, tuned to echo the Didone wordmark)
  - Geist
  - Geist Mono
- **Palette**: Bone `#F2EEE6`, Ink `#0E0E0C` and Signal `#FF4D1A`.
- **Vercel Analytics** and **Speed Insights**. GA4 is optional through an env var.

## Technical SEO built in

- `sitemap.xml` comes from `src/app/sitemap.ts`.
- `robots.txt` comes from `src/app/robots.ts` and explicitly allows AI answer-engine crawlers.
- Metadata includes the canonical URL, Open Graph and Twitter `summary_large_image`.
- Dynamic OG and Twitter images live in `opengraph-image.tsx`.
- JSON-LD covers `ProfessionalService`, `WebSite` and `FAQPage`.
- A web manifest, an SVG favicon and an Apple touch icon are included.
- Google Search Console verification is available through `NEXT_PUBLIC_GSC_VERIFICATION`.

## Mobile variant

On mobile the layouts are recomposed rather than shrunk. Breakpoints are at ≤1024px and ≤680px. Mobile gets:

- a full-screen menu
- a sticky CTA bar
- a native swipe gallery in place of the pinned scroll
- range sliders on the type specimen
- no custom cursor or smooth scroll
- full `prefers-reduced-motion` support

## Editing content

All copy, services, FAQ, contact email and social links live in **`src/lib/site.ts`**.

## Develop

```bash
npm install
npm run dev
```

## Deploy

The site deploys automatically to Vercel on every push to `main`. Set the env vars from `.env.example` in Vercel Project Settings.
