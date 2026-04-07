import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { StoryGrid } from "@/components/content/StoryGrid";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SectionSubnavHero } from "@/components/layout/SectionSubnavHero";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { homepageContent } from "@/data/homepageContent";
import { siteNavigation } from "@/data/siteNavigation";

const operatingPillars = [
  {
    label: "Food security first",
    title: "Production is treated as a household outcome, not an isolated farm output.",
    body:
      "SFFI works to help families produce fish in ways that strengthen both nutrition and income. The aim is not only to improve pond performance, but to help households access more reliable food, reduce vulnerability, and build a stronger base for long-term decision-making.",
  },
  {
    label: "Women at the center",
    title: "Enterprise becomes more durable when women can lead, earn, and shape local priorities.",
    body:
      "The initiative places women’s leadership at the core of its operating model because rural transformation is stronger when economic opportunity, enterprise ownership, and community voice are more widely shared.",
  },
  {
    label: "Systems that last",
    title: "The work is built around relationships, trusted local actors, and practical follow-through.",
    body:
      "SFFI is designed to strengthen systems communities can carry forward: training networks, peer learning, enterprise coordination, and local partnership that can endure beyond any single cycle of outside support.",
  },
];

const focusAreas = [
  {
    id: "sustainable-aquaculture",
    label: "Focus area 1",
    title: "Sustainable aquaculture training that improves pond management, food access, and income resilience.",
    body:
      "SFFI works alongside farming households to strengthen the practical foundations of fish production: pond preparation, stocking, feeding, water quality, seasonal planning, harvest timing, and the small operational decisions that shape whether a pond becomes a dependable source of food and income. The emphasis is on field-based learning that families can adapt to their own realities rather than one-size-fits-all instruction delivered from outside.",
    bullets: [
      "Hands-on learning in pond preparation, fish health, feeding, and harvest planning.",
      "Production practices designed to improve reliability, not just short-term output.",
      "A nutrition-sensitive approach that connects fish farming to household well-being.",
    ],
    image: {
      src: "/homepage/see-the-campaign.jpg",
      alt: "Women and community members gathered around fish harvest baskets in a rural setting.",
      position: "center 58%",
    },
  },
  {
    id: "women-led-enterprise",
    label: "Focus area 2",
    title: "Women-led enterprise and leadership pathways that turn participation into real economic agency.",
    body:
      "In many rural communities, women already sustain households, contribute labor, and hold deep knowledge of how local systems work, yet they remain under-recognized in enterprise and decision-making. SFFI is intentionally structured to expand women’s visibility, confidence, and practical role in the local economy by creating space for leadership, peer learning, market participation, and enterprise ownership.",
    bullets: [
      "Support for women to move from unpaid participation toward recognized enterprise roles.",
      "Leadership development rooted in trust, visibility, and decision-making at community level.",
      "Practical encouragement for women to influence how livelihoods are planned and grown.",
    ],
    image: {
      src: "/homepage/10257267_711098368953572_8951827543240347444_o.jpg",
      alt: "Community members participating in a learning setting in rural Nepal.",
      position: "center 42%",
    },
  },
  {
    id: "community-systems",
    label: "Focus area 3",
    title: "Community systems and local partnership that help knowledge, trust, and progress travel further.",
    body:
      "SFFI is not built as a stand-alone intervention. Its work depends on staying close to the communities it serves and strengthening the local relationships that make action possible. That means working through trusted partners, listening carefully before acting, and helping build the practical systems through which knowledge, accountability, and opportunity can continue to circulate after individual activities end.",
    bullets: [
      "Local partnership as a core method, not a supporting activity.",
      "Community-rooted coordination that keeps learning and accountability close to the ground.",
      "An emphasis on practical systems that communities can own, adapt, and extend.",
    ],
    image: {
      src: "/homepage/local-partner.jpg",
      alt: "A community partner carrying aquaculture materials through a rural landscape.",
      position: "center center",
    },
  },
];

const geographyHighlights = [
  {
    label: "Nepal",
    title: "Rural villages in Nepal are the initiative’s primary operating context.",
    body:
      "SFFI’s work is centered in rural Nepal, where food insecurity, malnutrition, migration pressure, and constrained livelihood opportunities often intersect. The initiative focuses on village contexts where sustainable aquaculture can become a credible and practical pathway toward better nutrition, more stable household economics, and stronger local confidence.",
  },
  {
    label: "India",
    title: "Sister villages in India create space for learning across similar rural realities.",
    body:
      "Alongside its work in Nepal, SFFI is building relationships with sister villages in India where comparable agricultural conditions, social structures, and livelihood pressures make shared learning especially valuable. These cross-border connections are not about replication for its own sake, but about understanding which methods travel well and which must stay deeply local.",
  },
  {
    label: "South Asia",
    title: "The wider lens is regional, but the operating discipline remains local.",
    body:
      "SFFI’s regional framing matters because the challenges it works on are not isolated to one village or one border. Yet its method remains intentionally grounded: stay close to communities, learn from practice, and only scale what remains relevant to the people who live with the outcomes.",
  },
];

