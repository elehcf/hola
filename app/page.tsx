import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assistance administrative en Espagne pour les Français",

  description:
    "holÀ! vous accompagne dans vos démarches administratives en Espagne : NIE, immatriculation de véhicule, installation et démarches France–Espagne.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "holÀ! | Assistance administrative en Espagne",
    description:
      "Vos démarches administratives en Espagne, simplement et en français.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-8 md:px-16 md:py-10">

      {/* HEADER */}
      <header className="flex items-center justify-between">
        <div className="flex items-baseline">
          <span
            className="text-navy"
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "4.2rem",
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            hol
          </span>

          <span
            className="text-blood"
            style={{
              fontFamily: "var(--font-editorial)",
              fontSize: "4.6rem",
              fontWeight: 600,
              lineHeight: 0.8,
              marginLeft: "-0.15rem",
            }}
          >
            À!
          </span>
        </div>

        <nav
          className="hidden items-center gap-10 text-navy md:flex"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          <a
            href="#services"
            className="text-xl transition-colors duration-300 hover:text-blood"
          >
            Services
          </a>

          <a
            href="/guides"
            className="text-xl transition-colors duration-300 hover:text-blood"
          >
            Guides
          </a>

          <a
            href="/comment-ca-marche"
            className="text-xl transition-colors duration-300 hover:text-blood"
          >
            Comment ça marche
          </a>

          <a
            href="/a-propos"
            className="text-xl transition-colors duration-300 hover:text-blood"
          >
            À propos
          </a>
        </nav>
      </header>


      {/* HERO */}
      <section className="grid items-center gap-16 pt-20 md:grid-cols-[1.1fr_0.9fr] md:pt-16">
        <div className="md:pl-28">
          <h1
            className="max-w-4xl text-5xl leading-[0.95] md:text-7xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Un problème administratif
            <br />
            en Espagne ?
          </h1>

          <p
            className="mt-6 text-4xl italic text-blood md:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            On s&apos;en occupe.
          </p>

          <div className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed opacity-80 md:text-lg">
              Vous êtes encore en France ou déjà installé en Espagne ?
              NIE, voiture, résidence ou autre démarche : nous vous aidons
              à comprendre ce qu&apos;il faut faire, préparons les dossiers
              et vous accompagnons dans les étapes qui suivent.
            </p>

            <a
              href="/demande"
              className="mt-8 inline-block bg-blood px-7 py-4 text-sm uppercase tracking-[0.12em] text-ivory"
            >
              Expliquer ma situation →
            </a>
          </div>
        </div>

        <div className="hidden justify-center md:flex">
          <img
            src="/porte-hola.png"
            alt="Une porte ouverte sur l’Espagne"
            className="h-[70vh] max-h-[720px] w-auto object-contain opacity-95"
          />
        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="py-28 md:py-36">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Services
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy/65">
            Vous savez exactement ce qu&apos;il vous faut ? Parfait.
            Sinon, racontez-nous simplement ce qui vous amène.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-6xl border-t border-navy/20">

          <a
            href="/nie-espagne"
            className="group flex items-center justify-between border-b border-navy/20 px-4 py-8 transition-all duration-300 hover:bg-blood/[0.06] hover:px-7"
          >
            <div className="flex items-baseline gap-8">
              <span className="text-sm text-blood">01</span>
              <h3
                className="text-3xl transition-colors duration-300 group-hover:text-blood md:text-4xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Obtenir mon NIE
              </h3>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>

          <a
            href="/immatriculation-voiture-espagne"
            className="group flex items-center justify-between border-b border-navy/20 px-4 py-8 transition-all duration-300 hover:bg-blood/[0.06] hover:px-7"
          >
            <div className="flex items-baseline gap-8">
              <span className="text-sm text-blood">02</span>
              <h3
                className="text-3xl transition-colors duration-300 group-hover:text-blood md:text-4xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Immatriculer mon véhicule
              </h3>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>

          <a
            href="/installation-espagne"
            className="group flex items-center justify-between border-b border-navy/20 px-4 py-8 transition-all duration-300 hover:bg-blood/[0.06] hover:px-7"
          >
            <div className="flex items-baseline gap-8">
              <span className="text-sm text-blood">03</span>
              <h3
                className="text-3xl transition-colors duration-300 group-hover:text-blood md:text-4xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Je m&apos;installe en Espagne
              </h3>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>

          <a
            href="/autre-demarche"
            className="group flex items-center justify-between border-b border-navy/20 px-4 py-8 transition-all duration-300 hover:bg-blood/[0.06] hover:px-7"
          >
            <div className="flex items-baseline gap-8">
              <span className="text-sm text-blood">04</span>
              <h3
                className="text-3xl transition-colors duration-300 group-hover:text-blood md:text-4xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                J&apos;ai une autre démarche
              </h3>
            </div>

            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>

        </div>
      </section>


      {/* COMMENT ÇA MARCHE */}
      <section
        id="comment-ca-marche"
        className="mx-[-2rem] bg-navy px-8 py-28 text-ivory md:mx-[-4rem] md:px-16 md:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Comment ça marche
          </p>

          <h2
            className="mt-4 max-w-3xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Vous nous expliquez.
            <br />
            On démêle le reste.
          </h2>

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8">

            <div className="border-t border-ivory/30 pt-6">
              <span className="text-sm text-blood">01</span>

              <h3
                className="mt-5 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Vous nous racontez.
              </h3>

              <p className="mt-4 max-w-xs leading-relaxed text-ivory/70">
                Dites-nous ce qui se passe. Même si vous ne savez pas
                comment s&apos;appelle la démarche ni par où commencer.
              </p>
            </div>

            <div className="border-t border-ivory/30 pt-6">
              <span className="text-sm text-blood">02</span>

              <h3
                className="mt-5 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                On met de l’ordre.
              </h3>

              <p className="mt-4 max-w-xs leading-relaxed text-ivory/70">
                On identifie ce qu&apos;il faut faire, les documents à
                préparer et l&apos;ordre dans lequel avancer.
              </p>
            </div>

            <div className="border-t border-ivory/30 pt-6">
              <span className="text-sm text-blood">03</span>

              <h3
                className="mt-5 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                On s’en occupe.
              </h3>

              <p className="mt-4 max-w-xs leading-relaxed text-ivory/70">
                Nous préparons et suivons ce qui peut l&apos;être.
                S&apos;il reste une étape à faire en personne, vous savez
                exactement où aller et avec quoi.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* À PROPOS */}
      <section id="a-propos" className="py-28 md:py-40">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              À propos
            </p>

            <img
              src="/papiers-hola.png"
              alt="Une montagne de démarches administratives"
              className="mt-14 w-full max-w-[430px] object-contain"
            />
          </div>

          <div>
            <h2
              className="text-5xl leading-[0.95] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Entre la France
              <br />
              et l&apos;Espagne,
              <br />
              il y a parfois
              <br />
              <span className="italic text-blood">
                un peu trop de papier.
              </span>
            </h2>

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-navy/70">
              holÀ! est né pour ceux qui ont quelque chose à régler en Espagne
              sans forcément savoir par où commencer. Un NIE à demander, une
              voiture française à immatriculer, une installation à préparer
              ou simplement un courrier administratif auquel vous ne savez
              pas quoi répondre : vous nous expliquez, nous mettons de
              l&apos;ordre et vous aidons à avancer.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span
                className="text-2xl italic text-blood"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                France ↔ Espagne
              </span>

              <span className="h-px w-10 bg-navy/20" />

              <span className="text-sm text-navy/50">
                Vos démarches, d&apos;un côté à l&apos;autre.
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="pb-16 pt-8 md:pb-24">
        <div className="mx-auto max-w-6xl bg-blood px-8 py-16 text-ivory md:px-16 md:py-20">

          <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
            Votre situation
          </p>

          <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <h2
              className="max-w-3xl text-5xl leading-[0.95] md:text-7xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Vous avez une démarche
              <br />
              en Espagne ?
              <br />
              <span className="italic">Racontez-nous.</span>
            </h2>

            <a
              href="/demande"
              className="group flex shrink-0 items-center gap-5 border-b border-ivory pb-2 text-lg"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Expliquer ma situation
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}