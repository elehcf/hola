import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIE Espagne : obtenir votre NIE simplement",

  description:
    "Besoin d’obtenir un NIE en Espagne ? Nous préparons votre dossier, le formulaire EX-15 et vos justificatifs, avec un accompagnement en français.",

  alternates: {
    canonical: "/nie-espagne",
  },

  openGraph: {
    title: "NIE Espagne : obtenir votre NIE | holÀ!",
    description:
"Un accompagnement en français pour préparer votre demande de NIE en Espagne et comprendre les étapes à suivre.",    url: "/nie-espagne",
  },
};

export default function NieEspagne() {
  return (
    <main className="min-h-screen bg-ivory text-navy">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-8 md:px-16">
        <a href="/" className="flex items-baseline">
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
        </a>

        <a
          href="/"
          className="text-lg transition-colors duration-300 hover:text-blood"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          ← Retour
        </a>
      </header>


      {/* HERO */}
      <section className="px-8 pb-28 pt-20 md:px-16 md:pb-36">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            NIE · Espagne
          </p>

          <h1
            className="mt-6 max-w-5xl text-6xl leading-[0.9] md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Obtenir votre NIE en Espagne.
            <br />
            <span className="italic text-blood">
              Sans vous perdre dans l’administration.
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
  Vous nous expliquez votre projet. Nous vérifions d’abord si une
  demande de NIE correspond à votre situation ou si vous devez
  effectuer d’autres démarches liées à votre installation en Espagne.
  Si la demande de NIE est adaptée, nous préparons le formulaire EX-15,
  identifions les justificatifs à prévoir et vous expliquons comment
  procéder. Le tout, en français.
</p>

            <div className="md:flex md:justify-end">
              <a
                href="/demande?service=nie"
                className="inline-block bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory"
              >
                Commencer ma demande →
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* CE QUI EST INCLUS */}
      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Le dossier
          </p>

          <h2
            className="mt-5 max-w-3xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            On prépare.
            <br />
            Vous avancez.
          </h2>

          <div className="mt-20 grid gap-10 md:grid-cols-2">

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">01</span>
              <p className="mt-3 text-xl">
                On vérifie votre situation
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">02</span>
              <p className="mt-3 text-xl">
                Vous savez exactement quels documents fournir
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">03</span>
              <p className="mt-3 text-xl">
                On prépare votre formulaire EX-15
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">04</span>
              <p className="mt-3 text-xl">
                On vous explique comment régler la taxe
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">05</span>
              <p className="mt-3 text-xl">
                On vérifie le dossier avant le dépôt
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">06</span>
              <p className="mt-3 text-xl">
                Vous savez où aller et quoi faire
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* IMPORTANT */}
      <section className="px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.7fr_1.3fr]">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Bon à savoir
          </p>

          <div>
            <h2
              className="text-5xl leading-[0.95] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Le NIE n’est pas
              <br />
              <span className="italic text-blood">
                un titre de résidence.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
              Le NIE est un numéro d’identification attribué aux étrangers en
              Espagne. Il ne vous donne pas, à lui seul, le statut de résident.
              Et selon la façon dont vous faites la demande, certaines étapes
              peuvent nécessiter votre présence.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Si vous devez vous déplacer, l’idée est simple : tout préparer
              avant, pour que vous n’ayez plus sur place que ce qui doit
              réellement être fait en personne.
            </p>
          </div>

          <p className="mt-8 max-w-2xl text-navy/60">
            Vous préparez votre départ ?{" "}
            <a
              href="/installation-espagne"
              className="border-b border-navy/30 pb-1 transition-colors hover:text-blood"
            >
              Découvrez les démarches pour vous installer en Espagne →
            </a>
          </p>

        </div>
      </section>


      {/* COMPRENDRE LE NIE */}
      <section className="bg-[#EEE8DE] px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Comprendre
            </p>

            <div>
              <h2
                className="text-5xl leading-[0.95] md:text-6xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Comment obtenir un NIE
                <br />
                <span className="italic text-blood">
                  en Espagne ?
                </span>
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
                Il n’existe pas un dossier identique pour tout le monde.
                Les documents à fournir dépendent notamment de la raison pour
                laquelle vous demandez un NIE et de l’endroit où vous faites
                la demande. Le formulaire EX-15 fait partie des documents à
                préparer, accompagné des justificatifs correspondant à votre cas.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
                C’est justement ce que nous vérifions avant de commencer :
                où faire la demande, quels documents prévoir et dans quel ordre
                avancer. L’objectif est de limiter les pièces manquantes, les rendez-vous
inadaptés et les déplacements inutiles.
              </p>
            </div>
          </div>


          <div className="mt-24 grid gap-x-16 gap-y-12 md:grid-cols-2">

            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Quels documents faut-il pour demander un NIE ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Le formulaire EX-15, une pièce d’identité et les documents qui
                justifient votre demande font généralement partie du dossier.
                La liste exacte dépend de votre cas : nous vous indiquons ce
                qu’il faut fournir et vérifions l’ensemble avant le dépôt.
              </p>
            </div>

            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Peut-on demander un NIE depuis la France ?
              </h3>

            <p className="mt-4 leading-relaxed text-navy/65">
  Oui, selon le motif de votre demande et votre lieu de résidence en
  France, vous pouvez notamment vous adresser au consulat espagnol
  compétent. Si votre projet est de vous installer en Espagne, la
  démarche à effectuer peut être différente : nous vérifions ce point
  avec vous avant de préparer le dossier.
</p>
            </div>

            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Le NIE permet-il de résider en Espagne ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Non. Le NIE est un numéro d’identification. Si vous vous
                installez en Espagne, d’autres démarches peuvent être
                nécessaires en fonction de la durée de votre séjour et de
                votre situation.
              </p>
            </div>

            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Dans quels cas a-t-on besoin d’un NIE ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Achat immobilier, démarches fiscales, activité professionnelle…
                Le NIE intervient dans de nombreuses situations en Espagne.
                Ce qui compte, c’est de pouvoir expliquer pourquoi vous en avez
                besoin et de préparer les justificatifs correspondants.
              </p>
            </div>

            <div className="mt-16 border-t border-navy/20 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-blood">
                Pour aller plus loin
              </p>

              <a
                href="/guides/obtenir-nie-espagne"
                className="mt-5 inline-block text-2xl transition-colors hover:text-blood"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Lire notre guide complet sur le NIE en Espagne →
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* PRIX */}
      <section
        id="commencer"
        className="mx-8 mb-16 bg-blood px-8 py-16 text-ivory md:mx-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
                Dossier NIE sans installation
              </p>

              <h2
                className="mt-5 text-5xl leading-none md:text-7xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                149 €
              </h2>

              <p className="mt-5 text-ivory/70">
  Préparation et vérification du dossier pour une demande ponctuelle
  de NIE. Nous confirmons que ce forfait correspond à votre situation
  et précisons les éventuels frais administratifs avant de commencer.
</p>
            </div>

            <a
              href="/demande?service=nie"
              className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Commencer
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