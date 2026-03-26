import Link from "next/link";

type SocialIconPlaceholderProps = {
  label: string;
  href: string;
};

export function SocialIconPlaceholder({ label, href }: SocialIconPlaceholderProps) {
  return (
    <Link
      href={href}
      className="flex h-10 w-10 items-center justify-center border border-white/25 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10"
    >
      <span className="sr-only">{label}</span>
      {label.slice(0, 2)}
    </Link>
  );
}
