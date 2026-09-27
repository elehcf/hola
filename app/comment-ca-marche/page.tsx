import type { Metadata } from "next";
import Link from "next/link";
import LifestylePhoto from "../components/LifestylePhoto";

export const metadata: Metadata = {
  title: "Comment ça marche | holÀ!",
  description:
    "Découvrez comment holÀ! vous accompagne dans vos démarches administratives en Espagne, de votre première demande au suivi du dossier.",
};

const etapes = [
  {
    numero: "01",
    titre: "Vous nous expliquez votre situation.",
    texte:
      "Dites-nous quelle démarche vous souhaitez effectuer, où vous en êtes et ce qui vous bloque. Quelques informations suffisent pour commencer.",
  },
  {
    numero: "02",
    titre: "Nous définissons la marche à suivre.",
    texte:
      "Nous examinons votre demande et vous expliquons ce que nous pouvons prendre en charge. Avant de commencer, vous recevez une proposition précisant l’accompagnement et son prix.",
  },
  {
    numero: "03",
    titre: "Nous avançons avec vous.",
    texte:
      "Nous vous aidons à réunir les informations nécessaires, à organiser les étapes et à suivre le dossier. Si une démarche exige votre présence, vous savez quoi faire et quels documents apporter.",
  },
  {
    numero: "04",
    titre: "Nous coordonnons les compétences utiles.",
    texte:
      "Si un avis juridique, fiscal ou comptable est nécessaire, nous vous l’indiquons et organisons, avec votre accord, l’intervention d’un professionnel habilité.",
  },
];

export default function CommentCaMarche() {
  return (
    <main className="min-h-screen bg-ivory px-8 py-16 text-navy md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-blood">
          ← holÀ!
        </Link>

        <p className="mt-20 text-xs uppercase tracking-[0.25em] text-blood">
          Notre accompagnement
        </p>

        <h1
          className="mt-6 text-5xl leading-[0.95] md:text-7xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Comment
          <br />
          <span className="italic text-blood">ça marche ?</span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/75 md:text-xl">
          Vous nous racontez votre situation. Nous mettons de l’ordre dans les
          démarches et vous accompagnons dans les étapes que nous pouvons
          prendre en charge.
        </p>

        <div className="mt-20 border-t border-navy/20">
          {etapes.map((etape) => (
            <section
              key={etape.numero}
              className="grid gap-5 border-b border-navy/20 py-10 md:grid-cols-[100px_1fr] md:gap-10"
            >
              <span
                className="text-4xl italic text-blood"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                {etape.numero}
              </span>
              <div>
                <h2
                  className="text-3xl leading-tight md:text-4xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {etape.titre}
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-navy/70">
                  {etape.texte}
                </p>
              </div>
            </section>
          ))}
        </div>

        <LifestylePhoto
          src="/comment-ca-marche-lifestyle-hola.webp"
          alt="Transmission d’un dossier administratif lors d’un accompagnement personnalisé"
          eyebrow="Un dossier. Un interlocuteur. Une suite."
          compact
        />

        <section className="mt-20">
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Et si ma situation est plus complexe ?
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-navy/70">
            Nous vous le signalons. Si un avis juridique, fiscal ou comptable
            est nécessaire, nous pouvons faire intervenir, avec votre accord,
            un professionnel habilité. holÀ! reste votre interlocuteur pour
            coordonner les échanges et le suivi administratif.
          </p>
        </section>

        <div className="mt-20 border-t border-navy/20 pt-10">
          <p
            className="max-w-2xl text-3xl leading-tight md:text-4xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            On commence par votre situation ?
          </p>

          <Link
            href="/demande"
            className="mt-8 inline-block bg-blood px-7 py-4 text-sm text-ivory transition-opacity hover:opacity-85"
          >
            Expliquer ma situation →
          </Link>
        </div>
      </div>
    </main>
  );
}
