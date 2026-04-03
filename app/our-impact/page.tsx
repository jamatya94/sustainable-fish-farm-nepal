import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { AngularButton } from "@/components/cta/AngularButton";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SectionSubnavHero } from "@/components/layout/SectionSubnavHero";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { siteNavigation } from "@/data/siteNavigation";

const impactHighlights = [
  {
    label: "Reach",
    value: "100,000+",
    title: "individuals reached through sustainable fish farming programming and related community support.",
  },
  {
    label: "Program model",
    value: "Training + enterprise",
    title: "field accompaniment, microfinancing pathways, and local market connections designed to work together.",
  },
  {
    label: "Women’s leadership",
    value: "Core mission",
    title: "women’s visibility, voice, and economic agency treated as central outcomes rather than secondary benefits.",
  },
  {
    label: "Geography",
    value: "Nepal + India",
    title: "deep roots in rural Nepal with growing learning relationships in sister villages in India.",
  },
];

const outcomeSections = [
  {
    id: "food-security-and-nutrition",
    label: "Nutrition outcomes",
    title: "Food security and nutrition improve when fish farming strengthens both household diets and economic resilience.",
    body:
      "SFFI sees food security and nutrition not as abstract end goals, but as outcomes that become visible in daily household life: more reliable access to protein, stronger confidence around food planning, and a reduced sense of fragility when incomes fluctuate. Its aquaculture model is designed to help families produce value that can be consumed, sold, reinvested, and carried forward through local knowledge.",
    bullets: [
      "Household access to fish as a practical source of nutrition, not only a market commodity.",
      "More stable food planning when ponds become a more dependable productive asset.",
      "Reduced day-to-day vulnerability when income and nutrition are strengthened together.",
    ],
    image: {
      src: "/homepage/see-the-campaign.jpg",
      alt: "Fish harvest baskets and community members gathered in a rural setting.",
      position: "center 60%",
    },
  },
  {
    id: "livelihoods-and-enterprise",
    label: "Economic outcomes",
    title: "Livelihood gains become meaningful when training, microfinance, and market access reinforce one another.",
    body:
      "SFFI’s economic model is rooted in the idea that rural prosperity does not come from production alone. It grows when families can translate skill into enterprise, enterprise into income, and income into more durable opportunity. Through training, microfinancing initiatives, and stronger connections to local markets, the initiative helps create conditions in which livelihoods can become more stable, more practical, and less exposed to constant disruption.",
    bullets: [
      "Hands-on training that improves the practical viability of smallholder fish farming.",
      "Microfinancing pathways that help households and women entrepreneurs act on opportunity.",
      "Local market networks that support stronger circulation of value at community level.",
    ],
    image: {
      src: "/homepage/support-the-mission.jpg",
      alt: "Community members and students gathered in a classroom setting.",
      position: "center center",
    },
  },
  {
    id: "womens-leadership-and-inclusion",
    label: "Women’s leadership",
    title: "Women’s economic and community leadership is treated as a defining impact pathway, not an accessory to the work.",
    body:
      "Because SFFI is women-led at its core, the initiative evaluates success partly through whether women gain greater voice, standing, and economic agency in the places where it works. That means paying attention to who participates, who leads, who is recognized, and who can influence how livelihoods and enterprise decisions are made. Inclusion is not framed as a soft value alone; it is a practical condition for resilient communities.",
    bullets: [
      "Women’s participation is assessed not only by attendance, but by influence and visibility.",
      "Leadership growth is understood through confidence, initiative, and decision-making roles.",
      "Enterprise inclusion matters because stronger local economies depend on broader ownership.",
    ],
    image: {
      src: "/homepage/10257267_711098368953572_8951827543240347444_o.jpg",
      alt: "Rural community members participating in a learning setting.",
      position: "center 40%",
    },
  },
];

