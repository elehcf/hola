import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immatriculer une voiture française en Espagne",

  description:
    "Vous vous installez en Espagne avec une voiture immatriculée en France ? Nous préparons et coordonnons les démarches pour son immatriculation espagnole.",

  alternates: {
    canonical: "/immatriculation-voiture-espagne",
  },

  openGraph: {
    title: "Immatriculer une voiture française en Espagne | holÀ!",
    description:
      "Les démarches pour passer de votre immatriculation française à une immatriculation espagnole, accompagnées en français.",
    url: "/immatriculation-voiture-espagne",
  },
};

export default function ImmatriculationVoiture() {
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
            Véhicule · France → Espagne
          </p>

          <h1
            className="mt-6 max-w-5xl text-6xl leading-[0.9] md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Votre voiture française.
            <br />
            <span className="italic text-blood">
              Bientôt espagnole.
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
              Vous partez vivre en Espagne et votre voiture vous suit ?
              Nous vérifions ce qu’il faut prévoir, préparons le dossier et
              organisons avec vous les différentes étapes jusqu’à
              l’immatriculation espagnole.
            </p>

            <div className="md:flex md:justify-end">
              <a
                href="/demande?service=vehicule"
                className="inline-block bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory"
              >
                Immatriculer mon véhicule →
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* PARCOURS */}
      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Le parcours
          </p>

          <h2
            className="mt-5 max-w-4xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            De la plaque française
            <br />
            <span className="italic">à la plaque espagnole.</span>
          </h2>

          <div className="mt-20 grid gap-x-12 md:grid-cols-2">

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">01</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                On fait le point
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Votre situation, votre voiture, les papiers que vous avez déjà :
                on commence par vérifier ce qui est prêt et ce qui manque.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">02</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                On prépare le dossier
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Carte grise, justificatifs, documentation technique :
                nous vous indiquons les pièces à réunir avant d’avancer.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">03</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                ITV
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                La voiture doit passer par une station ITV en Espagne pour
                obtenir la documentation technique nécessaire à son
                immatriculation.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">04</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Taxes & formalités
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Nous regardons quelles formalités fiscales concernent votre
                voiture et votre situation, et dans quel ordre les effectuer.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">05</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Immatriculation
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Une fois les étapes précédentes réglées, le dossier peut
                être finalisé pour l’immatriculation auprès de la DGT.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">06</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Plaques espagnoles
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                L’immatriculation obtenue, il ne reste plus qu’à faire poser
                les plaques espagnoles.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* POUR QUI */}
      <section className="px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.7fr_1.3fr]">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Pour qui ?
          </p>

          <div>
            <h2
              className="max-w-3xl text-5xl leading-[0.95] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Vous partez vivre en Espagne.
              <br />
              <span className="italic text-blood">
                Votre voiture vient avec vous.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
              Ce service s’adresse à ceux qui possèdent déjà une voiture
              immatriculée en France et souhaitent la conserver en s’installant
              en Espagne. Autrement dit : vous ne changez pas de voiture,
              seulement de pays.
            </p>

            <p className="mt-8 max-w-2xl text-navy/60">
              Votre déménagement implique d’autres formalités ?{" "}
              <a
                href="/installation-espagne"
                className="border-b border-navy/30 pb-1 transition-colors hover:text-blood"
              >
                Voir les démarches pour s’installer en Espagne →
              </a>
            </p>

            <div className="mt-12 border-l-2 border-blood pl-6">
              <p
                className="max-w-xl text-2xl italic"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Votre cas est différent ?
              </p>

              <a
                href="/demande"
                className="mt-3 inline-block border-b border-navy/30 pb-1 transition-colors hover:text-blood"
              >
                Expliquez-nous votre situation →
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* COMPRENDRE L'IMMATRICULATION */}
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
                Comment immatriculer une voiture française
                <br />
                <span className="italic text-blood">
                  en Espagne ?
                </span>
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
                Passer d’une immatriculation française à une immatriculation
                espagnole ne se fait pas en une seule démarche. Il faut
                généralement réunir les papiers du véhicule, passer l’ITV en
                Espagne, régler les questions fiscales puis finaliser
                l’immatriculation auprès de la DGT.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
                Là où les choses se compliquent, c’est que le dossier n’est pas
                exactement le même pour tout le monde. Nous commençons donc par
                vérifier votre voiture et votre situation, puis nous remettons
                les étapes dans le bon ordre.
              </p>
            </div>

          </div>


          <div className="mt-24 grid gap-x-16 gap-y-12 md:grid-cols-2">

            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Quels documents faut-il pour immatriculer sa voiture en Espagne ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Il faut d’abord les papiers français du véhicule et les
                documents qui permettent d’établir ses caractéristiques
                techniques. Selon la voiture, d’autres pièces peuvent
                s’ajouter. Nous vérifions ce que vous avez déjà et ce qu’il
                reste à obtenir.
              </p>
            </div>


            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Faut-il passer l’ITV en Espagne ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Oui, dans le cadre d’une première immatriculation en Espagne,
                la voiture doit passer par une station ITV espagnole. Cette
                étape permet notamment d’établir la documentation technique
                nécessaire pour poursuivre l’immatriculation.
              </p>
            </div>


            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Quelles taxes faut-il prévoir ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Il n’y a pas un montant identique pour toutes les voitures.
                Les taxes dépendent notamment du véhicule et des conditions
                dans lesquelles vous l’amenez en Espagne. Un déménagement avec
                une voiture que vous possédez déjà mérite, par exemple, d’être
                examiné différemment d’un achat récent à l’étranger.
              </p>
            </div>


            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Peut-on préparer les démarches avant de quitter la France ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Oui, et c’est même préférable. Vérifier les papiers du véhicule
                avant de partir permet de repérer ce qui manque pendant qu’il
                est encore simple de le récupérer en France.
              </p>
            </div>

          </div>

          <div className="mt-16 border-t border-navy/20 pt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Pour aller plus loin
            </p>

            <a
              href="/guides/immatriculer-voiture-francaise-espagne"
              className="mt-5 inline-block text-2xl transition-colors hover:text-blood"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Lire notre guide complet sur l’immatriculation en Espagne →
            </a>
          </div>

        </div>
      </section>


      {/* CE QU'ON VOUS ÉVITE */}
      <section className="px-8 pb-28 md:px-16 md:pb-36">
        <div className="mx-auto max-w-6xl border-y border-navy/20 py-16">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            L’idée
          </p>

          <h2
            className="mt-6 max-w-4xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            ITV. Documents. Taxes.
            <br />
            DGT. Plaques.
            <br />
            <span className="italic text-blood">
              Vous pourriez tout démêler vous-même.
              <br />
              Mais vous n’avez pas à le faire.
            </span>
          </h2>

        </div>
      </section>


      {/* PRIX */}
      <section className="mx-8 mb-16 bg-blood px-8 py-16 text-ivory md:mx-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
                Immatriculation France → Espagne
              </p>

              <h2
                className="mt-5 text-5xl leading-none md:text-7xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                449 €
              </h2>

              <p className="mt-5 max-w-xl text-ivory/70">
                Préparation et suivi de votre dossier. Taxes, frais
                administratifs, ITV et éventuelles prestations externes
                en supplément.
              </p>
            </div>

            <a
              href="/demande?service=vehicule"
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