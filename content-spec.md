# Sustainable Fish Farms Initiative — Content Spec
_Last updated: March 30, 2026_

## Purpose of this file
This document is the **single source of truth for site content**. It is designed so Codex can replace placeholders, preserve the existing wireframe, and avoid inventing structure or copy.

It is based on the current homepage and navigation-related code reviewed from:

- `app/page.tsx`
- `data/homepageContent.ts`
- `components/navigation/SiteHeader.tsx`
- `components/navigation/PrimaryNav.tsx`

Where the code clearly confirms a route or content model, this spec treats it as **confirmed**. Where the code only implies a structure, this spec labels it as **inferred** or **to verify**.

---

## 1. Project Overview

### Project name
**Sustainable Fish Farms Initiative**

### What the organization/site is about
A mission-driven initiative focused on sustainable fish farming, food security, healthy aquatic ecosystems, community resilience, and practical aquaculture solutions.

### Primary purpose of the website
The website should:

- explain the initiative clearly and credibly
- build trust with donors, partners, and communities
- present the organization’s approach and focus areas
- demonstrate impact through stories, reports, and insights
- create action pathways for donating, partnering, subscribing, and contacting the organization

### Core audience groups
- Donors and philanthropic supporters
- Institutional and implementation partners
- Communities and practitioners
- Researchers and policy stakeholders
- Journalists and general public
- Prospective supporters seeking updates or ways to help

---

## 2. Content and Voice Principles

### Brand voice
Use a tone that is:

- credible
- warm
- practical
- globally aware
- optimistic without sounding promotional
- direct and human, not bureaucratic

### Writing rules
- Prefer plain English over sector jargon.
- If technical aquaculture language is necessary, explain it.
- Keep headings impact-oriented and easy to scan.
- Keep paragraphs short.
- Avoid inflated claims that cannot be supported.
- Use specific outcomes, examples, and evidence where possible.
- Write for a broad audience first, specialists second.

### Messaging priorities
Content should consistently reinforce:

1. why sustainable fish farming matters
2. who the initiative serves
3. what the initiative does in practice
4. how impact is measured
5. how visitors can engage or support

---

## 3. Confirmed and Inferred Sitemap

## 3.1 Confirmed routes from homepage content
These routes are explicitly referenced in `homepageContent.ts` and should be treated as real or intended pages:

- `/`
- `/donate`
- `/what-we-do`
- `/our-impact`
- `/about-us`

## 3.2 Confirmed anchor destinations referenced in content
These anchors are explicitly referenced and likely represent sections that must exist on the destination pages:

- `/about-us#reports`
- `/about-us#organization`
- `/our-impact#insights`
- `/what-we-do#stories`

## 3.3 Navigation reality check
`PrimaryNav.tsx` confirms:

- primary navigation is driven by a shared `siteNavigation.primary` data source
- a **Donate** item exists as a distinct CTA
- non-donate navigation items are rendered as grouped desktop dropdown items

### Important note
The exact top-level navigation labels and dropdown groups are **not fully confirmed** until `data/siteNavigation.ts` or the dropdown config is reviewed.

## 3.4 Working sitemap for content planning
Use this as the working IA unless code review later confirms otherwise:

- Home
- About Us
- What We Do
- Our Impact
- Donate

### Secondary / section-level content clusters implied by code
- Reports
- Organization
- Stories
- Insights
- Newsletter / Subscribe
- Contact / Footer contact information

---

## 4. Build Instructions for Codex

Codex should follow these rules when implementing content from this spec:

- Preserve the current homepage section order unless this spec explicitly changes it.
- Replace placeholders cleanly using the content model already present in `homepageContent.ts`.
- Do not invent new top-level pages unless explicitly instructed.
- Do not rewrite the IA on your own.
- Preserve reusable component patterns.
- For proof cards, remove stat-based content and preserve an illustration/icon/image + title + body structure. If the current code still uses { stat, title, body }, reconfigure the data model and related components to the desired illustration-first direction.
- Keep all headings semantic and accessible.
- Maintain mobile-first behavior.
- Keep CTA language concise and action-oriented.
- Preserve internal links unless they are explicitly revised in this document.
- If content is missing, leave a clearly labeled placeholder rather than fabricating claims.

