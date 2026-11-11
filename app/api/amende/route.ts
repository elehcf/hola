import { Resend } from "resend";
import { esc } from "../demande/emails";

const FROM = "holÀ! <bonjour@holaespagne.fr>";
const SITE = "https://www.holaespagne.fr";
const MAX_BYTES = 4 * 1024 * 1024; // limite Vercel : 4,5 Mo par requête
const TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif", "application/pdf"];

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return Response.json(
        { error: "Le service d’envoi est momentanément indisponible." },
        { status: 503 }
      );
    }

    const form = await request.formData();
    const champ = (nom: string) => String(form.get(nom) ?? "").trim();

    // Honeypot anti-spam
    if (champ("website")) return Response.json({ success: true });

    const prenom = champ("prenom").slice(0, 80);
    const email = champ("email").slice(0, 160);
    const telephone = champ("telephone").slice(0, 40);
    const organisme = champ("organisme").slice(0, 80);
    const dateNotification = champ("dateNotification").slice(0, 20);
    const montant = champ("montant").slice(0, 20);
    const conducteur = champ("conducteur").slice(0, 80);
    const message = champ("message").slice(0, 3000);
    const consentement = champ("consentement");
    const origine = champ("origine").slice(0, 40);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Adresse e-mail invalide." }, { status: 400 });
    }
    if (!prenom || !consentement) {
      return Response.json({ error: "Informations manquantes." }, { status: 400 });
    }

    const fichier = form.get("fichier");
    let attachments: { filename: string; content: Buffer }[] = [];
    if (fichier instanceof File && fichier.size > 0) {
      if (fichier.size > MAX_BYTES) {
        return Response.json(
          { error: "Fichier trop lourd (4 Mo maximum). Envoyez une photo plus légère." },
          { status: 400 }
        );
      }
      if (fichier.type && !TYPES.includes(fichier.type)) {
        return Response.json(
          { error: "Format non accepté. Envoyez une photo (JPG, PNG) ou un PDF." },
          { status: 400 }
        );
      }
      const nom = fichier.name.replace(/[^\w.\-]+/g, "_").slice(-80) || "amende";
      attachments = [{ filename: nom, content: Buffer.from(await fichier.arrayBuffer()) }];
    }

    const reference = `amende-${Date.now().toString(36)}`;
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM,
      to: ["bonjour@holaespagne.fr"],
      replyTo: email,
      subject: `[AMENDE] ${montant ? `${montant} € · ` : ""}${organisme || "Organisme ?"} · ${prenom}${
        dateNotification ? ` · notifiée le ${dateNotification}` : ""
      }`,
      attachments,
      html: `
        <div style="max-width:680px;margin:0 auto;padding:32px 24px;font-family:Arial,sans-serif;color:#152238;line-height:1.6;">
          <p style="margin:0 0 12px;color:#8F1D2C;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">
            Analyse d’amende demandée
          </p>
          <p style="margin:0 0 20px;padding:14px 16px;background:#F4F0E8;">
            ⏱ Délai de 20 jours naturels à compter de la notification${
              dateNotification ? ` (reçue le <strong>${esc(dateNotification)}</strong>)` : ""
            }. Répondre sous 24 h.
          </p>
          ${row("Prénom", prenom)}
          ${row("E-mail", email)}
          ${telephone ? row("Téléphone", telephone) : ""}
          ${row("Organisme", organisme || "Non précisé")}
          ${row("Montant", montant ? `${montant} €` : "Non précisé")}
          ${row("Conducteur", conducteur || "Non précisé")}
          ${message ? row("Message", message) : ""}
          ${row("Pièce jointe", attachments.length ? attachments[0].filename : "Aucune (à demander)")}
          ${origine ? row("Origine", origine) : ""}
          ${row("Référence", reference)}
        </div>
      `,
    });

    if (error) {
      console.error(error);
      return Response.json({ error: "Impossible d’envoyer la demande." }, { status: 500 });
    }

    const { error: accuseError } = await resend.emails.send({
      from: FROM,
      to: [email],
      replyTo: "bonjour@holaespagne.fr",
      subject: "Votre amende espagnole : analyse en cours",
      html: `
        <div style="background:#F4F0E8;padding:32px 0;">
          <div style="max-width:600px;margin:0 auto;padding:36px 28px;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#152238;line-height:1.65;font-size:16px;">
            <p style="margin:0 0 28px;font-family:Georgia,serif;font-size:26px;">hol<span style="color:#8F1D2C;">À!</span></p>
            <p style="margin:0 0 16px;">Bonjour ${esc(prenom)},</p>
            <p style="margin:0 0 16px;">Votre amende est bien arrivée. Je l’analyse personnellement et je vous réponds <strong>sous 24 h ouvrées</strong> : faut-il payer avec la réduction de 50 % ou présenter des allégations, et pourquoi.</p>
            <p style="margin:0 0 16px;">L’analyse est gratuite et ne vous engage à rien.</p>
            <p style="margin:0 0 16px;"><strong>Important :</strong> ne payez pas l’amende avant notre réponse si vous envisagez de la contester. Payer avec la réduction vaut renonciation aux allégations.</p>
            ${
              attachments.length
                ? ""
                : `<p style="margin:0 0 16px;">Vous n’avez pas joint l’amende : répondez simplement à cet e-mail avec une photo lisible du courrier (recto et verso).</p>`
            }
            <p style="margin:34px 0 0;">À très vite,<br>Elena · holÀ!</p>
            <p style="margin:28px 0 0;padding-top:18px;border-top:1px solid #D8D3C9;font-size:12px;color:#15223899;">
              holÀ! · Vos démarches en Espagne, en français · <a href="${SITE}/amende-espagne" style="color:#15223899;">holaespagne.fr</a><br>
              Référence ${esc(reference)} · Vous recevez cet e-mail parce que vous avez envoyé une demande sur notre site.
            </p>
          </div>
        </div>`,
    });
    if (accuseError) console.error(accuseError);

    return Response.json({ success: true, reference });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Une erreur est survenue." }, { status: 500 });
  }
}

function row(label: string, value: unknown) {
  return `
    <div style="margin-bottom:14px;">
      <p style="margin:0 0 2px;color:#15223880;font-size:12px;">${esc(label)}</p>
      <p style="margin:0;white-space:pre-line;">${esc(value)}</p>
    </div>`;
}
