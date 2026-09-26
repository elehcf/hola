import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Faire reconnaître un diplôme français en Espagne",
  description:
    "Homologation, équivalence ou reconnaissance professionnelle : identifiez la procédure adaptée et préparez votre dossier de diplôme étranger en Espagne.",
  alternates: {
    canonical: "/reconnaissance-diplome-espagne",
  },
  openGraph: {
    title: "Reconnaissance de diplôme en Espagne | holÀ!",
    description:
      "Nous vous aidons à identifier la procédure et à préparer votre dossier de diplôme étranger en Espagne.",
    url: "/reconnaissance-diplome-espagne",
  },
};

const procedures = [
  {
    number: "01",
    title: "Homologation",
    text: "Elle concerne les titres donnant accès à certaines professions réglementées en Espagne. Le diplôme, la profession visée et votre parcours déterminent les exigences du dossier.",
  },
  {
    number: "02",
    title: "Déclaration d’équivalence",
    text: "Elle permet de faire reconnaître le niveau académique d’un diplôme universitaire étranger lorsqu’il ne s’agit pas d’obtenir l’accès à une profession réglementée.",
  },
  {
    number: "03",
    title: "Autre reconnaissance",
    text: "Certaines professions, formations non universitaires ou demandes d’employeurs relèvent d’une autre procédure. Nous vérifions d’abord le bon interlocuteur.",
  },
];

export default function ReconnaissanceDiplomeEspagne() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <PageHeader />

      <section className="px-8 pb-28 pt-20 md:px-16 md:pb-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Diplômes · France → Espagne
          </p>
          <h1
            className="mt-6 max-w-5xl text-6xl leading-[0.9] md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Votre diplôme a traversé la frontière.
            <br />
            <span className="italic text-blood">
              Encore faut-il choisir la bonne procédure.
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
              Homologation, équivalence, reconnaissance professionnelle… ces
              démarches ne produisent pas le même effet. holÀ! commence par
              votre objectif en Espagne, puis vous aide à préparer le dossier
              correspondant et à suivre les étapes administratives.
            </p>
            <div className="md:flex md:justify-end">
              <Link
                href="/demande?service=diplome"
                className="inline-block bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory"
              >
                Parler de mon diplôme →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            La première décision
          </p>
          <h2
            className="mt-5 max-w-4xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Le même diplôme.
            <br />
            <span className="italic">Trois questions différentes.</span>
          </h2>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {procedures.map((procedure) => (
              <article
                key={procedure.number}
                className="border-t border-ivory/25 pt-6"
              >
                <span className="text-sm text-blood">{procedure.number}</span>
                <h3
                  className="mt-5 text-3xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {procedure.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ivory/65">
                  {procedure.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.68fr_1.32fr]">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Notre accompagnement
          </p>
          <div>
            <h2
              className="max-w-4xl text-5xl leading-[0.95] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Un dossier construit
              <br />
              <span className="italic text-blood">pour votre objectif.</span>
            </h2>

            <div className="mt-14 border-t border-navy/20">
              {[
                [
                  "Comprendre votre besoin",
                  "Profession visée, poursuite d’études, concours ou demande d’un employeur : le résultat attendu détermine la procédure.",
                ],
                [
                  "Vérifier les pièces",
                  "Titre, relevés ou certificat académique, identité, traductions officielles et formalités documentaires selon l’origine des pièces.",
                ],
                [
                  "Préparer la demande",
                  "Nous organisons les informations, vérifions la cohérence du dossier et vous guidons pour le dépôt électronique.",
                ],
                [
                  "Suivre l’expedient",
                  "Nous vous aidons à comprendre les demandes complémentaires et à garder une trace claire des échanges.",
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

      <section className="bg-[#EEE8DE] px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              À savoir
            </p>
            <h2
              className="mt-5 text-5xl leading-[0.95] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Traduire ne suffit pas toujours.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-navy/70">
            <p>
              Les documents en français peuvent nécessiter une traduction
              officielle en espagnol. Les règles de légalisation, en revanche,
              dépendent notamment du pays d’émission ; les documents provenant
              de l’Union européenne bénéficient de règles spécifiques.
            </p>
            <p>
              La décision finale appartient à l’autorité compétente. Notre
              accompagnement porte sur l’identification de la procédure, la
              préparation et le suivi administratif du dossier ; il ne garantit
              ni l’issue ni le délai de traitement.
            </p>
            <div className="pt-3 text-sm">
              <p className="uppercase tracking-[0.18em] text-blood">
                Sources officielles
              </p>
              <a
                href="https://www.ciencia.gob.es/Universidades/validate.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block border-b border-navy/25 pb-2 transition-colors hover:text-blood"
              >
                Ministère espagnol — Reconnaissance des titres ↗
              </a>
              <a
                href="https://universidades.sede.gob.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block border-b border-navy/25 pb-2 transition-colors hover:text-blood"
              >
                Sede electrónica — Procédures et suivi ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-8 my-16 bg-blood px-8 py-16 text-ivory md:mx-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
              Reconnaissance de diplôme
            </p>
            <h2
              className="mt-5 text-5xl leading-[0.95] md:text-7xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Un accompagnement
              <br />
              <span className="italic">adapté au dossier.</span>
            </h2>
            <p className="mt-5 max-w-xl text-ivory/70">
              Après un premier échange, vous recevez une proposition précisant
              les étapes incluses, notre tarif et les frais administratifs à
              régler séparément.
            </p>
          </div>
          <Link
            href="/demande?service=diplome"
            className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Étudier mon dossier
            <span className="transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
