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
      "Dried blood spot testing, toxicology, and COVID-19 services. PhD-driven technical team, fast turnaround, nationwide.",
    type: "website",
    url: "/",
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
