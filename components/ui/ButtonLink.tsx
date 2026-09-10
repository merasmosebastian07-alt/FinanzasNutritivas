import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "on-dark";
  className?: string;
  external?: boolean;
  download?: string | boolean;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  download,
  onClick,
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-12 max-w-full items-center justify-center rounded-full px-6 text-center text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-navy text-paper hover:bg-navy-deep focus-visible:outline-gold",
    secondary:
      "border border-navy/20 bg-paper/80 text-navy hover:border-navy/40 hover:bg-paper focus-visible:outline-navy",
    accent:
      "bg-navy text-paper hover:bg-navy-deep focus-visible:outline-gold",
    "on-dark":
      "bg-paper text-navy hover:bg-ivory focus-visible:outline-gold-soft",
  };

  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      onClick={onClick}
      {...(download
        ? { download: download === true ? true : download }
        : undefined)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
