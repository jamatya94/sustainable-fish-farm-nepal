import { InlineTextLink } from "./InlineTextLink";
import { ThumbnailStrip } from "./ThumbnailStrip";

type FeaturedStoryBlockProps = {
  label: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  linkLabel: string;
  thumbnails: Array<{
    src: string;
    label: string;
  }>;
};

export function FeaturedStoryBlock({
  label,
  title,
  excerpt,
  date,
  href,
  linkLabel,
  thumbnails,
}: FeaturedStoryBlockProps) {
  return (
    <section className="grid gap-10 overflow-hidden border border-line/70 bg-brandGreen900 px-6 py-10 text-white md:px-8 md:py-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16">
      <div className="max-w-[38rem] pb-2">
        <p className="article-label !text-[#F0D27A]">{label}</p>
        <p className="article-date mt-6 !text-white/60">{date}</p>
        <h2 className="article-title mt-3 !text-white">{title}</h2>
        <p className="article-excerpt mt-5 max-w-reading !text-white/80">{excerpt}</p>
        <div className="mt-8">
          <InlineTextLink
            href={href}
            className="border-[#F0D27A] text-[#F0D27A] hover:text-white"
          >
            {linkLabel}
          </InlineTextLink>
        </div>
      </div>
      <div className="border-t border-white/12 pt-8 lg:mt-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
        <ThumbnailStrip items={thumbnails} />
      </div>
    </section>
  );
}
