"use client";

import Link from "next/link";
import { useStudyState } from "@/hooks/useStudyState";
import type { DocNode } from "@/lib/types";

export default function ContinueReading({ docs }: { docs: DocNode[] }) {
  const { last, read } = useStudyState();
  const doc = docs.find((d) => d.id === last);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
      {doc && (
        <Link
          href={doc.href}
          className="rounded-md bg-ink px-4 py-2 font-medium text-paper hover:opacity-90"
        >
          Continue: {doc.title}
        </Link>
      )}
      {docs.length > 0 && (
        <span className="text-soft">
          {Math.min(read.length, docs.length)} of {docs.length} marked as read
        </span>
      )}
    </div>
  );
}
