"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const steps = [
  {
    number: "01",
    title: "Quelle est votre démarche ?",
  },
  {
    number: "02",
    title: "Où êtes-vous actuellement ?",
  },
  {
    number: "03",
    title: "Pourquoi avez-vous besoin de cette démarche ?",
  },
  {
    number: "04",
    title: "Où en êtes-vous ?",
  },
  {
    number: "05",
    title: "Comment pouvons-nous vous répondre ?",
  },
];

export default function IntakeForm() {
    const searchParams = useSearchParams();
const service = searchParams.get("service");
  const [step, setStep] = useState(0);
const [sending, setSending] = useState(false);
const [sent, setSent] = useState(false);
const [error, setError] = useState("");
  const [form, setForm] = useState({website: "",
    demarche:
  service === "nie"
    ? "Obtenir mon NIE"
    : service === "vehicule"
    ? "Immatriculer mon véhicule"
    : service === "installation"
? "Je m’installe en Espagne"
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

function next() {
  let completed = false;

  if (step === 0) {
    completed = Boolean(form.demarche);
  }

  if (step === 1) {
    completed = Boolean(form.localisation);
  }

  if (step === 2) {
    completed = Boolean(form.raison.trim());

    if (form.demarche === "Je m’installe en Espagne") {
      completed =
        completed &&
        Boolean(form.installationStatut) &&
        Boolean(form.province);
    }

    if (form.demarche === "Immatriculer mon véhicule") {
      completed =
        completed &&
        Boolean(form.vehiculeSituation) &&
        Boolean(form.province);
    }

    if (form.demarche === "Obtenir mon NIE") {
      completed =
        completed &&
        Boolean(form.nieMotif) &&
        Boolean(form.province);
    }
  }

  if (step === 3) {
    completed = Boolean(form.avancement);
  }

  if (!completed) return;

  if (step < steps.length - 1) {
    setStep(step + 1);
  }
}
  function previous() {
    if (step > 0) {
      setStep(step - 1);
    }
  }
  async function submitForm() {
  if (!form.prenom.trim() || !form.email.trim()) {
    setError("Merci de renseigner votre prénom et votre e-mail.");
    return;
  }

  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    form.email.trim()
  );

  if (!emailValide) {
    setError("Merci d’indiquer une adresse e-mail valide.");
    return;
  }

  if (!form.consentement) {
    setError(
      "Merci d’accepter l’utilisation de vos informations pour traiter votre demande."
    );
    return;
  }

  setSending(true);
  setError("");

  try {
    const response = await fetch("/api/demande", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error();
    }

    setSent(true);
  } catch {
    setError(
      "Une erreur est survenue. Merci de réessayer dans quelques instants."
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
          Demande envoyée
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
          Votre demande est bien arrivée. Nous allons l’étudier et
          reviendrons vers vous à l’adresse que vous nous avez indiquée.
        </p>

        <a
          href="/"
          className="mt-12 inline-block border-b border-ivory/40 pb-2 text-xl transition-colors hover:border-blood hover:text-blood"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Retour à l’accueil →
        </a>
      </div>
    </section>
  );
}
  return (
    <section className="min-h-screen bg-navy px-8 py-16 text-ivory md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">

        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-sm text-ivory/60 transition-colors hover:text-ivory"
          >
            ← Retour
          </a>

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
                </div>
              )}


              {step === 1 && (
                <div className="grid gap-3">
                  {[
                    "Je suis en France",
                    "Je suis déjà en Espagne",
                    "Je suis entre les deux",
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
          ? "Ex. Je m’installe à Alicante avec ma voiture actuellement immatriculée en France..."
          : form.demarche === "Je m’installe en Espagne"
          ? "Ex. Je pars vivre à Madrid pour travailler à partir du mois de novembre..."
          : "Expliquez-nous simplement ce qui vous arrive..."
      }
      className="min-h-[180px] w-full border border-ivory/20 bg-transparent p-6 text-lg text-ivory outline-none placeholder:text-ivory/30 focus:border-blood"
    />
{/* QUESTION SPÉCIFIQUE NIE */}
{form.demarche === "Obtenir mon NIE" && (
  <div>
    <p className="mb-4 text-sm uppercase tracking-[0.15em] text-ivory/40">
      Pourquoi avez-vous besoin d’un NIE ?
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
      Quelle est votre situation ?
    </p>

    <div className="grid gap-3">
      {[
        "Le véhicule est à mon nom en France",
        "Je viens d’acheter le véhicule en France",
        "Le véhicule est déjà en Espagne",
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
      Quelle sera votre situation en Espagne ?
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
    <input
      type="text"
      value={form.province}
      onChange={(e) => update("province", e.target.value)}
      placeholder="Ville ou province concernée en Espagne"
      className="border-b border-ivory/30 bg-transparent py-4 text-xl outline-none placeholder:text-ivory/30 focus:border-blood"
    />

  </div>
)}

              {step === 3 && (
  <div>
    <div className="grid gap-3">
      {[
        "Je n’ai encore rien commencé",
        "J’ai commencé mais je suis bloqué(e)",
        "J’ai déjà certains documents",
        "Je ne sais pas",
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
        Votre demande est-elle urgente ?
      </p>

      <div className="grid gap-3 md:grid-cols-3">
        {[
          "Non",
          "Dans les prochaines semaines",
          "Oui, rapidement",
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
  <label htmlFor="website">
    Website
  </label>

  <input
    id="website"
    type="text"
    name="website"
    value={form.website}
    onChange={(e) => update("website", e.target.value)}
    tabIndex={-1}
    autoComplete="off"
  />
</div>
                  <input
                    type="text"
                    value={form.prenom}
                    onChange={(e) => update("prenom", e.target.value)}
                    placeholder="Prénom"
                    className="border-b border-ivory/30 bg-transparent py-4 text-xl outline-none placeholder:text-ivory/30 focus:border-blood"
                  />

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="E-mail"
                    className="border-b border-ivory/30 bg-transparent py-4 text-xl outline-none placeholder:text-ivory/30 focus:border-blood"
                  />

                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    placeholder="Téléphone (facultatif)"
                    className="border-b border-ivory/30 bg-transparent py-4 text-xl outline-none placeholder:text-ivory/30 focus:border-blood"
                  />
                  <label className="mt-4 flex cursor-pointer items-start gap-3">
  <input
    type="checkbox"
    checked={form.consentement}
    onChange={(e) => update("consentement", e.target.checked)}
    className="mt-1 h-4 w-4 accent-blood"
  />

  <span className="max-w-xl text-sm leading-relaxed text-ivory/60">
    J’accepte que mes informations soient utilisées pour traiter ma
    demande et me recontacter.{" "}
    <a
      href="/politique-confidentialite"
      target="_blank"
      className="border-b border-ivory/40 text-ivory transition-colors hover:border-blood hover:text-blood"
    >
      Politique de confidentialité
    </a>
  </span>
</label>
                </div>
              )}

            </div>


            {error && (
  <p className="mt-8 text-sm text-blood">
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

          </div>
        </div>
      </div>
    </section>
  );
}