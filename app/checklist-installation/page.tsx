import type { Metadata } from "next";
import ChecklistForm from "../components/ChecklistForm";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Checklist gratuite : s’installer en Espagne dans le bon ordre",
  description:
    "Téléchargez la checklist holÀ! : NIE, certificat d’enregistrement, padrón, santé, voiture, banque. Ce qui se prépare depuis la France et ce qui se fait sur place.",
  alternates: {
    canonical: "/checklist-installation",
  },
  openGraph: {
    title: "Checklist gratuite : s’installer en Espagne | holÀ!",
    description:
      "Les démarches d’installation en Espagne, dans l’ordre, sur 2 pages. Gratuit, en français.",
    url: "/checklist-installation",
  },
};

const points = [
  "Ce qui se prépare depuis la France, avant le départ",
  "Les démarches des premiers mois sur place, dans l’ordre",
  "Les étapes qui exigent votre présence",
  "Les erreurs qui font perdre des semaines",
];

export default function ChecklistInstallation() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <PageHeader />

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-12 sm:px-8 md:px-16 md:pt-20">
        <p className="text-xs uppercase tracking-[0.25em] text-blood">
          Installation · Espagne
        </p>

        <h1
          className="mt-6 text-4xl leading-[0.98] sm:text-5xl md:text-7xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Votre installation en Espagne,
          <span className="italic text-blood"> dans le bon ordre.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/65">
          Avant de partir, la vraie difficulté n’est pas une démarche en
          particulier : c’est l’ordre. Le padrón demande une adresse, le
          certificat d’enregistrement demande des justificatifs, la voiture
          demande le reste. Cette checklist remet tout à sa place, sur deux
          pages.
        </p>

        <ul className="mt-10 space-y-4 border-l border-blood/50 pl-7">
          {points.map((point) => (
            <li key={point} className="text-lg leading-relaxed text-navy/70">
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <ChecklistForm source="page-checklist" tone="dark" />
        </div>
      </div>
    </main>
  );
}
