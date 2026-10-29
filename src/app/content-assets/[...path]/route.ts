import fs from "node:fs";
import path from "node:path";
import { ASSET_TYPES, CONTENT_ROOT, getAllAssets } from "@/lib/content";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllAssets().map((p) => ({ path: p.split("/") }));
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ path: string[] }> },
) {
  const { path: segments } = await ctx.params;
  const rel = segments.map((s) => decodeURIComponent(s));
  const file = path.join(CONTENT_ROOT, ...rel);

  // Never serve anything outside /content, or files that aren't allowed types.
  const type = ASSET_TYPES[path.extname(file).toLowerCase()];
  if (!file.startsWith(CONTENT_ROOT + path.sep) || !type || !fs.existsSync(file)) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(new Uint8Array(fs.readFileSync(file)), {
    headers: {
      "Content-Type": type,
      "Content-Disposition": "inline",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