---

## 5. Homepage Content Model

This section mirrors the current homepage data model and should be used for content entry.

---

## 5.1 Header

### Purpose
Give users quick brand recognition and a persistent conversion path.

### Fields to fill
- Site/initiative name
- Optional short brand descriptor if needed
- Primary CTA label
- Primary CTA destination

### Current structural notes
- Header branding is content-driven.
- Donate is handled as a distinct CTA in navigation.
- Desktop nav uses dropdown groups.

### Content guidance
- Keep CTA short, e.g. “Donate,” “Support the Initiative,” or “Get Involved.”
- Brand expression should be concise and legible.
- Do not overload header with descriptive copy.

### Fill-in block
```md
Header brand name: Sustainable Fish Farming Initiative
Header short descriptor: 
Note: Header currently uses a logo image placeholder. Keep header logo-based unless explicitly redesigned to show text.
Header primary CTA label: Donate
Header primary CTA href: /donate
```

---

## 5.2 Hero

### Purpose
State the mission immediately and tell visitors why the initiative matters.

### Current fields implied by code
- eyebrow
- title
- body
- hero media
- slab label
- slab title
- slab body
- primary CTA

### Content guidance
- Eyebrow should be brief and thematic.
- Title should express the mission or outcome, not a vague slogan.
- Body should explain what the initiative does, for whom, and why it matters.
- Slab label should be brief and functional.
- Slab title should carry the main message inside the supporting callout.
- Slab body should be one short supporting sentence, not a second full hero paragraph.
- Hero CTA should direct to the strongest next step.

### Fill-in block
```md
Hero eyebrow: Women-led rural transformation in South Asia
Hero title: Transforming rural livelihoods through sustainable aquaculture, women’s leadership, and community-rooted innovation.
Hero body: SFFI advances food security, nutrition, and rural livelihoods across South Asia through sustainable aquaculture, women-led enterprise, and locally led solutions.
Hero slab label: Mission in practice
Hero slab title: A women-led social enterprise advancing food security, nutrition, and rural livelihoods across South Asia.
Hero slab body: Development rooted in dignity and shaped by possibility, where rural communities not only survive, but thrive.
Hero primary CTA label: Explore Our Work
Hero primary CTA href: /what-we-do
Implementation note: Widen the hero across screen sizes while preserving legibility and spacing.

Hero media:
- File name: hero-video.mp4
- File path: /homepage/hero-video.mp4
- Alt text: Video showing rural fish farming landscapes and community life.
- Source: Internal
- Notes: Repo file location is /public/homepage/hero-video.mp4. Use /homepage/hero-video.mp4 as the runtime path in code. Preserve current hero-video treatment unless a static image is intentionally substituted.
```

---

## 5.3 Proof Intro

### Purpose
Transition from aspiration to evidence.

### Current fields
- section label
- title
- body

### Content guidance
This section should frame the organization’s accountability, practical model, or evidence base.

### Fill-in block
```md
Proof intro label: Why supporters stay with us
Proof intro title: Proof points rooted in credibility, resilience, and locally led transformation.
Proof intro body: These cards highlight the principles that shape SFFI’s work: producer-centered progress, women’s leadership, community ownership, and long-term resilience.
```

---

## 5.4 Proof Cards

### Purpose
Present trust-building principles through illustration-first cards rather than statistics.

### Current structure
Four proof cards, each with:
- illustration or icon
- short title
- short body

### Content guidance
Use one clear idea per card. These cards should communicate core principles, not statistics. Prefer simple illustrated icons or symbolic imagery instead of numbers. Keep titles short and declarative. Keep bodies to one concise sentence with no repetition of the title.

Design note: These proof cards should visually follow an illustration-first style similar to the attached reference, with the image carrying the emphasis and the copy staying brief.

