"use client";

import Image from "next/image";
import { useState } from "react";

interface CategoryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function CategoryImage({ src, alt, width = 120, height = 120, className = "" }: CategoryImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={`
        rounded-2xl
        object-cover
        shadow-lg
        border border-white/10
        bg-white/5
        p-2
        ${className}
      `}
      onError={() => {
        setImgSrc("/fallback.png");
      }}
    />
  );
}
