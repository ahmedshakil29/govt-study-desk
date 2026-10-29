import { getAllDocs, getTree, toNode } from "@/lib/content";
import SubjectIndex from "@/components/SubjectIndex";
import ContinueReading from "@/components/ContinueReading";
import { siteConfig } from "../../site.config";

export default function HomePage() {
  const tree = getTree();
  const docs = getAllDocs().map(toNode);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-rule">
        <div className="graph-paper absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pt-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {siteConfig.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-soft">{siteConfig.description}</p>
          <ContinueReading docs={docs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        {docs.length === 0 ? (
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-ink">Add your first file</h2>
            <p className="mt-2 text-soft">
              Put a .md or .pdf file in the <code className="rounded bg-ink/5 px-1 font-mono text-sm">content</code>{" "}
              folder. It shows up here and in the sidebar after you save.
            </p>
          </div>
        ) : (
          <SubjectIndex tree={tree} />
        )}
      </section>
    </div>
  );
}
