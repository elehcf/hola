import type { Metadata } from "next";
import Link from "next/link";
import LifestylePhoto from "../components/LifestylePhoto";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "À propos de holÀ! | Démarches en Espagne, accompagnement en français",
  description:
    "Découvrez holÀ!, un accompagnement en français pour comprendre, préparer et suivre vos démarches administratives en Espagne.",
};

export default function APropos() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <PageHeader />
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-24 md:pt-20">
        <p className="text-xs uppercase tracking-[0.25em] text-blood">
          À propos
        </p>

        <h1
          className="mt-6 text-4xl leading-[0.98] sm:text-5xl md:text-7xl"
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
            <div className="max-w-[330px]">
              <p className="text-xs uppercase tracking-[0.22em] text-blood">
                Entre la France et l’Espagne
              </p>
              <div className="mt-5 aspect-[4/5] border border-navy/15 bg-[#EEE8DE] p-6">
                <div className="flex h-full items-end border-l border-blood pl-5">
                  <p
                    className="max-w-[190px] text-2xl leading-tight"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    Elena Huergo Cerra
                    <br />
                    <span className="italic text-blood">fondatrice de holÀ!</span>
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-navy/45">
                Portrait à intégrer
              </p>
            </div>
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

          <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
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
            </div>
            <LifestylePhoto
              src="/a-propos-lifestyle-hola.webp"
              alt="Un projet en Espagne accompagné étape par étape"
              eyebrow="Un fil conducteur"
              compact
            />
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

        <div className="mt-12 bg-blood px-7 py-8 text-ivory sm:mt-16 sm:px-9 sm:py-10 md:mt-20 md:max-w-3xl">
          <p
            className="max-w-2xl text-3xl leading-tight md:text-4xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Racontez-moi votre projet.
            <br />
            <span className="italic">Nous verrons ensemble par où commencer.</span>
          </p>

          <Link
            href="/demande"
            className="mt-7 inline-block border-b border-ivory/70 pb-1 text-sm transition-opacity hover:opacity-80"
          >
            Expliquer ma situation →
          </Link>
        </div>
      </div>
    </main>
  );
}
