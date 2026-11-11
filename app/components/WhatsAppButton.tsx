"use client";

import { usePathname } from "next/navigation";
import { contextePour, lienWhatsapp } from "./contexte";

export default function WhatsAppButton() {
  const chemin = usePathname() ?? "/";

  // Sur les guides, la barre d’action en bas de page contient déjà WhatsApp.
  if (chemin.startsWith("/guides/")) return null;

  const contexte = contextePour(chemin);

  return (
    <a
      href={lienWhatsapp(contexte.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à holÀ! sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-blood px-5 py-3 text-sm text-ivory shadow-[0_12px_35px_rgba(21,34,56,0.24)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blood md:bottom-7 md:right-7"
    >
      <span
        aria-hidden="true"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-ivory/50 text-xs font-semibold"
      >
        W
      </span>
      <span className="hidden sm:inline">Une question ? WhatsApp</span>
      <span className="sm:hidden">Une question ? WhatsApp</span>
    </a>
  );
}
