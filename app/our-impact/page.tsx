import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SectionSubnavHero } from "@/components/layout/SectionSubnavHero";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { siteNavigation } from "@/data/siteNavigation";

const sections = [
  {
    id: "outcome-area-1",
    title: "Outcome area 1",
  },
  {
    id: "outcome-area-2",
    title: "Outcome area 2",
  },
  {
    id: "outcome-area-3",
    title: "Outcome area 3",
  },
  {
    id: "evaluations",
    title: "Evaluations",
  },
  {
    id: "measurement",
    title: "How we measure impact",
  },
  {
    id: "insights",
    title: "Insights and data",
  },
];

export default function OurImpactPage() {
  const items = siteNavigation.primary.find((item) => item.href === "/our-impact")?.items ?? [];

  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main>
        <SectionSubnavHero
          label="Our impact"
          title="A structured place for evidence, evaluations, and learning."
          body="This placeholder impact landing page is built around subsection anchors so real data, outcomes, and reporting can be inserted cleanly."
          items={[...items]}
        />
        <ContentContainer className="space-y-16 py-14 md:space-y-20 md:py-20">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="border-b border-line pb-12 last:border-b-0 last:pb-0">
              <SectionIntro
                label="Impact section"
                title={section.title}
                body="Placeholder copy for outcome definitions, methodology, evaluation summaries, charts, and evidence-backed reporting."
              />
            </section>
          ))}
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
