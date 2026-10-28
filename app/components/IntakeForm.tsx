"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Qu’est-ce qui vous amène ?",
  },
  {
    number: "02",
    title: "Vous êtes où aujourd’hui ?",
  },
  {
    number: "03",
    title: "Racontez-nous.",
  },
  {
    number: "04",
    title: "Où en êtes-vous ?",
  },
  {
    number: "05",
    title: "Une dernière chose.",
  },
];

export default function IntakeForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const leadId = useRef(
    `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
  );
  const partielEnvoye = useRef(false);
  const relance = useRef<Promise<string> | null>(null);
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "";

  const [form, setForm] = useState({
    website: "",
    demarche:
      service === "nie"
        ? "Obtenir mon NIE"
        : service === "vehicule"
        ? "Immatriculer mon véhicule"
        : service === "installation"
        ? "Je m’installe en Espagne"
        : service === "diplome"
        ? "Faire reconnaître mon diplôme"
        : service === "activite"
        ? "Créer mon activité en Espagne"
        : service === "fiscalite"
        ? "Fiscalité / résidence France–Espagne"
        : service === "autre"
        ? "Une autre démarche"
        : "",
    localisation: "",
    raison: "",
    avancement: "",
    province: "",
    urgence: "",
    vehiculeSituation: "",
    installationStatut: "",
    nieMotif: "",
    fiscalSituation: "",
    prenom: "",
    email: "",
    telephone: "",
    consentement: false,
  });

  function update(field: string, value: string | boolean) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

  function stepError(): string {
    if (step === 0) {
      if (!form.demarche) return "Choisissez la démarche qui vous concerne.";
      if (!form.prenom.trim()) return "Indiquez votre prénom.";
      if (!emailValide)
        return "Indiquez une adresse e-mail valide : c’est là que nous vous répondrons.";
    }

    if (step === 1 && !form.localisation) {
      return "Dites-nous où vous en êtes aujourd’hui.";
    }

    if (step === 2) {
      if (!form.raison.trim())
        return "Quelques mots suffisent, même approximatifs.";
      if (form.demarche === "Je m’installe en Espagne" && !form.installationStatut)
        return "Précisez votre situation en Espagne.";
      if (form.demarche === "Immatriculer mon véhicule" && !form.vehiculeSituation)
        return "Précisez la situation de la voiture.";
      if (form.demarche === "Obtenir mon NIE" && !form.nieMotif)
        return "Précisez à quoi servira votre NIE.";
      if (
        form.demarche === "Fiscalité / résidence France–Espagne" &&
        !form.fiscalSituation
      )
        return "Précisez votre sujet principal.";
    }

    if (step === 3 && !form.avancement) {
      return "Indiquez où vous en êtes.";
    }

    return "";
  }

  function envoyerPartiel() {
    if (partielEnvoye.current || form.website) return;
    partielEnvoye.current = true;

    relance.current = fetch("/api/demande", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        etape: "partiel",
        leadId: leadId.current,
        demarche: form.demarche,
        prenom: form.prenom,
        email: form.email,
        website: form.website,
      }),
      keepalive: true,
    })
      .then((response) => response.json())
      .then((data) => String(data?.relanceId ?? ""))
      .catch(() => {
        partielEnvoye.current = false;
        return "";
      });
  }

  function next() {
    const message = stepError();

    if (message) {
      setError(message);
      return;
    }

    setError("");

    if (step === 0) {
      envoyerPartiel();
    }

    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  }

  function previous() {
    if (step > 0) {
      setError("");
      setStep(step - 1);
    }
  }

  async function submitForm() {
    if (!form.prenom.trim() || !emailValide) {
      setStep(0);
      setError("Indiquez votre prénom et une adresse e-mail valide.");
      return;
    }

    if (!form.consentement) {
      setError(
  "Merci de prendre connaissance de la politique de confidentialité avant d’envoyer votre demande."
);
      return;
    }

    setSending(true);
    setError("");

    // Identifiant de la relance programmée à l'étape 1, pour l'annuler.
    const relanceId = relance.current
      ? await Promise.race([
          relance.current,
          new Promise<string>((resolve) => setTimeout(() => resolve(""), 4000)),
        ])
      : "";

    try {
      const response = await fetch("/api/demande", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          etape: "complet",
          leadId: leadId.current,
          relanceId,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }

      setSent(true);
    } catch {
      setError(
        "Quelque chose n’a pas fonctionné. Réessayez dans quelques instants."
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <section className="flex min-h-screen items-center bg-navy px-8 py-16 text-ivory md:px-16">
        <div className="mx-auto w-full max-w-6xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            C’est envoyé
          </p>

          <h1
            className="mt-6 max-w-4xl text-6xl leading-[0.9] md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Merci, {form.prenom}.
            <br />
            <span className="italic text-blood">
              On prend le relais.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ivory/60">
            Votre demande est bien arrivée. Vous recevez notre réponse par
            e-mail sous 24 h ouvrées, avec les étapes qui vous concernent et
            le prix de l’accompagnement. Rien n’est engagé tant que vous
            n’avez pas validé la proposition.
          </p>

          <div className="mt-12 flex flex-col items-start gap-6">
            <a
              href={`https://wa.me/34681803938?text=${encodeURIComponent(
                `Bonjour holÀ!, je suis ${form.prenom} et je viens d’envoyer une demande (${form.demarche}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em]"
            >
              C’est urgent ? Écrivez-nous sur WhatsApp →
            </a>

            {bookingUrl && (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ivory/60 px-8 py-4 text-sm uppercase tracking-[0.12em] transition-colors hover:border-blood hover:text-blood"
              >
                Réserver un appel de 15 min →
              </a>
            )}

            <Link
              href="/guides"
              className="inline-block border-b border-ivory/40 pb-2 text-xl transition-colors hover:border-blood hover:text-blood"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              En attendant, nos guides pratiques →
            </Link>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-navy px-8 py-16 text-ivory md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">

        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-ivory/60 transition-colors hover:text-ivory"
          >
            ← Retour
          </Link>

          <span className="text-sm text-ivory/40">
            {step + 1} / {steps.length}
          </span>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-[0.35fr_1fr]">

          <div>
            <span className="text-sm text-blood">
              {steps[step].number}
            </span>
          </div>

          <div>
            <h1
              className="max-w-4xl text-5xl leading-[0.95] md:text-7xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              {steps[step].title}
            </h1>

            <div className="mt-14">

              {step === 0 && (
                <div className="grid gap-3">
                  {[
                    "Obtenir mon NIE",
                    "Immatriculer mon véhicule",
                    "Je m’installe en Espagne",
                    "Faire reconnaître mon diplôme",
                    "Créer mon activité en Espagne",
                    "Fiscalité / résidence France–Espagne",
                    "Une autre démarche",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => update("demarche", option)}
                      className={`border px-6 py-5 text-left text-lg transition-all ${
                        form.demarche === option
                          ? "border-blood bg-blood text-ivory"
                          : "border-ivory/20 hover:border-ivory/60"
                      }`}
                    >
                      {option}
                    </button>
                  ))}

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      autoComplete="given-name"
                      value={form.prenom}
                      onChange={(e) => update("prenom", e.target.value)}
                      placeholder="Votre prénom"
                      className="border-b border-ivory/30 bg-transparent py-4 text-xl outline-none placeholder:text-ivory/30 focus:border-blood"
                    />

                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="Votre e-mail (pour vous répondre)"
                      className="border-b border-ivory/30 bg-transparent py-4 text-xl outline-none placeholder:text-ivory/30 focus:border-blood"
                    />
                  </div>

                  <p className="text-sm text-ivory/40">
                    Votre e-mail sert uniquement à vous répondre au sujet de
                    cette demande.
                  </p>
                </div>
              )}


              {step === 1 && (
                <div className="grid gap-3">
                  {[
                    "Je suis encore en France",
                    "Je suis déjà en Espagne",
                    "Un peu entre les deux",
                    "Autre situation",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => update("localisation", option)}
                      className={`border px-6 py-5 text-left text-lg transition-all ${
                        form.localisation === option
                          ? "border-blood bg-blood text-ivory"
                          : "border-ivory/20 hover:border-ivory/60"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}


              {step === 2 && (
                <div className="grid gap-8">

                  <textarea
                    value={form.raison}
                    onChange={(e) => update("raison", e.target.value)}
                    placeholder={
                      form.demarche === "Obtenir mon NIE"
                        ? "Ex. J’achète un appartement à Valence et le notaire me demande un NIE..."
                        : form.demarche === "Immatriculer mon véhicule"
                        ? "Ex. Je pars vivre à Alicante avec ma voiture, actuellement immatriculée en France..."
                        : form.demarche === "Je m’installe en Espagne"
                        ? "Ex. Je pars vivre à Madrid pour travailler à partir du mois de novembre..."
                        : form.demarche === "Faire reconnaître mon diplôme"
                        ? "Ex. J’ai obtenu mon diplôme en France et j’en ai besoin pour exercer ou poursuivre mes études en Espagne..."
                        : form.demarche === "Créer mon activité en Espagne"
                        ? "Ex. Je souhaite exercer comme indépendant à Barcelone et je ne sais pas quelles formalités anticiper..."
                        : form.demarche === "Fiscalité / résidence France–Espagne"
                        ? "Ex. Je m’installe en Espagne, je conserve des revenus en France et je souhaite comprendre les points à vérifier..."
                        : "Pas besoin de connaître le nom de la démarche. Expliquez-nous simplement ce qui se passe..."
                    }
                    className="min-h-[180px] w-full border border-ivory/20 bg-transparent p-6 text-lg text-ivory outline-none placeholder:text-ivory/30 focus:border-blood"
                  />


                  {/* QUESTION SPÉCIFIQUE NIE */}
                  {form.demarche === "Obtenir mon NIE" && (
                    <div>
                      <p className="mb-4 text-sm uppercase tracking-[0.15em] text-ivory/40">
                        Votre NIE servira à quoi ?
                      </p>

                      <div className="grid gap-3 md:grid-cols-2">
                        {[
                          "Achat immobilier",
                          "Travail ou activité professionnelle",
                          "Banque ou démarche financière",
                          "Succession",
                          "Création ou gestion d’entreprise",
                          "Autre",
                        ].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => update("nieMotif", option)}
                            className={`border px-5 py-4 text-left transition-all ${
                              form.nieMotif === option
                                ? "border-blood bg-blood text-ivory"
                                : "border-ivory/20 hover:border-ivory/60"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}


                  {/* QUESTION SPÉCIFIQUE VÉHICULE */}
                  {form.demarche === "Immatriculer mon véhicule" && (
                    <div>
                      <p className="mb-4 text-sm uppercase tracking-[0.15em] text-ivory/40">
                        Et pour la voiture ?
                      </p>

                      <div className="grid gap-3">
                        {[
                          "Elle est à mon nom en France",
                          "Je viens de l’acheter en France",
                          "Elle est déjà en Espagne",
                          "Autre situation",
                        ].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => update("vehiculeSituation", option)}
                            className={`border px-5 py-4 text-left transition-all ${
                              form.vehiculeSituation === option
                                ? "border-blood bg-blood text-ivory"
                                : "border-ivory/20 hover:border-ivory/60"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}


                  {/* QUESTION SPÉCIFIQUE INSTALLATION */}
                  {form.demarche === "Je m’installe en Espagne" && (
                    <div>
                      <p className="mb-4 text-sm uppercase tracking-[0.15em] text-ivory/40">
                        Vous partez en Espagne en tant que...
                      </p>

                      <div className="grid gap-3 md:grid-cols-2">
                        {[
                          "Salarié(e)",
                          "Indépendant(e)",
                          "Retraité(e)",
                          "Étudiant(e)",
                          "Sans activité professionnelle",
                          "Je ne sais pas encore",
                        ].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => update("installationStatut", option)}
                            className={`border px-5 py-4 text-left transition-all ${
                              form.installationStatut === option
                                ? "border-blood bg-blood text-ivory"
                                : "border-ivory/20 hover:border-ivory/60"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}


                  {/* QUESTION SPÉCIFIQUE FISCALITÉ */}
                  {form.demarche ===
                    "Fiscalité / résidence France–Espagne" && (
                    <div>
                      <p className="mb-4 text-sm uppercase tracking-[0.15em] text-ivory/40">
                        Quel est votre sujet principal ?
                      </p>

                      <div className="grid gap-3 md:grid-cols-2">
                        {[
                          "Changement de résidence fiscale",
                          "Revenus en France et en Espagne",
                          "Bien immobilier",
                          "Retraite ou pension",
                          "Activité professionnelle",
                          "Autre situation",
                        ].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => update("fiscalSituation", option)}
                            className={`border px-5 py-4 text-left transition-all ${
                              form.fiscalSituation === option
                                ? "border-blood bg-blood text-ivory"
                                : "border-ivory/20 hover:border-ivory/60"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}


                  <input
                    type="text"
                    value={form.province}
                    onChange={(e) => update("province", e.target.value)}
                    placeholder="Ville ou province concernée (facultatif)"
                    className="border-b border-ivory/30 bg-transparent py-4 text-xl outline-none placeholder:text-ivory/30 focus:border-blood"
                  />

                </div>
              )}


              {step === 3 && (
                <div>
                  <div className="grid gap-3">
                    {[
                      "Je n’ai encore rien commencé",
                      "J’ai commencé, mais je suis bloqué(e)",
                      "J’ai déjà une partie des documents",
                      "Je ne sais pas vraiment où j’en suis",
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => update("avancement", option)}
                        className={`border px-6 py-5 text-left text-lg transition-all ${
                          form.avancement === option
                            ? "border-blood bg-blood text-ivory"
                            : "border-ivory/20 hover:border-ivory/60"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="mb-4 text-sm uppercase tracking-[0.15em] text-ivory/40">
                      Et côté timing ?
                    </p>

                    <div className="grid gap-3 md:grid-cols-3">
                      {[
                        "Rien ne presse",
                        "Dans les prochaines semaines",
                        "C’est assez urgent",
                      ].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => update("urgence", option)}
                          className={`border px-5 py-4 text-left transition-all ${
                            form.urgence === option
                              ? "border-blood bg-blood text-ivory"
                              : "border-ivory/20 hover:border-ivory/60"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}


              {step === 4 && (
                <div className="grid gap-5">

                  <div
                    className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                    aria-hidden="true"
                  >
                   <label htmlFor="company-fax">
  Ne pas remplir
</label>

<input
  id="company-fax"
  type="text"
  name="company-fax"
  value={form.website}
  onChange={(e) => update("website", e.target.value)}
  tabIndex={-1}
  autoComplete="new-password"
  aria-hidden="true"
/>
                  </div>

                  <p className="max-w-xl text-lg leading-relaxed text-ivory/60">
                    Si c’est urgent, laissez-nous un numéro : nous pourrons
                    vous appeler ou vous écrire sur WhatsApp.
                  </p>

                  <input
                    type="tel"
                    autoComplete="tel"
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    placeholder="Téléphone (facultatif)"
                    className="border-b border-ivory/30 bg-transparent py-4 text-xl outline-none placeholder:text-ivory/30 focus:border-blood"
                  />

                  <label className="mt-4 flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={form.consentement}
                      onChange={(e) =>
                        update("consentement", e.target.checked)
                      }
                      className="mt-1 h-4 w-4 accent-blood"
                    />

                    <span className="max-w-xl text-sm leading-relaxed text-ivory/60">
  J’ai pris connaissance de la{" "}
  <Link
    href="/politique-confidentialite"
    target="_blank"
    rel="noopener noreferrer"
    className="border-b border-ivory/40 text-ivory transition-colors hover:border-blood hover:text-blood"
  >
    politique de confidentialité
  </Link>{" "}
  et comprends que mes informations seront utilisées pour répondre à ma demande.
</span>
                  </label>

                </div>
              )}

            </div>


            {error && (
              <p role="alert" className="mt-8 text-sm text-blood">
                {error}
              </p>
            )}


            <div className="mt-12 flex items-center justify-between">

              <button
                type="button"
                onClick={previous}
                className={`text-sm transition-opacity ${
                  step === 0
                    ? "pointer-events-none opacity-0"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                ← Précédent
              </button>

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em]"
                >
                  Continuer →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submitForm}
                  disabled={sending}
                  className="bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] disabled:opacity-50"
                >
                  {sending ? "Envoi..." : "Envoyer ma demande →"}
                </button>
              )}

            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-ivory/15 pt-6 text-sm text-ivory/50">
              <li>Réponse sous 24 h ouvrées</li>
              <li>Gratuit et sans engagement</li>
              <li>Prix annoncé avant de commencer</li>
              <li>100 % en français</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
