"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useStudyState } from "@/hooks/useStudyState";
import type { TreeNode } from "@/lib/types";

type Props = {
  nodes: TreeNode[];
  depth?: number;
  onNavigate?: () => void;
};

export default function SidebarTree({ nodes, depth = 0, onNavigate }: Props) {
  const pathname = decodeURIComponent(usePathname());
  const { read } = useStudyState();

  return (
    <ul className={cn(depth > 0 && "ml-3 border-l border-rule pl-2")}>
      {nodes.map((node) => {
        if (node.type === "folder") {
          const open = pathname.startsWith("/" + node.id + "/") || depth === 0;
          return (
            <li key={node.id} className="mt-3 first:mt-0">
              <details open={open} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded px-2 py-1 text-sm font-semibold text-ink hover:bg-ink/5">
                  <svg viewBox="0 0 16 16" className="size-3 shrink-0 text-soft transition-transform group-open:rotate-90" fill="currentColor" aria-hidden>
                    <path d="M6 3l5 5-5 5z" />
                  </svg>
                  <span className="truncate">{node.title}</span>
                  <span className="ml-auto text-xs font-normal text-soft">{node.count}</span>
                </summary>
                <SidebarTree nodes={node.children} depth={depth + 1} onNavigate={onNavigate} />
              </details>
            </li>
          );
        }

        const active = pathname === decodeURIComponent(node.href);
        const done = read.includes(node.id);
        return (
          <li key={node.id}>
            <Link
              href={node.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 rounded px-2 py-1 text-sm",
                active
                  ? "bg-mark/40 font-medium text-ink"
                  : "text-soft hover:bg-ink/5 hover:text-ink",
              )}
            >
              <span className="truncate">{node.title}</span>
              {node.kind === "pdf" && (
                <span className="shrink-0 rounded border border-rule px-1 text-[10px] leading-4 text-soft">PDF</span>
              )}
              {done && (
                <svg viewBox="0 0 16 16" className="ml-auto size-3.5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Read">
                  <path d="M3 8.5l3.2 3L13 4.5" />
                </svg>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
