import Image from "next/image";

type ThumbnailStripProps = {
  items: Array<{
    src: string;
    label: string;
  }>;
};

export function ThumbnailStrip({ items }: ThumbnailStripProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item, index) => (
        <figure
          key={`${item.label}-${index}`}
          className="group relative aspect-[4/3] overflow-hidden border border-white/14 bg-[#D8CEB5]"
        >
          <Image
            src={item.src}
            alt={item.label}
            fill
            sizes="(min-width: 1280px) 220px, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandGreen900/32 via-transparent to-transparent" />
          <figcaption className="sr-only">{item.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
