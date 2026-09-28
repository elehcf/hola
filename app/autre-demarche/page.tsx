import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LifestylePhoto from "../components/LifestylePhoto";
import PageHeader from "../components/PageHeader";

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

      <PageHeader />

      {/* HERO */}
      <section className="px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Autre démarche
          </p>

          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-8xl"
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

          <div className="mt-12 grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-navy/70">
                Un document espagnol qu’on vous réclame. Un dossier qui n’avance
                plus. Une administration à laquelle vous ne savez pas comment
                répondre. Vous n’avez pas besoin de connaître le nom exact de la
                démarche : commencez simplement par nous raconter ce qui se passe.
              </p>
              <Link
                href="/demande?service=autre"
                className="mt-8 inline-block bg-blood px-6 py-3 text-xs uppercase tracking-[0.12em] text-ivory transition-transform hover:-translate-y-0.5"
              >
                Raconter ma situation →
              </Link>
            </div>
            <figure className="md:justify-self-end">
              <div className="max-w-[430px] overflow-hidden">
                <Image
                  src="/autre-demarche-lifestyle-hola.webp"
                  alt="Demander de l’aide pour comprendre une démarche administrative espagnole"
                  width={1200}
                  height={900}
                  priority
                  sizes="(min-width: 768px) 38vw, 92vw"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
              </div>
            </figure>
          </div>

        </div>
      </section>


      {/* EXEMPLES */}
      <section className="bg-navy px-8 py-28 text-ivory md:px-16 md:py-36">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Par exemple
          </p>

          <h2
            className="mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            « Je ne sais même pas
            <br />
            <span className="italic">comment ça s’appelle. »</span>
          </h2>

          <div className="mt-12 grid gap-10 sm:mt-16 md:mt-20 md:grid-cols-[1fr_280px] md:items-start">\n            <div className="border border-ivory/25">

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

            <div className="hidden md:flex md:justify-end">
              <Image
                src="/autre-demarche-hola.webp"
                alt="Dossiers administratifs organisés par le fil rouge de holÀ!"
                width={650}
                height={520}
                sizes="280px"
                className="h-auto max-h-[280px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-10 md:gap-16 md:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Et ensuite ?
            </p>
            <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-navy/55">
              Même quand la démarche n’a pas encore de nom, on peut commencer par la situation.
            </p>
          </div>

          <div>
            <h2
              className="max-w-3xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
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
            <Link
              href="/demande?service=autre"
              className="mt-8 inline-block border-b border-navy/30 pb-1 text-lg transition-colors hover:border-blood hover:text-blood"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Racontez-nous ce qui se passe →
            </Link>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="mx-0 mb-10 bg-blood px-6 py-10 text-ivory sm:mx-8 sm:mb-16 sm:px-8 md:mx-auto md:max-w-6xl md:px-12 md:py-12">
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
            Votre situation
          </p>

          <div className="mt-6 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <h2
                className="max-w-4xl text-4xl leading-[0.98] sm:text-5xl"
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
