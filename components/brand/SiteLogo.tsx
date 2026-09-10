import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

type SiteLogoProps = {
  className?: string;
  size?: "header" | "footer";
};

export function SiteLogo({ className, size = "header" }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label={site.logo.alt}
      className={cn(
        "inline-flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
        className,
      )}
    >
      <Image
        src={site.logo.src}
        alt={site.logo.alt}
        width={site.logo.width}
        height={site.logo.height}
        className={cn(
          "w-auto object-contain object-left mix-blend-multiply",
          size === "header"
            ? "h-[5.75rem] sm:h-[6.5rem] lg:h-[7.5rem]"
            : "h-[5.25rem] sm:h-[6rem]",
        )}
        priority={size === "header"}
      />
    </Link>
  );
}
