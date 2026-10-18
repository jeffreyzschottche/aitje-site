// Apply localization before Vue compilation, on both client and server.
// Dutch copy stays readable in the source; IDs, values, code and styling stay intact.
import { parse as parseSfc } from "@vue/compiler-sfc";
import { baseParse, NodeTypes } from "@vue/compiler-dom";

export const normalizeText = (value) => value.replace(/\s+/g, " ").trim();
const displayAttributes = new Set(["title", "eyebrow", "intro", "subline", "text", "label", "description", "caption", "placeholder", "alt", "image-alt", "aria-label", "aria-description"]);

export function localizeTemplate(source, filename, collect = () => {}) {
  const { descriptor, errors } = parseSfc(source, { filename });
  if (errors.length) throw errors[0];
  if (!descriptor.template) return source;
  const template = descriptor.template;
  const ast = baseParse(template.content);
  const patches = [];
  const patch = (location, replacement) => patches.push({ start: template.loc.start.offset + location.start.offset, end: template.loc.start.offset + location.end.offset, replacement });
  const walk = (node, inCode = false) => {
    if (node.type === NodeTypes.ELEMENT) {
      inCode ||= ["pre", "code", "script", "style"].includes(node.tag);
      const languageSwitch = node.props.some((prop) => prop.type === NodeTypes.ATTRIBUTE && prop.name === "data-language-switch");
      if (!inCode) for (const prop of node.props) {
        if (prop.type === NodeTypes.ATTRIBUTE && prop.value) {
          if (displayAttributes.has(prop.name)) {
            collect(prop.value.content);
            patch(prop.loc, `:${prop.name}="${`$text(${JSON.stringify(prop.value.content)})`.replaceAll("&", "&amp;").replaceAll('"', "&quot;")}"`);
          } else if (!languageSwitch && ["to", "href"].includes(prop.name)) {
            patch(prop.loc, `:${prop.name}="${`$localePath(${JSON.stringify(prop.value.content)})`.replaceAll("&", "&amp;").replaceAll('"', "&quot;")}"`);
          }
        } else if (prop.type === NodeTypes.DIRECTIVE && prop.name === "bind" && prop.exp && prop.arg?.isStatic) {
          const name = prop.arg.content;
          const helper = displayAttributes.has(name) ? "$text" : !languageSwitch && ["to", "href"].includes(name) ? "$localePath" : null;
          if (helper === "$text") collect(prop.exp.content, "expression");
          if (helper && !prop.exp.content.startsWith(helper + "(")) patch(prop.exp.loc, `${helper}((${prop.exp.content}))`);
        }
      }
    }
    if (!inCode && node.type === NodeTypes.TEXT && /[\p{L}\d]/u.test(node.content)) {
      collect(node.content);
      patch(node.loc, `{{ $text(${JSON.stringify(node.content)}) }}`);
    }
    if (!inCode && node.type === NodeTypes.INTERPOLATION && !node.content.content.startsWith("$text(")) {
      collect(node.content.content, "expression");
      patch(node.content.loc, `$text((${node.content.content}))`);
    }
    for (const child of node.children ?? []) walk(child, inCode);
  };
  walk(ast);
  let result = source;
  for (const edit of patches.sort((a, b) => b.start - a.start)) result = result.slice(0, edit.start) + edit.replacement + result.slice(edit.end);
  return result;
}

export function localizedTemplatesPlugin(appDirectory) {
  return {
    name: "aitje-localized-templates",
    enforce: "pre",
    transform(source, id) {
      if (!id.startsWith(appDirectory) || !id.endsWith(".vue")) return;
      return { code: localizeTemplate(source, id), map: null };
    },
  };
}