const evaluationCards = [
  {
    label: "Learning reviews",
    title: "Program reflection is used to improve practice, not simply document activity.",
    body:
      "SFFI treats evaluation as a way to strengthen future decisions by surfacing what communities are actually experiencing, where support is working, and where operating assumptions need to be revised.",
  },
  {
    label: "Partnership feedback",
    title: "Community partners help test whether progress is credible from the ground up.",
    body:
      "Local voices remain essential to understanding whether interventions are practical, trusted, and useful enough to endure beyond the moment they are introduced.",
  },
  {
    label: "Investor readiness",
    title: "Reporting is being shaped to support transparent stewardship and responsible growth.",
    body:
      "As SFFI continues to grow, it is building a clearer record of learning, outcomes, and operating discipline so that partners and investors can assess both mission strength and execution quality.",
  },
];

const measurementAreas = [
  {
    label: "Household outcomes",
    body: "Track whether fish production is improving food access, dietary confidence, and day-to-day stability at family level.",
  },
  {
    label: "Income and enterprise",
    body: "Monitor how training, finance, and local market access affect whether livelihoods become more dependable over time.",
  },
  {
    label: "Women’s participation",
    body: "Assess whether women are gaining greater visibility, decision-making influence, and economic agency through the initiative.",
  },
  {
    label: "Local system strength",
    body: "Look at the health of partnerships, community coordination, trust, and the ability of local actors to carry learning forward.",
  },
  {
    label: "Program delivery quality",
    body: "Evaluate whether support is practical, relevant, and usable enough for communities to apply under real constraints.",
  },
  {
    label: "Learning and adaptation",
    body: "Use field notes, partner feedback, and periodic review to refine what should be strengthened, repeated, or changed.",
  },
];

const reportDrafts = [
  {
    label: "2024 field learning brief",
    title: "What it takes for aquaculture support to become credible at village level.",
    body:
      "A practical reflection on trust, accompaniment, and the operational realities that shape whether training turns into durable village-level uptake.",
    image: {
      src: "/homepage/00-program-notes.jpg",
      alt: "Program notes image showing field learning activity.",
      position: "center center",
    },
  },
  {
    label: "Livelihoods note",
    title: "Linking fish farming, microfinance, and local markets in rural household strategy.",
    body:
      "An early reporting draft on how enterprise support, financing pathways, and local market relationships interact in shaping livelihood resilience.",
    image: {
      src: "/homepage/02-program-notes.jpg",
      alt: "Program notes image showing rural field context.",
      position: "center center",
    },
  },
  {
    label: "Women-led enterprise note",
    title: "Why women’s visibility in enterprise changes how communities understand opportunity.",
    body:
      "A narrative report draft on women’s leadership, local confidence, and why participation must be measured as voice and agency, not only attendance.",
    image: {
      src: "/homepage/local partner-001.jpg",
      alt: "Community partner in Nepal outdoors.",
      position: "center 28%",
    },
  },
];

