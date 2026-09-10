import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Rise Mission Power home"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0 text-current"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="22" r="5.5" fill="currentColor" />
        <path
          d="M10 46 L22 30 L30 40 L40 24 L54 46"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10 46 H54"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.7"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-[0.14em] uppercase sm:text-xl">
          Rise
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-[0.16em] uppercase opacity-80">
          Mission Power
        </span>
      </span>
    </Link>
  );
}