### Fill-in template
```md
Proof card 1
- Illustration/icon concept: Farmer carrying harvesting net or tools
- File name:
- File path:
- Alt text:
- Source:
- Notes:
- Title: Food security begins with producers
- Body: SFFI strengthens fish farming households so producers can grow more food, earn more income, and support healthier families.

Proof card 2
- Illustration/icon concept: Woman fish farmer or women-led enterprise symbol
- File name:
- File path:
- Alt text:
- Source:
- Notes:
- Title: Inclusive growth begins with women
- Body: SFFI invests in women’s leadership, enterprise, and decision-making as drivers of lasting economic progress.

Proof card 3
- Illustration/icon concept: Community partnership or local network symbol
- File name:
- File path:
- Alt text:
- Source:
- Notes:
- Title: Local ownership drives lasting results
- Body: SFFI works through trusted local partnerships so communities can shape and sustain progress on their own terms.

Proof card 4
- Illustration/icon concept: Fish, pond, harvest basket, or resilience/future symbol
- File name:
- File path:
- Alt text:
- Source:
- Notes:
- Title: Pathways beyond hunger and poverty
- Body: SFFI advances practical solutions that improve nutrition, livelihoods, and long-term rural resilience.
```

---

## 5.5 Donation Banner

### Purpose
Create a clear support action without interrupting trust.

### Current fields
- title
- body
- primary CTA
- secondary CTA

### Content guidance
This should connect support to tangible outcomes. Avoid guilt-heavy language.

### Fill-in block
```md
Donation banner title: Support a bold, community-rooted response to hunger, poverty, and malnutrition.
Donation banner body: Your support helps rural communities access the training, tools, enterprise support, and locally led systems they need to strengthen food security, improve nutrition, expand livelihoods, and build resilience through sustainable aquaculture.
Donation primary CTA label: Make a gift
Donation primary CTA href: /donate
Implementation note: In the donate section, replace the placeholder text `A concise stewardship note or campaign promise belongs here.` with `Every contribution supports practical, measurable, community-based progress rooted in dignity, inclusion, and long-term opportunity.`
Donation secondary CTA label: Learn how donations work
Donation secondary CTA href: /about-us#reports
```

---

## 5.6 Testimonial

### Purpose
Add human credibility and lived experience.

### Current fields
- label
- quote
- attribution
- context
- image

### Content guidance
Use a real voice from a beneficiary, partner, practitioner, or field leader. Keep the quote natural, specific, and believable.

### Fill-in block
```md
Testimonial label: From a local partner
Testimonial quote: They did not begin with assumptions. They began with our realities, our priorities, and our potential. That is what made the work meaningful. It strengthened livelihoods, improved food security, and gave women in our community a greater role in shaping the future.
Testimonial attribution name: Community Partner, South Asia
Testimonial attribution role: TBD
Testimonial attribution organization/community: TBD
Testimonial context line: SFFI’s work is grounded in the belief that communities are not beneficiaries alone, but leaders of lasting transformation.

Testimonial image:
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: Use a documentary-style portrait or authentic field image tied to the speaker context.
```

---

## 5.7 Newsletter Signup

### Purpose
Convert interested visitors who are not ready to donate or contact.

### Current fields
- title
- body
- input placeholder
- button label

### Content guidance
Explain what subscribers will receive and why it is worth signing up.

### Fill-in block
```md
Newsletter title: Receive thoughtful updates on food security, rural livelihoods, and women-led development.
Newsletter body: Sign up for field notes, campaign updates, insights, and reflections on how community-rooted social enterprise can help build a more food-secure, inclusive, and resilient future across South Asia.
Newsletter input placeholder: Email address
Newsletter button label: Sign up
Newsletter privacy/helper note: Add final privacy language only if the component supports helper text.
```

---

## 5.8 Campaign / Featured Initiative Block

### Purpose
Spotlight a priority campaign, program, or field initiative.

### Current fields
- label
- title
- body
- image
- CTA

### Content guidance
This should feel timely and concrete. It can feature a specific geography, intervention, campaign, or urgent funding opportunity.

