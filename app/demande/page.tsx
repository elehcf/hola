import { Suspense } from "react";
import IntakeForm from "../components/IntakeForm";
export const metadata: Metadata = {
  title: "Votre demande",
  robots: {
    index: false,
    follow: false,
  },
};
export default function Demande() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-navy" />}>
      <IntakeForm />
    </Suspense>
  );
}
import type { Metadata } from "next";