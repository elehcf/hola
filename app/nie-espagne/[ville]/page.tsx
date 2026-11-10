import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "../../components/PageHeader";
import { getGuide } from "../../guides/guides-data";
import { getVille, villes } from "../villes";

type Props = {
  params: Promise<{
    ville: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return villes.map((ville) => ({
    ville: ville.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville: slug } = await params;
  const ville = getVille(slug);

  if (!ville) {
    return {};
  }

  return {
    title: ville.seoTitle,
    description: ville.description,

    alternates: {
      canonical: `/nie-espagne/${ville.slug}`,
    },

    openGraph: {
      title: `NIE à ${ville.nom} | holÀ!`,
      description: ville.description,
      url: `/nie-espagne/${ville.slug}`,
      type: "article",
      locale: "fr_FR",
    },
  };
}

type GuideTrouve = NonNullable<ReturnType<typeof getGuide>>;

const sectionTitle = "text-3xl leading-[1.02] sm:text-4xl md:text-5xl";

export default async function NieVillePage({ params }: Props) {
  const { ville: slug } = await params;
  const ville = getVille(slug);

  if (!ville) {
    notFound();
  }

  const guidesLies = ville.guides
    .map((guideSlug) => getGuide(guideSlug))
    .filter((guide): guide is GuideTrouve => guide !== undefined);

  const guideInstallation = getGuide(ville.guideInstallation);

  const autresVilles = villes.filter((v) => v.slug !== ville.slug);

  const pageUrl = `https://www.holaespagne.fr/nie-espagne/${ville.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Préparation du dossier NIE à ${ville.nom}`,
        serviceType: "Accompagnement pour la demande de NIE en Espagne",
        provider: {
          "@type": "Organization",
          name: "holÀ!",
          url: "https://www.holaespagne.fr",
        },
        areaServed: {
          "@type": "City",
          name: ville.nom,
        },
        availableLanguage: ["fr", "es"],
        url: pageUrl,
        offers: {
          "@type": "Offer",
          name: "Dossier NIE",
          price: "149",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: ville.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.r },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.holaespagne.fr/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "NIE Espagne",
            item: "https://www.holaespagne.fr/nie-espagne",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `NIE à ${ville.nom}`,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-ivory text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader />

      {/* HERO */}
      <section className="px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <nav className="text-xs text-navy/50" aria-label="Fil d’Ariane">
            <Link href="/nie-espagne" className="hover:text-blood">
              NIE Espagne
            </Link>
            <span className="mx-2">/</span>
            <span>{ville.nom}</span>
          </nav>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-blood">
            NIE · {ville.nom} · {ville.region}
          </p>

          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {ville.h1}
            <br />
            <span className="italic text-blood">{ville.h1Accent}</span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
              {ville.intro}
            </p>
            <div className="flex flex-wrap gap-4 md:justify-self-end">
              <Link
                href="/demande?service=nie"
                className="inline-block bg-blood px-6 py-3 text-xs uppercase tracking-[0.12em] text-ivory transition-transform hover:-translate-y-0.5"
              >
                Préparer mon dossier NIE →
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-navy/20 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>
                EX-15
              </p>
              <p className="mt-2 text-sm text-navy/60">Le formulaire de demande de NIE</p>
            </div>
            <div>
              <p className="text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>
                9,84 €
              </p>
              <p className="mt-2 text-sm text-navy/60">La taxe 790 code 012 pour le NIE</p>
            </div>
            <div>
              <p className="text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>
                {ville.province}
              </p>
              <p className="mt-2 text-sm text-navy/60">La province où prendre rendez-vous</p>
            </div>
          </div>
        </div>
      </section>

      {/* OÙ DÉPOSER */}
      <section className="bg-navy px-6 py-16 text-ivory sm:px-8 sm:py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">Où déposer</p>
            <h2
              className={`mt-5 ${sectionTitle}`}
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Où demander le NIE à {ville.nom} ?
            </h2>
          </div>

          <div>
            {ville.ouDeposer.map((paragraphe) => (
              <p key={paragraphe} className="mb-6 max-w-2xl text-lg leading-relaxed text-ivory/75">
                {paragraphe}
              </p>
            ))}

            <ul className="mt-4 grid gap-0">
              {ville.bureaux.map((bureau, index) => (
                <li
                  key={bureau}
                  className="grid grid-cols-[36px_1fr] border-t border-ivory/20 py-4 leading-relaxed"
                >
                  <span className="text-sm text-blood">0{index + 1}</span>
                  <span>{bureau}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-ivory/55">
              Les bureaux et les démarches qu’ils acceptent évoluent. L’adresse
              indiquée sur votre confirmation de rendez-vous est la seule qui fait foi.
            </p>
          </div>
        </div>
      </section>

      {/* RENDEZ-VOUS */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">Cita previa</p>
            <h2
              className={`mt-5 ${sectionTitle}`}
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Obtenir un rendez-vous
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-navy/70">
              Le rendez-vous ne se prend ni au commissariat ni par téléphone : il
              se réserve sur le portail national de cita previa du gouvernement
              espagnol (icp.administracionelectronica.gob.es), province par
              province. Les créneaux sont rares, publiés par vagues, et partent
              souvent en quelques minutes.
            </p>
            {ville.rendezVous.map((paragraphe) => (
              <p key={paragraphe} className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
                {paragraphe}
              </p>
            ))}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Méfiez-vous des sites qui revendent des rendez-vous : la réservation
              officielle est gratuite et nominative.
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS ET DÉLAIS */}
      <section className="bg-[#EEE8DE] px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Le dossier</p>
          <h2
            className={`mt-5 max-w-3xl ${sectionTitle}`}
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Documents et délais pour un NIE à {ville.nom}
          </h2>

          <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
            <div className="border-t border-navy/20 pt-6">
              <h3 className="text-2xl" style={{ fontFamily: "var(--font-editorial)" }}>
                Les documents à prévoir
              </h3>
              <ul className="mt-4 grid gap-3 leading-relaxed text-navy/70">
                <li>Le formulaire EX-15, rempli et signé, en original et en copie.</li>
                <li>Votre passeport ou votre carte nationale d’identité en cours de validité, en original et en copie.</li>
                <li>La preuve de paiement de la taxe 790 code 012 : 9,84 € pour un NIE, selon la Police nationale.</li>
                <li>Un justificatif du motif de la demande : compromis de vente, promesse d’embauche, document fiscal…</li>
              </ul>
              <p className="mt-4 text-sm text-navy/55">
                Le bureau peut demander des pièces complémentaires selon votre situation.
              </p>
            </div>

            <div className="border-t border-navy/20 pt-6">
              <h3 className="text-2xl" style={{ fontFamily: "var(--font-editorial)" }}>
                Les délais, sans promesse
              </h3>
              <p className="mt-4 leading-relaxed text-navy/70">
                Le délai qui pèse le plus est celui du rendez-vous : de quelques
                jours à plusieurs semaines selon le bureau et la période. Le jour
                du rendez-vous, avec un dossier complet, le certificat NIE est
                souvent remis rapidement, parfois sur place, mais chaque bureau
                garde ses propres pratiques.
              </p>
              <p className="mt-4 leading-relaxed text-navy/70">
                Un dossier incomplet, en revanche, vous renvoie au début : nouvelle
                recherche de créneau, nouvelle attente.
              </p>
            </div>

            <div className="border-t border-navy/20 pt-6">
              <h3 className="text-2xl" style={{ fontFamily: "var(--font-editorial)" }}>
                Et depuis la France ?
              </h3>
              <p className="mt-4 leading-relaxed text-navy/70">
                Dans certains cas, la demande peut passer par le consulat d’Espagne
                compétent pour votre domicile en France, selon le motif et les
                disponibilités du consulat. Le NIE obtenu est valable partout en
                Espagne, y compris à {ville.nom}. C’est souvent une bonne option
                pour un achat préparé à distance.
              </p>
            </div>

            <div className="border-t border-navy/20 pt-6">
              <h3 className="text-2xl" style={{ fontFamily: "var(--font-editorial)" }}>
                NIE seul ou installation ?
              </h3>
              <p className="mt-4 leading-relaxed text-navy/70">
                Le NIE est un numéro d’identification, pas un titre de séjour. Si
                vous vivez en Espagne plus de trois mois, la démarche à prévoir est
                le certificat d’enregistrement UE, qui comporte votre NIE.
              </p>
              {guideInstallation && (
                <Link
                  href={`/guides/${guideInstallation.slug}`}
                  className="mt-4 inline-block border-b border-navy/30 pb-1 transition-colors hover:text-blood"
                >
                  {guideInstallation.title} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXTE LOCAL */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              {ville.region}
            </p>
            <h2
              className={`mt-5 ${sectionTitle}`}
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Qui demande un NIE à {ville.nom} ?
            </h2>
          </div>
          <div>
            {ville.contexte.map((paragraphe) => (
              <p key={paragraphe} className="mb-6 max-w-2xl text-lg leading-relaxed text-navy/70">
                {paragraphe}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-0 mb-10 bg-blood px-6 py-10 text-ivory sm:mx-8 sm:mb-16 sm:px-8 md:mx-auto md:max-w-6xl md:px-12 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
              Dossier NIE · {ville.nom}
            </p>
            <h2
              className="mt-4 text-4xl leading-[0.98] sm:text-5xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              NIE à {ville.nom} : nous préparons votre dossier, 149 €
            </h2>
            <p className="mt-5 max-w-2xl text-ivory/75">
              Formulaire EX-15, taxe 790 code 012, justificatifs, choix du bureau :
              nous vérifions tout avant votre rendez-vous, en français. Nous
              confirmons d’abord que ce forfait correspond à votre situation.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/demande?service=nie"
              className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Commencer
              <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
            </Link>
            <Link href="/nie-espagne" className="text-sm text-ivory/75 hover:text-ivory">
              Voir le service NIE en détail
            </Link>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Pour aller plus loin</p>
          <div className="mt-8 grid gap-px bg-navy/15 md:grid-cols-3">
            {guidesLies.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group bg-ivory p-8 transition-colors hover:text-blood"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-navy/50">{guide.eyebrow}</p>
                <p className="mt-4 text-2xl leading-tight" style={{ fontFamily: "var(--font-editorial)" }}>
                  {guide.title}
                </p>
                <span className="mt-6 inline-block text-sm">Lire le guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-16 sm:px-8 md:px-16 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Questions fréquentes</p>
          <h2
            className="mt-5 text-4xl leading-[0.98] sm:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            NIE à {ville.nom} : vos questions
          </h2>
          <div className="mt-12">
            {ville.faq.map((item) => (
              <details key={item.q} className="group border-t border-navy/20 py-6">
                <summary
                  className="cursor-pointer list-none text-xl md:text-2xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {item.q}
                  <span className="ml-3 inline-block text-blood transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-navy/70">{item.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AUTRES VILLES + SOURCES */}
      <section className="border-t border-navy/15 px-6 py-12 sm:px-8 md:px-16 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Le NIE dans d’autres villes</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {autresVilles.map((v) => (
              <Link
                key={v.slug}
                href={`/nie-espagne/${v.slug}`}
                className="border-b border-navy/25 pb-0.5 text-navy/75 transition-colors hover:text-blood"
              >
                NIE à {v.nom}
              </Link>
            ))}
          </div>

          <p className="mt-12 text-sm leading-relaxed text-navy/55">
            Sources :{" "}
            {ville.sources.map((source, index) => (
              <span key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-navy/25 underline-offset-2 hover:text-blood"
                >
                  {source.label}
                </a>
                {index < ville.sources.length - 1 ? " · " : ""}
              </span>
            ))}
            . Informations vérifiées en novembre 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