### Fill-in block
```md
Campaign label: Current campaign
Campaign title: Expanding sustainable aquaculture as a pathway to food security, better nutrition, and rural prosperity.
Campaign body: SFFI is growing its work to reach more farming communities with the training, enterprise support, and local systems needed to turn sustainable fish farming into a lasting source of food security, stronger incomes, improved nutrition, and household resilience.
Campaign supporting note: This campaign is about scaling what works: practical investment in farmers, women-led livelihoods, community ownership, and locally driven pathways beyond hunger and poverty.
Campaign CTA label: See the campaign
Campaign CTA href: /our-impact

Campaign image:
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: Use an image that reflects active fish farming, training, or community participation.
```

---

## 5.9 In Focus Feature

### Purpose
Give editorial depth to one featured story, report, or spotlight item.

### Current fields
- label
- title
- excerpt
- date
- CTA
- thumbnails

### Content guidance
Use this for a major story, featured report, milestone, or editorial highlight.

### Fill-in block
```md
In Focus label: In Focus
In Focus title: Why women-led social enterprise matters for the future of rural transformation in South Asia.
In Focus excerpt: Rural women are central to food production, household well-being, and local economies, yet they are too often excluded from finance, enterprise pathways, and decision-making. By linking sustainable aquaculture with women’s leadership and community partnership, SFFI helps build stronger food systems, more inclusive livelihoods, and more resilient rural futures.
In Focus date: March 2026
In Focus CTA label: Read more
In Focus CTA href: /about-us
Implementation note: Keep this excerpt to 2–3 sentences on the homepage.

Thumbnail 1:
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: TBD

Thumbnail 2:
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: TBD

Thumbnail 3:
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: TBD
```

---

## 5.10 Insights Block

### Purpose
Surface thought leadership, learning, research, or analysis.

### Current fields
- label
- title
- body
- image
- CTA

### Content guidance
Use this section to signal rigor, transparency, and learning. Good destinations include reports, articles, insights hubs, or impact analysis.

### Fill-in block
```md
Insights label: Insights and data
Insights title: Evidence can be human, visual, and precise at the same time.
Insights body: SFFI believes development should be measurable, inclusive, and grounded in lived experience. By combining field-based learning, farmer partnership, and practical innovation, it shows how investments in livelihoods, nutrition, women’s leadership, and local systems can generate meaningful and lasting outcomes.
Insights CTA label: Review our impact
Insights CTA href: /our-impact#insights

Insights image:
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: Use a visual that supports reporting, field learning, or credible evidence-building.
```

---

## 5.11 Stories / Reports / Press Grid

### Purpose
Offer browseable content items that deepen engagement and distribute proof across formats. 

### Current section fields
- section label
- section title
- section body

### Current card fields
Each card appears to include:
- label
- title
- excerpt
- href
- date

### Content guidance
Use a mix of:
- field stories
- case studies
- reports
- announcements
- press mentions
- learning pieces

### Fill-in block
```md
Story grid section label: Features and stories
Story grid section title: Stories, learning, and field insight from a movement building a future beyond hunger.
Story grid section body: Explore the people, lessons, and local realities shaping SFFI’s work — from field updates and research notes to reflections on women’s leadership, food systems, inclusive livelihoods, and rural transformation in South Asia.

Card 1
- Label: Field update
- Title: How sustainable aquaculture is helping communities strengthen food security and livelihoods
- Excerpt: Through training, enterprise support, and community partnership, SFFI is helping farming households improve food access, build more secure incomes, and strengthen resilience over time.
- Href: /what-we-do#stories
- Date: February 2026

Card 2
- Label: Research
- Title: Why nutrition-sensitive livelihoods matter in the fight against rural poverty
- Excerpt: When communities have access to practical enterprise pathways that also strengthen local food systems, they are better positioned to reduce vulnerability, improve nutrition, and build lasting prosperity.
- Href: /our-impact#insights
- Date: January 2026

Card 3
- Label: Leadership note
- Title: Women’s economic leadership is central to ending hunger and building resilient communities
- Excerpt: SFFI’s work is grounded in a simple proposition: when women gain access to productive opportunity, the returns are economic, nutritional, social, and intergenerational.
- Href: /about-us#organization
- Date: December 2025

Card 4
- Label: Community story
- Title: From vulnerability to resilience
- Excerpt: Behind every rural household is a story of labor, aspiration, and untapped potential. With the right support, communities can build futures defined not by deprivation, but by dignity, capability, and opportunity.
- Href: /what-we-do#stories
- Date: November 2025
```

