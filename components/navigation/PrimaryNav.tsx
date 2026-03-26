import { siteNavigation } from "@/data/siteNavigation";
import { DonateButton } from "./DonateButton";
import { DesktopDropdownMenu } from "./DesktopDropdownMenu";

export function PrimaryNav() {
  return (
    <nav
      aria-label="Primary"
      className="hidden lg:block [&_.primary-nav-text]:text-[1.05rem] [&_.primary-nav-text]:font-semibold [&_.primary-nav-text]:text-brandGreen700"
    >
      <ul className="flex items-center justify-end gap-10 xl:gap-11">
        {siteNavigation.primary.filter((group) => group.label !== "Donate").map((group) => (
          <li key={group.href}>
            <DesktopDropdownMenu group={group} />
          </li>
        ))}
        <li>
          <DonateButton className="min-h-[3.45rem] px-5 normal-case text-[1rem] tracking-normal" />
        </li>
      </ul>
    </nav>
  );
}
