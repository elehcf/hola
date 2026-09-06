import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S’installer en Espagne : démarches pour les Français",

  description:
    "Vous souhaitez vous installer en Espagne depuis la France ? NIE, empadronamiento, résidence, santé : nous organisons vos démarches dans le bon ordre, en français.",

  alternates: {
    canonical: "/installation-espagne",
  },

  openGraph: {
    title: "S’installer en Espagne : vos démarches | holÀ!",
    description:
      "NIE, résidence, empadronamiento, santé : préparez votre installation en Espagne dans le bon ordre, avec un accompagnement en français.",
    url: "/installation-espagne",
  },
};

export default function InstallationEspagne() {
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
            Installation · Espagne
          </p>

          <h1
            className="mt-6 max-w-5xl text-6xl leading-[0.9] md:text-8xl"
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
              NIE, résidence, empadronamiento, santé… Quand on s’installe en
              Espagne, une démarche en entraîne vite une autre. Nous faisons
              le tri avec vous, préparons ce qui peut l’être et vous indiquons
              dans quel ordre avancer.
            </p>

            <div className="md:flex md:justify-end">
              <a
                href="/demande?service=installation"
                className="inline-block bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory"
              >
                Préparer mon installation →
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ORDRE */}
      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Votre parcours
          </p>

          <h2
            className="mt-5 max-w-4xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Vos démarches essentielles.
            <br />
            <span className="italic">Dans le bon ordre.</span>
          </h2>

          <div className="mt-20 grid gap-x-12 md:grid-cols-2">

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">01</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                On commence par vous
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Salarié, indépendant, retraité, étudiant… On regarde d’abord
                votre situation pour savoir quelles démarches vous concernent.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">02</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                NIE
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Vous en avez déjà un ? Parfait. Sinon, nous vérifions quand
                et comment le demander et préparons le dossier avec vous.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">03</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Résidence
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Si vous restez plus de trois mois en Espagne, votre statut de
                citoyen européen implique une démarche d’enregistrement.
                Nous vous aidons à préparer les pièces nécessaires.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">04</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Empadronamiento
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                C’est l’inscription auprès de la commune où vous vivez en
                Espagne. Nous vous indiquons quand la faire et quels
                documents préparer.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">05</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Santé
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Les démarches ne sont pas les mêmes selon que vous travaillez,
                êtes retraité ou dépendez encore d’un régime français. Nous
                faisons le point avant votre départ.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">06</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Cl@ve & démarches en ligne
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Une fois installé, une partie de l’administration espagnole
                se gère en ligne. Nous vous aidons à mettre en place les
                accès qui vous serviront au quotidien.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* PROFILS */}
      <section className="px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.7fr_1.3fr]">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Chaque installation est différente
          </p>

          <div>
            <h2
              className="max-w-3xl text-5xl leading-[0.95] md:text-6xl"
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
              Il n’existe pas une seule checklist valable pour tous les
              Français qui s’installent en Espagne. Un salarié, un indépendant
              et un retraité n’auront tout simplement pas les mêmes documents
              à fournir ni les mêmes démarches à effectuer.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              C’est pour cela que nous commençons par votre situation, et non
              par une liste toute faite. On détermine ce qui vous concerne,
              ce qui peut être préparé depuis la France et ce qui devra
              attendre votre arrivée en Espagne.
            </p>
          </div>

        </div>
      </section>


      {/* COMPRENDRE L'INSTALLATION */}
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
                Quelles démarches pour
                <br />
                <span className="italic text-blood">
                  s’installer en Espagne ?
                </span>
              </h2>

              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
                Pour un Français qui part vivre en Espagne, le NIE n’est qu’une
                pièce du puzzle. Selon votre projet, il faudra aussi penser à
                votre enregistrement comme résident, à l’empadronamiento, à
                votre couverture santé et à différents accès administratifs.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
                Le plus important n’est donc pas d’accumuler les démarches,
                mais de savoir lesquelles vous concernent et quand les faire.
                Nous vous donnons cette feuille de route avant de préparer
                les dossiers avec vous.
              </p>
            </div>

          </div>


          <div className="mt-24 grid gap-x-16 gap-y-12 md:grid-cols-2">

            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Faut-il un NIE pour vivre en Espagne ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Le NIE est un numéro d’identification utilisé dans de
                nombreuses démarches en Espagne. Mais attention : avoir un NIE
                ne signifie pas être résident. Si vous vous installez en
                Espagne, d’autres démarches peuvent être nécessaires.
              </p>

              <a
                href="/nie-espagne"
                className="mt-5 inline-block border-b border-navy/30 pb-1 transition-colors hover:text-blood"
              >
                Comprendre la démarche NIE →
              </a>
            </div>


            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Qu’est-ce que l’empadronamiento ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                C’est votre inscription auprès de la commune espagnole où
                vous résidez. Elle permet d’attester votre adresse dans la
                commune et vous sera demandée pour différentes démarches
                une fois installé.
              </p>
            </div>


            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Quelles démarches pour un Français qui s’installe en Espagne ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                NIE, enregistrement comme résident, empadronamiento, santé,
                accès aux services administratifs en ligne… La liste varie
                selon votre situation. L’objectif est justement de savoir
                ce qui vous concerne avant de commencer.
              </p>
            </div>


            <div className="border-t border-navy/20 pt-6">
              <h3
                className="text-2xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Puis-je préparer mon installation depuis la France ?
              </h3>

              <p className="mt-4 leading-relaxed text-navy/65">
                Oui, en partie. Vous pouvez déjà vérifier les démarches qui
                vous concernent, réunir certains documents et préparer ce qui
                peut l’être. Vous arriverez ainsi en Espagne en sachant ce
                qu’il reste à faire sur place.
              </p>
            </div>

          </div>


          <div className="mt-16 border-t border-navy/20 pt-8">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Pour aller plus loin
            </p>

            <a
              href="/guides/s-installer-en-espagne"
              className="mt-5 inline-block text-2xl transition-colors hover:text-blood"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Lire notre guide complet pour s’installer en Espagne →
            </a>
          </div>

        </div>
      </section>


      {/* PHRASE */}
      <section className="px-8 pb-28 md:px-16 md:pb-36">
        <div className="mx-auto max-w-6xl border-y border-navy/20 py-16">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Le principe
          </p>

          <h2
            className="mt-6 max-w-4xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Pas une checklist trouvée sur Internet.
            <br />
            <span className="italic text-blood">
              La vôtre.
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
                Installation en Espagne
              </p>

              <h2
                className="mt-5 text-5xl leading-none md:text-7xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                À partir de 490 €
              </h2>

              <p className="mt-5 max-w-xl text-ivory/70">
                Le tarif dépend des démarches dont vous avez réellement besoin.
                Nous définissons le périmètre avec vous avant de commencer.
              </p>
            </div>

            <a
              href="/demande?service=installation"
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