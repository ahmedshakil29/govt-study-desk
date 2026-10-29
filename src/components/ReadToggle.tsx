"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useStudyState } from "@/hooks/useStudyState";

/** "Mark as read" button. Also remembers this doc as the last one opened. */
export default function ReadToggle({ id }: { id: string }) {
  const { read, toggleRead, setLast } = useStudyState();
  const done = read.includes(id);

  useEffect(() => {
    setLast(id);
  }, [id, setLast]);

  return (
    <button
      type="button"
      onClick={() => toggleRead(id)}
      aria-pressed={done}
      className={cn(
        "rounded-md border px-3 py-1.5 text-sm",
        done ? "border-accent text-accent" : "border-rule text-soft hover:text-ink",
      )}
    >
      {done ? "Marked as read" : "Mark as read"}
    </button>
  );
}
