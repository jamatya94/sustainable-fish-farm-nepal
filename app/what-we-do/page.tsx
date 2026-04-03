import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";

const sections = [
  {
    id: "sustainable-aquaculture",
    label: "Focus area 1",
    title: "Sustainable aquaculture training",
    body: "SFFI supports producers with hands-on training in fish farming practices that improve yields, protect aquatic ecosystems, and strengthen long-term viability. The goal is not short-term output alone, but healthier ponds, better planning, and more dependable food and income.",
  },
  {
    id: "women-led-enterprise",
    label: "Focus area 2",
    title: "Women-led enterprise and leadership",
    body: "Women are central to the initiative’s strategy because rural transformation is stronger when economic opportunity and decision-making are shared more equitably. SFFI helps create pathways for women to lead enterprises, participate more fully in markets, and influence how community priorities are set.",
  },
  {
    id: "community-systems",
    label: "Focus area 3",
    title: "Community systems and local partnership",
    body: "Lasting progress depends on trusted relationships, local coordination, and institutions that keep working after outside support recedes. SFFI invests in community ownership, local partnerships, and practical systems that help knowledge, enterprise support, and accountability travel further.",
  },
  {
    id: "where-we-work",
    label: "Geography",
    title: "Where we work",
    body: "SFFI’s work is rooted in South Asia, with an emphasis on rural communities where food insecurity, malnutrition, and constrained economic opportunity are closely linked. The initiative prioritizes contexts where sustainable aquaculture can become a credible pathway to stronger livelihoods and community resilience.",
  },
  {
    id: "stories",
    label: "Editorial and field notes",
    title: "Stories from the field",
    body: "Behind every program decision is a lived reality: producers balancing risk, women building enterprise pathways, and households working toward more secure futures. This section brings together field stories, community reflections, and program updates that show how change happens in practice.",
  },
];

export const metadata = {
  title: "What We Do",
  description:
    "Explore how SFFI combines sustainable aquaculture, women-led enterprise, and community systems to strengthen food security and rural livelihoods across South Asia.",
};

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main>
        <section className="border-b border-line py-14 md:py-20">
          <ContentContainer>
            <SectionIntro
              label="What we do"
              title="Practical aquaculture solutions designed with communities, not delivered to them."
              body="SFFI works at the intersection of food security, nutrition, women-led enterprise, and rural resilience. Its programs focus on the systems that help sustainable fish farming create lasting value for households and communities across South Asia."
            />
          </ContentContainer>
        </section>
        <ContentContainer className="space-y-16 py-14 md:space-y-20 md:py-20">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="border-b border-line pb-12 last:border-b-0 last:pb-0"
            >
              <SectionIntro label={section.label} title={section.title} body={section.body} />
            </section>
          ))}
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
