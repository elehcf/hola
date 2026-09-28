import type { Metadata } from "next";
import Link from "next/link";
import SiteLogo from "../components/SiteLogo";

export const metadata: Metadata = {
  title: "Notre réseau en Espagne",
  description:
    "Un seul point d’entrée pour aller plus loin en Espagne : démarches administratives, accompagnement juridique, rénovation et stratégie d’entreprise.",
  alternates: { canonical: "/collaborateurs" },
};

const collaborators = [
  {
    number: "01",
    name: "Innova y Mejora",
    area: "Rénovation & aménagement",
    text: "Pour les projets immobiliers qui dépassent les démarches administratives : rénovation intégrale de logements et de locaux, réhabilitation et projets clé en main en Asturies.",
    when: "Achat d’un bien à rénover, installation, local professionnel ou projet nécessitant des travaux.",
    href: "https://reformasgijon.es/",
  },
  {
    number: "02",
    name: "Defendum Abogados",
    area: "Conseil juridique en Espagne",
    text: "Cabinet d’avocats et d’économistes basé à Gijón, intervenant auprès des particuliers, des familles et des entreprises dans différentes branches du droit espagnol.",
    when: "Lorsqu’une démarche nécessite un véritable conseil juridique, une analyse contractuelle ou la défense de vos intérêts en Espagne.",
    href: "https://defendum.es/",
  },
  {
    number: "03",
    name: "Decisión Estratégica",
    area: "Conseil aux entreprises",
    text: "Cabinet de conseil spécialisé en stratégie, organisation, commercialisation, marketing et gestion, avec une expertise particulière dans l’accompagnement des entreprises.",
    when: "Création ou développement d’une activité, structuration d’un projet, organisation, stratégie commerciale ou développement en Espagne.",
    href: "https://decisionestrategica.com/",
  },
];

export default function Collaborateurs() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <header className="flex items-center justify-between px-6 py-6 sm:px-8 sm:py-8 md:px-16">
        <SiteLogo />
        <Link
          href="/"
          className="border-b border-navy/25 pb-1 text-sm transition-colors hover:border-blood hover:text-blood"
        >
          Retour à l’accueil
        </Link>
      </header>

      <section className="px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            L’écosystème holÀ!
          </p>
          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Votre projet en Espagne,
            <br />
            <span className="italic text-blood">bien au-delà des démarches.</span>
          </h1>
          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Un seul point d’entrée
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-navy/70 md:text-xl">
              S’installer, acheter, rénover ou entreprendre en Espagne fait vite
              intervenir plusieurs métiers. holÀ! reste votre fil conducteur et
              vous ouvre l’accès à un réseau professionnel établi en Espagne pour
              poursuivre le projet, sans repartir de zéro à chaque nouvelle étape.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-16 text-ivory sm:px-8 sm:py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Aller plus loin avec holÀ!
          </p>
          <div className="mt-12 border-t border-ivory/20 sm:mt-16">
            {collaborators.map((collaborator) => (
              <article
                key={collaborator.name}
                className="grid gap-6 border-b border-ivory/20 py-10 md:grid-cols-[70px_0.85fr_1.15fr] md:gap-10 md:py-14"
              >
                <span className="text-sm text-blood">{collaborator.number}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ivory/45">
                    {collaborator.area}
                  </p>
                  <h2
                    className="mt-3 text-4xl leading-none sm:text-5xl"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {collaborator.name}
                  </h2>
                </div>
                <div>
                  <p className="max-w-xl leading-relaxed text-ivory/70">
                    {collaborator.text}
                  </p>
                  <div className="mt-6 border-t border-ivory/15 pt-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-blood">
                      Pour quels projets ?
                    </p>
                    <p className="mt-3 max-w-xl leading-relaxed text-ivory/60">
                      {collaborator.when}
                    </p>
                  </div>
                  <a
                    href={collaborator.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-block border-b border-ivory/35 pb-1 transition-colors hover:border-blood hover:text-blood"
                  >
                    En savoir plus →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Une continuité
          </p>
          <div>
            <h2
              className="text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Un projet.
              <br />
              <span className="italic text-blood">Un réseau qui suit.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/70">
              Vous commencez avec holÀ! et, lorsque votre projet nécessite une
              expertise complémentaire, nous organisons la continuité avec le
              professionnel adapté. Vous gardez un interlocuteur qui comprend le
              contexte et évitez de reconstruire votre dossier à chaque étape.
              Les prestations spécialisées sont réalisées par les professionnels
              concernés, chacun dans son domaine d’expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="px-0 pb-10 sm:px-8 sm:pb-16 md:px-16 md:pb-24">
        <div className="mx-auto max-w-6xl bg-blood px-6 py-12 text-ivory sm:px-8 sm:py-16 md:px-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-ivory/65">
                Votre projet
              </p>
              <h2
                className="mt-5 max-w-3xl text-4xl leading-[0.98] sm:text-5xl md:text-7xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Plusieurs besoins ?
                <br />
                <span className="italic">Un seul point de départ.</span>
              </h2>
            </div>
            <Link
              href="/demande"
              className="border-b border-ivory pb-2 text-lg"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Expliquer ma situation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
