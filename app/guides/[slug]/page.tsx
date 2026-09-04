import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getGuide,
  getRelatedGuides,
  guides,
} from "../guides-data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.seoTitle,
    description: guide.description,

    alternates: {
      canonical: `/guides/${guide.slug}`,
    },

    openGraph: {
      title: `${guide.title} | holÀ!`,
      description: guide.description,
      url: `/guides/${guide.slug}`,
      type: "article",
      locale: "fr_FR",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(guide.related);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.holaespagne.fr/guides/${guide.slug}`,
    },
    author: {
      "@type": "Organization",
      name: "holÀ!",
      url: "https://www.holaespagne.fr/",
    },
    publisher: {
      "@id": "https://www.holaespagne.fr/#organization",
    },
    inLanguage: "fr-FR",
  };

  return (
    <main className="bg-ivory text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="px-8 pb-20 pt-16 md:px-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <Link
              href="/guides"
              className="text-sm text-navy/55 transition-colors hover:text-blood"
            >
              ← Tous les guides
            </Link>

            <span className="text-xs uppercase tracking-[0.25em] text-blood">
              {guide.category}
            </span>
          </div>

          <div className="mt-20 max-w-5xl md:mt-28">
            <p className="text-xs uppercase tracking-[0.28em] text-blood">
              {guide.eyebrow}
            </p>

            <h1
              className="mt-7 text-5xl leading-[0.95] md:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              {guide.title}
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-navy/65">
              {guide.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="border-t border-navy/15 px-8 py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.28fr_1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-12">
              <p className="text-xs uppercase tracking-[0.22em] text-navy/40">
                Dans ce guide
              </p>

              <div className="mt-7 space-y-4">
                {guide.sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#section-${index + 1}`}
                    className="block text-sm leading-snug text-navy/50 transition-colors hover:text-blood"
                  >
                    {String(index + 1).padStart(2, "0")} — {section.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <article className="max-w-3xl">
            {guide.sections.map((section, index) => (
              <section
                key={section.title}
                id={`section-${index + 1}`}
                className="border-t border-navy/15 py-14 first:border-t-0 first:pt-0 md:py-20"
              >
                <span className="text-sm text-blood">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2
                  className="mt-4 text-4xl leading-tight md:text-5xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {section.title}
                </h2>

                <div className="mt-8 space-y-6">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-[1.8] text-navy/70"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-4 border-l border-blood/50 pl-7">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-lg leading-relaxed text-navy/70"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {/* SERVICE CTA */}
            <section className="mt-8 bg-navy px-8 py-12 text-ivory md:px-12 md:py-16">
              <p className="text-xs uppercase tracking-[0.25em] text-blood">
                Vous pourriez le faire vous-même.
              </p>

              <h2
                className="mt-5 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Mais vous n’avez
                <br />
                <span className="italic text-blood">
                  pas à le faire.
                </span>
              </h2>

              <p className="mt-7 max-w-xl leading-relaxed text-ivory/65">
                holÀ! vous aide à préparer et organiser votre démarche
                administrative en Espagne, simplement et en français.
              </p>

              <Link
                href={guide.serviceHref}
                className="mt-9 inline-block border-b border-ivory/60 pb-2 text-xl transition-colors hover:border-blood hover:text-blood"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                {guide.serviceLabel} →
              </Link>
            </section>
          </article>
        </div>
      </section>

      {/* RELATED */}
      {relatedGuides.length > 0 && (
        <section className="border-t border-navy/15 px-8 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.25em] text-blood">
              Continuer à comprendre
            </p>

            <h2
              className="mt-5 text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Guides liés
            </h2>

            <div className="mt-14 grid gap-px bg-navy/15 md:grid-cols-3">
              {relatedGuides.slice(0, 3).map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="group bg-ivory p-8 transition-colors hover:bg-navy hover:text-ivory md:p-10"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-blood">
                    {related.category}
                  </span>

                  <h3
                    className="mt-5 text-3xl leading-tight"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {related.title}
                  </h3>

                  <span className="mt-10 block text-xl transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/guides"
              className="mt-12 inline-block border-b border-navy/30 pb-2 text-lg transition-colors hover:border-blood hover:text-blood"
            >
              Voir tous les guides →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}