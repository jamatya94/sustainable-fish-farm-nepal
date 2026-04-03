import Link from "next/link";

type StoryCardProps = {
  index: number;
  label: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export function StoryCard({ index, label, title, excerpt, date, href }: StoryCardProps) {
  return (
    <article
      className="flex h-full flex-col border-b border-r border-line/80 bg-[#F4F1E8] p-6 text-text md:[&:nth-child(2n)]:border-r-0 xl:border-b-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(4n)]:border-r-0"
    >
      <p className="article-label !text-[#A47A1E]">{label}</p>
      <p className="article-date mt-4 !text-textMuted">{date}</p>
      <h3 className="mt-3 text-[1.45rem] font-semibold leading-snug tracking-[-0.025em] text-text">{title}</h3>
      <p className="mt-4 flex-1 pr-2 text-base leading-7 text-textMuted">{excerpt}</p>
      <Link href={href} className="button-text mt-8 inline-flex text-[#A47A1E] transition hover:text-brandGreen900">
        Read more
      </Link>
    </article>
  );
}
