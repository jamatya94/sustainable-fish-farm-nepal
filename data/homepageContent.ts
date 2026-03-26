export const homepageContent = {
  header: {
    logo: {
      src: "/brand/logo-primary.png",
      alt: "Sustainable Fish Farm Nepal logo",
    },
    primaryCta: {
      label: "Donate now",
      href: "/donate",
    },
  },
  hero: {
    eyebrow: "Community-led climate resilience",
    title: "Building long-term systems that help communities thrive with dignity.",
    body:
      "This homepage is designed as a calm, credibility-first nonprofit presence, with local placeholder copy ready to be replaced by your real mission, program, and impact language.",
    image: {
      src: "/homepage/hero-video.mp4",
      alt: "Placeholder photography showing a community landscape.",
    },
    slabLabel: "Mission in practice",
    slabTitle: "We invest in the patient work of local partnership, public trust, and measurable results.",
    slabBody:
      "Use this slab for the organization's core promise and a short orienting paragraph that immediately explains why the work matters.",
    cta: {
      label: "Explore our work",
      href: "/what-we-do",
    },
  },
  proofIntro: {
    label: "Why supporters stay with us",
    title: "Proof points that feel accountable, not promotional.",
    body:
      "This section is structured to hold concise facts, milestones, and trust markers that reinforce institutional credibility without reading like marketing copy.",
  },
  proofCards: [
    {
      stat: "125+",
      title: "Community partners supported",
      body: "Placeholder for a verified partnership count with a short sentence about geography or duration.",
    },
    {
      stat: "18 years",
      title: "Of sustained field presence",
      body: "Placeholder for a concise history statement that communicates continuity and depth.",
    },
    {
      stat: "91%",
      title: "Programs renewed with local partners",
      body: "Placeholder for a retention, follow-through, or satisfaction metric tied to your operating model.",
    },
    {
      stat: "$4.8M",
      title: "Directed to program delivery",
      body: "Placeholder for a finance or stewardship fact that builds donor confidence.",
    },
  ],
  donationBanner: {
    title: "Support steady, community-rooted progress.",
    body:
      "This split banner is reserved for urgent giving language, campaign moments, or annual fund appeals. Keep it short and direct.",
    primaryCta: {
      label: "Make a gift",
      href: "/donate",
    },
    secondaryCta: {
      label: "Learn how donations work",
      href: "/about-us#reports",
    },
  },
  testimonial: {
    label: "From a local partner",
    quote:
      "They stayed long enough to understand our priorities first. That changed what progress looked like for us.",
    attribution: "Placeholder Name, Community Partner",
    context:
      "Use this feature to spotlight a human voice and pair it with a short contextual sentence about geography, program area, or length of partnership.",
    image: {
      src: "/placeholders/testimonial-partner.svg",
      alt: "Placeholder portrait of a community partner.",
    },
  },
  newsletter: {
    title: "Receive careful updates, not a crowded inbox.",
    body:
      "A restrained signup module for periodic insights, field notes, and campaign updates. No integration is wired yet.",
    placeholder: "Email address",
    buttonLabel: "Sign up",
  },
  campaign: {
    label: "Current campaign",
    title: "A full-bleed story moment for a major initiative.",
    body:
      "Use this section for an annual appeal, a program expansion, or a field-based update with a clear visual center of gravity.",
    image: {
      src: "/placeholders/campaign-field.svg",
      alt: "Placeholder campaign photography.",
    },
    cta: {
      label: "See the campaign",
      href: "/our-impact",
    },
  },
  inFocus: {
    label: "In focus",
    title: "Editorial space for context, not just headlines.",
    excerpt:
      "This block is intended for a thoughtful feature or chair's note. It should feel like a substantive piece of writing that explains what the organization is learning and where it is heading next.",
    date: "March 2026",
    cta: {
      label: "Read the full story",
      href: "/about-us",
    },
    thumbnails: [
      "/placeholders/thumb-1.svg",
      "/placeholders/thumb-2.svg",
      "/placeholders/thumb-3.svg",
    ],
  },
  insights: {
    label: "Insights and data",
    title: "Evidence can be human, visual, and precise at the same time.",
    body:
      "This section is built for research highlights, dashboards, evaluation summaries, or short analysis pieces that support the nonprofit's case for impact.",
    image: {
      src: "/placeholders/insights-data.svg",
      alt: "Placeholder image representing insights and data.",
    },
    cta: {
      label: "Review our impact",
      href: "/our-impact#insights",
    },
  },
  features: {
    label: "Features and stories",
    title: "Text-forward cards for reporting, learning, and field stories.",
    items: [
      {
        label: "Field update",
        title: "A placeholder story card for a program milestone",
        excerpt: "Short summary text for a substantive update, partnership story, or issue brief.",
        href: "/what-we-do#stories",
        date: "February 2026",
      },
      {
        label: "Research",
        title: "A placeholder article highlighting a new insight",
        excerpt: "Short summary text for a research note, evaluation brief, or learning agenda piece.",
        href: "/our-impact#insights",
        date: "January 2026",
      },
      {
        label: "Leadership note",
        title: "A placeholder perspective from the organization",
        excerpt: "Short summary text for a founder note, board message, or annual reflections piece.",
        href: "/about-us#organization",
        date: "December 2025",
      },
      {
        label: "Community story",
        title: "A placeholder profile centered on lived experience",
        excerpt: "Short summary text for a community voice, interview, or local partner spotlight.",
        href: "/what-we-do#stories",
        date: "November 2025",
      },
    ],
  },
  footer: {
    logoMark: {
      src: "/brand/logo-mark.png",
      alt: "Sustainable Fish Farm Nepal mark",
    },
    title: "Placeholder nonprofit brand",
    body:
      "Use this footer panel for a closing statement on mission, stewardship, and invitation. Real contact details, legal copy, and social links can be dropped in later.",
    image: {
      src: "/placeholders/footer-landscape.svg",
      alt: "Placeholder footer background image.",
    },
    newsletterTitle: "Stay connected to the work",
    newsletterBody: "Receive major updates, published reports, and stories from the field.",
    legal: "Placeholder nonprofit name. All rights reserved.",
    contactLines: ["123 Placeholder Avenue", "City, Country 00000", "info@example.org"],
  },
} as const;
