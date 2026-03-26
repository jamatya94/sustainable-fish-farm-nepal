import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main className="py-14 md:py-20">
        <ContentContainer>
          <SectionIntro
            label="Careers"
            title="Placeholder careers page."
            body="Use this utility page for open roles, values-based hiring language, and information about culture and benefits."
          />
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
