import type { Metadata } from "next";
import { Suspense } from "react";
import IntakeForm from "../components/IntakeForm";

export const metadata: Metadata = {
  title: "Votre demande",
  alternates: {
    canonical: "/demande",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Demande() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-navy" />}>
      <IntakeForm />
    </Suspense>
  );
}