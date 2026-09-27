import type { Metadata } from "next";
import Link from "next/link";
import LifestylePhoto from "../components/LifestylePhoto";

export const metadata: Metadata = {
  title: "À propos de holÀ! | Démarches en Espagne, accompagnement en français",
  description:
    "Découvrez holÀ!, un accompagnement en français pour comprendre, préparer et suivre vos démarches administratives en Espagne.",
};

export default function APropos() {
  return (
    <main className="min-h-screen bg-ivory px-8 py-16 text-navy md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-blood">
          ← holÀ!
        </Link>

        <p className="mt-20 text-xs uppercase tracking-[0.25em] text-blood">
          À propos
        </p>

        <h1
          className="mt-6 text-5xl leading-[0.95] md:text-7xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          L’Espagne vous appelle.
          <br />
          <span className="italic text-blood">On vous aide à avancer.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/75 md:text-xl">
          Un projet en Espagne soulève vite mille questions : par où commencer,
          quel document préparer, à qui s’adresser ? holÀ! vous aide à y voir
          clair et à avancer, en français, étape par étape.
        </p>

        <div className="mt-16 space-y-16 text-base leading-relaxed text-navy/75">
          <section className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <LifestylePhoto
              src="/a-propos-lifestyle-hola.webp"
              alt="Une femme marche dans une ville espagnole avec son dossier administratif"
              eyebrow="Entre la France et l’Espagne"
              compact
            />
            <div>
            <h2
              className="mb-5 text-3xl text-navy md:text-4xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Derrière holÀ!, il y a Elena.
            </h2>

            <p>
              Je m’appelle Elena Huergo Cerra. Espagnole installée en France,
              j’évolue entre deux langues, deux administrations et deux façons
              de faire. Mes études en droit et mon parcours en commerce
              international nourrissent une conviction simple : une démarche
              devient moins intimidante quand quelqu’un prend le temps de
              l’expliquer clairement.
            </p>

            <p className="mt-4">
              J’ai créé holÀ! pour accompagner les francophones qui ont un
              projet en Espagne et qui ne savent pas toujours comment
              s’orienter dans les formalités.
            </p>
            </div>
          </section>

          <section>
            <h2
              className="mb-5 text-3xl text-navy md:text-4xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Une aide concrète, à chaque étape.
            </h2>

            <p>
              Obtenir un NIE, préparer une démarche liée à un véhicule,
              organiser une installation, faire reconnaître un diplôme ou
              créer une activité : chaque situation a ses particularités. Nous
              commençons par comprendre la vôtre, puis nous identifions les
              étapes utiles, les documents à réunir et les interlocuteurs
              concernés.
            </p>
          </section>

          <section>
            <h2
              className="mb-5 text-3xl text-navy md:text-4xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Le bon accompagnement, au bon endroit.
            </h2>

            <p>
              holÀ! vous accompagne dans l’organisation et le suivi de vos
              démarches administratives. Si votre situation nécessite un avis
              juridique, fiscal ou comptable, nous pouvons faire intervenir,
              avec votre accord, un professionnel habilité. Nous restons votre
              interlocuteur pour coordonner les échanges et le suivi du dossier ;
              chaque professionnel intervient dans son domaine de compétence.
              Les décisions des administrations restent indépendantes de notre
              accompagnement.
            </p>
          </section>
        </div>

        <div className="mt-20 border-t border-navy/20 pt-10">
          <p
            className="max-w-2xl text-3xl leading-tight md:text-4xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Racontez-moi votre projet. Nous verrons ensemble par où commencer.
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
