"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Type Definitions for props ---
export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  avatarSrc?: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: string;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
  onPrimaryActionClick?: () => void;
  onSecondaryActionClick?: () => void;
  className?: string;
}

// --- Internal Sub-Components ---

const StatCard = ({ value, label }: Stat) => (
  <Card className="bg-black/60 border-purple-500/20 text-center rounded-xl backdrop-blur-sm">
    <CardContent className="p-4">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </CardContent>
  </Card>
);

// A sticky testimonial card — no avatar image circle
const StickyTestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      className="relative lg:sticky w-full lg:top-[var(--stack-top)]"
      style={{ "--stack-top": `calc(120px + ${index * 24}px)` } as any}
    >
      <figure className={cn(
        "p-5 rounded-2xl flex flex-col h-auto w-full transition-all duration-300 m-0",
        "bg-black/80 backdrop-blur-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
      )}>
        {/* Author info — no avatar circle */}
        <figcaption className="flex items-center gap-4">
          <div className="flex-grow">
            <cite className="font-semibold text-base sm:text-lg text-white not-italic block break-words whitespace-normal leading-tight">{testimonial.name}</cite>
            <span className="text-sm text-gray-400">{testimonial.title}</span>
          </div>
        </figcaption>

        {/* Rating */}
        <div className="flex items-center gap-2 my-3">
          <span className="font-bold text-base text-white">{testimonial.rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(testimonial.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-600"
                )}
              />
            ))}
          </div>
        </div>

        {/* Quote */}
        {testimonial.quote && (
          <blockquote className="text-sm sm:text-base text-gray-300 leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
        )}
      </figure>
    </motion.div>
  );
};

// --- Main Exported Component ---

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryActionClick,
  onSecondaryActionClick,
  className,
}: ClientsSectionProps) => {

  return (
    <section className={cn("w-full bg-transparent text-white py-12 sm:py-16", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Sticky Content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-purple-200 font-medium tracking-wide shadow-sm">{tagLabel}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500 drop-shadow-sm">{title}</h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">{description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-lg">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Button 
              size="lg" 
              onClick={onSecondaryActionClick}
              className="rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all text-base px-8"
            >
              {secondaryActionLabel}
            </Button>
          </div>
        </div>

        {/* Right Column: Container for the sticky card stack */}
        <div className="clients-stack-container relative flex flex-col gap-6 w-full" style={{ height: "auto" }}>
          {testimonials.map((testimonial, index) => (
            <StickyTestimonialCard
              key={testimonial.name}
              index={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
