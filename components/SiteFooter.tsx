import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { LogoPlaceholder } from "@/components/placeholders/LogoPlaceholder";
import { homepageContent } from "@/data/homepageContent";

export function SiteFooter() {
  const footer = homepageContent.footer;

  return (
    <footer className="relative mt-8 overflow-hidden border-t border-line bg-brandGreen900 text-white md:mt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(240,210,122,0.1),transparent_28%),radial-gradient(circle_at_82%_0%,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brandGreen900/10 via-brandGreen900/36 to-brandGreen900" />
      <ContentContainer width="wide" padding="edge" className="relative py-3 md:py-4">
        <div className="mx-auto flex max-w-[28rem] flex-col gap-3 px-1 py-1 md:max-w-[30rem] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <LogoPlaceholder logo={footer.logoMark} variant="footer" />
            <p className="text-[0.92rem] font-semibold tracking-[-0.02em] md:text-[0.98rem]">{footer.title}</p>
          </div>
          <div className="flex items-center gap-2 md:justify-end">
            <Link
              href="https://www.instagram.com/sffinepal/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/78 transition hover:text-[#F0D27A]"
            >
              <svg aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" viewBox="0 0 24 24">
                <rect fill="none" height="16" rx="4.5" stroke="currentColor" width="16" x="4" y="4" />
                <circle cx="12" cy="12" fill="none" r="3.5" stroke="currentColor" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/sustainablefishfarm/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/78 transition hover:text-[#F0D27A]"
            >
              <svg aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" viewBox="0 0 24 24">
                <rect fill="none" height="16" rx="4.5" stroke="currentColor" width="16" x="4" y="4" />
                <path
                  d="M13.5 19v-5.2h2.2l.3-2.3h-2.5V10c0-.8.2-1.4 1.4-1.4h1.2V6.5c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3v1.8H9.8v2.3h1.6V19"
                  fill="none"
                  stroke="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
}
