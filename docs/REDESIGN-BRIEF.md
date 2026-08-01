# Redesign Brief — "Haze simplicity × Zazou depth"

Source: client email (2026-07). Reference sites and decisions captured below.

## ⚠️ Reconciliation note (important)
Two parallel redesigns of this brief happened. `main` already carried a **visual
re-skin** (Jost geometric sans, pill buttons, white palette, Instagram strip,
Zazou-style "Explore" footer). A separate branch added the **functional layer**
(real Phorest prices, `/menu` page, Phorest on every CTA, corrected titles).
The shipped result **builds on `main`'s design** and layers the functional wins
on top — so the visual descriptions in some phase notes below (e.g. "kept
Cormorant", "removed the marquee") describe the *other* branch, not what shipped.
What actually shipped on `main`: main's re-skin **+** corrected Phorest prices,
the `/menu` page, Phorest booking (via `megashairsalon.phorest.me`, since the
`phorest.com/book/...` URL redirects away), "Prices" in nav, Full-menu footer
link, Fulya → Owner & Director, the 4 new stylists → Senior Stylist, and the real
contact email.

## Client intent
- **Design = simpler**, in the spirit of **Salon Haze** (salonhaze.com) — clean, minimal, generous whitespace.
- **Content = richer**, in the spirit of **Salon Zazou** (zazou.ca) — deeper information, grouped footer (Zazou groups Academy / Locations / Salon at the bottom).
- **Booking + services/prices** come from the real **Phorest** page, not invented data.
- **Team is now 8 people** (was 4). Salon photos + team photos are **not ready** (construction finishing ~mid-Aug 2026); client will send real photos + team bios when ready.

## Decisions (confirmed)
1. **Services** — keep the 8 SEO story-pages (fix prices to Phorest) **and** add a comprehensive full "Price Menu" page mirroring the whole Phorest list.
2. **Academy** — Megas has no confirmed training academy, so **no Academy section**. Repurpose the grouped footer into Salon / Services / Visit (Location) / Book / Follow — richer like Zazou, without inventing an academy.
3. **Booking** — every "Book" CTA **links out to Phorest** (`https://megashairsalon.phorest.me`), opening in a new tab. (The codebase was originally wired for Fresha; that has been removed.)

## Phases
- **Phase 1 — DONE.** Booking migrated Fresha→Phorest across all CTAs; `/book` page rebuilt around a Phorest CTA; all 8 service prices corrected to the live Phorest menu (incl. price-citing FAQ answers); team expanded 4→8 with placeholder portraits; Fulya retitled "Owner & Director"; team/about count copy updated.
- **Phase 2 — DONE.** New full "Price Menu" page at `/menu`, sourced from `lib/menu.ts` (7 client-facing categories, ~55 items; internal "Extra Service" category omitted). Category jump-nav, OfferCatalog schema, "Book on Phorest" CTAs. Linked from primary nav ("Prices"), footer, services hub, and sitemap.
- **Phase 3 — DONE.** Homepage simplified (Haze pass): 8 sections → 6 by removing the redundant reviews marquee (Testimonials is now the single, titled review moment); services grid curated to 6 in a calmer 3-col layout with links to /services + /menu; team teaser curated to the 4 leads (full 8 on /team); hero de-cluttered (removed the stale "Bülent · Gazi · Emir" line). ReviewsMarquee component kept in the repo, just unused on home. Reduced-motion still respected.
- **Phase 4 — DONE.** Grouped Zazou-style footer (no academy): brand + "Book an appointment" CTA on top, then four columns — **Salon** (About/Our Team/Reviews/Gallery/Blog), **Services** (8 services + Full price menu), **Visit** (address/hours/directions = the Location group), **Follow** (Instagram/Facebook/Google + "Hoş geldiniz"). Footer groups defined in `lib/nav.ts` (FOOTER_SALON, FOOTER_SERVICES).
- **Phase 5 — DONE (placeholder pass).** Consistency sweep (no Fresha/stale copy/`/book` links remain); contact email set to the real megashairsalon@gmail.com (from Phorest) sitewide; postal code confirmed V3B 0J1; launch-blockers updated. Real photos, finished bios for the 4 new stylists, and real reviews remain placeholders pending client materials — swap in place when they arrive.

## Open items — need from client
- **Salon photos** (interior/exterior) and **team photos** — placeholders used until then.
- **Bios** for the 4 new stylists: **Fara, Nadia, Rain, Angela** (currently honest placeholders: "profile coming soon", no fabricated experience).
- Confirm Instagram / Facebook handles for the footer.
- Confirm whether an **Academy/education** offering exists (currently omitted).

---

## Live Phorest data snapshot (captured 2026-07-31)
Prices are "from". Phorest is the source of truth and the client can change it anytime — this is a manual snapshot; update `lib/services.ts` (and future `lib/menu.ts`) if it drifts.

### Staff / levels
- Bülent (Bill) — Master Hairstylist LV.1
- Gazi — Master Hairstylist LV.3 (most senior)
- Emir — Master Hairstylist LV.2
- Fulya — Owner
- Fara — Senior LV.1
- Nadia — Senior LV.1
- Rain — Senior LV.1
- Angela — Senior LV.1

### Colour Services (29)
Men Hair Color $90 · Balayage (book w/ toner) $350 · Balayage + Blowout $400 · Base Break $85 · Color Correction (consult) · Consultation $0 · Crown Foil $110 · Crown Foil + Color $195 · Crown Foil + Color + Blowout $245 · Full Color Long $150 · Full Color Long + Blowdry $200 · Full Color Short + Blowout $170 · Full Color Short $120 · Full Head Babylights $320 · Full Head Babylight + Blowout $370 · Full Head Highlights $185 · Full Head Highlights + Blowout $235 · Half-Head Babylights $200 · Half-Head Babylights + Blowout $250 · Half-Head Highlights $145 · Half-Head Highlights + Blowout $195 · Partial Bleach Out $150 · Partial Bleach Out + Blowout $200 · Root Retouch $95 · Root Retouch + Blowout $145 · Roots Bleach Out $150 · Roots Bleach Out + Blowout $200 · Toner (add-on) $50 · Toner / Gloss $85

### Cut Services (8)
Bang Trim $20 · Haircut Women Long/Thick $75 · Haircut Women Short $60 · Hairwash $30 · Kid's Cut Boy (3–11) $40 · Kid's Cut Girl (3–11) $45 · Men Long Hair Cut $55 · Men's Cut $55

### Style Services (6)
Blowout with Extensions $75 · Braid $80 · Evening Style $90 · Long Hair Blowout $65 · Short Hair Blowout $50 · Updo $110

### Perm (9)
Digital Perm Medium–Long $280 · Digital Perm Short–Medium $250 · Down Perm $50 · Perm Men's $120 · Perm Women Long $198 · Perm Women Short $168 · Perm Women Medium $150 · Permanent Straightening Long $300 · Permanent Straightening Short $250

### Treatment (8)
Aveda Botanical $45 · Aveda Nutriplenish $40 · Aveda Scalp $40 · Deep Condition Mask $40 · Hair Botox $250 · Keratin Smoothing Short $300 · Keratin Smoothing Long $450 · Treatment (add-on) $30

### Brow Services (5)
Brow Lamination $85 · Brow Lamination + Tint + Shaping $125 · Brow Threading $20 · Brow Tinting $22 · Full Face Threading $50

### Extensions / Cosmetology (2)
Hair Extension (consult) · Hair Extension from $500

### Extra Service (3)
Academi $0 · Extra Service Time $50 · Redo $0
