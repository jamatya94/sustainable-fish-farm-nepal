import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import type { StoryArticle, StoryBlock } from "@/data/storyArticles";

type StoryArticlePageProps = {
  article: StoryArticle;
};

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function getParagraphVariant(
  block: Extract<StoryBlock, { type: "paragraph" }>,
  isFirstTextBlock: boolean,
) {
  const plainText = stripHtml(block.html);
  const hasLineBreak = /<br\s*\/?>/i.test(block.html);
  const startsWithQuote = /^[“"']/u.test(plainText);
  const hasEmphasis = /<(strong|em)>/i.test(block.html);

  if (hasLineBreak || startsWithQuote) {
    return "quote";
  }

  if (isFirstTextBlock && (hasEmphasis || plainText.length <= 220)) {
    return "lead";
  }

  return "body";
}

function StoryImageBlock({
  block,
  hero = false,
}: {
  block: Extract<StoryBlock, { type: "image" }>;
  hero?: boolean;
}) {
  return (
    <div
      className={
        hero
          ? "mx-auto w-full max-w-[72rem] overflow-hidden border border-line/70 bg-surface p-2 shadow-quiet md:p-3"
          : "mx-auto w-full max-w-[52rem] overflow-hidden border border-line/70 bg-surface p-2 shadow-quiet md:p-3"
      }
    >
      <div
        className="relative w-full overflow-hidden bg-[#DED3BC]"
        style={{ aspectRatio: `${block.width} / ${block.height}` }}
      >
        <Image
          src={block.src}
          alt={block.alt}
          fill
          sizes={hero ? "(min-width: 1280px) 1200px, 100vw" : "(min-width: 1024px) 860px, 100vw"}
          className="object-cover"
        />
      </div>
    </div>
  );
}

function StoryTextBlock({ block }: { block: Exclude<StoryBlock, { type: "image" }> }) {
  if (block.type === "heading") {
    return (
      <div className="mx-auto w-full max-w-[43rem]">
        {block.level === 2 ? (
          <h2
            className="pt-8 text-[2rem] font-semibold leading-[1.04] tracking-[-0.03em] text-text md:pt-10 md:text-[2.45rem]"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        ) : (
          <h3
            className="pt-6 text-[1.35rem] font-semibold leading-snug tracking-[-0.025em] text-brandGreen900 md:pt-7 md:text-[1.6rem]"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        )}
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <div className="mx-auto w-full max-w-[43rem] border border-line/70 bg-surface px-6 py-6 md:px-7">
        <ul className="space-y-3 pl-5 text-[1.04rem] leading-8 text-text marker:text-brandGreen700">
          {block.items.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    );
  }

  const variant = getParagraphVariant(block, false);

  if (variant === "quote") {
    return (
      <div className="mx-auto w-full max-w-[46rem] border-l-2 border-[#D7AE56] pl-5 md:pl-7">
        <p
          className="text-[1.28rem] leading-[1.55] tracking-[-0.02em] text-brandGreen900 md:text-[1.55rem] [&_em]:italic [&_strong]:font-semibold [&_strong]:text-brandGreen900"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[43rem]">
      <p
        className="text-[1.06rem] leading-[1.9] text-text md:text-[1.1rem] [&_em]:italic [&_strong]:font-semibold"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    </div>
  );
}

export function StoryArticlePage({ article }: StoryArticlePageProps) {
  const heroBlock = article.blocks.find((block) => block.type === "image");
  const bodyBlocks = heroBlock
    ? article.blocks.filter((block) => block !== heroBlock)
    : article.blocks;
  const firstParagraphIndex = bodyBlocks.findIndex((block) => block.type === "paragraph");

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-brandGreen900/14 bg-[linear-gradient(180deg,#1b6958_0%,#135a4b_100%)] pb-16 pt-8 text-white md:pb-20 md:pt-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="relative mx-auto w-full max-w-wide px-gutter-mobile md:px-gutter-tablet lg:px-6 xl:px-8 2xl:px-10">
            <article className="mx-auto w-full max-w-[72rem]">
              <div className="max-w-[70rem]">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-5">
                  <p className="article-label !text-[#F0D27A]">{article.category}</p>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/45" aria-hidden="true" />
                  <p className="article-date !text-[#D7E5DE]">{article.date}</p>
                </div>
                <div className="mt-5 h-px w-full bg-white/24" />
                <h1 className="mt-7 max-w-[16ch] text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.05em] text-white md:max-w-[15ch] md:text-[4.25rem] lg:max-w-[14ch] lg:text-[5.15rem]">
                  {article.title}
                </h1>
                <p className="mt-7 max-w-[52rem] text-[1.02rem] leading-8 text-white/88 md:text-[1.16rem] md:leading-[2.05rem]">
                  {article.description}
                </p>
              </div>
            </article>
          </div>
        </section>

        {heroBlock ? (
          <section className="pb-4">
            <ContentContainer width="wide" padding="edge">
              <article className="mx-auto -mt-8 w-full max-w-[72rem] md:-mt-12">
                <StoryImageBlock block={heroBlock} hero />
              </article>
            </ContentContainer>
          </section>
        ) : null}

        <section className="pb-14 pt-10 md:pb-16 md:pt-12">
          <ContentContainer width="wide" padding="edge">
            <article className="mx-auto w-full max-w-[72rem] space-y-6 md:space-y-7">
              {bodyBlocks.map((block, index) => {
                if (block.type === "image") {
                  return <StoryImageBlock key={`${block.src}-${index}`} block={block} />;
                }

                if (block.type === "paragraph") {
                  const variant = getParagraphVariant(block, index === firstParagraphIndex);

                  if (variant === "lead") {
                    return (
                      <div key={`${block.type}-${index}`} className="mx-auto w-full max-w-[46rem]">
                        <p
                          className="text-[1.22rem] leading-[1.72] tracking-[-0.018em] text-brandGreen900 md:text-[1.4rem] [&_em]:italic [&_strong]:font-semibold"
                          dangerouslySetInnerHTML={{ __html: block.html }}
                        />
                      </div>
                    );
                  }

                  if (variant === "quote") {
                    return (
                      <div
                        key={`${block.type}-${index}`}
                        className="mx-auto w-full max-w-[46rem] border-l-2 border-[#D7AE56] pl-5 md:pl-7"
                      >
                        <p
                          className="text-[1.28rem] leading-[1.55] tracking-[-0.02em] text-brandGreen900 md:text-[1.55rem] [&_em]:italic [&_strong]:font-semibold [&_strong]:text-brandGreen900"
                          dangerouslySetInnerHTML={{ __html: block.html }}
                        />
                      </div>
                    );
                  }
                }

                return <StoryTextBlock key={`${block.type}-${index}`} block={block} />;
              })}
            </article>
          </ContentContainer>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
