# Redesign Plan — Haze look, Zazou depth

Working plan for the redesign requested by the client (July 2026).

## What the client asked for

> "Keep it simple like **Salon Haze** — actually, we can use the same design and
> colour palette as Haze, or vary it slightly. But the *content* should be
> richer, like **Salon Zazou** — Zazou's footer has Academy / Location / Salon
> headings, which felt more informative."

Two reference sites:

- **Salon Haze** (salonhaze.com) — Kitsilano boutique salon. Minimal,
  image-forward, generous whitespace, editorial. Looks like a Squarespace
  build (URL pattern `/stylist`, `/balayage`, `/phaze2`). → **visual / palette
  reference.**
- **Salon Zazou** (zazou.ca) — North Vancouver salon **+ academy**. Rich
  information architecture: Services, Our Team, Academy, Salons/Locations, Our
  Story, Salon FAQ, Rewards Club, Careers, Blog. → **content-depth reference.**

Net direction: **Haze's clean skin + Zazou's content depth.** The current
Megas visual design was *not* approved — this is a re-skin, not a content-only
change. The Next.js architecture, routing, and SEO stay; the design layer
(colours, type, spacing, component styling) is rebuilt.

> **Positioning note (for discussion):** `docs/00-strategy.md` positions Megas
> as premium, heritage (1984), Turkish, Tri-Cities-focused. Haze is a Vancouver
> competitor with a lighter boutique feel. A 1:1 copy risks diluting the
> heritage differentiation. Recommendation: *Haze's airiness + a distinct Megas
> palette/identity* (the client's "vary it slightly" option).

## Blocker — Haze design assets

The build sandbox's egress policy blocks `salonhaze.com` (and `zazou.ca`), so
the exact palette / typography **cannot be extracted from here**. Phase 0 needs
one of:

- Screenshots of Haze's home, services, stylist, and contact pages, **or**
- The hex colour values + font names, **or**
- Any brand/style export the client has.

Everything visual (Phases 0–1) is gated on this.

## Phases

### Phase 0 — Design system (the gate for everything visual)
`docs/01-design-system.md` is the source of truth (per CLAUDE.md) and currently
defines the *old* palette (Cormorant Garamond + Inter + current tokens). Rewrite
it toward Haze: colour palette, typography, spacing scale, button/card styles.
**Needs the Haze assets above.**

### Phase 1 — Re-skin
Apply the new tokens across the existing components: `app/globals.css` + Tailwind
tokens, `Header`, `Footer`, `Hero`, buttons, cards. Page structure and copy stay;
only the look changes. (No photos required.)

### Phase 2 — Information architecture (Zazou depth)
Expand footer + nav with discovery headings. Candidates (confirm which apply to
Megas):
- **Location / Visit** — single Coquitlam location: address, map, hours, directions.
- **Our Story / Salon** — 1984 Istanbul → 2025 Vancouver (the `/about` page,
  surfaced in the footer).
- **Academy** — only if Megas offers training/education. Zazou has one; Megas
  may not. *Confirm.*
- **Careers / Blog** — optional; blog roadmap already exists in
  `docs/content/blog-roadmap.md`.

### Phase 3 — Booking: Fresha → Phorest  ✅ done
Client confirmed **Phorest**: `https://phorest.com/book/salons/megashairsalon`.
Services + pricing live there. `/book` now links out to Phorest (was a Fresha
placeholder); booking URL centralised in `lib/constants.ts` (`BOOKING.url`).
Optional follow-up: inline iframe embed if Phorest permits framing.

### Phase 4 — Team 4 → 8
Current team (`lib/team.ts`): Bülent, Gazi, Emir, Fulya. Client's roster adds
**Fara, Nadia, Rain, Angela**. Needs per person: title + short bio (photos come
later). Client says short bios exist on their current site — content to be
supplied.

### Phase 5 — Construction / photos (client: ~1–2 weeks out)
Real portraits + salon interiors, gallery, final mobile Lighthouse ≥ 95 pass.
Until then the site keeps its SVG placeholders.

## Needed from the client

- [ ] Haze screenshots **or** hex palette + font names (gates Phases 0–1)
- [ ] Palette decision: match Haze exactly, or a slight Megas variation (recommended)
- [ ] Does Megas have an Academy? (Phase 2 footer)
- [ ] Confirm single location (Coquitlam)
- [ ] Titles + short bios for Fara, Nadia, Rain, Angela (Phase 4)
