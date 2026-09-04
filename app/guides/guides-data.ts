export type GuideSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  category: "NIE" | "Voiture" | "Installation";
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: GuideSection[];
  related: string[];
  serviceHref: string;
  serviceLabel: string;
};

export const guides: Guide[] = [
  // ─────────────────────────────────────────────
  // NIE
  // ─────────────────────────────────────────────

  {
    slug: "obtenir-nie-espagne",
    category: "NIE",
    title: "Obtenir un NIE en Espagne : le guide complet",
    seoTitle: "Obtenir un NIE en Espagne : démarches et documents",
    description:
      "Comment obtenir un NIE en Espagne ? Documents, formulaire EX-15, taxe, demande depuis la France et différence avec la résidence.",
    eyebrow: "NIE · Guide",
    intro:
      "Le NIE est souvent l’une des premières démarches auxquelles un Français est confronté en Espagne. Achat immobilier, activité professionnelle, formalités fiscales ou installation : voici ce qu’il faut comprendre avant de commencer.",
    sections: [
      {
        title: "Qu’est-ce que le NIE ?",
        paragraphs: [
          "Le NIE, Número de Identidad de Extranjero, est un numéro personnel attribué aux étrangers qui ont des intérêts économiques, professionnels ou sociaux en Espagne.",
          "Il sert à vous identifier dans de nombreuses démarches espagnoles. Obtenir un NIE ne signifie toutefois pas, à lui seul, devenir résident en Espagne.",
        ],
      },
      {
        title: "Dans quels cas peut-on avoir besoin d’un NIE ?",
        paragraphs: [
          "Le NIE peut notamment être demandé dans le cadre d’un achat immobilier, de certaines démarches fiscales ou professionnelles et de nombreuses opérations administratives en Espagne.",
          "Le motif de la demande est important : il doit pouvoir être expliqué et, selon la situation, justifié.",
        ],
      },
      {
        title: "Quels documents préparer ?",
        paragraphs: [
          "La composition exacte du dossier dépend de votre situation et du lieu où la demande est déposée.",
        ],
        bullets: [
          "Le formulaire EX-15 correctement complété.",
          "Un document d’identité en cours de validité.",
          "Les justificatifs correspondant au motif de la demande.",
          "Le justificatif de paiement de la taxe applicable lorsque celui-ci est requis.",
        ],
      },
      {
        title: "Où demander son NIE ?",
        paragraphs: [
          "Selon votre situation, la demande peut être effectuée en Espagne auprès de l’autorité compétente ou, dans certains cas, depuis l’étranger par l’intermédiaire d’un consulat espagnol.",
          "Les modalités pratiques et les rendez-vous disponibles peuvent varier. Il est donc utile de déterminer le bon circuit avant de constituer le dossier.",
        ],
      },
      {
        title: "NIE et résidence : attention à la confusion",
        paragraphs: [
          "Le NIE est un numéro d’identification. Il ne constitue pas, à lui seul, une autorisation ou une preuve de résidence.",
          "Si vous vous installez durablement en Espagne, d’autres formalités peuvent s’ajouter en fonction de votre situation.",
        ],
      },
    ],
    related: [
      "nie-depuis-france",
      "nie-documents-ex15",
      "nie-ou-residence-espagne",
    ],
    serviceHref: "/nie-espagne",
    serviceLabel: "Nous confier mon NIE",
  },

  {
    slug: "nie-depuis-france",
    category: "NIE",
    title: "Peut-on obtenir un NIE depuis la France ?",
    seoTitle: "Obtenir un NIE depuis la France : comment faire ?",
    description:
      "Peut-on demander un NIE sans être déjà installé en Espagne ? Découvrez les possibilités pour préparer ou effectuer la démarche depuis la France.",
    eyebrow: "NIE · France → Espagne",
    intro:
      "Vous avez besoin d’un NIE mais vous vivez encore en France ? Il n’est pas toujours nécessaire d’attendre votre installation en Espagne pour commencer à organiser la démarche.",
    sections: [
      {
        title: "Une demande peut-elle être faite depuis la France ?",
        paragraphs: [
          "Dans certaines situations, une demande de NIE peut être présentée par l’intermédiaire d’un consulat espagnol compétent en France.",
          "La possibilité concrète, les modalités de rendez-vous et les justificatifs demandés doivent être vérifiés en fonction de votre situation et de votre circonscription consulaire.",
        ],
      },
      {
        title: "Pourquoi préparer le dossier avant le départ ?",
        paragraphs: [
          "Identifier le motif du NIE et réunir les documents en amont peut éviter de découvrir une pièce manquante au moment où une autre démarche espagnole en dépend.",
          "Même lorsqu’une étape doit finalement être accomplie en Espagne, une grande partie du travail préparatoire peut souvent être organisée depuis la France.",
        ],
      },
      {
        title: "Faut-il se déplacer personnellement ?",
        paragraphs: [
          "Cela dépend du circuit utilisé et de la situation. Certaines procédures exigent une comparution ou des formalités personnelles, tandis que certaines démarches peuvent admettre une représentation lorsqu’elle est juridiquement et matériellement possible.",
          "Il faut donc vérifier ce point avant de prévoir un déplacement ou de donner procuration.",
        ],
      },
    ],
    related: [
      "obtenir-nie-espagne",
      "nie-documents-ex15",
      "s-installer-espagne-depuis-france",
    ],
    serviceHref: "/nie-espagne",
    serviceLabel: "Préparer mon NIE",
  },

  {
    slug: "nie-documents-ex15",
    category: "NIE",
    title: "NIE Espagne : documents, formulaire EX-15 et préparation du dossier",
    seoTitle: "NIE Espagne : documents et formulaire EX-15",
    description:
      "Quels documents faut-il pour demander un NIE en Espagne ? EX-15, identité, motif et préparation du dossier expliqués en français.",
    eyebrow: "NIE · Documents",
    intro:
      "Un dossier de NIE n’est pas compliqué lorsqu’on sait exactement quoi préparer. Le problème vient souvent d’un formulaire mal complété, d’un motif insuffisamment documenté ou d’un mauvais circuit administratif.",
    sections: [
      {
        title: "Le formulaire EX-15",
        paragraphs: [
          "Le formulaire EX-15 est utilisé pour certaines demandes de NIE. Il doit correspondre à la situation réelle du demandeur et être complété avec précision.",
          "Avant de le remplir, il est utile de déterminer pourquoi le NIE est demandé et auprès de quelle autorité le dossier sera présenté.",
        ],
      },
      {
        title: "Le document d’identité",
        paragraphs: [
          "Un passeport ou document d’identité valable doit généralement accompagner le dossier. Les modalités de présentation de l’original et des copies dépendent du canal utilisé.",
        ],
      },
      {
        title: "Justifier la raison de la demande",
        paragraphs: [
          "Le NIE est lié à l’existence d’intérêts économiques, professionnels ou sociaux en Espagne. Selon le cas, des documents permettant d’établir le motif invoqué peuvent être nécessaires.",
        ],
      },
      {
        title: "La taxe administrative",
        paragraphs: [
          "Une taxe administrative peut être associée à la démarche. Le formulaire et les modalités de paiement doivent correspondre à la procédure effectuée.",
          "Il est préférable de vérifier la version et les modalités applicables au moment du dépôt plutôt que de préparer le paiement trop longtemps à l’avance.",
        ],
      },
    ],
    related: [
      "obtenir-nie-espagne",
      "nie-depuis-france",
      "nie-ou-residence-espagne",
    ],
    serviceHref: "/nie-espagne",
    serviceLabel: "Faire préparer mon dossier",
  },

  {
    slug: "nie-ou-residence-espagne",
    category: "NIE",
    title: "NIE ou résidence en Espagne : quelle différence ?",
    seoTitle: "NIE ou résidence en Espagne : quelle différence ?",
    description:
      "NIE, certificat d’enregistrement et résidence en Espagne : comprendre les différences avant de commencer vos démarches.",
    eyebrow: "NIE · Comprendre",
    intro:
      "C’est probablement l’une des confusions les plus fréquentes : avoir un NIE et être enregistré comme résident en Espagne ne sont pas la même chose.",
    sections: [
      {
        title: "Le NIE est avant tout un numéro",
        paragraphs: [
          "Le NIE est le numéro d’identité attribué à un étranger pour ses relations avec l’administration espagnole.",
          "Il peut donc être nécessaire à une personne qui possède des intérêts en Espagne sans pour autant y transférer sa résidence.",
        ],
      },
      {
        title: "S’installer en Espagne implique d’autres démarches",
        paragraphs: [
          "Un citoyen de l’Union européenne qui séjourne en Espagne au-delà de la période prévue par la réglementation européenne peut être soumis à une formalité d’enregistrement.",
          "Les conditions et justificatifs varient notamment selon la situation professionnelle et les ressources de la personne.",
        ],
      },
      {
        title: "Et l’empadronamiento ?",
        paragraphs: [
          "L’empadronamiento correspond à l’inscription au registre municipal des habitants de la commune où vous résidez.",
          "Il s’agit encore d’une formalité différente du NIE et de l’enregistrement comme citoyen de l’Union.",
        ],
      },
    ],
    related: [
      "obtenir-nie-espagne",
      "vivre-espagne-plus-trois-mois",
      "empadronamiento-espagne",
    ],
    serviceHref: "/installation-espagne",
    serviceLabel: "Organiser mon installation",
  },

  // ─────────────────────────────────────────────
  // VOITURE
  // ─────────────────────────────────────────────

  {
    slug: "immatriculer-voiture-francaise-espagne",
    category: "Voiture",
    title: "Immatriculer une voiture française en Espagne : le guide complet",
    seoTitle: "Immatriculer une voiture française en Espagne",
    description:
      "Toutes les étapes pour immatriculer une voiture française en Espagne : documents, ITV, fiscalité, DGT et plaques espagnoles.",
    eyebrow: "Voiture · France → Espagne",
    intro:
      "Vous vous installez en Espagne avec une voiture déjà immatriculée en France ? L’immatriculation espagnole combine plusieurs démarches techniques, fiscales et administratives. Voici l’ordre à comprendre.",
    sections: [
      {
        title: "1. Vérifier les documents du véhicule",
        paragraphs: [
          "Avant de commencer, il faut vérifier les documents français du véhicule, la preuve de propriété et les éléments techniques disponibles.",
          "La situation d’une voiture que vous possédez déjà n’est pas nécessairement identique à celle d’un véhicule récemment acheté à l’étranger.",
        ],
      },
      {
        title: "2. Préparer la documentation technique",
        paragraphs: [
          "Le certificat de conformité européen, lorsqu’il existe et correspond au véhicule, peut faire partie de la documentation utilisée. Selon le cas, une documentation technique complémentaire peut être nécessaire.",
        ],
      },
      {
        title: "3. Passer l’ITV en Espagne",
        paragraphs: [
          "Dans le processus d’immatriculation d’un véhicule provenant d’un autre pays de l’Union européenne, une inspection en Espagne permet notamment d’établir la documentation technique espagnole nécessaire.",
          "Cette étape implique la présentation physique du véhicule.",
        ],
      },
      {
        title: "4. Traiter les formalités fiscales",
        paragraphs: [
          "Plusieurs obligations fiscales peuvent intervenir selon le véhicule, ses caractéristiques et votre situation.",
          "Le traitement doit être adapté au dossier : un transfert de résidence peut, sous certaines conditions, être traité différemment d’une acquisition classique.",
        ],
      },
      {
        title: "5. Finaliser l’immatriculation",
        paragraphs: [
          "Une fois les prérequis réunis, le dossier d’immatriculation peut être présenté à la DGT. Après attribution de l’immatriculation, les plaques correspondantes peuvent être fabriquées.",
          "Le véhicule doit également disposer de l’assurance obligatoire pour circuler.",
        ],
      },
    ],
    related: [
      "prix-immatriculation-voiture-espagne",
      "itv-voiture-francaise-espagne",
      "demenager-espagne-avec-voiture",
      "taxes-immatriculation-voiture-espagne",
    ],
    serviceHref: "/immatriculation-voiture-espagne",
    serviceLabel: "Nous confier mon immatriculation",
  },

  {
    slug: "prix-immatriculation-voiture-espagne",
    category: "Voiture",
    title: "Combien coûte l’immatriculation d’une voiture en Espagne ?",
    seoTitle: "Prix immatriculation voiture Espagne : combien prévoir ?",
    description:
      "ITV, DGT, taxes et documents : comprendre les différents coûts pour immatriculer une voiture française en Espagne.",
    eyebrow: "Voiture · Coût",
    intro:
      "Il n’existe pas un prix unique pour immatriculer une voiture française en Espagne. Le montant final dépend du véhicule, de sa situation et des formalités applicables.",
    sections: [
      {
        title: "Pourquoi le prix varie-t-il ?",
        paragraphs: [
          "Deux véhicules français peuvent entraîner des coûts différents. Les caractéristiques techniques, les émissions, la situation fiscale, la commune et la documentation disponible peuvent modifier le total.",
        ],
      },
      {
        title: "Les principaux postes de coût",
        paragraphs: [
          "Un budget d’immatriculation peut comprendre plusieurs catégories de dépenses.",
        ],
        bullets: [
          "L’inspection technique ITV.",
          "La documentation technique éventuellement nécessaire.",
          "Les taxes applicables selon la situation.",
          "La taxe ou redevance administrative de la DGT.",
          "L’impôt municipal sur les véhicules lorsqu’il est applicable.",
          "La fabrication des plaques.",
          "Les éventuels frais d’accompagnement ou de représentation.",
        ],
      },
      {
        title: "Et en cas de déménagement en Espagne ?",
        paragraphs: [
          "Lors d’un transfert de résidence vers l’Espagne avec un véhicule déjà possédé et utilisé auparavant, certaines règles fiscales spécifiques ou exonérations peuvent être envisageables si toutes les conditions légales sont réunies.",
          "Il faut donc analyser la situation avant de calculer le coût total.",
        ],
      },
      {
        title: "Pourquoi éviter les estimations universelles ?",
        paragraphs: [
          "Un prix annoncé sans connaître le véhicule et la situation du propriétaire peut être trompeur. La bonne méthode consiste à identifier les étapes réellement applicables puis à chiffrer chaque poste.",
        ],
      },
    ],
    related: [
      "immatriculer-voiture-francaise-espagne",
      "taxes-immatriculation-voiture-espagne",
      "demenager-espagne-avec-voiture",
    ],
    serviceHref: "/immatriculation-voiture-espagne",
    serviceLabel: "Étudier mon immatriculation",
  },

  {
    slug: "itv-voiture-francaise-espagne",
    category: "Voiture",
    title: "ITV en Espagne avec une voiture française : comment ça marche ?",
    seoTitle: "ITV Espagne pour une voiture française : guide",
    description:
      "Votre voiture est immatriculée en France et doit passer l’ITV en Espagne ? Découvrez son rôle dans une immatriculation espagnole.",
    eyebrow: "Voiture · ITV",
    intro:
      "L’ITV est l’équivalent espagnol du contrôle technique, mais dans une procédure d’immatriculation d’un véhicule français, son rôle ne se limite pas à vérifier que la voiture peut circuler.",
    sections: [
      {
        title: "Pourquoi passer par une ITV espagnole ?",
        paragraphs: [
          "Pour immatriculer en Espagne un véhicule provenant d’un autre pays de l’Union européenne, une inspection espagnole intervient dans la constitution de la documentation technique nécessaire à l’immatriculation.",
        ],
      },
      {
        title: "La voiture doit-elle être présente ?",
        paragraphs: [
          "Oui. Une inspection technique porte sur le véhicule lui-même : la voiture doit donc être présentée physiquement à la station ITV pour cette étape.",
        ],
      },
      {
        title: "Quels documents préparer ?",
        paragraphs: [
          "Les documents nécessaires dépendent du véhicule et de son dossier technique. La documentation française, la preuve de propriété et les éléments permettant d’identifier les caractéristiques du véhicule sont particulièrement importants.",
        ],
      },
      {
        title: "ITV et contrôle technique français",
        paragraphs: [
          "Un contrôle technique français valide ne dispense pas nécessairement des formalités techniques nécessaires à l’établissement de la documentation espagnole pour une première immatriculation en Espagne.",
        ],
      },
    ],
    related: [
      "immatriculer-voiture-francaise-espagne",
      "prix-immatriculation-voiture-espagne",
      "demenager-espagne-avec-voiture",
    ],
    serviceHref: "/immatriculation-voiture-espagne",
    serviceLabel: "Préparer mon dossier véhicule",
  },

  {
    slug: "demenager-espagne-avec-voiture",
    category: "Voiture",
    title: "Déménager en Espagne avec sa voiture française : quelles démarches ?",
    seoTitle: "Déménager en Espagne avec sa voiture française",
    description:
      "Vous transférez votre résidence de France en Espagne avec votre voiture ? ITV, immatriculation, fiscalité et documents à anticiper.",
    eyebrow: "Voiture · Déménagement",
    intro:
      "Emporter sa propre voiture lorsque l’on déménage en Espagne paraît naturel. Administrativement, le changement de pays implique pourtant plusieurs vérifications qu’il vaut mieux anticiper.",
    sections: [
      {
        title: "Commencer avant de quitter la France",
        paragraphs: [
          "Avant le déménagement, vérifiez que vous disposez des documents originaux du véhicule et de la documentation technique disponible. Certaines pièces sont beaucoup plus simples à retrouver avant le départ.",
        ],
      },
      {
        title: "Votre cas n’est pas celui d’un simple achat à l’étranger",
        paragraphs: [
          "Si vous possédez et utilisez déjà votre voiture en France puis transférez votre résidence en Espagne, votre situation peut relever de règles différentes de celles applicables à une personne qui vient d’acheter une voiture française pour l’importer.",
        ],
      },
      {
        title: "Vérifier une éventuelle exonération",
        paragraphs: [
          "La réglementation fiscale espagnole prévoit des situations d’exonération liées au transfert de résidence lorsque plusieurs conditions sont remplies.",
          "Il est important de vérifier ces conditions avant d’accomplir les formalités fiscales afin de ne pas traiter le dossier comme une importation ordinaire par erreur.",
        ],
      },
      {
        title: "Organiser l’ordre des démarches",
        paragraphs: [
          "Installation personnelle, adresse en Espagne, ITV, fiscalité et DGT peuvent être interdépendantes. Préparer l’ordre des démarches évite les rendez-vous inutiles et les dossiers incomplets.",
        ],
      },
    ],
    related: [
      "immatriculer-voiture-francaise-espagne",
      "taxes-immatriculation-voiture-espagne",
      "s-installer-espagne-depuis-france",
    ],
    serviceHref: "/immatriculation-voiture-espagne",
    serviceLabel: "Organiser mon changement d’immatriculation",
  },

  {
    slug: "taxes-immatriculation-voiture-espagne",
    category: "Voiture",
    title: "Quelles taxes pour immatriculer une voiture française en Espagne ?",
    seoTitle: "Taxes immatriculation voiture Espagne : guide",
    description:
      "Impôt d’immatriculation, taxe municipale et transfert de résidence : comprendre la fiscalité d’une voiture française immatriculée en Espagne.",
    eyebrow: "Voiture · Fiscalité",
    intro:
      "La partie fiscale est souvent celle qui crée le plus de confusion dans une immatriculation espagnole. Il n’existe pas une taxe unique applicable de la même façon à tous les véhicules.",
    sections: [
      {
        title: "L’impôt lié à la première immatriculation en Espagne",
        paragraphs: [
          "Selon le véhicule et la situation, l’impôt spécial espagnol applicable à certains moyens de transport peut intervenir lors de la première immatriculation définitive en Espagne.",
          "Son traitement dépend notamment des caractéristiques du véhicule et des éventuelles situations d’exonération ou de non-assujettissement prévues par la réglementation.",
        ],
      },
      {
        title: "L’impôt municipal sur les véhicules",
        paragraphs: [
          "L’IVTM est un impôt municipal lié aux véhicules. Son montant et sa gestion dépendent de la commune compétente.",
        ],
      },
      {
        title: "Transfert de résidence : un cas à vérifier",
        paragraphs: [
          "Une personne qui transfère sa résidence habituelle en Espagne avec un véhicule qu’elle possédait et utilisait déjà à l’étranger peut, sous conditions, relever d’un régime fiscal spécifique.",
          "Les conditions doivent être vérifiées individuellement avant de considérer qu’une exonération s’applique.",
        ],
      },
      {
        title: "Ne pas confondre taxes et frais administratifs",
        paragraphs: [
          "Aux impôts peuvent s’ajouter les frais d’ITV, de documentation technique, les redevances administratives et les plaques. Le coût total d’une immatriculation ne correspond donc pas à une seule taxe.",
        ],
      },
    ],
    related: [
      "prix-immatriculation-voiture-espagne",
      "demenager-espagne-avec-voiture",
      "immatriculer-voiture-francaise-espagne",
    ],
    serviceHref: "/immatriculation-voiture-espagne",
    serviceLabel: "Étudier ma situation",
  },

  // ─────────────────────────────────────────────
  // INSTALLATION
  // ─────────────────────────────────────────────

  {
    slug: "s-installer-en-espagne",
    category: "Installation",
    title: "S’installer en Espagne : toutes les démarches pour un Français",
    seoTitle: "S’installer en Espagne : démarches pour les Français",
    description:
      "NIE, enregistrement, empadronamiento, santé et voiture : les principales démarches pour un Français qui souhaite s’installer en Espagne.",
    eyebrow: "Installation · Guide",
    intro:
      "S’installer en Espagne ne se résume pas à obtenir un NIE. Les démarches dépendent de la durée du séjour, de votre activité, de votre couverture santé et de votre situation personnelle.",
    sections: [
      {
        title: "Avant le départ : identifier votre situation",
        paragraphs: [
          "Salarié, indépendant, retraité, étudiant ou personne sans activité professionnelle : votre situation influence les justificatifs et formalités nécessaires.",
          "Avant de remplir des formulaires, il est donc préférable de construire un parcours adapté à votre cas.",
        ],
      },
      {
        title: "Le NIE",
        paragraphs: [
          "Le NIE sert de numéro d’identification dans vos relations avec l’administration espagnole. Il intervient dans de nombreuses démarches mais ne doit pas être confondu avec l’enregistrement de résidence.",
        ],
      },
      {
        title: "L’enregistrement pour un séjour durable",
        paragraphs: [
          "Les citoyens de l’Union européenne qui s’installent en Espagne au-delà de la période prévue par les règles de libre circulation peuvent être soumis à une obligation d’enregistrement.",
          "Les justificatifs demandés dépendent notamment de la situation professionnelle, des ressources et de la couverture santé.",
        ],
      },
      {
        title: "L’empadronamiento",
        paragraphs: [
          "L’inscription au padrón municipal permet d’enregistrer votre résidence dans une commune espagnole. Elle intervient ensuite dans de nombreuses démarches locales ou administratives.",
        ],
      },
      {
        title: "Santé, véhicule et autres démarches",
        paragraphs: [
          "Selon votre situation, il faudra également organiser votre couverture santé, éventuellement l’immatriculation de votre voiture et d’autres formalités administratives liées à votre installation.",
        ],
      },
    ],
    related: [
      "s-installer-espagne-depuis-france",
      "vivre-espagne-plus-trois-mois",
      "empadronamiento-espagne",
      "sante-espagne-francais",
    ],
    serviceHref: "/installation-espagne",
    serviceLabel: "Organiser mon installation",
  },

  {
    slug: "empadronamiento-espagne",
    category: "Installation",
    title: "Empadronamiento en Espagne : à quoi sert-il et comment l’obtenir ?",
    seoTitle: "Empadronamiento Espagne : guide pour les Français",
    description:
      "Qu’est-ce que l’empadronamiento en Espagne ? Découvrez à quoi sert le padrón municipal et comment préparer cette démarche.",
    eyebrow: "Installation · Padrón",
    intro:
      "Le mot revient rapidement lorsqu’on s’installe en Espagne : empadronamiento. Il s’agit de l’inscription au registre des habitants de la commune dans laquelle vous résidez.",
    sections: [
      {
        title: "À quoi sert l’empadronamiento ?",
        paragraphs: [
          "Le padrón municipal permet à la commune d’enregistrer les personnes qui résident sur son territoire.",
          "Le justificatif d’inscription peut ensuite être demandé dans différentes démarches administratives.",
        ],
      },
      {
        title: "Où effectuer la démarche ?",
        paragraphs: [
          "L’empadronamiento relève de la commune de résidence. Les modalités pratiques, rendez-vous et documents demandés peuvent donc varier d’un ayuntamiento à l’autre.",
        ],
      },
      {
        title: "Quels justificatifs peuvent être nécessaires ?",
        paragraphs: [
          "Il faut généralement pouvoir justifier son identité ainsi que son lien avec le logement dans lequel on réside. Les documents précis acceptés sont déterminés par la commune.",
        ],
      },
      {
        title: "Empadronamiento, NIE et résidence",
        paragraphs: [
          "Ces trois notions ne sont pas interchangeables. Le padrón concerne l’inscription municipale, le NIE est un numéro d’identification et les formalités de résidence répondent à un autre cadre.",
        ],
      },
    ],
    related: [
      "s-installer-en-espagne",
      "nie-ou-residence-espagne",
      "vivre-espagne-plus-trois-mois",
    ],
    serviceHref: "/installation-espagne",
    serviceLabel: "Préparer mes démarches",
  },

  {
    slug: "vivre-espagne-plus-trois-mois",
    category: "Installation",
    title: "Vivre en Espagne plus de 3 mois : quelles démarches ?",
    seoTitle: "Vivre en Espagne plus de 3 mois : démarches",
    description:
      "Vous êtes Français et souhaitez vivre en Espagne plus de trois mois ? Enregistrement, NIE, ressources, santé et empadronamiento.",
    eyebrow: "Installation · + de 3 mois",
    intro:
      "En tant que citoyen français, vous bénéficiez de la libre circulation dans l’Union européenne. Une installation de plus longue durée implique néanmoins des formalités spécifiques en Espagne.",
    sections: [
      {
        title: "Le principe pour les citoyens de l’Union européenne",
        paragraphs: [
          "Pour un séjour supérieur à trois mois, les citoyens de l’Union peuvent être tenus de s’enregistrer auprès des autorités espagnoles compétentes.",
          "Cette formalité ne doit pas être confondue avec la simple attribution d’un NIE.",
        ],
      },
      {
        title: "Les conditions dépendent de votre situation",
        paragraphs: [
          "Les justificatifs ne sont pas identiques pour un salarié, un indépendant, un étudiant, un retraité ou une personne disposant de ressources propres.",
          "La couverture santé et, dans certaines situations, la preuve de ressources suffisantes peuvent notamment intervenir.",
        ],
      },
      {
        title: "L’adresse en Espagne",
        paragraphs: [
          "L’installation implique également des démarches liées à votre commune de résidence, notamment l’inscription au padrón lorsque les conditions sont réunies.",
        ],
      },
      {
        title: "Préparer le parcours dans le bon ordre",
        paragraphs: [
          "Plusieurs démarches peuvent dépendre les unes des autres. Identifier les justificatifs dont vous disposez avant de demander des rendez-vous permet d’éviter une grande partie des blocages.",
        ],
      },
    ],
    related: [
      "s-installer-en-espagne",
      "empadronamiento-espagne",
      "installation-espagne-salarie-independant-retraite",
    ],
    serviceHref: "/installation-espagne",
    serviceLabel: "Organiser mon installation",
  },

  {
    slug: "s-installer-espagne-depuis-france",
    category: "Installation",
    title: "S’installer en Espagne depuis la France : par où commencer ?",
    seoTitle: "S’installer en Espagne depuis la France : démarches",
    description:
      "Vous préparez votre déménagement en Espagne depuis la France ? Découvrez quelles démarches anticiper avant votre départ.",
    eyebrow: "Installation · France → Espagne",
    intro:
      "Le meilleur moment pour organiser une installation en Espagne n’est pas nécessairement après avoir posé ses valises. Plusieurs vérifications peuvent être faites depuis la France.",
    sections: [
      {
        title: "1. Définir votre statut en Espagne",
        paragraphs: [
          "Votre parcours administratif dépend d’abord de votre situation : emploi, activité indépendante, retraite, études ou absence d’activité professionnelle.",
        ],
      },
      {
        title: "2. Identifier les documents à récupérer en France",
        paragraphs: [
          "Certaines pièces liées à votre situation professionnelle, à votre couverture sociale, à votre véhicule ou à votre état civil sont plus simples à obtenir avant le départ.",
        ],
      },
      {
        title: "3. Préparer le NIE si nécessaire",
        paragraphs: [
          "Selon la raison pour laquelle vous avez besoin d’un NIE et le circuit disponible, il peut être pertinent d’en préparer la demande avant l’installation.",
        ],
      },
      {
        title: "4. Organiser les démarches à l’arrivée",
        paragraphs: [
          "Adresse, padrón, éventuel enregistrement de résidence, couverture santé et démarches liées au véhicule doivent être organisés en fonction de votre situation réelle.",
        ],
      },
    ],
    related: [
      "s-installer-en-espagne",
      "nie-depuis-france",
      "demenager-espagne-avec-voiture",
    ],
    serviceHref: "/installation-espagne",
    serviceLabel: "Préparer mon départ",
  },

  {
    slug: "sante-espagne-francais",
    category: "Installation",
    title: "Santé en Espagne quand on vient de France : que faut-il prévoir ?",
    seoTitle: "Santé en Espagne pour un Français qui s’installe",
    description:
      "Vous vous installez en Espagne depuis la France ? Comprendre les principales questions de couverture santé selon votre situation.",
    eyebrow: "Installation · Santé",
    intro:
      "La carte européenne d’assurance maladie est très utile lors d’un séjour temporaire, mais une installation durable soulève d’autres questions. La bonne démarche dépend surtout de votre statut.",
    sections: [
      {
        title: "Séjour temporaire ou installation ?",
        paragraphs: [
          "La couverture applicable lors d’un séjour temporaire ne doit pas être automatiquement assimilée à celle d’une personne qui transfère sa résidence habituelle en Espagne.",
        ],
      },
      {
        title: "Salarié ou indépendant en Espagne",
        paragraphs: [
          "Une activité professionnelle en Espagne peut entraîner une affiliation au système espagnol selon les règles applicables à votre situation.",
        ],
      },
      {
        title: "Retraité ou situation transfrontalière",
        paragraphs: [
          "Certaines personnes relevant d’un autre État européen peuvent disposer de mécanismes de coordination spécifiques, notamment selon leur situation de pension ou d’assurance.",
          "Les documents nécessaires doivent être vérifiés auprès des organismes compétents avant l’installation.",
        ],
      },
      {
        title: "Pourquoi traiter la santé avec le reste du dossier ?",
        paragraphs: [
          "La couverture santé peut également intervenir dans certaines formalités de séjour. Elle doit donc être examinée en même temps que votre statut et non comme une démarche isolée.",
        ],
      },
    ],
    related: [
      "s-installer-en-espagne",
      "vivre-espagne-plus-trois-mois",
      "installation-espagne-salarie-independant-retraite",
    ],
    serviceHref: "/installation-espagne",
    serviceLabel: "Organiser mes démarches",
  },

  {
    slug: "installation-espagne-salarie-independant-retraite",
    category: "Installation",
    title: "Salarié, indépendant ou retraité : quelles démarches pour vivre en Espagne ?",
    seoTitle: "Vivre en Espagne : salarié, indépendant ou retraité",
    description:
      "Les démarches pour s’installer en Espagne varient selon votre statut. Découvrez les principales différences pour un Français.",
    eyebrow: "Installation · Votre situation",
    intro:
      "Deux Français qui déménagent le même jour dans la même ville espagnole peuvent avoir des dossiers administratifs différents. Le statut de chacun détermine une partie des justificatifs à présenter.",
    sections: [
      {
        title: "Vous êtes salarié",
        paragraphs: [
          "Une activité salariée en Espagne permet généralement de justifier votre situation professionnelle dans les formalités où celle-ci doit être établie.",
          "Les démarches sociales et administratives doivent être coordonnées avec votre prise d’emploi.",
        ],
      },
      {
        title: "Vous êtes indépendant",
        paragraphs: [
          "Une activité indépendante implique ses propres formalités professionnelles et sociales. La preuve de votre situation peut également intervenir dans votre parcours de résidence.",
        ],
      },
      {
        title: "Vous êtes retraité",
        paragraphs: [
          "Pour un retraité venant de France, les questions de ressources et de couverture santé doivent être examinées avec attention, notamment dans le cadre de la coordination européenne.",
        ],
      },
      {
        title: "Vous n’exercez pas d’activité",
        paragraphs: [
          "Une personne sans activité professionnelle peut devoir démontrer qu’elle remplit les conditions applicables à son séjour, notamment concernant les ressources et la couverture santé.",
        ],
      },
      {
        title: "La bonne démarche commence par le bon statut",
        paragraphs: [
          "Avant de réserver des rendez-vous ou de remplir des formulaires, il faut donc identifier le cadre qui correspond réellement à votre situation.",
        ],
      },
    ],
    related: [
      "s-installer-en-espagne",
      "vivre-espagne-plus-trois-mois",
      "sante-espagne-francais",
    ],
    serviceHref: "/installation-espagne",
    serviceLabel: "Identifier mes démarches",
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(slugs: string[]) {
  return slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is Guide => Boolean(guide));
}