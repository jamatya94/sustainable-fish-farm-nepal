import { ImagePlaceholder } from "@/components/placeholders/ImagePlaceholder";

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
        <ImagePlaceholder
          key={`${item.label}-${index}`}
          label={item.label}
          className="min-h-[120px] border border-line bg-brandGreen800"
        />
      ))}
    </div>
  );
}
