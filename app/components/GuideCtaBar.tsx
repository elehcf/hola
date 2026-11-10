"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { contextePour, lienWhatsapp } from "./contexte";

type Props = {
  slug: string;
  categorie: string;
};

// Barre d’action fixe en bas des guides : apparaît après un quart de lecture.
export default function GuideCtaBar({ slug, categorie }: Props) {
  const [visible, setVisible] = useState(false);
  const [fermee, setFermee] = useState(false);

  useEffect(() => {
    function surDefilement() {
      const hauteur = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(hauteur > 0 && window.scrollY / hauteur > 0.25);
    }
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);

  if (fermee) return null;

  const cle =
    categorie === "Voiture" ? `voiture-${slug}` : categorie === "NIE" ? `nie-${slug}` : `installation-${slug}`;
  const contexte = contextePour(cle);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-ivory/15 bg-navy text-ivory shadow-[0_-12px_35px_rgba(21,34,56,0.24)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-3 md:px-8 md:py-4">
        <p className="min-w-0 flex-1 text-sm leading-snug">
          <span className="block text-base md:inline" style={{ fontFamily: "var(--font-editorial)" }}>
            {contexte.accroche}
          </span>
          <span className="text-ivory/60 md:ml-3">{contexte.prix} · réponse sous 24 h</span>
        </p>
        <div className="flex w-full items-center gap-3 md:w-auto">
          <a
            href={lienWhatsapp(contexte.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-ivory/40 px-4 py-3 text-center text-xs uppercase tracking-[0.12em] md:flex-none"
          >
            WhatsApp
          </a>
          <Link
            href={`/demande?service=${contexte.service}`}
            className="flex-1 bg-blood px-4 py-3 text-center text-xs uppercase tracking-[0.12em] text-ivory md:flex-none"
          >
            Être accompagné →
          </Link>
          <button
            type="button"
            onClick={() => setFermee(true)}
            aria-label="Fermer"
            className="px-2 py-3 text-lg leading-none text-ivory/50 hover:text-ivory"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
