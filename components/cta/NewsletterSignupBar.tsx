import { NewsletterInputRow } from "./NewsletterInputRow";

type NewsletterSignupBarProps = {
  title: string;
  body: string;
  placeholder: string;
  buttonLabel: string;
};

export function NewsletterSignupBar({
  title,
  body,
  placeholder,
  buttonLabel,
}: NewsletterSignupBarProps) {
  return (
    <section className="border border-brandGreen900 bg-brandGreen900 px-6 py-8 text-white md:px-10 md:py-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-center">
        <div>
          <p className="article-label !text-[#F0D27A]">Newsletter</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-content text-base leading-7 text-white/82">{body}</p>
        </div>
        <NewsletterInputRow placeholder={placeholder} buttonLabel={buttonLabel} dark />
      </div>
    </section>
  );
}
