import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteLogo from "./components/SiteLogo";

export const metadata: Metadata = {
  title: "Assistance administrative en Espagne pour les Français",
  description:
    "holÀ! vous accompagne dans vos démarches en Espagne : NIE, véhicule, installation, diplôme, création d’activité, fiscalité et dossiers France–Espagne.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "holÀ! | Assistance administrative en Espagne",
    description:
      "Vos démarches personnelles et professionnelles en Espagne, organisées simplement et en français.",
    url: "/",
  },
};

const services = [
  {
    number: "01",
    title: "Obtenir mon NIE",
    description:
      "Comprendre la bonne procédure, préparer les justificatifs et éviter les dossiers incomplets.",
    href: "/nie-espagne",
  },
  {
    number: "02",
    title: "Immatriculer mon véhicule",
    description:
      "Organiser les documents, l’ITV, la fiscalité et les étapes auprès de la DGT.",
    href: "/immatriculation-voiture-espagne",
  },
  {
    number: "03",
    title: "Je m’installe en Espagne",
    description:
      "Coordonner résidence, padrón, santé et les démarches liées à votre nouvelle vie.",
    href: "/installation-espagne",
  },
  {
    number: "04",
    title: "Faire reconnaître mon diplôme",
    description:
      "Identifier la procédure adaptée et constituer un dossier clair pour l’administration espagnole.",
    href: "/reconnaissance-diplome-espagne",
  },
  {
    number: "05",
    title: "Créer mon activité en Espagne",
    description:
      "Structurer les étapes administratives d’un projet d’indépendant ou de société.",
    href: "/creer-activite-espagne",
  },
  {
    number: "06",
    title: "Clarifier ma fiscalité France–Espagne",
    description:
      "Résidence fiscale, revenus, immobilier et coordination avec un professionnel habilité.",
    href: "/fiscalite-residence-france-espagne",
  },
  {
    number: "07",
    title: "J’ai une autre démarche",
    description:
      "Un courrier, un dossier bloqué ou une situation qui ne rentre dans aucune case.",
    href: "/autre-demarche",
  },
];

