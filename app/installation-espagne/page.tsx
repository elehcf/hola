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
              S’installer en Espagne implique plusieurs démarches qui
              dépendent de votre situation. Nous les remettons dans le bon
              ordre et vous accompagnons dans leur préparation.
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
                Votre situation
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Nous identifions les démarches qui correspondent à votre
                profil et à votre projet d’installation.
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
                Nous vérifions si vous disposez déjà d’un NIE et préparons
                la démarche lorsqu’elle est nécessaire.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">03</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Enregistrement
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Nous vous guidons dans les formalités liées à votre
                installation et à votre situation de citoyen européen.
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
                Nous vous indiquons comment préparer votre inscription
                auprès de votre commune de résidence.
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
                Nous identifions les démarches administratives à prévoir
                selon votre situation de couverture.
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
                Nous vous aidons à préparer les outils qui simplifieront
                vos futures relations avec l’administration espagnole.
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
                votre parcours change.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
              Il n’existe pas une liste universelle de démarches pour
              s’installer en Espagne. Votre activité, vos ressources, votre
              couverture sociale et votre situation familiale peuvent
              modifier les formalités à accomplir.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              C’est pourquoi nous commençons par comprendre votre situation
              avant de construire votre parcours administratif.
            </p>
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
              Votre checklist.
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
                Parcours Installation Espagne
              </p>

              <h2
                className="mt-5 text-5xl leading-none md:text-7xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                À partir de 490 €
              </h2>

              <p className="mt-5 max-w-xl text-ivory/70">
                Le périmètre et le tarif définitif dépendent des démarches
                nécessaires à votre situation.
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