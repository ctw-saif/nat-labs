import type { Metadata } from "next";
import { Oswald, Montserrat, Nunito_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nat-labs.vercel.app"),
  title: {
    default: "National Labs | SpotCheck Plus Toxicology Testing | Hayward CA",
    template: "%s | National Labs",
  },
  description:
    "National Labs in Hayward, CA offers SpotCheck Plus — the industry's first all-in-one dried blood spot solution for PEth alcohol and toxicology testing.",
  openGraph: {
    title: "National Labs | SpotCheck Plus Toxicology Testing",
    description:
      "Dried blood spot testing, PEth alcohol biomarker analysis, and toxicology services. PhD-driven technical team, fast turnaround, nationwide.",
    type: "website",
    url: "/",
  },
};

const SITE_URL = "https://nationallabs.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": `${SITE_URL}#organization`,
  name: "National Labs",
  legalName: "National Labs Inc",
  url: SITE_URL,
  telephone: "+1-800-800-6060",
  email: "info@nationallabs.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hayward",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: "US",
  medicalSpecialty: ["Toxicology", "ClinicalLaboratory"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "National Labs",
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-US",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  name: "SpotCheck Plus - PEth Alcohol and Toxicology Testing",
  description:
    "All-in-one dried blood spot (DBS) testing solution for PEth alcohol biomarker analysis and toxicology confirmatory testing. Finger-prick collection, PhD-driven technical team, fast turnaround.",
  provider: { "@id": `${SITE_URL}#organization` },
  usedToDiagnose: "Alcohol use disorder, substance use disorder",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${montserrat.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationJsonLd,
              websiteJsonLd,
              serviceJsonLd,
            ]),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