const installationNeeds = [
  {
    title: "Logement",
    text: "Nous vous aidons à préparer les justificatifs utiles et pouvons vous mettre en relation avec des agences partenaires selon votre destination.",
  },
  {
    title: "Scolarité",
    text: "Nous identifions les premières démarches et les documents à réunir pour inscrire vos enfants dans leur nouvel établissement.",
  },
  {
    title: "Banque",
    text: "Nous vous indiquons les pièces généralement demandées et la logique des démarches bancaires liées à votre installation.",
  },
  {
    title: "Protection sociale",
    text: "Nous faisons le point sur votre situation pour coordonner les interlocuteurs français et espagnols, sans promettre le maintien d’un régime qui dépend de votre statut.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory text-navy">
      <div className="px-8 pt-8 md:px-16 md:pt-10">
        <header className="flex items-center justify-between">
          <SiteLogo />

          <nav
            className="hidden items-center gap-9 text-navy md:flex"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            <a
              href="#services"
              className="text-xl transition-colors duration-300 hover:text-blood"
            >
              Services
            </a>
            <Link
              href="/guides"
              className="text-xl transition-colors duration-300 hover:text-blood"
            >
              Guides
            </Link>
            <Link
              href="/comment-ca-marche"
              className="text-xl transition-colors duration-300 hover:text-blood"
            >
              Comment ça marche
            </Link>
            <Link
              href="/a-propos"
              className="text-xl transition-colors duration-300 hover:text-blood"
            >
              À propos
            </Link>
          </nav>
        </header>

        <nav
          aria-label="Navigation mobile"
          className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy md:hidden"
        >
          <a href="#services" className="hover:text-blood">
            Services
          </a>
          <Link href="/guides" className="hover:text-blood">
            Guides
          </Link>
          <Link href="/comment-ca-marche" className="hover:text-blood">
            Comment ça marche
          </Link>
          <Link href="/a-propos" className="hover:text-blood">
            À propos
          </Link>
        </nav>

        <section className="grid items-center gap-14 pb-24 pt-16 md:grid-cols-[1.08fr_0.92fr] md:pb-32 md:pt-14">
          <div className="md:pl-16 lg:pl-28">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              France ↔ Espagne
            </p>
            <h1
              className="mt-6 max-w-4xl text-5xl leading-[0.92] md:text-7xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Un projet en Espagne.
              <br />
              <span className="italic text-blood">
                Beaucoup trop de démarches ?
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-relaxed text-navy/75 md:text-lg">
              Que vous soyez encore en France ou déjà installé en Espagne,
              holÀ! vous aide à comprendre les formalités, préparer les
              dossiers et coordonner les étapes. Vous gardez un interlocuteur
              francophone du début à la suite de votre projet.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/demande"
                className="inline-block bg-blood px-7 py-4 text-sm uppercase tracking-[0.12em] text-ivory transition-transform hover:-translate-y-0.5"
              >
                Expliquer ma situation →
              </Link>
              <a
                href="#services"
                className="border-b border-navy/30 pb-1 text-sm transition-colors hover:border-blood hover:text-blood"
              >
                Voir les accompagnements
              </a>
            </div>
          </div>

          <div className="hidden justify-center md:flex">
            <Image
              src="/porte-hola.png"
              alt="Une porte ouverte entre la France et l’Espagne"
              width={1024}
              height={1536}
              priority
              sizes="(min-width: 768px) 42vw, 0px"
              className="h-[70vh] max-h-[720px] w-auto object-contain opacity-95"
            />
          </div>
        </section>
      </div>

      <section className="bg-ivory px-8 pb-12 md:px-16 md:pb-20">
        <div className="mx-auto grid max-w-6xl md:grid-cols-12">
          <figure className="md:col-span-7 md:col-start-5">
            <div className="mb-5 flex items-center gap-5">
              <p className="text-xs uppercase tracking-[0.25em] text-blood">
                Une nouvelle vie, avec un fil conducteur
              </p>
              <span className="h-px flex-1 bg-navy/15" aria-hidden="true" />
            </div>
            <div className="overflow-hidden bg-[#EEE8DE]">
              <Image
                src="/home-lifestyle-hola.webp"
                alt="Une femme prépare son projet d’installation en Espagne depuis une terrasse"
                width={1536}
                height={1024}
                sizes="(min-width: 768px) 58vw, 92vw"
                className="aspect-[3/2] h-auto w-full object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      <section id="services" className="px-8 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Services
            </p>
            <div>
              <h2
                className="text-5xl leading-[0.95] md:text-6xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Une seule porte d’entrée.
                <br />
                <span className="italic text-blood">
                  Votre situation d’abord.
                </span>
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy/65">
                Vous savez exactement ce qu’il vous faut ? Choisissez la
                démarche. Sinon, racontez-nous votre projet : nous commencerons
                par identifier les étapes qui vous concernent réellement.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-navy/20">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group grid gap-4 border-b border-navy/20 px-4 py-8 transition-all duration-300 hover:bg-blood/[0.06] hover:px-7 md:grid-cols-[80px_1fr_1fr_auto] md:items-center"
              >
                <span className="text-sm text-blood">{service.number}</span>
                <h3
                  className="text-3xl transition-colors duration-300 group-hover:text-blood md:text-4xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-navy/55 md:text-base">
                  {service.description}
                </p>
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEE8DE] px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              S’installer pour de vrai
            </p>
            <div>
              <h2
                className="max-w-4xl text-5xl leading-[0.95] md:text-6xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Une nouvelle vie ne tient pas
                <br />
                <span className="italic text-blood">dans un formulaire.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/65">
                L’adresse, l’école, la banque ou la protection sociale peuvent
                vite se mêler aux formalités de résidence. Nous construisons
                une feuille de route cohérente et faisons intervenir les bons
                interlocuteurs lorsque votre situation le demande.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {installationNeeds.map((need) => (
              <article key={need.title} className="border-t border-navy/20 pt-6">
                <h3
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {need.title}
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-navy/65">
                  {need.text}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/installation-espagne"
            className="mt-12 inline-block border-b border-navy/30 pb-1 text-lg transition-colors hover:border-blood hover:text-blood"
          >
            Préparer mon installation →
          </Link>
        </div>
      </section>

      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.72fr_1.28fr]">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Un dossier, plusieurs compétences
          </p>
          <div>
            <h2
              className="max-w-4xl text-5xl leading-[0.95] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Le bon accompagnement,
              <br />
              <span className="italic text-blood">au bon endroit.</span>
            </h2>
            <p className="mt-9 max-w-2xl text-lg leading-relaxed text-ivory/70">
              holÀ! prend en charge l’organisation et le suivi administratif.
              Lorsqu’un choix exige un avis juridique, fiscal ou comptable,
              nous pouvons coordonner l’intervention d’un professionnel
              habilité, avec votre accord. Chacun intervient dans son domaine,
              tandis que vous conservez un fil conducteur.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {["Juridique", "Fiscal", "Comptable"].map((area) => (
                <div key={area} className="border-t border-ivory/25 pt-5">
                  <p
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {area}
                  </p>
                  <p className="mt-2 text-sm text-ivory/55">
                    Professionnel habilité si nécessaire
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/autre-demarche"
              className="mt-12 inline-block border-b border-ivory/40 pb-1 transition-colors hover:border-blood hover:text-blood"
            >
              Parler d’une situation particulière →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Comment ça marche
          </p>
          <h2
            className="mt-5 max-w-3xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Vous nous expliquez.
            <br />
            <span className="italic text-blood">On démêle le reste.</span>
          </h2>

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
            {[
              {
                number: "01",
                title: "Vous racontez.",
                text: "Quelques informations suffisent, même si vous ne connaissez pas le nom exact de la démarche.",
              },
              {
                number: "02",
                title: "Nous cadrons.",
                text: "Nous identifions les étapes, le périmètre de notre intervention et les éventuels professionnels à solliciter.",
              },
              {
                number: "03",
                title: "Nous avançons.",
                text: "Vous recevez une proposition claire, puis nous préparons et suivons ce qui a été convenu.",
              },
            ].map((step) => (
              <article key={step.number} className="border-t border-navy/20 pt-6">
                <span className="text-sm text-blood">{step.number}</span>
                <h3
                  className="mt-5 text-3xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xs leading-relaxed text-navy/65">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/comment-ca-marche"
            className="mt-12 inline-block border-b border-navy/30 pb-1 transition-colors hover:border-blood hover:text-blood"
          >
            Voir l’accompagnement en détail →
          </Link>
        </div>
      </section>

      <section className="px-8 pb-28 md:px-16 md:pb-40">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.82fr_1.18fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              À propos
            </p>
            <Image
              src="/papiers-hola.png"
              alt="Des papiers administratifs remis en ordre"
              width={1536}
              height={1024}
              sizes="(min-width: 768px) 38vw, 92vw"
              className="mt-10 w-full max-w-[470px] object-contain"
            />
          </div>

          <div>
            <h2
              className="text-5xl leading-[0.95] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Entre deux pays,
              <br />
              deux langues
              <br />
              <span className="italic text-blood">et deux administrations.</span>
            </h2>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-navy/70">
              holÀ! est né de cette réalité quotidienne : comprendre ce que
              demande chaque administration, traduire sa logique et conserver
              une vision d’ensemble. Notre rôle est de rendre votre parcours
              plus clair, pas de vous promettre une décision qui appartient à
              l’administration.
            </p>
            <Link
              href="/a-propos"
              className="mt-8 inline-block border-b border-navy/30 pb-1 transition-colors hover:border-blood hover:text-blood"
            >
              Découvrir holÀ! →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-8 pb-16 md:px-16 md:pb-24">
        <div className="mx-auto max-w-6xl bg-blood px-8 py-16 text-ivory md:px-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
            Votre situation
          </p>
          <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="max-w-3xl text-5xl leading-[0.95] md:text-7xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Un projet en Espagne ?
                <br />
                <span className="italic">Commençons par vous.</span>
              </h2>
              <p className="mt-6 max-w-xl text-ivory/70">
                Expliquez-nous où vous en êtes. Nous vous dirons clairement
                ce que nous pouvons organiser et comment avancer.
              </p>
            </div>
            <Link
              href="/demande"
              className="group flex shrink-0 items-center gap-5 border-b border-ivory pb-2 text-lg"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Expliquer ma situation
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
