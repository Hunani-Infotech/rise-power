import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** White lockup for dark surfaces; ink lockup for cream headers. */
  variant?: "onDark" | "onLight";
  priority?: boolean;
};

const sources = {
  onDark: "/media/brand/rise-power-logo.png",
  onLight: "/media/brand/rise-power-logo-dark.png",
} as const;

export function Logo({
  className = "",
  variant = "onDark",
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Rise Power home"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src={sources[variant]}
        alt="Rise Power"
        width={1222}
        height={200}
        priority={priority}
        className="h-9 w-auto max-w-[min(72vw,260px)] sm:h-10 sm:max-w-[300px]"
      />
    </Link>
  );
}
