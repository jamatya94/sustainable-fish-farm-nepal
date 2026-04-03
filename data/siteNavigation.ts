export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items?: NavLink[];
};

export const siteNavigation = {
  utility: [
    {
      label: "Search",
      href: "/search",
    },
    {
      label: "Careers",
      href: "/careers",
    },
  ] satisfies NavLink[],
  primary: [
    {
      label: "About us",
      href: "/about-us",
      items: [
        { label: "Our vision and values", href: "/about-us#vision", description: "The mission, principles, and commitments guiding the initiative." },
        { label: "Our model", href: "/about-us#model", description: "How sustainable aquaculture, partnership, and enterprise connect in practice." },
        { label: "Our organization", href: "/about-us#organization", description: "How SFFI is built to stay mission-led and accountable." },
        { label: "Recognition", href: "/about-us#recognition", description: "How trust, partnership, and external validation strengthen the work." },
        { label: "Reports", href: "/about-us#reports", description: "Where accountability updates and reporting will live." },
      ],
    },
    {
      label: "What we do",
      href: "/what-we-do",
      items: [
        { label: "Sustainable aquaculture training", href: "/what-we-do#sustainable-aquaculture", description: "Hands-on support for more resilient and productive fish farming." },
        { label: "Women-led enterprise", href: "/what-we-do#women-led-enterprise", description: "How leadership and livelihoods expand when women gain opportunity." },
        { label: "Community systems", href: "/what-we-do#community-systems", description: "Local partnerships and systems that help progress last." },
        { label: "Where we work", href: "/what-we-do#where-we-work", description: "The rural South Asian contexts shaping the initiative’s approach." },
        { label: "Stories", href: "/what-we-do#stories", description: "Field stories, community perspectives, and program reflections." },
      ],
    },
    {
      label: "Our impact",
      href: "/our-impact",
      items: [
        { label: "Food security and nutrition", href: "/our-impact#food-security-and-nutrition", description: "How the work supports healthier diets and more secure households." },
        { label: "Livelihoods and enterprise", href: "/our-impact#livelihoods-and-enterprise", description: "What stronger incomes and enterprise pathways can look like in practice." },
        { label: "Women’s leadership and inclusion", href: "/our-impact#womens-leadership-and-inclusion", description: "How inclusion and decision-making are treated as real outcomes." },
        { label: "Evaluations", href: "/our-impact#evaluations", description: "Formal review, reflection, and learning over time." },
        { label: "How we measure impact", href: "/our-impact#measurement", description: "The indicators, feedback loops, and learning methods behind the work." },
        { label: "Insights and data", href: "/our-impact#insights", description: "Research notes, evidence framing, and data-informed storytelling." },
      ],
    },
    {
      label: "Donate",
      href: "/donate",
    },
  ] satisfies NavGroup[],
} as const;
