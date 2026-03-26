import { MobileNavDrawer } from "./MobileNavDrawer";
import { PrimaryNav } from "./PrimaryNav";
import { LogoPlaceholder } from "@/components/placeholders/LogoPlaceholder";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { homepageContent } from "@/data/homepageContent";

export function SiteHeader() {
  const header = homepageContent.header;

  return (
    <header className="sticky top-0 z-[70] bg-surface/58 backdrop-blur-md supports-[backdrop-filter]:bg-surface/42">
      <ContentContainer width="wide" padding="edge" className="relative">
        <div className="flex items-center justify-between gap-6 py-4 md:py-5 lg:grid lg:grid-cols-[minmax(560px,660px)_1fr] lg:items-start lg:gap-8 lg:py-6 xl:grid-cols-[minmax(600px,720px)_1fr] xl:py-7 2xl:grid-cols-[minmax(640px,760px)_1fr]">
          <div className="shrink-0 lg:min-w-[560px] xl:min-w-[600px] 2xl:min-w-[640px]">
            <LogoPlaceholder logo={header.logo} />
          </div>

          <div className="hidden min-w-0 items-start justify-end lg:flex lg:pt-5 xl:pt-6">
            <PrimaryNav />
          </div>

          <div className="lg:hidden">
            <MobileNavDrawer />
          </div>
        </div>
      </ContentContainer>
    </header>
  );
}
