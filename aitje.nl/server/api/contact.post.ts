import { Resend } from "resend";

type ContactRequestBody = {
  locale?: string;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  meetingDate?: string;
  meetingTime?: string;
  meetingPlatform?: string;
  verificationEmail?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const subjectLabels: Record<string, { nl: string; en: string }> = {
  council: { nl: "Council", en: "Council" },
  demo: { nl: "Demo", en: "Demo" },
  kennismaking: { nl: "Kennismaking", en: "Introduction" },
  vraag: { nl: "Vraag", en: "Question" },
  partnerschap: { nl: "Partnerschap", en: "Partnership" },
  offerte: { nl: "Offerte", en: "Quote" },
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const clean = (value?: string) => value?.trim() || "";
const extractResendErrorMessage = (error: unknown) => {
  if (typeof error === "string" && error.trim()) {
    return error;
  }

  if (typeof error !== "object" || error === null) {
    return "";
  }

  if ("message" in error && typeof error.message === "string" && error.message.trim()) {
    return error.message;
  }

  if ("name" in error && typeof error.name === "string" && error.name.trim()) {
    return error.name;
  }

  return "";
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody<ContactRequestBody>(event);

  const locale = body.locale === "en" ? "en" : "nl";
  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const subject = clean(body.subject);
  const message = clean(body.message);
  const meetingDate = clean(body.meetingDate);
  const meetingTime = clean(body.meetingTime);
  const meetingPlatform = clean(body.meetingPlatform);
  const verificationEmail = clean(body.verificationEmail);

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage:
        locale === "en"
          ? "Please fill in all required fields."
          : "Vul alle verplichte velden in.",
    });
  }

  if (!emailPattern.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage:
        locale === "en"
          ? "Enter a valid email address."
          : "Vul een geldig e-mailadres in.",
    });
  }

  if (subject === "kennismaking") {
    if (!meetingDate || !meetingTime || !meetingPlatform || !verificationEmail) {
      throw createError({
        statusCode: 400,
        statusMessage:
          locale === "en"
            ? "Fill in all appointment details."
            : "Vul alle afspraakgegevens in.",
      });
    }

    if (!emailPattern.test(verificationEmail)) {
      throw createError({
        statusCode: 400,
        statusMessage:
          locale === "en"
            ? "Enter a valid verification email address."
            : "Vul een geldig verificatie e-mailadres in.",
      });
    }
  }

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "RESEND_API_KEY is not configured.",
    });
  }

  const resend = new Resend(config.resendApiKey);
  const subjectLabel =
    subjectLabels[subject]?.[locale] || (locale === "en" ? "Contact request" : "Contactaanvraag");
  const mailSubject =
    locale === "en"
      ? `AITJE contact form: ${subjectLabel}`
      : `AITJE contactformulier: ${subjectLabel}`;

  const html = `
    <h1>${locale === "en" ? "New contact request" : "Nieuwe contactaanvraag"}</h1>
    <p><strong>${locale === "en" ? "Name" : "Naam"}:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>${locale === "en" ? "Phone" : "Telefoon"}:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>${locale === "en" ? "Subject" : "Onderwerp"}:</strong> ${escapeHtml(subjectLabel)}</p>
    <p><strong>${locale === "en" ? "Message" : "Bericht"}:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    ${
      subject === "kennismaking"
        ? `
    <hr />
    <p><strong>${locale === "en" ? "Appointment date" : "Afspraakdatum"}:</strong> ${escapeHtml(meetingDate)}</p>
    <p><strong>${locale === "en" ? "Appointment time" : "Afspraaktijd"}:</strong> ${escapeHtml(meetingTime)}</p>
    <p><strong>Platform:</strong> ${escapeHtml(meetingPlatform)}</p>
    <p><strong>${locale === "en" ? "Confirmation email" : "Bevestigingsmail"}:</strong> ${escapeHtml(verificationEmail)}</p>
    `
        : ""
    }
  `;

  const textLines = [
    locale === "en" ? "New contact request" : "Nieuwe contactaanvraag",
    "",
    `${locale === "en" ? "Name" : "Naam"}: ${name}`,
    `Email: ${email}`,
    `${locale === "en" ? "Phone" : "Telefoon"}: ${phone || "-"}`,
    `${locale === "en" ? "Subject" : "Onderwerp"}: ${subjectLabel}`,
    "",
    `${locale === "en" ? "Message" : "Bericht"}:`,
    message,
  ];

  if (subject === "kennismaking") {
    textLines.push(
      "",
      `${locale === "en" ? "Appointment date" : "Afspraakdatum"}: ${meetingDate}`,
      `${locale === "en" ? "Appointment time" : "Afspraaktijd"}: ${meetingTime}`,
      `Platform: ${meetingPlatform}`,
      `${locale === "en" ? "Confirmation email" : "Bevestigingsmail"}: ${verificationEmail}`,
    );
  }

  const { error } = await resend.emails.send({
    from: config.resendFromEmail,
    to: [config.contactToEmail],
    replyTo: subject === "kennismaking" ? [verificationEmail || email] : [email],
    subject: mailSubject,
    html,
    text: textLines.join("\n"),
  });

  if (error) {
    const resendMessage = extractResendErrorMessage(error);

    console.error("Resend send failure", {
      error,
      from: config.resendFromEmail,
      to: config.contactToEmail,
      replyTo: subject === "kennismaking" ? verificationEmail || email : email,
    });

    throw createError({
      statusCode: 502,
      statusMessage:
        process.dev && resendMessage
          ? resendMessage
          : locale === "en"
            ? "Sending failed. Please try again later."
            : "Versturen mislukt. Probeer het later opnieuw.",
    });
  }

  return {
    ok: true,
  };
});
