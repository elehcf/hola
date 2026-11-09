import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import AmendeForm from "../components/AmendeForm";

export const metadata: Metadata = {
  title: "Amende en Espagne : payer ou contester ? Analyse gratuite",

  description:
    "Amende DGT, radar ou mairie reçue d’Espagne ? Envoyez-nous la photo : analyse gratuite sous 24 h, puis nous rédigeons et déposons vos allégations en espagnol, en votre nom. En français.",

  alternates: {
    canonical: "/amende-espagne",
  },

  openGraph: {
    title: "Contester une amende reçue d’Espagne | holÀ!",
    description:
      "Radar, DGT, ZBE, voiture de location : on vous dit en 24 h s’il vaut mieux payer avec 50 % de réduction ou contester, et on s’occupe du recours.",
    url: "/amende-espagne",
  },
};

const etapes = [
  {
    titre: "Vous envoyez l’amende",
    texte:
      "Une photo du courrier (recto et verso) via le formulaire. Pas besoin de comprendre l’espagnol administratif.",
  },
  {
    titre: "Analyse gratuite en 24 h",
    texte:
      "Nous vérifions la notification, les délais, la photo, la signalisation et l’identification du conducteur. Verdict clair : payer avec réduction ou contester.",
  },
  {
    titre: "Nous rédigeons vos allégations",
    texte:
      "En espagnol, avec les arguments propres à votre dossier, pas un modèle générique. Vous validez avant tout dépôt.",
  },
  {
    titre: "Nous les déposons en votre nom",
    texte:
      "Grâce à une autorisation de représentation, vous n’avez pas à vous déplacer en Espagne. Nous suivons la réponse de l’administration.",
  },
  {
    titre: "Recours si nécessaire",
    texte:
      "Si les allégations sont rejetées, nous préparons le recours de reposición. Pour aller au tribunal, nous vous orientons vers un avocat.",
  },
];

const motifs = [
  {
    titre: "Erreur de véhicule ou de plaque",
    texte:
      "Plaque mal lue, véhicule d’une autre marque, voiture vendue avant la date de l’infraction : ces erreurs arrivent, y compris entre pays.",
  },
  {
    titre: "Notification irrégulière ou tardive",
    texte:
      "Courrier envoyé à une mauvaise adresse, délais de prescription dépassés (3 mois pour une infraction légère, 6 mois pour une grave ou très grave).",
  },
  {
    titre: "Photo du radar insuffisante",
    texte:
      "Des tribunaux espagnols ont annulé des amendes de radar fixe quand l’administration ne produisait pas les images prévues pour identifier le véhicule.",
  },
  {
    titre: "Conducteur mal identifié",
    texte:
      "Voiture prêtée, voiture de location, conducteur différent du titulaire : l’amende doit viser la bonne personne, dans les formes et les délais.",
  },
  {
    titre: "Signalisation absente ou contradictoire",
    texte:
      "Limitation non signalée, panneau caché, zone à faibles émissions (ZBE) mal indiquée à l’entrée de la ville.",
  },
  {
    titre: "Marge d’erreur du radar",
    texte:
      "Les cinémomètres ont des marges d’erreur légales. Une vitesse retenue sans en tenir compte peut changer le montant, voire la qualification.",
  },
];

