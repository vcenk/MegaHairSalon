// Generates rich SVG placeholders for the v1 mockup.
// Run with: node scripts/gen-placeholders.mjs
//
// Swap for real AVIF/WebP imagery at launch (see docs/LAUNCH-BLOCKERS.md).

import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "placeholder");
mkdirSync(OUT, { recursive: true });

const PALETTE = {
  bg: "#FFFFFF",
  bgAlt: "#ECE7DD",
  bgDeep: "#E4DFD5",
  ink: "#1C1C1C",
  inkSoft: "#3D3A36",
  muted: "#6E6E6E",
  border: "#D6CEC0",
  accent: "#B0925E",
  accentDark: "#8C7043",
  accentSoft: "#F1E9DA",
};

const write = (name, svg) =>
  writeFileSync(join(OUT, `${name}.svg`), svg.trim() + "\n", "utf8");

// ─── Shared fragments ─────────────────────────────────────────────

const gradientsBlock = `
  <defs>
    <linearGradient id="warmVertical" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${PALETTE.bg}"/>
      <stop offset="55%" stop-color="${PALETTE.bgAlt}"/>
      <stop offset="100%" stop-color="${PALETTE.bgDeep}"/>
    </linearGradient>
    <linearGradient id="warmDiagonal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${PALETTE.bgAlt}"/>
      <stop offset="100%" stop-color="${PALETTE.bgDeep}"/>
    </linearGradient>
    <radialGradient id="softVignette" cx="50%" cy="50%" r="75%">
      <stop offset="55%" stop-color="rgba(0,0,0,0)"/>
      <stop offset="100%" stop-color="rgba(26,26,26,0.20)"/>
    </radialGradient>
    <linearGradient id="inkToAccent" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${PALETTE.ink}"/>
      <stop offset="70%" stop-color="${PALETTE.inkSoft}"/>
      <stop offset="100%" stop-color="${PALETTE.accentDark}"/>
    </linearGradient>
  </defs>
`;

// ─── Hero ─────────────────────────────────────────────────────────

function hero() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Megas Hair Salon — master colourists in Coquitlam, BC">
  ${gradientsBlock}
  <rect width="2400" height="1600" fill="url(#warmVertical)"/>

  <!-- Soft architectural planes suggesting salon interior -->
  <g opacity="0.55">
    <rect x="0" y="1050" width="2400" height="550" fill="${PALETTE.bgDeep}"/>
    <rect x="1550" y="120" width="620" height="1020" fill="${PALETTE.bgAlt}" opacity="0.75"/>
    <rect x="1580" y="150" width="560" height="960" fill="${PALETTE.bg}" opacity="0.9"/>
    <line x1="1580" y1="1110" x2="2140" y2="1110" stroke="${PALETTE.accent}" stroke-width="2" opacity="0.7"/>
  </g>

  <!-- Large M watermark -->
  <text x="1200" y="1250" font-family="Georgia, 'Times New Roman', serif" font-size="1600" fill="${PALETTE.accent}" fill-opacity="0.07" text-anchor="middle" font-weight="300">M</text>

  <!-- Brand mark -->
  <text x="140" y="140" font-family="Georgia, 'Times New Roman', serif" font-size="70" fill="${PALETTE.ink}" font-weight="500" letter-spacing="-2">Megas</text>
  <text x="140" y="200" font-family="Inter, system-ui, sans-serif" font-size="22" fill="${PALETTE.accent}" letter-spacing="6">HAIR · SALON · 1984</text>

  <rect width="2400" height="1600" fill="url(#softVignette)"/>
