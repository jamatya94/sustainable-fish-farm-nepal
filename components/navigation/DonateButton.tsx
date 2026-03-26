import { AngularButton } from "@/components/cta/AngularButton";

type DonateButtonProps = {
  className?: string;
};

export function DonateButton({ className }: DonateButtonProps) {
  return (
    <AngularButton
      href="/donate"
      className={`min-h-[3.35rem] px-6 tracking-[0.19em] ${className ?? ""}`.trim()}
      variant="donate"
    >
      Donate
    </AngularButton>
  );
}
