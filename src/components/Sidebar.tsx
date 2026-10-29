"use client";

import { cn } from "@/lib/utils";
import SidebarTree from "./SidebarTree";
import type { TreeNode } from "@/lib/types";

type Props = {
  tree: TreeNode[];
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ tree, open, onClose }: Props) {
  return (
    <>
      {/* Backdrop for the mobile drawer */}
      <div
        onClick={onClose}
        aria-hidden
        className={cn(
          "fixed inset-0 z-30 bg-ink/40 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        aria-label="Documents"
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto border-r border-rule bg-paper px-3 pb-10 pt-16 transition-transform",
          "lg:sticky lg:top-0 lg:z-0 lg:h-dvh lg:translate-x-0 lg:pt-16",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {tree.length === 0 ? (
          <p className="px-2 text-sm text-soft">
            No files yet. Add .md or .pdf files to the content folder.
          </p>
        ) : (
          <SidebarTree nodes={tree} onNavigate={onClose} />
        )}
      </aside>
    </>
  );
}
