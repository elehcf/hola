import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

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
    "Vos démarches administratives en Espagne, simplement et en français. NIE, immatriculation de véhicule, installation en Espagne et démarches sur mesure.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "holÀ! | L’Espagne, sans la complexité administrative",
    description:
      "Nous préparons et suivons vos démarches administratives en Espagne, simplement et en français.",
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
        "Service d’assistance administrative entre la France et l’Espagne pour les francophones.",
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
</body>
    </html>
  );
}
