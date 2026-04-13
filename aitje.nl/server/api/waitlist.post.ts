import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { randomUUID } from "node:crypto";

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

  rows.push({
    id: randomUUID(),
    email,
    locale,
    productSlug,
    productTitle,
    createdAt: new Date().toISOString(),
  });

  await writeWaitlistRows(rows);

  return {
    ok: true,
    alreadyExists: false,
  };
});
