import { QuoteHighlight } from "./QuoteHighlight";
import { ImagePlaceholder } from "@/components/placeholders/ImagePlaceholder";

type TestimonialFeatureProps = {
  label: string;
  quote: string;
  attribution: string;
  context: string;
  imageAlt: string;
};

export function TestimonialFeature({
  label,
  quote,
  attribution,
  context,
  imageAlt,
}: TestimonialFeatureProps) {
  return (
    <section className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      <div className="relative min-h-[500px] overflow-hidden border border-line bg-brandGreen700">
        <ImagePlaceholder label={imageAlt} className="h-full min-h-[500px] border-0 bg-brandGreen700/50" />
        <div className="absolute inset-y-0 left-[14%] hidden w-px bg-white/14 lg:block" />
        <div className="absolute bottom-0 left-0 w-full border-t border-white/14 p-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/78">
          Partner portrait placeholder
        </div>
      </div>
      <div className="flex flex-col justify-center gap-7 lg:translate-y-6">
        <p className="article-label">{label}</p>
        <QuoteHighlight quote={quote} attribution={attribution} />
        <div className="editorial-rule" />
        <p className="card-body max-w-[30rem]">{context}</p>
      </div>
    </section>
  );
}
