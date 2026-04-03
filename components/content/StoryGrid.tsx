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
    <div className="grid overflow-hidden border border-line/80 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <StoryCard key={`${item.title}-${item.date}`} index={index} {...item} />
      ))}
    </div>
  );
}
