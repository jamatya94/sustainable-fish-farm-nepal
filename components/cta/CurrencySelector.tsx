type CurrencySelectorProps = {
  dark?: boolean;
};

export function CurrencySelector({ dark = false }: CurrencySelectorProps) {
  return (
    <label
      className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] ${
        dark ? "text-white/82" : "text-brandGreen900"
      }`}
    >
      Currency
      <select
        className={`min-h-11 border px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] ${
          dark
            ? "border-white/18 bg-white/10 text-white"
            : "border-line bg-surface text-text"
        }`}
      >
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
      </select>
    </label>
  );
}
