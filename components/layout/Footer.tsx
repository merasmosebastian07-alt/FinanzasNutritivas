import { SiteLogo } from "@/components/brand/SiteLogo";
import { Container } from "@/components/ui/Container";
import { homeCopy, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { blurb, socialsLabel, legalLabel } = homeCopy.footer;

  return (
    <footer className="border-t border-navy/10 bg-paper text-navy">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <SiteLogo size="footer" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/75">
            {blurb}
          </p>
          <p className="mt-3 text-sm text-navy/70">{site.founder}</p>
        </div>

        <nav aria-label="Pie de página">
          <p className="text-sm font-semibold">{site.name}</p>
          <ul className="mt-4 space-y-2">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-navy/75 transition-colors hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-navy/75 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phone.href}
                className="text-navy/75 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy/75 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold">{socialsLabel}</p>
            <ul className="mt-4 space-y-2">
              {site.socials.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy/75 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {site.legal.length > 0 ? (
            <div>
              <p className="text-sm font-semibold">{legalLabel}</p>
              <ul className="mt-4 space-y-2">
                {site.legal.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Container>

      <div className="border-t border-navy/10">
        <Container className="py-4">
          <p className="text-xs text-ink/50">
            © {year} {site.name}. {site.founder}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
