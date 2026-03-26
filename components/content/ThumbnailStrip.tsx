import { ImagePlaceholder } from "@/components/placeholders/ImagePlaceholder";

type ThumbnailStripProps = {
  items: string[];
};

export function ThumbnailStrip({ items }: ThumbnailStripProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item, index) => (
        <ImagePlaceholder
          key={item}
          label={`Thumbnail ${index + 1}`}
          className="min-h-[120px] border border-line bg-brandGreen800"
        />
      ))}
    </div>
  );
}
