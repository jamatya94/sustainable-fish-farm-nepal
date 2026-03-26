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
  primary: [
    {
      label: "About us",
      href: "/about-us",
      items: [
        { label: "Our vision and values", href: "/about-us#vision", description: "The principles guiding our work and partnerships." },
        { label: "Our model", href: "/about-us#model", description: "How we design programs that stay community-led." },
        { label: "Our organization", href: "/about-us#organization", description: "Governance, leadership, and stewardship." },
        { label: "Recognition", href: "/about-us#recognition", description: "External trust signals and partnerships." },
        { label: "Reports", href: "/about-us#reports", description: "Annual and accountability reporting." },
      ],
    },
    {
      label: "What we do",
      href: "/what-we-do",
      items: [
        { label: "Program area 1", href: "/what-we-do#program-area-1", description: "A placeholder program summary." },
        { label: "Program area 2", href: "/what-we-do#program-area-2", description: "A second placeholder program summary." },
        { label: "Program area 3", href: "/what-we-do#program-area-3", description: "A third placeholder program summary." },
        { label: "Where we work", href: "/what-we-do#where-we-work", description: "Regions and communities we support." },
        { label: "Stories", href: "/what-we-do#stories", description: "Field notes and community stories." },
      ],
    },
    {
      label: "Our impact",
      href: "/our-impact",
      items: [
        { label: "Outcome area 1", href: "/our-impact#outcome-area-1", description: "A placeholder outcome summary." },
        { label: "Outcome area 2", href: "/our-impact#outcome-area-2", description: "A second placeholder outcome summary." },
        { label: "Outcome area 3", href: "/our-impact#outcome-area-3", description: "A third placeholder outcome summary." },
        { label: "Evaluations", href: "/our-impact#evaluations", description: "Independent learning and review." },
        { label: "How we measure impact", href: "/our-impact#measurement", description: "Methods and indicators." },
        { label: "Insights and data", href: "/our-impact#insights", description: "Research, dashboards, and evidence." },
      ],
    },
    {
      label: "Donate",
      href: "/donate",
    },
  ] satisfies NavGroup[],
} as const;
