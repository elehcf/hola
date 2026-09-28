import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LifestylePhoto from "../components/LifestylePhoto";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Fiscalité et résidence France–Espagne",
  description:
    "Résidence fiscale, revenus, immobilier ou activité entre la France et l’Espagne : préparez votre situation et coordonnez les bons professionnels.",
  alternates: {
    canonical: "/fiscalite-residence-france-espagne",
  },
  openGraph: {
    title: "Fiscalité et résidence France–Espagne | holÀ!",
    description:
      "Un accompagnement en français pour clarifier votre situation, réunir les informations utiles et coordonner un professionnel habilité.",
    url: "/fiscalite-residence-france-espagne",
  },
};

const situations = [
  {
    title: "Je change de résidence",
    text: "Vous quittez la France, arrivez en Espagne ou partagez votre temps entre les deux pays. Nous réunissons les faits utiles avant toute analyse de votre résidence fiscale.",
  },
  {
    title: "J’ai des revenus dans les deux pays",
    text: "Salaire, retraite, location, dividendes ou activité indépendante : chaque catégorie de revenu peut suivre des règles différentes.",
  },
  {
    title: "Je possède un bien immobilier",
    text: "Achat, location, vente ou conservation d’un logement en France ou en Espagne peuvent créer des obligations déclaratives des deux côtés.",
  },
  {
    title: "Mon activité traverse la frontière",
    text: "Clientèle, entreprise, télétravail ou statut d’indépendant entre deux pays : nous cadrons les informations avant l’intervention fiscale ou comptable.",
  },
];

const process = [
  {
    number: "01",
    title: "Reconstituer votre situation",
    text: "Dates de présence, logements disponibles, foyer, activité, sources de revenus et liens économiques : nous vous aidons à rassembler les éléments pertinents.",
  },
  {
    number: "02",
    title: "Identifier les vraies questions",
    text: "Nous distinguons la résidence administrative de la résidence fiscale et repérons les déclarations, justificatifs ou échéances à vérifier.",
  },
  {
    number: "03",
    title: "Coordonner le spécialiste",
    text: "Lorsqu’une analyse ou une déclaration fiscale est nécessaire, un fiscaliste, un avocat ou un expert-comptable habilité intervient avec votre accord.",
  },
  {
    number: "04",
    title: "Garder un fil conducteur",
    text: "holÀ! centralise les documents, organise les échanges et suit la partie administrative convenue pour éviter que le dossier ne se disperse.",
  },
];

