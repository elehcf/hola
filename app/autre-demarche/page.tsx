import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démarche administrative en Espagne : besoin d’aide ?",

  description:
    "Une démarche administrative en Espagne vous bloque ? Expliquez-nous votre situation. Nous identifions la démarche et vous indiquons comment avancer, en français.",

  alternates: {
    canonical: "/autre-demarche",
  },

  openGraph: {
    title: "Une démarche en Espagne vous bloque ? | holÀ!",
    description:
      "Expliquez-nous votre situation administrative en Espagne. Nous identifions la démarche et la façon d’avancer.",
    url: "/autre-demarche",
  },
};export default function AutreDemarche() {
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
            Autre démarche
          </p>

          <h1
            className="mt-6 max-w-5xl text-6xl leading-[0.9] md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Votre problème ne rentre
            <br />
            dans aucune case ?
            <br />

            <span className="italic text-blood">
              Racontez-nous.
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-navy/70">
            Une administration espagnole vous demande un document.
            Une démarche reste bloquée. Vous ne savez pas à qui vous
            adresser — ni même exactement ce que vous devez faire.
            Commencez simplement par nous expliquer la situation.
          </p>

        </div>
      </section>


      {/* EXEMPLES */}
      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Par exemple
          </p>

          <h2
            className="mt-5 max-w-4xl text-5xl leading-[0.95] md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            « Je ne sais même pas
            <br />
            <span className="italic">comment s’appelle la démarche. »</span>
          </h2>

          <div className="mt-20 border-t border-ivory/25">

            {[
              "Un document espagnol à obtenir",
              "Une démarche déjà commencée mais bloquée",
              "Une administration qui vous demande un justificatif",
              "Une formalité entre la France et l’Espagne",
              "Un dossier dont vous ne savez plus quoi faire",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-8 border-b border-ivory/25 py-6"
              >
                <span className="text-sm text-blood">
                  0{index + 1}
                </span>

                <p
                  className="text-2xl md:text-3xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* COMMENT */}
      <section className="px-8 py-28 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.7fr_1.3fr]">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Et ensuite ?
          </p>

          <div>
            <h2
              className="max-w-3xl text-5xl leading-[0.95] md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              On regarde d’abord
              <br />
              <span className="italic text-blood">
                si on peut vraiment vous aider.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
  Nous étudions votre situation, identifions la démarche
  administrative concernée en Espagne et déterminons ce qui peut
  être préparé ou pris en charge à distance.
</p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Si votre demande nécessite l’intervention d’un professionnel
              réglementé, nous vous l’indiquons et vous orientons vers
              l’interlocuteur approprié.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="mx-8 mb-16 bg-blood px-8 py-16 text-ivory md:mx-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
            Votre situation
          </p>

          <div className="mt-6 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <h2
                className="max-w-4xl text-5xl leading-[0.95] md:text-7xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Pas besoin de connaître
                <br />
                <span className="italic">
                  le nom de la démarche.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-ivory/70">
                Dites-nous simplement ce qui vous arrive.
              </p>
            </div>

            <a
              href="/demande?service=autre"
              className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Expliquer ma situation
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