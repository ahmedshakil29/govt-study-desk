"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  title: string;
  href: string;
  kind: "md" | "pdf";
  section: string;
  text: string;
};

let indexPromise: Promise<Item[]> | null = null;
const loadIndex = () => (indexPromise ??= fetch("/search-index.json").then((r) => r.json()));

function snippet(text: string, query: string): string {
  const at = text.toLowerCase().indexOf(query.toLowerCase());
  if (at < 0) return "";
  const start = Math.max(0, at - 50);
  return (start > 0 ? "…" : "") + text.slice(start, at + query.length + 90);
}

export default function SearchDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    loadIndex().then(setItems).catch(() => setItems([]));
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: [
          { name: "title", weight: 3 },
          { name: "section", weight: 1 },
          { name: "text", weight: 1 },
        ],
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [items],
  );

  const q = query.trim();
  const results = useMemo(
    () => (q.length < 2 ? items.slice(0, 8) : fuse.search(q, { limit: 8 }).map((r) => r.item)),
    [fuse, items, q],
  );

  function open(item: Item | undefined) {
    if (!item) return;
    router.push(item.href);
    onClose();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      open(results[cursor]);
    } else if (e.key === "Escape") {
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Search">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} aria-hidden />
      <div className="relative w-full max-w-xl overflow-hidden rounded-lg border border-rule bg-surface shadow-xl">
        <input
          autoFocus
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCursor(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Search titles and notes"
          aria-label="Search"
          className="w-full border-b border-rule bg-transparent px-4 py-3 text-base text-ink outline-none placeholder:text-soft"
        />
        <ul className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-soft">
              {items.length === 0 ? "No files to search yet." : `Nothing found for “${q}”.`}
            </li>
          )}
          {results.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => open(item)}
                onMouseEnter={() => setCursor(i)}
                className={cn(
                  "block w-full rounded-md px-3 py-2 text-left",
                  i === cursor ? "bg-mark/40" : "hover:bg-ink/5",
                )}
              >
                <span className="flex items-center gap-2 text-sm font-medium text-ink">
                  {item.title}
                  {item.kind === "pdf" && (
                    <span className="rounded border border-rule px-1 text-[10px] leading-4 text-soft">PDF</span>
                  )}
                </span>
                {item.section && <span className="block text-xs text-soft">{item.section}</span>}
                {q.length >= 2 && snippet(item.text, q) && (
                  <span className="mt-0.5 block truncate text-xs text-soft">{snippet(item.text, q)}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
