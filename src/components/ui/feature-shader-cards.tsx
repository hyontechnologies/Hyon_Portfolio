"use client"

import type React from "react"
import { Shield, Cpu, Zap, Globe, BarChart3 } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  accentColor: string
}

const features: Feature[] = [
  {
    title: "Rapid MVP Development",
    description: "Ship your minimum viable product in weeks, not months. Our rapid prototyping pipeline turns ideas into deployable, production-ready applications at startup speed.",
    icon: <Zap className="w-10 h-10 text-yellow-300" />,
    gradient: "from-yellow-900/40 via-orange-900/30 to-amber-900/40",
    accentColor: "border-yellow-500/20 hover:border-yellow-400/40",
  },
  {
    title: "Scalable Cloud Architecture",
    description: "Auto-scaling infrastructure that handles 10 to 10M users without breaking a sweat. Built on distributed edge computing with zero-downtime deployments.",
    icon: <Globe className="w-10 h-10 text-blue-300" />,
    gradient: "from-blue-900/40 via-cyan-900/30 to-indigo-900/40",
    accentColor: "border-blue-500/20 hover:border-blue-400/40",
  },
  {
    title: "AI-Powered Analytics",
    description: "Real-time predictive analytics dashboards that surface actionable insights from your data streams. Turn telemetry into intelligence, automatically.",
    icon: <Cpu className="w-10 h-10 text-cyan-300" />,
    gradient: "from-cyan-900/40 via-teal-900/30 to-emerald-900/40",
    accentColor: "border-cyan-500/20 hover:border-cyan-400/40",
  },
  {
    title: "Enterprise-Grade Security",
    description: "SOC 2, GDPR, and HIPAA compliant from day one. Zero-trust architecture with end-to-end encryption and continuous threat monitoring at every layer.",
    icon: <Shield className="w-10 h-10 text-purple-300" />,
    gradient: "from-purple-900/40 via-violet-900/30 to-fuchsia-900/40",
    accentColor: "border-purple-500/20 hover:border-purple-400/40",
  },
  {
    title: "Real-time Observability",
    description: "Stream millions of data points through our visualization engine. Monitor latency, errors, and throughput across every microservice in your stack.",
    icon: <BarChart3 className="w-10 h-10 text-green-300" />,
    gradient: "from-green-900/40 via-emerald-900/30 to-teal-900/40",
    accentColor: "border-green-500/20 hover:border-green-400/40",
  },
]

export default function FeaturesCards() {
  return (
    <section className="py-12 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Built for Startups
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to launch, scale, and dominate your market with celestial-grade infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                index >= 3 ? "lg:col-span-1 lg:last:col-start-2" : ""
              }`}
            >
              {/* CSS fluid gradient background */}
              <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />
                {/* Animated fluid orbs using CSS */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  <div
                    className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
                      top: '-20%',
                      right: '-20%',
                      animation: `float-${index} ${8 + index * 2}s ease-in-out infinite`,
                    }}
                  />
                  <div
                    className="absolute w-[250px] h-[250px] rounded-full blur-3xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
                      bottom: '-20%',
                      left: '-10%',
                      animation: `float-alt-${index} ${10 + index * 2}s ease-in-out infinite`,
                    }}
                  />
                </div>
                <style>{`
                  @keyframes float-${index} {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(15px, -20px) scale(1.1); }
                    66% { transform: translate(-10px, 15px) scale(0.9); }
                  }
                  @keyframes float-alt-${index} {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-20px, -15px) scale(1.15); }
                  }
                `}</style>
              </div>

              <div className={`relative z-10 p-8 rounded-3xl h-80 flex flex-col bg-black/80 border ${feature.accentColor} transition-all duration-300`}>
                <div className="mb-6 filter drop-shadow-lg">{feature.icon}</div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>

                <p className="leading-relaxed flex-grow text-gray-100 font-medium text-sm">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}