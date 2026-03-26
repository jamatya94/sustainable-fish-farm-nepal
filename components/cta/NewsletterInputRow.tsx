import { AngularButton } from "./AngularButton";

type NewsletterInputRowProps = {
  placeholder: string;
  buttonLabel: string;
  dark?: boolean;
};

export function NewsletterInputRow({
  placeholder,
  buttonLabel,
  dark = false,
}: NewsletterInputRowProps) {
  return (
    <form className="grid gap-4 md:grid-cols-[1fr_auto]">
      <input
        type="email"
        placeholder={placeholder}
        aria-label={placeholder}
        className={`min-h-12 border px-4 py-3 text-base ${
          dark ? "border-white/25 bg-transparent text-white placeholder:text-white/60" : "border-line bg-surface text-text placeholder:text-textMuted"
        }`}
      />
      <AngularButton type="submit" variant={dark ? "light" : "primary"} className="md:min-w-[10rem]">
        {buttonLabel}
      </AngularButton>
    </form>
  );
}
