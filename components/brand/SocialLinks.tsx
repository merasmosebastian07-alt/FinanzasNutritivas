import { site } from "@/content/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <defs>
        <radialGradient id="fn-instagram" cx="0.22" cy="1.08" r="1.18">
          <stop offset="0%" stopColor="#FCEC65" />
          <stop offset="18%" stopColor="#FCAF45" />
          <stop offset="38%" stopColor="#E1306C" />
          <stop offset="58%" stopColor="#C13584" />
          <stop offset="78%" stopColor="#833AB4" />
          <stop offset="100%" stopColor="#5B51D8" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="7" fill="url(#fn-instagram)" />
      <rect
        x="6.15"
        y="6.15"
        width="11.7"
        height="11.7"
        rx="3.7"
        fill="none"
        stroke="#fff"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="2.9" fill="none" stroke="#fff" strokeWidth="1.75" />
      <circle cx="16.2" cy="7.85" r="1" fill="#fff" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        fill="#fff"
        d="M16.67 15.31 17.2 12h-3.07v-2.15c0-.9.44-1.79 1.87-1.79h1.44V5.26S16.13 5 14.89 5c-2.6 0-4.3 1.58-4.3 4.43V12H8v3.31h2.59V23h3.54v-7.69h2.54Z"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="#25F4EE"
        d="M14.66 3.02c.94 1.04 2.17 1.74 3.54 1.97v2.47a6.9 6.9 0 0 1-3.54-.97v6.18a5.33 5.33 0 1 1-5.33-5.33c.2 0 .4.01.59.04v2.55a2.8 2.8 0 1 0 1.97 2.67V3h2.77Z"
        transform="translate(-0.7 0.35)"
      />
      <path
        fill="#FE2C55"
        d="M14.66 3.02c.94 1.04 2.17 1.74 3.54 1.97v2.47a6.9 6.9 0 0 1-3.54-.97v6.18a5.33 5.33 0 1 1-5.33-5.33c.2 0 .4.01.59.04v2.55a2.8 2.8 0 1 0 1.97 2.67V3h2.77Z"
        transform="translate(0.7 -0.2)"
      />
      <path
        fill="#010101"
        d="M14.66 3.02c.94 1.04 2.17 1.74 3.54 1.97v2.47a6.9 6.9 0 0 1-3.54-.97v6.18a5.33 5.33 0 1 1-5.33-5.33c.2 0 .4.01.59.04v2.55a2.8 2.8 0 1 0 1.97 2.67V3h2.77Z"
      />
    </svg>
  );
}

function iconForHref(href: string) {
  if (href.includes("instagram.com")) return <InstagramIcon />;
  if (href.includes("facebook.com")) return <FacebookIcon />;
  if (href.includes("tiktok.com")) return <TikTokIcon />;
  return null;
}

export function SocialLinks() {
  return (
    <ul className="mt-4 flex items-center gap-3">
      {site.socials.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {iconForHref(item.href)}
          </a>
        </li>
      ))}
    </ul>
  );
}
