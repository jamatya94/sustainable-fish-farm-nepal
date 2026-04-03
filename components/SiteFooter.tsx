import Link from "next/link";
import { NewsletterInputRow } from "@/components/cta/NewsletterInputRow";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ImagePlaceholder } from "@/components/placeholders/ImagePlaceholder";
import { LogoPlaceholder } from "@/components/placeholders/LogoPlaceholder";
import { siteNavigation } from "@/data/siteNavigation";
import { homepageContent } from "@/data/homepageContent";

export function SiteFooter() {
  const footer = homepageContent.footer;

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-brandGreen900 text-white">
      <div className="absolute inset-0 opacity-25">
        <ImagePlaceholder label={footer.image.alt} className="h-full border-0 bg-brandGreen900" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brandGreen900/20 via-brandGreen900/55 to-brandGreen900" />
      <ContentContainer width="wide" padding="edge" className="relative py-16 md:py-24">
        <div className="mb-8 ml-auto max-w-[92%] border-l border-t border-white/12" />
        <div className="grid gap-10 border border-white/15 bg-brandGreen900/86 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <p className="article-label !text-[#F0D27A]">Stay connected</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{footer.newsletterTitle}</h2>
            <p className="mt-4 max-w-reading text-base leading-7 text-white/80">{footer.newsletterBody}</p>
            <div className="mt-8 max-w-[440px]">
              <NewsletterInputRow placeholder="Email address" buttonLabel="Sign up" dark />
            </div>
          </div>
          <div className="grid gap-8 border-t border-white/12 pt-8 md:grid-cols-2 md:border-t-0 md:pt-0 md:pl-6 lg:pl-10">
            <div>
              <LogoPlaceholder logo={footer.logoMark} variant="footer" className="mb-5" />
              <p className="text-xl font-semibold">{footer.title}</p>
              <p className="mt-4 text-base leading-7 text-white/80">{footer.body}</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="article-label !text-[#F0D27A]">Explore</p>
                <div className="mt-4 grid gap-3">
                  {siteNavigation.primary.map((item) => (
                    <Link key={item.href} href={item.href} className="footer-links">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="article-label !text-[#F0D27A]">Contact</p>
                <div className="mt-4 space-y-2 text-white/80">
                  {footer.contactLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-7 text-sm text-white/68 md:flex-row md:items-center md:justify-between">
          <p>{footer.legal}</p>
        </div>
      </ContentContainer>
    </footer>
  );
}
