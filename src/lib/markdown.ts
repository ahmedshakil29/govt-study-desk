import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
import type { Element, Root } from "hast";
import { siteConfig } from "../../site.config";
import type { Heading } from "./types";

/**
 * Finds h2/h3 headings using the same plugin order as the renderer,
 * so the generated ids always match the ones on the page.
 */
export function extractHeadings(markdown: string): Heading[] {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeSlug);

  const tree = processor.runSync(processor.parse(markdown)) as Root;
  const headings: Heading[] = [];

  visit(tree, "element", (node: Element) => {
    if (node.tagName !== "h2" && node.tagName !== "h3") return;
    const id = node.properties?.id;
    if (typeof id !== "string" || id === "footnote-label") return;
    headings.push({
      depth: node.tagName === "h2" ? 2 : 3,
      text: toString(node),
      id,
    });
  });

  return headings;
}

export function readingMinutes(markdown: string): number {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / siteConfig.wordsPerMinute));
}

/** Rough plain-text version of markdown, used for search. */
export function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|~$\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
