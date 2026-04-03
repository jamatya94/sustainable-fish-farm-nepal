"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type LogoPlaceholderProps = {
  className?: string;
  logo?: {
    src: string;
    alt: string;
  };
  variant?: "header" | "footer";
};

export function LogoPlaceholder({
  className = "",
  logo,
  variant = "header",
}: LogoPlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(logo?.src) && !hasError;
  const resolvedLogo = showImage ? logo : undefined;

  if (resolvedLogo) {
    if (variant === "footer") {
      return (
        <Link
          href="/"
          className={`inline-flex text-white ${className}`.trim()}
          aria-label="Homepage"
        >
          <span className="relative block h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]">
            <Image
              src={resolvedLogo.src}
              alt={resolvedLogo.alt}
              fill
              sizes="72px"
              className="object-contain object-left-top"
              onError={() => setHasError(true)}
            />
          </span>
        </Link>
      );
    }

    return (
        <Link
          href="/"
          className={`inline-flex items-center text-brandGreen900 ${className}`.trim()}
          aria-label="Homepage"
        >
          <span className="block">
            <Image
              src={resolvedLogo.src}
              alt={resolvedLogo.alt}
            width={2133}
            height={1200}
            priority
            sizes="(min-width: 1440px) 420px, (min-width: 1280px) 390px, (min-width: 1024px) 350px, (min-width: 768px) 320px, 230px"
            className="h-auto w-[230px] sm:w-[255px] md:w-[320px] lg:w-[350px] xl:w-[390px] 2xl:w-[420px]"
            onError={() => setHasError(true)}
          />
        </span>
        </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link
        href="/"
        className={`inline-flex text-white ${className}`.trim()}
        aria-label="Homepage"
      >
        <div className="flex h-16 w-16 items-center justify-center border border-white/35 bg-transparent text-[0.68rem] font-bold uppercase tracking-[0.18em] md:h-[4.5rem] md:w-[4.5rem]">
          S F
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-4 text-brandGreen900 ${className}`.trim()}
      aria-label="Homepage"
    >
      <div className="flex h-12 w-12 items-center justify-center border border-brandGreen900 bg-surface text-[0.68rem] font-bold uppercase tracking-[0.18em] shadow-[inset_0_0_0_1px_rgba(19,90,75,0.08)]">
        S F
      </div>
      <div className="border-l border-line pl-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brandGreen700">
          Sustainable Fish Farming
        </p>
        <p className="mt-1 text-[1.06rem] font-semibold leading-tight tracking-[-0.02em]">
          Initiative
        </p>
      </div>
    </Link>
  );
}
