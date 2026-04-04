"use client";

import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useAnimation, useMotionValue, useSpring } from "framer-motion";
import {
  Lightbulb,
  LayoutDashboard,
  BookOpen,
  Building2,
  Rocket,
  Zap,
} from "lucide-react";

import Image from "next/image";
import { NavBar } from "@/sections/navbar";

import type { CardStackItem } from "@/components/ui/card-stack";
import type { Stat, Testimonial } from "@/sections/clients-section";

import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/use-mobile";

// ===================== DYNAMIC IMPORTS (SSR-disabled for client-only components) =====================

const FeaturesCards = dynamic(() => import("@/sections/feature-cards"), {
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center animate-pulse bg-white/5 rounded-3xl border border-purple-500/20">
      <span className="text-purple-400 text-sm tracking-wider uppercase">Loading Features...</span>
    </div>
  )
});

const RadialOrbitalTimeline = dynamic(() => import("@/sections/timeline-section"), {
  loading: () => (
    <div className="h-[500px] w-full flex items-center justify-center animate-pulse bg-white/5 rounded-full border border-purple-500/20 mt-12">
      <span className="text-purple-400 text-sm tracking-wider uppercase">Booting Timeline...</span>
    </div>
  )
});

import { Radar as RadarEffect } from "@/components/ui/radar-effect";

const Galaxy = dynamic(() => import("@/components/webgl/Galaxy"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0a0118]" />
});

const CardStack = dynamic(() => import("@/components/ui/card-stack").then(mod => mod.CardStack), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full max-w-md mx-auto flex items-center justify-center animate-pulse bg-white/5 rounded-3xl border border-white/10">
      <span className="text-gray-400 text-sm tracking-wider uppercase">Loading Stack...</span>
    </div>
  )
});

const ClientsSection = dynamic(() => import("@/sections/clients-section").then(mod => mod.ClientsSection), {
  loading: () => (
    <div className="h-[500px] w-full flex items-center justify-center animate-pulse bg-white/5 rounded-3xl border border-white/10 mx-auto max-w-7xl">
      <span className="text-gray-400 text-sm tracking-wider uppercase">Loading Testimonials...</span>
    </div>
  )
});

const ProjectsModal = dynamic(() => import("@/sections/projects-modal").then(mod => mod.ProjectsModal), { ssr: false });

const ContactModal = dynamic(() => import("@/sections/contact-modal").then(mod => mod.ContactModal), { ssr: false });

const OrbRenderer = dynamic(() => import("@/components/webgl/Orb"), {
  ssr: false,
  loading: () => <div className="w-full h-full rounded-full bg-purple-900/10 animate-pulse border border-purple-500/10" />
});

// ===================== VISIBILITY-GATED WEBGL WRAPPER =====================
// Mounts/unmounts WebGL components based on viewport visibility to prevent
// multiple GPU contexts from running simultaneously and crashing the browser.

function VisibilityGate({
  children,
  className = "",
  margin = "200px",
}: {
  children: React.ReactNode;
  className?: string;
  margin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { margin: margin as `${number}px`, once: false });

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : null}
    </div>
  );
}

// ===================== DATA =====================

const navItems = [
  { name: "Solutions", url: "#features", icon: Lightbulb },
  { name: "Platform", url: "#frameworks", icon: LayoutDashboard },
  { name: "Insights", url: "#clients", icon: BookOpen },
  { name: "Company", url: "#about", icon: Building2 },
];

const cardStackItems: CardStackItem[] = [
  {
    id: 1,
    title: "Rapid MVP Development",
    description: "Ship your product in weeks, not months. Our agile pipeline turns ideas into deployable apps fast.",
    imageSrc: "/Card_Stack/Rapid_MVP.webp",
  },
  {
    id: 2,
    title: "Scalable Cloud Architecture",
    description: "Infrastructure that grows with you — from your first 10 users to your next 10,000.",
    imageSrc: "/Card_Stack/Cloud.webp",
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description: "Smart dashboards that surface insights from your data automatically, so you can focus on decisions.",
    imageSrc: "/Card_Stack/AI_ANALYTICS.webp",
  },
  {
    id: 4,
    title: "Secure by Default",
    description: "End-to-end encryption and modern security practices baked into every project from day one.",
    imageSrc: "/Card_Stack/Encrypted.webp",
  },
  {
    id: 5,
    title: "Cross-Platform Deployment",
    description: "One codebase for web, iOS, Android, and desktop — deploy everywhere with zero friction.",
    imageSrc: "/Card_Stack/cross_platform.webp",
  },
];