</svg>
`;
}

// ─── Salon interior (abstract architectural) ──────────────────────

function interior(seed, width, height) {
  // Deterministic pseudo-random from seed
  const h = [...seed].reduce((a, c) => a + c.charCodeAt(0), 0);
  const offsetX = (h * 37) % 100;
  const offsetY = (h * 53) % 100;

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Megas Hair Salon interior detail">
  ${gradientsBlock}
  <rect width="${width}" height="${height}" fill="url(#warmDiagonal)"/>

  <!-- Wall plane -->
  <rect x="0" y="0" width="${width}" height="${height * 0.6}" fill="${PALETTE.bg}" opacity="0.55"/>

  <!-- Mirror / frame -->
  <rect x="${width * 0.12 + offsetX}" y="${height * 0.14}" width="${width * 0.35}" height="${height * 0.44}" fill="${PALETTE.bgAlt}" stroke="${PALETTE.border}" stroke-width="2"/>
  <rect x="${width * 0.12 + offsetX + 12}" y="${height * 0.14 + 12}" width="${width * 0.35 - 24}" height="${height * 0.44 - 24}" fill="${PALETTE.bgDeep}" opacity="0.4"/>

  <!-- Secondary frame -->
  <rect x="${width * 0.55 + offsetY}" y="${height * 0.2}" width="${width * 0.25}" height="${height * 0.3}" fill="${PALETTE.bgAlt}" stroke="${PALETTE.border}" stroke-width="2"/>

  <!-- Counter line -->
  <line x1="0" y1="${height * 0.62}" x2="${width}" y2="${height * 0.62}" stroke="${PALETTE.accent}" stroke-width="3" opacity="0.6"/>
  <rect x="0" y="${height * 0.62}" width="${width}" height="${height * 0.38}" fill="${PALETTE.bgDeep}" opacity="0.6"/>

  <!-- Product bottles suggestion -->
  <g opacity="0.5">
    <rect x="${width * 0.16}" y="${height * 0.68}" width="14" height="${height * 0.12}" fill="${PALETTE.inkSoft}"/>
    <rect x="${width * 0.19}" y="${height * 0.66}" width="14" height="${height * 0.14}" fill="${PALETTE.accent}"/>
    <rect x="${width * 0.22}" y="${height * 0.7}" width="14" height="${height * 0.1}" fill="${PALETTE.inkSoft}"/>
    <rect x="${width * 0.25}" y="${height * 0.67}" width="14" height="${height * 0.13}" fill="${PALETTE.ink}"/>
  </g>

  <!-- Subtle monogram -->
  <text x="${width * 0.5}" y="${height * 0.5}" font-family="Georgia, 'Times New Roman', serif" font-size="${height * 0.7}" fill="${PALETTE.accent}" fill-opacity="0.03" text-anchor="middle" font-weight="300">M</text>

  <rect width="${width}" height="${height}" fill="url(#softVignette)"/>
</svg>
`;
}

// ─── Salon exterior ───────────────────────────────────────────────

function exterior() {
  const width = 1600;
  const height = 1200;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Megas Hair Salon exterior on Pacific Street, Coquitlam">
  ${gradientsBlock}
  <!-- Sky -->
  <rect width="${width}" height="${height * 0.55}" fill="${PALETTE.bg}"/>
  <!-- Building face -->
  <rect x="0" y="${height * 0.15}" width="${width}" height="${height * 0.7}" fill="${PALETTE.bgAlt}"/>
  <!-- Window bank -->
  <rect x="${width * 0.1}" y="${height * 0.3}" width="${width * 0.8}" height="${height * 0.4}" fill="${PALETTE.inkSoft}" opacity="0.65"/>
  <!-- Mullions -->
  <g stroke="${PALETTE.bgDeep}" stroke-width="3">
    <line x1="${width * 0.3}" y1="${height * 0.3}" x2="${width * 0.3}" y2="${height * 0.7}"/>
    <line x1="${width * 0.5}" y1="${height * 0.3}" x2="${width * 0.5}" y2="${height * 0.7}"/>
    <line x1="${width * 0.7}" y1="${height * 0.3}" x2="${width * 0.7}" y2="${height * 0.7}"/>
  </g>
  <!-- Signage -->
  <rect x="${width * 0.35}" y="${height * 0.18}" width="${width * 0.3}" height="${height * 0.08}" fill="${PALETTE.ink}"/>
  <text x="${width * 0.5}" y="${height * 0.24}" font-family="Georgia, serif" font-size="56" fill="${PALETTE.bg}" text-anchor="middle" font-weight="500" letter-spacing="-1">Megas</text>
  <!-- Door -->
  <rect x="${width * 0.44}" y="${height * 0.55}" width="${width * 0.12}" height="${height * 0.3}" fill="${PALETTE.accent}" opacity="0.85"/>
  <!-- Sidewalk -->
  <rect x="0" y="${height * 0.85}" width="${width}" height="${height * 0.15}" fill="${PALETTE.bgDeep}"/>
  <rect width="${width}" height="${height}" fill="url(#softVignette)"/>
</svg>
`;
}

// ─── Hair result ──────────────────────────────────────────────────

const SERVICE_PALETTE = {
  "balayage-1": ["#EADFC8", "#A37F4D"],
  "balayage-2": ["#F1E5CC", "#C3955F"],
  "blonde-1": ["#FFF5D9", "#E2C37F"],
  "blonde-2": ["#F6E9C4", "#D5AE6B"],
  "precision-cut-1": ["#C9B89A", "#3E3328"],
  "precision-cut-2": ["#AE9A7C", "#2B211A"],
  "hair-color-1": ["#6E3E2A", "#321A10"],
  "hair-color-2": ["#B54B2A", "#6B2414"],
  "keratin-1": ["#D9C4A0", "#7D5B36"],
  "blow-dry-1": ["#E0C79B", "#8E6B3C"],
  "root-touch-up-1": ["#8E6B3C", "#3E2A18"],
  "restorative-1": ["#D9BE8B", "#5E4020"],
};

function hairResult(slug) {
  const width = 1200;
  const height = 1500;
  const [light, dark] = SERVICE_PALETTE[slug];
  const gid = `g-${slug}`;

  // Flowing hair strokes — vertical curves
  const strokes = [];
  for (let i = 0; i < 22; i++) {
    const x0 = (width / 21) * i;
    const sway1 = Math.sin(i * 0.9) * 60;
    const sway2 = Math.sin(i * 0.7 + 1.5) * 80;
    const d = `M ${x0} 0 C ${x0 + sway1} ${height * 0.35}, ${x0 + sway2} ${height * 0.7}, ${x0 + sway1 * 0.4} ${height}`;
    const opacity = 0.18 + (i % 3) * 0.08;
    const stroke = i % 3 === 0 ? dark : light;
    const widthStroke = 14 + (i % 4) * 6;
    strokes.push(
      `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${widthStroke}" stroke-linecap="round" opacity="${opacity}"/>`,
    );
  }

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Hair result mockup — ${slug}">
  <defs>
    <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${dark}" stop-opacity="0.92"/>
      <stop offset="45%" stop-color="${light}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${dark}" stop-opacity="0.85"/>
    </linearGradient>
    <radialGradient id="shine-${slug}" cx="50%" cy="35%" r="50%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.3)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#${gid})"/>
  ${strokes.join("\n  ")}
  <rect width="${width}" height="${height}" fill="url(#shine-${slug})"/>
  <rect width="${width}" height="${height}" fill="url(#softVignette)"/>
  ${gradientsBlock}