---

## 5.12 Footer

### Purpose
Close with trust, orientation, subscription support, and contact/legal information.

### Current fields implied by content model
- logo mark
- footer title
- footer body
- image
- newsletter title/body
- legal copy
- contact lines

### Content guidance
Footer should reinforce credibility and make contact details easy to find. Legal copy must be final and accurate.

### Fill-in block
```md
Footer title: TBD
Footer body: TBD

Footer image:
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: TBD

Footer newsletter title: TBD
Footer newsletter body: TBD

Footer contact line 1: TBD
Footer contact line 2: TBD
Footer contact line 3: TBD

Footer legal copy: TBD
Footer copyright line: TBD
```

---

## 6. Placeholder-to-Content Mapping

Use this section to map each content field to final copy. Codex can use this as a direct replacement sheet.

```md
[HEADER_BRAND_NAME] -> Sustainable Fish Farming Initiative
[HEADER_CTA_LABEL] -> Donate
[HEADER_CTA_HREF] -> /donate

[HERO_EYEBROW] -> Women-led rural transformation in South Asia
[HERO_TITLE] -> Transforming rural livelihoods through sustainable aquaculture, women’s leadership, and community-rooted innovation.
[HERO_BODY] -> SFFI advances food security, nutrition, and rural livelihoods across South Asia through sustainable aquaculture, women-led enterprise, and locally led solutions.
[HERO_SLAB_LABEL] -> Mission in practice
[HERO_SLAB_TITLE] -> A women-led social enterprise advancing food security, nutrition, and rural livelihoods across South Asia.
[HERO_SLAB_BODY] -> Development rooted in dignity and shaped by possibility, where rural communities not only survive, but thrive.
[HERO_CTA_LABEL] -> Explore Our Work
[HERO_CTA_HREF] -> /what-we-do

[PROOF_INTRO_LABEL] -> Why supporters stay with us
[PROOF_INTRO_TITLE] -> Proof points rooted in credibility, resilience, and locally led transformation.
[PROOF_INTRO_BODY] -> These cards highlight the principles that shape SFFI’s work: producer-centered progress, women’s leadership, community ownership, and long-term resilience.

[PROOF_CARD_1_ILLUSTRATION] -> illustration/icon/image
[PROOF_CARD_1_TITLE] -> Food security begins with producers
[PROOF_CARD_1_BODY] -> SFFI strengthens fish farming households so producers can grow more food, earn more income, and support healthier families.

[PROOF_CARD_2_ILLUSTRATION] -> illustration/icon/image
[PROOF_CARD_2_TITLE] -> Inclusive growth begins with women
[PROOF_CARD_2_BODY] -> SFFI invests in women’s leadership, enterprise, and decision-making as drivers of lasting economic progress.

[PROOF_CARD_3_ILLUSTRATION] -> illustration/icon/image
[PROOF_CARD_3_TITLE] -> Local ownership drives lasting results
[PROOF_CARD_3_BODY] -> SFFI works through trusted local partnerships so communities can shape and sustain progress on their own terms.

[PROOF_CARD_4_ILLUSTRATION] -> illustration/icon/image
[PROOF_CARD_4_TITLE] -> Pathways beyond hunger and poverty
[PROOF_CARD_4_BODY] -> SFFI advances practical solutions that improve nutrition, livelihoods, and long-term rural resilience.

[DONATION_TITLE] -> Support a bold, community-rooted response to hunger, poverty, and malnutrition.
[DONATION_BODY] -> Your support helps rural communities access the training, tools, enterprise support, and locally led systems they need to strengthen food security, improve nutrition, expand livelihoods, and build resilience through sustainable aquaculture.
[DONATION_PRIMARY_CTA_LABEL] -> Make a gift
[DONATION_PRIMARY_CTA_HREF] -> /donate
[DONATION_SECONDARY_CTA_LABEL] -> Learn how donations work
[DONATION_SECONDARY_CTA_HREF] -> /about-us#reports
[IMPLEMENTATION_NOTE_DONATE_PLACEHOLDER] -> Every contribution supports practical, measurable, community-based progress rooted in dignity, inclusion, and long-term opportunity.

[TESTIMONIAL_LABEL] -> From a local partner
[TESTIMONIAL_QUOTE] -> They did not begin with assumptions. They began with our realities, our priorities, and our potential. That is what made the work meaningful. It strengthened livelihoods, improved food security, and gave women in our community a greater role in shaping the future.
[TESTIMONIAL_ATTRIBUTION] -> Community Partner, South Asia
[TESTIMONIAL_CONTEXT] -> SFFI’s work is grounded in the belief that communities are not beneficiaries alone, but leaders of lasting transformation.

[NEWSLETTER_TITLE] -> Receive thoughtful updates on food security, rural livelihoods, and women-led development.
[NEWSLETTER_BODY] -> Sign up for field notes, campaign updates, insights, and reflections on how community-rooted social enterprise can help build a more food-secure, inclusive, and resilient future across South Asia.
[NEWSLETTER_INPUT_PLACEHOLDER] -> Email address
[NEWSLETTER_BUTTON_LABEL] -> Sign up

[CAMPAIGN_LABEL] -> Current campaign
[CAMPAIGN_TITLE] -> Expanding sustainable aquaculture as a pathway to food security, better nutrition, and rural prosperity.
[CAMPAIGN_BODY] -> SFFI is growing its work to reach more farming communities with the training, enterprise support, and local systems needed to turn sustainable fish farming into a lasting source of food security, stronger incomes, improved nutrition, and household resilience.
[CAMPAIGN_SUPPORTING_NOTE] -> This campaign is about scaling what works: practical investment in farmers, women-led livelihoods, community ownership, and locally driven pathways beyond hunger and poverty.
[CAMPAIGN_CTA_LABEL] -> See the campaign
[CAMPAIGN_CTA_HREF] -> /our-impact

[IN_FOCUS_LABEL] -> In Focus
[IN_FOCUS_TITLE] -> Why women-led social enterprise matters for the future of rural transformation in South Asia.
[IN_FOCUS_EXCERPT] -> Rural women are central to food production, household well-being, and local economies, yet they are too often excluded from finance, enterprise pathways, and decision-making. By linking sustainable aquaculture with women’s leadership and community partnership, SFFI helps build stronger food systems, more inclusive livelihoods, and more resilient rural futures.
[IN_FOCUS_DATE] -> March 2026
[IN_FOCUS_CTA_LABEL] -> Read more
[IN_FOCUS_CTA_HREF] -> /about-us

[INSIGHTS_LABEL] -> Insights and data
[INSIGHTS_TITLE] -> Evidence can be human, visual, and precise at the same time.
[INSIGHTS_BODY] -> SFFI believes development should be measurable, inclusive, and grounded in lived experience. By combining field-based learning, farmer partnership, and practical innovation, it shows how investments in livelihoods, nutrition, women’s leadership, and local systems can generate meaningful and lasting outcomes.
[INSIGHTS_CTA_LABEL] -> Review our impact
[INSIGHTS_CTA_HREF] -> /our-impact#insights

[STORY_GRID_LABEL] -> Features and stories
[STORY_GRID_TITLE] -> Stories, learning, and field insight from a movement building a future beyond hunger.
[STORY_GRID_BODY] -> Explore the people, lessons, and local realities shaping SFFI’s work — from field updates and research notes to reflections on women’s leadership, food systems, inclusive livelihoods, and rural transformation in South Asia.

[STORY_CARD_1_LABEL] -> Field update
[STORY_CARD_1_TITLE] -> How sustainable aquaculture is helping communities strengthen food security and livelihoods
[STORY_CARD_1_EXCERPT] -> Through training, enterprise support, and community partnership, SFFI is helping farming households improve food access, build more secure incomes, and strengthen resilience over time.
[STORY_CARD_1_HREF] -> /what-we-do#stories
[STORY_CARD_1_DATE] -> February 2026

[STORY_CARD_2_LABEL] -> Research
[STORY_CARD_2_TITLE] -> Why nutrition-sensitive livelihoods matter in the fight against rural poverty
[STORY_CARD_2_EXCERPT] -> When communities have access to practical enterprise pathways that also strengthen local food systems, they are better positioned to reduce vulnerability, improve nutrition, and build lasting prosperity.
[STORY_CARD_2_HREF] -> /our-impact#insights
[STORY_CARD_2_DATE] -> January 2026

[STORY_CARD_3_LABEL] -> Leadership note
[STORY_CARD_3_TITLE] -> Women’s economic leadership is central to ending hunger and building resilient communities
[STORY_CARD_3_EXCERPT] -> SFFI’s work is grounded in a simple proposition: when women gain access to productive opportunity, the returns are economic, nutritional, social, and intergenerational.
[STORY_CARD_3_HREF] -> /about-us#organization
[STORY_CARD_3_DATE] -> December 2025

[STORY_CARD_4_LABEL] -> Community story
[STORY_CARD_4_TITLE] -> From vulnerability to resilience
[STORY_CARD_4_EXCERPT] -> Behind every rural household is a story of labor, aspiration, and untapped potential. With the right support, communities can build futures defined not by deprivation, but by dignity, capability, and opportunity.
[STORY_CARD_4_HREF] -> /what-we-do#stories
[STORY_CARD_4_DATE] -> November 2025

[FOOTER_TITLE] -> TBD
[FOOTER_BODY] -> TBD
[FOOTER_NEWSLETTER_TITLE] -> TBD
[FOOTER_NEWSLETTER_BODY] -> TBD
[FOOTER_LEGAL_COPY] -> TBD
[FOOTER_COPYRIGHT] -> TBD
```

