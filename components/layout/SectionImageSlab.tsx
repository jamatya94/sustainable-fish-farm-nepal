import { AngularButton } from "@/components/cta/AngularButton";
import { ImagePlaceholder } from "@/components/placeholders/ImagePlaceholder";

type SectionImageSlabProps = {
  label: string;
  title: string;
  body: string;
  imageAlt: string;
  cta: {
    label: string;
    href: string;
  };
  align?: "left" | "right";
};

export function SectionImageSlab({
  label,
  title,
  body,
  imageAlt,
  cta,
  align = "left",
}: SectionImageSlabProps) {
  const slabPosition = align === "left" ? "left-0" : "right-0";

  return (
    <section className="relative min-h-[600px] overflow-hidden border border-line bg-brandGreen700">
      <div className="absolute inset-0 bg-gradient-to-t from-brandGreen900/45 via-transparent to-transparent" />
      <ImagePlaceholder label={imageAlt} className="h-full min-h-[600px] border-0 bg-brandGreen700/45" />
      <div className={`absolute bottom-0 ${slabPosition} max-w-[560px] bg-brandGreen900 p-7 text-white md:p-10`}>
        <p className="article-label !text-white/72">{label}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-white/82 md:text-lg">{body}</p>
        <div className="mt-8">
          <AngularButton href={cta.href}>{cta.label}</AngularButton>
        </div>
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-[18%] border-r border-white/10 lg:block" />
    </section>
  );
}
