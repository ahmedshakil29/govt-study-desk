import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarkdownView from "@/components/MarkdownView";
import PdfViewer from "@/components/PdfViewer";
import Toc from "@/components/Toc";
import DocNav from "@/components/DocNav";
import ReadToggle from "@/components/ReadToggle";
import { assetUrl, getAdjacent, getAllDocs, getDocBySlug, readMarkdown } from "@/lib/content";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDocs().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  return doc ? { title: doc.title, description: doc.description } : {};
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const { prev, next } = getAdjacent(doc.id);
  const md = doc.kind === "md" ? readMarkdown(doc) : null;
  const baseDir = doc.relPath.split("/").slice(0, -1);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:py-12 xl:grid xl:grid-cols-[minmax(0,46rem)_13rem] xl:justify-between xl:gap-12">
      <div className="min-w-0">
        {doc.trail.length > 0 && <p className="mb-3 text-sm text-soft">{doc.trail.join(" / ")}</p>}

        {(!md || !md.hasH1) && (
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-ink">{doc.title}</h1>
        )}

        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-soft">
          {md && <span>{md.minutes} min read</span>}
          {md?.updated && <span>Updated {md.updated}</span>}
          {md?.tags.map((t) => (
            <span key={t} className="rounded border border-rule px-1.5 text-xs">{t}</span>
          ))}
          <ReadToggle id={doc.id} />
        </div>

        {md ? (
          <MarkdownView source={md.content} baseDir={baseDir} />
        ) : (
          <PdfViewer src={assetUrl(doc.relPath)} title={doc.title} />
        )}

        <DocNav prev={prev} next={next} />
      </div>

      {md && <Toc headings={md.headings} />}
    </div>
  );
}
