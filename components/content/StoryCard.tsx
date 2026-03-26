import Link from "next/link";

type StoryCardProps = {
  label: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export function StoryCard({ label, title, excerpt, date, href }: StoryCardProps) {
  return (
    <article className="flex h-full flex-col border-t border-line pt-6 odd:pt-8">
      <p className="article-label">{label}</p>
      <p className="article-date mt-4">{date}</p>
      <h3 className="mt-3 text-[1.45rem] font-semibold leading-snug tracking-[-0.025em] text-text">{title}</h3>
      <p className="card-body mt-4 flex-1 pr-4">{excerpt}</p>
      <Link href={href} className="button-text mt-8 inline-flex text-brandGreen900">
        View story
      </Link>
    </article>
  );
}
