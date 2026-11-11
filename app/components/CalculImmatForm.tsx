"use client";

import { useState } from "react";
import Link from "next/link";

// Année de référence du calcul (tables de Hacienda 2026).
const ANNEE_REFERENCE = 2026;

// Taxe DGT 1.1 : immatriculation d’un véhicule non immatriculé en Espagne.
const TAXE_DGT = 99.77;

// Accompagnement holÀ!, hors taxes et frais externes.
const FRAIS_HOLA = 449;

// TVA espagnole (péninsule et Baléares), utilisée pour retirer les taxes
// résiduelles de la valeur de marché d’un véhicule déjà immatriculé à l’étranger.
const TVA_ESPAGNE = 0.21;

// Pourcentages de l’anexo IV des tables de Hacienda, selon les années d’utilisation.
// Index 0 : jusqu’à 1 an ; index 1 : plus de 1 an jusqu’à 2 ; ... ; index 12 : plus de 12 ans.
const POURCENTAGES_AGE: readonly number[] = [100, 84, 67, 56, 47, 39, 34, 28, 24, 19, 17, 13, 10];

type Reponse = "oui" | "non";

type Tranche = {
  libelle: string;
  taux: number;
};

function trancheCo2(co2: number): Tranche {
  if (co2 <= 120) return { libelle: "120 g/km ou moins", taux: 0 };
  if (co2 < 160) return { libelle: "plus de 120 et moins de 160 g/km", taux: 0.0475 };
  if (co2 < 200) return { libelle: "de 160 à moins de 200 g/km", taux: 0.0975 };
  return { libelle: "200 g/km ou plus", taux: 0.1475 };
}

function pourcentageAge(annee: number): number {
  const age = Math.max(0, ANNEE_REFERENCE - annee);
  const index = Math.min(age, POURCENTAGES_AGE.length - 1);
  return POURCENTAGES_AGE[index] ?? 10;
}

function lireNombre(valeur: string): number | null {
  const propre = valeur.replace(/[\s  €]/g, "").replace(",", ".");
  if (propre === "") return null;
  const nombre = Number(propre);
  return Number.isFinite(nombre) && nombre >= 0 ? nombre : null;
}

