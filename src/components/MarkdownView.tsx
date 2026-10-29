/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import CodeBlock from "./CodeBlock";
import { assetUrl, slugify } from "@/lib/content";

type Props = {
  source: string;
  /** Folder of the current file inside /content, used to resolve relative links. */
  baseDir: string[];
};

const isExternal = (url: string) => /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(url);

function resolve(baseDir: string[], target: string): string[] {
  const parts = [...baseDir];
  for (const seg of target.split("/")) {
    if (seg === "" || seg === ".") continue;
    if (seg === "..") parts.pop();
    else parts.push(decodeURIComponent(seg));
  }
  return parts;
}

export default function MarkdownView({ source, baseDir }: Props) {
  const components: Components = {
    a({ href, children }) {
      if (!href) return <a>{children}</a>;

      if (href.startsWith("#")) return <a href={href}>{children}</a>;

      if (isExternal(href) || href.startsWith("/")) {
        const external = isExternal(href);
        return (
          <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {children}
          </a>
        );
      }

      const [pathPart, hash = ""] = href.split("#");
      const parts = resolve(baseDir, pathPart);
      const last = parts[parts.length - 1] ?? "";

      // Link to another note: go to its page on the site.
      if (/\.md$/i.test(last)) {
        const slug = parts.map((p, i) => slugify(i === parts.length - 1 ? p.replace(/\.md$/i, "") : p));
        const url = "/" + slug.map(encodeURIComponent).join("/") + (hash ? "#" + hash : "");
        return <Link href={url}>{children}</Link>;
      }

      // Link to a PDF or image in the content folder.
      return (
        <a href={assetUrl(parts.join("/"))} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },

    img({ src, alt }) {
      if (typeof src !== "string") return null;
      const url = isExternal(src) || src.startsWith("/") ? src : assetUrl(resolve(baseDir, src).join("/"));
      return <img src={url} alt={alt ?? ""} loading="lazy" />;
    },

    pre({ children }) {
      return <CodeBlock>{children}</CodeBlock>;
    },

    table({ children }) {
      return (
        <div className="table-wrap">
          <table>{children}</table>
        </div>
      );
    },
  };

  return (
    <div className="study-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeKatex, { throwOnError: false, strict: "ignore" }],
          [rehypeHighlight, { detect: false, ignoreMissing: true }],
        ]}
        components={components}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
