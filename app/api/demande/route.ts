import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const form = await request.json();

    const {
  demarche,
  localisation,
  raison,
  avancement,
  province,
  urgence,
  vehiculeSituation,
  installationStatut,
  nieMotif,
  prenom,
  email,
  telephone,
  consentement,
  website,
} = form;
const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
  String(email || "").trim()
);

if (!emailValide) {
  return Response.json(
    { error: "Adresse e-mail invalide." },
    { status: 400 }
  );
}
if (website) {
  return Response.json({ success: true });
}
    if (
      !demarche ||
      !localisation ||
      !raison ||
      !avancement ||
      !prenom ||
      !email
      || !consentement
    ) {
      return Response.json(
        { error: "Informations manquantes." },
        { status: 400 }
      );
    }
if (raison.length > 5000) {
  return Response.json(
    { error: "Message trop long." },
    { status: 400 }
  );
}
    const { error } = await resend.emails.send({
      from: "holÀ! <onboarding@resend.dev>",
      to: ["elenahcerra@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande holÀ! — ${demarche}`,

      html: `
        <div style="font-family: Arial, sans-serif; color: #152238; line-height: 1.6;">
          <h1>Nouvelle demande holÀ!</h1>

          <hr />

          <p><strong>Démarche</strong><br>${escapeHtml(demarche)}</p>
          <p><strong>Localisation</strong><br>${escapeHtml(localisation)}</p>
          <p><strong>Pourquoi cette démarche ?</strong><br>${escapeHtml(raison)}</p>
          <p><strong>Avancement</strong><br>${escapeHtml(avancement)}</p>
          <p>
  <strong>Ville / province concernée</strong><br>
  ${province ? escapeHtml(province) : "Non renseignée"}
</p>

<p>
  <strong>Urgence</strong><br>
  ${urgence ? escapeHtml(urgence) : "Non renseignée"}
</p>
${
  nieMotif
    ? `<p><strong>Motif du NIE</strong><br>${escapeHtml(nieMotif)}</p>`
    : ""
}

${
  vehiculeSituation
    ? `<p><strong>Situation du véhicule</strong><br>${escapeHtml(
        vehiculeSituation
      )}</p>`
    : ""
}

${
  installationStatut
    ? `<p><strong>Situation en Espagne</strong><br>${escapeHtml(
        installationStatut
      )}</p>`
    : ""
}

          <hr />

          <p><strong>Prénom</strong><br>${escapeHtml(prenom)}</p>
          <p><strong>E-mail</strong><br>${escapeHtml(email)}</p>
          <p>
            <strong>Téléphone</strong><br>
            ${telephone ? escapeHtml(telephone) : "Non renseigné"}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        { error: "Impossible d'envoyer la demande." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}