const statsData: Stat[] = [
  { value: "4.8", label: "Average Rating" },
  { value: "99.9%", label: "Satisfaction" },
];

const testimonialsData: Testimonial[] = [
  {
    name: "Sri Lakshmi Bhavan Restaurant",
    title: "Food & Hospitality",
    quote: "Hyon Technologies truly understood our vision. They didn't just build us a website — they created a digital experience that brought more customers through our doors and streamlined our entire ordering process.",
    rating: 5.0,
  },
  {
    name: "GS Photography",
    title: "Creative & Media",
    quote: "Working with Hyon was a game-changer. They built us a stunning portfolio platform that perfectly showcases our work, and the booking system has saved us hours every week. Highly recommended for any creative business.",
    rating: 5.0,
  },
];

// ===================== FRAMEWORK DATA WITH RICH DETAILS =====================

interface FrameworkItem {
  name: string;
  logoSrc: string;
  delay: number;
  category: string;
  version: string;
  description: string;
  useCases: string[];
  performance: number;
  adoption: string;
  position?: { top: string; left: string };
}

const frameworkItems: FrameworkItem[] = [
  {
    name: "Python",
    logoSrc: "/python-icon.svg",
    delay: 0.2,
    category: "Language",
    version: "3.12",
    description: "Our primary language for AI/ML pipelines, data processing, and backend microservices. Powers the core inference engine.",
    useCases: ["AI Model Training", "Data ETL Pipelines", "API Microservices"],
    performance: 95,
    adoption: "Core",
    position: { top: "70%", left: "19%" } // Pushed slightly inward from extreme left
  },
  {
    name: "Next.js",
    logoSrc: "/nextjs-icon.svg",
    delay: 0.3,
    category: "Web Framework",
    version: "14.2",
    description: "React meta-framework powering our customer-facing dashboards, admin portals, and real-time analytics interfaces with SSR and edge rendering.",
    useCases: ["Client Dashboards", "Admin Portals", "Marketing Sites"],
    performance: 98,
    adoption: "Primary",
    position: { top: "40%", left: "30%" } // Pushed slightly inward from top-left edge
  },
  {
    name: "React",
    logoSrc: "/reactjs-icon.svg",
    delay: 0.5,
    category: "UI Library",
    version: "18.3",
    description: "Component-based UI library forming the foundation of all interactive interfaces. Server Components enable zero-JS rendering for critical paths.",
    useCases: ["Interactive UIs", "Component Library", "Design System"],
    performance: 97,
    adoption: "Core",
    position: { top: "40%", left: "65%" } // Pushed slightly inward from top-right edge
  },
  {
    name: "Docker",
    logoSrc: "/docker-tile.svg",
    delay: 0.6,
    category: "DevOps",
    version: "25.0",
    description: "Containerization platform ensuring consistent environments from development to production. All services run in orchestrated container clusters.",
    useCases: ["Service Isolation", "CI/CD Pipelines", "Multi-cloud Deploy"],
    performance: 96,
    adoption: "Core",
    position: { top: "60%", left: "79%" } // Pushed slightly inward from extreme right
  },
  {
    name: "TypeScript",
    logoSrc: "/typescriptlang-icon.svg",
    delay: 0.7,
    category: "Language",
    version: "5.4",
    description: "Type-safe superset of JavaScript used across all frontend and Node.js backend services. Ensures code reliability and developer productivity.",
    useCases: ["Type Safety", "API Contracts", "Shared Types"],
    performance: 94,
    adoption: "Core",
    position: { top: "90%", left: "65%" } // Pushed slightly inward from bottom-right edge
  },
  {
    name: "Supabase",
    logoSrc: "/supabase-icon.svg",
    delay: 1.0,
    category: "Backend",
    version: "2.0",
    description: "Open source Firebase alternative built on PostgreSQL. Provides instant APIs, real-time subscriptions, and scalable authentication.",
    useCases: ["Backend as a Service", "Realtime Data", "Auth"],
    performance: 96,
    adoption: "Primary",
    position: { top: "90%", left: "35%" } // Pushed slightly inward from bottom-left edge
  },
];

