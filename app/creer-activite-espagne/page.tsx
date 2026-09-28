import type { Metadata } from "next";
import Link from "next/link";
import LifestylePhoto from "../components/LifestylePhoto";
import PageHeader from "../components/PageHeader";
import ServiceIllustration from "../components/ServiceIllustration";

export const metadata: Metadata = {
  title: "Créer son activité ou son entreprise en Espagne",
  description:
    "Autónomo ou société en Espagne : organisez les démarches administratives de votre projet avec un accompagnement en français.",
  alternates: {
    canonical: "/creer-activite-espagne",
  },
  openGraph: {
    title: "Créer son activité en Espagne | holÀ!",
    description:
      "Une feuille de route en français pour coordonner les démarches administratives de votre activité en Espagne.",
    url: "/creer-activite-espagne",
  },
};

const projectTypes = [
  {
    title: "Devenir autónomo",
    text: "Pour exercer en nom propre, il faut coordonner l’identification, les déclarations fiscales et l’affiliation sociale adaptées à votre situation.",
  },
  {
    title: "Créer une société",
    text: "Une société implique notamment le choix d’une forme, une dénomination, des actes de constitution et plusieurs inscriptions administratives.",
  },
  {
    title: "Développer une activité existante",
    text: "Vous exercez déjà en France ? Nous aidons à organiser les questions administratives avant toute implantation ou activité en Espagne.",
  },
];

export default function CreerActiviteEspagne() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <PageHeader />

      <section className="px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Activité professionnelle · Espagne
          </p>
          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Une idée à développer.
            <br />
            <span className="italic text-blood">
              Des formalités à mettre dans le bon ordre.
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
              Créer une activité en Espagne ne commence pas par un formulaire,
              mais par votre projet : où vous travaillerez, avec qui, sous
              quelle forme et entre quels pays. holÀ! organise le parcours
              administratif et coordonne les professionnels nécessaires.
            </p>
            <div className="md:flex md:justify-end">
              <Link
                href="/demande?service=activite"
                className="inline-block bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory"
              >
                Présenter mon projet →
              </Link>
            </div>
          </div>

          <ServiceIllustration
            src="/activite-hola.webp"
            alt="Documents et outils pour créer une activité en Espagne"
          />
        </div>
      </section>

      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Votre projet
          </p>
          <h2
            className="mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Indépendant, société
            <br />
            <span className="italic">ou activité entre deux pays.</span>
          </h2>

          <div className="mt-12 grid sm:mt-16 md:mt-20 gap-10 md:grid-cols-3">
            {projectTypes.map((project, index) => (
              <article key={project.title} className="border-t border-ivory/25 pt-6">
                <span className="text-sm text-blood">0{index + 1}</span>
                <h3
                  className="mt-5 text-3xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ivory/65">
                  {project.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-10 md:gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              La feuille de route
            </p>
            <LifestylePhoto
              src="/activite-lifestyle-hola.webp"
              alt="Une porteuse de projet échange sur la création de son activité en Espagne"
              eyebrow="Passer du projet à l’activité"
              compact
            />
          </div>
          <div>
            <h2
              className="max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Savoir qui décide quoi.
              <br />
              <span className="italic text-blood">Et qui fait quoi.</span>
            </h2>

            <div className="mt-14 border-t border-navy/20">
              {[
                [
                  "Cadrer le projet",
                  "Activité, lieu d’exercice, associés éventuels, clientèle et liens conservés avec la France.",
                ],
                [
                  "Choisir avec les bons professionnels",
                  "La forme et le régime ont des conséquences juridiques, fiscales et sociales : l’avocat, le fiscaliste ou le comptable intervient lorsque son avis est requis.",
                ],
                [
                  "Préparer les identifiants et documents",
                  "NIE, accès numériques, justificatifs, dénomination et informations nécessaires selon la structure retenue.",
                ],
                [
                  "Coordonner les formalités",
                  "Nous construisons le calendrier, préparons la partie administrative convenue et suivons les échanges jusqu’à la mise en place.",
                ],
              ].map(([title, text], index) => (
                <article
                  key={title}
                  className="grid gap-4 border-b border-navy/20 py-8 md:grid-cols-[72px_1fr]"
                >
                  <span className="text-sm text-blood">0{index + 1}</span>
                  <div>
                    <h3
                      className="text-3xl"
                      style={{ fontFamily: "var(--font-editorial)" }}
                    >
                      {title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-navy/65">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEE8DE] px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:gap-16 md:grid-cols-[0.72fr_1.28fr]">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Un accompagnement coordonné
            </p>
            <div>
              <h2
                className="max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Administratif, juridique,
                <br />
                <span className="italic text-blood">fiscal et comptable.</span>
              </h2>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-navy/70">
                holÀ! reste votre interlocuteur pour la coordination et le
                suivi administratif. Les choix de structure, les consultations
                juridiques, l’analyse fiscale et la comptabilité sont réalisés
                par les professionnels habilités concernés, après votre accord.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
                Cette séparation vous permet de savoir précisément ce qui est
                inclus dans chaque intervention et qui en assume la
                responsabilité professionnelle.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {["Avocat", "Fiscaliste", "Expert-comptable"].map((role) => (
              <div key={role} className="border-t border-navy/20 pt-5">
                <p
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {role}
                </p>
                <p className="mt-2 text-sm text-navy/55">
                  Intervention selon les besoins du projet
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-sm">
            <p className="uppercase tracking-[0.18em] text-blood">
              Pour vérifier à la source
            </p>
            <a
              href="https://administracion.gob.es/pag_Home/Tramites/miEmpresaEnTramites/Iniciativas/CIRCE.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block max-w-2xl border-b border-navy/25 pb-2 transition-colors hover:text-blood"
            >
              Administration espagnole — Système CIRCE ↗
            </a>
            <a
              href="https://paeelectronico.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block max-w-2xl border-b border-navy/25 pb-2 transition-colors hover:text-blood"
            >
              PAE électronique — Création d’entreprise et alta de autónomo ↗
            </a>
          </div>
        </div>
      </section>

      <section className="mx-0 my-10 bg-blood sm:mx-8 sm:my-16 px-8 py-16 text-ivory md:mx-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
              Création d’activité en Espagne
            </p>
            <h2
              className="mt-5 text-4xl leading-[0.98] sm:text-5xl md:text-7xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Un projet cadré.
              <br />
              <span className="italic">Un devis avant de commencer.</span>
            </h2>
            <p className="mt-5 max-w-xl text-ivory/70">
              Le périmètre varie selon votre activité, la structure retenue et
              les professionnels à mobiliser. La proposition distingue chaque
              intervention et les frais externes éventuels.
            </p>
          </div>
          <Link
            href="/demande?service=activite"
            className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Présenter mon projet
            <span className="transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
