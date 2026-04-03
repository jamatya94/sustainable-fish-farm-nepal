import Image from "next/image";
import { AngularButton } from "./AngularButton";
import { CurrencySelector } from "./CurrencySelector";

type DonationSplitBannerProps = {
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
  };
  stewardshipNote: string;
  stewardshipDetail: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export function DonationSplitBanner({
  title,
  body,
  image,
  stewardshipNote,
  stewardshipDetail,
  primaryCta,
  secondaryCta,
}: DonationSplitBannerProps) {
  return (
    <section className="grid overflow-hidden border border-line lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative overflow-hidden bg-brandGreen900 px-6 py-10 text-white md:px-10 md:py-12">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 780px, 100vw"
          className="object-cover [object-position:62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        <div className="absolute inset-y-0 right-0 hidden w-px bg-white/12 lg:block" />
        <div className="relative z-10">
          <div className="max-w-[35rem] pt-1 lg:max-w-[33rem] xl:max-w-[35rem]">
            <p className="article-label !text-brandGreen900">
              <span className="box-decoration-clone bg-[rgba(247,246,241,0.92)] px-3 py-1">
                Support the mission
              </span>
            </p>
            <div className="editorial-rule mt-6 bg-brandGreen900/24" />
            <h2 className="mt-6 max-w-[13ch] text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-brandGreen900 md:text-[2.8rem]">
              <span className="box-decoration-clone bg-[rgba(247,246,241,0.9)] px-3 py-1 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                {title}
              </span>
            </h2>
            <p className="mt-5 max-w-[31rem] text-base leading-7 text-brandGreen900">
              <span className="box-decoration-clone bg-[rgba(247,246,241,0.88)] px-2 py-1 text-brandGreen900 shadow-[0_8px_16px_rgba(0,0,0,0.06)]">
                {body}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 bg-brandGreen900 px-6 py-10 text-white md:px-10 md:py-12">
        <div className="flex items-start justify-between gap-6 border-b border-white/12 pb-6">
          <CurrencySelector dark />
          <p className="text-right text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/66">
            Campaign giving
          </p>
        </div>
        <div className="space-y-5">
          <p className="max-w-[20rem] text-[0.92rem] leading-6 text-white/78">
            {stewardshipNote}
          </p>
          <div className="flex flex-wrap gap-4">
            <AngularButton
              href={primaryCta.href}
              variant="donate"
              className="min-h-[3.5rem] px-7 text-[0.78rem] tracking-[0.19em]"
            >
              {primaryCta.label}
            </AngularButton>
            <AngularButton
              href={secondaryCta.href}
              variant="secondary"
              className="border-white/58 text-white hover:border-[#F0D27A] hover:bg-[#F0D27A] hover:text-brandGreen900"
            >
              {secondaryCta.label}
            </AngularButton>
          </div>
        </div>
        <div className="border-t border-white/12 pt-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#F0D27A]">
          {stewardshipDetail}
        </div>
      </div>
    </section>
  );
}
