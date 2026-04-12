"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0118] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10"
      >
        <h1 className="text-[12rem] font-bold text-white/10 leading-none select-none">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 -mt-16">
          Lost in Space?
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8 text-lg">
          The page you're looking for has drifted beyond our reach. Let's get you back to safety.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-white text-[#0a0118] font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          Back to Home
        </Link>
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </div>
  );
}
