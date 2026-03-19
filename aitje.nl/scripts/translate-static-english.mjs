import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const mapPath = path.join(root, "app/data/englishTextMap.ts");
const mapSource = fs.readFileSync(mapPath, "utf8");

const entryPattern = /^\s*"((?:\\.|[^"])*)":\s*"((?:\\.|[^"])*)",?$/gm;
const translationMap = new Map();

for (const match of mapSource.matchAll(entryPattern)) {
  const source = JSON.parse(`"${match[1]}"`);
  const target = JSON.parse(`"${match[2]}"`);
  translationMap.set(source, target);
}

const normalize = (value) => value.replace(/\s+/g, " ").trim();

const translateExact = (value) => translationMap.get(normalize(value));

const preserveWhitespace = (rawValue, translatedValue) => {
  const leadingWhitespace = rawValue.match(/^\s*/)?.[0] ?? "";
  const trailingWhitespace = rawValue.match(/\s*$/)?.[0] ?? "";
  return `${leadingWhitespace}${translatedValue}${trailingWhitespace}`;
};

const translateTextSegments = (content) =>
  content.replace(/>([^<]+)</g, (match, textContent) => {
    const translated = translateExact(textContent);
    if (!translated) return match;
    return `>${preserveWhitespace(textContent, translated)}<`;
  });

const translateQuotedStrings = (content) =>
  content.replace(/(["'`])((?:\\.|(?!\1)[\s\S])*)\1/g, (match, quote, rawValue) => {
    if (quote === "`" && rawValue.includes("${")) return match;

    let unescapedValue;

    try {
      unescapedValue = JSON.parse(`"${rawValue.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`);
    } catch {
      return match;
    }

    const translated = translateExact(unescapedValue);
    if (!translated) return match;

    const escapedValue =
      quote === "`"
        ? translated.replace(/\\/g, "\\\\").replace(/`/g, "\\`")
        : JSON.stringify(translated).slice(1, -1);

    return `${quote}${escapedValue}${quote}`;
  });

const replaceWithMap = (content) => {
  let next = content;

  next = translateTextSegments(next);
  next = translateQuotedStrings(next);

  return next;
};

const getFiles = (directory) => {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...getFiles(fullPath));
      continue;
    }

    files.push(fullPath);
  }

  return files;
};

const pageFiles = getFiles(path.join(root, "app/pages/en")).filter((file) =>
  file.endsWith(".vue"),
);

for (const file of pageFiles) {
  const original = fs.readFileSync(file, "utf8");
  const translated = replaceWithMap(original);

  if (translated !== original) {
    fs.writeFileSync(file, translated);
  }
}
