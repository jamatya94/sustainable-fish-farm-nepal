# Project Agents Guide

This file is the working agreement for human and Codex iterations on the Sustainable Fish Farming Initiative site.

Its job is to keep future changes consistent, reviewable, and grounded in the way this repository is already structured.

## Project Snapshot

- Framework: Next.js 16 App Router
- UI: React 19 + TypeScript
- Styling: Tailwind CSS 3 + shared tokens in `app/globals.css` and `tailwind.config.ts`
- Site type: editorial, content-rich nonprofit website
- Media strategy: local assets in `public/` with `images.unoptimized = true`

## Primary Sources Of Truth

When making changes, prefer updating these files before inventing new patterns:

- `content-spec.md`
  - Brand voice, IA guidance, content constraints, and implementation notes.
- `data/homepageContent.ts`
  - Homepage copy, media references, CTAs, testimonial slides, impact stats, feature cards.
- `data/siteNavigation.ts`
  - Utility links, primary navigation labels, dropdown items, anchor destinations.
- `app/page.tsx`
  - Homepage composition and section order.
- `app/globals.css`
  - Shared design tokens and reusable typography/component utility classes.
- `tailwind.config.ts`
  - Color palette, widths, spacing, font stack, and theme extensions.
- `components/layout/ContentContainer.tsx`
  - Standard bounded layout container for most non-full-bleed sections.

## Default Working Rules

- Keep the site content-first, editorial, and credible.
- Prefer data-driven updates over hardcoded content inside components.
- Preserve existing reusable component patterns before creating new one-off sections.
- Do not invent claims, statistics, or organizational facts. If content is missing, leave a clear placeholder or request the source material.
- Keep headings semantic and easy to scan.
- Keep alt text specific and descriptive.
- Maintain mobile-first behavior and verify desktop layouts before considering a change complete.
- Use `"use client"` only when interactivity or browser APIs actually require it.
- Favor small, focused edits over broad refactors unless the task explicitly calls for restructuring.

## Homepage Composition Rules

The homepage is currently treated as an editorial sequence, not a generic marketing page. Preserve that mindset when iterating.

Current homepage flow:

1. Hero
2. Proof cards
3. Impact stats
4. Testimonial feature
5. Campaign section
6. Insights/data section
7. Features and stories grid
8. Donation banner
9. Newsletter signup

If a future change alters this order, document the reason in the task summary or commit message.

## Layout And Styling Conventions

- Use `ContentContainer` for standard bounded sections unless the section intentionally owns its own full-width gutters.
- If a section breaks out of `ContentContainer`, use the existing gutter classes already established in the codebase:
  - `px-gutter-mobile`
  - `md:px-gutter-tablet`
  - `lg:px-6`
  - `xl:px-8`
  - `2xl:px-10`
- Reuse existing width scales before introducing new ones:
  - `max-w-layout`
  - `max-w-wide`
  - `max-w-content`
  - `max-w-reading`
- Reuse shared text styles from `app/globals.css` where possible:
  - `hero-title`
  - `hero-body`
  - `section-title`
  - `section-intro`
  - `card-title`
  - `card-body`
  - `article-label`
  - `article-title`
  - `article-excerpt`
  - `quote-text`
- Preserve the established palette and tone:
  - warm canvas background
  - strong green brand colors
  - restrained orange accent usage
  - subtle borders and editorial spacing
- Avoid adding new arbitrary colors, spacing systems, or font patterns unless the change clearly belongs in shared tokens.

## Content Modeling Guidance

- Homepage content belongs in `data/homepageContent.ts` unless there is a strong reason to split it.
- Navigation changes belong in `data/siteNavigation.ts`.
- Prefer structured objects over scattered inline strings.
- If a new section has repeated items, define them as arrays in a data module rather than hardcoding multiple copies of the same JSX pattern.
- If article or report content grows, create a dedicated content/data module rather than turning page files into large text dumps.

## Asset And Media Rules

- Store site assets in `public/` under a folder that matches their use.
- Prefer descriptive, stable filenames for new assets.
- Every image should have meaningful alt text at the point where it is referenced.
- Keep captions, labels, and supporting metadata near the content model when possible.
- For images extracted from Word documents or other source files:
  - extract the originals first
  - rename them clearly
  - place them in a section-appropriate folder under `public/`
  - optimize oversized images before shipping if practical
  - map them through the relevant content/data file instead of scattering raw paths everywhere

## Accessibility And UX Guardrails

- Maintain visible focus styles.
- Preserve semantic heading order.
- Use real buttons for UI actions and real links for navigation.
- Honor reduced motion when adding animations.
- Keep text contrast strong, especially on brand green backgrounds.
- Do not rely on motion alone to communicate state.

## Git And Iteration Workflow

- Local checkpoint commits are encouraged.
- Keep commits scoped to a feature or clear slice of work.
- It is acceptable to leave unrelated experiments, docs, or unwired assets out of a checkpoint commit.
- Do not commit generated artifacts.

Files that should generally stay out of commits unless there is a specific reason:

- `.next/`
- `node_modules/`
- `dist/`
- `*.log`
- `tsconfig.tsbuildinfo`

Before pushing to GitHub, aim to:

1. inspect the affected pages in `npm run dev`
2. run a production check with `npm run build`
3. confirm only intentional files are staged

## Preferred Change Strategy

When asked to update content or layout, use this order of operations:

1. Check whether the change belongs in a data file first.
2. Reuse an existing component if it already expresses the needed pattern.
3. Only create a new component when the pattern is reusable or materially clearer.
4. Keep visual changes aligned with the editorial design language already present.
5. Leave a concise explanation in the task summary when a structural decision is non-obvious.

## Review Checklist

Before considering an iteration done, quickly verify:

- Is the change in the right source-of-truth file?
- Does the copy match the voice in `content-spec.md`?
- Does it work on mobile and desktop?
- Are alt text, headings, and link targets correct?
- Did we accidentally stage generated files or unrelated experiments?
- If homepage sections changed, did we inspect `/` locally?

## Notes For Future Article Work

- If article pages are added, prefer a repeatable content model over large hand-written page JSX blocks.
- Group article images in a dedicated folder under `public/`.
- Keep captions, publication metadata, and related links in structured data where possible.
- If source material comes from Word documents, preserve extracted originals until the final web-ready versions are approved.

## Decision Tie-Breakers

If there is ambiguity, prefer:

1. existing repo patterns over new abstractions
2. content/data updates over JSX hardcoding
3. accessibility and clarity over visual novelty
4. smaller reviewable commits over large mixed commits
5. documented placeholders over invented facts
