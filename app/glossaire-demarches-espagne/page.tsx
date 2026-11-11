import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

type Terme = {
  id: string;
  es: string;
  fr: string;
  def: string;
  lien?: { href: string; label: string };
};

type Theme = {
  id: string;
  titre: string;
  intro: string;
  termes: Terme[];
};

const themes: Theme[] = [
  {
    id: "identite-sejour",
    titre: "Identité et séjour",
    intro: "Les mots que vous croiserez dès vos premières démarches auprès de la police et de la mairie.",
    termes: [
      {
        id: "nie",
        es: "NIE (Número de Identidad de Extranjero)",
        fr: "Numéro d’identification des étrangers",
        def: "Numéro personnel attribué aux étrangers en Espagne, demandé pour acheter un bien, travailler, payer des impôts ou ouvrir certains comptes.",
        lien: { href: "/nie-espagne", label: "Notre service NIE" },
      },
      {
        id: "ex-15",
        es: "EX-15",
        fr: "Formulaire de demande de NIE",
        def: "Formulaire officiel à remplir pour demander un NIE seul, sans installation, en Espagne ou auprès d’un consulat.",
        lien: { href: "/guides/nie-documents-ex15", label: "Remplir l’EX-15" },
      },
      {
        id: "certificado-registro",
        es: "Certificado de registro de ciudadano de la UE",
        fr: "Certificat d’enregistrement de citoyen européen (« carte verte »)",
        def: "Document obligatoire pour un citoyen européen qui vit en Espagne plus de trois mois ; le numéro qui y figure est votre NIE.",
        lien: { href: "/guides/certificat-enregistrement-ue-espagne", label: "Guide de la carte verte" },
      },
      {
        id: "ex-18",
        es: "EX-18",
        fr: "Formulaire du certificat d’enregistrement UE",
        def: "Formulaire à remplir pour demander la carte verte lorsque vous vous installez en Espagne.",
        lien: { href: "/guides/certificat-enregistrement-ue-espagne", label: "Guide de la carte verte" },
      },
      {
        id: "tie",
        es: "TIE (Tarjeta de Identidad de Extranjero)",
        fr: "Carte d’identité d’étranger",
        def: "Carte de séjour avec photo délivrée surtout aux ressortissants de pays hors Union européenne ; un Français reçoit en principe la carte verte, pas une TIE.",
      },
      {
        id: "tasa-790-012",
        es: "Tasa 790 código 012",
        fr: "Taxe 790 code 012",
        def: "Taxe à payer avant le rendez-vous à la police : 9,84 € pour un NIE et 12 € pour la carte verte, selon la Police nationale.",
        lien: { href: "/guides/taxe-790-012-nie", label: "Payer la taxe 790-012" },
      },
      {
        id: "cita-previa",
        es: "Cita previa",
        fr: "Rendez-vous préalable",
        def: "Rendez-vous obligatoire, réservé en ligne, pour la plupart des démarches administratives ; pour le NIE, il se prend sur le portail national de la police.",
        lien: { href: "/guides/rendez-vous-nie-cita-previa", label: "Trouver un rendez-vous" },
      },
      {
        id: "empadronamiento",
        es: "Empadronamiento",
        fr: "Inscription sur le registre municipal",
        def: "Démarche par laquelle vous déclarez votre domicile à la mairie ; elle conditionne l’accès à la santé, à l’école et à de nombreuses aides locales.",
        lien: { href: "/guides/empadronamiento-espagne", label: "Guide de l’empadronamiento" },
      },
      {
        id: "padron",
        es: "Padrón municipal",
        fr: "Registre des habitants de la commune",
        def: "Fichier tenu par chaque mairie, où figurent toutes les personnes qui y résident ; on dit « s’inscrire au padrón ».",
        lien: { href: "/guides/empadronamiento-espagne", label: "Guide de l’empadronamiento" },
      },
      {
        id: "certificado-empadronamiento",
        es: "Certificado / volante de empadronamiento",
        fr: "Attestation d’inscription au padrón",
        def: "Document délivré par la mairie qui prouve votre adresse ; le volante est la version simple, le certificado a une valeur officielle plus forte.",
        lien: { href: "/guides/empadronamiento-espagne", label: "Guide de l’empadronamiento" },
      },
      {
        id: "comisaria",
        es: "Comisaría de Policía (Policía Nacional)",
        fr: "Commissariat de la police nationale",
        def: "Service de l’État qui traite le NIE et le certificat d’enregistrement UE, y compris dans les régions qui ont leur propre police.",
      },
      {
        id: "oficina-extranjeria",
        es: "Oficina de Extranjería",
        fr: "Bureau des étrangers",
        def: "Service rattaché à la représentation de l’État dans la province, qui instruit surtout les autorisations de séjour et de travail des ressortissants hors UE.",
      },
      {
        id: "ayuntamiento",
        es: "Ayuntamiento",
        fr: "Mairie",
        def: "Administration de la commune, compétente pour le padrón, les taxes locales et de nombreuses autorisations ; on dit « Ajuntament » en Catalogne et dans la région de Valence.",
      },
      {
        id: "apostilla",
        es: "Apostilla",
        fr: "Apostille",
        def: "Tampon qui authentifie un document public pour l’étranger ; entre pays de l’UE, un règlement européen en dispense certains actes d’état civil.",
      },
      {
        id: "traduccion-jurada",
        es: "Traducción jurada",
        fr: "Traduction assermentée",
        def: "Traduction officielle réalisée par un traducteur nommé par le ministère espagnol des Affaires étrangères, souvent exigée pour les documents rédigés en français.",
      },
      {
        id: "homologacion",
        es: "Homologación / reconocimiento de títulos",
        fr: "Reconnaissance de diplôme",
        def: "Procédure qui donne à un diplôme étranger une valeur en Espagne, indispensable pour exercer certaines professions réglementées.",
        lien: { href: "/reconnaissance-diplome-espagne", label: "Faire reconnaître mon diplôme" },
      },
    ],
  },
  {
    id: "voiture",
    titre: "Voiture",
    intro: "Immatriculer, assurer et conduire : le vocabulaire de la DGT et de l’ITV.",
    termes: [
      {
        id: "permiso-circulacion",
        es: "Permiso de circulación",
        fr: "Carte grise (certificat d’immatriculation)",
        def: "Document délivré par la DGT qui identifie le véhicule et son titulaire ; c’est la traduction de « carte grise » en espagnol.",
        lien: { href: "/guides/carte-grise-espagnole", label: "La carte grise espagnole" },
      },
      {
        id: "tarjeta-itv",
        es: "Tarjeta ITV / ficha técnica",
        fr: "Fiche technique du véhicule",
        def: "Carte qui décrit les caractéristiques techniques de la voiture ; en Espagne, elle complète le permiso de circulación.",
        lien: { href: "/guides/carte-grise-espagnole", label: "La carte grise espagnole" },
      },
      {
        id: "itv",
        es: "ITV (Inspección Técnica de Vehículos)",
        fr: "Contrôle technique",
        def: "Contrôle obligatoire et périodique des véhicules, réalisé dans des stations agréées ; une voiture française doit le passer avant d’être immatriculée en Espagne.",
        lien: { href: "/guides/itv-voiture-francaise-espagne", label: "L’ITV d’une voiture française" },
      },
      {
        id: "dgt",
        es: "DGT (Dirección General de Tráfico)",
        fr: "Direction générale de la circulation",
        def: "Administration nationale chargée des immatriculations, des permis de conduire et d’une grande partie des amendes routières.",
        lien: { href: "/immatriculation-voiture-espagne", label: "Immatriculer mon véhicule" },
      },
      {
        id: "jefatura-trafico",
        es: "Jefatura Provincial de Tráfico",
        fr: "Bureau provincial de la DGT",
        def: "Guichet de la DGT dans chaque province, où se déposent les dossiers d’immatriculation et de permis, sur rendez-vous.",
      },
      {
        id: "matriculacion",
        es: "Matriculación",
        fr: "Immatriculation",
        def: "Démarche qui inscrit un véhicule au registre espagnol ; elle est obligatoire si vous résidez en Espagne avec une voiture immatriculée ailleurs.",
        lien: { href: "/immatriculation-voiture-espagne", label: "Immatriculer mon véhicule" },
      },
      {
        id: "matricula",
        es: "Matrícula / placas de matrícula",
        fr: "Numéro et plaques d’immatriculation",
        def: "Numéro attribué au véhicule et plaques fabriquées à partir de ce numéro par un fabricant agréé.",
        lien: { href: "/guides/plaque-immatriculation-espagnole", label: "Les plaques espagnoles" },
      },
      {
        id: "modelo-576",
        es: "Impuesto de matriculación (modelo 576)",
        fr: "Impôt d’immatriculation",
        def: "Impôt dû lors de la première immatriculation en Espagne, calculé selon les émissions de CO2 ; certaines situations en sont exonérées.",
        lien: { href: "/guides/taxes-immatriculation-voiture-espagne", label: "Les taxes d’immatriculation" },
      },
      {
        id: "ivtm",
        es: "IVTM (Impuesto sobre Vehículos de Tracción Mecánica)",
        fr: "Taxe de circulation municipale",
        def: "Impôt annuel payé à la mairie du domicile du titulaire du véhicule.",
        lien: { href: "/guides/taxes-immatriculation-voiture-espagne", label: "Les taxes d’immatriculation" },
      },
      {
        id: "permiso-conducir",
        es: "Permiso de conducir / canje",
        fr: "Permis de conduire / échange",
        def: "Le permis français reste valable en Espagne ; le canje est son échange contre un permis espagnol, qui n’est pas toujours obligatoire.",
      },
      {
        id: "seguro-obligatorio",
        es: "Seguro obligatorio",
        fr: "Assurance auto obligatoire",
        def: "Assurance responsabilité civile exigée pour tout véhicule qui circule, à souscrire auprès d’un assureur espagnol après l’immatriculation.",
      },
      {
        id: "multa",
        es: "Multa / sanción",
        fr: "Amende",
        def: "Sanction notifiée par courrier, par la DGT, une région ou une mairie ; la payer dans les délais donne souvent droit à une réduction de 50 %.",
        lien: { href: "/amende-espagne", label: "Contester une amende" },
      },
      {
        id: "zbe",
        es: "ZBE (Zona de Bajas Emisiones)",
        fr: "Zone à faibles émissions (ZFE)",
        def: "Zone urbaine où l’accès dépend de l’étiquette environnementale du véhicule, comme à Madrid ou Barcelone.",
        lien: { href: "/amende-espagne", label: "Amendes ZBE" },
      },
      {
        id: "etiqueta-ambiental",
        es: "Etiqueta ambiental de la DGT",
        fr: "Vignette environnementale",
        def: "Autocollant qui classe le véhicule selon ses émissions (0, ECO, C, B) ; il conditionne l’accès aux ZBE, comme la vignette Crit’Air en France.",
      },
    ],
  },
  {
    id: "logement",
    titre: "Logement",
    intro: "Acheter, louer, payer ses charges : les termes du notaire, du propriétaire et de la copropriété.",
    termes: [
      {
        id: "contrato-arras",
        es: "Contrato de arras",
        fr: "Avant-contrat avec acompte",
        def: "Contrat signé avant la vente, accompagné d’un acompte ; selon le type d’arras, l’acompte est perdu ou doublé si une partie renonce.",
        lien: { href: "/guides/nie-achat-immobilier-espagne", label: "NIE et achat immobilier" },
      },
      {
        id: "escritura",
        es: "Escritura (de compraventa)",
        fr: "Acte de vente authentique",
        def: "Acte signé devant notaire qui constate la vente d’un bien immobilier ; acheteur et vendeur doivent présenter leur NIE.",
        lien: { href: "/guides/nie-achat-immobilier-espagne", label: "NIE et achat immobilier" },
      },
      {
        id: "notaria",
        es: "Notaría / notario",
        fr: "Étude notariale / notaire",
        def: "Officier public qui authentifie les actes importants : ventes, prêts, procurations, successions.",
      },
      {
        id: "nota-simple",
        es: "Nota simple",
        fr: "Extrait du registre foncier",
        def: "Fiche informative du Registro de la Propiedad indiquant le propriétaire d’un bien et ses éventuelles charges (hypothèque, saisie).",
      },
      {
        id: "registro-propiedad",
        es: "Registro de la Propiedad",
        fr: "Registre foncier",
        def: "Registre public où sont inscrits les biens immobiliers et leurs propriétaires ; l’inscription protège l’acheteur après la vente.",
      },
      {
        id: "poder-notarial",
        es: "Poder notarial",
        fr: "Procuration notariée",
        def: "Mandat signé devant notaire qui permet à une autre personne d’agir pour vous, par exemple pour signer une vente sans vous déplacer.",
      },
      {
        id: "ibi",
        es: "IBI (Impuesto sobre Bienes Inmuebles)",
        fr: "Taxe foncière",
        def: "Impôt municipal annuel payé par le propriétaire d’un bien immobilier.",
      },
      {
        id: "plusvalia-municipal",
        es: "Plusvalía municipal",
        fr: "Taxe sur la plus-value des terrains urbains",
        def: "Impôt municipal dû en principe par le vendeur lors de la vente d’un bien, calculé sur l’augmentation de valeur du terrain.",
      },
      {
        id: "itp",
        es: "ITP (Impuesto de Transmisiones Patrimoniales)",
        fr: "Droits de mutation",
        def: "Impôt payé par l’acheteur d’un logement ancien, dont le taux est fixé par chaque région.",
      },
      {
        id: "comunidad-propietarios",
        es: "Comunidad de propietarios",
        fr: "Copropriété",
        def: "Ensemble des propriétaires d’un immeuble ou d’une résidence, qui vote les charges communes et les travaux.",
      },
      {
        id: "contrato-alquiler",
        es: "Contrato de alquiler (arrendamiento)",
        fr: "Bail de location",
        def: "Contrat de location d’un logement, encadré par la loi espagnole sur les baux urbains (LAU).",
      },
      {
        id: "fianza",
        es: "Fianza",
        fr: "Dépôt de garantie",
        def: "Somme versée au propriétaire à la signature du bail, fixée par la loi à un mois de loyer pour une résidence principale, hors garanties complémentaires.",
      },
      {
        id: "certificado-energetico",
        es: "Certificado de eficiencia energética",
        fr: "Diagnostic de performance énergétique (DPE)",
        def: "Certificat obligatoire pour vendre ou louer un logement, qui classe le bien de A à G.",
      },
      {
        id: "suministros",
        es: "Alta de suministros",
        fr: "Ouverture des compteurs",
        def: "Souscription des contrats d’électricité, d’eau et de gaz ; le fournisseur demande souvent votre NIE et un compte bancaire espagnol.",
      },
    ],
  },
  {
    id: "impots",
    titre: "Impôts",
    intro: "Les sigles de l’administration fiscale espagnole et les déclarations qui reviennent le plus.",
    termes: [
      {
        id: "hacienda-aeat",
        es: "Hacienda / AEAT (Agencia Estatal de Administración Tributaria)",
        fr: "Administration fiscale",
        def: "Administration chargée des impôts nationaux ; « Hacienda » est le nom courant de l’AEAT.",
        lien: { href: "/fiscalite-residence-france-espagne", label: "Fiscalité France-Espagne" },
      },
      {
        id: "nif",
        es: "NIF (Número de Identificación Fiscal)",
        fr: "Numéro fiscal",
        def: "Identifiant fiscal de toute personne ou entreprise ; pour un étranger, le NIF est en pratique son NIE.",
        lien: { href: "/nie-espagne", label: "Notre service NIE" },
      },
      {
        id: "residencia-fiscal",
        es: "Residencia fiscal",
        fr: "Résidence fiscale",
        def: "Pays où vous payez l’impôt sur l’ensemble de vos revenus ; en Espagne, elle se déclenche notamment au-delà de 183 jours de présence dans l’année.",
        lien: { href: "/fiscalite-residence-france-espagne", label: "Fiscalité France-Espagne" },
      },
      {
        id: "irpf",
        es: "IRPF (Impuesto sobre la Renta de las Personas Físicas)",
        fr: "Impôt sur le revenu",
        def: "Impôt annuel des résidents fiscaux espagnols, prélevé en partie à la source sur les salaires.",
        lien: { href: "/fiscalite-residence-france-espagne", label: "Fiscalité France-Espagne" },
      },
      {
        id: "declaracion-renta",
        es: "Declaración de la renta",
        fr: "Déclaration de revenus",
        def: "Déclaration annuelle de l’IRPF, dont la campagne se déroule en général d’avril à fin juin.",
      },
      {
        id: "modelo-720",
        es: "Modelo 720",
        fr: "Déclaration des biens à l’étranger",
        def: "Déclaration d’information que doivent déposer les résidents fiscaux espagnols détenant plus de 50 000 € à l’étranger dans une catégorie (comptes, titres, immobilier).",
        lien: { href: "/fiscalite-residence-france-espagne", label: "Fiscalité France-Espagne" },
      },
      {
        id: "irnr",
        es: "IRNR / modelo 210",
        fr: "Impôt des non-résidents",
        def: "Impôt payé par les non-résidents sur leurs revenus d’origine espagnole, dont les propriétaires d’une résidence secondaire.",
      },
      {
        id: "certificado-residencia-fiscal",
        es: "Certificado de residencia fiscal",
        fr: "Certificat de résidence fiscale",
        def: "Attestation de l’administration fiscale qui prouve dans quel pays vous êtes résident, utile pour éviter une double imposition.",
        lien: { href: "/fiscalite-residence-france-espagne", label: "Fiscalité France-Espagne" },
      },
    ],
  },
  {
    id: "travail-securite-sociale",
    titre: "Travail et Sécurité sociale",
    intro: "Les termes du contrat, de la fiche de paie et de la couverture santé.",
    termes: [
      {
        id: "seguridad-social",
        es: "Seguridad Social (TGSS)",
        fr: "Sécurité sociale",
        def: "Système public qui couvre santé, retraite et chômage ; la Tesorería General (TGSS) gère les affiliations et les cotisations.",
        lien: { href: "/guides/sante-espagne-francais", label: "La santé en Espagne" },
      },
      {
        id: "numero-afiliacion",
        es: "Número de afiliación (NUSS)",
        fr: "Numéro de sécurité sociale",
        def: "Numéro attribué une fois pour toutes par la Sécurité sociale, nécessaire pour être déclaré par un employeur ou s’inscrire comme indépendant.",
      },
      {
        id: "tarjeta-sanitaria",
        es: "Tarjeta sanitaria individual (TSI)",
        fr: "Carte de santé",
        def: "Carte délivrée par le service de santé de votre région, qui donne accès au médecin et aux soins publics.",
        lien: { href: "/guides/sante-espagne-francais", label: "La santé en Espagne" },
      },
      {
        id: "centro-salud",
        es: "Centro de salud",
        fr: "Centre de santé",
        def: "Centre public de proximité où se trouve votre médecin traitant (médico de cabecera).",
        lien: { href: "/guides/sante-espagne-francais", label: "La santé en Espagne" },
      },
      {
        id: "autonomo",
        es: "Autónomo",
        fr: "Travailleur indépendant",
        def: "Statut de la personne qui exerce une activité à son compte, avec des cotisations mensuelles calculées selon ses revenus.",
        lien: { href: "/creer-activite-espagne", label: "Créer mon activité" },
      },
      {
        id: "reta",
        es: "RETA (Régimen Especial de Trabajadores Autónomos)",
        fr: "Régime des travailleurs indépendants",
        def: "Régime de Sécurité sociale auquel s’affilient les autónomos.",
        lien: { href: "/creer-activite-espagne", label: "Créer mon activité" },
      },
      {
        id: "modelo-036",
        es: "Modelo 036 (alta censal)",
        fr: "Déclaration de début d’activité",
        def: "Formulaire de l’administration fiscale qui déclare le début, la modification ou la fin d’une activité professionnelle.",
        lien: { href: "/creer-activite-espagne", label: "Créer mon activité" },
      },
      {
        id: "contrato-trabajo",
        es: "Contrato de trabajo",
        fr: "Contrat de travail",
        def: "Contrat écrit entre salarié et employeur ; indefinido signifie à durée indéterminée, temporal à durée déterminée.",
      },
      {
        id: "nomina",
        es: "Nómina",
        fr: "Bulletin de paie",
        def: "Document mensuel qui détaille le salaire brut, les cotisations, la retenue d’IRPF et le net versé.",
      },
      {
        id: "vida-laboral",
        es: "Informe de vida laboral",
        fr: "Relevé de carrière",
        def: "Document de la Sécurité sociale qui liste vos périodes d’emploi et d’affiliation en Espagne.",
      },
      {
        id: "sepe",
        es: "SEPE (Servicio Público de Empleo Estatal)",
        fr: "Service public de l’emploi",
        def: "Équivalent espagnol de France Travail, qui gère les allocations chômage avec les services régionaux de l’emploi.",
      },
    ],
  },
  {
    id: "banque-administration-en-ligne",
    titre: "Banque et administration en ligne",
    intro: "Ouvrir un compte, s’identifier en ligne, recevoir les notifications officielles.",
    termes: [
      {
        id: "cuenta-no-residente",
        es: "Cuenta bancaria de no residente",
        fr: "Compte bancaire non-résident",
        def: "Compte ouvert en Espagne par une personne qui n’y réside pas, souvent pour une résidence secondaire ; la banque demande en général le NIE et un certificat de non-résidence.",
        lien: { href: "/nie-espagne", label: "Notre service NIE" },
      },
      {
        id: "certificado-no-residencia",
        es: "Certificado de no residencia",
        fr: "Certificat de non-résidence",
        def: "Attestation, demandée par la banque, prouvant que vous ne résidez pas en Espagne.",
      },
      {
        id: "certificado-digital",
        es: "Certificado digital (FNMT)",
        fr: "Certificat électronique",
        def: "Fichier d’identification, délivré notamment par la FNMT, qui permet de signer et d’accomplir des démarches en ligne en votre nom.",
        lien: { href: "/installation-espagne", label: "M’installer en Espagne" },
      },
      {
        id: "clave",
        es: "Cl@ve",
        fr: "Identifiant électronique de l’État",
        def: "Système d’identification en ligne commun aux administrations espagnoles, alternative au certificat électronique.",
        lien: { href: "/installation-espagne", label: "M’installer en Espagne" },
      },
      {
        id: "sede-electronica",
        es: "Sede electrónica",
        fr: "Portail administratif en ligne",
        def: "Site officiel d’une administration où l’on dépose des demandes, paie des taxes et consulte ses dossiers.",
      },
      {
        id: "notificacion-electronica",
        es: "Notificación electrónica (DEHú)",
        fr: "Notification électronique",
        def: "Courrier officiel déposé dans un espace en ligne ; il est réputé reçu même si vous ne l’ouvrez pas, d’où l’intérêt de le consulter.",
      },
      {
        id: "gestoria",
        es: "Gestoría / gestor administrativo",
        fr: "Cabinet de démarches administratives",
        def: "Professionnel qui accomplit des démarches pour le compte de particuliers ou d’entreprises : impôts, voiture, Sécurité sociale.",
        lien: { href: "/comment-ca-marche", label: "Comment holÀ! vous accompagne" },
      },
    ],
  },
];

