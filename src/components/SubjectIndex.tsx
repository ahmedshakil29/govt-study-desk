import Link from "next/link";
import type { DocNode, TreeNode } from "@/lib/types";

const MAX_SHOWN = 8;

function collect(nodes: TreeNode[]): DocNode[] {
  return nodes.flatMap((n) => (n.type === "doc" ? [n] : collect(n.children)));
}

export default function SubjectIndex({ tree }: { tree: TreeNode[] }) {
  const folders = tree.filter((n) => n.type === "folder");
  const loose = tree.filter((n): n is DocNode => n.type === "doc");

  const groups = [
    ...folders.map((f) => ({ id: f.id, title: f.title, docs: collect([f]) })),
    ...(loose.length ? [{ id: "_loose", title: "Other files", docs: loose }] : []),
  ];

  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
      {groups.map((g) => (
        <section key={g.id} className="border-t-2 border-ink pt-3">
          <h2 className="flex items-baseline justify-between gap-2 text-lg font-semibold text-ink">
            {g.title}
            <span className="text-sm font-normal text-soft">{g.docs.length} files</span>
          </h2>
          <ul className="mt-2 divide-y divide-rule">
            {g.docs.slice(0, MAX_SHOWN).map((d) => (
              <li key={d.id}>
                <Link href={d.href} className="flex items-center gap-2 py-2 text-ink hover:text-accent">
                  <span className="truncate">{d.title}</span>
                  {d.kind === "pdf" && (
                    <span className="shrink-0 rounded border border-rule px-1 text-[10px] leading-4 text-soft">PDF</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          {g.docs.length > MAX_SHOWN && (
            <p className="mt-2 text-sm text-soft">and {g.docs.length - MAX_SHOWN} more in the sidebar</p>
          )}
        </section>
      ))}
    </div>
  );
}
