import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "./guides-data";

export const metadata: Metadata = {
  title: "Guides pratiques pour vos démarches en Espagne",
  description:
    "NIE, installation, voiture et démarches administratives : les guides holÀ! pour comprendre l’administration espagnole simplement et en français.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Guides pratiques Espagne | holÀ!",
    description:
      "Des guides clairs pour comprendre vos démarches administratives en Espagne.",
    url: "/guides",
  },
};

const categories = [
  {
    name: "NIE",
    number: "01",
    title: "Votre NIE",
    description:
      "Comprendre le NIE, préparer les documents et savoir par où commencer.",
  },
  {
    name: "Voiture",
    number: "02",
    title: "Votre voiture",
    description:
      "Immatriculation, ITV, taxes et changement de résidence depuis la France.",
  },
  {
    name: "Installation",
    number: "03",
    title: "Votre installation",
    description:
      "Les démarches essentielles pour construire votre nouvelle vie en Espagne.",
  },
] as const;

export default function GuidesPage() {
  return (
    <main className="bg-ivory text-navy">
      {/* HERO */}
      <section className="px-8 pb-24 pt-16 md:px-16 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-navy/55 transition-colors hover:text-blood"
            >
              ← Accueil
            </Link>

            <span className="text-xs uppercase tracking-[0.25em] text-blood">
              Guides holÀ!
            </span>
          </div>

          <div className="mt-24 max-w-5xl md:mt-32">
            <p className="text-xs uppercase tracking-[0.28em] text-blood">
              Comprendre avant de commencer
            </p>

            <h1
              className="mt-7 text-6xl leading-[0.9] md:text-8xl lg:text-9xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              L’Espagne,
              <br />
              <span className="italic text-blood">
                sans le mode d’emploi
              </span>
              <br />
              incompréhensible.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/65 md:text-xl">
              NIE, voiture, installation… Des explications claires pour
              comprendre vos démarches en Espagne avant de vous lancer.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-t border-navy/15">
        <div className="mx-auto max-w-6xl px-8 md:px-16">
          {categories.map((category) => {
            const categoryGuides = guides.filter(
              (guide) => guide.category === category.name
            );

            return (
              <section
                key={category.name}
                className="grid gap-10 border-b border-navy/15 py-20 md:grid-cols-[0.32fr_1fr] md:py-28"
              >
                <div>
                  <span className="text-sm text-blood">
                    {category.number}
                  </span>

                  <h2
                    className="mt-4 text-4xl md:text-5xl"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {category.title}
                  </h2>

                  <p className="mt-5 max-w-xs leading-relaxed text-navy/55">
                    {category.description}
                  </p>
                </div>

                <div>
                  {categoryGuides.map((guide, index) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="group grid gap-4 border-t border-navy/15 py-7 first:border-t-0 md:grid-cols-[55px_1fr_auto] md:items-center"
                    >
                      <span className="text-xs text-navy/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p
                          className="text-2xl leading-tight transition-colors group-hover:text-blood md:text-3xl"
                          style={{
                            fontFamily: "var(--font-editorial)",
                          }}
                        >
                          {guide.title}
                        </p>

                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/50">
                          {guide.description}
                        </p>
                      </div>

                      <span className="hidden text-2xl transition-transform group-hover:translate-x-2 md:block">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blood px-8 py-24 text-ivory md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-ivory/60">
            Votre situation n’entre dans aucune case ?
          </p>

          <h2
            className="mt-6 max-w-4xl text-5xl leading-[0.95] md:text-7xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Expliquez-nous.
            <br />
            <span className="italic">On trouvera par où commencer.</span>
          </h2>

          <Link
            href="/demande?service=autre"
            className="mt-12 inline-block border-b border-ivory pb-2 text-xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Parler de ma démarche →
          </Link>
        </div>
      </section>
    </main>
  );
}