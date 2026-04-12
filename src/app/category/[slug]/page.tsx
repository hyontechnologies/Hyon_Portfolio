import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categoriesData, getCategoryBySlug } from "@/services/categoriesData";
import { CTAWithModal } from "@/components/ui/cta-with-modal";
import { CategoryImage } from "@/components/ui/category-image";

// ─── Static params for SSG ─────────────────────────────────────────────────

export function generateStaticParams() {
  return categoriesData.map((cat) => ({ slug: cat.slug }));
}

// ─── Dynamic SEO Metadata ──────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};

  return {
    title: `${cat.title} — Services`,
    description: cat.tagline,
    alternates: {
      canonical: `https://hyontechnologies.online/category/${slug}`,
    },
    openGraph: {
      title: `${cat.title} | Hyon Technologies`,
      description: cat.tagline,
      url: `https://hyontechnologies.online/category/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.title} | Hyon Technologies`,
      description: cat.tagline,
    },
  };
}

// ─── Page Component ────────────────────────────────────────────────────────

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return notFound();

  // ─── JSON-LD Schemas ──────────────────────────────────────────────────────

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://hyontechnologies.online" },
      {
        "@type": "ListItem",
        position: 2,
        name: category.title,
        item: `https://hyontechnologies.online/category/${slug}`,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.title} Services`,
    description: category.tagline,
    numberOfItems: category.services.length,
    itemListElement: category.services.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: service.label,
      url: `https://hyontechnologies.online/services/${service.slug}`,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Fixed background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#120428] to-[#0d0220]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.15)_0%,_transparent_70%)]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Top Centered Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-16 text-center bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
            {category.title}
          </h1>

          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
            
            {/* Category Signature Image (Left) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-gradient-to-br from-purple-500/20 to-transparent p-[2px] rounded-2xl w-full max-w-sm xl:max-w-md">
              <CategoryImage
                src={category.image}
                alt={category.title}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

            {/* Description (Right) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
                {category.tagline}
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                {category.overview}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-purple-400">{category.services.length}</span>{" "}
            Specialized Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {category.services.map((service, idx) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] outline-none touch-manipulation"
              >
                <div className="relative z-10 flex flex-col h-full min-h-[180px] sm:min-h-[220px] bg-[#110629]/80 border border-purple-500/30 group-hover:border-purple-400 group-hover:bg-[#190938] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                  {/* Number badge */}
                  <span className="absolute top-6 right-6 text-sm text-purple-500/60 font-mono font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors pr-8">
                    {service.label}
                  </h3>

                  <div className="mt-auto flex items-center gap-3 text-base font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">
                    <span>Learn more details</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-purple-500/10 to-transparent" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need a {category.title} Solution?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss your requirements and build something tailored to your business.
            </p>
            <CTAWithModal 
              primaryText="Get in Touch" 
            />
          </div>
        </div>
      </section>

      {/* Footer link */}
      <div className="relative z-10 text-center py-8 border-t border-white/5 pb-20 sm:pb-24">
        <Link href="/" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
          © 2026 Hyon Technologies
        </Link>
      </div>

      {/* Floating Back to Home Button */}
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
