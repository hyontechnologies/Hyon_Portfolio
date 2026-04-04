"use client";

import { ServicesShowcase } from "./ServicesShowcase";
import { ServicesGrid } from "./ServicesGrid";

export function ServicesSection() {
  return (
    <>
      <ServicesShowcase />
      <ServicesGrid />
    </>
  );
}

export { ServicesShowcase, ServicesGrid };