const faq = [
  {
    q: "J’ai reçu une amende d’Espagne en France, est-ce une vraie ?",
    r: "Les amendes espagnoles arrivent par courrier, en espagnol, au titulaire de la carte grise identifié grâce à l’échange européen d’informations entre pays. Méfiez-vous des SMS ou e-mails qui demandent de payer via un lien : envoyez-nous le document, nous vérifions.",
  },
  {
    q: "Combien de temps ai-je pour contester une amende en Espagne ?",
    r: "Pour une amende de la DGT, vous disposez de 20 jours naturels à compter du lendemain de la notification pour présenter des allégations. C’est aussi le délai pour payer avec 50 % de réduction. Si l’administration rejette vos allégations, le recours de reposición se présente dans un délai d’un mois.",
  },
  {
    q: "Vaut-il mieux payer avec 50 % de réduction ou contester ?",
    r: "Les deux options s’excluent : payer avec la réduction vaut renonciation aux allégations, et contester fait perdre la réduction. Si la contestation échoue, vous payez 100 %. C’est pour cela que nous analysons d’abord votre amende gratuitement : quand payer est la meilleure option, nous vous le disons.",
  },
  {
    q: "Que se passe-t-il si je ne paie pas une amende espagnole ?",
    r: "L’amende devient exécutoire et peut être majorée. Au-delà de 70 €, une sanction pécuniaire peut aussi être transmise aux autorités françaises pour recouvrement, dans le cadre de la reconnaissance mutuelle des sanctions entre pays de l’Union européenne. Ignorer le courrier n’est donc pas une solution.",
  },
  {
    q: "Dois-je me déplacer en Espagne ou parler espagnol ?",
    r: "Non. Les allégations peuvent être présentées par une personne que vous autorisez à agir en votre nom. Vous signez une autorisation de représentation, nous rédigeons et déposons le dossier en espagnol, et nous vous tenons informé en français.",
  },
  {
    q: "J’avais loué une voiture : pourquoi l’amende arrive-t-elle si tard ?",
    r: "Le loueur reçoit d’abord l’amende, indique à l’administration qui conduisait, puis une nouvelle notification vous est adressée. Le loueur facture souvent des frais de gestion à part. Les délais pour contester courent à partir de la notification qui vous est faite à vous.",
  },
  {
    q: "Vous traitez quelles amendes ?",
    r: "Les amendes de la DGT (radars, excès de vitesse, téléphone, ceinture…), du Servei Català de Trànsit en Catalogne, de Trafikoa au Pays basque, et celles des mairies (zones à faibles émissions de Madrid ou Barcelone, stationnement, police locale).",
  },
  {
    q: "Faut-il un avocat ?",
    r: "Pas pour la phase administrative (allégations et recours de reposición). Si le dossier doit aller devant le juge, l’assistance d’un avocat devient nécessaire : nous vous orientons alors vers un avocat et lui transmettons le dossier.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Contester une amende reçue d’Espagne",
      serviceType: "Contestation d’amende de circulation en Espagne",
      provider: { "@type": "Organization", name: "holÀ!", url: "https://www.holaespagne.fr" },
      areaServed: [
        { "@type": "Country", name: "Espagne" },
        { "@type": "Country", name: "France" },
      ],
      availableLanguage: ["fr", "es"],
      url: "https://www.holaespagne.fr/amende-espagne",
      offers: [
        { "@type": "Offer", name: "Analyse de l’amende", price: "0", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Rédaction et dépôt des allégations", price: "79", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Recours de reposición", price: "99", priceCurrency: "EUR" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.r },
      })),
    },
  ],
};

