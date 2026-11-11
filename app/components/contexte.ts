// Adapte le message WhatsApp et l’appel à l’action à la page consultée.

export type Contexte = {
  sujet: string;
  message: string;
  accroche: string;
  prix: string;
  service: string;
};

const NIE: Contexte = {
  sujet: "nie",
  message: "Bonjour holÀ!, j’ai une question sur mon NIE.",
  accroche: "Votre NIE sans rendez-vous raté",
  prix: "dossier préparé dès 149 €",
  service: "nie",
};

const VOITURE: Contexte = {
  sujet: "voiture",
  message: "Bonjour holÀ!, j’ai une question sur l’immatriculation de ma voiture en Espagne.",
  accroche: "Vos plaques espagnoles, sans paperasse",
  prix: "dossier complet 449 €, taxes en sus",
  service: "vehicule",
};

const AMENDE: Contexte = {
  sujet: "amende",
  message: "Bonjour holÀ!, j’ai reçu une amende espagnole et j’aimerais votre avis.",
  accroche: "Une amende espagnole ? On l’analyse",
  prix: "analyse gratuite sous 24 h",
  service: "autre",
};

const FISCALITE: Contexte = {
  sujet: "fiscalite",
  message: "Bonjour holÀ!, j’ai une question sur ma fiscalité entre la France et l’Espagne.",
  accroche: "Fiscalité France–Espagne, en français",
  prix: "réponse sous 24 h",
  service: "fiscalite",
};

const INSTALLATION: Contexte = {
  sujet: "installation",
  message: "Bonjour holÀ!, je prépare mon installation en Espagne et j’ai une question.",
  accroche: "Votre installation en Espagne, pas à pas",
  prix: "accompagnement dès 490 €",
  service: "installation",
};

const DEFAUT: Contexte = {
  sujet: "general",
  message: "Bonjour holÀ!, j’ai une question au sujet d’une démarche en Espagne.",
  accroche: "Une démarche en Espagne ?",
  prix: "réponse sous 24 h, en français",
  service: "autre",
};

export function contextePour(chemin: string): Contexte {
  const c = chemin.toLowerCase();
  if (c.includes("amende")) return AMENDE;
  if (/(immatricul|voiture|vehicule|plaque|itv|permis|carte-grise)/.test(c)) return VOITURE;
  if (/(nie|790|ex-15|ex15|cita-previa)/.test(c)) return NIE;
  if (c.includes("fiscal") || c.includes("impot")) return FISCALITE;
  if (/(install|residence|empadron|banque|logement|s-installer)/.test(c)) return INSTALLATION;
  return DEFAUT;
}

export function lienWhatsapp(message: string) {
  return `https://wa.me/34681803938?text=${encodeURIComponent(message)}`;
}
