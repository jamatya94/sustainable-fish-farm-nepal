import { AngularButton } from "./AngularButton";
import { CurrencySelector } from "./CurrencySelector";

type DonationSplitBannerProps = {
  title: string;
  body: string;
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
  primaryCta,
  secondaryCta,
}: DonationSplitBannerProps) {
  return (
    <section className="grid overflow-hidden border border-line lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative bg-brandGreen900 px-6 py-10 text-white md:px-10 md:py-12">
        <div className="absolute inset-y-0 right-0 hidden w-px bg-white/12 lg:block" />
        <p className="article-label !text-white/74">Support the mission</p>
        <div className="editorial-rule mt-6 bg-white/30" />
        <h2 className="mt-6 max-w-[14ch] text-3xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-[2.8rem]">
          {title}
        </h2>
        <p className="mt-5 max-w-[35rem] text-base leading-7 text-white/82">{body}</p>
      </div>
      <div className="flex flex-col justify-between gap-8 bg-[#F7F6F1] px-6 py-10 md:px-10 md:py-12">
        <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
          <CurrencySelector />
          <p className="text-right text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-textMuted">
            Campaign giving panel
          </p>
        </div>
        <div className="space-y-4">
          <p className="max-w-[20rem] text-[0.92rem] leading-6 text-textMuted">
            A concise stewardship note or campaign promise belongs here.
          </p>
          <div className="flex flex-wrap gap-4">
            <AngularButton href={primaryCta.href} variant="donate" className="min-h-[3.5rem] px-7 text-[0.78rem] tracking-[0.19em]">
              {primaryCta.label}
            </AngularButton>
            <AngularButton href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </AngularButton>
          </div>
        </div>
        <div className="border-t border-line pt-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brandGreen700">
          Placeholder stewardship detail
        </div>
      </div>
    </section>
  );
}
