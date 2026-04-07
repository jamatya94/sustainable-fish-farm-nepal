import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SectionSubnavHero } from "@/components/layout/SectionSubnavHero";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { siteNavigation } from "@/data/siteNavigation";

const values = [
  {
    label: "Dignity",
    title: "Communities are approached as capable partners, not passive recipients.",
    body:
      "SFFI is built on the belief that rural families already hold knowledge, priorities, and aspirations that should shape how solutions are designed. Dignity is reflected in the way the initiative listens, collaborates, and follows through.",
  },
  {
    label: "Women’s leadership",
    title: "The organization is grounded in the conviction that women’s leadership changes development outcomes.",
    body:
      "Because women are central to household resilience, food systems, and local economies, SFFI treats women’s voice, visibility, and enterprise leadership as core to its mission rather than secondary to it.",
  },
  {
    label: "Practicality",
    title: "The model prioritizes methods rural communities can actually use in the conditions they face.",
    body:
      "SFFI values solutions that can survive real-world constraints: limited capital, uneven infrastructure, climate risk, and the everyday complexity of village livelihoods.",
  },
  {
    label: "Stewardship",
    title: "Growth is expected to remain accountable to the people most affected by the work.",
    body:
      "The initiative’s social enterprise discipline is rooted in responsible partnership, careful learning, and an ambition to build trust through tangible results rather than rhetoric alone.",
  },
];

const modelPrinciples = [
  {
    title: "Sustainable aquaculture as a practical entry point",
    body:
      "Fish farming is approached as more than a technical activity. It is treated as a pathway through which families can strengthen food access, create productive value, and reduce vulnerability when supported with usable knowledge and local follow-through.",
  },
  {
    title: "Enterprise pathways that widen opportunity",
    body:
      "SFFI connects production to broader enterprise thinking so that households, especially women, can build stronger economic roles through training, local market relationships, and practical financial pathways.",
  },
  {
    title: "Community systems that help progress endure",
    body:
      "The organization works through local partnership, peer learning, and community-rooted coordination because durable progress depends on trusted systems, not only project activity.",
  },
];

const organizationBlocks = [
  {
    label: "Women-led social enterprise",
    title: "SFFI is built as a mission-driven organization with the discipline to connect field realities and long-term strategy.",
    body:
      "Its structure reflects a hybrid mindset: community-rooted in practice, but rigorous about how programs are designed, how learning is captured, and how growth is stewarded. This allows the initiative to stay close to village realities while building a model that can earn wider confidence.",
  },
  {
    label: "Operating geography",
    title: "The organization is grounded in rural Nepal, with learning relationships extending into sister villages in India.",
    body:
      "That regional frame matters because the problems SFFI is addressing are shared across South Asia. Yet its method remains local, relational, and designed to remain relevant to the communities expected to carry progress forward.",
  },
];

export const metadata = {
  title: "About Us",
  description:
    "Learn how the Sustainable Fish Farming Initiative is guided by women’s leadership, community trust, practical aquaculture, and a mission-driven social enterprise model.",
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
          body="The Sustainable Fish Farming Initiative is a women-led social enterprise working across South Asia to strengthen food security, nutrition, and livelihoods through sustainable aquaculture. It exists to back rural communities with practical, locally rooted solutions that connect dignity, enterprise, and resilience in ways that can endure."
          items={[...items]}
        />

        <section id="vision" className="border-b border-line py-12 md:py-16">
          <ContentContainer width="wide" padding="edge" className="space-y-8 md:space-y-10">
            <div className="max-w-[48rem]">
              <p className="article-label">Vision and values</p>
              <h2 className="section-title mt-4">
                SFFI envisions rural communities where nutritious food, reliable livelihoods, and women’s leadership reinforce one another.
              </h2>
              <p className="section-intro mt-5">
                The organization’s values are not treated as background language. They shape how it works in practice:
                start with community realities, build through women’s leadership, stay practical enough to matter in
                village life, and hold growth to a high standard of stewardship.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <article key={value.label} className="border border-line/70 bg-surface p-6 md:p-7">
                  <p className="article-label">{value.label}</p>
                  <h3 className="mt-4 text-[1.55rem] font-semibold leading-snug tracking-[-0.03em] text-text">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-textMuted">{value.body}</p>
                </article>
              ))}
            </div>
          </ContentContainer>
        </section>

        <section id="model" className="py-12 md:py-16">
          <ContentContainer width="wide" padding="edge" className="space-y-8 md:space-y-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
              <div className="bg-brandGreen900 p-7 text-white md:p-9">
                <p className="article-label !text-[#F0D27A]">Our model</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[2.3rem]">
                  A sustainable model built through aquaculture, enterprise, and community-rooted systems.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/84">
                  SFFI’s model is designed to make sustainable fish farming meaningful beyond the pond itself. It links
                  production, nutrition, livelihood opportunity, women’s leadership, and local coordination so that
                  gains can become more durable at household and village level.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {modelPrinciples.map((item) => (
                  <article key={item.title} className="border border-line/70 bg-white p-5 md:p-6">
                    <h3 className="text-[1.35rem] font-semibold leading-snug tracking-[-0.025em] text-text">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-textMuted">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </ContentContainer>
        </section>

        <ContentContainer width="wide" padding="edge" className="space-y-12 py-12 md:space-y-16 md:py-16">
          <section
            id="organization"
            className="overflow-hidden border border-line bg-surface lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]"
          >
            <div className="relative min-h-[360px] bg-[#E5DDCB]">
              <Image
                src="/homepage/10257267_711098368953572_8951827543240347444_o.jpg"
                alt="Community members gathered in a learning environment."
                fill
                sizes="(min-width: 1280px) 760px, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
            <div className="flex flex-col justify-center bg-brandGreen900 p-7 text-white md:p-9 lg:p-10">
              <p className="article-label !text-[#F0D27A]">Our organization</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[2.25rem]">
                Structured to stay mission-led, field-aware, and accountable as it grows.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-white/84">
                {organizationBlocks.map((block) => (
                  <div key={block.label}>
                    <p className="article-label !text-white/58">{block.label}</p>
                    <p className="mt-2 font-semibold text-white">{block.title}</p>
                    <p className="mt-2">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
