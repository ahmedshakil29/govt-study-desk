import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24">
      <h1 className="text-2xl font-semibold text-ink">This page doesn’t exist</h1>
      <p className="mt-2 text-soft">The file may have been renamed or moved. Pick a file from the sidebar, or go back home.</p>
      <Link href="/" className="mt-6 inline-block rounded-md border border-rule px-4 py-2 text-ink hover:bg-ink/5">
        Back to home
      </Link>
    </div>
  );
}