// ===================== INTERACTIVE RADAR NODE =====================

const RadarNode = memo(function RadarNode({ item }: { item: FrameworkItem }) {
  const [hovered, setHovered] = useState(false);

  // Determine if tooltip would clip at the bottom
  const topPercent = parseFloat(item.position?.top || "50");
  const tooltipAbove = topPercent > 60;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
      animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
      transition={{ duration: 0.5, delay: item.delay, type: "spring", stiffness: 200 }}
      className={`absolute group cursor-pointer pointer-events-auto ${hovered ? "z-[999]" : "z-50"}`}
      style={{ left: item.position?.left || "50%", top: item.position?.top || "50%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex flex-col items-center justify-center space-y-2">
        {/* Pulsing effect */}
        <div
          className={`absolute rounded-full -inset-6 transition-opacity duration-300 pointer-events-none ${hovered ? "opacity-100 animate-pulse" : "opacity-0"
            }`}
          style={{
            background: `radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)`,
            animationDuration: '1000ms'
          }}
        />

        {/* Logo icon */}
        <div className={`relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full border transition-all duration-300 touch-manipulation ${hovered
          ? "border-purple-400 bg-purple-900/80 shadow-[0_0_30px_rgba(216,180,254,0.6)] scale-125 -translate-y-2"
          : "border-purple-500/40 bg-slate-900/90 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          }`}>
          <Image
            src={item.logoSrc}
            alt={`${item.name} logo`}
            width={40}
            height={40}
            className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain transition-transform duration-300 ${hovered ? "scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" : ""}`}
          />
        </div>

        {/* Name label (always visible, strictly positioned below the icon) */}
        <div className="absolute top-[120%] pointer-events-none w-max flex justify-center mt-1">
          <div className={`text-center text-[10px] sm:text-xs tracking-wider font-semibold transition-all duration-300 ${hovered ? "opacity-0 scale-95" : "text-white/60 opacity-100 scale-100"}`}>
            {item.name}
          </div>
        </div>

        {/* Desktop-only Tooltip — position dynamically so it doesn't clip screen bounds, offset beneath or above */}
        <div className={`hidden md:block absolute ${tooltipAbove ? 'bottom-full mb-4' : 'top-full mt-8'} left-1/2 -translate-x-1/2 min-w-[220px] bg-slate-900/95 border border-purple-500/30 rounded-xl p-4 shadow-[0_10px_30px_rgba(168,85,247,0.3)] backdrop-blur-md transition-all duration-300 ${hovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-purple-300 text-sm font-bold tracking-wider">{item.name}</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-full border border-white/10">{item.adoption}</span>
          </div>
          <div className="text-xs text-white/80 leading-relaxed mb-3">{item.description}</div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.useCases.slice(0, 2).map((useCase, idx) => (
              <span key={idx} className="text-[9px] px-1.5 py-0.5 bg-purple-500/20 text-purple-200 rounded-sm border border-purple-500/20">{useCase}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

// ===================== PRICING DATA =====================



// ===================== TIMELINE DATA =====================

const historyTimelineData: any[] = [
  {
    id: 1,
    title: "Started the base",
    date: "Jan 2026",
    content: "Initiated the foundational architecture and started the base of our operations.",
    category: "Foundation",
    icon: Building2,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Entering Industry Projects",
    date: "March 2026",
    content: "Transitioning into real-world applications and officially entering industry projects.",
    category: "Expansion",
    icon: Rocket,
    relatedIds: [1],
    status: "in-progress",
    energy: 85,
  }
];

// ===================== SCROLL REVEAL OPTIMIZATION =====================

function ScrollReveal({
  children,
  className = "",
  initialX = 0,
  initialY = 30,
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: initialX, y: initialY },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration, delay }}
      className={className}
      style={{ willChange: inView ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// ===================== DEBOUNCE UTILITY =====================

function useDebouncedCallback<T extends (...args: any[]) => void>(callback: T, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  return useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);
}

// ===================== PAGE =====================

export default function HomeClient() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  // Dynamic sphere scaling and high-DPI rendering calculation
  const [filterValue, setFilterValue] = useState(2000);
  const [sphereSize, setSphereSize] = useState("100vh");
  const [cardWidth, setCardWidth] = useState(420);

  const handleResize = useCallback(() => {
    const dpr = window.devicePixelRatio || 1;
    const maxDim = Math.max(window.innerWidth, window.innerHeight);
    setFilterValue(maxDim * dpr * 1.2);
    const diagonal = Math.ceil(Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)));
    setSphereSize(`${diagonal}px`);
    setCardWidth(Math.min(420, window.innerWidth * 0.75));
  }, []);

  const debouncedResize = useDebouncedCallback(handleResize, 150);

  useEffect(() => {
    handleResize(); // Initialize on mount
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [handleResize, debouncedResize]);

  // Cinematic Movement & Layout Constants
  const TRANSLATE_X_RANGE = 20; // Change this to move the planet further in X (pixels)
  const TRANSLATE_Y_RANGE = 20; // Change this to move the planet further in Y (pixels)

  const heroAboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroAboutRef,
    offset: ["start start", "end start"],
  });

  const isMobile = useIsMobile();

  // Scale down heavily for mobile to prevent overwhelming the viewport and clipping, while restoring original desktop cinematic scale
  const initialPlanetScale = isMobile ? 0.35 : 0.65;
  const finalPlanetScale = isMobile ? 0.05 : 0.1;

  const planetScale = useTransform(scrollYProgress, [0, 1], [initialPlanetScale, finalPlanetScale]);
  const planetY = useTransform(scrollYProgress, [0, 0.8], ["100%", "125%"]);
  const planetX = useTransform(scrollYProgress, [0, 0.8], ["0%", "35%"]);
  const planetOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 1]);

  // Cinematic Mouse Parallax for Planet
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const translatePlanetX = useTransform(springX, [0, 1], [-TRANSLATE_X_RANGE, TRANSLATE_X_RANGE]);
  const translatePlanetY = useTransform(springY, [0, 1], [-TRANSLATE_Y_RANGE, TRANSLATE_Y_RANGE]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  }, [mouseX, mouseY]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hyon Technologies",
            "url": "https://hyon.tech",
            "logo": "https://hyon.tech/HYON-TECHNOLOGIES-4-3-2026.png",
            "description": "Next generation IT solutions, web development, and affordable software for startups and growing businesses.",
            "foundingDate": "2026",
            "sameAs": [
              "https://github.com/hyontechnologies",
              "https://www.linkedin.com/company/hyon-technologies/",
              "https://www.instagram.com/hyon_technologies",
              "https://x.com/Hyon_tech"
            ]
          })
        }}
      />

      {/* Brand Logo — Extracted out of main to guarantee fixed positioning without transform trapping */}
      <div className="fixed top-5 left-5 sm:top-6 sm:left-8 z-[9999] pointer-events-none select-none">
        <Image
          src="/HYON-TECHNOLOGIES-4-3-2026.png"
          alt="Hyon Technologies Logo"
          width={260}
          height={80}
          className="w-auto h-12 sm:h-16 md:h-20 object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          priority
        />
      </div>

      <main
        className="relative bg-[#0a0118] overflow-x-clip w-full max-w-[100vw]"
        onMouseMove={handleMouseMove}
      >
        {/* Navigation */}
        <NavBar items={navItems} />

        {/* Fixed Dark Gradient Background spanning remaining sections */}
        <div className="fixed inset-0 min-w-full min-h-screen z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#120428] to-[#0d0220]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.15)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/60 via-transparent to-[#0a0118]/80" />
        </div>

        <div ref={heroAboutRef} className="relative w-full overflow-hidden bg-[#0a0118] z-10 pointer-events-none">
          {/* Starry Sky Background for Hero and About Us */}
          <div className="absolute inset-0 pointer-events-none z-0 [&_*]:!pointer-events-none">
            <div className="sticky top-0 w-full h-screen overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                <VisibilityGate className="w-full h-full" margin="400px">
                  <Galaxy
                    starSpeed={0.5}
                    density={0.8}
                    hueShift={40}
                    speed={0.7}
                    glowIntensity={0.2}
                    saturation={0.1}
                    mouseRepulsion={false}
                    repulsionStrength={1.5}
                    twinkleIntensity={0.05}
                    rotationSpeed={0.1}
                    transparent
                  />
                </VisibilityGate>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0118]/20 to-[#0a0118]" />
            </div>
          </div>

          {/* Parallax Planet moving across Hero & About Us */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden [&_*]:!pointer-events-none">
            <motion.div
              className="sticky top-0 w-full h-screen flex items-end justify-center pb-0 pointer-events-none"
              style={{ scale: planetScale, y: planetY, x: planetX, opacity: planetOpacity }}
            >
              <motion.div
                animate={{
                  y: [-15, 15, -15],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  scale: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center shrink-0 aspect-square pointer-events-auto relative"
                style={{
                  transform: 'translateY(35%)',
                  width: '180vw',
                  maxWidth: '1300px',
                  x: translatePlanetX,
                  y: translatePlanetY
                }}
              >
                {/* Unified scaling parent to lock Planet and Orb physically together */}
                <div className="absolute inset-[-10%] sm:inset-[-15%] pointer-events-none z-0">
                  <VisibilityGate className="w-full h-full" margin="500px">
                    <OrbRenderer
                      hue={0}
                      hoverIntensity={2.5}
                      rotateOnHover={false}
                      forceHoverState={false}
                    />
                  </VisibilityGate>
                </div>

                <div className="relative w-full h-full scale-[1.0] sm:scale-[1.79] pointer-events-none">
                  <Image
                    src="/Planet.png"
                    alt="Planet"
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 1500px"
                    className="object-contain drop-shadow-2xl translate-x-[-1%] translate-y-[-2%]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ========= 1. HERO SECTION ========= */}
          <section id="hero" aria-label="Hero" className="relative z-20 min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 overflow-hidden pointer-events-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 mb-8 sm:mb-10 backdrop-blur-sm z-10"
            >
              <span className="text-purple-400">✦</span>
              NEXT GENERATION IT SOLUTIONS
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl z-10"
            >
              Powering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300 text-glow">
                What&apos;s Next !
              </span>
              <span className="sr-only">Hyon Technologies - Next Generation IT Solutions, Web Development & Affordable Software</span>
            </motion.h1>

            {/* CTA Button — repositioned specifically for mobile to sit above navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="z-[9999] absolute bottom-28 left-0 right-0 w-full flex justify-center px-4 sm:relative sm:bottom-auto sm:w-auto sm:mt-16 md:mt-58 pointer-events-auto"
            >
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="relative z-50 px-6 py-3.5 sm:px-10 sm:py-5 md:px-12 bg-purple-950/60 hover:bg-white hover:text-purple-700 text-white font-semibold rounded-full transition-all duration-300 border border-purple-400/20 hover:border-white/60 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:backdrop-blur-md touch-manipulation text-sm sm:text-base w-[70%] max-w-[140px] sm:w-auto sm:min-w-[200px] mx-auto hover:scale-90 active:scale-40"
              >
                Book a Call
              </button>
            </motion.div>
          </section>

          {/* ========= 2. ABOUT US SECTION ========= */}
          <section id="about" aria-label="About Hyon Technologies" className="relative z-20 pt-16 pb-12 sm:pt-24 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden pointer-events-auto">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Text content */}
                <ScrollReveal
                  initialX={-50}
                  initialY={0}
                  duration={0.8}
                >
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="sr-only">About Hyon Technologies: </span>
                    Next Generation
                    <br />
                    <span className="text-[#a78bfa]">IT Solutions.</span>
                  </h2>
                  <h3 className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                    Innovation Without the Overhead.
                  </h3>
                  <p className="mt-4 sm:mt-8 text-gray-400 text-sm sm:text-lg leading-relaxed">
                    Hyon Technologies is a modern tech startup redefining how businesses access cutting-edge software and AI solutions. We design scalable, high-performance systems that are accessible to startups, growing businesses, and forward-thinking teams.
                  </p>
                  <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-lg leading-relaxed">
                    From intelligent automation to full-stack product development, we deliver practical solutions that drive real impact — without enterprise-level complexity or cost.
                  </p>
                </ScrollReveal>

                {/* Right: Placeholder for parallax planet */}
                <div className="hidden lg:block relative w-full min-h-[200px]" aria-hidden="true" />
              </div>
            </div>
          </section>

        </div> {/* Close heroAboutRef container */}

        <div className="relative w-full z-20">
          {/* ========= TIMELINE / HISTORY SECTION ========= */}
          <section id="history" aria-label="Company Timeline" className="relative py-10 sm:py-16 mt-4 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
              <ScrollReveal
                initialY={30}
                duration={0.6}
                className="text-center mb-12"
              >
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">Our Journey</h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg">
                  Tracing the evolution of Hyon Technologies from its inception to the present. Click nodes to explore.
                </p>
              </ScrollReveal>
              <RadialOrbitalTimeline timelineData={historyTimelineData} />
            </div>
          </section>

          {/* ========= 3. FEATURES SECTION (Card Stack) ========= */}
          <section id="features" className="hidden md:block relative pt-4 pb-8 sm:pb-12 -mt-8 sm:-mt-4 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Our Services & Solutions</h2>
              </motion.div>
            </div>

            {/* Card Stack — no scale hack, use responsive cardWidth instead */}
            <div className="w-full overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative">
                <div className="flex justify-center items-center pb-16 sm:pb-20">
                  <div className="w-full overflow-visible" style={{ perspective: '1200px' }}>
                    <CardStack
                      items={cardStackItems}
                      initialIndex={1}
                      autoAdvance
                      intervalMs={3000}
                      pauseOnHover
                      showDots
                      cardWidth={cardWidth}
                      cardHeight={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========= 4. FEATURES CARDS (CSS Gradients) ========= */}
          <div id="categories">
            <FeaturesCards />
          </div>

          {/* ========= 5. CLIENTS SECTION ========= */}
          <section id="clients" aria-label="Client Testimonials" className="relative bg-transparent">
            <ClientsSection
              tagLabel="Happy Clients"
              title="CLIENTS LOVE US ❤️"
              description="They didn't just build software, they understood our business goals. Every feature delivered added real value and helped us operate more efficiently from day one."
              stats={statsData}
              testimonials={testimonialsData}
              primaryActionLabel="Book Now"
              secondaryActionLabel="See Our Projects"
              onPrimaryActionClick={() => setIsContactModalOpen(true)}
              onSecondaryActionClick={() => setIsProjectsModalOpen(true)}
            />
          </section>

          {/* ========= 6. FRAMEWORKS SECTION (RADAR - DESKTOP ONLY) ========= */}
          <section id="frameworks" aria-label="Technology Stack" className="hidden md:block relative py-10 sm:py-16 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">Sovereign Tech Stack</h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg">
                  <span className="hidden md:inline">Hover over</span>
                  <span className="md:hidden">Tap</span>
                  {" "}any framework to explore our technology ecosystem in detail.
                </p>
              </motion.div>

              {/* Radar with real framework logos */}
              <div className="relative h-[250px] sm:h-[350px] md:h-[450px] w-full max-w-[95vw] sm:max-w-5xl mx-auto flex items-end justify-center overflow-hidden md:overflow-visible mt-6 sm:mt-12 pb-4 sm:pb-8">
                {/* Background CSS Radar Effect, visually sliced in half */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none w-[90vw] h-[45vw] sm:w-[700px] sm:h-[350px] md:w-[900px] md:h-[450px] flex items-end justify-center opacity-80 mix-blend-screen overflow-hidden">
                  <div className="w-[90vw] h-[90vw] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] absolute translate-y-1/2 flex items-center justify-center">
                    <RadarEffect className="w-full h-full pointer-events-none scale-75 sm:scale-100" />
                  </div>
                </div>

                {/* Foreground Logo Scatter directly floating over radar rings */}
                <div className="relative z-50 w-full h-full pointer-events-none">
                  {frameworkItems.map((item) => (
                    <RadarNode key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </section>



          {/* ========= 8. FOOTER CTA ========= */}
          <section aria-label="Call to Action" className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="p-6 sm:p-10 md:p-16 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 glow-purple">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
                  Ready to Join Us for a Partnership?
                </h2>
                <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                  Let&apos;s build something amazing together. Whether you have a project in mind
                  or want to explore a partnership, we&apos;d love to hear from you.
                </p>
                <div className="mt-8 sm:mt-10 flex justify-center">
                  <button onClick={() => setIsContactModalOpen(true)} className="px-8 sm:px-10 py-4 bg-purple-600/80 hover:bg-purple-600 text-white font-semibold rounded-full transition-all duration-300 border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25 text-base sm:text-lg touch-manipulation min-h-[48px]">
                    Contact for Partnership
                  </button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ========= FOOTER ========= */}
          <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                {/* Brand and Internal Links */}
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-bold text-purple-400">Hyon Technologies</h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-sm mb-4">
                    Next generation IT solutions, web development, and affordable software for startups and growing businesses.
                  </p>
                  <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 justify-center md:justify-start text-xs text-gray-400">
                    <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                    <a href="#features" className="hover:text-purple-400 transition-colors">Services</a>
                    <a href="#clients" className="hover:text-purple-400 transition-colors">Portfolio</a>
                    <button onClick={() => setIsContactModalOpen(true)} className="hover:text-purple-400 transition-colors cursor-pointer">Contact</button>
                  </nav>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  {/* Squircle clip path definition */}
                  <svg width={0} height={0} style={{ position: 'absolute' }}>
                    <defs>
                      <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
                      </clipPath>
                    </defs>
                  </svg>
                  {/* GitHub */}
                  <a href="https://github.com/hyontechnologies" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <div style={{ clipPath: 'url(#squircleClip)' }} className="w-11 h-11 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/hyon-technologies/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div style={{ clipPath: 'url(#squircleClip)' }} className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                  </a>
                  {/* X (Twitter) */}
                  <a href="https://x.com/Hyon_tech" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                    <div style={{ clipPath: 'url(#squircleClip)' }} className="w-11 h-11 bg-black flex items-center justify-center shadow-lg border border-white/10 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
                      </svg>
                    </div>
                  </a>
                  {/* YouTube */}
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <div style={{ clipPath: 'url(#squircleClip)' }} className="w-11 h-11 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/hyon_technologies?igsh=MW1nNHY5dnJoZzl1YQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <div style={{ clipPath: 'url(#squircleClip)' }} className="w-11 h-11 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg border border-pink-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10">
              <div className="max-w-7xl mx-auto px-4 py-5 text-center">
                <p className="text-sm text-gray-500">© 2026 Hyon Technologies. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div> {/* Close relative w-full z-20 */}
      </main>

      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      )}
      {isProjectsModalOpen && (
        <ProjectsModal isOpen={isProjectsModalOpen} onClose={() => setIsProjectsModalOpen(false)} />
      )}
    </>
  );
}