export const metadata = {
  title: "Our Impact",
  description:
    "See how SFFI frames household outcomes, economic opportunity, women-led change, and practical measurement across rural Nepal and sister villages in India.",
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
          body="SFFI approaches impact as something communities should be able to feel, partners should be able to understand, and investors should be able to trust. Its reporting focuses on practical outcomes in food security, economic opportunity, women’s leadership, and the local systems that help progress endure."
          items={[...items]}
        />

        <section className="border-b border-line py-12 md:py-16">
          <ContentContainer width="wide" padding="edge" className="space-y-8 md:space-y-10">
            <div className="max-w-[48rem]">
              <p className="article-label">Impact snapshot</p>
              <h2 className="section-title mt-4">
                SFFI’s impact is best understood through who it reaches, how it works, and what changes it helps make possible.
              </h2>
              <p className="section-intro mt-5">
                The initiative’s work spans sustainable fish farming, training, microfinancing support, partnership with
                local markets, and women-centered rural enterprise. Taken together, these efforts have helped reach more
                than 100,000 individuals while building a stronger base for food security, livelihood resilience, and
                community-rooted leadership.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {impactHighlights.map((item) => (
                <article key={item.label} className="border border-line/70 bg-surface p-6 md:p-7">
                  <p className="article-label">{item.label}</p>
                  <p className="mt-4 text-[2rem] font-semibold leading-none tracking-[-0.04em] text-brandGreen900">
                    {item.value}
                  </p>
                  <p className="mt-4 text-base leading-7 text-textMuted">{item.title}</p>
                </article>
              ))}
            </div>
          </ContentContainer>
        </section>

        <ContentContainer width="wide" padding="edge" className="space-y-12 py-12 md:space-y-16 md:py-16">
          {outcomeSections.map((section, index) => (
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

        <section id="evaluations" className="border-y border-line bg-[#F4F1E8] py-12 md:py-16">
          <ContentContainer width="wide" padding="edge" className="space-y-8 md:space-y-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
              <div className="bg-brandGreen900 p-7 text-white md:p-9">
                <p className="article-label !text-[#F0D27A]">Review and learning</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[2.3rem]">
                  Evaluation is used to improve field practice, surface blind spots, and strengthen stewardship.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/84">
                  SFFI’s evaluation lens is practical by design. The question is not only whether activity took place,
                  but whether support was credible, useful, and strong enough to improve how families, women leaders,
                  and community partners navigate livelihood decisions over time.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {evaluationCards.map((card) => (
                  <article key={card.label} className="border border-line/70 bg-white p-5 md:p-6">
                    <p className="article-label">{card.label}</p>
                    <h3 className="mt-3 text-[1.35rem] font-semibold leading-snug tracking-[-0.025em] text-text">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-textMuted">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </ContentContainer>
        </section>

        <section id="measurement" className="py-12 md:py-16">
          <ContentContainer width="wide" padding="edge" className="space-y-8 md:space-y-10">
            <div className="max-w-[50rem]">
              <p className="article-label">How we measure impact</p>
              <h2 className="section-title mt-4">
                Practical measurement for social enterprise must be rigorous enough to guide decisions and humble enough to stay close to reality.
              </h2>
              <p className="section-intro mt-5">
                SFFI’s measurement approach combines household outcomes, enterprise observations, women’s participation,
                partner feedback, and field-based review. The goal is not to flatten complex rural change into a single
                metric, but to build a credible picture of whether the work is helping communities become more secure,
                more capable, and more resilient.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {measurementAreas.map((area) => (
                <article key={area.label} className="border border-line/70 bg-surface p-6">
                  <p className="article-label">{area.label}</p>
                  <p className="mt-4 text-base leading-7 text-textMuted">{area.body}</p>
                </article>
              ))}
            </div>
          </ContentContainer>
        </section>

        <section id="insights" className="border-t border-line py-12 md:py-16">
          <ContentContainer width="wide" padding="edge" className="space-y-8 md:space-y-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-end">
              <div className="max-w-[42rem]">
                <p className="article-label">Insights and data</p>
                <h2 className="section-title mt-4">
                  Early reporting can already show how SFFI thinks, learns, and documents rural change.
                </h2>
                <p className="section-intro mt-5">
                  While a fuller reporting archive will continue to grow, the page below now frames the kind of
                  evidence SFFI intends to share: field learning, livelihoods analysis, reflections on women-led
                  enterprise, and practical documentation grounded in community experience.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <AngularButton href="/what-we-do#stories">See program context</AngularButton>
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {reportDrafts.map((report) => (
                <article key={report.title} className="overflow-hidden border border-line/70 bg-surface">
                  <div className="relative aspect-[4/3] bg-[#DED3BC]">
                    <Image
                      src={report.image.src}
                      alt={report.image.alt}
                      fill
                      sizes="(min-width: 1280px) 420px, 100vw"
                      className="object-cover"
                      style={{ objectPosition: report.image.position }}
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <p className="article-label">{report.label}</p>
                    <h3 className="mt-4 text-[1.55rem] font-semibold leading-snug tracking-[-0.03em] text-text">
                      {report.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-textMuted">{report.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </ContentContainer>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
