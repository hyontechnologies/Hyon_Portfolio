import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getServiceBySlug, allServiceSlugs } from "@/services/servicesData";
import { categoriesData } from "@/services/categoriesData";
import { CTAWithModal } from "@/components/ui/cta-with-modal";

// ─── Static params for SSG ─────────────────────────────────────────────────

export function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

// ─── Dynamic SEO Metadata ──────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `https://hyon.tech/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Hyon Technologies`,
      description: service.description,
      url: `https://hyon.tech/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Hyon Technologies`,
      description: service.description,
    },
  };
}

// ─── Helper: Find parent category ──────────────────────────────────────────

function getParentCategory(serviceSlug: string) {
  for (const cat of categoriesData) {
    if (cat.services.some((s) => s.slug === serviceSlug)) {
      return cat;
    }
  }
  return null;
}

// ─── Accent color map ──────────────────────────────────────────────────────

const accentMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  blue:    { border: "border-blue-500/30",    bg: "bg-blue-500/10",    text: "text-blue-400",    glow: "shadow-blue-500/20" },
  emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", glow: "shadow-emerald-500/20" },
  violet:  { border: "border-violet-500/30",  bg: "bg-violet-500/10",  text: "text-violet-400",  glow: "shadow-violet-500/20" },
  sky:     { border: "border-sky-500/30",     bg: "bg-sky-500/10",     text: "text-sky-400",     glow: "shadow-sky-500/20" },
  orange:  { border: "border-orange-500/30",  bg: "bg-orange-500/10",  text: "text-orange-400",  glow: "shadow-orange-500/20" },
  cyan:    { border: "border-cyan-500/30",    bg: "bg-cyan-500/10",    text: "text-cyan-400",    glow: "shadow-cyan-500/20" },
  rose:    { border: "border-rose-500/30",    bg: "bg-rose-500/10",    text: "text-rose-400",    glow: "shadow-rose-500/20" },
  indigo:  { border: "border-indigo-500/30",  bg: "bg-indigo-500/10",  text: "text-indigo-400",  glow: "shadow-indigo-500/20" },
  red:     { border: "border-red-500/30",     bg: "bg-red-500/10",     text: "text-red-400",     glow: "shadow-red-500/20" },
  slate:   { border: "border-slate-500/30",   bg: "bg-slate-500/10",   text: "text-slate-400",   glow: "shadow-slate-500/20" },
  purple:  { border: "border-purple-500/30",  bg: "bg-purple-500/10",  text: "text-purple-400",  glow: "shadow-purple-500/20" },
};

function getAccent(color: string) {
  return accentMap[color] || accentMap.purple!;
}

// ─── Page Component ────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  const parent = getParentCategory(slug);
  const accent = getAccent(service.accentColor);

  // ─── JSON-LD Schemas ──────────────────────────────────────────────────────

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://hyon.tech" },
      ...(parent
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: parent.title,
              item: `https://hyon.tech/category/${parent.slug}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: service.title,
              item: `https://hyon.tech/services/${slug}`,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: service.title,
              item: `https://hyon.tech/services/${slug}`,
            },
          ]),
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Hyon Technologies",
      url: "https://hyon.tech",
    },
    areaServed: "Worldwide",
    serviceType: service.title,
  };

  return (
    <main className="relative min-h-screen bg-[#0a0118] text-white overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Fixed background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.heroGradient}`} />
        <div className="absolute inset-0 bg-[#0a0118]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(88,28,135,0.2)_0%,_transparent_60%)]" />
      </div>

      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-10">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            {parent && (
              <>
                <Link
                  href={`/category/${parent.slug}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {parent.title}
                </Link>
                <span className="text-gray-600">/</span>
              </>
            )}
            <span className="text-white/80">{service.title}</span>
          </nav>

          {/* Tagline badge */}
          <div className={`inline-flex items-center gap-2 rounded-full border ${accent.border} ${accent.bg} px-4 py-1.5 text-sm ${accent.text} mb-6 backdrop-blur-sm`}>
            <span>✦</span>
            {service.tagline}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            {service.description}
          </p>


        </div>
      </section>

      {/* ─── Overview ─────────────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            {service.overview}
          </p>
        </div>
      </section>

      {/* ─── Capabilities ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border ${accent.border} bg-black/30 backdrop-blur-sm p-6 hover:bg-black/40 transition-colors duration-300`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
                  <div className={`shrink-0 text-right`}>
                    <div className={`text-xl font-bold ${accent.text}`}>{cap.metric}</div>
                    <div className="text-xs text-gray-500">{cap.metricLabel}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Use Cases ────────────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Real-World Use Cases</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {service.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 flex flex-col"
              >
                <span className={`inline-block text-xs font-semibold ${accent.text} uppercase tracking-wider mb-3`}>
                  {uc.industry}
                </span>
                <h3 className="text-base font-semibold text-white mb-3">{uc.challenge}</h3>
                <p className="text-sm text-gray-400 mb-3 flex-grow">{uc.solution}</p>
                <div className={`text-sm font-medium ${accent.text} border-t border-white/5 pt-3 mt-auto`}>
                  {uc.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className={`mx-auto w-14 h-14 rounded-full ${accent.bg} border ${accent.border} flex items-center justify-center text-lg font-bold ${accent.text} mb-4`}>
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technologies ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-gray-300">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className={`text-sm px-4 py-2 rounded-full border ${accent.border} ${accent.bg} ${accent.text}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let&apos;s build your {service.title.toLowerCase()} solution together.
            </p>
            <CTAWithModal
              primaryText={service.cta.primary}
            />
          </div>
        </div>
      </section>

      {/* Footer link */}
      <div className="relative z-10 text-center py-8 border-t border-white/5">
        <Link href="/" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
          © 2026 Hyon Technologies
        </Link>
      </div>
      <Link
        href="/#categories"
        className="fixed bottom-16 sm:bottom-8 right-4 sm:right-8 z-50 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] outline-none touch-manipulation text-sm sm:text-base"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        View All Categories
      </Link>
    </main>
  );
}
