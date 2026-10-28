import { Resend } from "resend";
import { accuseReception, envoiChecklist, relancePartiel } from "./emails";

const FROM = "holÀ! <bonjour@holaespagne.fr>";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

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

    const resend = new Resend(apiKey);
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
      fiscalSituation,
      prenom,
      email,
      telephone,
      consentement,
      website,
    } = form;

    // Honeypot anti-spam
    if (website) {
      return Response.json({ success: true });
    }

    const emailNettoye = String(email || "").trim();
    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNettoye);

    if (!emailValide) {
      return Response.json(
        { error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    // Lead partiel : envoyé dès l'étape 1 (démarche + prénom + e-mail),
    // ou téléchargement de la checklist (type "checklist").
    if (form.etape === "partiel") {
      const isChecklist = form.type === "checklist";

      const { error: partielError } = await resend.emails.send({
        from: FROM,
        to: ["bonjour@holaespagne.fr"],
        replyTo: emailNettoye,
        subject: `${isChecklist ? "[CHECKLIST]" : "[PARTIEL]"} ${String(demarche || "Démarche")} · ${String(prenom || "")}`,
        html: `
          <div style="max-width: 680px; margin: 0 auto; padding: 32px 24px; font-family: Arial, sans-serif; color: #152238; line-height: 1.6;">
            <p style="margin: 0 0 12px; color: #8F1D2C; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
              ${isChecklist ? "Checklist téléchargée" : "Demande commencée (étape 1)"}
            </p>
            ${infoRow("Démarche", demarche)}
            ${infoRow("Prénom", prenom)}
            ${infoRow("E-mail", emailNettoye)}
            ${infoRow("Référence", form.leadId)}
            <p style="margin-top: 24px; font-size: 14px; color: #15223899;">
              ${
                isChecklist
                  ? "La checklist lui a été envoyée automatiquement par e-mail."
                  : "Une relance automatique partira dans 24 h si la demande n’est pas terminée d’ici là."
              }
            </p>
          </div>
        `,
      });

      if (partielError) {
        console.error(partielError);
      }

      let relanceId = "";

      if (isChecklist) {
        const mail = envoiChecklist(prenom);
        const { error: checklistError } = await resend.emails.send({
          from: FROM,
          to: [emailNettoye],
          replyTo: "bonjour@holaespagne.fr",
          subject: mail.subject,
          html: mail.html,
        });
        if (checklistError) console.error(checklistError);
      } else {
        const mail = relancePartiel(prenom, demarche);
        const { data, error: relanceError } = await resend.emails.send({
          from: FROM,
          to: [emailNettoye],
          replyTo: "bonjour@holaespagne.fr",
          subject: mail.subject,
          html: mail.html,
          scheduledAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        });
        if (relanceError) console.error(relanceError);
        relanceId = data?.id ?? "";
      }

      return Response.json({ success: true, relanceId });
    }

    if (
      !demarche ||
      !localisation ||
      !raison ||
      !avancement ||
      !prenom ||
      !consentement
    ) {
      return Response.json(
        { error: "Informations manquantes." },
        { status: 400 }
      );
    }

    if (String(raison).length > 5000) {
      return Response.json(
        { error: "Message trop long." },
        { status: 400 }
      );
    }

    const resume = [demarche, localisation, urgence]
      .filter(Boolean)
      .map((value) => escapeHtml(value))
      .join(" · ");

    const { error } = await resend.emails.send({
      from: FROM,
      to: ["bonjour@holaespagne.fr"],
      replyTo: emailNettoye,

      subject: `${demarche} · ${prenom}${
        urgence ? ` · ${urgence}` : ""
      }${form.leadId ? ` · réf. ${form.leadId}` : ""}`,

      html: `
        <div
          style="
            max-width: 680px;
            margin: 0 auto;
            padding: 40px 24px;
            font-family: Arial, sans-serif;
            color: #152238;
            line-height: 1.6;
          "
        >

          <p
            style="
              margin: 0 0 12px;
              color: #8F1D2C;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: 2px;
              text-transform: uppercase;
            "
          >
            Nouvelle demande holÀ!
          </p>

          <h1
            style="
              margin: 0;
              font-size: 28px;
              line-height: 1.2;
              font-weight: normal;
            "
          >
            ${resume}
          </h1>

          <div
            style="
              margin-top: 30px;
              padding: 22px;
              background: #F4F0E8;
            "
          >
            <p style="margin: 0 0 5px; font-size: 20px;">
              <strong>${escapeHtml(prenom)}</strong>
            </p>

            <p style="margin: 0;">
              <a
                href="mailto:${escapeHtml(emailNettoye)}"
                style="color: #152238;"
              >
                ${escapeHtml(emailNettoye)}
              </a>
            </p>

            ${
              telephone
                ? `
                  <p style="margin: 4px 0 0;">
                    ${escapeHtml(telephone)}
                  </p>
                `
                : ""
            }
          </div>


          <div style="margin-top: 38px;">
            <p
              style="
                margin: 0 0 8px;
                color: #8F1D2C;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 1.5px;
                text-transform: uppercase;
              "
            >
              Sa situation
            </p>

            <p
              style="
                margin: 0;
                font-size: 18px;
                line-height: 1.7;
                white-space: pre-line;
              "
            >
              ${escapeHtml(raison)}
            </p>
          </div>


          <div
            style="
              margin-top: 38px;
              padding-top: 28px;
              border-top: 1px solid #D8D3C9;
            "
          >
            <p
              style="
                margin: 0 0 18px;
                color: #8F1D2C;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 1.5px;
                text-transform: uppercase;
              "
            >
              Où en est la demande ?
            </p>

            ${infoRow("Avancement", avancement)}

            ${
              urgence
                ? infoRow("Timing", urgence)
                : ""
            }

            ${
              province
                ? infoRow("Ville / province", province)
                : ""
            }
          </div>


          ${
            nieMotif ||
            vehiculeSituation ||
            installationStatut ||
            fiscalSituation
              ? `
                <div
                  style="
                    margin-top: 30px;
                    padding-top: 28px;
                    border-top: 1px solid #D8D3C9;
                  "
                >
                  <p
                    style="
                      margin: 0 0 18px;
                      color: #8F1D2C;
                      font-size: 12px;
                      font-weight: bold;
                      letter-spacing: 1.5px;
                      text-transform: uppercase;
                    "
                  >
                    Informations utiles
                  </p>

                  ${
                    nieMotif
                      ? infoRow("Motif du NIE", nieMotif)
                      : ""
                  }

                  ${
                    vehiculeSituation
                      ? infoRow(
                          "Situation du véhicule",
                          vehiculeSituation
                        )
                      : ""
                  }

                  ${
                    installationStatut
                      ? infoRow(
                          "Situation en Espagne",
                          installationStatut
                        )
                      : ""
                  }

                  ${
                    fiscalSituation
                      ? infoRow(
                          "Sujet fiscal principal",
                          fiscalSituation
                        )
                      : ""
                  }
                </div>
              `
              : ""
          }


          <div
            style="
              margin-top: 38px;
              padding-top: 28px;
              border-top: 1px solid #D8D3C9;
            "
          >
            <p
              style="
                margin: 0 0 18px;
                color: #8F1D2C;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 1.5px;
                text-transform: uppercase;
              "
            >
              Contexte
            </p>

            ${infoRow("Démarche", demarche)}
            ${infoRow("Localisation", localisation)}
          </div>


          <div style="margin-top: 42px;">
            <a
              href="mailto:${escapeHtml(emailNettoye)}"
              style="
                display: inline-block;
                padding: 14px 22px;
                background: #152238;
                color: #F4F0E8;
                text-decoration: none;
                font-size: 15px;
              "
            >
              Répondre à ${escapeHtml(prenom)} →
            </a>
          </div>


          <p
            style="
              margin-top: 38px;
              color: #15223880;
              font-size: 12px;
            "
          >
            Demande reçue depuis holaespagne.fr
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

    // La demande est complète : on annule la relance programmée à l'étape 1.
    const relanceId = String(form.relanceId ?? "");
    if (UUID.test(relanceId)) {
      try {
        await resend.emails.cancel(relanceId);
      } catch (cancelError) {
        console.error(cancelError);
      }
    }

    // Accusé de réception automatique pour la personne.
    const accuse = accuseReception(prenom, demarche);
    const { error: accuseError } = await resend.emails.send({
      from: FROM,
      to: [emailNettoye],
      replyTo: "bonjour@holaespagne.fr",
      subject: accuse.subject,
      html: accuse.html,
    });
    if (accuseError) console.error(accuseError);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}

function infoRow(label: string, value: unknown) {
  return `
    <div style="margin-bottom: 15px;">
      <p
        style="
          margin: 0 0 2px;
          color: #15223880;
          font-size: 12px;
        "
      >
        ${escapeHtml(label)}
      </p>

      <p style="margin: 0;">
        ${escapeHtml(value)}
      </p>
    </div>
  `;
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
