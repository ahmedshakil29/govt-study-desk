export default function PdfViewer({ src, title }: { src: string; title: string }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2 text-sm">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-rule px-3 py-1.5 text-ink hover:bg-ink/5"
        >
          Open in new tab
        </a>
        <a href={src} download className="rounded-md border border-rule px-3 py-1.5 text-ink hover:bg-ink/5">
          Download
        </a>
      </div>
      <iframe
        src={src}
        title={title}
        className="h-[78dvh] w-full rounded-md border border-rule bg-surface"
      />
      <p className="mt-2 text-sm text-soft sm:hidden">
        If the preview is blank on your phone, use Open in new tab.
      </p>
    </div>
  );
}
