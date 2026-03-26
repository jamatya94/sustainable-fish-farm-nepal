type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex min-h-[240px] items-center justify-center border border-dashed border-white/35 bg-brandGreen900/30 px-6 text-center text-sm uppercase tracking-[0.18em] text-white/78 ${className}`.trim()}
    >
      {label}
    </div>
  );
}
