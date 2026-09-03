export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-ivory px-8 py-16 text-navy md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-blood">
          ← holÀ!
        </a>

        <p className="mt-20 text-xs uppercase tracking-[0.25em] text-blood">
          Données personnelles
        </p>

        <h1
          className="mt-6 text-5xl leading-[0.95] md:text-7xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Politique de
          <br />
          <span className="italic text-blood">
            confidentialité.
          </span>
        </h1>

        <div className="mt-16 space-y-12 text-base leading-relaxed text-navy/70">
          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              1. Responsable du traitement
            </h2>

            <p>
              Les données transmises par l’intermédiaire du site holÀ!
              sont traitées par l’exploitant du service holÀ!.
            </p>

            <p className="mt-3">
              Les coordonnées complètes du responsable du traitement
              figurent dans les mentions légales du site.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              2. Données collectées
            </h2>

            <p>
              Lorsque vous nous adressez une demande, nous pouvons
              notamment recueillir votre prénom, votre adresse e-mail,
              votre numéro de téléphone ainsi que les informations que
              vous choisissez de nous communiquer concernant votre
              situation et votre démarche administrative.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              3. Pourquoi utilisons-nous ces données ?
            </h2>

            <p>
              Ces informations sont utilisées afin d’étudier votre
              demande, déterminer si nous pouvons vous accompagner,
              vous recontacter et, le cas échéant, préparer la prise
              en charge de votre démarche.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              4. Destinataires
            </h2>

            <p>
              Vos informations sont accessibles uniquement aux personnes
              qui en ont besoin pour traiter votre demande et aux
              prestataires techniques nécessaires au fonctionnement du
              service.
            </p>

            <p className="mt-3">
              Elles ne sont pas vendues à des tiers.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              5. Conservation
            </h2>

            <p>
              Les données sont conservées pendant la durée nécessaire au
              traitement de votre demande, puis pendant la durée nécessaire
              au respect de nos obligations légales ou à la défense de nos
              droits, lorsqu’elles s’appliquent.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              6. Vos droits
            </h2>

            <p>
              Conformément à la réglementation applicable en matière de
              protection des données, vous pouvez notamment demander
              l’accès, la rectification ou l’effacement de vos données,
              ainsi que, lorsque les conditions sont réunies, leur
              limitation ou vous opposer à certains traitements.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-3xl text-navy"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              7. Nous contacter
            </h2>

            <p>
              Une adresse de contact dédiée à l’exercice de vos droits
              sera indiquée ici avant la mise en ligne publique du service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}