import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site, faqs, services } from "@/lib/site";
import { LogoSprite } from "@/components/Logo";
import "./globals.css";

/* ── ADL Type System ─────────────────────────────────────────────
   Display  → Fraunces Variable (wght 100–900, opsz 9–144, SOFT, WONK)
              Authentic high-contrast editorial serif matching the wordmark.
   Text     → Geist (Vercel's grotesk) for UI & body copy.
   Code     → Geist Mono for indexes, labels and metadata.        */
const display = localFont({
  src: [
    {
      path: "./fonts/Fraunces-Variable.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./fonts/Fraunces-Italic-Variable.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-display",
  display: "swap",
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2EEE6" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0C" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: site.founder, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  formatDetection: { telephone: false, email: false, address: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#studio`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      email: site.email,
      founder: { "@type": "Person", name: site.founder },
      address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
      areaServed: "Worldwide",
      sameAs: site.socials.map((s) => s.href),
      knowsAbout: [...site.keywords],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `${s.title} ${s.italic}`, description: s.summary },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#studio` },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          // Flags JS + motion preference before paint so reveal states never flash.
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;d.classList.add('js');var r=matchMedia('(prefers-reduced-motion: reduce)').matches;if(r)d.classList.add('reduce');var s=false;try{s=sessionStorage.getItem('adl-seen')==='1'}catch(e){}d.classList.add(r||s?'no-preload':'is-loading')})();`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <LogoSprite />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
