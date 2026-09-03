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
            Votre NIE.
            <br />
            <span className="italic text-blood">
              Sans vous perdre dans l’administration espagnole.
            </span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
              Nous préparons votre demande de NIE de A à Z :
              documents, formulaires, justificatifs et marche à suivre,
              simplement et en français.
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
                Analyse de votre situation
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">02</span>
              <p className="mt-3 text-xl">
                Liste personnalisée des documents
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">03</span>
              <p className="mt-3 text-xl">
                Préparation du formulaire EX-15
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">04</span>
              <p className="mt-3 text-xl">
                Instructions pour la taxe administrative
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">05</span>
              <p className="mt-3 text-xl">
                Vérification de votre dossier
              </p>
            </div>

            <div className="border-t border-ivory/25 py-6">
              <span className="text-sm text-blood">06</span>
              <p className="mt-3 text-xl">
                Marche à suivre pour la présentation
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
              Le NIE est votre numéro d’identification d’étranger en Espagne.
              Selon votre situation et la procédure utilisée, certaines étapes
              peuvent nécessiter votre présence personnelle devant
              l’administration.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Lorsque votre présence est exigée, nous préparons tout en amont
              afin que vous n’ayez plus qu’à effectuer l’étape qui ne peut pas
              être déléguée.
            </p>
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
                Dossier NIE Espagne
              </p>

              <h2
                className="mt-5 text-5xl leading-none md:text-7xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                149 €
              </h2>

              <p className="mt-5 text-ivory/70">
                Accompagnement et préparation de votre dossier.
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