import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { randomUUID } from "node:crypto";
import { Resend } from "resend";

type WaitlistRequestBody = {
  email?: string;
  locale?: string;
  productSlug?: string;
  productTitle?: string;
};

type WaitlistRow = {
  id: string;
  email: string;
  locale: "nl" | "en";
  productSlug: string;
  productTitle: string;
  createdAt: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const waitlistFilePath = resolve(process.cwd(), "server/data/waitlist.json");

const clean = (value?: string) => value?.trim() || "";
const cleanConfigValue = (value: unknown) => {
  if (typeof value !== "string") {
    return "";
  }

  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

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

const readWaitlistRows = async () => {
  try {
    const content = await readFile(waitlistFilePath, "utf8");
    const parsed = JSON.parse(content) as WaitlistRow[];

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    const fileError = error as NodeJS.ErrnoException;

    if (fileError.code === "ENOENT") {
      return [];
    }

    throw error;
  }
};

const writeWaitlistRows = async (rows: WaitlistRow[]) => {
  await mkdir(dirname(waitlistFilePath), { recursive: true });
  await writeFile(waitlistFilePath, JSON.stringify(rows, null, 2), "utf8");
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const resendApiKey = cleanConfigValue(config.resendApiKey);
  const resendFromEmail = cleanConfigValue(config.resendFromEmail);
  const waitlistToEmail = cleanConfigValue(config.waitlistToEmail);
  const body = await readBody<WaitlistRequestBody>(event);

  const email = clean(body.email).toLowerCase();
  const locale = body.locale === "en" ? "en" : "nl";
  const productSlug = clean(body.productSlug);
  const productTitle = clean(body.productTitle);

  if (!email || !productSlug || !productTitle) {
    throw createError({
      statusCode: 400,
      statusMessage:
        locale === "en"
          ? "Email and product details are required."
          : "E-mailadres en productgegevens zijn verplicht.",
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

  if (!resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "RESEND_API_KEY is not configured.",
    });
  }

  if (!resendFromEmail || !waitlistToEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: "Waitlist email settings are incomplete.",
    });
  }

  const rows = await readWaitlistRows();
  const existingRow = rows.find(
    (row) => row.email === email && row.productSlug === productSlug,
  );

  if (existingRow) {
    return {
      ok: true,
      alreadyExists: true,
    };
  }

  const row = {
    id: randomUUID(),
    email,
    locale,
    productSlug,
    productTitle,
    createdAt: new Date().toISOString(),
  };

  const resend = new Resend(resendApiKey);
  const mailSubject = `AITJE waitlist: ${productTitle}`;
  const html = `
    <h1>Nieuwe waitlist inschrijving</h1>
    <p><strong>Product:</strong> ${escapeHtml(productTitle)}</p>
    <p><strong>Product slug:</strong> ${escapeHtml(productSlug)}</p>
    <p><strong>E-mailadres:</strong> ${escapeHtml(email)}</p>
    <p><strong>Taal:</strong> ${escapeHtml(locale)}</p>
  `;
  const text = [
    "Nieuwe waitlist inschrijving",
    "",
    `Product: ${productTitle}`,
    `Product slug: ${productSlug}`,
    `E-mailadres: ${email}`,
    `Taal: ${locale}`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: resendFromEmail,
    to: [waitlistToEmail],
    replyTo: [email],
    subject: mailSubject,
    html,
    text,
  });

  if (error) {
    const resendMessage = extractResendErrorMessage(error);

    console.error("Resend waitlist send failure", {
      error,
      from: resendFromEmail,
      to: waitlistToEmail,
      replyTo: email,
      productSlug,
      productTitle,
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

  rows.push(row);
  await writeWaitlistRows(rows);

  return {
    ok: true,
    alreadyExists: false,
  };
});
