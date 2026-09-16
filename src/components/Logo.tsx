import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** White lockup for dark surfaces; ink lockup for cream headers. */
  variant?: "onDark" | "onLight";
  priority?: boolean;
};

/** Rise Mission Power lockup — white (onDark) / ink (onLight), olive wing marks. */
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
      aria-label="Rise Mission Power home"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src={sources[variant]}
        alt="Rise Mission Power"
        width={573}
        height={150}
        priority={priority}
        className="h-9 w-auto max-w-[min(72vw,200px)] sm:h-10 sm:max-w-[240px] xl:h-11 xl:max-w-[260px]"
      />
    </Link>
  );
}
