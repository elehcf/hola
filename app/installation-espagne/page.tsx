import type { Metadata } from "next";
import Link from "next/link";
import LifestylePhoto from "../components/LifestylePhoto";
import PageHeader from "../components/PageHeader";
import ServiceIllustration from "../components/ServiceIllustration";

export const metadata: Metadata = {
  title: "S’installer en Espagne : démarches pour les Français",
  description:
    "Résidence, empadronamiento, santé, logement, école et démarches du quotidien : organisez votre installation en Espagne depuis la France.",
  alternates: {
    canonical: "/installation-espagne",
  },
  openGraph: {
    title: "S’installer en Espagne : vos démarches | holÀ!",
    description:
      "Préparez votre installation en Espagne dans le bon ordre, avec un accompagnement en français adapté à votre situation.",
    url: "/installation-espagne",
  },
};

const essentialSteps = [
  {
    number: "01",
    title: "On commence par vous",
    text: "Salarié, indépendant, retraité, étudiant ou sans activité : votre statut détermine une partie des justificatifs et des démarches.",
  },
  {
    number: "02",
    title: "Résidence et NIE",
    text: "Un citoyen de l’Union qui prévoit de vivre en Espagne plus de trois mois doit demander son certificat d’enregistrement dans les trois mois suivant son arrivée. Ce certificat comporte également un NIE.",
  },
  {
    number: "03",
    title: "Empadronamiento",
    text: "L’inscription auprès de la commune atteste votre adresse locale et intervient ensuite dans différentes démarches. Les justificatifs dépendent de votre logement et de la mairie.",
  },
  {
    number: "04",
    title: "Protection sociale et santé",
    text: "Les démarches diffèrent selon que vous travaillez en Espagne, êtes détaché, retraité, transfrontalier ou dépendez encore d’un régime français.",
  },
  {
    number: "05",
    title: "Accès administratifs",
    text: "Cl@ve, certificat numérique et autres accès en ligne facilitent de nombreuses formalités une fois installé. Nous identifions ceux qui vous seront réellement utiles.",
  },
  {
    number: "06",
    title: "La suite de votre vie en Espagne",
    text: "Logement, scolarité, banque, véhicule ou activité professionnelle : nous intégrons ces besoins dans une même feuille de route.",
  },
];

const dailyLife = [
  {
    title: "Trouver un logement",
    text: "Nous vous aidons à anticiper les justificatifs utiles et pouvons organiser une mise en relation avec des agences partenaires selon votre destination. La sélection du bien et le contrat restent distincts de notre accompagnement administratif.",
  },
  {
    title: "Scolariser vos enfants",
    text: "Public, privé ou international : nous vous aidons à identifier le premier interlocuteur et à préparer les documents demandés. Les règles et les places disponibles dépendent de la région et de l’établissement.",
  },
  {
    title: "Ouvrir un compte bancaire",
    text: "Nous vous indiquons les pièces généralement nécessaires et vous aidons à présenter une situation claire. Chaque établissement reste libre d’accepter l’ouverture du compte.",
  },
  {
    title: "Coordonner votre couverture sociale",
    text: "Nous faisons le point sur les organismes et formulaires susceptibles de vous concerner entre la France et l’Espagne. Le régime compétent dépend de votre situation réelle.",
  },
  {
    title: "Comprendre votre situation fiscale",
    text: "Nous repérons les questions à traiter et rassemblons les informations utiles. Lorsqu’une analyse de résidence fiscale ou de double imposition est nécessaire, elle est confiée à un professionnel habilité.",
    href: "/fiscalite-residence-france-espagne",
  },
  {
    title: "Commencer une activité",
    text: "Autónomo ou société : nous coordonnons la feuille de route administrative et l’intervention des professionnels juridiques, fiscaux et comptables concernés.",
    href: "/creer-activite-espagne",
  },
];

