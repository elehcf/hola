"use client";

import { useState } from "react";

type Props = {
  source?: string;
  tone?: "light" | "dark";
};

export default function ChecklistForm({ source = "guide", tone = "light" }: Props) {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const dark = tone === "dark";

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Indiquez une adresse e-mail valide.");
      return;
    }

    setError("");
    setState("sending");

    try {
      await fetch("/api/demande", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          etape: "partiel",
          type: "checklist",
          leadId: `checklist-${Date.now().toString(36)}`,
          demarche: `Checklist installation (${source})`,
          prenom: prenom.trim(),
          email: email.trim(),
          website: "",
        }),
      });
    } catch {
      // Le téléchargement reste accessible même si l’envoi échoue.
    }

    setState("done");
    window.open("/checklist-installation-espagne.pdf", "_blank", "noopener");
  }

  const box = dark
    ? "bg-navy text-ivory"
    : "border border-navy/15 bg-white/40 text-navy";
  const muted = dark ? "text-ivory/60" : "text-navy/60";
  const field = dark
    ? "border-ivory/30 placeholder:text-ivory/30"
    : "border-navy/30 placeholder:text-navy/35";

  if (state === "done") {
    return (
      <div className={`px-8 py-10 md:px-12 ${box}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-blood">
          C’est parti
        </p>
        <p
          className="mt-4 text-3xl leading-tight"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Votre checklist s’ouvre dans un nouvel onglet.
        </p>
        <p className={`mt-4 leading-relaxed ${muted}`}>
          Nous vous l’envoyons aussi par e-mail. Elle ne s’est pas ouverte ?{" "}
          <a
            href="/checklist-installation-espagne.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-blood text-blood"
          >
            Téléchargez-la ici
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`px-8 py-10 md:px-12 md:py-12 ${box}`}>
      <p className="text-xs uppercase tracking-[0.25em] text-blood">
        Gratuit · PDF · 2 pages
      </p>

      <p
        className="mt-4 text-3xl leading-tight md:text-4xl"
        style={{ fontFamily: "var(--font-editorial)" }}
      >
        La checklist de votre installation
        <span className="italic text-blood"> en Espagne.</span>
      </p>

      <p className={`mt-5 max-w-xl leading-relaxed ${muted}`}>
        Les démarches dans le bon ordre : ce qui se prépare depuis la France,
        ce qui se fait à l’arrivée, ce qui exige votre présence.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <input
          type="text"
          autoComplete="given-name"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Prénom"
          className={`border-b bg-transparent py-3 text-lg outline-none focus:border-blood ${field}`}
        />
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className={`border-b bg-transparent py-3 text-lg outline-none focus:border-blood ${field}`}
        />
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-blood">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <span className={`text-xs ${muted}`}>
          Pas de spam. Vos données servent uniquement à vous répondre.
        </span>
        <button
          type="submit"
          disabled={state === "sending"}
          className="bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory disabled:opacity-50"
        >
          {state === "sending" ? "Envoi..." : "Recevoir la checklist →"}
        </button>
      </div>
    </form>
  );
}
