"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { QuoteHighlight } from "./QuoteHighlight";

type TestimonialFeatureProps = {
  label: string;
  context: string;
  slides: Array<{
    quote: string;
    attribution: string;
    image: {
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    };
  }>;
};

export function TestimonialFeature({
  label,
  context,
  slides,
}: TestimonialFeatureProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (slides.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="mx-auto max-w-[80rem] bg-brandGreen900 px-6 py-8 text-white md:px-8 md:py-10 lg:px-10 lg:py-12">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(250px,0.56fr)_minmax(0,1fr)] lg:gap-10">
        <div className="relative max-w-[32rem] self-start overflow-hidden border border-white/12 bg-brandGreen700 shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
          <div
            className="relative"
            style={{ aspectRatio: `${activeSlide.image.width} / ${activeSlide.image.height}` }}
          >
          {slides.map((slide, index) => (
            <Image
              key={slide.image.src}
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className={`object-cover transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
            <div className="absolute inset-0 bg-gradient-to-t from-brandGreen900/18 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-5 left-5 rounded-[2px] bg-brandGreen900/72 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/84 shadow-[0_10px_24px_rgba(0,0,0,0.18)] md:bottom-6 md:left-6">
            {activeSlide.image.caption}
          </div>
          {slides.length > 1 ? (
            <div className="absolute bottom-5 right-5 z-10 flex gap-2 md:bottom-6 md:right-6">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.image.src}-dot`}
                  type="button"
                  aria-label={`View testimonial slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full border transition ${
                    index === activeIndex
                      ? "border-white/80 bg-white"
                      : "border-white/65 bg-white/25"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-end justify-center py-2 lg:pt-4">
          <div className="w-full max-w-[44rem] space-y-5">
            <p className="article-label !text-[#F0D27A]">{label}</p>
            <QuoteHighlight
              quote={activeSlide.quote}
              attribution={activeSlide.attribution}
              theme="dark"
            />
            <div className="editorial-rule bg-white/35" />
            <p className="card-body max-w-[38rem] !text-[#F0D27A]">{context}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
