"use client";

import { motion } from "framer-motion";
import { CardStack } from "./CardStack";
import { cardStackItems } from "./data";

export function ServicesShowcase() {
  return (
    <section id="features" className="relative py-12 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Our Exclusive Features</h2>
        </motion.div>

        <CardStack
          items={cardStackItems}
          initialIndex={1}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          showDots
          cardWidth={480}
          cardHeight={300}
        />
      </div>
    </section>
  );
}
