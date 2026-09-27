import type { Metadata } from "next";
import Link from "next/link";
import LifestylePhoto from "../components/LifestylePhoto";
import ServiceIllustration from "../components/ServiceIllustration";

export const metadata: Metadata = {
  title: "Démarche administrative en Espagne : besoin d’aide ?",

  description:
    "Une démarche administrative en Espagne vous bloque ? Expliquez-nous ce qui se passe. Nous identifions la démarche et vous aidons à avancer, en français.",

  alternates: {
    canonical: "/autre-demarche",
  },

  openGraph: {
    title: "Une démarche en Espagne vous bloque ? | holÀ!",
    description:
      "Un problème administratif en Espagne ? Expliquez-nous ce qui se passe. Nous cherchons avec vous la bonne façon d’avancer.",
    url: "/autre-demarche",
  },
};

export default function AutreDemarche() {
  return (
    <main className="min-h-screen bg-ivory text-navy">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-8 md:px-16">
        <Link href="/" className="flex items-baseline">
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
        </Link>

        <Link
          href="/"
          className="text-lg transition-colors duration-300 hover:text-blood"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          ← Retour
        </Link>
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
            Un document espagnol qu’on vous réclame. Un dossier qui n’avance
            plus. Une administration à laquelle vous ne savez pas comment
            répondre. Vous n’avez pas besoin de connaître le nom exact de la
            démarche : commencez simplement par nous raconter ce qui se passe.
          </p>

          <ServiceIllustration
            src="/autre-demarche-hola.webp"
            alt="Dossiers administratifs organisés par le fil rouge de holÀ!"
          />

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
            <span className="italic">comment ça s’appelle. »</span>
          </h2>

          <div className="mt-20 border-t border-ivory/25">

            {[
              "Un document espagnol à obtenir",
              "Un dossier qui n’avance plus",
              "Une administration qui vous réclame un justificatif",
              "Une formalité entre la France et l’Espagne",
              "Des papiers dont vous ne savez plus quoi faire",
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

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Et ensuite ?
            </p>
            <LifestylePhoto
              src="/autre-demarche-lifestyle-hola.webp"
              alt="Une femme demande de l’aide pour comprendre un courrier administratif espagnol"
              eyebrow="Même quand la démarche n’a pas encore de nom"
              compact
            />
          </div>

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
              Vous nous racontez ce qui se passe et nous remettons les choses
              à plat : quelle administration est concernée, ce qu’elle vous
              demande et ce qu’il faut faire pour avancer.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Si nous pouvons nous en charger, nous vous expliquons comment.
              Et si votre demande relève d’un avocat, d’un fiscaliste ou d’un
              autre professionnel réglementé, nous vous le disons clairement
              et vous orientons vers le bon interlocuteur.
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
