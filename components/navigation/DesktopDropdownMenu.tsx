"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavGroup } from "@/data/siteNavigation";

type DesktopDropdownMenuProps = {
  group: NavGroup;
};

export function DesktopDropdownMenu({ group }: DesktopDropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const hasItems = Boolean(group.items?.length);

  if (!hasItems) {
    return (
      <Link href={group.href} className="primary-nav-text transition hover:text-brandGreen900">
        {group.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="primary-nav-text inline-flex items-center transition hover:text-brandGreen900"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {group.label}
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-30 mt-4 w-[360px] animate-dropdownIn border border-brandGreen700 bg-brandGreen900 p-5 text-white shadow-quiet">
          <ul className="space-y-4">
            {group.items?.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="block text-base font-semibold tracking-[-0.01em]">{item.label}</span>
                  {item.description ? (
                    <span className="mt-1 block text-sm leading-6 text-white/76">{item.description}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
