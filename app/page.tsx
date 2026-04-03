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

export const metadata = {
  title: "Sustainable Fish Farming Initiative",
  description:
    "A women-led social enterprise advancing food security, nutrition, and rural livelihoods across South Asia through sustainable aquaculture and community-rooted innovation.",
};

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

        <section className="pb-14 pt-0 md:pb-20">
          <ContentContainer width="wide" padding="edge" className="space-y-10 md:space-y-14">
            <ProofCardRow cards={[...content.proofCards]} />
            <SectionIntro
              label={content.proofIntro.label}
              title={content.proofIntro.title}
              body={content.proofIntro.body}
              align="center"
            />
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
              context={content.testimonial.context}
              slides={[...content.testimonial.slides]}
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
              images={[content.campaign.image]}
              cta={content.campaign.cta}
              align="left"
              minHeight={content.campaign.minHeight}
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
              linkLabel={content.inFocus.cta.label}
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
              images={[...content.insights.images]}
              cta={content.insights.cta}
              align="right"
              layout="split"
              mediaMode="contain"
              minHeight={content.insights.minHeight}
            />
          </ContentContainer>
        </section>

        <section className="py-14 md:py-20">
          <ContentContainer
            width="wide"
            padding="edge"
            className="space-y-10 border border-line/70 bg-brandGreen900 px-6 py-10 text-white md:space-y-14 md:px-8 md:py-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-reading">
                <p className="article-label !text-[#F0D27A]">{content.features.label}</p>
                <h2 className="section-title mt-4 !text-white">{content.features.title}</h2>
                <p className="section-intro mt-5 !text-white">{content.features.body}</p>
              </div>
              <ViewMoreButton
                href="/what-we-do#stories"
                label="View all stories"
                className="border-white/58 text-white hover:border-[#F0D27A] hover:bg-[#F0D27A] hover:text-brandGreen900"
              />
            </div>
            <StoryGrid items={[...content.features.items]} />
          </ContentContainer>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
