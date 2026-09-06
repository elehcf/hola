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
  sources?: { label: string; href: string }[];
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
      "Achat immobilier, travail, fiscalité… Le NIE apparaît très vite dès que l’on a quelque chose à faire en Espagne. À quoi sert-il, où le demander et quels documents préparer ? On reprend tout depuis le début.",
    sections: [
      {
        title: "Le NIE, c’est quoi exactement ?",
        paragraphs: [
          "Le NIE, ou Número de Identidad de Extranjero, est un numéro personnel attribué aux étrangers qui ont des intérêts économiques, professionnels ou sociaux en Espagne.",
          "Il permet de vous identifier dans de nombreuses démarches espagnoles. En revanche, avoir un NIE ne signifie pas que vous êtes résident en Espagne.",
        ],
      },
      {
        title: "Quand a-t-on besoin d’un NIE ?",
        paragraphs: [
          "Un NIE peut notamment être nécessaire pour acheter un bien immobilier, effectuer certaines démarches fiscales ou professionnelles ou réaliser différentes formalités en Espagne.",
          "La raison pour laquelle vous le demandez compte : elle doit pouvoir être expliquée et, selon votre cas, justifiée par des documents.",
        ],
      },
      {
        title: "Quels documents faut-il préparer ?",
        paragraphs: [
          "Il n’existe pas un dossier absolument identique pour tout le monde. Les pièces à fournir dépendent notamment du motif de votre demande et de l’endroit où vous la déposez.",
        ],
        bullets: [
          "Le formulaire EX-15 correctement rempli.",
          "Un document d’identité en cours de validité.",
          "Les justificatifs correspondant à la raison de votre demande.",
          "Le justificatif de paiement de la taxe, lorsqu’il est demandé.",
        ],
      },
      {
        title: "Où demander son NIE ?",
        paragraphs: [
          "La demande peut se faire en Espagne auprès de l’autorité compétente. Dans certains cas, elle peut aussi passer par un consulat espagnol à l’étranger.",
          "Si vous êtes encore en France, mieux vaut vérifier d’abord quelle solution est possible dans votre cas et si le consulat compétent propose actuellement ce service. Cela évite de préparer le bon dossier pour le mauvais endroit.",
        ],
      },
      {
        title: "NIE et résidence : ce n’est pas la même chose",
        paragraphs: [
          "Le NIE est un numéro d’identification. À lui seul, il ne vous donne pas le statut de résident en Espagne.",
          "Si vous partez vivre en Espagne, d’autres démarches peuvent donc être nécessaires en fonction de la durée de votre séjour et de votre situation.",
        ],
      },
    ],
    related: [
      "nie-depuis-france",
      "nie-documents-ex15",
      "nie-ou-residence-espagne",
    ],
    serviceHref: "/nie-espagne",
    serviceLabel: "Me faire accompagner pour mon NIE",
  },

  {
    slug: "nie-depuis-france",
    category: "NIE",
    title: "Peut-on obtenir un NIE depuis la France ?",
    seoTitle: "Obtenir un NIE depuis la France : comment faire ?",
    description:
      "Peut-on demander un NIE sans être déjà installé en Espagne ? Les possibilités pour préparer ou effectuer la démarche depuis la France.",
    eyebrow: "NIE · France → Espagne",
    intro:
      "Vous avez besoin d’un NIE mais vous êtes encore en France ? Bonne nouvelle : selon votre situation, vous n’avez pas forcément besoin d’attendre d’être en Espagne pour commencer.",
    sections: [
      {
        title: "Peut-on demander un NIE depuis la France ?",
        paragraphs: [
          "Oui, dans certains cas. Une demande peut notamment passer par le consulat espagnol compétent en France, lorsque ce service y est proposé.",
          "Avant de préparer le dossier, vérifiez donc les modalités du consulat dont vous dépendez : les possibilités de dépôt et de rendez-vous peuvent varier.",
        ],
      },
      {
        title: "Pourquoi s’y prendre avant de partir ?",
        paragraphs: [
          "Si une autre démarche dépend de votre NIE, découvrir au dernier moment qu’il manque un document peut vite retarder le reste.",
          "Même lorsqu’une étape doit finalement être faite en Espagne, vous pouvez déjà vérifier le motif de votre demande et réunir une bonne partie des documents depuis la France.",
        ],
      },
      {
        title: "Faudra-t-il vous déplacer ?",
        paragraphs: [
          "Cela dépend de la façon dont la demande est faite. Certaines étapes peuvent nécessiter votre présence ; dans d’autres cas, une représentation peut être possible avec les documents nécessaires.",
          "Le bon réflexe est donc de vérifier ce point avant de réserver un trajet ou de préparer une procuration.",
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
      "Le dossier de NIE n’a rien d’insurmontable une fois que l’on sait quoi préparer. Les problèmes commencent surtout lorsqu’un formulaire est mal rempli, qu’un justificatif manque ou que la demande part au mauvais endroit.",
    sections: [
      {
        title: "Le formulaire EX-15",
        paragraphs: [
          "Le formulaire EX-15 est utilisé pour la demande de NIE. Il doit refléter votre situation et la raison réelle de votre demande.",
          "Avant de le remplir, mieux vaut donc savoir pourquoi vous demandez le NIE et où le dossier sera déposé.",
        ],
      },
      {
        title: "Votre pièce d’identité",
        paragraphs: [
          "Une pièce d’identité en cours de validité doit accompagner le dossier. Selon la façon dont vous faites la demande, les règles de présentation de l’original et des copies peuvent différer.",
        ],
      },
      {
        title: "La raison de votre demande",
        paragraphs: [
          "Le NIE est attribué lorsqu’il existe des intérêts économiques, professionnels ou sociaux en Espagne. Il faut donc pouvoir expliquer pourquoi vous en avez besoin et fournir, lorsque c’est nécessaire, un document qui le montre.",
        ],
      },
      {
        title: "Et la taxe ?",
        paragraphs: [
          "Une taxe administrative est liée à la démarche. Le formulaire de paiement et la façon de la régler doivent correspondre à la procédure que vous suivez.",
          "Mieux vaut vérifier les modalités au moment de préparer le dossier plutôt que de se fier à un ancien montant ou à un formulaire trouvé en ligne plusieurs mois auparavant.",
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
      "C’est une confusion très fréquente : avoir un NIE et être enregistré comme résident en Espagne, ce n’est pas la même chose. Et l’empadronamiento est encore autre chose.",
    sections: [
      {
        title: "Le NIE est d’abord un numéro",
        paragraphs: [
          "Le NIE est le numéro qui permet d’identifier un étranger dans ses relations avec l’administration espagnole.",
          "Vous pouvez donc avoir besoin d’un NIE sans pour autant partir vivre en Espagne : pour un achat immobilier, par exemple.",
        ],
      },
      {
        title: "Si vous partez vivre en Espagne",
        paragraphs: [
          "Pour un citoyen de l’Union européenne qui s’installe en Espagne plus de trois mois, une démarche d’enregistrement peut être nécessaire.",
          "Les documents à présenter ne sont pas les mêmes pour tout le monde : ils dépendent notamment de votre activité, de vos ressources et de votre couverture santé.",
        ],
      },
      {
        title: "Et l’empadronamiento dans tout ça ?",
        paragraphs: [
          "L’empadronamiento est votre inscription auprès de la commune espagnole où vous résidez.",
          "Vous avez donc trois notions différentes : un numéro d’identification, une inscription municipale et, lorsque votre situation l’exige, une démarche liée à votre résidence en Espagne.",
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
      "Vous partez vivre en Espagne et votre voiture française vient avec vous ? Pour obtenir des plaques espagnoles, plusieurs étapes s’enchaînent : documents, ITV, fiscalité puis DGT. Voici dans quel ordre les aborder.",
    sections: [
      {
        title: "1. Faire le point sur les papiers de la voiture",
        paragraphs: [
          "Commencez par vérifier les documents français du véhicule, la preuve que vous en êtes propriétaire et la documentation technique dont vous disposez.",
          "Un détail important : une voiture que vous possédez déjà depuis quelque temps n’est pas forcément traitée de la même manière qu’un véhicule que vous venez d’acheter à l’étranger.",
        ],
      },
      {
        title: "2. Réunir la documentation technique",
        paragraphs: [
          "Le certificat de conformité européen, lorsqu’il existe et correspond au véhicule, peut faire partie des documents utiles. Selon la voiture, une documentation technique complémentaire peut aussi être nécessaire.",
        ],
      },
      {
        title: "3. Passer l’ITV en Espagne",
        paragraphs: [
          "Pour immatriculer en Espagne une voiture provenant d’un autre pays de l’Union européenne, le véhicule passe par une station ITV espagnole afin d’obtenir la documentation technique nécessaire à l’immatriculation.",
          "Pour cette étape, pas de raccourci à distance : la voiture doit être présente.",
        ],
      },
      {
        title: "4. Régler la partie fiscale",
        paragraphs: [
          "Les taxes à prévoir dépendent du véhicule et de votre situation. Il faut donc déterminer ce qui s’applique à votre cas avant de payer quoi que ce soit.",
          "Si vous déménagez en Espagne avec une voiture que vous possédiez et utilisiez déjà, certaines règles spécifiques peuvent entrer en jeu lorsque les conditions sont remplies.",
        ],
      },
      {
        title: "5. Finaliser l’immatriculation auprès de la DGT",
        paragraphs: [
          "Une fois les étapes précédentes terminées, le dossier peut être présenté à la DGT pour obtenir l’immatriculation espagnole.",
          "Il reste ensuite à faire fabriquer les plaques et à disposer de l’assurance nécessaire pour circuler.",
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
    serviceLabel: "Me faire accompagner",
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
      "Il n’y a pas un tarif unique pour immatriculer une voiture française en Espagne. Entre l’ITV, les taxes, la DGT et les éventuels documents techniques, le total dépend réellement de votre véhicule et de votre situation.",
    sections: [
      {
        title: "Pourquoi le prix change d’une voiture à l’autre ?",
        paragraphs: [
          "Deux voitures françaises peuvent coûter des montants très différents à immatriculer. Les caractéristiques du véhicule, ses émissions, la fiscalité applicable, la commune et les documents déjà disponibles peuvent faire varier le total.",
        ],
      },
      {
        title: "Ce qu’il faut prévoir dans le budget",
        paragraphs: [
          "Selon votre dossier, plusieurs dépenses peuvent s’additionner :",
        ],
        bullets: [
          "Le passage à l’ITV.",
          "La documentation technique éventuellement nécessaire.",
          "Les taxes qui s’appliquent à votre situation.",
          "La redevance de la DGT.",
          "L’impôt municipal sur les véhicules, lorsqu’il s’applique.",
          "La fabrication des plaques.",
          "Les éventuels frais d’accompagnement ou de représentation.",
        ],
      },
      {
        title: "Vous déménagez en Espagne avec votre voiture ?",
        paragraphs: [
          "Si vous transférez votre résidence en Espagne avec une voiture que vous possédez et utilisez déjà, certaines règles fiscales spécifiques peuvent s’appliquer. Une exonération peut notamment être possible si toutes les conditions prévues sont remplies.",
          "C’est donc un point à vérifier avant de calculer le coût total.",
        ],
      },
      {
        title: "Méfiez-vous des prix universels",
        paragraphs: [
          "Un montant annoncé sans connaître la voiture ni la situation de son propriétaire ne raconte qu’une partie de l’histoire. Pour obtenir une estimation utile, il faut d’abord savoir quelles étapes et quelles taxes concernent réellement votre dossier.",
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
      "L’ITV est souvent présentée comme l’équivalent espagnol du contrôle technique. Mais lorsqu’on immatricule une voiture française en Espagne, elle a aussi un rôle dans la constitution du dossier technique espagnol.",
    sections: [
      {
        title: "Pourquoi faut-il passer par une ITV espagnole ?",
        paragraphs: [
          "Lors de l’immatriculation en Espagne d’un véhicule provenant d’un autre pays de l’Union européenne, le passage par l’ITV permet notamment d’établir la documentation technique espagnole nécessaire pour poursuivre la procédure.",
        ],
      },
      {
        title: "La voiture doit-elle être sur place ?",
        paragraphs: [
          "Oui. L’inspection porte sur le véhicule lui-même : votre voiture doit donc être présentée physiquement à la station ITV.",
        ],
      },
      {
        title: "Quels papiers faut-il apporter ?",
        paragraphs: [
          "Cela dépend du véhicule. Les documents français, la preuve de propriété et les éléments permettant d’établir ses caractéristiques techniques font partie des pièces importantes à vérifier avant le rendez-vous.",
        ],
      },
      {
        title: "Et si le contrôle technique français est encore valable ?",
        paragraphs: [
          "Un contrôle technique français encore valable ne remplace pas nécessairement les formalités techniques requises pour établir les documents nécessaires à une première immatriculation espagnole.",
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
      "Vous déménagez en Espagne et la voiture vient avec les cartons. Rien de plus logique. Côté administratif, en revanche, mieux vaut préparer quelques éléments avant de quitter la France.",
    sections: [
      {
        title: "Avant de partir, vérifiez vos papiers",
        paragraphs: [
          "Assurez-vous d’avoir les documents originaux du véhicule et la documentation technique disponible. S’il manque quelque chose, il est souvent beaucoup plus simple de le récupérer pendant que vous êtes encore en France.",
        ],
      },
      {
        title: "Vous n’êtes pas simplement en train d’importer une voiture achetée",
        paragraphs: [
          "Si cette voiture vous appartient déjà, que vous l’utilisez en France et que vous l’emportez parce que vous transférez votre résidence en Espagne, votre situation peut être différente de celle d’une personne qui vient d’acheter un véhicule à l’étranger.",
        ],
      },
      {
        title: "Vérifiez les règles liées au transfert de résidence",
        paragraphs: [
          "La fiscalité espagnole prévoit, sous certaines conditions, une exonération liée au transfert de résidence.",
          "Ces conditions doivent être vérifiées avant de traiter la partie fiscale. Autrement dit : ne partez pas du principe que vous devez payer comme pour n’importe quelle importation, mais ne partez pas non plus du principe que vous êtes automatiquement exonéré.",
        ],
      },
      {
        title: "Dans quel ordre faire les démarches ?",
        paragraphs: [
          "Votre installation, votre adresse en Espagne, l’ITV, les formalités fiscales et la DGT peuvent se croiser. Mettre les étapes dans le bon ordre évite surtout les rendez-vous pris trop tôt et les dossiers auxquels il manque encore une pièce.",
        ],
      },
    ],
    related: [
      "immatriculer-voiture-francaise-espagne",
      "taxes-immatriculation-voiture-espagne",
      "s-installer-espagne-depuis-france",
    ],
    serviceHref: "/immatriculation-voiture-espagne",
    serviceLabel: "Organiser mon immatriculation",
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
      "C’est souvent la partie qui inquiète le plus : combien faut-il payer pour passer une voiture française en plaques espagnoles ? La réponse dépend du véhicule et de votre situation, car plusieurs taxes et frais différents peuvent entrer en jeu.",
    sections: [
      {
        title: "L’impôt de première immatriculation",
        paragraphs: [
          "Lors de la première immatriculation définitive d’un véhicule en Espagne, l’impôt spécial sur certains moyens de transport peut s’appliquer selon le véhicule et la situation.",
          "Le montant ou l’éventuelle exonération dépend notamment des caractéristiques de la voiture et des conditions prévues par la réglementation.",
        ],
      },
      {
        title: "L’IVTM, l’impôt municipal",
        paragraphs: [
          "L’IVTM est l’impôt municipal sur les véhicules. Comme son nom l’indique, il dépend de la commune concernée, notamment pour son montant et ses modalités.",
        ],
      },
      {
        title: "Vous transférez votre résidence en Espagne ?",
        paragraphs: [
          "Si vous arrivez en Espagne avec une voiture que vous possédiez et utilisiez déjà à l’étranger, un régime spécifique peut s’appliquer sous certaines conditions.",
          "Il faut vérifier que vous remplissez bien ces conditions avant de considérer la voiture comme exonérée.",
        ],
      },
      {
        title: "Taxes, ITV, DGT : ne mélangeons pas tout",
        paragraphs: [
          "Le prix total ne correspond pas à une seule taxe. Aux éventuels impôts peuvent s’ajouter l’ITV, la documentation technique, les frais administratifs de la DGT et les plaques.",
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
      "NIE, résidence, empadronamiento, santé et voiture : les principales démarches pour un Français qui souhaite s’installer en Espagne.",
    eyebrow: "Installation · Guide",
    intro:
      "S’installer en Espagne ne consiste pas simplement à obtenir un NIE et à faire ses valises. Résidence, padrón, santé, voiture… Les démarches dépendent surtout de votre situation. Voici comment y voir plus clair.",
    sections: [
      {
        title: "Avant de partir : commencez par votre situation",
        paragraphs: [
          "Vous partez comme salarié, indépendant, retraité, étudiant ou sans activité professionnelle ? La réponse change une partie des documents et des démarches dont vous aurez besoin.",
          "Avant de remplir quoi que ce soit, commencez donc par déterminer ce qui correspond réellement à votre cas.",
        ],
      },
      {
        title: "Le NIE",
        paragraphs: [
          "Le NIE est votre numéro d’identification en Espagne. Vous le retrouverez dans de nombreuses démarches administratives, mais il ne faut pas le confondre avec votre enregistrement comme résident.",
        ],
      },
      {
        title: "Si vous restez plus de trois mois",
        paragraphs: [
          "Pour un citoyen de l’Union européenne qui s’installe en Espagne plus de trois mois, une démarche d’enregistrement peut être nécessaire.",
          "Les documents à fournir dépendent notamment de votre activité, de vos ressources et de votre couverture santé.",
        ],
      },
      {
        title: "L’empadronamiento",
        paragraphs: [
          "L’empadronamiento est votre inscription auprès de la commune dans laquelle vous habitez. Il permet d’enregistrer votre adresse dans le padrón municipal et intervient ensuite dans différentes démarches.",
        ],
      },
      {
        title: "Et le reste ?",
        paragraphs: [
          "Selon votre situation, il faudra également régler la question de votre couverture santé, de votre voiture si vous l’emportez avec vous et d’autres formalités liées à votre installation.",
          "Le plus important n’est pas de tout faire en même temps, mais de savoir ce qui vous concerne et dans quel ordre le faire.",
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
      "Qu’est-ce que l’empadronamiento en Espagne ? À quoi sert le padrón municipal, où s’inscrire et quels documents préparer.",
    eyebrow: "Installation · Padrón",
    intro:
      "Vous venez d’arriver en Espagne et tout le monde vous parle d’empadronamiento ? Derrière ce mot un peu intimidant se cache quelque chose d’assez simple : votre inscription auprès de la commune où vous habitez.",
    sections: [
      {
        title: "À quoi sert l’empadronamiento ?",
        paragraphs: [
          "Le padrón municipal est le registre dans lequel la commune inscrit les personnes qui habitent sur son territoire.",
          "Une fois inscrit, vous pouvez obtenir un justificatif qui vous sera demandé dans différentes démarches administratives.",
        ],
      },
      {
        title: "Où faut-il s’inscrire ?",
        paragraphs: [
          "Auprès de la commune où vous résidez. Et c’est important, car les modalités de rendez-vous et les documents acceptés peuvent varier d’un ayuntamiento à l’autre.",
        ],
      },
      {
        title: "Quels documents faut-il prévoir ?",
        paragraphs: [
          "Vous devrez notamment pouvoir prouver votre identité et votre lien avec le logement dans lequel vous habitez. La liste précise des documents acceptés dépend de la commune.",
        ],
      },
      {
        title: "Padrón, NIE, résidence : trois choses différentes",
        paragraphs: [
          "L’empadronamiento concerne votre inscription dans la commune. Le NIE est votre numéro d’identification. Et les démarches liées à votre résidence en Espagne répondent encore à d’autres règles.",
          "Les trois peuvent se retrouver dans votre installation, mais ils ne se remplacent pas les uns les autres.",
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
      "Vous êtes Français et souhaitez vivre en Espagne plus de trois mois ? Résidence, NIE, ressources, santé et empadronamiento.",
    eyebrow: "Installation · + de 3 mois",
    intro:
      "Un Français peut bien sûr partir vivre en Espagne grâce à la libre circulation au sein de l’Union européenne. Mais au-delà de trois mois, s’installer implique certaines démarches supplémentaires.",
    sections: [
      {
        title: "Que se passe-t-il après trois mois ?",
        paragraphs: [
          "Si vous êtes citoyen de l’Union européenne et que vous vivez en Espagne plus de trois mois, vous pouvez être tenu de vous enregistrer auprès des autorités espagnoles compétentes.",
          "Cette démarche est différente du simple fait d’obtenir un NIE.",
        ],
      },
      {
        title: "Tout dépend ensuite de votre situation",
        paragraphs: [
          "Un salarié, un indépendant, un étudiant, un retraité et une personne sans activité ne présentent pas nécessairement les mêmes justificatifs.",
          "Selon votre cas, votre couverture santé et la preuve de ressources suffisantes peuvent notamment faire partie des éléments à prévoir.",
        ],
      },
      {
        title: "Et votre adresse en Espagne ?",
        paragraphs: [
          "Votre installation passe également par votre commune de résidence. L’inscription au padrón fait donc partie des démarches à regarder une fois votre adresse en Espagne établie.",
        ],
      },
      {
        title: "Le bon ordre vous évitera bien des allers-retours",
        paragraphs: [
          "Certaines démarches dépendent de documents obtenus à une étape précédente. Avant de multiplier les rendez-vous, vérifiez donc ce que vous avez déjà, ce qu’il vous manque et ce qui doit être fait en premier.",
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
      "Vous préparez votre déménagement en Espagne depuis la France ? Les démarches et documents à anticiper avant votre départ.",
    eyebrow: "Installation · France → Espagne",
    intro:
      "Le meilleur moment pour commencer les démarches d’une installation en Espagne ? Souvent, avant même d’avoir fait les cartons. Plusieurs vérifications et documents peuvent être préparés pendant que vous êtes encore en France.",
    sections: [
      {
        title: "1. Sachez sous quel statut vous partez",
        paragraphs: [
          "Salarié, indépendant, retraité, étudiant ou sans activité professionnelle : votre situation détermine une partie des démarches et des justificatifs dont vous aurez besoin en Espagne.",
        ],
      },
      {
        title: "2. Récupérez en France ce qui sera pénible à chercher après",
        paragraphs: [
          "Certains documents liés à votre travail, à votre protection sociale, à votre voiture ou à votre état civil sont plus faciles à obtenir avant le déménagement.",
          "Faire cette vérification avant de partir peut vous éviter quelques appels transfrontaliers une fois installé.",
        ],
      },
      {
        title: "3. Voyez si votre NIE peut déjà être préparé",
        paragraphs: [
          "Selon la raison pour laquelle vous avez besoin d’un NIE et la façon dont vous pouvez déposer la demande, il peut être utile de commencer à préparer le dossier depuis la France.",
        ],
      },
      {
        title: "4. Gardez pour l’arrivée ce qui doit attendre l’Espagne",
        paragraphs: [
          "Votre adresse, l’empadronamiento, votre éventuel enregistrement comme résident, la santé ou encore votre voiture devront ensuite être organisés selon votre situation.",
          "L’objectif n’est donc pas de tout terminer avant le départ. C’est d’arriver en sachant exactement ce qui vous attend.",
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
      "La carte européenne d’assurance maladie est bien connue pour les vacances. Pour une véritable installation en Espagne, c’est différent : votre couverture santé dépend avant tout de votre situation.",
    sections: [
      {
        title: "Vous partez quelques semaines ou vous vous installez ?",
        paragraphs: [
          "La couverture prévue pour un séjour temporaire ne doit pas être confondue avec celle d’une personne qui transfère sa résidence habituelle en Espagne.",
          "Avant de partir, commencez donc par déterminer dans quelle situation vous vous trouvez.",
        ],
      },
      {
        title: "Vous allez travailler en Espagne",
        paragraphs: [
          "Si vous exercez une activité salariée ou indépendante en Espagne, votre activité peut entraîner votre affiliation au système espagnol selon les règles qui s’appliquent à votre situation.",
        ],
      },
      {
        title: "Vous êtes retraité ou dans une situation transfrontalière",
        paragraphs: [
          "Les règles européennes prévoient des mécanismes de coordination entre les systèmes de protection sociale. Pour certains retraités ou certaines situations transfrontalières, des documents spécifiques peuvent donc entrer en jeu.",
          "Mieux vaut vérifier lesquels auprès des organismes compétents avant votre installation.",
        ],
      },
      {
        title: "Pourquoi régler la question de la santé assez tôt ?",
        paragraphs: [
          "Votre couverture santé n’est pas seulement une question de soins. Elle peut aussi faire partie des justificatifs nécessaires pour certaines démarches liées à votre installation.",
          "C’est donc un sujet à traiter avec votre statut de résidence, et non une fois tout le reste terminé.",
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
      "Les démarches pour s’installer en Espagne varient selon votre statut : salarié, indépendant, retraité ou sans activité.",
    eyebrow: "Installation · Votre situation",
    intro:
      "Deux Français peuvent déménager le même jour dans la même rue de Madrid et ne pas avoir exactement les mêmes papiers à préparer. La raison est simple : les démarches dépendent en partie de votre situation.",
    sections: [
      {
        title: "Vous êtes salarié",
        paragraphs: [
          "Si vous travaillez comme salarié en Espagne, votre emploi permet de justifier votre situation professionnelle dans les démarches où cette information est nécessaire.",
          "Il faut également coordonner votre installation avec les démarches sociales liées à votre prise de poste.",
        ],
      },
      {
        title: "Vous êtes indépendant",
        paragraphs: [
          "Si vous exercez à votre compte en Espagne, votre activité entraîne ses propres démarches professionnelles et sociales.",
          "Votre statut d’indépendant intervient aussi dans les documents permettant de justifier votre situation lors de certaines démarches de résidence.",
        ],
      },
      {
        title: "Vous êtes retraité",
        paragraphs: [
          "Si vous venez passer votre retraite en Espagne, deux sujets méritent une attention particulière : vos ressources et votre couverture santé.",
          "Les règles européennes de coordination peuvent également avoir une incidence sur les documents à préparer.",
        ],
      },
      {
        title: "Vous n’avez pas d’activité professionnelle",
        paragraphs: [
          "Vous pouvez également vous installer en Espagne sans y exercer d’activité. Dans ce cas, il peut notamment être nécessaire de justifier de ressources suffisantes et d’une couverture santé répondant aux conditions applicables.",
        ],
      },
      {
        title: "Avant les formulaires, votre situation",
        paragraphs: [
          "Le plus simple est donc de commencer par une question : sous quel statut vous installez-vous en Espagne ? Une fois cette réponse claire, il devient beaucoup plus facile de savoir quels documents préparer et quelles démarches vous concernent.",
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

const sourcesByCategory: Record<
  Guide["category"],
  { label: string; href: string }[]
> = {
  NIE: [
    {
      label:
        "Ministerio del Interior — Número de Identidad de Extranjero (NIE)",
      href: "https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-la-union-europea/numero-de-Identidad-de-extranjero-nie/",
    },
    {
      label: "Consulat général d’Espagne à Paris — NIE",
      href: "https://www.exteriores.gob.es/Consulados/paris/fr/ServiciosConsulares/Paginas/Consular/NIE.aspx",
    },
  ],

  Voiture: [
    {
      label:
        "DGT — Immatriculer un véhicule provenant de l’Union européenne",
      href: "https://www.dgt.es/nuestros-servicios/tu-vehiculo/quieres-traer-o-llevarte-un-vehiculo-del-extranjero/matricular-un-vehiculo-proveniente-de-la-ue/",
    },
    {
      label: "Agencia Tributaria — Première immatriculation d’un véhicule",
      href: "https://sede.agenciatributaria.gob.es/Sede/vehiculos-embarcaciones/primera-matriculacion-medios-transporte.html",
    },
  ],

  Installation: [
    {
      label: "Administración General del Estado — Résidence en Espagne",
      href: "https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/residencia/obtencion-residencia/info-general.html",
    },
    {
      label:
        "Administración General del Estado — Certificat d’enregistrement de citoyen de l’Union",
      href: "https://administracion.gob.es/pagFront/buscadoractuaciones/detalleActuacion.htm?codSia=994234&retorno=true",
    },
  ],
};

export function getGuide(slug: string) {
  const guide = guides.find((guide) => guide.slug === slug);

  if (!guide) {
    return undefined;
  }

  return {
    ...guide,
    sources: guide.sources ?? sourcesByCategory[guide.category],
  };
}

export function getRelatedGuides(slugs: string[]) {
  return slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is Guide => Boolean(guide));
}