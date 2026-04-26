import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";


const geist = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// ─── SEO Metadata ──────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://hyontechnologies.online"),
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
    url: "https://hyontechnologies.online",
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
    canonical: "https://hyontechnologies.online",
  },
  category: "IT & Technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/Hyon-Tech.png", sizes: "32x32", type: "image/png" },
      { url: "/Hyon-Tech.png", sizes: "192x192", type: "image/png" },  // Android Chrome
      { url: "/Hyon-Tech.png", sizes: "512x512", type: "image/png" },  // Android splash
    ],
    shortcut: [{ url: "/Hyon-Tech.png", type: "image/png" }],
    apple: [
      { url: "/Hyon-Tech.png", sizes: "180x180", type: "image/png" },   // iOS Safari
    ],
  },

 export const metadata: Metadata = {
  // ...all your metadata...
  icons: {
    icon: [
      { url: "/favicon.ico",   sizes: "48x48",   type: "image/x-icon" },
      { url: "/Hyon-Tech.png", sizes: "32x32",   type: "image/png" },
      { url: "/Hyon-Tech.png", sizes: "192x192", type: "image/png" },
      { url: "/Hyon-Tech.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/Hyon-Tech.png", type: "image/png" }],
    apple: [
      { url: "/Hyon-Tech.png", sizes: "180x180", type: "image/png" },
    ],
  },
};                             

export const viewport: Viewport = {
  themeColor: "#0a0118",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hyon Technologies",
    url: "https://hyontechnologies.online",
    "logo": "https://hyontechnologies.online/Hyon-Tech.png",
    "image": "https://hyontechnologies.online/Hyon-Tech.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 7200012857",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    sameAs: [
      "https://github.com/hyontechnologies",
      "https://www.linkedin.com/company/hyon-technologies/",
      "https://www.instagram.com/hyon_technologies",
      "https://x.com/Hyon_tech"
    ],
    "foundingDate": "2026"
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Solutions & Software Development",
    provider: {
      "@type": "Organization",
      name: "Hyon Technologies",
      url: "https://hyontechnologies.online",
    },
    description:
      "Custom software development, AI automation, data analytics, and industry-specific smart platforms.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services Portfolio",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Micro SaaS Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation & Workflow Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom ERP/CRM Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Analytics & Intelligence" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industry-Specific Platforms" } },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hyon Technologies",
    url: "https://hyontechnologies.online",
    description: "Next generation IT solutions for startups and growing businesses.",
    publisher: {
      "@type": "Organization",
      name: "Hyon Technologies",
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
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          <link rel="apple-touch-icon" sizes="180x180" href="/Hyon-Tech.png" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* JSON-LD Structured Data — inline for crawler visibility */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
        </head>
        <body className="antialiased min-h-screen bg-[#0a0118] text-foreground overflow-y-auto overscroll-none relative" style={{ position: 'relative' }}>
          {children}
          <Analytics />
        </body>
      </html>
    );
}
