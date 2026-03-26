import { InlineTextLink } from "./InlineTextLink";
import { ThumbnailStrip } from "./ThumbnailStrip";

type FeaturedStoryBlockProps = {
  label: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  thumbnails: string[];
};

export function FeaturedStoryBlock({
  label,
  title,
  excerpt,
  date,
  href,
  thumbnails,
}: FeaturedStoryBlockProps) {
  return (
    <section className="grid gap-10 border-y border-line py-10 md:py-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
      <div className="max-w-[38rem] pb-2">
        <p className="article-label">{label}</p>
        <p className="article-date mt-6">{date}</p>
        <h2 className="article-title mt-3">{title}</h2>
        <p className="article-excerpt mt-5 max-w-reading">{excerpt}</p>
        <div className="mt-8">
          <InlineTextLink href={href}>Read more</InlineTextLink>
        </div>
      </div>
      <div className="border-l border-line pl-0 lg:mt-4 lg:pl-12 xl:pl-16">
        <ThumbnailStrip items={thumbnails} />
      </div>
    </section>
  );
}
