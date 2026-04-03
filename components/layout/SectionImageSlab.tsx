import Image from "next/image";
import { AngularButton } from "@/components/cta/AngularButton";
import { SectionMediaPanel } from "./SectionMediaPanel";

type SectionImageSlabProps = {
  label: string;
  title: string;
  body: string;
  images: Array<{
    src: string;
    alt: string;
    position?: string;
  }>;
  cta: {
    label: string;
    href: string;
  };
  align?: "left" | "right";
  layout?: "overlay" | "split";
  mediaMode?: "cover" | "contain";
  minHeight?: number;
};

export function SectionImageSlab({
  label,
  title,
  body,
  images,
  cta,
  align = "left",
  layout = "overlay",
  mediaMode = "cover",
  minHeight = 600,
}: SectionImageSlabProps) {
  const slabPosition = align === "left" ? "left-0" : "right-0";
  const hasMultipleImages = images.length > 1;

  if (layout === "split") {
    return (
      <section className="overflow-hidden border border-line bg-surface lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.34fr)]">
        <div className="bg-[#ECE6D8] p-4 md:p-5 lg:p-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#E2DAC6]" style={{ minHeight: Math.max(360, minHeight - 120) }}>
            {hasMultipleImages ? (
              <SectionMediaPanel images={images} mode={mediaMode} dotsVariant="dark" />
            ) : (
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(min-width: 1280px) 900px, 100vw"
                className={mediaMode === "contain" ? "object-contain" : "object-cover"}
                style={{ objectPosition: images[0].position }}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between bg-brandGreen900 p-7 text-white md:p-9">
          <div>
            <p className="article-label !text-[#F0D27A]">{label}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[2.2rem]">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/82">{body}</p>
          </div>
          <div className="mt-8">
            <AngularButton href={cta.href}>{cta.label}</AngularButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border border-line bg-brandGreen700" style={{ minHeight }}>
      <div className="absolute inset-0 bg-gradient-to-t from-brandGreen900/45 via-transparent to-transparent" />
      {hasMultipleImages ? (
        <SectionMediaPanel images={images} mode={mediaMode} />
      ) : (
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-cover"
          style={{ objectPosition: images[0].position }}
        />
      )}
      <div className={`absolute bottom-0 ${slabPosition} max-w-[560px] bg-brandGreen900 p-7 text-white md:p-10`}>
        <p className="article-label !text-[#F0D27A]">{label}</p>
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
