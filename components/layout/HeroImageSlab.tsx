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
  cta: {
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
    <section className="-mt-[6.75rem] pb-16 pt-0 md:-mt-[7.5rem] md:pb-24 lg:-mt-[8.5rem]">
      <div className="relative min-h-[760px] overflow-hidden bg-brandGreen700 md:min-h-[840px] lg:min-h-[920px]">
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

        <div className="absolute inset-0 bg-gradient-to-t from-brandGreen900/78 via-brandGreen900/28 to-brandGreen900/12" />
        <div className="absolute inset-0 bg-gradient-to-r from-brandGreen900/42 via-transparent to-transparent" />

        <ContentContainer width="wide" padding="edge" className="relative z-10 h-full">
          <div className="grid min-h-[760px] items-end py-32 md:min-h-[840px] md:py-36 lg:min-h-[920px] lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:py-44">
            <div className="max-w-[48rem] pb-12 md:pb-14 lg:pb-16">
              <p className="mb-5 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-white/80 md:mb-7">
                {eyebrow}
              </p>
              <h1 className="max-w-[12ch] text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-[4.8rem] lg:text-[6rem] xl:text-[6.7rem]">
                {title}
              </h1>
              <div className="mt-7 h-px w-20 bg-white/35 md:mt-8" />
              <p className="mt-7 max-w-[38rem] text-[1.02rem] leading-8 text-white/86 md:text-[1.16rem] lg:mt-8 lg:text-[1.22rem]">
                {body}
              </p>
              <div className="mt-8 md:mt-10">
                <AngularButton href={cta.href}>{cta.label}</AngularButton>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-end lg:justify-end lg:pb-16">
              <div className="relative max-w-[31rem] bg-brandGreen900/92 p-8 text-white backdrop-blur-[2px] xl:max-w-[34rem] xl:p-10">
                <div className="absolute left-0 top-0 h-full w-px bg-white/14" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/66">
                  {slabLabel}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.035em] xl:text-[2.55rem]">
                  {slabTitle}
                </h2>
                <p className="mt-5 max-w-[26rem] text-[1rem] leading-7 text-white/82">{slabBody}</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 pb-10 lg:hidden">
            <div className="max-w-[34rem] bg-brandGreen900/92 p-6 text-white backdrop-blur-[2px]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/66">{slabLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em]">{slabTitle}</h2>
              <p className="mt-4 text-base leading-7 text-white/82">{slabBody}</p>
            </div>
          </div>
        </ContentContainer>
      </div>
    </section>
  );
}