export default function InstallationEspagne() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <PageHeader />

      <section className="px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Installation · Espagne
          </p>
          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Vous changez de pays.
            <br />
            <span className="italic text-blood">
              Pas besoin de vous perdre en route.
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
              S’installer en Espagne, ce n’est pas seulement obtenir un numéro
              ou remplir un formulaire. Résidence, adresse, santé, logement,
              école ou banque peuvent se croiser. Nous construisons avec vous
              un parcours cohérent, depuis la France jusqu’à votre installation.
            </p>
            <div className="md:flex md:justify-end">
              <Link
                href="/demande?service=installation"
                className="inline-block bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory"
              >
                Préparer mon installation →
              </Link>
            </div>
          </div>

          <ServiceIllustration
            src="/installation-hola.webp"
            alt="Valise, clé et documents pour une installation en Espagne"
            portrait
          />
        </div>
      </section>

      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Votre parcours administratif
          </p>
          <h2
            className="mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Les étapes essentielles.
            <br />
            <span className="italic">Dans votre ordre.</span>
          </h2>

          <div className="mt-12 grid sm:mt-16 md:mt-20 gap-x-12 md:grid-cols-2">
            {essentialSteps.map((step) => (
              <article
                key={step.number}
                className="border-t border-ivory/25 py-7"
              >
                <span className="text-sm text-blood">{step.number}</span>
                <h3
                  className="mt-3 text-3xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ivory/60">
                  {step.text}
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
              Chaque installation est différente
            </p>
            <LifestylePhoto
              src="/installation-lifestyle-hola.webp"
              alt="Une femme découvre son nouveau logement en Espagne parmi les cartons"
              eyebrow="Votre nouvelle vie commence ici"
              compact
            />
          </div>
          <div>
            <h2
              className="max-w-3xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Salarié, indépendant,
              <br />
              retraité, étudiant…
              <br />
              <span className="italic text-blood">
                les démarches changent.
              </span>
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
              Il n’existe pas une checklist unique pour tous les Français qui
              s’installent en Espagne. Votre activité, vos ressources, votre
              couverture santé, votre famille et la durée prévue de votre séjour
              modifient les documents à fournir.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Nous distinguons ce qui peut être préparé depuis la France, ce qui
              doit attendre votre arrivée et ce qui exige votre présence. Vous
              savez ainsi quoi faire, quand et avec quel interlocuteur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EEE8DE] px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Au-delà des formulaires
            </p>
            <div>
              <h2
                className="max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Préparer votre arrivée.
                <br />
                <span className="italic text-blood">
                  Puis votre quotidien.
                </span>
              </h2>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-navy/70">
                Votre accompagnement peut intégrer les sujets qui conditionnent
                concrètement votre installation. Le devis précise ceux que nous
                prenons en charge, ceux que vous réalisez vous-même et ceux qui
                nécessitent un partenaire spécialisé.
              </p>
            </div>
          </div>

          <div className="mt-12 grid sm:mt-16 md:mt-20 gap-x-14 gap-y-12 md:grid-cols-2">
            {dailyLife.map((item) => (
              <article key={item.title} className="border-t border-navy/20 pt-6">
                <h3
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-navy/65">
                  {item.text}
                </p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-5 inline-block border-b border-navy/30 pb-1 text-sm transition-colors hover:border-blood hover:text-blood"
                  >
                    Découvrir cet accompagnement →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Comprendre
            </p>
            <div>
              <h2
                className="text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Les questions qui reviennent
                <br />
                <span className="italic text-blood">avant le départ.</span>
              </h2>
            </div>
          </div>

          <div className="mt-12 grid sm:mt-16 md:mt-20 gap-x-16 gap-y-12 md:grid-cols-2">
            <article className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Faut-il demander un NIE séparément ?
              </h3>
              <p className="mt-4 leading-relaxed text-navy/65">
                Pas toujours. Le certificat d’enregistrement comme citoyen de
                l’Union comporte lui-même un NIE. Nous vérifions donc l’objectif
                et le calendrier avant de vous faire engager une démarche
                distincte.
              </p>
              <Link
                href="/nie-espagne"
                className="mt-5 inline-block border-b border-navy/30 pb-1 transition-colors hover:text-blood"
              >
                Comprendre le NIE →
              </Link>
            </article>

            <article className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Puis-je conserver ma couverture française ?
              </h3>
              <p className="mt-4 leading-relaxed text-navy/65">
                Cela dépend de votre statut. Un travailleur détaché, un
                transfrontalier, un pensionné ou une personne qui commence à
                travailler en Espagne ne relèvent pas nécessairement du même
                régime ni des mêmes formulaires.
              </p>
            </article>

            <article className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Puis-je tout préparer depuis la France ?
              </h3>
              <p className="mt-4 leading-relaxed text-navy/65">
                Une partie, oui : analyse de votre situation, documents et
                calendrier. D’autres étapes exigent une adresse locale, un
                rendez-vous ou votre présence en Espagne. Nous les identifions
                avant votre départ.
              </p>
            </article>

            <article className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Et la fiscalité entre les deux pays ?
              </h3>
              <p className="mt-4 leading-relaxed text-navy/65">
                Le changement de résidence, les revenus conservés en France ou
                une activité entre les deux pays peuvent nécessiter une analyse
                fiscale. Nous préparons le contexte et coordonnons un spécialiste
                lorsque cet avis est nécessaire.
              </p>
              <Link
                href="/fiscalite-residence-france-espagne"
                className="mt-5 inline-block border-b border-navy/30 pb-1 transition-colors hover:text-blood"
              >
                Comprendre cet accompagnement →
              </Link>
            </article>
          </div>

          <div className="mt-16 border-t border-navy/20 pt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Pour aller plus loin
            </p>
            <Link
              href="/guides/s-installer-en-espagne"
              className="mt-5 inline-block text-2xl transition-colors hover:text-blood"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Lire notre guide complet pour s’installer en Espagne →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-0 mb-10 bg-blood sm:mx-8 sm:mb-16 px-8 py-16 text-ivory md:mx-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
              Installation en Espagne
            </p>
            <h2
              className="mt-5 text-4xl leading-[0.98] sm:text-5xl md:text-7xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              À partir de 490 €
            </h2>
            <p className="mt-5 max-w-xl text-ivory/70">
              Nous déterminons avec vous les démarches nécessaires. Avant de
              commencer, vous recevez un devis précisant les étapes comprises,
              les interventions de partenaires et les éventuels frais
              administratifs à régler séparément.
            </p>
          </div>
          <Link
            href="/demande?service=installation"
            className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Préparer mon installation
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
