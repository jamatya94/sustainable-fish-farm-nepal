import { SiteFooter } from "@/components/SiteFooter";
import { DonationSplitBanner } from "@/components/cta/DonationSplitBanner";
import { NewsletterSignupBar } from "@/components/cta/NewsletterSignupBar";
import { ViewMoreButton } from "@/components/cta/ViewMoreButton";
import { FeaturedStoryBlock } from "@/components/content/FeaturedStoryBlock";
import { ProofCardRow } from "@/components/content/ProofCardRow";
import { SectionIntro } from "@/components/content/SectionIntro";
import { StoryGrid } from "@/components/content/StoryGrid";
import { TestimonialFeature } from "@/components/content/TestimonialFeature";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { HeroImageSlab } from "@/components/layout/HeroImageSlab";
import { SectionImageSlab } from "@/components/layout/SectionImageSlab";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { homepageContent } from "@/data/homepageContent";

export default function HomePage() {
  const content = homepageContent;

  return (
    <div className="min-h-screen bg-canvas">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-surface focus:px-4 focus:py-3"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroImageSlab
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          body={content.hero.body}
          imageSrc={content.hero.image.src}
          imageAlt={content.hero.image.alt}
          slabLabel={content.hero.slabLabel}
          slabTitle={content.hero.slabTitle}
          slabBody={content.hero.slabBody}
          cta={content.hero.cta}
        />

        <section className="py-14 md:py-20">
          <ContentContainer width="wide" padding="edge" className="space-y-10 md:space-y-14">
            <SectionIntro
              label={content.proofIntro.label}
              title={content.proofIntro.title}
              body={content.proofIntro.body}
            />
            <ProofCardRow cards={[...content.proofCards]} />
          </ContentContainer>
        </section>

        <section className="py-6 md:py-8">
          <ContentContainer width="wide" padding="edge">
            <DonationSplitBanner {...content.donationBanner} />
          </ContentContainer>
        </section>

        <section className="py-14 md:py-20">
          <ContentContainer width="wide" padding="edge">
            <TestimonialFeature
              label={content.testimonial.label}
              quote={content.testimonial.quote}
              attribution={content.testimonial.attribution}
              context={content.testimonial.context}
              imageAlt={content.testimonial.image.alt}
            />
          </ContentContainer>
        </section>

        <section className="py-6 md:py-8">
          <ContentContainer width="wide" padding="edge">
            <NewsletterSignupBar
              title={content.newsletter.title}
              body={content.newsletter.body}
              placeholder={content.newsletter.placeholder}
              buttonLabel={content.newsletter.buttonLabel}
            />
          </ContentContainer>
        </section>

        <section className="py-14 md:py-20">
          <ContentContainer width="wide" padding="edge">
            <SectionImageSlab
              label={content.campaign.label}
              title={content.campaign.title}
              body={content.campaign.body}
              imageAlt={content.campaign.image.alt}
              cta={content.campaign.cta}
              align="left"
            />
          </ContentContainer>
        </section>

        <section className="py-14 md:py-20">
          <ContentContainer width="wide" padding="edge">
            <FeaturedStoryBlock
              label={content.inFocus.label}
              title={content.inFocus.title}
              excerpt={content.inFocus.excerpt}
              date={content.inFocus.date}
              href={content.inFocus.cta.href}
              thumbnails={[...content.inFocus.thumbnails]}
            />
          </ContentContainer>
        </section>

        <section className="py-14 md:py-20">
          <ContentContainer width="wide" padding="edge">
            <SectionImageSlab
              label={content.insights.label}
              title={content.insights.title}
              body={content.insights.body}
              imageAlt={content.insights.image.alt}
              cta={content.insights.cta}
              align="right"
            />
          </ContentContainer>
        </section>

        <section className="py-14 md:py-20">
          <ContentContainer width="wide" padding="edge" className="space-y-10 md:space-y-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionIntro
                label={content.features.label}
                title={content.features.title}
                body="Use these cards for stories, reports, press items, or thought pieces. The visual treatment intentionally stays restrained so strong writing does the work."
              />
              <ViewMoreButton href="/what-we-do#stories" label="View all stories" />
            </div>
            <StoryGrid items={[...content.features.items]} />
          </ContentContainer>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
