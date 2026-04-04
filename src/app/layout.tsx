import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from "next/script";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// ─── SEO Metadata ──────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://hyon.tech"),
  title: {
    default: "Hyon Technologies | Next Generation IT Solutions",
    template: "%s | Hyon Technologies",
  },
  description:
    "Hyon Technologies delivers scalable software development, AI-powered automation, and full-stack IT solutions for startups and growing businesses. Custom web apps, cloud architecture, and intelligent systems — built fast, priced right.",
  keywords: [
    "Hyon Technologies",
    "IT solutions",
    "software development",
    "AI automation",
    "web development",
    "startup tech",
    "cloud architecture",
    "custom software",
    "digital transformation",
    "Next.js development",
    "React development",
    "full-stack development",
  ],
  authors: [{ name: "Hyon Technologies" }],
  creator: "Hyon Technologies",
  publisher: "Hyon Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hyon.tech",
    siteName: "Hyon Technologies",
    title: "Hyon Technologies | Next Generation IT Solutions",
    description:
      "Scalable software, AI automation, and modern IT solutions for startups and growing businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hyon Technologies - Next Generation IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyon Technologies | Next Generation IT Solutions",
    description:
      "Scalable software, AI automation, and modern IT solutions for startups and growing businesses.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://hyon.tech",
  },
  category: "Technology",
};

export const viewport: Viewport = {
  themeColor: "#0a0118",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hyon Technologies",
  url: "https://hyon.tech",
  logo: "https://hyon.tech/logo.png",
  description:
    "Next generation IT solutions for startups and growing businesses. Custom software development, AI automation, and cloud architecture.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://github.com",
    "https://linkedin.com",
    "https://instagram.com",
    "https://youtube.com",
  ],
  offers: {
    "@type": "AggregateOffer",
    description: "IT Solutions and Software Development Services",
    offerCount: 6,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT Solutions & Software Development",
  provider: {
    "@type": "Organization",
    name: "Hyon Technologies",
  },
  description:
    "Custom software development, AI automation, data analytics, and industry-specific smart platforms.",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Core Software Development & Digital Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automation, AI & Workflow Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data, Analytics & Intelligence Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Finance, Operations & Management Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Productivity & Communication Platforms" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industry-Specific Smart Platforms" } },
    ],
  },
};

// ─── Root Layout ───────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "dark overscroll-none bg-[#0a0118]",
        "font-sans",
        geist.variable,
        spaceGrotesk.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data for SEO */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="service-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#0a0118] text-foreground overflow-y-auto overscroll-none relative" style={{ position: 'relative' }}>
        {children}
      </body>
    </html>
  );
}
