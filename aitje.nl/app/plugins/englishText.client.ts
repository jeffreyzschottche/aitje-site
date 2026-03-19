import { englishTextMap } from "@/data/englishTextMap";

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

const translatedAttributes = ["aria-label", "placeholder", "title", "alt"] as const;

const toEnglishPath = (href: string) => {
  if (!href.startsWith("/") || href.startsWith("/en")) return href;
  if (href.startsWith("//")) return href;
  return href === "/" ? "/en" : `/en${href}`;
};

const translateTextNodes = (root: Node) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let currentNode = walker.nextNode();

  while (currentNode) {
    const rawText = currentNode.textContent ?? "";
    const normalizedText = normalize(rawText);
    const translated = englishTextMap[normalizedText];

    if (translated) {
      const leadingWhitespace = rawText.match(/^\s*/)?.[0] ?? "";
      const trailingWhitespace = rawText.match(/\s*$/)?.[0] ?? "";
      currentNode.textContent = `${leadingWhitespace}${translated}${trailingWhitespace}`;
    }

    currentNode = walker.nextNode();
  }
};

const getElements = (root: ParentNode) => {
  if (root instanceof Element) {
    return [root, ...root.querySelectorAll<HTMLElement>("*")];
  }

  return Array.from(root.querySelectorAll<HTMLElement>("*"));
};

const translateAttributes = (root: ParentNode) => {
  getElements(root).forEach((element) => {
    translatedAttributes.forEach((attribute) => {
      const currentValue = element.getAttribute(attribute);
      if (!currentValue) return;

      const translated = englishTextMap[normalize(currentValue)];
      if (translated) {
        element.setAttribute(attribute, translated);
      }
    });
  });
};

const translateLinks = (root: ParentNode) => {
  const links =
    root instanceof HTMLAnchorElement
      ? [root]
      : Array.from(root.querySelectorAll<HTMLAnchorElement>('a[href^="/"]'));

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    link.setAttribute("href", toEnglishPath(href));
  });
};

const translateRoot = (root: Node) => {
  translateTextNodes(root);

  if (root instanceof Element || root instanceof Document || root instanceof DocumentFragment) {
    translateAttributes(root);
    translateLinks(root);
  }
};

const applyEnglishText = () => {
  if (!window.location.pathname.startsWith("/en")) return;
  translateRoot(document.body);
};

export default defineNuxtPlugin((nuxtApp) => {
  let pendingTimers: ReturnType<typeof window.setTimeout>[] = [];

  const clearPendingTimers = () => {
    pendingTimers.forEach((timer) => window.clearTimeout(timer));
    pendingTimers = [];
  };

  const schedule = () => {
    clearPendingTimers();

    requestAnimationFrame(() => {
      [0, 120, 400].forEach((delay) => {
        const timer = window.setTimeout(() => {
          applyEnglishText();
        }, delay);

        pendingTimers.push(timer);
      });
    });
  };

  nuxtApp.hook("app:mounted", schedule);
  nuxtApp.hook("page:finish", schedule);
});
