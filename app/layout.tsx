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
  title: "holÀ! — Vos démarches en Espagne",
  description:
    "Accompagnement administratif en Espagne, simplement et en français.",
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