const totalTermes = themes.reduce((total, theme) => total + theme.termes.length, 0);

const pageTitle = `Glossaire des démarches en Espagne : ${totalTermes} mots espagnols traduits`;
const pageDescription =
  "Carte grise en espagnol, empadronamiento, cita previa, NIE, IBI, autónomo, Cl@ve : les mots de l’administration espagnole traduits et expliqués en français, classés par thème.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/glossaire-demarches-espagne",
  },

  openGraph: {
    title: `${pageTitle} | holÀ!`,
    description: pageDescription,
    url: "/glossaire-demarches-espagne",
    type: "article",
    locale: "fr_FR",
  },
};

const pageUrl = "https://www.holaespagne.fr/glossaire-demarches-espagne";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${pageUrl}#glossaire`,
  name: "Glossaire des démarches administratives en Espagne",
  description: pageDescription,
  url: pageUrl,
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "holÀ!",
    url: "https://www.holaespagne.fr/",
  },
  hasDefinedTerm: themes.flatMap((theme) =>
    theme.termes.map((terme) => ({
      "@type": "DefinedTerm",
      "@id": `${pageUrl}#${terme.id}`,
      name: terme.es,
      alternateName: terme.fr,
      description: terme.def,
      url: `${pageUrl}#${terme.id}`,
      inDefinedTermSet: `${pageUrl}#glossaire`,
    })),
  ),
};

