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
              Vous vous installez en Espagne avec un véhicule déjà
              immatriculé en France ? Nous organisons les démarches
              nécessaires pour obtenir son immatriculation espagnole.
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
                Vérification
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Nous vérifions votre situation, le véhicule et les
                documents dont vous disposez déjà.
              </p>
            </div>

            <div className="border-t border-ivory/25 py-7">
              <span className="text-sm text-blood">02</span>
              <h3
                className="mt-3 text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Dossier technique
              </h3>
              <p className="mt-3 max-w-md text-ivory/60">
                Nous déterminons les justificatifs nécessaires pour
                préparer le passage du véhicule en Espagne.
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
                Votre véhicule passe le contrôle technique nécessaire
                à son immatriculation en Espagne.
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
                Nous préparons et coordonnons les formalités
                administratives applicables à votre dossier.
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
                Le dossier est préparé pour l’immatriculation
                définitive auprès de l’administration espagnole.
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
                Une fois l’immatriculation obtenue, votre véhicule
                peut recevoir ses nouvelles plaques.
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
              Ce service est pensé pour les personnes qui possèdent déjà
              un véhicule immatriculé en France et souhaitent l’emmener
              avec elles lors de leur installation en Espagne.
            </p>

            <div className="mt-12 border-l-2 border-blood pl-6">
              <p
                className="max-w-xl text-2xl italic"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Un autre cas de figure ?
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
                Accompagnement administratif. Les taxes, frais
                administratifs, contrôle technique et prestations
                externes éventuelles ne sont pas inclus.
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