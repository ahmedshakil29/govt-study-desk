import Link from "next/link";
import type { DocNode } from "@/lib/types";

export default function DocNav({ prev, next }: { prev?: DocNode; next?: DocNode }) {
  if (!prev && !next) return null;

  return (
    <nav aria-label="Previous and next" className="mt-14 grid gap-3 border-t border-rule pt-6 sm:grid-cols-2">
      {prev ? (
        <Link href={prev.href} className="rounded-md border border-rule px-4 py-3 hover:bg-ink/5">
          <span className="block text-xs text-soft">Previous</span>
          <span className="block font-medium text-ink">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className="rounded-md border border-rule px-4 py-3 text-right hover:bg-ink/5">
          <span className="block text-xs text-soft">Next</span>
          <span className="block font-medium text-ink">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
