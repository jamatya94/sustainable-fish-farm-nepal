import { SiteFooter } from "@/components/SiteFooter";
import { AngularButton } from "@/components/cta/AngularButton";
import { SectionIntro } from "@/components/content/SectionIntro";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SiteHeader } from "@/components/navigation/SiteHeader";

export const metadata = {
  title: "Search",
  description:
    "Search stories, reports, and learning across the Sustainable Fish Farming Initiative.",
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <SiteHeader />
      <main className="py-14 md:py-20">
        <ContentContainer className="space-y-8">
          <SectionIntro
            label="Search"
            title="Search stories, reports, and field learning across the initiative."
            body="Use search to explore updates on sustainable aquaculture, community partnership, women-led enterprise, and impact learning. Full indexing is still being connected, but this page is already set up to become the site’s archive entry point."
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