const euros = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const eurosCentimes = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const pourcent = new Intl.NumberFormat("fr-FR", {
  style: "percent",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const annees: number[] = Array.from({ length: 37 }, (_, i) => ANNEE_REFERENCE - i);

export default function CalculImmatForm() {
  const [demenagement, setDemenagement] = useState<Reponse>("non");
  const [co2Saisi, setCo2Saisi] = useState("");
  const [anneeSaisie, setAnneeSaisie] = useState("");
  const [valeurSaisie, setValeurSaisie] = useState("");

  const co2 = lireNombre(co2Saisi);
  const annee = anneeSaisie === "" ? null : Number(anneeSaisie);
  const valeurNeuf = lireNombre(valeurSaisie);

  const exonere = demenagement === "oui";
  const tranche = co2 === null ? null : trancheCo2(co2);
  const pourcentage = annee === null ? null : pourcentageAge(annee);

  let impot: number | null = null;
  let baseEstimee: number | null = null;

  if (exonere) {
    impot = 0;
  } else if (tranche !== null && tranche.taux === 0) {
    impot = 0;
  } else if (tranche !== null && pourcentage !== null && valeurNeuf !== null) {
    const valeurMarche = valeurNeuf * (pourcentage / 100);
    baseEstimee = valeurMarche / (1 + TVA_ESPAGNE + tranche.taux);
    impot = Math.round(baseEstimee * tranche.taux);
  }

  const total = impot === null ? null : impot + TAXE_DGT + FRAIS_HOLA;

  const label = "text-xs uppercase tracking-[0.18em] text-ivory/60";
  const field =
    "mt-2 w-full border-b border-ivory/30 bg-transparent py-3 text-lg text-ivory outline-none placeholder:text-ivory/30 focus:border-blood";

  function choix(valeur: Reponse, texte: string) {
    const actif = demenagement === valeur;
    return (
      <button
        type="button"
        aria-pressed={actif}
        onClick={() => setDemenagement(valeur)}
        className={`border px-6 py-3 text-sm uppercase tracking-[0.12em] transition-colors ${
          actif
            ? "border-blood bg-blood text-ivory"
            : "border-ivory/30 text-ivory/70 hover:border-ivory"
        }`}
      >
        {texte}
      </button>
    );
  }

  return (
    <div className="bg-navy px-6 py-10 text-ivory sm:px-8 md:px-12 md:py-14">
      <p className="text-xs uppercase tracking-[0.25em] text-blood">
        Calculateur · estimation {ANNEE_REFERENCE}
      </p>
      <p
        className="mt-4 text-3xl leading-tight md:text-4xl"
        style={{ fontFamily: "var(--font-editorial)" }}
      >
        Votre voiture, vos chiffres.
        <span className="italic text-blood"> Le coût estimé en un instant.</span>
      </p>

      <div className="mt-10">
        <p className={label}>
          Vous emménagez en Espagne et la voiture est à vous depuis plus de 6 mois ?
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {choix("oui", "Oui")}
          {choix("non", "Non")}
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory/50">
          Oui si vous viviez hors d’Espagne depuis au moins 12 mois et que vous
          utilisiez déjà cette voiture en France au moins 6 mois avant de partir.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <label className="block">
          <span className={label}>Émissions CO2 (g/km WLTP)</span>
          <input
            type="text"
            inputMode="numeric"
            value={co2Saisi}
            onChange={(e) => setCo2Saisi(e.target.value)}
            placeholder="Ex. 135"
            className={field}
          />
        </label>
        <label className="block">
          <span className={label}>Année de 1re immatriculation</span>
          <select
            value={anneeSaisie}
            onChange={(e) => setAnneeSaisie(e.target.value)}
            className={`${field} [&>option]:text-navy`}
          >
            <option value="" disabled>
              Choisir
            </option>
            {annees.map((a) => (
              <option key={a} value={String(a)}>
                {a}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={label}>Prix du véhicule neuf (€)</span>
          <input
            type="text"
            inputMode="numeric"
            value={valeurSaisie}
            onChange={(e) => setValeurSaisie(e.target.value)}
            placeholder="Ex. 32000"
            className={field}
          />
        </label>
      </div>
      <p className="mt-3 text-sm text-ivory/50">
        Le CO2 figure en case V.7 de la carte grise française. Pour le prix neuf,
        indiquez le prix catalogue de la version, options comprises.
      </p>

      <div className="mt-12 border-t border-ivory/25 pt-8">
        <p className="text-xs uppercase tracking-[0.25em] text-blood">Estimation</p>

        {impot === null ? (
          <p className="mt-4 max-w-xl leading-relaxed text-ivory/60">
            Renseignez les émissions de CO2, l’année et le prix neuf pour
            obtenir une estimation.
          </p>
        ) : (
          <>
            <dl className="mt-6 divide-y divide-ivory/15">
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-ivory/70">
                  Impôt d’immatriculation (IEDMT, modèle 576)
                  {exonere ? (
                    <span className="block text-sm text-ivory/45">
                      Exonération pour changement de résidence, sous conditions
                    </span>
                  ) : tranche !== null ? (
                    <span className="block text-sm text-ivory/45">
                      Tranche {tranche.libelle}, taux {pourcent.format(tranche.taux)}
                      {baseEstimee !== null && pourcentage !== null
                        ? `, base estimée ${euros.format(baseEstimee)} (${pourcentage} % du prix neuf, hors taxes résiduelles)`
                        : ""}
                    </span>
                  ) : null}
                </dt>
                <dd className="whitespace-nowrap text-xl">{euros.format(impot)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-ivory/70">
                  Taxe DGT d’immatriculation
                  <span className="block text-sm text-ivory/45">Tasa 1.1, montant fixe</span>
                </dt>
                <dd className="whitespace-nowrap text-xl">{eurosCentimes.format(TAXE_DGT)}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-ivory/70">
                  Accompagnement holÀ!
                  <span className="block text-sm text-ivory/45">
                    Préparation et suivi du dossier, taxes en sus
                  </span>
                </dt>
                <dd className="whitespace-nowrap text-xl">{euros.format(FRAIS_HOLA)}</dd>
              </div>
              {total !== null && (
                <div className="flex items-baseline justify-between gap-6 pt-6">
                  <dt
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    Total estimé
                  </dt>
                  <dd
                    className="whitespace-nowrap text-4xl text-blood"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {eurosCentimes.format(total)}
                  </dd>
                </div>
              )}
            </dl>

            {exonere && (
              <div className="mt-8 border-l-2 border-blood pl-6 text-sm leading-relaxed text-ivory/65">
                <p>L’exonération n’est pas automatique. Il faut notamment :</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>avoir eu sa résidence hors d’Espagne pendant au moins 12 mois consécutifs ;</li>
                  <li>avoir utilisé la voiture dans l’ancienne résidence au moins 6 mois avant le départ ;</li>
                  <li>l’avoir achetée avec la TVA normale du pays d’origine, sans exonération ;</li>
                  <li>demander l’immatriculation dans les 60 jours après le début de son utilisation en Espagne ;</li>
                  <li>ne pas la vendre pendant les 12 mois suivant l’immatriculation ;</li>
                  <li>obtenir la reconnaissance préalable de la Agencia Tributaria.</li>
                </ul>
                <p className="mt-3">
                  Sans exonération, l’impôt estimé serait calculé avec la réponse « Non ».
                </p>
              </div>
            )}
          </>
        )}

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ivory/45">
          Estimation indicative, sans valeur fiscale. La base réelle de l’impôt
          est la valeur fixée par les tables officielles de prix moyens de
          Hacienda pour votre modèle exact, à laquelle s’applique le pourcentage
          lié à l’âge. Le calcul retient les taux de la péninsule et des Baléares
          (hors Canaries, Ceuta et Melilla). L’ITV, les plaques et l’impôt de
          circulation municipal ne sont pas inclus.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link
          href="/demande?service=vehicule"
          className="inline-block bg-blood px-8 py-4 text-sm uppercase tracking-[0.12em] text-ivory transition-transform hover:-translate-y-0.5"
        >
          Confier mon immatriculation →
        </Link>
        <Link
          href="/immatriculation-voiture-espagne"
          className="border-b border-ivory/40 pb-1 text-ivory/80 transition-colors hover:text-blood"
        >
          Voir l’accompagnement à 449 €
        </Link>
      </div>
    </div>
  );
}
