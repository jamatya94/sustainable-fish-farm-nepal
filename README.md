# Sustainable Fish Farming Initiative

A content-rich nonprofit website built with Next.js, React, TypeScript, and Tailwind CSS for a women-led social enterprise focused on sustainable aquaculture, food security, nutrition, and rural livelihoods across South Asia.

This project is structured as a modern App Router site with reusable editorial components, shared content/data modules, media-heavy storytelling, and clear donor- and partner-facing calls to action.

## Overview

The site presents the Sustainable Fish Farming Initiative (SFFI) through a polished homepage and supporting section pages. It is designed to:

- explain the initiative clearly and credibly
- showcase impact, stories, and evidence
- guide visitors toward donating, learning more, subscribing, or exploring the organization
- keep most site copy and navigation decisions centralized in data files rather than hardcoded across many components

The current implementation emphasizes:

- a strong editorial homepage
- responsive navigation with desktop dropdowns and mobile drawer behavior
- content-driven layouts powered by `data/homepageContent.ts`
- reusable image, quote, story, proof, and CTA components
- lightweight deployment without image optimization dependencies

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 3
- PostCSS + Autoprefixer
- Formspree for newsletter submission handling

## Key Features

- App Router-based page structure under `app/`
- Shared navigation model in `data/siteNavigation.ts`
- Shared homepage content model in `data/homepageContent.ts`
- Video/media-led hero and image-rich storytelling sections
- Animated impact stats and rotating testimonial feature
- Donation CTA surfaces throughout the experience
- Newsletter signup using `@formspree/react`
- Accessible details such as semantic headings and skip-to-content support

## Routes

The repository currently includes these route entry points:

- `/` - homepage
- `/about-us`
- `/what-we-do`
- `/our-impact`
- `/donate`
- `/careers`
- `/search`

Navigation data also defines anchored destinations used within dropdown menus and CTAs, such as:

- `/about-us#vision`
- `/about-us#model`
- `/about-us#organization`
- `/about-us#recognition`
- `/what-we-do#sustainable-aquaculture`
- `/what-we-do#women-led-enterprise`
- `/what-we-do#community-systems`
- `/what-we-do#where-we-work`
- `/what-we-do#stories`
- `/our-impact#food-security-and-nutrition`
- `/our-impact#livelihoods-and-enterprise`
- `/our-impact#womens-leadership-and-inclusion`
- `/our-impact#evaluations`
- `/our-impact#measurement`
- `/our-impact#insights`

## Content Architecture

One of the strongest parts of this codebase is that site content is largely organized as data.

### `data/homepageContent.ts`

This file is the main source of homepage copy and media references, including:

- header branding and primary CTA
- hero section copy and media
- proof cards
- impact stats
- testimonial slides
- campaign section
- insights/media section
- feature/story cards
- donation banner
- newsletter copy

If you want to revise messaging, swap media, change CTA labels, or update homepage stats, this is the first file to edit.

### `data/siteNavigation.ts`

This file drives the site's navigation structure, including:

- utility navigation links
- primary nav labels and destinations
- desktop dropdown group items
- section descriptions used in menus

Updating information architecture is much easier here than editing individual components.

### `content-spec.md`

This file acts as a project content specification and working source of truth for the brand voice, sitemap expectations, content model, and implementation guidance. It is especially useful when iterating with AI tools or handing the project to another contributor.

## Project Structure

```text
.
├── app/                     # Next.js App Router pages and global styles
├── components/              # Reusable UI components
│   ├── content/             # Storytelling, stats, proof, and editorial modules
│   ├── cta/                 # Buttons, donation, and newsletter components
│   ├── layout/              # Shared layout primitives
│   ├── navigation/          # Header, nav, dropdown, mobile drawer
│   └── placeholders/        # Branding/media placeholder helpers
├── data/                    # Shared site content and navigation models
├── public/                  # Brand assets, photography, logos, and video
├── styles/                  # Shared tokens/constants
├── content-spec.md          # Editorial/content implementation guide
├── tailwind.config.ts       # Tailwind theme extensions
├── next.config.ts           # Next.js config
└── package.json             # Scripts and dependencies
```

## Styling and Design Notes

The Tailwind theme has been customized with project-specific tokens for:

- brand greens and warm accent colors
- editorial spacing and width scales
- typography defaults
- shadows, borders, and subtle motion

Notable design choices in the current setup:

- `canvas` background tone for softer editorial presentation
- wide content containers for media storytelling
- unoptimized Next image output in `next.config.ts`
- a consistent content-first, campaign-style layout language

## Local Development

### Prerequisites

- Node.js 20+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - serve the production build
- `npm run lint` - run the configured lint command

## Newsletter / Formspree Integration

The newsletter signup UI uses Formspree through `@formspree/react`.

Current implementation details:

- the form is handled in `components/cta/NewsletterInputRow.tsx`
- the Formspree form ID is currently hardcoded as `xvzvwpag`
- the form includes hidden metadata fields for subject and source

If you move this project to a different Formspree endpoint, update the `useForm(...)` call in that component.

## Media and Assets

The site relies on local assets stored in `public/`, including:

- brand marks
- homepage photography
- hero video
- partner logos
- illustration-like SVG and PNG assets used in content sections

Because the site uses many local assets and `images.unoptimized = true`, it is especially friendly to simple deployments where you want predictable static asset behavior.

## Editing Guide

Common changes usually map to these files:

- homepage copy and image swaps: `data/homepageContent.ts`
- navigation changes: `data/siteNavigation.ts`
- global styling: `app/globals.css`, `tailwind.config.ts`, `styles/tokens.ts`
- homepage composition: `app/page.tsx`
- shared header/footer behavior: `components/navigation/`, `components/SiteFooter.tsx`
- CTA and form behavior: `components/cta/`

## Deployment Notes

This project is a good fit for platforms that support Next.js directly, including Vercel. Since local media is bundled in `public/` and images are configured as unoptimized, deployment is relatively straightforward.

Before deploying, it is worth verifying:

- newsletter submissions point to the correct Formspree form
- copy, stats, and testimonial content are final
- all internal anchors used by navigation and CTAs exist on their target pages
- large media files are acceptable for the target host and performance budget

## Repository Notes

At the moment, the repository appears to be under active development, with additional local changes beyond this README. If you are preparing a GitHub push, review the working tree before committing so you only include the changes you intend to publish.

## Future Improvements

Depending on where you want to take the project next, likely next steps include:

- adding a fuller About, Impact, and What We Do content system
- connecting CMS or headless content editing workflows
- adding analytics and conversion tracking
- improving image/video performance budgets
- adding automated testing for critical UI flows
- documenting deployment environment details in more depth

## License

No license file is currently included in this repository. Add one before open-sourcing or sharing the code publicly if you want usage terms to be explicit.
