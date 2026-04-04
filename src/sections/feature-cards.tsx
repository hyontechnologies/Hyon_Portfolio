"use client";

import React from "react";
import { Code2, Bot, Database, Landmark, MessageSquare, Factory } from "lucide-react";
import HighlightCard from "@/components/ui/highlight-card";

export default function Features3DCards() {
  return (
    <section className="relative -mt-4 sm:-mt-8 pt-12 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-transparent z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Services & Solutions
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            End-to-end technology solutions designed for startups and growing
            businesses — accessible, scalable, and built to deliver real impact.
          </p>
        </div>

        <div className="relative z-50 pointer-events-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          <HighlightCard 
            title="Core Software"
            description={[
              "Custom web apps, mobile platforms,",
              "and scalable APIs tailored to your",
              "business needs — built fast, built right."
            ]}
            icon={<Code2 className="w-8 h-8 text-white" />}
            href="/category/custom-digital-systems"
          />
          <HighlightCard 
            title="Automation & AI"
            description={[
              "Smart automation that eliminates",
              "repetitive tasks and AI-powered workflows",
              "that learn and adapt to your operations."
            ]}
            icon={<Bot className="w-8 h-8 text-white" />}
            href="/category/automation-ai-workflow"
          />
          <HighlightCard 
            title="Intelligence Systems"
            description={[
              "Turn raw data into actionable insights",
              "with real-time dashboards, predictive",
              "models, and visual reporting tools."
            ]}
            icon={<Database className="w-8 h-8 text-white" />}
            href="/category/data-analytics-intelligence"
          />
          <HighlightCard 
            title="Finance & Ops"
            description={[
              "Streamline invoicing, inventory, HR,",
              "and operations with integrated systems",
              "designed for growing businesses."
            ]}
            icon={<Landmark className="w-8 h-8 text-white" />}
            href="/category/finance-operations-management"
          />
          <HighlightCard 
            title="Productivity"
            description={[
              "Collaboration tools, internal portals,",
              "and communication platforms that keep",
              "your team aligned and efficient."
            ]}
            icon={<MessageSquare className="w-8 h-8 text-white" />}
            href="/category/productivity-communication"
          />
          <HighlightCard 
            title="Smart Platforms"
            description={[
              "Purpose-built solutions for restaurants,",
              "photography studios, retail, healthcare,",
              "and more — ready to deploy."
            ]}
            icon={<Factory className="w-8 h-8 text-white" />}
            href="/category/industry-specific-platforms"
          />
        </div>
      </div>
    </section>
  );
}