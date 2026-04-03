import Image from "next/image";

type ProofCardProps = {
  index: number;
  illustration: {
    src: string;
    alt: string;
  };
  title: string;
  body: string;
};

export function ProofCard({ index, illustration, title, body }: ProofCardProps) {
  return (
    <article className="flex h-full flex-col items-center px-6 py-10 text-center md:px-8 xl:px-10 xl:py-12">
      <span className="sr-only">Proof card {index}</span>
      <div className="flex h-[9.5rem] w-[9.5rem] items-center justify-center overflow-hidden rounded-full bg-[#E6BF63] md:h-[10.5rem] md:w-[10.5rem]">
        <div className="relative h-[86%] w-[86%]">
          <Image
            src={illustration.src}
            alt={illustration.alt}
            fill
            sizes="(min-width: 1280px) 168px, (min-width: 768px) 160px, 144px"
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="mt-8 max-w-[14rem] text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-text md:text-[2.2rem]">
        {title}
      </h3>
      <p className="mt-4 max-w-[15rem] text-[1rem] leading-[1.65] text-textMuted md:text-[1.06rem]">
        {body}
      </p>
    </article>
  );
}
