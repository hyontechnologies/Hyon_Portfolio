import type { Metadata } from "next";
import HomeClient from "./HomeClient";

// ─── Page-Specific SEO Metadata ────────────────────────────────────────────
// This is a SERVER component, so it can export metadata that was previously
// impossible when page.tsx was "use client".

export const metadata: Metadata = {
  title: "Hyon Technologies | Next Generation IT Solutions",
  description:
    "Hyon Technologies delivers scalable software development, AI-powered automation, and full-stack IT solutions for startups and growing businesses. Custom web apps, cloud architecture, and intelligent systems — built fast, priced right.",
  alternates: {
    canonical: "https://hyontechnologies.online",
  },
};

// ─── Server-Rendered Page Shell ────────────────────────────────────────────
// The HomeClient component handles all interactivity. By making this a server
// component, Next.js can statically render the page shell and enable metadata
// exports. Key child components (FeaturesCards, ClientsSection, Timeline)
// now SSR their content for crawler visibility.

export default function HomePage() {
  return <HomeClient />;
}
