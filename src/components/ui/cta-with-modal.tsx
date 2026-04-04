"use client";

import React, { useState } from "react";
import { ContactModal } from "@/sections/contact-modal";
import Link from "next/link";

export function CTAWithModal({
  primaryText,
  secondaryText,
  secondaryHref,
  className,
}: {
  primaryText: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className || ""}`}>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block px-10 py-4 bg-purple-600/80 hover:bg-purple-600 text-white font-semibold rounded-full transition-all duration-300 border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25 text-center cursor-pointer"
        >
          {primaryText}
        </button>
        {secondaryText && secondaryHref && (
          <Link
            href={secondaryHref}
            className="inline-block px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 border border-white/10 text-center"
          >
            {secondaryText}
          </Link>
        )}
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
