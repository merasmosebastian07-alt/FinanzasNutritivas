const DEFAULT_PRODUCTION_URL = "https://finanzas-nutritivas.vercel.app";

function stripTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return stripTrailingSlash(fromEnv);
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return `https://${stripTrailingSlash(vercelProduction)}`;
  }

  if (process.env.NODE_ENV === "production") {
    return DEFAULT_PRODUCTION_URL;
  }

  return "http://localhost:3000";
}