---

## 7. Asset Inventory and Replacement Notes

Track every media placeholder here.

### Homepage media checklist
```md
Hero media:
- Current placeholder: yes
- File name: hero-video.mp4
- File path: /homepage/hero-video.mp4
- Alt text: Video showing rural fish farming landscapes and community life.
- Source: Internal
- Notes: Repo file location is /public/homepage/hero-video.mp4. Use /homepage/hero-video.mp4 as the runtime path in code. Preserve current hero-video treatment unless a static image is intentionally substituted.

Testimonial image:
- Current placeholder: TBD
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: TBD

Campaign image:
- Current placeholder: TBD
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: TBD

In Focus thumbnails:
- Thumb 1 file name: TBD
- Thumb 1 file path: TBD
- Thumb 1 alt text: TBD
- Thumb 1 source: TBD
- Thumb 1 notes: TBD
- Thumb 2 file name: TBD
- Thumb 2 file path: TBD
- Thumb 2 alt text: TBD
- Thumb 2 source: TBD
- Thumb 2 notes: TBD
- Thumb 3 file name: TBD
- Thumb 3 file path: TBD
- Thumb 3 alt text: TBD
- Thumb 3 source: TBD
- Thumb 3 notes: TBD

Insights image:
- Current placeholder: TBD
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: TBD

Footer image:
- Current placeholder: TBD
- File name: TBD
- File path: TBD
- Alt text: TBD
- Source: TBD
- Notes: TBD
```

