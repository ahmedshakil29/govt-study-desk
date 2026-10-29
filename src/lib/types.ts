export type DocKind = "md" | "pdf";

/** Safe to send to the browser. */
export type DocNode = {
  type: "doc";
  id: string;
  title: string;
  href: string;
  kind: DocKind;
  description?: string;
};

export type FolderNode = {
  type: "folder";
  id: string;
  title: string;
  count: number;
  children: TreeNode[];
};

export type TreeNode = DocNode | FolderNode;

/** Server-only details about a document. */
export type DocMeta = DocNode & {
  slug: string[];
  /** Path relative to /content, using forward slashes. */
  relPath: string;
  /** Absolute path on disk. */
  file: string;
  /** Folder titles leading to this doc, for breadcrumbs. */
  trail: string[];
};

export type Heading = { depth: 2 | 3; text: string; id: string };
