"use client";

import React, { useState, useRef, useCallback } from "react";
import { Code2, Bot, Database, Landmark, MessageSquare, Factory, ChevronRight } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
}

interface TiltState {
  x: number;
  y: number;
  active: boolean;
}

// ─── Data — 6 Service Domains ───────────────────────────────────────────────

const features: Feature[] = [
  {
    title: "Core Software Development & Digital Solutions",
    description:
      "Custom web apps, mobile platforms, and scalable APIs tailored to your business needs — built fast, built right.",
    icon: <Code2 className="w-6 h-6 text-white" />,
    gradient: "linear-gradient(135deg, #021A54 0%, #0a2d7a 100%)",
    glowColor: "rgba(2, 26, 84, 0.6)",
  },
  {
    title: "Automation, AI & Workflow Systems",
    description:
      "Smart automation that eliminates repetitive tasks and AI-powered workflows that learn and adapt to your operations.",
    icon: <Bot className="w-6 h-6 text-white" />,
    gradient: "linear-gradient(135deg, #111FA2 0%, #1a2ec4 100%)",
    glowColor: "rgba(17, 31, 162, 0.6)",
  },
  {
    title: "Data, Analytics & Intelligence Systems",
    description:
      "Turn raw data into actionable insights with real-time dashboards, predictive models, and visual reporting tools.",
    icon: <Database className="w-6 h-6 text-white" />,
    gradient: "linear-gradient(135deg, #134E8E 0%, #1a6ab8 100%)",
    glowColor: "rgba(19, 78, 142, 0.6)",
  },
  {
    title: "Finance, Operations & Management Systems",
    description:
      "Streamline invoicing, inventory, HR, and operations with integrated systems designed for growing businesses.",
    icon: <Landmark className="w-6 h-6 text-white" />,
    gradient: "linear-gradient(135deg, #982598 0%, #b42eb4 100%)",
    glowColor: "rgba(152, 37, 152, 0.6)",
  },
  {
    title: "Business Productivity & Communication Platforms",
    description:
      "Collaboration tools, internal portals, and communication platforms that keep your team aligned and efficient.",
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    gradient: "linear-gradient(135deg, #021A54 0%, #111FA2 100%)",
    glowColor: "rgba(9, 28, 123, 0.6)",
  },
  {
    title: "Industry-Specific Smart Platforms",
    description:
      "Purpose-built solutions for restaurants, photography studios, retail, healthcare, and more — ready to deploy.",
    icon: <Factory className="w-6 h-6 text-white" />,
    gradient: "linear-gradient(135deg, #134E8E 0%, #982598 100%)",
    glowColor: "rgba(84, 58, 147, 0.6)",
  },
];

// ─── Single card ─────────────────────────────────────────────────────────────

function FeatureCard({
  feature,
  isHovered,
  isAnyHovered,
  onEnter,
  onLeave,
}: {
  feature: Feature;
  isHovered: boolean;
  isAnyHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0, active: false });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setTilt({ x: ny * -14, y: nx * 14, active: true });
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    onEnter();
    setTilt((t) => ({ ...t, active: true }));
  }, [onEnter]);

  const handleMouseLeave = useCallback(() => {
    onLeave();
    setTilt({ x: 0, y: 0, active: false });
  }, [onLeave]);

  const scale = isHovered ? 1.04 : isAnyHovered ? 0.97 : 1;
  const opacity = isAnyHovered && !isHovered ? 0.65 : 1;

  const cardTransform = tilt.active
    ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${scale})`
    : `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(${scale})`;

  return (
    <div
      style={{
        position: "relative",
        zIndex: isHovered ? 50 : 10,
        isolation: "isolate",
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: 300,
          height: 370,
          borderRadius: 40,
          background: feature.gradient,
          transform: cardTransform,
          transition: tilt.active
            ? "transform 0.08s linear, box-shadow 0.3s ease, opacity 0.3s ease"
            : "transform 0.55s cubic-bezier(0.25,0.8,0.25,1), box-shadow 0.55s ease, opacity 0.35s ease",
          boxShadow: isHovered
            ? `0 32px 60px -16px rgba(0,0,0,0.9), 0 0 40px -8px ${feature.glowColor}, inset 0 0 0 1px rgba(255,255,255,0.18)`
            : "0 20px 40px -20px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.08)",
          opacity,
          transformStyle: "preserve-3d",
          cursor: "pointer",
          position: "relative",
          willChange: "transform",
        }}
      >
        {/* ── Frosted glass layer ─────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            inset: 6,
            borderRadius: 35,
            borderTopRightRadius: "100%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            transform: "translate3d(0,0,20px)",
            borderLeft: "1px solid rgba(255,255,255,0.18)",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            borderRight: "1px solid rgba(255,255,255,0.04)",
            pointerEvents: "none",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* ── Concentric circles (top-right) ──────────────────────────────── */}
        {[170, 140, 110, 80].map((size, i) => (
          <span
            key={i}
            style={{
              display: "block",
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              top: 8 + i * 7,
              right: 8 + i * 7,
              boxShadow: "rgba(0,0,0,0.2) -8px 8px 16px 0px",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              transform: `translate3d(0,0,${20 + i * 20}px)`,
              transition: "transform 0.55s cubic-bezier(0.25,0.8,0.25,1)",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* ── Icon circle ─────────────────────────────────────────────────── */}
        <span
          style={{
            display: "grid",
            placeContent: "center",
            position: "absolute",
            width: 50,
            height: 50,
            borderRadius: "50%",
            top: 37,
            right: 37,
            background: "rgba(255,255,255,0.14)",
            border: "1px solid rgba(255,255,255,0.28)",
            boxShadow: "rgba(0,0,0,0.2) -8px 8px 16px 0px",
            transform: "translate3d(0,0,100px)",
            transition: "transform 0.55s cubic-bezier(0.25,0.8,0.25,1)",
            pointerEvents: "none",
          }}
        >
          {feature.icon}
        </span>

        {/* ── Text content — pushed to z=60px so it's always above 3D circles ── */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 85,
            padding: "0 28px",
            transform: "translate3d(0,0,60px)",
            zIndex: 20,
          }}
        >
          <h3
            style={{
              display: "block",
              color: "#fff",
              fontWeight: 800,
              fontSize: 17,
              letterSpacing: "-0.3px",
              textShadow: "0 2px 8px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.3)",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {feature.title}
          </h3>
          <span
            style={{
              display: "block",
              color: "rgba(255,255,255,0.8)",
              fontSize: 12,
              marginTop: 8,
              lineHeight: 1.6,
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            {feature.description}
          </span>
        </div>

        {/* ── Bottom row ───────────────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 16,
            right: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: "translate3d(0,0,30px)",
          }}
        >
          {/* Pulse dot */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 16px -4px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "white",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
          </div>

          {/* Explore button — highly visible */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.15)",
              padding: "9px 18px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.25)",
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              gap: 6,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              EXPLORE
            </span>
            <ChevronRight size={14} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Features3DCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  return (
    <>
      {/* Pulse keyframe injected once */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
      `}</style>

      <section className="relative py-12 px-4 bg-transparent z-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Our Services & Solutions
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              End-to-end technology solutions designed for startups and growing
              businesses — accessible, scalable, and built to deliver real impact.
            </p>
          </div>

          <div
            className="relative z-50 pointer-events-auto"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "3.5rem",
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                isHovered={hoveredIndex === index}
                isAnyHovered={hoveredIndex !== -1}
                onEnter={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(-1)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}