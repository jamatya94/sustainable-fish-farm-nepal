import Link from "next/link";
import { ContentContainer } from "./ContentContainer";

type SectionSubnavHeroProps = {
  label: string;
  title: string;
  body: string;
  items: Array<{
    label: string;
    href: string;
  }>;
};

export function SectionSubnavHero({ label, title, body, items }: SectionSubnavHeroProps) {
  return (
    <section className="border-b border-line pb-10 pt-8 md:pb-14 md:pt-12">
      <ContentContainer>
        <div className="max-w-[84rem] bg-brandGreen900 p-8 text-white md:p-10 lg:p-12">
          <p className="article-label !text-[#F0D27A]">{label}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-reading text-lg leading-8 text-white/82">{body}</p>
        </div>
        <nav aria-label={`${title} sections`} className="overflow-x-auto border-b border-line">
          <ul className="flex min-w-max gap-6 py-5">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="button-text whitespace-nowrap text-brandGreen900 transition hover:text-brandGreen700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </ContentContainer>
    </section>
  );
}
