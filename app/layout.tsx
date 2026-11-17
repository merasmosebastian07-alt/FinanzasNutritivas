import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { SkipLink } from "@/components/ui/SkipLink";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteUrl = getSiteUrl();

const title = "Finanzas Nutritivas | Audy Paulino";
const ogImage = {
  url: "/og/opengraph.jpg",
  width: 1200,
  height: 630,
  alt: "Finanzas Nutritivas · Audy Paulino. Cada centavo cuenta.",
  type: "image/jpeg",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Audy Paulino",
    "Finanzas Nutritivas",
    "educación financiera",
    "ahorro",
    "presupuesto",
    "organización financiera",
    "hábitos financieros",
    "registro de gastos",
  ],
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32 48x48" },
      { url: "/icons/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={site.locale}
      className={`${fraunces.variable} ${sourceSans.variable} h-full`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink antialiased">
        <JsonLd />
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