export default function FiscaliteResidenceFranceEspagne() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <PageHeader />

      <section className="px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Fiscalité · France ↔ Espagne
          </p>
          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Votre vie change de pays.
            <br />
            <span className="italic text-blood">
              Votre fiscalité mérite une vue d’ensemble.
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div>
              <p className="max-w-xl text-lg leading-relaxed text-navy/70">
                Vivre, travailler, percevoir une retraite ou conserver un bien
                de l’autre côté de la frontière peut soulever plusieurs
                obligations. holÀ! vous aide à poser les faits, réunir les
                documents et coordonner le professionnel compétent.
              </p>
              <Link
                href="/demande?service=fiscalite"
                className="mt-8 inline-block bg-blood px-6 py-3 text-xs uppercase tracking-[0.12em] text-ivory transition-transform hover:-translate-y-0.5"
              >
                Expliquer ma situation →
              </Link>
            </div>
            <figure className="md:justify-self-end">
              <div className="max-w-[430px] overflow-hidden">
                <Image
                  src="/fiscalite-lifestyle-hola.webp"
                  alt="Préparer une situation fiscale entre la France et l’Espagne"
                  width={1200}
                  height={900}
                  priority
                  sizes="(min-width: 768px) 38vw, 92vw"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Situations fréquentes
          </p>
          <h2
            className="mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Deux pays ne veulent pas dire
            <br />
            <span className="italic">deux fois la même réponse.</span>
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_270px] md:items-start">
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {situations.map((situation, index) => (
                <article
                  key={situation.title}
                  className="border-t border-ivory/25 py-7"
                >
                  <span className="text-sm text-blood">0{index + 1}</span>
                  <h3
                    className="mt-3 text-3xl"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {situation.title}
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-ivory/65">
                    {situation.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="hidden md:flex md:justify-end">
              <Image
                src="/fiscalite-hola.webp"
                alt="Équilibre fiscal entre la France et l’Espagne"
                width={650}
                height={520}
                sizes="270px"
                className="h-auto max-h-[270px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-10 md:gap-16 md:grid-cols-[0.68fr_1.32fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Résidence fiscale
            </p>
            <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-navy/55">
              Des faits clairs avant toute décision — et avant toute déclaration.
            </p>
          </div>
          <div>
            <h2
              className="max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Plus qu’un nombre de jours.
              <br />
              <span className="italic text-blood">
                Une situation à examiner.
              </span>
            </h2>
            <p className="mt-9 max-w-2xl text-lg leading-relaxed text-navy/70">
              Les 183 jours sont un critère important en Espagne, mais ils ne
              suffisent pas toujours à conclure. Le foyer, l’activité et le
              centre des intérêts économiques peuvent également compter. La
              France applique ses propres critères internes.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Si les deux pays vous considèrent comme résident selon leurs
              règles, la convention fiscale franco-espagnole prévoit des
              critères successifs pour résoudre ce conflit. Un titre de séjour,
              un NIE ou une adresse locale ne détermine donc pas, à lui seul,
              votre résidence fiscale.
            </p>
            <div className="mt-10 border-l-2 border-blood pl-7">
              <p className="max-w-2xl text-lg leading-relaxed">
                La convention vise à éviter une double imposition contraire à
                ses règles. Elle ne supprime pas automatiquement toutes les
                obligations déclaratives dans l’un ou l’autre pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEE8DE] px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:gap-16 md:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blood">
                Notre méthode
              </p>
              <figure className="mt-8 max-w-[330px] overflow-hidden">
                <Image
                  src="/a-propos-lifestyle-hola.webp"
                  alt="Préparer les informations avant de coordonner les professionnels compétents"
                  width={900}
                  height={675}
                  sizes="(min-width: 768px) 28vw, 88vw"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
              </figure>
            </div>
            <div>
              <h2
                className="max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Préparer avant de déclarer.
                <br />
                <span className="italic text-blood">
                  Coordonner avant de décider.
                </span>
              </h2>

              <div className="mt-14 border-t border-navy/20">
                {process.map((step) => (
                  <article
                    key={step.number}
                    className="grid gap-4 border-b border-navy/20 py-8 md:grid-cols-[72px_1fr]"
                  >
                    <span className="text-sm text-blood">{step.number}</span>
                    <div>
                      <h3
                        className="text-3xl"
                        style={{ fontFamily: "var(--font-editorial)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl leading-relaxed text-navy/65">
                        {step.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Des rôles clairs
          </p>
          <h2
            className="mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Vous gardez un interlocuteur.
            <br />
            <span className="italic text-blood">
              Chaque expert garde sa responsabilité.
            </span>
          </h2>
          <p className="mt-7 max-w-2xl leading-relaxed text-navy/65">
            Lorsque votre situation nécessite une analyse juridique en Espagne,
            holÀ! peut notamment coordonner l’intervention de
            <a
              href="https://defendum.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 border-b border-navy/25 pb-0.5 transition-colors hover:text-blood"
            >
              Defendum Abogados ↗
            </a>.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <article className="border border-navy/15 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-blood">
                holÀ!
              </p>
              <h3
                className="mt-4 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Préparation et coordination
              </h3>
              <p className="mt-5 leading-relaxed text-navy/65">
                Nous clarifions votre demande, dressons la liste des pièces,
                organisons les informations et suivons les échanges
                administratifs compris dans votre accompagnement.
              </p>
            </article>

            <article className="border border-navy/15 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-blood">
                Professionnel habilité
              </p>
              <h3
                className="mt-4 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Analyse et obligations fiscales
              </h3>
              <p className="mt-5 leading-relaxed text-navy/65">
                Le fiscaliste, l’avocat ou l’expert-comptable analyse votre
                résidence et vos revenus, formule ses recommandations et prend
                en charge les actes relevant de sa profession.
              </p>
            </article>
          </div>

          <div className="mt-16 border-t border-navy/20 pt-8 text-sm">
            <p className="uppercase tracking-[0.18em] text-blood">
              Vérifier à la source
            </p>
            <a
              href="https://www.impots.gouv.fr/resident-de-france"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block max-w-3xl border-b border-navy/25 pb-3 transition-colors hover:text-blood"
            >
              impots.gouv.fr — Résidence fiscale et critères conventionnels ↗
            </a>
            <a
              href="https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/capitulo-01-contribuyente-residencia/residencia-personas-fisicas.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block max-w-3xl border-b border-navy/25 pb-3 transition-colors hover:text-blood"
            >
              Agencia Tributaria — Résidence des personnes physiques ↗
            </a>
            <a
              href="https://www.impots.gouv.fr/version-consolidee-de-la-convention-entre-la-france-et-lespagne-modifiee-par-la-convention"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block max-w-3xl border-b border-navy/25 pb-3 transition-colors hover:text-blood"
            >
              Convention fiscale France–Espagne — version consolidée ↗
            </a>
          </div>
        </div>
      </section>

      <section className="mx-0 mb-10 bg-blood px-6 py-10 text-ivory sm:mx-8 sm:mb-16 sm:px-8 md:mx-auto md:max-w-6xl md:px-12 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
              Fiscalité France–Espagne
            </p>
            <h2
              className="mt-4 text-4xl leading-[0.98] sm:text-5xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Commençons par les faits.
              <br />
              <span className="italic">Puis mobilisons la bonne expertise.</span>
            </h2>
            <p className="mt-5 max-w-xl text-ivory/70">
              Après un premier examen, vous recevez un périmètre clair. Le
              devis distingue l’accompagnement administratif des éventuelles
              interventions fiscales, juridiques ou comptables.
            </p>
          </div>
          <Link
            href="/demande?service=fiscalite"
            className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Présenter ma situation
            <span className="transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
