// Downloads real, keyword-matched stock photos from loremflickr
// (deterministic per ?lock=N) and saves them to /public/images/photos/
//
// Run with: node scripts/fetch-photos.mjs
//
// These are placeholder photos for the v1 mockup. Swap for the commissioned
// shoot at launch — see docs/SHOT-LIST.md and docs/LAUNCH-BLOCKERS.md.

import { writeFileSync, mkdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "photos");
mkdirSync(OUT, { recursive: true });

const PHOTOS = [
  { name: "hero",                  w: 2400, h: 1600, kw: "hair,salon,interior", lock: 11 },
  { name: "salon-interior-1",      w: 1800, h: 1200, kw: "salon,hairdresser",   lock: 21 },
  { name: "salon-interior-2",      w: 1200, h: 1500, kw: "salon,mirror",        lock: 22 },
  { name: "salon-interior-3",      w: 1200, h: 1500, kw: "salon,styling",       lock: 23 },
  { name: "salon-interior-4",      w: 1800, h: 1200, kw: "hair,salon",          lock: 24 },
  { name: "salon-exterior",        w: 1600, h: 1200, kw: "salon,storefront",    lock: 31 },
  { name: "result-balayage-1",     w: 1200, h: 1500, kw: "balayage,hair",       lock: 41 },
  { name: "result-balayage-2",     w: 1200, h: 1500, kw: "balayage",            lock: 42 },
  { name: "result-blonde-1",       w: 1200, h: 1500, kw: "blonde,hair",         lock: 51 },
  { name: "result-blonde-2",       w: 1200, h: 1500, kw: "blonde,woman,hair",   lock: 52 },
  { name: "result-precision-cut-1",w: 1200, h: 1500, kw: "haircut,woman",       lock: 61 },
  { name: "result-precision-cut-2",w: 1200, h: 1500, kw: "haircut,bob",         lock: 62 },
  { name: "result-hair-color-1",   w: 1200, h: 1500, kw: "brunette,hair",       lock: 71 },
  { name: "result-hair-color-2",   w: 1200, h: 1500, kw: "redhead,hair",        lock: 72 },
  { name: "result-keratin-1",      w: 1200, h: 1500, kw: "long,straight,hair",  lock: 81 },
  { name: "result-blow-dry-1",     w: 1200, h: 1500, kw: "blowout,hair",        lock: 91 },
  { name: "result-root-touch-up-1",w: 1200, h: 1500, kw: "hair,color,woman",    lock: 101 },
  { name: "result-restorative-1",  w: 1200, h: 1500, kw: "healthy,long,hair",   lock: 111 },
  { name: "og-default",            w: 1200, h: 630,  kw: "hair,salon",          lock: 121 },
];

async function download(p) {
  const url = `https://loremflickr.com/${p.w}/${p.h}/${p.kw}?lock=${p.lock}`;
  const dest = join(OUT, `${p.name}.jpg`);
  try {
    const existing = statSync(dest);
    if (existing.size > 10_000) {
      console.log(`· ${p.name}.jpg (already exists, ${existing.size} bytes, skipping)`);
      return;
    }
  } catch { /* not there yet */ }

  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    console.error(`✗ ${p.name}: HTTP ${res.status}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  console.log(`✓ ${p.name}.jpg (${buf.length} bytes)`);
}

for (const p of PHOTOS) {
  await download(p);
}

console.log(`\nDone. ${PHOTOS.length} photos in ${OUT}`);
