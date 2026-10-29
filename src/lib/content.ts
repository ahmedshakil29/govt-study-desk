import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { DocMeta, DocNode, FolderNode, TreeNode } from "./types";
import { extractHeadings, readingMinutes } from "./markdown";

export const CONTENT_ROOT = path.join(process.cwd(), "content");

export const ASSET_TYPES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
};

/* ---------- small helpers ---------- */

export function slugify(input: string): string {
  const slug = input
    .normalize("NFC")
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "untitled";
}

function prettify(name: string): string {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[\s._-]+/, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\p{L}/gu, (c) => c.toUpperCase());
}

function leadingNumber(name: string): number | undefined {
  const match = name.match(/^(\d+)[\s._-]/);
  return match ? Number(match[1]) : undefined;
}

function compare(
  a: { order?: number; name: string },
  b: { order?: number; name: string },
) {
  if (a.order !== undefined && b.order !== undefined && a.order !== b.order) {
    return a.order - b.order;
  }
  if (a.order !== undefined && b.order === undefined) return -1;
  if (a.order === undefined && b.order !== undefined) return 1;
  return a.name.localeCompare(b.name, undefined, { numeric: true });
}

function readFolderMeta(dir: string): { title?: string; order?: number } {
  try {
    return JSON.parse(fs.readFileSync(path.join(dir, "_folder.json"), "utf8"));
  } catch {
    return {};
  }
}

function firstHeading(markdown: string): string | undefined {
  const withoutCode = markdown.replace(/```[\s\S]*?```/g, "");
  return withoutCode.match(/^#\s+(.+?)\s*#*\s*$/m)?.[1];
}

export function assetUrl(relPath: string): string {
  return "/content-assets/" + relPath.split("/").map(encodeURIComponent).join("/");
}

/* ---------- scanning the content folder ---------- */

type Index = { tree: TreeNode[]; docs: DocMeta[]; byId: Map<string, DocMeta> };

type Entry = { order?: number; name: string; node: TreeNode };

function scan(
  dir: string,
  relDir: string[],
  slugDir: string[],
  trail: string[],
  used: Set<string>,
  byId: Map<string, DocMeta>,
): TreeNode[] {
  const entries: Entry[] = [];

  for (const dirent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (dirent.name.startsWith(".") || dirent.name.startsWith("_")) continue;
    const full = path.join(dir, dirent.name);

    if (dirent.isDirectory()) {
      const meta = readFolderMeta(full);
      const title = meta.title ?? prettify(dirent.name);
      const slugSeg = slugify(dirent.name);
      const children = scan(
        full,
        [...relDir, dirent.name],
        [...slugDir, slugSeg],
        [...trail, title],
        used,
        byId,
      );
      if (children.length === 0) continue;

      const folder: FolderNode = {
        type: "folder",
        id: [...slugDir, slugSeg].join("/"),
        title,
        children,
        count: children.reduce((n, c) => n + (c.type === "doc" ? 1 : c.count), 0),
      };
      entries.push({
        order: meta.order ?? leadingNumber(dirent.name),
        name: dirent.name,
        node: folder,
      });
      continue;
    }

    const ext = path.extname(dirent.name).toLowerCase();
    if (ext !== ".md" && ext !== ".pdf") continue;

    const kind = ext === ".md" ? "md" : "pdf";
    let title = prettify(dirent.name);
    let description: string | undefined;
    let order = leadingNumber(dirent.name);

    if (kind === "md") {
      const { data, content } = matter(fs.readFileSync(full, "utf8"));
      title = data.title ?? firstHeading(content) ?? title;
      description = data.description;
      if (typeof data.order === "number") order = data.order;
    }

    const base = slugify(dirent.name.replace(/\.[^.]+$/, ""));
    let slug = [...slugDir, base];
    for (let i = 2; used.has(slug.join("/")); i++) {
      slug = [...slugDir, `${base}-${i}`];
    }
    const id = slug.join("/");
    used.add(id);

    const meta: DocMeta = {
      type: "doc",
      id,
      title,
      href: "/" + slug.map(encodeURIComponent).join("/"),
      kind,
      description,
      slug,
      relPath: [...relDir, dirent.name].join("/"),
      file: full,
      trail,
    };
    byId.set(id, meta);
    entries.push({ order, name: dirent.name, node: toNode(meta) });
  }

  return entries.sort(compare).map((e) => e.node);
}

function flatten(nodes: TreeNode[]): string[] {
  return nodes.flatMap((n) => (n.type === "doc" ? [n.id] : flatten(n.children)));
}

let cached: Index | null = null;

function getIndex(): Index {
  if (cached && process.env.NODE_ENV === "production") return cached;

  const byId = new Map<string, DocMeta>();
  const tree = fs.existsSync(CONTENT_ROOT)
    ? scan(CONTENT_ROOT, [], [], [], new Set(), byId)
    : [];
  const docs = flatten(tree).map((id) => byId.get(id)!);

  cached = { tree, docs, byId };
  return cached;
}

/* ---------- public API ---------- */

/** Strips server-only fields so the object is safe to send to the browser. */
export function toNode(doc: DocMeta): DocNode {
  return {
    type: "doc",
    id: doc.id,
    title: doc.title,
    href: doc.href,
    kind: doc.kind,
    description: doc.description,
  };
}

export const getTree = () => getIndex().tree;

/** Every document, in sidebar order. */
export const getAllDocs = () => getIndex().docs;

export function getDocBySlug(slug: string[]): DocMeta | undefined {
  const id = slug.map((s) => decodeURIComponent(s)).join("/");
  return getIndex().byId.get(id);
}

export function getAdjacent(id: string): { prev?: DocNode; next?: DocNode } {
  const docs = getIndex().docs;
  const i = docs.findIndex((d) => d.id === id);
  return {
    prev: i > 0 ? toNode(docs[i - 1]) : undefined,
    next: i >= 0 && i < docs.length - 1 ? toNode(docs[i + 1]) : undefined,
  };
}

export function readMarkdown(doc: DocMeta) {
  const { data, content } = matter(fs.readFileSync(doc.file, "utf8"));
  return {
    content,
    headings: extractHeadings(content),
    hasH1: /^# /m.test(content.replace(/```[\s\S]*?```/g, "")),
    minutes: readingMinutes(content),
    updated: typeof data.updated === "string" ? data.updated : undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
  };
}

/** Every file under /content that can be served (PDFs and images). */
export function getAllAssets(): string[] {
  const out: string[] = [];
  const walk = (dir: string, rel: string[]) => {
    if (!fs.existsSync(dir)) return;
    for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
      if (d.name.startsWith(".") || d.name.startsWith("_")) continue;
      if (d.isDirectory()) walk(path.join(dir, d.name), [...rel, d.name]);
      else if (ASSET_TYPES[path.extname(d.name).toLowerCase()]) {
        out.push([...rel, d.name].join("/"));
      }
    }
  };
  walk(CONTENT_ROOT, []);
  return out;
}
