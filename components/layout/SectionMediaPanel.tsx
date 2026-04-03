"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SectionMediaPanelProps = {
  images: Array<{
    src: string;
    alt: string;
    position?: string;
  }>;
  mode?: "cover" | "contain";
  dotsVariant?: "light" | "dark";
};

export function SectionMediaPanel({
  images,
  mode = "cover",
  dotsVariant = "light",
}: SectionMediaPanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [hasMultipleImages, images.length]);

  return (
    <>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index === activeIndex ? undefined : true}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className={mode === "contain" ? "object-contain" : "object-cover"}
            style={{ objectPosition: image.position }}
            priority={index === 0}
          />
        </div>
      ))}
      {hasMultipleImages ? (
        <div className="absolute bottom-5 left-5 z-10 flex gap-2 md:bottom-6 md:left-6">
          {images.map((image, index) => (
            <button
              key={`${image.src}-dot`}
              type="button"
              aria-label={`View image ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                dotsVariant === "dark"
                  ? index === activeIndex
                    ? "border border-brandGreen900 bg-brandGreen900"
                    : "border border-brandGreen900/35 bg-brandGreen900/15"
                  : index === activeIndex
                    ? "border border-white/55 bg-white"
                    : "border border-white/55 bg-white/28"
              }`}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
