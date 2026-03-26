import { AngularButton } from "./AngularButton";

type ViewMoreButtonProps = {
  href: string;
  label?: string;
};

export function ViewMoreButton({ href, label = "View more" }: ViewMoreButtonProps) {
  return (
    <AngularButton href={href} variant="secondary">
      {label}
    </AngularButton>
  );
}
