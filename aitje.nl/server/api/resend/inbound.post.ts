import { Resend } from "resend";

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

const normalizeEmailAddress = (value: string) => {
  const match = value.match(/<([^<>]+)>/);
  return (match?.[1] || value).trim().toLowerCase();
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const resendApiKey = cleanConfigValue(config.resendApiKey);
  const webhookSecret = cleanConfigValue(config.resendWebhookSecret);
  const inboundEmail = normalizeEmailAddress(
    cleanConfigValue(config.resendInboundEmail),
  );
  const forwardToEmail = cleanConfigValue(config.contactToEmail);
  const forwardFromEmail = cleanConfigValue(config.resendFromEmail);

  if (
    !resendApiKey ||
    !webhookSecret ||
    !inboundEmail ||
    !forwardToEmail ||
    !forwardFromEmail
  ) {
    throw createError({
      statusCode: 500,
      statusMessage: "Resend inbound email settings are incomplete.",
    });
  }

  const payload = await readRawBody(event, "utf8");
  const svixId = getHeader(event, "svix-id");
  const svixTimestamp = getHeader(event, "svix-timestamp");
  const svixSignature = getHeader(event, "svix-signature");

  if (!payload || !svixId || !svixTimestamp || !svixSignature) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid webhook request.",
    });
  }

  const resend = new Resend(resendApiKey);
  let webhookEvent;

  try {
    webhookEvent = resend.webhooks.verify({
      payload,
      headers: {
        id: svixId,
        timestamp: svixTimestamp,
        signature: svixSignature,
      },
      webhookSecret,
    });
  } catch {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid webhook signature.",
    });
  }

  if (webhookEvent.type !== "email.received") {
    return { ok: true, ignored: true };
  }

  const isExpectedRecipient = webhookEvent.data.to.some(
    (recipient) => normalizeEmailAddress(recipient) === inboundEmail,
  );

  if (!isExpectedRecipient) {
    return { ok: true, ignored: true };
  }

  const { data, error } = await resend.emails.receiving.forward({
    emailId: webhookEvent.data.email_id,
    to: forwardToEmail,
    from: forwardFromEmail,
  });

  if (error) {
    console.error("Resend inbound forwarding failure", {
      error,
      emailId: webhookEvent.data.email_id,
      to: forwardToEmail,
    });

    throw createError({
      statusCode: 502,
      statusMessage: "Inbound email forwarding failed.",
    });
  }

  return { ok: true, id: data?.id };
});
