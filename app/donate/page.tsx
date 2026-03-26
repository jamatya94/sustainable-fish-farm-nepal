import { SiteFooter } from "@/components/SiteFooter";
import { DonationSplitBanner } from "@/components/cta/DonationSplitBanner";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { homepageContent } from "@/data/homepageContent";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main className="py-14 md:py-20">
        <ContentContainer className="space-y-10">
          <SectionIntro
            label="Donate"
            title="Placeholder donation page."
            body="This page can later hold campaign messaging, giving tiers, FAQs, and a real donation form or embedded provider."
          />
          <DonationSplitBanner {...homepageContent.donationBanner} />
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
