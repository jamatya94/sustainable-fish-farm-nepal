import { SiteFooter } from "@/components/SiteFooter";
import { DonationSplitBanner } from "@/components/cta/DonationSplitBanner";
import { NewsletterSignupBar } from "@/components/cta/NewsletterSignupBar";
import { ViewMoreButton } from "@/components/cta/ViewMoreButton";
import { ImpactStatsSection } from "@/components/content/ImpactStatsSection";
import { ProofCardRow } from "@/components/content/ProofCardRow";
import { StoryGrid } from "@/components/content/StoryGrid";
import { TestimonialFeature } from "@/components/content/TestimonialFeature";
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
        />

        <section className="pb-0 pt-0">
          <div className="space-y-5 md:space-y-7">
            <div className="flex justify-center px-gutter-mobile pt-4 md:px-gutter-tablet md:pt-5 lg:px-6 xl:px-8 2xl:px-10">
              <p className="article-label">{content.proofIntro.label}</p>
            </div>
            <ProofCardRow cards={[...content.proofCards]} />
          </div>
        </section>

        <section className="py-0">
          <ImpactStatsSection
            label={content.impactStats.label}
            stats={[...content.impactStats.stats]}
          />
        </section>

        <section className="py-0">
          <TestimonialFeature
            label={content.testimonial.label}
            context={content.testimonial.context}
            slides={[...content.testimonial.slides]}
          />
        </section>

        <section className="py-0">
          <SectionImageSlab
            label={content.campaign.label}
            title={content.campaign.title}
            body={content.campaign.body}
            images={[content.campaign.image]}
            cta={content.campaign.cta}
            align="left"
            minHeight={content.campaign.minHeight}
          />
        </section>

        <section className="border border-line/70 bg-brandGreen900 px-gutter-mobile py-10 text-white md:px-gutter-tablet md:py-12 lg:px-6 xl:px-8 2xl:px-10">
          <div className="mx-auto w-full max-w-wide space-y-10 md:space-y-14">
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
          </div>
        </section>

        <section className="py-0">
          <DonationSplitBanner {...content.donationBanner} />
        </section>

        <section className="py-0">
          <NewsletterSignupBar
            title={content.newsletter.title}
            body={content.newsletter.body}
            placeholder={content.newsletter.placeholder}
            buttonLabel={content.newsletter.buttonLabel}
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
