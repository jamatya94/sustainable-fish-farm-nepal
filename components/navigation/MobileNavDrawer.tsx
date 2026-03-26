"use client";

import Link from "next/link";
import { useState } from "react";
import { siteNavigation } from "@/data/siteNavigation";
import { DonateButton } from "./DonateButton";

export function MobileNavDrawer() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 items-center border border-brandGreen900 px-4 text-sm font-semibold uppercase tracking-[0.15em] text-brandGreen900"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      {open ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-40 border-t border-line bg-canvas px-gutter-mobile py-6 shadow-quiet"
        >
          <div className="space-y-4">
            <div className="space-y-3">
              {siteNavigation.primary.filter((group) => group.label !== "Donate").map((group) => {
                const isOpen = openGroup === group.label;
                const hasItems = Boolean(group.items?.length);

                return (
                  <div key={group.href} className="border-b border-line pb-3">
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href={group.href}
                        className="primary-nav-text py-2"
                        onClick={() => setOpen(false)}
                      >
                        {group.label}
                      </Link>
                      {hasItems ? (
                        <button
                          type="button"
                          className="text-sm font-semibold uppercase tracking-[0.16em] text-brandGreen900"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenGroup((value) => (value === group.label ? null : group.label))
                          }
                        >
                          {isOpen ? "Close" : "Open"}
                        </button>
                      ) : null}
                    </div>
                    {isOpen ? (
                      <ul className="mt-3 space-y-2 bg-brandGreen900 p-4 text-white">
                        {group.items?.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className="block text-sm leading-6" onClick={() => setOpen(false)}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <DonateButton className="w-full" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
