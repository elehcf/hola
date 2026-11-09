"use client";

import { useState } from "react";

const MAX_BYTES = 4 * 1024 * 1024;

const organismes = [
  "DGT (Dirección General de Tráfico)",
  "Servei Català de Trànsit (Catalogne)",
  "Trafikoa (Pays basque)",
  "Mairie / police locale (ZBE, stationnement…)",
  "Je ne sais pas",
];

const conducteurs = [
  "C’était moi",
  "Une autre personne conduisait",
  "Voiture de location",
  "Je ne sais pas",
];

export default function AmendeForm() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Indiquez une adresse e-mail valide.");
      return;
    }
    const fichier = data.get("fichier");
    if (fichier instanceof File && fichier.size > MAX_BYTES) {
      setError("Fichier trop lourd (4 Mo maximum). Prenez une photo plus légère ou envoyez-la ensuite par e-mail.");
      return;
    }
    if (fichier instanceof File && fichier.size === 0) data.delete("fichier");

    setError("");
    setState("sending");

    try {
      const response = await fetch("/api/amende", { method: "POST", body: data });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(result.error || "L’envoi a échoué. Réessayez ou écrivez-nous à bonjour@holaespagne.fr.");
        setState("idle");
        return;
      }
      setState("done");
    } catch {
      setError("L’envoi a échoué. Réessayez ou écrivez-nous à bonjour@holaespagne.fr.");
      setState("idle");
    }
  }

  const label = "text-xs uppercase tracking-[0.18em] text-ivory/60";
  const field =
    "mt-2 w-full border-b border-ivory/30 bg-transparent py-3 text-lg text-ivory outline-none placeholder:text-ivory/30 focus:border-blood";

  if (state === "done") {
    return (
      <div className="bg-navy px-8 py-12 text-ivory md:px-12">
        <p className="text-xs uppercase tracking-[0.25em] text-blood">C’est reçu</p>
        <p className="mt-4 text-3xl leading-tight md:text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>
          Nous analysons votre amende.
          <span className="italic text-blood"> Réponse sous 24 h ouvrées.</span>
        </p>
        <p className="mt-5 max-w-xl leading-relaxed text-ivory/60">
          Un e-mail de confirmation vient de partir. D’ici notre réponse, ne payez pas l’amende si
          vous envisagez de la contester : le paiement avec réduction vaut renonciation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} encType="multipart/form-data" className="bg-navy px-8 py-10 text-ivory md:px-12 md:py-14">
      <p className="text-xs uppercase tracking-[0.25em] text-blood">Analyse gratuite · réponse sous 24 h</p>
      <p className="mt-4 text-3xl leading-tight md:text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>
        Envoyez-nous votre amende.
        <span className="italic text-blood"> On vous dit s’il faut payer ou contester.</span>
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className={label}>Prénom *</span>
          <input name="prenom" required autoComplete="given-name" className={field} />
        </label>
        <label className="block">
          <span className={label}>E-mail *</span>
          <input name="email" type="email" required inputMode="email" autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className={label}>Téléphone (WhatsApp)</span>
          <input name="telephone" type="tel" autoComplete="tel" className={field} placeholder="Facultatif" />
        </label>
        <label className="block">
          <span className={label}>Qui a émis l’amende ?</span>
          <select name="organisme" defaultValue="" className={`${field} [&>option]:text-navy`}>
            <option value="" disabled>Choisir</option>
            {organismes.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={label}>Date de réception du courrier</span>
          <input name="dateNotification" type="date" className={`${field} [color-scheme:dark]`} />
        </label>
        <label className="block">
          <span className={label}>Montant (€)</span>
          <input name="montant" type="number" min="0" step="1" inputMode="numeric" className={field} placeholder="Ex. 200" />
        </label>
        <label className="block md:col-span-2">
          <span className={label}>Qui conduisait ?</span>
          <select name="conducteur" defaultValue="" className={`${field} [&>option]:text-navy`}>
            <option value="" disabled>Choisir</option>
            {conducteurs.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className="block cursor-pointer border border-dashed border-ivory/30 px-6 py-8 text-center transition-colors hover:border-blood md:col-span-2">
          <span className="block text-lg" style={{ fontFamily: "var(--font-editorial)" }}>
            {fileName || "Photo ou PDF de l’amende (recto et verso)"}
          </span>
          <span className="mt-2 block text-sm text-ivory/50">
            JPG, PNG ou PDF · 4 Mo maximum · facultatif, vous pourrez l’envoyer après
          </span>
          <input
            name="fichier"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,application/pdf"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>

        <label className="block md:col-span-2">
          <span className={label}>Ce qu’il faut savoir (lieu, contexte, ce qui vous semble injuste…)</span>
          <textarea name="message" rows={3} maxLength={3000} className={`${field} resize-none`} />
        </label>
      </div>

      {/* Honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="mt-8 flex items-start gap-3 text-sm text-ivory/60">
        <input name="consentement" type="checkbox" value="oui" required className="mt-1 accent-[#8F1D2C]" />
        <span>
          J’accepte que holÀ! utilise ces informations pour analyser mon amende et me répondre.{" "}
          <a href="/politique-confidentialite" className="border-b border-ivory/30">Confidentialité</a>
        </span>
      </label>

      {error && (
        <p role="alert" className="mt-5 text-sm text-blood">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs text-ivory/50">Gratuit et sans engagement. Vous décidez ensuite.</span>
        <button
          type="submit"
          disabled={state === "sending"}
          className="bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory disabled:opacity-50"
        >
          {state === "sending" ? "Envoi..." : "Analyser mon amende →"}
        </button>
      </div>
    </form>
  );
}
