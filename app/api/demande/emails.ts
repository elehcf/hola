// E-mails automatiques envoyés aux personnes qui contactent holÀ!
// (accusé de réception, relance à 24 h, checklist).

const SITE = "https://www.holaespagne.fr";
const WHATSAPP = "https://wa.me/34681803938";

// Lien de prise de rendez-vous (Cal.com, Calendly...). À définir dans Vercel :
// Settings > Environment Variables > NEXT_PUBLIC_BOOKING_URL. Sans lien, on propose WhatsApp.
export function bookingUrl() {
  return process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "";
}

type Ressource = { service: string; guideTitre: string; guideHref: string; code: string };

const RESSOURCES: Record<string, Ressource> = {
  "Obtenir mon NIE": {
    code: "nie",
    service: "/nie-espagne",
    guideTitre: "Obtenir un NIE en Espagne : le guide complet",
    guideHref: "/guides/obtenir-nie-espagne",
  },
  "Immatriculer mon véhicule": {
    code: "vehicule",
    service: "/immatriculation-voiture-espagne",
    guideTitre: "Immatriculer une voiture française en Espagne",
    guideHref: "/guides/immatriculer-voiture-francaise-espagne",
  },
  "Je m’installe en Espagne": {
    code: "installation",
    service: "/installation-espagne",
    guideTitre: "S’installer en Espagne : toutes les démarches",
    guideHref: "/guides/s-installer-en-espagne",
  },
  "Faire reconnaître mon diplôme": {
    code: "diplome",
    service: "/reconnaissance-diplome-espagne",
    guideTitre: "Nos guides pratiques",
    guideHref: "/guides",
  },
  "Créer mon activité en Espagne": {
    code: "activite",
    service: "/creer-activite-espagne",
    guideTitre: "Nos guides pratiques",
    guideHref: "/guides",
  },
  "Fiscalité / résidence France–Espagne": {
    code: "fiscalite",
    service: "/fiscalite-residence-france-espagne",
    guideTitre: "Nos guides pratiques",
    guideHref: "/guides",
  },
};

function ressource(demarche: unknown): Ressource {
  return (
    RESSOURCES[String(demarche ?? "")] ?? {
      code: "autre",
      service: "/autre-demarche",
      guideTitre: "Nos guides pratiques",
      guideHref: "/guides",
    }
  );
}

export function esc(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bouton(href: string, label: string, plein = true) {
  return `<a href="${esc(href)}" style="display:inline-block;margin:6px 8px 6px 0;padding:13px 20px;${
    plein
      ? "background:#152238;color:#F4F0E8;"
      : "background:transparent;color:#152238;border:1px solid #152238;"
  }text-decoration:none;font-size:15px;">${esc(label)}</a>`;
}

function contactBoutons(texteWhatsapp: string) {
  const rdv = bookingUrl();
  return rdv
    ? bouton(rdv, "Réserver un appel de 15 min →", false)
    : bouton(`${WHATSAPP}?text=${encodeURIComponent(texteWhatsapp)}`, "Nous écrire sur WhatsApp →", false);
}

function layout(contenu: string) {
  return `
  <div style="background:#F4F0E8;padding:32px 0;">
    <div style="max-width:600px;margin:0 auto;padding:36px 28px;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#152238;line-height:1.65;font-size:16px;">
      <p style="margin:0 0 28px;font-family:Georgia,serif;font-size:26px;">hol<span style="color:#8F1D2C;">À!</span></p>
      ${contenu}
      <p style="margin:34px 0 0;">À très vite,<br>Elena · holÀ!</p>
      <p style="margin:28px 0 0;padding-top:18px;border-top:1px solid #D8D3C9;font-size:12px;color:#15223899;">
        holÀ! · Vos démarches en Espagne, en français · <a href="${SITE}" style="color:#15223899;">holaespagne.fr</a><br>
        Vous recevez cet e-mail parce que vous avez fait une demande sur notre site. Une question : répondez simplement à ce message.
      </p>
    </div>
  </div>`;
}

/** Accusé de réception envoyé immédiatement après une demande complète. */
export function accuseReception(prenom: unknown, demarche: unknown) {
  const r = ressource(demarche);
  return {
    subject: "Votre demande holÀ! est bien arrivée",
    html: layout(`
      <p style="margin:0 0 16px;">Bonjour ${esc(prenom)},</p>
      <p style="margin:0 0 16px;">Merci, votre demande concernant <strong>${esc(demarche)}</strong> est bien arrivée.</p>
      <p style="margin:0 0 16px;">Je la regarde personnellement et je vous réponds <strong>sous 24 h ouvrées</strong>, avec les étapes qui vous concernent et le prix de l’accompagnement. Rien n’est engagé tant que vous n’avez pas validé la proposition.</p>
      <p style="margin:0 0 10px;">En attendant, ce guide peut déjà vous aider :</p>
      <p style="margin:0 0 22px;"><a href="${SITE}${r.guideHref}" style="color:#8F1D2C;">${esc(r.guideTitre)} →</a></p>
      <p style="margin:0 0 8px;">Vous préférez en parler de vive voix ?</p>
      ${contactBoutons(`Bonjour holÀ!, je suis ${String(prenom ?? "")} et je viens d’envoyer une demande (${String(demarche ?? "")}).`)}
    `),
  };
}

/** Relance programmée 24 h après une demande commencée mais non terminée. */
export function relancePartiel(prenom: unknown, demarche: unknown) {
  const r = ressource(demarche);
  return {
    subject: "Votre démarche en Espagne : on continue ?",
    html: layout(`
      <p style="margin:0 0 16px;">Bonjour ${esc(prenom)},</p>
      <p style="margin:0 0 16px;">Hier, vous avez commencé une demande sur holaespagne.fr pour <strong>${esc(demarche)}</strong>, sans aller jusqu’au bout. Pas de souci : souvent, on ne sait pas trop quoi écrire.</p>
      <p style="margin:0 0 16px;">Le plus simple : répondez à cet e-mail en deux lignes, où vous en êtes aujourd’hui et ce qui vous bloque. Je vous dis ensuite ce qu’il faut faire, gratuitement et sans engagement.</p>
      ${bouton(`${SITE}/demande?service=${r.code}`, "Reprendre ma demande →")}
      ${contactBoutons(`Bonjour holÀ!, j’avais commencé une demande (${String(demarche ?? "")}).`)}
    `),
  };
}

/** E-mail envoyé après le téléchargement de la checklist. */
export function envoiChecklist(prenom: unknown) {
  const bonjour = String(prenom ?? "").trim() ? `Bonjour ${esc(prenom)},` : "Bonjour,";
  return {
    subject: "Votre checklist installation en Espagne",
    html: layout(`
      <p style="margin:0 0 16px;">${bonjour}</p>
      <p style="margin:0 0 16px;">Voici votre checklist : les démarches d’installation en Espagne dans le bon ordre, ce qui se prépare depuis la France et ce qui se fait sur place.</p>
      ${bouton(`${SITE}/checklist-installation-espagne.pdf`, "Télécharger la checklist (PDF) →")}
      <p style="margin:22px 0 16px;">Une question en la lisant ? Répondez simplement à cet e-mail. Et si vous préférez qu’on prépare tout pour vous, expliquez-nous votre situation : réponse sous 24 h, sans engagement.</p>
      ${bouton(`${SITE}/demande?service=installation`, "Expliquer ma situation →", false)}
    `),
  };
}
