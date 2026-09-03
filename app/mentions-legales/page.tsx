export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-ivory px-8 py-16 text-navy md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-blood">
          ← holÀ!
        </a>

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
              holÀ! — Service d’assistance administrative France–Espagne.
            </p>

            <p className="mt-3">
              Les informations d’identification de l’exploitant seront
              complétées avant la mise en ligne publique du site.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Hébergement
            </h2>

            <p>
              Les informations relatives à l’hébergeur seront complétées
              lors du déploiement définitif du site.
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
              holÀ! propose un service d’assistance dans la compréhension,
              la préparation, l’organisation et le suivi de démarches
              administratives entre la France et l’Espagne.
            </p>

            <p className="mt-3">
              Le service ne se substitue pas aux professions réglementées.
              Lorsqu’une situation nécessite l’intervention d’un avocat,
              d’un professionnel du chiffre, d’un notaire ou de tout autre
              professionnel habilité, le client en est informé et peut être
              orienté vers l’interlocuteur approprié.
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
              Les contenus, textes, éléments graphiques et identité
              visuelle présents sur ce site sont protégés par les règles
              applicables en matière de propriété intellectuelle.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}