export const metadata = {
  title: "What We Do",
  description:
    "Explore how SFFI combines sustainable aquaculture, women-led enterprise, and community-rooted systems across rural Nepal and sister villages in India.",
};

export default function WhatWeDoPage() {
  const content = homepageContent;
  const items = siteNavigation.primary.find((item) => item.href === "/what-we-do")?.items ?? [];

  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main>
        <SectionSubnavHero
          label="What we do"
          title="Practical rural transformation built through fish farming, women’s leadership, and locally rooted partnership."
          body="SFFI works primarily in rural Nepal, with emerging learning relationships in sister villages in India, to strengthen food security, nutrition, and livelihoods through sustainable aquaculture. Its model connects technical training, enterprise pathways, women’s leadership, and local systems so progress can become more durable at household and community level."
          items={[...items]}
        />

        <section className="border-b border-line py-12 md:py-16">
          <ContentContainer width="wide" padding="edge" className="space-y-8 md:space-y-10">
            <div className="max-w-[48rem]">
              <p className="article-label">How the work is designed</p>
              <h2 className="section-title mt-4">
                SFFI operates as a field-rooted model for rural food security, nutrition, and enterprise resilience.
              </h2>
              <p className="section-intro mt-5">
                The initiative is designed around a simple conviction: meaningful development in rural communities
                begins when solutions are practical, locally relevant, and shaped with the people expected to carry
                them forward. Rather than treating aquaculture as an isolated technical intervention, SFFI connects it
                to household nutrition, women’s economic leadership, and the community systems that allow progress to
                last.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {operatingPillars.map((pillar) => (
                <article key={pillar.title} className="border border-line/70 bg-surface p-6 md:p-7">
                  <p className="article-label">{pillar.label}</p>
                  <h3 className="mt-4 text-[1.6rem] font-semibold leading-tight tracking-[-0.03em] text-text">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-textMuted">{pillar.body}</p>
                </article>
              ))}
            </div>
          </ContentContainer>
        </section>

        <ContentContainer width="wide" padding="edge" className="space-y-12 py-12 md:space-y-16 md:py-16">
          {focusAreas.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="overflow-hidden border border-line bg-surface lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]"
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} relative min-h-[360px] bg-[#E5DDCB]`}>
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(min-width: 1280px) 760px, 100vw"
                  className="object-cover"
                  style={{ objectPosition: section.image.position }}
                />
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} flex flex-col justify-center bg-brandGreen900 p-7 text-white md:p-9 lg:p-10`}>
                <p className="article-label !text-[#F0D27A]">{section.label}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[2.25rem]">
                  {section.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-white/84">{section.body}</p>
                <ul className="mt-7 space-y-3 border-t border-white/12 pt-6 text-sm leading-6 text-white/82">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F0D27A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </ContentContainer>

        <section id="where-we-work" className="border-y border-line bg-[#F4F1E8] py-12 md:py-16">
          <ContentContainer width="wide" padding="edge" className="space-y-8 md:space-y-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
              <div className="bg-brandGreen900 p-7 text-white md:p-9">
                <p className="article-label !text-[#F0D27A]">Geography</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[2.3rem]">
                  Grounded in rural Nepal, with learning ties to sister villages in India.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/84">
                  SFFI’s regional frame is South Asia, but its operating logic remains deeply local. The initiative is
                  built around village realities in Nepal and a growing exchange with sister villages in India where
                  similar livelihood pressures, agricultural conditions, and social dynamics make shared learning both
                  relevant and valuable.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {geographyHighlights.map((item) => (
                  <article key={item.label} className="border border-line/70 bg-white p-5 md:p-6">
                    <p className="article-label">{item.label}</p>
                    <h3 className="mt-3 text-[1.35rem] font-semibold leading-snug tracking-[-0.025em] text-text">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-textMuted">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </ContentContainer>
        </section>

        <section
          id="stories"
          className="border border-line/70 bg-brandGreen900 px-gutter-mobile py-10 text-white md:px-gutter-tablet md:py-12 lg:px-6 xl:px-8 2xl:px-10"
        >
          <div className="mx-auto w-full max-w-wide space-y-10 md:space-y-14">
            <div className="max-w-reading">
              <p className="article-label !text-[#F0D27A]">{content.features.label}</p>
              <h2 className="section-title mt-4 !text-white">{content.features.title}</h2>
              <p className="section-intro mt-5 !text-white">{content.features.body}</p>
            </div>
            <StoryGrid items={[...content.features.items]} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
