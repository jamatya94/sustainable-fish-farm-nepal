import { SiteFooter } from "@/components/SiteFooter";
import { AngularButton } from "@/components/cta/AngularButton";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main className="py-14 md:py-20">
        <ContentContainer className="space-y-8">
          <SectionIntro
            label="Search"
            title="Placeholder search page."
            body="A search experience is not wired yet, but this page is ready for future indexing, filtering, or site search integration."
          />
          <form className="grid max-w-content gap-4 md:grid-cols-[1fr_auto]">
            <input
              type="search"
              placeholder="Search the site"
              aria-label="Search the site"
              className="min-h-12 border border-line bg-surface px-4 py-3"
            />
            <AngularButton type="submit">Search</AngularButton>
          </form>
        </ContentContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
