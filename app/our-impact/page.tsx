import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SectionSubnavHero } from "@/components/layout/SectionSubnavHero";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { siteNavigation } from "@/data/siteNavigation";

const sections = [
  {
    id: "food-security-and-nutrition",
    label: "Nutrition outcomes",
    title: "Food security and nutrition",
    body: "SFFI tracks whether sustainable aquaculture helps households improve access to food, diversify diets, and strengthen day-to-day nutrition. The most meaningful outcomes are those communities can feel in household stability, meal quality, and reduced vulnerability.",
  },
  {
    id: "livelihoods-and-enterprise",
    label: "Economic outcomes",
    title: "Livelihoods and enterprise",
    body: "Income matters most when it is more reliable, more inclusive, and tied to opportunities people can sustain. SFFI looks at how training, enterprise support, and local market pathways help producers build stronger livelihoods over time.",
  },
  {
    id: "womens-leadership-and-inclusion",
    label: "Inclusion outcomes",
    title: "Women’s leadership and inclusion",
    body: "A core measure of success is whether women gain greater voice, visibility, and economic opportunity through the initiative’s work. SFFI treats inclusion as an outcome in its own right because resilient communities are built through broader participation in leadership and decision-making.",
  },
  {
    id: "evaluations",
    label: "Review and learning",
    title: "Evaluations",
    body: "Evaluation at SFFI is intended to sharpen practice, surface blind spots, and improve accountability to communities and supporters alike. As formal reviews and learning documents are published, this section will bring them together in a clear and accessible record.",
  },
  {
    id: "measurement",
    label: "Methodology",
    title: "How we measure impact",
    body: "SFFI combines field observation, community feedback, program monitoring, and practical indicators to understand whether its work is making a difference. The aim is to balance rigor with humility by measuring what matters while staying honest about complexity, context, and limits.",
  },
  {
    id: "insights",
    label: "Analysis and reporting",
    title: "Insights and data",
    body: "Evidence becomes more useful when it helps others think, adapt, and act. This section will feature learning notes, research reflections, and data-informed storytelling that connect local experience with wider conversations about rural development, food systems, and women-led change in South Asia.",
  },
];

export const metadata = {
  title: "Our Impact",
  description:
    "See how SFFI frames outcomes, measurement, evaluation, and insight across food security, livelihoods, and women-led rural transformation.",
};

export default function OurImpactPage() {
  const items = siteNavigation.primary.find((item) => item.href === "/our-impact")?.items ?? [];

  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main>
        <SectionSubnavHero
          label="Our impact"
          title="Measuring progress in food security, livelihoods, and women-led rural transformation."
          body="SFFI approaches impact as something to learn from, not just announce. Its reporting focuses on the real changes communities experience, the methods used to understand those changes, and the lessons needed to strengthen future work."
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