### Media rules
- Use documentary-style, credible visuals over generic stock imagery.
- Prioritize real field, community, farm, training, and ecosystem imagery.
- Avoid visuals that feel extractive, staged, or overly polished.
- Every image must have meaningful alt text.
- Prefer exact repo paths that Codex can implement directly.
- If the asset already exists in `public`, use the deploy path format such as `/images/home/hero.jpg`.
- If the asset is not ready yet, write `TBD` for file name and file path rather than guessing.
- Use `Source` to indicate whether the asset is internal, licensed, user-provided, placeholder, or still to be sourced.
- Use `Notes` for crop guidance, placement, orientation, or implementation reminders.

---

## 8. Page-Level Content Requirements

These are based on confirmed routes plus homepage link patterns.

## 8.1 About Us

### Purpose
Explain the initiative’s mission, identity, model, and organizational credibility.

### Sections likely needed
- Mission / Why we exist
- What makes the initiative distinct
- Organization / Leadership / Partners
- Reports
- Contact or support pathway

### Confirmed / implied anchors
- `#organization`
- `#reports`

### Fill-in template
```md
About Us hero title:
About Us hero body:

Mission section title:
Mission section body:

Organization section title:
Organization section body:

Reports section title:
Reports section body:

About Us primary CTA label:
About Us primary CTA href:
```