export default function GlossaireDemarchesEspagne() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader />

      {/* HERO */}
      <section className="px-6 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 md:px-16 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Glossaire · Espagnol · Français
          </p>

          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Glossaire des démarches en Espagne.
            <br />
            <span className="italic text-blood">{totalTermes} mots espagnols traduits.</span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
              Comment dit-on carte grise en espagnol ? Permiso de circulación.
              Et taxe foncière ? IBI. Voici les mots que vous rencontrerez dans
              vos démarches en Espagne, avec leur équivalent français et une
              explication courte. Quand nous avons un guide ou un service sur le
              sujet, le lien est indiqué.
            </p>

            <nav aria-label="Thèmes du glossaire" className="md:justify-self-end">
              <p className="text-xs uppercase tracking-[0.2em] text-navy/50">Aller au thème</p>
              <ul className="mt-4 grid gap-2">
                {themes.map((theme, index) => (
                  <li key={theme.id}>
                    <a
                      href={`#${theme.id}`}
                      className="grid grid-cols-[32px_1fr_auto] items-baseline gap-2 border-b border-navy/15 py-2 transition-colors hover:text-blood"
                    >
                      <span className="text-xs text-blood">0{index + 1}</span>
                      <span style={{ fontFamily: "var(--font-editorial)" }} className="text-lg">
                        {theme.titre}
                      </span>
                      <span className="text-xs text-navy/45">{theme.termes.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* RÉPONSE DIRECTE */}
      <section className="px-6 pb-12 sm:px-8 md:px-16">
        <div className="mx-auto max-w-6xl border-y border-navy/20 py-8">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">En bref</p>
          <p className="mt-4 max-w-3xl text-2xl leading-snug" style={{ fontFamily: "var(--font-editorial)" }}>
            « Carte grise » se dit <em>permiso de circulación</em> en espagnol.
            Les caractéristiques techniques du véhicule figurent, elles, sur un
            second document : la <em>tarjeta ITV</em> (ou <em>ficha técnica</em>).
          </p>
          <Link
            href="/guides/carte-grise-espagnole"
            className="mt-5 inline-block border-b border-navy/30 pb-1 text-navy/75 transition-colors hover:text-blood"
          >
            Tout sur la carte grise espagnole →
          </Link>
        </div>
      </section>

      {/* THÈMES */}
      {themes.map((theme, index) => (
        <section
          key={theme.id}
          id={theme.id}
          className={`scroll-mt-8 px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24 ${index % 2 === 1 ? "bg-[#EEE8DE]" : ""}`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blood">
                  0{index + 1} · {theme.termes.length} mots
                </p>
                <h2
                  className="mt-5 text-4xl leading-[0.98] sm:text-5xl"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {theme.titre}
                </h2>
                <p className="mt-5 max-w-xs leading-relaxed text-navy/60">{theme.intro}</p>
              </div>

              <dl className="grid gap-0">
                {theme.termes.map((terme) => (
                  <div key={terme.id} id={terme.id} className="scroll-mt-8 border-t border-navy/20 py-6">
                    <dt>
                      <span
                        lang="es"
                        className="text-2xl leading-tight"
                        style={{ fontFamily: "var(--font-editorial)" }}
                      >
                        {terme.es}
                      </span>
                      <span className="mt-1 block text-sm uppercase tracking-[0.12em] text-blood">
                        {terme.fr}
                      </span>
                    </dt>
                    <dd className="mt-3 max-w-2xl leading-relaxed text-navy/70">
                      {terme.def}
                      {terme.lien && (
                        <>
                          {" "}
                          <Link
                            href={terme.lien.href}
                            className="whitespace-nowrap border-b border-navy/30 text-navy transition-colors hover:text-blood"
                          >
                            {terme.lien.label} →
                          </Link>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="mx-0 my-10 bg-blood px-6 py-10 text-ivory sm:mx-8 sm:my-16 sm:px-8 md:mx-auto md:max-w-6xl md:px-12 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ivory/70">
              Traduire ne suffit pas toujours
            </p>
            <h2
              className="mt-4 text-4xl leading-[0.98] sm:text-5xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Vous comprenez les mots. Nous faisons les démarches.
            </h2>
            <p className="mt-5 max-w-2xl text-ivory/75">
              NIE, padrón, carte verte, immatriculation, fiscalité : expliquez-nous
              votre situation, nous vous disons quoi faire, dans quel ordre, et
              nous préparons les dossiers en français.
            </p>
          </div>
          <Link
            href="/demande"
            className="group flex items-center gap-6 border-b border-ivory pb-2 text-xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Faire une demande
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </section>

      {/* NIE PAR VILLE */}
      <section className="px-6 pb-20 sm:px-8 md:px-16">
        <div className="mx-auto max-w-6xl border-t border-navy/15 pt-10">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Le NIE près de chez vous</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-navy/75">
            {[
              ["marbella", "Marbella"],
              ["malaga", "Málaga"],
              ["alicante", "Alicante"],
              ["valence", "Valence"],
              ["barcelone", "Barcelone"],
              ["madrid", "Madrid"],
              ["torrevieja", "Torrevieja"],
              ["benidorm", "Benidorm"],
            ].map(([slug, nom]) => (
              <Link
                key={slug}
                href={`/nie-espagne/${slug}`}
                className="border-b border-navy/25 pb-0.5 transition-colors hover:text-blood"
              >
                NIE à {nom}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
