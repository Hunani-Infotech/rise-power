import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent-hover active:bg-accent-dim",
  secondary:
    "border border-accent text-accent hover:bg-accent hover:text-background",
  ghost: "text-foreground/80 hover:text-accent",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center px-7 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
