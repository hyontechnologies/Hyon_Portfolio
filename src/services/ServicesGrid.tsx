"use client"

import Link from "next/link"
import { categoriesData } from "./categoriesData"

export function ServicesGrid() {
  return (
    <section id="all-services" className="min-h-screen py-20 px-4 bg-transparent relative z-[110] isolate">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Our Service Domains</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Six domains. Dozens of specialisations. One partner — end to end.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:ring-2 hover:ring-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/40 hover:z-10 group block outline-none"
            >
              {/* Card content */}
              <div className="relative z-10 flex flex-col h-full bg-[#110629] border border-[#2d1b54] group-hover:bg-[#190938] group-hover:border-[#42228f] transition-all duration-500 rounded-3xl p-8">
                {/* Icon */}
                <div className="mb-5 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                  </svg>
                </div>

                {/* Title + category count */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white leading-tight">{cat.title}</h3>
                </div>

                <p className="flex-grow text-sm text-gray-300 leading-relaxed font-medium">
                  {cat.tagline}
                </p>

                {/* Toggle hint */}
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-gray-200 group-hover:text-blue-300 transition-colors duration-200">
                  <span>Explore domains ({cat.services.length})</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
