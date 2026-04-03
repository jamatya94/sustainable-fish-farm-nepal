import { SiteFooter } from "@/components/SiteFooter";
import { DonationSplitBanner } from "@/components/cta/DonationSplitBanner";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { homepageContent } from "@/data/homepageContent";

export const metadata = {
  title: "Donate",
  description:
    "Support community-rooted, women-led aquaculture work that strengthens food security, nutrition, livelihoods, and resilience across South Asia.",
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main className="py-14 md:py-20">
        <ContentContainer className="space-y-10">
          <SectionIntro
            label="Donate"
            title="Invest in community-rooted solutions that expand food security, nutrition, and rural opportunity."
            body="Giving to SFFI supports training, enterprise development, and local systems that help sustainable aquaculture create lasting benefits for rural communities. The initiative is committed to practical stewardship, transparent reporting, and support that strengthens dignity, inclusion, and long-term resilience."
          />
          <DonationSplitBanner {...homepageContent.donationBanner} />
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
