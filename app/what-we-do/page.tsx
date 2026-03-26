import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";

const sections = [
  "Program area 1",
  "Program area 2",
  "Program area 3",
  "Where we work",
  "Stories",
];

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main>
        <section className="border-b border-line py-14 md:py-20">
          <ContentContainer>
            <SectionIntro
              label="What we do"
              title="Placeholder program landing page for major areas of work."
              body="This page is intentionally text-forward and modular so it can grow into a fuller program architecture without changing the system."
            />
          </ContentContainer>
        </section>
        <ContentContainer className="space-y-16 py-14 md:space-y-20 md:py-20">
          {sections.map((section, index) => (
            <section
              key={section}
              id={section.toLowerCase().replaceAll(" ", "-")}
              className="border-b border-line pb-12 last:border-b-0 last:pb-0"
            >
              <SectionIntro
                label={`Program block ${index + 1}`}
                title={section}
                body="Placeholder section content for a program summary, regional overview, or collection of linked stories."
              />
            </section>
          ))}
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
