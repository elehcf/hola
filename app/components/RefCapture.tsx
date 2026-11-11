"use client";

import { useEffect } from "react";

// Suivi des partenaires : un lien du type holaespagne.fr/?ref=mtn mémorise
// l’origine (90 jours) pour l’ajouter aux demandes envoyées par les formulaires.

const CLE = "hola_ref";
const DUREE = 90 * 24 * 60 * 60 * 1000;

function nettoyer(valeur: string | null) {
  return (valeur ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

export function lireOrigine(): string {
  try {
    const brut = window.localStorage.getItem(CLE);
    if (!brut) return "";
    const { ref, date } = JSON.parse(brut) as { ref?: string; date?: number };
    if (!ref || !date || Date.now() - date > DUREE) return "";
    return ref;
  } catch {
    return "";
  }
}

export default function RefCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const ref = nettoyer(params.get("ref")) || nettoyer(params.get("utm_source"));
      if (ref) {
        window.localStorage.setItem(CLE, JSON.stringify({ ref, date: Date.now() }));
      }
    } catch {
      // Stockage indisponible (navigation privée...) : on ignore.
    }
  }, []);

  return null;
}
