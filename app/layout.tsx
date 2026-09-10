import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/ui/SkipLink";
import { images, site } from "@/content/site";
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

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Finanzas Nutritivas | Audy Paulino",
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
  icons: {
    icon: [{ url: site.logo.src, type: "image/jpeg" }],
    apple: site.logo.src,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    siteName: site.name,
    title: "Finanzas Nutritivas | Audy Paulino",
    description: site.description,
    images: [
      {
        url: images.heroPrimary.src,
        alt: images.heroPrimary.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finanzas Nutritivas | Audy Paulino",
    description: site.description,
    images: [images.heroPrimary.src],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={site.locale}
      className={`${fraunces.variable} ${sourceSans.variable} h-full`}
    >
      <body className="min-h-full bg-ivory font-sans text-ink antialiased">
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
