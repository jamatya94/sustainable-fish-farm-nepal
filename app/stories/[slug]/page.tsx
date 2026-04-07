import { notFound } from "next/navigation";
import { StoryArticlePage } from "@/components/content/StoryArticlePage";
import { storyArticleSlugs, storyArticles, type StorySlug } from "@/data/storyArticles";

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return storyArticleSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: StoryPageProps) {
  const { slug } = await params;

  if (!storyArticleSlugs.includes(slug as StorySlug)) {
    return {};
  }

  const article = storyArticles[slug as StorySlug];

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;

  if (!storyArticleSlugs.includes(slug as StorySlug)) {
    notFound();
  }

  const article = storyArticles[slug as StorySlug];

  return <StoryArticlePage article={article} />;
}
