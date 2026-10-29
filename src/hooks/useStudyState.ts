"use client";

import { useCallback, useSyncExternalStore } from "react";

const KEY = "study-desk:v1";

type State = { read: string[]; last: string | null };

const EMPTY: State = { read: [], last: null };
const listeners = new Set<() => void>();

let cache: State = EMPTY;
let cacheRaw: string | null = null;

function getSnapshot(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw !== cacheRaw) {
      cacheRaw = raw;
      cache = raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
    }
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function save(next: State) {
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Storage can be blocked (private mode); progress just won't persist.
  }
  listeners.forEach((l) => l());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Per-browser study progress: which docs are marked read, and the last one opened. */
export function useStudyState() {
  const state = useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);

  const toggleRead = useCallback((id: string) => {
    const current = getSnapshot();
    const read = current.read.includes(id)
      ? current.read.filter((x) => x !== id)
      : [...current.read, id];
    save({ ...current, read });
  }, []);

  const setLast = useCallback((id: string) => {
    const current = getSnapshot();
    if (current.last !== id) save({ ...current, last: id });
  }, []);

  return { read: state.read, last: state.last, toggleRead, setLast };
}
