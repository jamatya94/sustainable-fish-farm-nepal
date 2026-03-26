type QuoteHighlightProps = {
  quote: string;
  attribution: string;
};

export function QuoteHighlight({ quote, attribution }: QuoteHighlightProps) {
  return (
    <div className="relative border-y border-line bg-quoteHighlight/70 px-6 py-9 md:px-10 md:py-12">
      <div className="absolute left-6 top-0 h-1 w-16 bg-iconGold md:left-10" />
      <blockquote className="quote-text max-w-[12ch]">“{quote}”</blockquote>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brandGreen900">{attribution}</p>
    </div>
  );
}
