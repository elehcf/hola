export type VilleSource = {
  label: string;
  href: string;
};

export type VilleFaq = {
  q: string;
  r: string;
};

export type VilleNie = {
  slug: string;
  nom: string;
  /** Forme utilisée après « à » ou « de » dans les phrases. */
  province: string;
  region: string;
  seoTitle: string;
  description: string;
  h1: string;
  h1Accent: string;
  intro: string;
  /** Où déposer la demande : paragraphes puis liste des bureaux vérifiés. */
  ouDeposer: string[];
  bureaux: string[];
  /** Particularités locales pour la prise de rendez-vous. */
  rendezVous: string[];
  /** Contexte local : qui demande un NIE ici et pourquoi. */
  contexte: string[];
  /** Slugs de guides NIE à mettre en avant (2 ou 3). */
  guides: string[];
  /** Guide « NIE et carte verte » de la zone, pour ceux qui s’installent. */
  guideInstallation: string;
  faq: VilleFaq[];
  sources: VilleSource[];
};

const LOCALISATEUR: VilleSource = {
  label: "Policía Nacional · Localisateur des bureaux pour étrangers",
  href: "https://sede.policia.gob.es/portalCiudadano/_es/dependencias_localizador_accesible.php",
};

const CITA_PREVIA: VilleSource = {
  label: "Cita previa extranjería (portail officiel)",
  href: "https://icp.administracionelectronica.gob.es/icpplus/index.html",
};

const INTERIOR_NIE: VilleSource = {
  label: "Ministerio del Interior · Número de Identidad de Extranjero (NIE)",
  href: "https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/",
};

const TASA_790: VilleSource = {
  label: "Policía Nacional · Taxe 790 code 012",
  href: "https://sede.policia.gob.es/Tasa790_012/",
};

