import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-ivory px-8 py-16 text-navy md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-blood">
          ← holÀ!
        </Link>

        <p className="mt-20 text-xs uppercase tracking-[0.25em] text-blood">
          Informations
        </p>

        <h1
          className="mt-6 text-5xl leading-[0.95] md:text-7xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Mentions
          <br />
          <span className="italic text-blood">légales.</span>
        </h1>

        <div className="mt-16 space-y-12 text-base leading-relaxed text-navy/70">
          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Éditeur du site
            </h2>

            <p>
              holÀ! est un service proposé par Elena Huergo Cerra,
              entrepreneur individuel.
            </p>
            <p className="mt-3">SIREN : 990 159 360</p>
            <p className="mt-3">
              Adresse : 9 rue Mercière, 33800 Bordeaux, France.
            </p>
            <p className="mt-3">
              Courriel :{" "}
              <a
                href="mailto:bonjour@holaespagne.fr"
                className="underline"
              >
                bonjour@holaespagne.fr
              </a>
            </p>
            <p className="mt-3">
              Téléphone :{" "}
              <a href="tel:+34681803938" className="underline">
                +34 681 803 938
              </a>
            </p>
            <p className="mt-3">
              Directrice de la publication : Elena Huergo Cerra.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Hébergement
            </h2>

            <p>Vercel Inc.</p>
            <p className="mt-3">
              440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.
            </p>
            <p className="mt-3">Téléphone : +1 559 288 7060.</p>
            <p className="mt-3">
              Site :{" "}
              <a href="https://vercel.com" className="underline">
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Nature du service
            </h2>

            <p>
              holÀ! propose un accompagnement dans la préparation,
              l’organisation et le suivi de démarches administratives
              en Espagne.
            </p>
            <p className="mt-3">
              holÀ! ne fournit pas de consultation juridique et ne se
              substitue pas aux professionnels réglementés. Lorsque la
              situation le nécessite, holÀ! peut, avec l’accord du client,
              organiser la mise en relation et la coordination avec un
              professionnel compétent. La prestation réglementée est alors
              réalisée sous la responsabilité de ce professionnel.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Propriété intellectuelle
            </h2>

            <p>
              Les textes, éléments graphiques et autres contenus de ce site
              sont protégés par les règles applicables en matière de
              propriété intellectuelle. Leur reproduction nécessite
              l’autorisation préalable de leur titulaire.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
