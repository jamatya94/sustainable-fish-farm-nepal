import { StoryCard } from "./StoryCard";

type StoryGridProps = {
  items: Array<{
    label: string;
    title: string;
    excerpt: string;
    date: string;
    href: string;
  }>;
};

export function StoryGrid({ items }: StoryGridProps) {
  return (
    <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-12">
      {items.map((item) => (
        <StoryCard key={`${item.title}-${item.date}`} {...item} />
      ))}
    </div>
  );
}
