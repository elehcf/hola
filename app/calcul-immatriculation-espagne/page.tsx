import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import CalculImmatForm from "../components/CalculImmatForm";

export const metadata: Metadata = {
  title: "Immatriculation en Espagne : prix et calculateur 2026",

  description:
    "Combien coûte l’immatriculation de votre voiture française en Espagne ? Impôt d’immatriculation selon le CO2 et l’âge, taxe DGT, exonération en cas de déménagement : estimez le prix en 1 minute.",

  alternates: {
    canonical: "/calcul-immatriculation-espagne",
  },

  openGraph: {
    title: "Calculateur 2026 : le prix de la plaque espagnole | holÀ!",
    description:
      "Impuesto de matriculación, taxe DGT, exonération pour changement de résidence : estimez ce que coûte l’immatriculation de votre voiture française en Espagne.",
    url: "/calcul-immatriculation-espagne",
  },
};

const tranches = [
  ["120 g/km ou moins", "0 %"],
  ["Plus de 120 et moins de 160 g/km", "4,75 %"],
  ["De 160 à moins de 200 g/km", "9,75 %"],
  ["200 g/km ou plus", "14,75 %"],
];

const faq = [
  {
    q: "Combien coûte l’immatriculation d’une voiture française en Espagne ?",
    r: "Il faut compter la taxe DGT de 99,77 €, le passage à l’ITV et les plaques, puis l’impôt d’immatriculation (IEDMT). Ce dernier va de 0 € à plusieurs milliers d’euros selon les émissions de CO2, la valeur et l’âge de la voiture. Il est nul si la voiture émet 120 g/km ou moins, ou si vous bénéficiez de l’exonération pour changement de résidence.",
  },
  {
    q: "Comment est calculé l’impuesto de matriculación pour une voiture d’occasion ?",
    r: "La base est la valeur de marché de la voiture. En pratique, on part du prix moyen fixé par les tables de Hacienda pour le modèle, auquel on applique un pourcentage selon l’âge (84 % entre 1 et 2 ans, 47 % entre 4 et 5 ans, 10 % au-delà de 12 ans). Pour une voiture déjà immatriculée à l’étranger, on retire ensuite la part des taxes indirectes comprise dans cette valeur. Le taux dépend des émissions de CO2.",
  },
  {
    q: "Mon déménagement en Espagne me dispense-t-il de l’impôt ?",
    r: "Oui, si vous remplissez toutes les conditions de l’exonération pour changement de résidence. Il faut avoir vécu au moins 12 mois consécutifs hors d’Espagne, avoir utilisé la voiture au moins 6 mois avant le départ, l’avoir achetée avec la TVA normale, demander l’immatriculation dans les 60 jours et ne pas la vendre pendant 12 mois. L’exonération doit être reconnue au préalable par la Agencia Tributaria.",
  },
  {
    q: "Quel est le délai pour immatriculer sa voiture en Espagne ?",
    r: "En principe 30 jours à partir du début de l’utilisation de la voiture en Espagne. Ce délai passe à 60 jours quand la voiture arrive avec vous dans le cadre d’un changement de résidence et que l’exonération s’applique.",
  },
  {
    q: "Quelle valeur de CO2 retenir ?",
    r: "Les émissions officielles de CO2 de la voiture, indiquées en case V.7 de la carte grise française ou sur le certificat de conformité. Si les émissions ne peuvent pas être justifiées, la voiture est taxée dans la tranche la plus élevée.",
  },
  {
    q: "Faut-il aussi payer une taxe de circulation ?",
    r: "Oui, l’impôt sur les véhicules (IVTM) est un impôt municipal annuel. Son montant dépend de la commune où la voiture est immatriculée et de sa puissance fiscale : renseignez-vous auprès de votre mairie.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Calculateur du coût d’immatriculation en Espagne",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      inLanguage: "fr",
      url: "https://www.holaespagne.fr/calcul-immatriculation-espagne",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      provider: { "@type": "Organization", name: "holÀ!", url: "https://www.holaespagne.fr" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.r },
      })),
    },
  ],
};