</svg>
`;
}

// ─── Portrait monogram ────────────────────────────────────────────

function portrait(slug, initial, name, years) {
  const width = 1200;
  const height = 1500;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${name} — Megas Hair Salon, Coquitlam">
  ${gradientsBlock}
  <rect width="${width}" height="${height}" fill="url(#inkToAccent)"/>

  <!-- Subtle texture -->
  <g opacity="0.05">
    <rect width="${width}" height="${height}" fill="url(#warmVertical)"/>
  </g>

  <!-- Large serif initial -->
  <text x="${width / 2}" y="${height * 0.63}" font-family="Georgia, 'Times New Roman', serif" font-size="${height * 0.85}" fill="${PALETTE.bg}" fill-opacity="0.92" text-anchor="middle" font-weight="300">${initial}</text>

  <!-- Bottom brand band -->
  <rect x="0" y="${height - 140}" width="${width}" height="140" fill="${PALETTE.ink}" opacity="0.7"/>
  <text x="${width / 2}" y="${height - 82}" font-family="Georgia, serif" font-size="50" fill="${PALETTE.bg}" text-anchor="middle" font-weight="500" letter-spacing="-1">${name}</text>
  <text x="${width / 2}" y="${height - 36}" font-family="Inter, system-ui, sans-serif" font-size="19" fill="${PALETTE.accent}" text-anchor="middle" letter-spacing="6">${years}</text>
</svg>
`;
}

