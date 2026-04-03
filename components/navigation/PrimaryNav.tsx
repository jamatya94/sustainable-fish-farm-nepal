import { siteNavigation } from "@/data/siteNavigation";
import { DonateButton } from "./DonateButton";
import { DesktopDropdownMenu } from "./DesktopDropdownMenu";

export function PrimaryNav() {
  return (
    <nav
      aria-label="Primary"
      className="hidden lg:block [&_.primary-nav-text]:text-[0.93rem] [&_.primary-nav-text]:font-semibold [&_.primary-nav-text]:text-brandGreen900"
    >
      <ul className="flex items-center justify-end gap-7 xl:gap-8">
        {siteNavigation.primary.filter((group) => group.label !== "Donate").map((group) => (
          <li key={group.href}>
            <DesktopDropdownMenu group={group} />
          </li>
        ))}
        <li>
          <DonateButton className="min-h-[2.7rem] px-4 normal-case text-[0.92rem] tracking-normal" />
        </li>
      </ul>
    </nav>
  );
}
