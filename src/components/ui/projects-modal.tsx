"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  url: string;
  gradient: string;
}

const projects: Project[] = [
  {
    name: "Sri Lakshmi Bhavan Restaurant",
    description:
      "A complete digital presence for a beloved restaurant — featuring online menus, reservation systems, and a brand identity that captures their authentic culinary heritage.",
    url: "https://google.com",
    gradient: "linear-gradient(135deg, #021A54 0%, #134E8E 100%)",
  },
  {
    name: "GS Photography",
    description:
      "A stunning portfolio and booking platform for a professional photography studio — showcasing their work with immersive galleries and streamlined client management.",
    url: "https://gsphoto.site",
    gradient: "linear-gradient(135deg, #982598 0%, #111FA2 100%)",
  },
];

export const ProjectsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#0d041c] border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full bg-white/5 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Our Projects
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Real solutions we&apos;ve built for real businesses.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                    style={{ background: project.gradient }}
                  >
                    {/* Frosted overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                    <div className="relative z-10 p-6 flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-white mb-1.5 truncate">
                          {project.name}
                        </h4>
                        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                        <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
