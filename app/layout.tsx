import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.holaespagne.fr"),

  title: {
    default: "holÀ! | Assistance administrative en Espagne",
    template: "%s | holÀ!",
  },

  description:
    "Vos démarches en Espagne, simplement et en français : NIE, véhicule, installation, diplôme, activité, fiscalité France–Espagne et dossiers sur mesure.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "holÀ! | L’Espagne, sans la complexité administrative",
    description:
      "Nous organisons et suivons vos démarches personnelles et professionnelles en Espagne, simplement et en français.",
    url: "https://www.holaespagne.fr",
    siteName: "holÀ!",
    locale: "fr_FR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.holaespagne.fr/#organization",
      name: "holÀ!",
      url: "https://www.holaespagne.fr/",
      email: "bonjour@holaespagne.fr",
      description:
        "Service d’assistance administrative entre la France et l’Espagne pour les projets personnels et professionnels des francophones.",
      telephone: "+34 681 803 938",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9 rue Mercière",
        postalCode: "33800",
        addressLocality: "Bordeaux",
        addressCountry: "FR",
      },
      areaServed: {
        "@type": "Country",
        name: "Spain",
      },
      knowsLanguage: ["fr", "es"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.holaespagne.fr/#website",
      url: "https://www.holaespagne.fr/",
      name: "holÀ!",
      publisher: {
        "@id": "https://www.holaespagne.fr/#organization",
      },
      inLanguage: "fr-FR",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${caveat.variable} ${cormorant.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
