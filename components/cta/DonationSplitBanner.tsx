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
      <div className="relative min-h-[420px] overflow-hidden bg-brandGreen900">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 780px, 100vw"
          className="object-cover [object-position:62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent" />
        <div className="absolute inset-y-0 right-0 hidden w-px bg-white/12 lg:block" />
      </div>
      <div className="flex flex-col justify-between gap-8 bg-brandGreen900 px-6 py-10 text-white md:px-10 md:py-12">
        <div className="flex items-start justify-between gap-6 border-b border-white/12 pb-6">
          <CurrencySelector dark />
          <p className="text-right text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/66">
            Campaign giving
          </p>
        </div>
        <div className="space-y-7">
          <div>
            <p className="article-label !text-[#F0D27A]">Support the mission</p>
            <h2 className="mt-4 max-w-[14ch] text-[2rem] font-semibold leading-[1.06] tracking-[-0.035em] text-white md:text-[2.45rem]">
              {title}
            </h2>
          </div>
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
