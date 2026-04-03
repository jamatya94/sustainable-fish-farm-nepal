import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SectionSubnavHero } from "@/components/layout/SectionSubnavHero";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { siteNavigation } from "@/data/siteNavigation";

const sections = [
  {
    id: "vision",
    label: "Mission and values",
    title: "Our vision and values",
    body: "SFFI envisions rural communities where families can access nutritious food, build reliable incomes, and shape their own futures. Its work is grounded in dignity, inclusion, practical learning, and the belief that women’s leadership and local ownership are essential to lasting transformation.",
  },
  {
    id: "model",
    label: "How we work",
    title: "Our model",
    body: "SFFI combines sustainable aquaculture training, enterprise support, and community partnership so progress can outlast any single project cycle. Rather than importing fixed solutions, the initiative works alongside producers, women leaders, and local networks to build systems communities can adapt, own, and grow.",
  },
  {
    id: "organization",
    label: "Structure and stewardship",
    title: "Our organization",
    body: "SFFI is structured as a mission-driven, women-led initiative that connects field practice with social enterprise discipline. Its organizational approach emphasizes accountable stewardship, respectful partnership, and decision-making that stays close to the realities rural communities face.",
  },
  {
    id: "recognition",
    label: "Trust and partnership",
    title: "Recognition",
    body: "Credibility at SFFI begins with staying present, listening carefully, and following through on commitments. As the initiative grows, this section will continue to highlight the partnerships, external validation, and collaborative relationships that strengthen its work and extend its reach responsibly.",
  },
  {
    id: "reports",
    label: "Accountability",
    title: "Reports",
    body: "SFFI believes trust should be supported by accessible reporting, not just good intentions. This section is designed to house annual updates, accountability materials, and evidence summaries that help supporters understand where the work is heading and how progress is being measured.",
  },
];

export const metadata = {
  title: "About Us",
  description:
    "Learn how the Sustainable Fish Farming Initiative is built, guided, and held accountable through community-rooted partnership, women’s leadership, and practical rural development.",
};

export default function AboutUsPage() {
  const items = siteNavigation.primary.find((item) => item.href === "/about-us")?.items ?? [];

  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main>
        <SectionSubnavHero
          label="About us"
          title="Built around community trust, women’s leadership, and practical pathways to rural prosperity."
          body="The Sustainable Fish Farming Initiative is a women-led social enterprise working across South Asia to strengthen food security, nutrition, and livelihoods through sustainable aquaculture. It exists to back rural communities with practical, locally led solutions that turn enterprise, dignity, and resilience into lasting outcomes."
          items={[...items]}
        />
        <ContentContainer className="space-y-16 py-14 md:space-y-20 md:py-20">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="border-b border-line pb-12 last:border-b-0 last:pb-0">
              <SectionIntro label={section.label} title={section.title} body={section.body} />
            </section>
          ))}
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