export default function CalculImmatriculation() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader />

      {/* HERO */}
      <section className="px-6 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 md:px-16 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Calculateur 2026 · Plaque espagnole
          </p>

          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Combien coûte l’immatriculation de votre voiture française
            <span className="italic text-blood"> en Espagne ?</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
            Impôt d’immatriculation selon le CO2 et l’âge de la voiture, taxe
            de la DGT, exonération si vous déménagez : trois informations
            suffisent pour estimer le prix de vos plaques espagnoles.
          </p>
        </div>
      </section>

      {/* CALCULATEUR */}
      <section id="calculateur" className="scroll-mt-8 px-0 pb-16 sm:px-8 sm:pb-24 md:px-16">
        <div className="mx-auto max-w-4xl">
          <CalculImmatForm />
        </div>
      </section>

      {/* CALCUL DE L'IMPÔT */}
      <section className="bg-[#EEE8DE] px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">Le détail</p>
          </div>
          <div>
            <h2
              className="max-w-3xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Comment est calculé l’impôt d’immatriculation
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
              L’impuesto especial sobre determinados medios de transporte
              (IEDMT) se déclare avec le modèle 576, avant l’immatriculation
              définitive. Son taux dépend des émissions officielles de CO2 de
              la voiture.
            </p>

            <div className="mt-10 grid gap-px bg-navy/15 sm:grid-cols-2">
              {tranches.map(([seuil, taux]) => (
                <div key={seuil} className="bg-ivory p-6">
                  <p className="text-sm uppercase tracking-[0.15em] text-navy/60">{seuil}</p>
                  <p className="mt-3 text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>
                    {taux}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-navy/55">
              Taux applicables dans la péninsule et aux Baléares, sauf taux
              propre voté par la communauté autonome. Les Canaries appliquent
              des taux réduits d’un point.
            </p>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
              Pour une voiture d’occasion, la base est sa valeur de marché. On
              part du prix moyen du modèle dans les tables officielles de
              Hacienda, puis on applique un pourcentage selon les années
              d’utilisation : 100 % la première année, 67 % entre 2 et 3 ans,
              39 % entre 5 et 6 ans, 10 % au-delà de 12 ans.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Comme la voiture a déjà été taxée en France, on retire de cette
              valeur la part des taxes indirectes qu’elle contient (TVA et
              impôt d’immatriculation). Notre calculateur suit cette méthode à
              partir du prix neuf que vous indiquez.
            </p>
          </div>
        </div>
      </section>

      {/* EXONÉRATION */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">Déménagement</p>
          </div>
          <div>
            <h2
              className="max-w-3xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              L’exonération pour changement de résidence
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
              Si votre voiture vous suit parce que vous vous installez en
              Espagne, vous pouvez ne rien payer au titre de l’impôt
              d’immatriculation. La loi pose plusieurs conditions, toutes
              cumulatives.
            </p>

            <div className="mt-10 grid gap-x-12 md:grid-cols-2">
              {[
                ["12 mois hors d’Espagne", "Votre résidence habituelle était hors d’Espagne pendant au moins les 12 mois consécutifs précédant le déménagement."],
                ["6 mois d’utilisation", "Vous utilisiez déjà la voiture dans votre ancienne résidence au moins 6 mois avant de la quitter."],
                ["TVA normale payée", "La voiture a été achetée aux conditions fiscales normales du pays d’origine, sans exonération ni remboursement à la sortie."],
                ["60 jours pour immatriculer", "L’immatriculation est demandée dans les 60 jours suivant le début de l’utilisation de la voiture en Espagne."],
                ["12 mois sans vendre", "La voiture ne peut pas être vendue pendant les 12 mois qui suivent l’immatriculation, sinon l’impôt devient dû."],
                ["Reconnaissance préalable", "L’exonération doit être reconnue par la Agencia Tributaria avant l’immatriculation."],
              ].map(([titre, texte]) => (
                <div key={titre} className="border-t border-navy/20 py-6">
                  <h3 className="text-2xl" style={{ fontFamily: "var(--font-editorial)" }}>
                    {titre}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy/65">{texte}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-blood pl-6">
              <p className="max-w-xl text-2xl italic" style={{ fontFamily: "var(--font-editorial)" }}>
                Un délai manqué et l’exonération tombe. C’est le point que nous
                surveillons en premier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIX */}
      <section className="mx-0 mb-16 bg-blood px-6 py-10 text-ivory sm:mx-8 sm:px-8 md:mx-auto md:max-w-6xl md:px-12 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
              On s’occupe de tout le dossier
            </p>
            <h2
              className="mt-4 text-4xl leading-[0.98] sm:text-5xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              449 €, taxes en sus
            </h2>
            <p className="mt-5 max-w-xl text-ivory/70">
              Vérification de l’exonération, modèle 576 ou demande
              d’exonération, ITV, DGT : nous préparons et suivons chaque étape
              en français.{" "}
              <Link href="/immatriculation-voiture-espagne" className="border-b border-ivory/50 text-ivory">
                Voir le détail de l’accompagnement
              </Link>
            </p>
          </div>
          <Link
            href="/demande?service=vehicule"
            className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Commencer
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24 sm:px-8 md:px-16 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Questions fréquentes</p>
          <h2
            className="mt-5 text-4xl leading-[0.98] sm:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Immatriculation en Espagne : vos questions
          </h2>
          <div className="mt-12">
            {faq.map((item) => (
              <details key={item.q} className="group border-t border-navy/20 py-6">
                <summary className="cursor-pointer list-none text-xl md:text-2xl" style={{ fontFamily: "var(--font-editorial)" }}>
                  {item.q}
                  <span className="ml-3 text-blood transition-transform group-open:rotate-45 inline-block">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-navy/70">{item.r}</p>
              </details>
            ))}
          </div>

          <p className="mt-12 text-sm leading-relaxed text-navy/55">
            Sources :{" "}
            <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1992-28741" target="_blank" rel="noopener noreferrer" className="border-b border-navy/30 hover:text-blood">
              Ley 38/1992, art. 65, 66, 69 et 70
            </a>
            ,{" "}
            <a href="https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/impuesto-matriculacion/modelo-576-impue_____eterminados-medios-transporte-autoliquidacion_/instrucciones.html" target="_blank" rel="noopener noreferrer" className="border-b border-navy/30 hover:text-blood">
              Agencia Tributaria, instructions du modèle 576
            </a>
            ,{" "}
            <a href="https://www.boe.es/boe/dias/2025/12/23/pdfs/BOE-A-2025-26357.pdf" target="_blank" rel="noopener noreferrer" className="border-b border-navy/30 hover:text-blood">
              Orden HAC/1501/2025 (prix moyens 2026)
            </a>
            ,{" "}
            <a href="https://sede.dgt.gob.es/es/asistentes/asistente-tasas/" target="_blank" rel="noopener noreferrer" className="border-b border-navy/30 hover:text-blood">
              DGT, assistant des taxes
            </a>
            .
          </p>

          <p className="mt-8 text-navy/60">
            Vous préparez votre départ ?{" "}
            <Link href="/installation-espagne" className="border-b border-navy/30 pb-1 hover:text-blood">
              Voir les démarches pour s’installer en Espagne →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