export const villes: VilleNie[] = [
  {
    slug: "marbella",
    nom: "Marbella",
    province: "Málaga",
    region: "Andalousie",
    seoTitle: "NIE à Marbella : rendez-vous, documents et délais (2026)",
    description:
      "Demander un NIE à Marbella : le commissariat qui traite la demande, la prise de rendez-vous dans la province de Málaga, les documents (EX-15, taxe 790-012) et les délais à prévoir.",
    h1: "Votre NIE à Marbella.",
    h1Accent: "Le bon bureau, le bon dossier.",
    intro:
      "À Marbella, la demande de NIE se fait auprès de la Policía Nacional, sur rendez-vous. Bonne nouvelle : le commissariat de la ville traite lui-même l’attribution du NIE, et plusieurs autres bureaux de la Costa del Sol peuvent servir de solution de repli quand les créneaux manquent.",
    ouDeposer: [
      "Marbella dépend de la province de Málaga. D’après le localisateur officiel de la Policía Nacional (consulté en novembre 2026), le commissariat de Marbella mentionne bien « Certificados y asignación de NIE » parmi ses démarches.",
      "D’autres bureaux de la province affichent la même démarche et restent accessibles depuis Marbella, ce qui élargit les possibilités de rendez-vous :",
    ],
    bureaux: [
      "Marbella : Comisaría de Policía, Avda. Arias de Velasco 25.",
      "Estepona : Comisaría de Policía, C/ Valle Inclán 1.",
      "Torremolinos-Benalmádena : Comisaría de Policía, C/ Skal 12.",
      "Málaga ville : Brigada Provincial de Extranjería y Fronteras, Plaza Manuel Azaña 3.",
    ],
    rendezVous: [
      "Sur le portail national de cita previa, choisissez la province de Málaga, puis la démarche « Certificados y asignación de NIE ». Le portail propose ensuite les bureaux qui ont des créneaux ouverts.",
      "Si Marbella n’affiche rien, regardez Estepona ou Torremolinos-Benalmádena : un trajet sur l’A-7 coûte souvent moins cher que trois semaines d’attente supplémentaires. La demande est plus forte en été et autour des périodes de vacances.",
    ],
    contexte: [
      "Marbella attire une clientèle internationale nombreuse, dont beaucoup de Français : résidences secondaires, retraités qui passent l’hiver sur la Costa del Sol, investisseurs. Dans la grande majorité des cas, le NIE est demandé pour un achat immobilier, la signature devant notaire ne pouvant se faire sans lui.",
      "Si vous achetez à Marbella, Nueva Andalucía ou San Pedro de Alcántara sans vous installer, le NIE seul (EX-15) suffit pour la vente. Si vous comptez y vivre plus de trois mois, la démarche à prévoir est le certificat d’enregistrement UE, qui comporte votre NIE.",
    ],
    guides: [
      "nie-achat-immobilier-espagne",
      "rendez-vous-nie-cita-previa",
      "nie-documents-ex15",
    ],
    guideInstallation: "nie-carte-verte-malaga",
    faq: [
      {
        q: "Où demander un NIE à Marbella ?",
        r: "Au commissariat de la Policía Nacional de Marbella (Avda. Arias de Velasco 25), qui mentionne l’attribution du NIE dans le localisateur officiel. Il faut un rendez-vous pris sur le portail national de cita previa, province de Málaga. Vérifiez toujours l’adresse indiquée sur votre confirmation.",
      },
      {
        q: "Pas de rendez-vous à Marbella : que faire ?",
        r: "Élargissez la recherche à la province : Estepona, Torremolinos-Benalmádena et la Brigada Provincial de Málaga traitent aussi le NIE. Revenez sur le portail à différents moments de la journée, et préparez le dossier complet avant, pour ne pas perdre le créneau obtenu.",
      },
      {
        q: "Faut-il un NIE pour acheter un appartement à Marbella ?",
        r: "Oui. Le notaire demande le NIE de l’acheteur pour signer l’acte de vente, et il sert ensuite pour les impôts liés au bien. Lancez la démarche dès que le projet se précise, sans attendre la date de signature.",
      },
      {
        q: "Peut-on demander un NIE pour Marbella depuis la France ?",
        r: "Dans certains cas, oui : le consulat d’Espagne compétent pour votre domicile en France peut traiter une demande de NIE, selon le motif et ses propres disponibilités. C’est souvent pratique pour un achat préparé à distance. Le NIE obtenu est valable dans toute l’Espagne.",
      },
    ],
    sources: [LOCALISATEUR, CITA_PREVIA, TASA_790, INTERIOR_NIE],
  },

  {
    slug: "malaga",
    nom: "Málaga",
    province: "Málaga",
    region: "Andalousie",
    seoTitle: "NIE à Málaga : rendez-vous, documents et délais (2026)",
    description:
      "Demander un NIE à Málaga : la Brigada Provincial de Extranjería, les autres bureaux de la province, la cita previa, les documents (EX-15, taxe 790-012) et les délais.",
    h1: "Votre NIE à Málaga.",
    h1Accent: "Sans perdre votre rendez-vous.",
    intro:
      "À Málaga ville, le NIE se demande auprès de la Brigada Provincial de Extranjería y Fronteras de la Policía Nacional, sur rendez-vous. La ville attire de plus en plus de nouveaux arrivants, et les créneaux partent vite : l’enjeu est de savoir où chercher et d’arriver avec un dossier complet.",
    ouDeposer: [
      "D’après le localisateur officiel de la Policía Nacional (consulté en novembre 2026), la Brigada Provincial de Málaga mentionne « Certificados y asignación de NIE » ainsi que le régime communautaire.",
      "Dans la province, plusieurs commissariats affichent aussi l’attribution du NIE :",
    ],
    bureaux: [
      "Málaga ville : Brigada Provincial de Extranjería y Fronteras, Plaza Manuel Azaña 3.",
      "Torremolinos-Benalmádena : Comisaría de Policía, C/ Skal 12.",
      "Marbella : Comisaría de Policía, Avda. Arias de Velasco 25.",
      "Estepona : Comisaría de Policía, C/ Valle Inclán 1.",
    ],
    rendezVous: [
      "Sur le portail national de cita previa, choisissez la province de Málaga, puis « Certificados y asignación de NIE ». Le bureau de la Plaza Manuel Azaña concentre une grande partie de la demande de la ville et de ses environs.",
      "Torremolinos-Benalmádena est à quelques arrêts de train de banlieue de Málaga : c’est souvent la première alternative à regarder si le bureau central est complet.",
    ],
    contexte: [
      "Málaga n’est plus seulement une ville de retraités au soleil. Beaucoup de Français y arrivent aujourd’hui pour travailler, en télétravail ou dans les entreprises technologiques installées autour de la ville, mais aussi pour étudier ou acheter un logement.",
      "Ce mélange de profils compte pour le dossier : un NIE demandé pour un contrat de travail, un achat ou une démarche fiscale ne se justifie pas avec les mêmes pièces. Et si vous vous installez durablement, c’est le certificat d’enregistrement UE qu’il faut viser.",
    ],
    guides: [
      "rendez-vous-nie-cita-previa",
      "nie-documents-ex15",
      "nie-ou-residence-espagne",
    ],
    guideInstallation: "nie-carte-verte-malaga",
    faq: [
      {
        q: "Où faire son NIE à Málaga ?",
        r: "À la Brigada Provincial de Extranjería y Fronteras, Plaza Manuel Azaña 3, sur rendez-vous. Les commissariats de Torremolinos-Benalmádena, Marbella et Estepona mentionnent aussi l’attribution du NIE dans le localisateur officiel.",
      },
      {
        q: "Je viens travailler à Málaga : NIE ou carte verte ?",
        r: "Si vous vous installez plus de trois mois, la démarche principale est le certificat d’enregistrement UE (formulaire EX-18), qui comporte votre NIE. Le NIE seul peut être utile avant, par exemple si l’employeur en a besoin pour le contrat. Nous vérifions avec vous l’ordre le plus adapté.",
      },
      {
        q: "Combien de temps faut-il pour avoir un NIE à Málaga ?",
        r: "Le délai qui pèse le plus est celui du rendez-vous, de quelques jours à plusieurs semaines selon la période. Une fois au guichet avec un dossier complet, le certificat est souvent remis rapidement, mais les pratiques varient d’un bureau à l’autre.",
      },
      {
        q: "Combien coûte le NIE à Málaga ?",
        r: "La taxe 790 code 012 pour un NIE demandé par l’intéressé est de 9,84 € selon la Police nationale, le même montant partout en Espagne. Notre accompagnement pour préparer le dossier coûte 149 €.",
      },
    ],
    sources: [LOCALISATEUR, CITA_PREVIA, TASA_790, INTERIOR_NIE],
  },

  {
    slug: "alicante",
    nom: "Alicante",
    province: "Alicante",
    region: "Communauté valencienne",
    seoTitle: "NIE à Alicante : rendez-vous, documents et délais (2026)",
    description:
      "Demander un NIE à Alicante : le bon bureau de la Policía Nacional (et celui où il ne faut pas aller), la cita previa, les documents (EX-15, taxe 790-012) et les délais.",
    h1: "Votre NIE à Alicante.",
    h1Accent: "Au bon guichet, du premier coup.",
    intro:
      "À Alicante, la Policía Nacional dispose de plusieurs bureaux, et tous ne traitent pas le NIE. Le commissariat provincial, le plus connu, n’est pas celui qu’il vous faut : la demande se fait auprès de la Brigada Provincial de Extranjería y Fronteras, sur rendez-vous.",
    ouDeposer: [
      "D’après le localisateur officiel de la Policía Nacional (consulté en novembre 2026), c’est le bureau de la Brigada Provincial situé C/ Ebanistería qui mentionne le NIE et les certificats des citoyens communautaires. Le commissariat provincial (C/ Isabel la Católica) et le bureau de la C/ Campo de Mirra ne listent pas cette démarche.",
      "Dans la province, plusieurs commissariats mentionnent aussi « Certificados y asignación de NIE » :",
    ],
    bureaux: [
      "Alicante ville : Brigada Provincial de Extranjería y Fronteras, C/ Ebanistería 6.",
      "Elche : Comisaría de Policía, C/ Abeto 1.",
      "Benidorm : Comisaría de Policía, C/ Apolo XI 36.",
      "Orihuela : Comisaría de Policía, C/ El Sol 34.",
    ],
    rendezVous: [
      "Sur le portail national de cita previa, choisissez la province d’Alicante, puis « Certificados y asignación de NIE ». Vérifiez l’adresse qui figure sur la confirmation : c’est elle qui fait foi, pas l’adresse du commissariat le plus proche de chez vous.",
      "Elche est à une vingtaine de minutes d’Alicante : si la Brigada Provincial est complète, c’est la première alternative à regarder.",
    ],
    contexte: [
      "Alicante et la Costa Blanca comptent parmi les destinations préférées des Français en Espagne, avec un aéroport bien relié à la France. On y croise surtout des retraités, des propriétaires de résidences secondaires et des familles qui s’installent à l’année.",
      "Pour un achat immobilier sans installation, le NIE seul suffit. Pour une installation de plus de trois mois, la démarche à prévoir est le certificat d’enregistrement UE, qui comporte votre NIE.",
    ],
    guides: [
      "obtenir-nie-espagne",
      "nie-achat-immobilier-espagne",
      "taxe-790-012-nie",
    ],
    guideInstallation: "nie-carte-verte-alicante",
    faq: [
      {
        q: "Où demander le NIE à Alicante ?",
        r: "À la Brigada Provincial de Extranjería y Fronteras, C/ Ebanistería 6, sur rendez-vous. Le commissariat provincial de la C/ Isabel la Católica ne mentionne pas le NIE parmi ses démarches dans le localisateur officiel.",
      },
      {
        q: "Peut-on faire son NIE à Elche plutôt qu’à Alicante ?",
        r: "Oui. Le rendez-vous se prend au niveau de la province : vous pouvez choisir tout bureau qui traite le NIE, dont le commissariat d’Elche (C/ Abeto 1). Cela permet souvent de trouver une date plus proche.",
      },
      {
        q: "Quels documents apporter au rendez-vous ?",
        r: "En général : le formulaire EX-15 rempli et signé, votre passeport ou carte d’identité en original et en copie, le justificatif du motif (par exemple un compromis de vente) et la preuve de paiement de la taxe 790 code 012 (9,84 €). Le bureau peut demander des pièces complémentaires.",
      },
      {
        q: "Combien de temps faut-il compter ?",
        r: "Comptez d’abord le délai pour obtenir un rendez-vous, variable selon la saison. Le jour du rendez-vous, avec un dossier complet, la remise du certificat est souvent rapide, sans que ce soit garanti. Pour une vente, lancez la démarche dès la signature de l’avant-contrat.",
      },
    ],
    sources: [LOCALISATEUR, CITA_PREVIA, TASA_790, INTERIOR_NIE],
  },

  {
    slug: "valence",
    nom: "Valence",
    province: "Valence",
    region: "Communauté valencienne",
    seoTitle: "NIE à Valence : rendez-vous, documents et délais (2026)",
    description:
      "Demander un NIE à Valence (Valencia) : le bureau dédié aux citoyens européens, les commissariats de la province, la cita previa, les documents (EX-15, taxe 790-012) et les délais.",
    h1: "Votre NIE à Valence.",
    h1Accent: "Un bureau dédié, un dossier prêt.",
    intro:
      "Valence a une particularité utile : la Policía Nacional y dispose d’un bureau dédié aux démarches des citoyens européens, qui traite à la fois le NIE et le certificat d’enregistrement UE. Attention en revanche à ne pas confondre ce bureau avec les Oficinas de Extranjeros de la ville, qui ne traitent pas le NIE.",
    ouDeposer: [
      "D’après le localisateur officiel de la Policía Nacional (consulté en novembre 2026), l’Oficina de Trámites de Comunitarios y Certificados mentionne l’attribution du NIE et le certificat d’enregistrement de citoyen de l’Union. Les Oficinas de Extranjeros (C/ Joaquín Ballester, C/ Motilla del Palancar) ne listent pas le NIE.",
      "Dans la province, plusieurs commissariats traitent aussi le NIE, notamment :",
    ],
    bureaux: [
      "Valence ville : Oficina de Trámites de Comunitarios y Certificados, C/ Bailén 9.",
      "Sagunto : Comisaría de Policía, C/ Progreso 14.",
      "Gandia : Comisaría de Policía, C/ Ciudad de Laval 5.",
      "Agglomération : Mislata, Paterna, Torrent, Quart de Poblet-Manises et Burjassot-Godella.",
    ],
    rendezVous: [
      "Sur le portail national de cita previa, choisissez la province de Valence, puis « Certificados y asignación de NIE ». Les commissariats de l’agglomération (Mislata, Paterna, Torrent) sont accessibles en métro ou en bus et proposent parfois des dates plus proches que le centre.",
      "Contrôlez l’adresse figurant sur votre confirmation : avec plusieurs bureaux de police pour étrangers dans la ville, se tromper de guichet est une erreur fréquente.",
    ],
    contexte: [
      "Valence attire chaque année davantage de Français : actifs en télétravail, salariés, étudiants, familles séduites par la taille humaine de la ville et par son coût de la vie. Le NIE intervient très tôt, souvent avant même la signature du bail ou l’ouverture d’un compte bancaire.",
      "Si vous vous installez à Valence, c’est le certificat d’enregistrement UE qu’il faut viser, et le bureau de la C/ Bailén traite les deux démarches. Le NIE seul reste la bonne option pour un achat ou une démarche ponctuelle sans installation.",
    ],
    guides: [
      "nie-ou-residence-espagne",
      "rendez-vous-nie-cita-previa",
      "nie-documents-ex15",
    ],
    guideInstallation: "nie-carte-verte-valence",
    faq: [
      {
        q: "Où demander un NIE à Valence ?",
        r: "À l’Oficina de Trámites de Comunitarios y Certificados de la Policía Nacional, C/ Bailén 9, sur rendez-vous. Plusieurs commissariats de la province (Sagunto, Gandia, Mislata, Paterna, Torrent…) mentionnent aussi l’attribution du NIE.",
      },
      {
        q: "Puis-je aller à l’Oficina de Extranjeros pour mon NIE ?",
        r: "Non, en principe. D’après le localisateur officiel, les Oficinas de Extranjeros de Valence ne listent pas l’attribution du NIE. Pour un citoyen européen, c’est le bureau des démarches communautaires de la C/ Bailén ou un commissariat qui traite le NIE.",
      },
      {
        q: "Je m’installe à Valence : faut-il d’abord un NIE ?",
        r: "Pas forcément. Le certificat d’enregistrement UE, obligatoire au-delà de trois mois, comporte votre NIE. Un NIE seul peut toutefois être utile avant, pour un bail, un contrat de travail ou un achat. Tout dépend de votre calendrier.",
      },
      {
        q: "Quel est le délai pour un NIE à Valence ?",
        r: "Le délai principal est celui du rendez-vous, qui varie selon la période. Le jour J, avec un dossier complet, la démarche se règle généralement en un seul passage, même si chaque bureau garde ses propres pratiques.",
      },
    ],
    sources: [LOCALISATEUR, CITA_PREVIA, TASA_790, INTERIOR_NIE],
  },

  {
    slug: "barcelone",
    nom: "Barcelone",
    province: "Barcelone",
    region: "Catalogne",
    seoTitle: "NIE à Barcelone : rendez-vous, documents et délais (2026)",
    description:
      "Demander un NIE à Barcelone : le bureau des citoyens communautaires (nouvelle adresse en 2026), les commissariats de l’agglomération, la cita previa, les documents et les délais.",
    h1: "Votre NIE à Barcelone.",
    h1Accent: "Même quand les rendez-vous manquent.",
    intro:
      "Barcelone est l’une des villes d’Espagne où obtenir un rendez-vous pour le NIE est le plus difficile. Les démarches restent du ressort de la Policía Nacional, pas des Mossos d’Esquadra, et le bureau des citoyens communautaires a changé d’adresse en 2026. Deux bonnes raisons de bien préparer le terrain.",
    ouDeposer: [
      "Le localisateur officiel de la Policía Nacional (consulté en novembre 2026) indique, pour la Brigada Provincial de Barcelone, un bureau du régime communautaire qui traite les « Asignaciones NIE a ciudadanos de la Unión, no residentes » et les certificats d’enregistrement UE.",
      "Selon le Collège des avocats de Barcelone (ICAB), ce bureau des citoyens communautaires a déménagé au C/ Mallorca 213, avec une reprise de l’accueil le 5 mars 2026. Les listes officielles ne sont pas toujours mises à jour au même rythme : seule l’adresse de votre confirmation de rendez-vous fait foi.",
    ],
    bureaux: [
      "Barcelone ville : bureau des citoyens communautaires de la Brigada Provincial de Extranjería y Fronteras (C/ Mallorca 213 depuis mars 2026, selon l’ICAB).",
      "Agglomération : plusieurs commissariats traitent aussi le NIE, notamment L’Hospitalet de Llobregat, Badalona, Sabadell, Terrassa et Mataró.",
    ],
    rendezVous: [
      "Sur le portail national de cita previa, choisissez la province de Barcelone, puis « Certificados y asignación de NIE ». Les créneaux sont publiés par vagues et disparaissent vite : revenez plusieurs fois par jour, à des heures différentes.",
      "Ne vous limitez pas à Barcelone ville. Un commissariat de l’agglomération, accessible en métro ou en Rodalies, reste souvent la solution la plus rapide.",
    ],
    contexte: [
      "Barcelone est la première destination des Français en Espagne. On y vient surtout pour travailler (salariés, start-up, indépendants), étudier ou suivre un conjoint muté, plus rarement pour la retraite. Le NIE est demandé très tôt : contrat de travail, bail, compte bancaire.",
      "Particularité catalane : la mairie et la Generalitat travaillent en catalan et en espagnol, mais le NIE relève de l’État, et les formulaires de la police sont en espagnol. Si vous vous installez, prévoyez directement le certificat d’enregistrement UE, qui comporte votre NIE.",
    ],
    guides: [
      "rendez-vous-nie-cita-previa",
      "nie-ou-residence-espagne",
      "nie-documents-ex15",
    ],
    guideInstallation: "nie-carte-verte-barcelone",
    faq: [
      {
        q: "Où faire son NIE à Barcelone ?",
        r: "Auprès de la Policía Nacional, au bureau des citoyens communautaires de la Brigada Provincial (C/ Mallorca 213 depuis mars 2026, selon le Collège des avocats de Barcelone) ou dans un commissariat de l’agglomération qui traite le NIE. Le rendez-vous indique l’adresse exacte.",
      },
      {
        q: "Pourquoi n’y a-t-il jamais de rendez-vous NIE à Barcelone ?",
        r: "La demande dépasse largement l’offre de créneaux, un problème signalé depuis plusieurs années, y compris par le Defensor del Pueblo. Les créneaux sont libérés par vagues. Chercher dans toute la province et revenir souvent sur le portail reste la méthode la plus efficace.",
      },
      {
        q: "Les Mossos d’Esquadra délivrent-ils le NIE ?",
        r: "Non. Les Mossos sont la police de la Catalogne, mais les démarches des étrangers, dont le NIE et le certificat d’enregistrement UE, relèvent de la Policía Nacional, qui dépend de l’État.",
      },
      {
        q: "Vaut-il mieux faire son NIE depuis la France avant de partir à Barcelone ?",
        r: "Si votre motif s’y prête, demander le NIE au consulat d’Espagne compétent en France peut éviter la course aux rendez-vous sur place. Les délais du consulat varient eux aussi. Si vous vous installez, le certificat d’enregistrement UE se fera ensuite à Barcelone.",
      },
    ],
    sources: [
      LOCALISATEUR,
      {
        label: "ICAB · Changement d’adresse du bureau des citoyens communautaires (2026)",
        href: "https://icab.es/es/actualidad/noticias/noticia/Cambio-de-ubicacion-de-la-Oficina-de-ciudadanos-comunitarios/",
      },
      CITA_PREVIA,
      TASA_790,
      INTERIOR_NIE,
    ],
  },

  {
    slug: "madrid",
    nom: "Madrid",
    province: "Madrid",
    region: "Communauté de Madrid",
    seoTitle: "NIE à Madrid : rendez-vous, documents et délais (2026)",
    description:
      "Demander un NIE à Madrid : quels bureaux de la Policía Nacional traitent le NIE, pourquoi chercher en périphérie, la cita previa, les documents (EX-15, taxe 790-012) et les délais.",
    h1: "Votre NIE à Madrid.",
    h1Accent: "Chercher plus large, attendre moins.",
    intro:
      "À Madrid, le NIE se demande auprès de la Policía Nacional, sur rendez-vous. Point souvent mal compris : le bureau central de la Brigada Provincial, avenue Padre Piquer, est surtout connu pour le certificat d’enregistrement UE. Pour le NIE seul, ce sont de nombreux commissariats de la région qui affichent la démarche.",
    ouDeposer: [
      "D’après le localisateur officiel de la Policía Nacional (consulté en novembre 2026), la Brigada Provincial de Extranjería y Fronteras (Avda. Padre Piquer 18) liste le certificat d’enregistrement des citoyens de l’UE, mais pas l’attribution du NIE.",
      "Les commissariats suivants mentionnent en revanche « Certificados (residencia y no residencia) y asignación de NIE » :",
    ],
    bureaux: [
      "Est : Alcalá de Henares, Torrejón de Ardoz, Coslada-San Fernando.",
      "Sud : Getafe, Leganés, Fuenlabrada, Parla, Aranjuez.",
      "Ouest : Móstoles, Alcorcón, Pozuelo de Alarcón.",
    ],
    rendezVous: [
      "Sur le portail national de cita previa, choisissez la province de Madrid, puis « Certificados y asignación de NIE ». Le portail affiche les bureaux qui ont des créneaux ouverts au moment de votre recherche.",
      "La plupart des commissariats listés sont reliés au centre par le Cercanías ou le métro. Accepter un rendez-vous à Getafe ou Alcalá plutôt que d’attendre une date en ville fait souvent gagner plusieurs semaines.",
    ],
    contexte: [
      "Madrid accueille surtout des Français qui viennent pour travailler : mutations dans des entreprises françaises ou internationales, recrutements locaux, mais aussi études et familles. Le NIE est demandé dès les premières semaines, pour le contrat de travail, le bail ou la banque.",
      "Pour une installation de plus de trois mois, la démarche à viser est le certificat d’enregistrement UE, qui comporte votre NIE. Le NIE seul reste utile si l’employeur en a besoin avant votre arrivée, ou pour un achat immobilier.",
    ],
    guides: [
      "rendez-vous-nie-cita-previa",
      "nie-depuis-france",
      "nie-ou-residence-espagne",
    ],
    guideInstallation: "nie-carte-verte-madrid",
    faq: [
      {
        q: "Où faire son NIE à Madrid ?",
        r: "Dans un bureau de la Policía Nacional qui traite l’attribution du NIE, sur rendez-vous. D’après le localisateur officiel, de nombreux commissariats de la région le mentionnent (Alcalá de Henares, Getafe, Leganés, Móstoles, Alcorcón, Pozuelo…). Le bureau de l’avenue Padre Piquer est listé pour le certificat d’enregistrement UE.",
      },
      {
        q: "Peut-on faire son NIE dans un commissariat hors de Madrid ville ?",
        r: "Oui. Le rendez-vous se prend pour la province de Madrid, quel que soit votre quartier. Vous pouvez choisir n’importe quel bureau qui traite le NIE et propose un créneau.",
      },
      {
        q: "Mon employeur à Madrid me demande un NIE avant mon arrivée : comment faire ?",
        r: "La demande peut, dans certains cas, passer par le consulat d’Espagne compétent pour votre domicile en France, avec un justificatif du motif (promesse d’embauche, par exemple). Sinon, elle se fera à Madrid dès votre arrivée. Nous vérifions avec vous l’option la plus rapide.",
      },
      {
        q: "Combien de temps faut-il pour un NIE à Madrid ?",
        r: "Le délai dépend surtout du rendez-vous, de quelques jours à plusieurs semaines selon le bureau et la période. Élargir la recherche aux commissariats de la périphérie est le meilleur moyen de le réduire.",
      },
    ],
    sources: [LOCALISATEUR, CITA_PREVIA, TASA_790, INTERIOR_NIE],
  },

  {
    slug: "torrevieja",
    nom: "Torrevieja",
    province: "Alicante",
    region: "Communauté valencienne",
    seoTitle: "NIE à Torrevieja : rendez-vous, documents et délais (2026)",
    description:
      "Demander un NIE à Torrevieja : ce que traite le commissariat local, les bureaux NIE les plus proches (Orihuela, Elche, Alicante), la cita previa, les documents et les délais.",
    h1: "Votre NIE à Torrevieja.",
    h1Accent: "Savoir où aller avant de partir.",
    intro:
      "Torrevieja a son commissariat de la Policía Nacional, mais attention : d’après le localisateur officiel, il traite le régime communautaire sans mentionner l’attribution du NIE seul. Pour un NIE sans installation, il faut souvent prévoir un rendez-vous dans une autre ville de la province.",
    ouDeposer: [
      "Le localisateur officiel de la Policía Nacional (consulté en novembre 2026) indique pour le commissariat de Torrevieja le « Régimen Comunitario y No Comunitario », mais pas « Certificados y asignación de NIE ». Les bureaux les plus proches qui mentionnent le NIE sont :",
    ],
    bureaux: [
      "Orihuela : Comisaría de Policía, C/ El Sol 34 (le plus proche de Torrevieja).",
      "Elche : Comisaría de Policía, C/ Abeto 1.",
      "Alicante ville : Brigada Provincial de Extranjería y Fronteras, C/ Ebanistería 6.",
      "Pour une installation (certificat d’enregistrement UE) : Comisaría de Torrevieja, C/ Arquitecto Larramendi 3.",
    ],
    rendezVous: [
      "Sur le portail national de cita previa, choisissez la province d’Alicante, puis « Certificados y asignación de NIE ». Le portail n’affiche que les bureaux qui proposent cette démarche : si Torrevieja n’apparaît pas, c’est normal.",
      "Orihuela est à une demi-heure de route environ. Pour une installation, sélectionnez plutôt la démarche du certificat d’enregistrement UE, que le commissariat de Torrevieja traite.",
    ],
    contexte: [
      "Torrevieja et la Vega Baja attirent de nombreux Européens, dont des Français : retraités qui s’y installent à l’année, propriétaires de résidences secondaires, acheteurs séduits par les prix de l’immobilier et le climat. Le NIE y est demandé avant tout pour acheter un bien.",
      "Bien choisir sa démarche est ici plus important qu’ailleurs : un acheteur qui ne s’installe pas demande un NIE seul, à Orihuela ou Elche ; un retraité qui s’installe demande directement le certificat d’enregistrement UE, qui comporte son NIE, à Torrevieja.",
    ],
    guides: [
      "nie-achat-immobilier-espagne",
      "nie-ou-residence-espagne",
      "rendez-vous-nie-cita-previa",
    ],
    guideInstallation: "nie-carte-verte-alicante",
    faq: [
      {
        q: "Peut-on faire son NIE au commissariat de Torrevieja ?",
        r: "D’après le localisateur officiel de la Policía Nacional, le commissariat de Torrevieja traite le régime communautaire mais ne mentionne pas l’attribution du NIE seul. Pour un NIE sans installation, les bureaux les plus proches sont Orihuela, Elche et la Brigada Provincial d’Alicante. Fiez-vous aux bureaux proposés par le portail de rendez-vous.",
      },
      {
        q: "Je prends ma retraite à Torrevieja : NIE ou carte verte ?",
        r: "Si vous vous installez plus de trois mois, la démarche est le certificat d’enregistrement UE (formulaire EX-18), qui comporte votre NIE. Il vous faudra notamment justifier de ressources suffisantes et d’une assurance maladie. Inutile en général de demander un NIE séparé avant.",
      },
      {
        q: "J’achète un appartement à Torrevieja sans y vivre : que faut-il ?",
        r: "Un NIE seul (formulaire EX-15), demandé à Orihuela, Elche, Alicante ou depuis la France auprès du consulat compétent dans certains cas. Le notaire le demandera pour la signature : lancez la démarche dès l’avant-contrat.",
      },
      {
        q: "Quels documents prévoir ?",
        r: "En général : l’EX-15 rempli et signé, votre passeport ou carte d’identité en original et en copie, un justificatif du motif (compromis de vente, réservation…) et la preuve de paiement de la taxe 790 code 012 (9,84 €).",
      },
    ],
    sources: [LOCALISATEUR, CITA_PREVIA, TASA_790, INTERIOR_NIE],
  },

  {
    slug: "benidorm",
    nom: "Benidorm",
    province: "Alicante",
    region: "Communauté valencienne",
    seoTitle: "NIE à Benidorm : rendez-vous, documents et délais (2026)",
    description:
      "Demander un NIE à Benidorm : le commissariat qui traite le NIE pour la Marina Baixa, la cita previa dans la province d’Alicante, les documents (EX-15, taxe 790-012) et les délais.",
    h1: "Votre NIE à Benidorm.",
    h1Accent: "Pour toute la Marina Baixa.",
    intro:
      "À Benidorm, le commissariat de la Policía Nacional traite l’attribution du NIE, sur rendez-vous. C’est le bureau de référence pour la Marina Baixa : Altea, l’Alfàs del Pi, La Nucía, Villajoyosa ou Finestrat.",
    ouDeposer: [
      "D’après le localisateur officiel de la Policía Nacional (consulté en novembre 2026), le commissariat de Benidorm mentionne « Certificados y asignación de NIE » et le régime communautaire.",
      "Si aucun créneau n’est disponible, d’autres bureaux de la province d’Alicante traitent aussi le NIE :",
    ],
    bureaux: [
      "Benidorm : Comisaría de Policía, C/ Apolo XI 36.",
      "Alicante ville : Brigada Provincial de Extranjería y Fronteras, C/ Ebanistería 6.",
      "Elche : Comisaría de Policía, C/ Abeto 1.",
      "Alcoy : Comisaría de Policía, C/ Perú 10.",
    ],
    rendezVous: [
      "Sur le portail national de cita previa, choisissez la province d’Alicante, puis « Certificados y asignación de NIE ». Benidorm apparaît parmi les bureaux proposés lorsqu’il a des créneaux ouverts.",
      "La ligne de tram qui relie Benidorm à Alicante rend la Brigada Provincial accessible sans voiture si Benidorm est complet. La demande est plus forte avant l’été, quand beaucoup de saisonniers préparent leur contrat.",
    ],
    contexte: [
      "Benidorm et ses environs accueillent à la fois des retraités qui s’installent pour le climat, des propriétaires de résidences secondaires et des personnes qui viennent travailler dans le tourisme et l’hôtellerie, souvent pour une saison.",
      "Pour un contrat saisonnier ou un achat sans installation, le NIE seul (EX-15) est généralement la bonne démarche. Pour vivre sur place plus de trois mois, c’est le certificat d’enregistrement UE qu’il faut prévoir.",
    ],
    guides: [
      "obtenir-nie-espagne",
      "nie-documents-ex15",
      "taxe-790-012-nie",
    ],
    guideInstallation: "nie-carte-verte-alicante",
    faq: [
      {
        q: "Où demander un NIE à Benidorm ?",
        r: "Au commissariat de la Policía Nacional de Benidorm, C/ Apolo XI 36, sur rendez-vous pris sur le portail national de cita previa (province d’Alicante). Vérifiez l’adresse indiquée sur votre confirmation.",
      },
      {
        q: "J’habite à Altea ou Villajoyosa : où faire mon NIE ?",
        r: "Le commissariat de Benidorm est le plus proche qui traite le NIE. Comme le rendez-vous se prend à l’échelle de la province, vous pouvez aussi choisir Alicante, Elche ou Alcoy si une date s’y libère plus tôt.",
      },
      {
        q: "Il me faut un NIE pour un contrat saisonnier à Benidorm : à quel moment le demander ?",
        r: "Dès que l’embauche est confirmée, avec un justificatif de l’employeur. Si vous êtes encore en France, le consulat d’Espagne compétent peut, dans certains cas, traiter la demande avant votre départ. Les créneaux à Benidorm sont plus rares juste avant la saison.",
      },
      {
        q: "Combien coûte un NIE à Benidorm ?",
        r: "La taxe 790 code 012 est de 9,84 € pour un NIE demandé par l’intéressé, selon la Police nationale. Notre forfait de préparation et de vérification du dossier coûte 149 €.",
      },
    ],
    sources: [LOCALISATEUR, CITA_PREVIA, TASA_790, INTERIOR_NIE],
  },
];

export function getVille(slug: string): VilleNie | undefined {
  return villes.find((ville) => ville.slug === slug);
}
