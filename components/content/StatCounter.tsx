"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  delay?: number;
};

const numberFormatter = new Intl.NumberFormat("en-US");

function getAdaptiveDuration(value: number) {
  if (value >= 100_000) return 2200;
  if (value >= 1_000) return 2000;
  return 1700;
}

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return prefersReducedMotion;
}

export function StatCounter({
  value,
  label,
  suffix = "",
  duration,
  delay = 0,
}: StatCounterProps) {
  const counterRef = useRef<HTMLElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = counterRef.current;

    if (!node || hasEnteredView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setHasEnteredView(true);
        observer.disconnect();
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasEnteredView]);

  useEffect(() => {
    if (!hasEnteredView) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const resolvedDuration = duration ?? getAdaptiveDuration(value);
    let animationFrame = 0;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime - delay;

      if (elapsed < 0) {
        animationFrame = window.requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / resolvedDuration, 1);
      const nextValue = Math.round(value * easeOutCubic(progress));

      setDisplayValue((currentValue) =>
        currentValue === nextValue ? currentValue : nextValue,
      );

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [delay, duration, hasEnteredView, prefersReducedMotion, value]);

  const finalAnnouncement = `${numberFormatter.format(value)}${suffix} ${label}`;
  const fillProgress = value === 0 ? 0 : Math.min(displayValue / value, 1);
  const isSuffixVisible = fillProgress >= 0.995;

  return (
    <article
      ref={counterRef}
      className={`relative flex h-full flex-col items-center overflow-hidden px-6 py-10 text-center transition-all duration-700 md:px-8 xl:px-10 xl:py-12 ${
        hasEnteredView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 origin-bottom bg-[linear-gradient(180deg,rgba(230,191,99,0.06)_0%,rgba(230,191,99,0.18)_42%,rgba(230,191,99,0.36)_72%,rgba(230,191,99,0.6)_100%)] transition-transform duration-150"
        style={{
          height: "100%",
          transform: `scaleY(${fillProgress})`,
        }}
      />

      <span className="sr-only">{finalAnnouncement}</span>

      <div
        aria-hidden="true"
        className="relative z-10 flex items-start gap-1 text-[2.8rem] font-semibold leading-none tracking-[-0.06em] text-brandGreen900 md:text-[3.45rem]"
      >
        <span className="tabular-nums">
          {numberFormatter.format(displayValue)}
        </span>
        {suffix ? (
          <span
            className={`pt-1 text-[2rem] font-semibold tracking-[-0.04em] text-accentOrange transition-all duration-300 md:text-[2.45rem] ${
              isSuffixVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            {suffix}
          </span>
        ) : null}
      </div>

      <p className="relative z-10 mt-5 max-w-[14rem] text-[1.08rem] font-semibold leading-[1.55] text-text md:text-[1.18rem]">
        {label}
      </p>
    </article>
  );
}
