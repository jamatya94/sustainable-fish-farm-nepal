export function CurrencySelector() {
  return (
    <label className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-brandGreen900">
      Currency
      <select className="min-h-11 border border-line bg-surface px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-text">
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
      </select>
    </label>
  );
}
