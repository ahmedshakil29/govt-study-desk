import fs from "node:fs";
import matter from "gray-matter";
import { getAllDocs } from "@/lib/content";
import { toPlainText } from "@/lib/markdown";

export const dynamic = "force-static";

const TEXT_LIMIT = 8000;

export function GET() {
  const items = getAllDocs().map((doc) => ({
    id: doc.id,
    title: doc.title,
    href: doc.href,
    kind: doc.kind,
    section: doc.trail.join(" / "),
    text:
      doc.kind === "md"
        ? toPlainText(matter(fs.readFileSync(doc.file, "utf8")).content).slice(0, TEXT_LIMIT)
        : "",
  }));
  return Response.json(items);
}
