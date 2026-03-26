import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SectionSubnavHero } from "@/components/layout/SectionSubnavHero";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { siteNavigation } from "@/data/siteNavigation";

const sections = [
  {
    id: "vision",
    title: "Our vision and values",
    body: "Placeholder copy for the mission, principles, and worldview that shape the organization's direction and partnerships.",
  },
  {
    id: "model",
    title: "Our model",
    body: "Placeholder copy for the delivery model, theory of change, and the way the organization works alongside communities over time.",
  },
  {
    id: "organization",
    title: "Our organization",
    body: "Placeholder copy for governance, leadership, staff structure, and operational commitments.",
  },
  {
    id: "recognition",
    title: "Recognition",
    body: "Placeholder copy for awards, accreditations, funding partners, and independent endorsements.",
  },
  {
    id: "reports",
    title: "Reports",
    body: "Placeholder copy for annual reports, audited statements, and accountability documents.",
  },
];

export default function AboutUsPage() {
  const items = siteNavigation.primary.find((item) => item.href === "/about-us")?.items ?? [];

  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main>
        <SectionSubnavHero
          label="About us"
          title="How the organization is built, guided, and held accountable."
          body="This placeholder landing page includes the required green title slab and horizontal subsection navigation so real organizational content can be dropped in later."
          items={[...items]}
        />
        <ContentContainer className="space-y-16 py-14 md:space-y-20 md:py-20">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="border-b border-line pb-12 last:border-b-0 last:pb-0">
              <SectionIntro label="Placeholder section" title={section.title} body={section.body} />
            </section>
          ))}
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
