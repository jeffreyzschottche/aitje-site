import { nextTick } from "vue";
import { getKnowledgeLinkRules, type KnowledgeLinkRule } from "../utils/knowledgeLinks";

type TextMatch = {
  start: number;
  end: number;
  text: string;
  to: string;
};

const EXCLUDED_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "option",
  "label",
  "script",
  "style",
  "noscript",
  "code",
  "pre",
  "kbd",
  "samp",
  "svg",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  '[role="heading"]',
  "[data-knowledge-link]",
  "[data-no-knowledge-links]",
  ".no-knowledge-links",
].join(", ");

function hasLargeHeadingStyle(element: Element) {
  const styledElement = element instanceof HTMLElement ? element : element.parentElement;

  if (!styledElement) {
    return false;
  }

  const { fontSize, fontWeight } = window.getComputedStyle(styledElement);
  const resolvedFontSize = Number.parseFloat(fontSize);
  const resolvedFontWeight = Number.parseInt(fontWeight, 10);

  return resolvedFontSize >= 28 || resolvedFontWeight >= 700;
}

function collectMatches(text: string, rules: KnowledgeLinkRule[]) {
  const matches: TextMatch[] = [];

  for (const rule of rules) {
    rule.pattern.lastIndex = 0;

    for (const match of text.matchAll(rule.pattern)) {
      const value = match[0];
      const start = match.index;

      if (typeof start !== "number" || !value) {
        continue;
      }

      matches.push({
        start,
        end: start + value.length,
        text: value,
        to: rule.to,
      });
    }
  }

  const sortedMatches = matches.sort((left, right) => {
    if (left.start !== right.start) {
      return left.start - right.start;
    }

    return right.end - left.end;
  });

  const resolvedMatches: TextMatch[] = [];
  let lastEnd = -1;

  for (const match of sortedMatches) {
    if (match.start < lastEnd) {
      continue;
    }

    resolvedMatches.push(match);
    lastEnd = match.end;
  }

  return resolvedMatches.sort((left, right) => {
      if (left.start !== right.start) {
        return left.start - right.start;
      }

      return right.end - left.end;
    });
}

function createKnowledgeLink(text: string, to: string, navigate: (to: string) => void) {
  const link = document.createElement("a");
  link.href = to;
  link.className = "knowledge-link";
  link.textContent = text;
  link.dataset.knowledgeLink = "true";
  link.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  });

  return link;
}

function replaceTextNode(node: Text, rules: KnowledgeLinkRule[], navigate: (to: string) => void) {
  const text = node.textContent;

  if (!text?.trim()) {
    return;
  }

  const matches = collectMatches(text, rules);

  if (matches.length === 0) {
    return;
  }

  const fragment = document.createDocumentFragment();
  let cursor = 0;

  for (const match of matches) {
    if (match.start > cursor) {
      fragment.append(text.slice(cursor, match.start));
    }

    fragment.append(createKnowledgeLink(match.text, match.to, navigate));
    cursor = match.end;
  }

  if (cursor < text.length) {
    fragment.append(text.slice(cursor));
  }

  node.replaceWith(fragment);
}

function linkifyKnowledgeTerms(root: ParentNode, currentPath: string, navigate: (to: string) => void) {
  const rules = getKnowledgeLinkRules(currentPath);

  if (rules.length === 0) {
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!(node instanceof Text)) {
        return NodeFilter.FILTER_REJECT;
      }

      const parent = node.parentElement;

      if (!parent || !node.textContent?.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      if (parent.closest(EXCLUDED_SELECTOR)) {
        return NodeFilter.FILTER_REJECT;
      }

      if (hasLargeHeadingStyle(parent)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let currentNode = walker.nextNode();

  while (currentNode) {
    textNodes.push(currentNode as Text);
    currentNode = walker.nextNode();
  }

  for (const textNode of textNodes) {
    replaceTextNode(textNode, rules, navigate);
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  const applyKnowledgeLinks = () => {
    const main = document.querySelector("main");

    if (!main) {
      return;
    }

    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    linkifyKnowledgeTerms(main, currentPath, (to) => {
      router.push(to);
    });
  };

  nuxtApp.hook("app:mounted", () => {
    window.requestAnimationFrame(applyKnowledgeLinks);
  });

  nuxtApp.hook("page:finish", async () => {
    await nextTick();
    window.requestAnimationFrame(applyKnowledgeLinks);
  });
});
