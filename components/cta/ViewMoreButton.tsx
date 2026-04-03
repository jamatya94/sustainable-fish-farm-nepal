import { AngularButton } from "./AngularButton";

type ViewMoreButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

export function ViewMoreButton({
  href,
  label = "View more",
  className,
}: ViewMoreButtonProps) {
  return (
    <AngularButton href={href} variant="secondary" className={className}>
      {label}
    </AngularButton>
  );
}
