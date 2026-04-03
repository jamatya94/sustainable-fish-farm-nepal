import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";

export const metadata = {
  title: "Careers",
  description:
    "Learn how future opportunities at SFFI will support mission-driven work in sustainable aquaculture, women-led development, and rural transformation.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main className="py-14 md:py-20">
        <ContentContainer>
          <SectionIntro
            label="Careers"
            title="Build work that centers dignity, partnership, and practical change."
            body="SFFI’s future team will be shaped by people who value listening, community partnership, and rigorous, mission-driven execution. As roles open, this page will share opportunities for contributors who want to support sustainable aquaculture, women-led development, and rural transformation across South Asia."
          />
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
