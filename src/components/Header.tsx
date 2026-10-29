import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "../../site.config";

type Props = {
  onMenu: () => void;
  onSearch: () => void;
};

export default function Header({ onMenu, onSearch }: Props) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center gap-2 border-b border-rule bg-paper/90 px-3 backdrop-blur">
      <button
        type="button"
        onClick={onMenu}
        aria-label="Open file list"
        className="grid size-9 place-items-center rounded-md text-soft hover:bg-ink/5 hover:text-ink lg:hidden"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <Link href="/" className="px-1 text-base font-semibold tracking-tight text-ink">
        {siteConfig.title}
      </Link>

      <div className="ml-auto flex items-center gap-1">
        <button
          type="button"
          onClick={onSearch}
          className="flex h-9 items-center gap-2 rounded-md border border-rule px-3 text-sm text-soft hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4 4" />
          </svg>
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden rounded border border-rule px-1.5 font-mono text-xs sm:inline">/</kbd>
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}
