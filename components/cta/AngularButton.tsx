import Link from "next/link";
import { ReactNode } from "react";

type AngularButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "light" | "donate";
  type?: "button" | "submit";
};

const variantClasses = {
  primary:
    "border-accentOrange bg-accentOrange text-white hover:border-accentOrangeHover hover:bg-accentOrangeHover",
  secondary:
    "border-brandGreen900 bg-transparent text-brandGreen900 hover:bg-brandGreen900 hover:text-white",
  light: "border-surface bg-surface text-brandGreen900 hover:bg-canvas",
  donate:
    "border-accentOrange bg-accentOrange text-white hover:border-accentOrangeHover hover:bg-accentOrangeHover",
};

function ButtonShell({
  children,
  className = "",
  variant = "primary",
}: Pick<AngularButtonProps, "children" | "className" | "variant">) {
  return (
    <span
      className={`button-text inline-flex min-h-12 items-center justify-center border px-5 py-3 transition [clip-path:polygon(0_0,100%_0,100%_78%,91%_100%,0_100%)] ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

export function AngularButton({
  href,
  children,
  className,
  variant,
  type = "button",
}: AngularButtonProps) {
  if (href) {
    return (
      <Link href={href} className="inline-flex">
        <ButtonShell className={className} variant={variant}>
          {children}
        </ButtonShell>
      </Link>
    );
  }

  return (
    <button type={type} className="inline-flex">
      <ButtonShell className={className} variant={variant}>
        {children}
      </ButtonShell>
    </button>
  );
}
