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
          <span className="italic text-blood">confidentialité.</span>
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
              sont traitées par Elena Huergo Cerra, entrepreneur individuel.
            </p>

            <p className="mt-3">
              Ses coordonnées figurent dans les{" "}
              <a href="/mentions-legales" className="underline">
                mentions légales
              </a>{" "}
              du site.
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
  Nous utilisons ces informations pour étudier votre demande, vous
  répondre et, si vous le souhaitez, préparer une éventuelle prestation.
  Ce traitement repose sur les mesures précontractuelles prises à
  votre demande.
</p>

<p className="mt-3">
  Votre prénom, votre adresse e-mail et les informations nécessaires
  pour comprendre votre démarche sont indispensables pour pouvoir vous
  répondre. Le numéro de téléphone est facultatif.
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
              Les informations transmises par le formulaire sont reçues
              par Elena Huergo Cerra à l’adresse bonjour@holaespagne.fr.
              Leur transmission fait intervenir Vercel, qui héberge le
              site, Resend, qui assure l’envoi du message, ainsi que le
              fournisseur de notre messagerie.
            </p>

            <p className="mt-3">
              Ces prestataires interviennent dans le cadre du
              fonctionnement du service. Vos données ne sont pas vendues
              à des tiers.
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
              Si votre demande ne donne pas lieu à une prestation, les
              informations échangées sont conservées pendant 12 mois à
              compter de notre dernier échange, puis supprimées.
            </p>

            <p className="mt-3">
              Si vous devenez client, les données nécessaires à la
              réalisation de la prestation sont conservées pendant la
              durée de notre relation. Certains documents peuvent ensuite
              être conservés plus longtemps lorsque la loi l’exige,
              notamment les documents comptables.
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

            <p className="mt-3">
              Vous pouvez également adresser une réclamation à la{" "}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                className="underline"
              >
                CNIL
              </a>
              .
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
              Pour toute question relative à vos données personnelles ou
              pour exercer vos droits, écrivez à{" "}
              <a
                href="mailto:bonjour@holaespagne.fr"
                className="underline"
              >
                bonjour@holaespagne.fr
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}