---

## 8.2 What We Do

### Purpose
Show the initiative’s programs, interventions, methods, and field approach.

### Sections likely needed
- Focus areas
- Program model
- Stories / case studies
- Geographic or thematic priorities

### Confirmed / implied anchor
- `#stories`

### Fill-in template
```md
What We Do hero title:
What We Do hero body:

Focus area 1:
Focus area 2:
Focus area 3:

Stories section title:
Stories section intro:

What We Do primary CTA label:
What We Do primary CTA href:
```

---

## 8.3 Our Impact

### Purpose
Demonstrate evidence, outcomes, measurement, and learning.

### Sections likely needed
- Key metrics
- Impact stories
- Insights / reporting
- Research or evidence framing

### Confirmed / implied anchor
- `#insights`

### Fill-in template
```md
Our Impact hero title:
Our Impact hero body:

Key metrics intro:
Metric 1:
Metric 2:
Metric 3:
Metric 4:

Insights section title:
Insights section intro:

Our Impact primary CTA label:
Our Impact primary CTA href:
```

---

## 8.4 Donate

### Purpose
Convert supporter intent into action with clarity and trust.

### Sections likely needed
- Why donate
- How funds are used
- Trust / accountability indicators
- Primary donation CTA
- Alternative ways to support

### Fill-in template
```md
Donate hero title:
Donate hero body:

Why give section title:
Why give section body:

Use of funds section title:
Use of funds section body:

Trust section title:
Trust section body:

Donate primary CTA label:
Donate primary CTA href:
Secondary support option label:
Secondary support option href:
```

---

## 9. CTA and Link Map

This section should be filled before final implementation so Codex does not guess link destinations.

```md
Header primary CTA -> /donate
Hero primary CTA -> /what-we-do
Donation primary CTA -> /donate
Donation secondary CTA -> /about-us#reports
Campaign CTA -> /our-impact
In Focus CTA -> /about-us
Insights CTA -> /our-impact#insights
Footer newsletter action -> TBD
Footer contact action -> TBD
```

---

## 10. SEO and Metadata Notes

### Homepage
```md
SEO title:
Meta description:
Open Graph title:
Open Graph description:
Social share image:
```

### About Us
```md
SEO title:
Meta description:
```

### What We Do
```md
SEO title:
Meta description:
```

### Our Impact
```md
SEO title:
Meta description:
```

### Donate
```md
SEO title:
Meta description:
```

---

## 11. Open Questions / To Verify

These items should be verified against the codebase before final build:

1. Exact contents of `siteNavigation.primary`
2. Exact desktop dropdown labels and group names
3. Mobile navigation parity with desktop
4. Footer link structure and legal pages
5. Whether `/about-us`, `/what-we-do`, `/our-impact`, and `/donate` already exist as route files
6. Whether stories, reports, and insights are static sections or part of a shared content system
7. Final newsletter integration behavior
8. Final contact information and legal language
9. Final donation flow destination
10. Whether there are additional utility pages not yet visible from homepage content

---

## 12. Recommended Next Files to Review

For a stronger final pass, review these next:

1. `data/siteNavigation.ts`
2. `components/navigation/MobileNavDrawer.tsx`
3. `components/navigation/SiteFooter.tsx`
4. `app/about-us/page.tsx`
5. `app/what-we-do/page.tsx`
6. `app/our-impact/page.tsx`
7. `app/donate/page.tsx`

These files would let the sitemap and page requirements move from inferred to fully confirmed.
