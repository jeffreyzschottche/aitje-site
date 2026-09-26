import { Resend } from "resend";
import { findContactProduct, findTopic } from "#shared/contactTopics";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  topic?: string;
  product?: string;
  message?: string;
  /** Honeypot: real visitors leave this empty. */
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const clean = (value?: string, max = 5000) => (value ?? "").trim().slice(0, max);

const cleanConfigValue = (value: unknown) => {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const resendApiKey = cleanConfigValue(config.resendApiKey);
  const fromEmail = cleanConfigValue(config.resendFromEmail);
  const toEmail = cleanConfigValue(config.contactToEmail);
  const body = await readBody<ContactRequestBody>(event);

  // Silently accept bot submissions without sending anything.
  if (clean(body.website)) return { ok: true };

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const company = clean(body.company, 200);
  const message = clean(body.message);
  const topic = findTopic(clean(body.topic)) ?? findTopic("anders")!;
  const product = findContactProduct(clean(body.product));

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: "Vul je naam, e-mailadres en bericht in." });
  }
  if (!emailPattern.test(email)) {
    throw createError({ statusCode: 400, statusMessage: "Vul een geldig e-mailadres in." });
  }
  if (!resendApiKey || !fromEmail || !toEmail) {
    throw createError({ statusCode: 500, statusMessage: "Het contactformulier is nog niet ingesteld." });
  }

  const resend = new Resend(resendApiKey);
  const subjectSuffix = product ? ` — ${product.name}` : "";
  const rows: [string, string][] = [
    ["Naam", name],
    ["E-mail", email],
    ["Telefoon", phone || "-"],
    ["Bedrijf", company || "-"],
    ["Onderwerp", topic.label],
    ["Product", product?.name ?? "-"],
  ];

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: [email],
    subject: `Contactformulier: ${topic.label}${subjectSuffix}`,
    html: `
      <h1>Nieuwe aanvraag via aitje.com</h1>
      <table cellpadding="6">${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("")}</table>
      <p><strong>Bericht</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `,
    text: [...rows.map(([k, v]) => `${k}: ${v}`), "", "Bericht:", message].join("\n"),
  });

  if (error) {
    console.error("Resend send failure", { error, to: toEmail });
    throw createError({ statusCode: 502, statusMessage: "Versturen is niet gelukt. Probeer het later opnieuw of mail naar contact@aitje.com." });
  }

  // Confirmation to the sender. A failure here must not fail the request: the enquiry itself arrived.
  const firstName = name.split(" ")[0];
  const confirmation = await resend.emails.send({
    from: fromEmail,
    to: [email],
    replyTo: [toEmail],
    subject: "Je vraag is binnen bij AITJE",
    html: `
      <p>Hoi ${escapeHtml(firstName ?? name)},</p>
      <p>Bedankt voor je bericht. Je vraag is goed aangekomen en AITJE neemt contact met je op.</p>
      <p><strong>Onderwerp:</strong> ${escapeHtml(topic.label)}${product ? ` (${escapeHtml(product.name)})` : ""}</p>
      <p><strong>Je bericht:</strong><br />${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      <p>Wil je iets aanvullen? Beantwoord deze mail gewoon.</p>
      <p>Groet,<br />AITJE — Je partner in AI</p>
    `,
    text: [
      `Hoi ${firstName ?? name},`,
      "",
      "Bedankt voor je bericht. Je vraag is goed aangekomen en AITJE neemt contact met je op.",
      "",
      `Onderwerp: ${topic.label}${product ? ` (${product.name})` : ""}`,
      "",
      "Je bericht:",
      message,
      "",
      "Wil je iets aanvullen? Beantwoord deze mail gewoon.",
      "",
      "Groet,",
      "AITJE — Je partner in AI",
    ].join("\n"),
  });

  if (confirmation.error) {
    console.error("Resend confirmation failure", { error: confirmation.error });
  }

  return { ok: true };
});
