"use client";

import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-ivory/92 backdrop-blur-md transition-[border-color,box-shadow,padding] duration-300",
        scrolled
          ? "border-navy/10 shadow-[0_10px_28px_-20px_rgba(36,127,168,0.45)]"
          : "border-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8",
          scrolled ? "py-1.5 lg:py-2" : "py-2 lg:py-2.5",
        )}
      >
        <SiteLogo />

        <nav aria-label="Principal" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-5 xl:gap-7">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-[0.8125rem] font-medium text-navy/75 transition-colors hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <div className="hidden lg:block">
            <ButtonLink href={site.headerCta.href} className="min-h-11 px-5" external>
              {site.headerCta.label}
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-navy lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={cn(
                  "absolute top-0 left-0 block h-0.5 w-5 bg-navy transition-transform duration-200",
                  open && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 block h-0.5 w-5 bg-navy transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-3 left-0 block h-0.5 w-5 bg-navy transition-transform duration-200",
                  open && "-translate-y-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="menu-movil"
          aria-label="Principal móvil"
          className="border-t border-navy/8 bg-ivory lg:hidden"
        >
          <Container className="py-3">
            <ul className="flex flex-col">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-md py-3 text-base font-medium text-navy"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2 pb-3">
              <ButtonLink
                href={site.headerCta.href}
                className="w-full"
                onClick={() => setOpen(false)}
                external
              >
                {site.headerCta.label}
              </ButtonLink>
            </div>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
