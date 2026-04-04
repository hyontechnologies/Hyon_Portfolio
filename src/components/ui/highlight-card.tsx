"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ComponentProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  href?: string;
}

const HighlightCard: FC<ComponentProps> = ({ title, description, icon, href }) => {
  const CardWrapper: any = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <CardWrapper {...wrapperProps} className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 block outline-none touch-manipulation h-full">
      <Card className="text-white rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#120428] via-[#0a0118] to-[#120428] shadow-[0_0_15px_rgba(255,255,255,0.05)] relative backdrop-blur-xl overflow-hidden hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-500 w-full max-w-[350px] h-full flex flex-col">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
          {/* Hover-only shimmer sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        <div className="p-6 sm:p-8 relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="p-5 sm:p-6 rounded-full backdrop-blur-lg border border-purple-500/30 bg-gradient-to-br from-purple-900/80 to-purple-950/60 shadow-[0_0_15px_rgba(255,255,255,0.1)] transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
              <div className="transform group-hover:rotate-[360deg] transition-transform duration-700">
                {icon}
              </div>
            </div>
          </div>

          <h3 className="mb-4 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>

          <div className="space-y-1 max-w-sm">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500"></div>
        </div>

        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </CardWrapper>
  );
};

export default HighlightCard;
