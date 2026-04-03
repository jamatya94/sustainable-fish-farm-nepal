import { MobileNavDrawer } from "./MobileNavDrawer";
import { PrimaryNav } from "./PrimaryNav";
import { LogoPlaceholder } from "@/components/placeholders/LogoPlaceholder";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { homepageContent } from "@/data/homepageContent";

export function SiteHeader() {
  const header = homepageContent.header;

  return (
    <header className="sticky top-0 z-[70] border-b border-brandGreen900/12 bg-[rgba(247,246,241,0.9)] shadow-[0_8px_24px_rgba(17,40,33,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(247,246,241,0.78)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-[#E6BF63]/22 via-[#E6BF63]/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#E6BF63] via-brandGreen700/70 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_34%,rgba(255,255,255,0)_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-brandGreen900/10" />
        <div className="absolute left-[15%] top-0 hidden h-full w-px bg-brandGreen900/8 lg:block" />
      </div>
      <ContentContainer width="wide" padding="edge" className="relative">
        <div className="relative flex items-center justify-between gap-4 py-2.5 md:py-3 lg:grid lg:grid-cols-[minmax(300px,460px)_1fr] lg:items-center lg:gap-6 lg:py-3 xl:grid-cols-[minmax(340px,500px)_1fr] 2xl:grid-cols-[minmax(360px,520px)_1fr]">
          <div className="shrink-0 lg:min-w-[300px] xl:min-w-[340px] 2xl:min-w-[360px]">
            <LogoPlaceholder logo={header.logo} />
          </div>

          <div className="hidden min-w-0 items-center justify-end lg:flex">
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
