import { Suspense } from "react";
import IntakeForm from "../components/IntakeForm";

export default function Demande() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-navy" />}>
      <IntakeForm />
    </Suspense>
  );
}