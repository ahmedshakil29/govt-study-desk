"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchDialog from "./SearchDialog";
import type { TreeNode } from "@/lib/types";

export default function AppShell({ tree, children }: { tree: TreeNode[]; children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Press "/" or Ctrl/Cmd+K anywhere to search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      const typing = el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
      const combo = e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey);
      if (combo || (e.key === "/" && !typing)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-dvh">
      <Header onMenu={() => setMenuOpen(true)} onSearch={() => setSearchOpen(true)} />
      <div className="flex">
        <Sidebar tree={tree} open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="min-w-0 flex-1 pt-14">{children}</main>
      </div>
      {searchOpen && <SearchDialog onClose={() => setSearchOpen(false)} />}
    </div>
  );
}
