import Link from "next/link";
import { ReactNode } from "react";

type InlineTextLinkProps = {
  href: string;
  children: ReactNode;
};

export function InlineTextLink({ href, children }: InlineTextLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 border-b border-brandGreen900 pb-0.5 font-semibold text-brandGreen900 transition hover:text-brandGreen700"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
