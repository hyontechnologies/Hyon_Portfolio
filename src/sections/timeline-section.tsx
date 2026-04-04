"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

const getStatusStyles = (status: TimelineItem["status"]): string => {
  switch (status) {
    case "completed":
      return "text-white bg-green-500/20 border-green-500/50";
    case "in-progress":
      return "text-black bg-white border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]";
    case "pending":
      return "text-white bg-black/40 border-white/30";
    default:
      return "text-white bg-black/40 border-white/50";
  }
};

function TimelineContent({ item, isExpanded, toggleItem, align, timelineData }: {
  item: TimelineItem;
  isExpanded: boolean;
  toggleItem: (id: number) => void;
  align: "left" | "right";
  timelineData: TimelineItem[];
}) {
  const alignClass = align === "right" ? "items-end text-right" : "items-start text-left";

  if (!isExpanded) {
    return (
      <div
        className={`flex flex-col ${alignClass} cursor-pointer group`}
        onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
      >
        <span className="text-purple-400 font-mono text-sm mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">{item.date}</span>
        <h3 className="text-2xl font-bold text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
        <p className="text-white/50 text-sm mt-2 line-clamp-2 max-w-sm">{item.content}</p>

        <div className="flex items-center gap-3 mt-4">
          <Badge className={`px-2 py-0 h-6 text-[10px] uppercase tracking-wider font-semibold border ${getStatusStyles(item.status)}`}>
            {item.status.replace('-', ' ')}
          </Badge>
          <span className="flex items-center text-xs text-white/40 font-mono">
            <Zap size={12} className="mr-1 text-yellow-500/70" /> {item.energy}%
          </span>
        </div>
      </div>
    );
  }

  return (
    <Card
      className={`bg-[#0a0118]/90 backdrop-blur-xl border-white/20 shadow-2xl shadow-purple-500/20 w-full max-w-[28rem] ${align === "left" ? "origin-left" : "origin-right"} animate-in zoom-in-95 duration-300 relative z-30`}
      onClick={(e) => e.stopPropagation()}
    >
      <CardHeader className="pb-2 text-left">
        <div className="flex justify-between items-center mb-2">
          <Badge className={`px-2 text-xs uppercase font-semibold border ${getStatusStyles(item.status)}`}>
            {item.status.replace('-', ' ')}
          </Badge>
          <span className="text-xs font-mono text-purple-300 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">{item.date}</span>
        </div>
        <CardTitle className="text-xl text-white">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/80 text-left">
        <p className="leading-relaxed">{item.content}</p>

        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="flex items-center text-white/70 tracking-widest uppercase">
              <Zap size={14} className="mr-2 text-yellow-500" />
              Energy
            </span>
            <span className="font-mono text-white tracking-widest">{item.energy}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transition-all duration-1000"
              style={{ width: `${item.energy}%` }}
            ></div>
          </div>
        </div>

        {item.relatedIds.length > 0 && (
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center mb-3">
              <Link size={12} className="text-white/50 mr-2" />
              <h4 className="text-xs uppercase tracking-widest font-semibold text-white/60">
                Connected
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.relatedIds.map((relatedId: number) => {
                const relatedItem = timelineData.find((i: any) => i.id === relatedId);
                return (
                  <Button
                    key={relatedId}
                    variant="outline"
                    size="sm"
                    className="flex justify-between items-center h-8 px-3 text-xs border-white/20 bg-transparent hover:bg-white/10 text-white/90 hover:text-white transition-all group rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(relatedId);
                    }}
                  >
                    <span>{relatedItem?.title}</span>
                    <ArrowRight size={12} className="ml-2 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if click is directly on the container background
    if (e.target === containerRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
    }
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  return (
    <div
      className="w-full min-h-[500px] bg-transparent py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
      onClick={handleContainerClick}
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto relative pointer-events-none" style={{ minHeight: '100%' }}>
        {/* Central Vertical Line for Desktop */}
        <div className="absolute left-10 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-purple-500 via-blue-500/80 to-teal-500/30 md:-translate-x-1/2 hidden md:block opacity-50 shadow-[0_0_20px_rgba(168,85,247,0.3)]"></div>

        {/* Left Vertical Line for Mobile */}
        <div className="absolute left-[38px] top-4 bottom-4 w-px bg-gradient-to-b from-purple-500 via-blue-500/80 to-teal-500/30 md:hidden opacity-50 shadow-[0_0_20px_rgba(168,85,247,0.3)]"></div>

        <div className="flex flex-col gap-24 pointer-events-auto relative mt-10">
          {timelineData.map((item, index) => {
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className="relative flex flex-col md:flex-row justify-between items-center w-full group/timeline">

                {/* Node on central line */}
                <div
                  className="absolute left-[38px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 cursor-pointer touch-manipulation"
                  onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
                >
                  {/* Glow effect based on energy */}
                  <div
                    className={`absolute rounded-full -inset-4 transition-all duration-700 ${isPulsing ? "animate-pulse" : "opacity-0 group-hover/timeline:opacity-100"}`}
                    style={{
                      background: `radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)`
                    }}
                  ></div>

                  <div
                    className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 transform
                        ${isExpanded
                        ? "bg-white text-black border-white scale-125 shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                        : isRelated
                          ? "bg-purple-900/50 text-white border-purple-400 animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                          : "bg-[#0a0118] text-white border-white/30 group-hover/timeline:border-white group-hover/timeline:shadow-[0_0_25px_rgba(255,255,255,0.3)] group-hover/timeline:scale-110"
                      }`}
                  >
                    <Icon size={24} className={isExpanded ? "scale-110 text-black" : "scale-100 opacity-80 group-hover/timeline:opacity-100 text-white"} />
                  </div>
                </div>

                {/* Desktop Left Side */}
                <div className={`hidden md:flex w-5/12 pr-12 lg:pr-24 justify-end ${isEven ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'}`}>
                  {isEven && <TimelineContent item={item} isExpanded={isExpanded} toggleItem={toggleItem} align="right" timelineData={timelineData} />}
                </div>

                {/* Desktop Right Side */}
                <div className={`hidden md:flex w-5/12 pl-12 lg:pl-24 justify-start ${!isEven ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'}`}>
                  {!isEven && <TimelineContent item={item} isExpanded={isExpanded} toggleItem={toggleItem} align="left" timelineData={timelineData} />}
                </div>

                {/* Mobile Single Side (always visible on mobile) */}
                <div className={`md:hidden w-full pl-[5.5rem] pr-4`}>
                  <TimelineContent item={item} isExpanded={isExpanded} toggleItem={toggleItem} align="left" timelineData={timelineData} />
                </div>
              </div>
            );
          })}

          {/* Special Terminal node for "current progress" */}
          <div className="relative flex flex-col md:flex-row justify-center items-center w-full mt-10">
            <div className="absolute left-[38px] md:left-1/2 -translate-x-[0.5px] md:-translate-x-1/2 h-24 w-[2px] bg-gradient-to-t from-transparent via-teal-500/30 to-teal-500/10 top-[-6rem]"></div>

            <div className="w-3 h-3 rounded-full bg-teal-400 animate-ping absolute left-[38px] md:left-1/2 -translate-x-1/2 shadow-[0_0_25px_#2dd4bf]"></div>
            <div className="w-2 h-2 rounded-full bg-white absolute left-[38px] md:left-1/2 -translate-x-1/2 shadow-[0_0_10px_#fff]"></div>

            <div className="md:hidden w-full pl-[5.5rem] pr-4 flex items-center">
              <span className="text-teal-400 font-mono text-sm tracking-widest uppercase relative -top-3 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">Current Progress...</span>
            </div>
            <div className="hidden md:flex absolute left-1/2 translate-x-12 items-center">
              <span className="text-teal-400 font-mono text-sm tracking-widest uppercase drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">Current Progress...</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
