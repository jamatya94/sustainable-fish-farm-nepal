import Image from "next/image";
import { AngularButton } from "@/components/cta/AngularButton";
import { ContentContainer } from "./ContentContainer";

type HeroImageSlabProps = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  slabLabel: string;
  slabTitle: string;
  slabBody: string;
  cta?: {
    label: string;
    href: string;
  };
};

export function HeroImageSlab({
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  slabLabel,
  slabTitle,
  slabBody,
  cta,
}: HeroImageSlabProps) {
  const isVideo = imageSrc.endsWith(".mp4");

  return (
    <section className="-mt-[5.25rem] pb-0 pt-0 md:-mt-[5.75rem] lg:-mt-[6.25rem]">
      <div className="relative min-h-[680px] overflow-hidden bg-brandGreen700 md:min-h-[720px] lg:min-h-[760px]">
        {isVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label={imageAlt}
          >
            <source src={imageSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-brandGreen900/82 via-brandGreen900/34 to-brandGreen900/12" />
        <div className="absolute inset-0 bg-gradient-to-r from-brandGreen900/70 via-brandGreen900/24 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brandGreen900/20 via-transparent to-transparent" />

        <ContentContainer width="wide" padding="edge" className="relative z-10 h-full">
          <div className="grid min-h-[680px] items-end py-24 md:min-h-[720px] md:py-28 lg:min-h-[760px] lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-end lg:pb-14 lg:pt-32">
            <div className="max-w-[42rem] pb-8 md:pb-10 lg:pb-0">
              <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#F4E8BE] [text-shadow:0_2px_18px_rgba(0,0,0,0.28)] md:mb-6">
                {eyebrow}
              </p>
              <h1 className="max-w-[18ch] whitespace-pre-line text-[2.35rem] font-semibold leading-[0.99] tracking-[-0.042em] text-white [text-shadow:0_4px_28px_rgba(0,0,0,0.32)] [text-wrap:balance] md:text-[3rem] lg:text-[3.35rem] xl:text-[3.75rem]">
                {title}
              </h1>
              <div className="mt-5 h-px w-16 bg-white/35 md:mt-6" />
              <p className="mt-5 max-w-[28rem] text-[0.95rem] leading-7 text-[#F8F6EF] [text-shadow:0_2px_18px_rgba(0,0,0,0.24)] md:text-[1rem] md:leading-7 lg:mt-6 lg:text-[1.04rem]">
                {body}
              </p>
              {cta ? (
                <div className="mt-7 md:mt-8">
                  <AngularButton href={cta.href}>{cta.label}</AngularButton>
                </div>
              ) : null}
            </div>
          </div>

          <div className="hidden lg:absolute lg:bottom-14 lg:right-6 lg:block xl:right-8 2xl:right-10">
            <div className="relative max-w-[24rem] bg-brandGreen900/94 p-7 text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-[2px] xl:max-w-[26rem] xl:p-8">
              <div className="absolute left-0 top-0 h-full w-px bg-white/14" />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/72">
                {slabLabel}
              </p>
              <h2 className="mt-3 text-[1.45rem] font-semibold leading-[1.1] tracking-[-0.026em] xl:text-[1.72rem]">
                {slabTitle}
              </h2>
              <p className="mt-3 max-w-[21rem] text-[0.9rem] leading-6 text-white/84">{slabBody}</p>
            </div>
          </div>

          <div className="relative z-10 pb-10 lg:hidden">
            <div className="max-w-[34rem] bg-brandGreen900/92 p-6 text-white backdrop-blur-[2px]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/66">{slabLabel}</p>
              <h2 className="mt-3 text-[1.32rem] font-semibold leading-[1.14] tracking-[-0.025em]">{slabTitle}</h2>
              <p className="mt-3 text-[0.95rem] leading-7 text-white/82">{slabBody}</p>
            </div>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
}
