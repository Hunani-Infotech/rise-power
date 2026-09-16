import Link from "next/link";
import type { ComponentProps } from "react";

type AppLinkProps = ComponentProps<typeof Link>;

function hrefString(href: AppLinkProps["href"]): string {
  if (typeof href === "string") return href;
  if (href && typeof href === "object" && "pathname" in href) {
    return `${href.pathname ?? ""}${href.hash ?? ""}`;
  }
  return "";
}

function isNativeHref(href: string): boolean {
  if (/^(https?:|mailto:|tel:)/i.test(href)) return true;
  if (href.includes("#")) return true;
  const path = href.split(/[?#]/)[0] ?? href;
  return /\.(pdf|zip|docx?|xlsx?|pptx?)$/i.test(path);
}

export function AppLink({
  href,
  replace: _replace,
  scroll: _scroll,
  prefetch: _prefetch,
  locale: _locale,
  ...props
}: AppLinkProps) {
  const url = hrefString(href);

  if (isNativeHref(url)) {
    return <a href={url} {...props} />;
  }

  return <Link href={href} {...props} />;
}
