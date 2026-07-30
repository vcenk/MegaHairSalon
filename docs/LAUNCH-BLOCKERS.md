# Launch Blockers

Items that must be resolved before production deployment.

## Must confirm with client
- [ ] Real contact email (currently placeholder: hello@megashairsalon.ca)
- [ ] Postal code: confirm V3B 0J1 (Birdeye/Yelp) vs V3B 0H9 (old site). Fix everywhere.
- [x] Booking platform confirmed: **Phorest** (https://phorest.com/book/salons/megashairsalon). Wired as an external CTA on /book (was a Fresha placeholder). Services + pricing live on Phorest.
- [ ] Short bios + titles for the 4 new stylists — Fara, Nadia, Rain, Angela (team grew 4 → 8; see docs/redesign-plan.md)
- [ ] **Design assets from Salon Haze** (client wants Haze's look/palette): screenshots or hex colours + font names. The build sandbox's egress policy blocks salonhaze.com, so these must be supplied — see docs/redesign-plan.md, Phase 0.
- [ ] Geo coordinates verified against actual storefront (currently 49.2814, -122.7905)
- [ ] Instagram and Facebook URLs confirmed for sameAs schema + footer

## Must complete before launch
- [ ] Commission professional photo shoot (see docs/SHOT-LIST.md)
- [ ] Replace all 27 SVG placeholders with real AVIF/WebP images
- [ ] Remove dangerouslyAllowSVG from next.config.ts
- [ ] Verify Google Business Profile NAP matches site exactly
- [ ] Set up Resend account and verify sending domain
- [ ] Set up GA4 property and add measurement ID
- [ ] Set up Microsoft Clarity project
- [ ] Run full Lighthouse audit on all templates (target >=95 mobile)
- [ ] Submit sitemap to GSC + Bing Webmaster Tools
- [ ] Set up 301 from any additional legacy URLs found in GSC
- [ ] Replace stub content on all 8 /services/* pages with full spec content (FAQs, pricing tables, process details) per docs/services/*.md
- [ ] Replace stub content on all 4 /team/* pages with full bios, training history, and client-work examples per docs/team/*.md
- [ ] Replace stub content on all 4 /locations/* pages with driving directions, transit, and local recommendations per docs/locations/*.md
- [ ] Swap the Visit section map placeholder for a real lazy-loaded Google Maps iframe (or static map image) — see components/sections/Visit.tsx and app/contact/page.tsx
- [x] Wire booking into /book (removed the dashed-border Fresha stub) — now links to the Phorest booking page. Optional: swap the external CTA for an inline iframe embed once Phorest confirms framing is permitted for the account.
- [ ] Write initial blog posts (aim for 3–6 for launch) per docs/content/blog-roadmap.md
- [ ] Finalise Privacy + Terms copy with the client (current text is a good-faith placeholder)

## Post-launch (week 1)
- [ ] Claim unclaimed Yelp listing
- [ ] Build 5 quality citations (Yellow Pages CA, n49, Cylex, etc.)
- [ ] Request manual indexing for top 10 URLs in GSC
- [ ] Manually curate 16 best reviews for reviews marquee constants
