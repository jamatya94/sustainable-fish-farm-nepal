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
      <Link href={group.href} className="primary-nav-text transition hover:text-brandGreen700">
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
      <div className="flex items-center gap-2">
        <Link
          href={group.href}
          className="primary-nav-text inline-flex items-center transition hover:text-brandGreen700"
        >
          {group.label}
        </Link>
        <button
          type="button"
          className="inline-flex h-7 w-7 items-center justify-center text-brandGreen900/72 transition hover:text-brandGreen700"
          aria-label={`Open ${group.label} menu`}
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((value) => !value)}
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5">
            <path
              d="M5.5 7.5L10 12l4.5-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {open ? (
        <div className="absolute left-0 top-full z-30 mt-3 w-[360px] animate-dropdownIn border border-brandGreen700 bg-brandGreen900 p-5 text-white shadow-quiet">
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
