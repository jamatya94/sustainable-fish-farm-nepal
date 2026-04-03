type QuoteHighlightProps = {
  quote: string;
  attribution: string;
  theme?: "default" | "dark";
};

export function QuoteHighlight({
  quote,
  attribution,
  theme = "default",
}: QuoteHighlightProps) {
  const isDark = theme === "dark";

  return (
    <div className="relative px-0 py-1">
      <div className={`mb-5 h-1 w-14 ${isDark ? "bg-white/46" : "bg-iconGold"}`} />
      <blockquote className={`quote-text max-w-none ${isDark ? "!text-white" : ""}`}>“{quote}”</blockquote>
      <p
        className={`mt-7 text-sm font-semibold uppercase tracking-[0.18em] ${
          isDark ? "text-[#F0D27A]" : "text-brandGreen900"
        }`}
      >
        {attribution}
      </p>
    </div>
  );
}