export default function AmendeEspagne() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeader />

      {/* HERO */}
      <section className="px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:px-16 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">
            Amende · Radar · DGT · ZBE
          </p>

          <h1
            className="mt-6 max-w-5xl text-5xl leading-[0.92] sm:text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Une amende d’Espagne ?
            <br />
            <span className="italic text-blood">Ne payez pas encore.</span>
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-navy/70">
              Envoyez-nous la photo du courrier. En 24 h, nous vous disons
              gratuitement s’il vaut mieux payer avec 50 % de réduction ou
              contester. Si le recours tient la route, nous rédigeons vos
              allégations en espagnol et les déposons en votre nom. Vous
              n’avez rien à faire en Espagne.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-self-end">
              <a
                href="#analyse"
                className="inline-block bg-blood px-6 py-3 text-xs uppercase tracking-[0.12em] text-ivory transition-transform hover:-translate-y-0.5"
              >
                Analyser mon amende gratuitement →
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-navy/20 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>20 jours</p>
              <p className="mt-2 text-sm text-navy/60">naturels pour contester une amende DGT après la notification</p>
            </div>
            <div>
              <p className="text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>- 50 %</p>
              <p className="mt-2 text-sm text-navy/60">si vous payez dans ce délai, mais vous renoncez alors à contester</p>
            </div>
            <div>
              <p className="text-4xl" style={{ fontFamily: "var(--font-editorial)" }}>0 €</p>
              <p className="mt-2 text-sm text-navy/60">pour l’analyse de votre amende, réponse sous 24 h ouvrées</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="bg-navy px-6 py-20 text-ivory sm:px-8 md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Comment ça marche</p>
          <h2
            className="mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            De la photo du courrier
            <br />
            <span className="italic">au recours déposé.</span>
          </h2>

          <div className="mt-14 grid gap-x-12 md:grid-cols-2">
            {etapes.map((e, i) => (
              <div key={e.titre} className="border-t border-ivory/25 py-7">
                <span className="text-sm text-blood">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-3xl" style={{ fontFamily: "var(--font-editorial)" }}>
                  {e.titre}
                </h3>
                <p className="mt-3 max-w-md text-ivory/60">{e.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYER OU CONTESTER */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blood">Le vrai calcul</p>
          </div>
          <div>
            <h2
              className="max-w-3xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              Payer ou contester une amende en Espagne ?
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-navy/70">
              En Espagne, payer une amende de la DGT dans les 20 jours naturels
              donne droit à une réduction de 50 %. Mais payer avec réduction
              vaut renonciation aux allégations, et contester fait perdre la
              réduction : si le recours échoue, vous payez le montant entier.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">
              Exemple : pour une amende de 200 €, payer tout de suite coûte
              100 €. Contester n’a de sens que si le dossier présente un vrai
              défaut. C’est exactement ce que nous vérifions avant de vous
              conseiller, et quand payer est la meilleure option, nous vous
              le disons.
            </p>
            <div className="mt-10 border-l-2 border-blood pl-6">
              <p className="max-w-xl text-2xl italic" style={{ fontFamily: "var(--font-editorial)" }}>
                Le réflexe à avoir : ne rien payer avant d’avoir fait vérifier l’amende, mais ne pas laisser passer les 20 jours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOTIFS */}
      <section className="bg-[#EEE8DE] px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Ce que nous vérifions</p>
          <h2
            className="mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Les motifs qui peuvent faire
            <br />
            <span className="italic text-blood">annuler une amende.</span>
          </h2>
          <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {motifs.map((m) => (
              <div key={m.titre} className="border-t border-navy/20 pt-6">
                <h3 className="text-2xl" style={{ fontFamily: "var(--font-editorial)" }}>
                  {m.titre}
                </h3>
                <p className="mt-4 leading-relaxed text-navy/65">{m.texte}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-3xl text-sm leading-relaxed text-navy/55">
            Aucun recours n’est gagné d’avance et nous ne promettons pas
            d’annulation. holÀ! est un service d’accompagnement administratif,
            pas un cabinet d’avocats : nous intervenons dans la phase
            administrative et vous orientons vers un avocat si le dossier doit
            aller devant le juge.
          </p>
        </div>
      </section>

      {/* PRIX */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Prix annoncés avant de commencer</p>
          <div className="mt-10 grid gap-px bg-navy/15 md:grid-cols-3">
            {[
              ["Analyse", "Gratuit", "Lecture de l’amende, vérification des délais et des motifs, conseil : payer ou contester."],
              ["Allégations", "79 €", "Rédaction en espagnol, autorisation de représentation, dépôt et suivi de la réponse."],
              ["Recours de reposición", "99 €", "Si les allégations sont rejetées : nouveau recours dans le délai d’un mois."],
            ].map(([titre, prix, texte]) => (
              <div key={titre} className="bg-ivory p-8">
                <p className="text-sm uppercase tracking-[0.15em] text-navy/60">{titre}</p>
                <p className="mt-4 text-5xl" style={{ fontFamily: "var(--font-editorial)" }}>{prix}</p>
                <p className="mt-4 leading-relaxed text-navy/65">{texte}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy/55">
            Sans abonnement ni renouvellement automatique. Vous payez uniquement le dossier que vous nous confiez.
          </p>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="analyse" className="scroll-mt-8 px-0 pb-16 sm:px-8 sm:pb-24 md:px-16">
        <div className="mx-auto max-w-4xl">
          <AmendeForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24 sm:px-8 md:px-16 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-blood">Questions fréquentes</p>
          <h2
            className="mt-5 text-4xl leading-[0.98] sm:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Amende reçue d’Espagne : vos questions
          </h2>
          <div className="mt-12">
            {faq.map((item) => (
              <details key={item.q} className="group border-t border-navy/20 py-6">
                <summary className="cursor-pointer list-none text-xl md:text-2xl" style={{ fontFamily: "var(--font-editorial)" }}>
                  {item.q}
                  <span className="ml-3 text-blood transition-transform group-open:rotate-45 inline-block">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-navy/70">{item.r}</p>
              </details>
            ))}
          </div>
          <p className="mt-12 text-navy/60">
            Vous vous installez en Espagne avec votre voiture ?{" "}
            <Link href="/immatriculation-voiture-espagne" className="border-b border-navy/30 pb-1 hover:text-blood">
              Voir l’immatriculation en Espagne →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
