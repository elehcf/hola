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
  {children}
  <Footer />
</body>
    </html>
  );
}
