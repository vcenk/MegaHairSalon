# Launch Blockers

Items that must be resolved before production deployment.

## Must confirm with client
- [x] Contact email set to megashairsalon@gmail.com (confirmed on the salon's Phorest page). Swap if the client provides a branded address.
- [x] Postal code confirmed V3B 0J1 (matches the salon's Phorest page).
- [x] Booking: links out to Phorest (https://megashairsalon.phorest.me). No embed/account ID needed.
- [ ] Geo coordinates verified against actual storefront (currently 49.2814, -122.7905)
- [ ] Instagram and Facebook URLs confirmed for sameAs schema + footer

## Must complete before launch
- [ ] Commission professional photo shoot (see docs/SHOT-LIST.md)
- [ ] Replace all SVG placeholders (35: hero, salon, results, OG, + 8 stylist portrait/action pairs) with real AVIF/WebP images once the client sends salon + team photos
- [ ] Remove dangerouslyAllowSVG from next.config.ts
- [ ] Verify Google Business Profile NAP matches site exactly
- [ ] Set up Resend account and verify sending domain
- [ ] Set up GA4 property and add measurement ID
- [ ] Set up Microsoft Clarity project
- [ ] Run full Lighthouse audit on all templates (target >=95 mobile)
- [ ] Submit sitemap to GSC + Bing Webmaster Tools
- [ ] Set up 301 from any additional legacy URLs found in GSC
- [ ] Replace stub content on all 8 /services/* pages with full spec content (FAQs, pricing tables, process details) per docs/services/*.md
- [ ] Replace stub content on all 8 /team/* pages with full bios, training history, and client-work examples (masters: Bülent, Gazi, Emir; owner: Fulya; seniors: Fara, Nadia, Rain, Angela — last 4 need bios + photos from client)
- [ ] Replace stub content on all 4 /locations/* pages with driving directions, transit, and local recommendations per docs/locations/*.md
- [ ] Swap the Visit section map placeholder for a real lazy-loaded Google Maps iframe (or static map image) — see components/sections/Visit.tsx and app/contact/page.tsx
- [x] Booking wired: /book and all CTAs link out to Phorest (see lib/constants.ts BOOKING.url)
- [ ] Write initial blog posts (aim for 3–6 for launch) per docs/content/blog-roadmap.md
- [ ] Finalise Privacy + Terms copy with the client (current text is a good-faith placeholder)

## Post-launch (week 1)
- [ ] Claim unclaimed Yelp listing
- [ ] Build 5 quality citations (Yellow Pages CA, n49, Cylex, etc.)
- [ ] Request manual indexing for top 10 URLs in GSC
- [ ] Manually curate 16 best reviews for reviews marquee constants