function action(slug, name) {
  const width = 1800;
  const height = 1200;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${name} — at work at Megas Hair Salon, Coquitlam">
  ${gradientsBlock}
  <rect width="${width}" height="${height}" fill="url(#warmDiagonal)"/>

  <!-- Large arc suggesting a styling chair / scene -->
  <circle cx="${width * 0.35}" cy="${height * 0.6}" r="${height * 0.35}" fill="${PALETTE.bgDeep}" opacity="0.85"/>
  <circle cx="${width * 0.35}" cy="${height * 0.56}" r="${height * 0.2}" fill="${PALETTE.ink}" opacity="0.85"/>

  <!-- Reflection / mirror -->
  <rect x="${width * 0.6}" y="${height * 0.1}" width="${width * 0.3}" height="${height * 0.55}" fill="${PALETTE.bg}" opacity="0.9"/>
  <rect x="${width * 0.6 + 12}" y="${height * 0.1 + 12}" width="${width * 0.3 - 24}" height="${height * 0.55 - 24}" fill="${PALETTE.bgAlt}" opacity="0.8"/>

  <!-- Copper accent line -->
  <line x1="0" y1="${height * 0.8}" x2="${width}" y2="${height * 0.8}" stroke="${PALETTE.accent}" stroke-width="3" opacity="0.7"/>

  <!-- Name tag -->
  <text x="60" y="${height - 70}" font-family="Georgia, serif" font-size="64" fill="${PALETTE.ink}" font-weight="500" letter-spacing="-1">${name}</text>
  <text x="60" y="${height - 26}" font-family="Inter, sans-serif" font-size="20" fill="${PALETTE.accent}" letter-spacing="6">MEGAS · COQUITLAM</text>

  <rect width="${width}" height="${height}" fill="url(#softVignette)"/>
</svg>
`;
}

// ─── OG default ───────────────────────────────────────────────────

function og() {
  const width = 1200;
  const height = 630;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Megas Hair Salon — master colourists in Coquitlam since 1984">
  ${gradientsBlock}
  <rect width="${width}" height="${height}" fill="url(#warmVertical)"/>

  <!-- Accent rule -->
  <rect x="0" y="0" width="${width}" height="8" fill="${PALETTE.accent}"/>

  <!-- M watermark -->
  <text x="${width * 0.82}" y="${height * 0.85}" font-family="Georgia, serif" font-size="${height * 0.9}" fill="${PALETTE.accent}" fill-opacity="0.08" text-anchor="middle" font-weight="300">M</text>

  <!-- Brand mark -->
  <text x="72" y="${height * 0.28}" font-family="Inter, sans-serif" font-size="22" fill="${PALETTE.accent}" letter-spacing="7">MEGAS · HAIR · SALON</text>

  <text x="72" y="${height * 0.56}" font-family="Georgia, serif" font-size="76" fill="${PALETTE.ink}" font-weight="500" letter-spacing="-2">Master colourists,</text>
  <text x="72" y="${height * 0.56 + 88}" font-family="Georgia, serif" font-size="76" fill="${PALETTE.ink}" font-weight="500" letter-spacing="-2">since 1984.</text>

  <text x="72" y="${height * 0.92}" font-family="Inter, sans-serif" font-size="22" fill="${PALETTE.muted}" letter-spacing="3">COQUITLAM · BC · CANADA</text>
</svg>
`;
}

// ─── Emit ─────────────────────────────────────────────────────────

// Hero
write("hero", hero());

// Interiors (1800×1200 and 1200×1500 mixed)
write("salon-interior-1", interior("i1", 1800, 1200));
write("salon-interior-2", interior("i2", 1200, 1500));
write("salon-interior-3", interior("i3", 1200, 1500));
write("salon-interior-4", interior("i4", 1800, 1200));

// Exterior
write("salon-exterior", exterior());

// Hair results
write("result-balayage-1", hairResult("balayage-1"));
write("result-balayage-2", hairResult("balayage-2"));
write("result-blonde-1", hairResult("blonde-1"));
write("result-blonde-2", hairResult("blonde-2"));
write("result-precision-cut-1", hairResult("precision-cut-1"));
write("result-precision-cut-2", hairResult("precision-cut-2"));
write("result-hair-color-1", hairResult("hair-color-1"));
write("result-hair-color-2", hairResult("hair-color-2"));
write("result-keratin-1", hairResult("keratin-1"));
write("result-blow-dry-1", hairResult("blow-dry-1"));
write("result-root-touch-up-1", hairResult("root-touch-up-1"));
write("result-restorative-1", hairResult("restorative-1"));

// Team portraits (initial + name + years)
const team = [
  ["bulent", "B", "Bülent", "35 YEARS · MASTER COLOURIST"],
  ["gazi", "G", "Gazi", "41 YEARS · MASTER STYLIST"],
  ["emir", "E", "Emir", "23 YEARS · COLOUR & STYLING"],
  ["fulya", "F", "Fulya", "15 YEARS · DIRECTOR"],
];
for (const [slug, initial, name, years] of team) {
  write(`stylist-${slug}-portrait`, portrait(slug, initial, name, years));
  write(`stylist-${slug}-action`, action(slug, name));
}

// OG default
write("og-default", og());

console.log("Generated placeholder SVGs in", OUT);
