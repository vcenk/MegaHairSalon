# Launch Blockers

Items that must be resolved before production deployment.

## Must confirm with client
- [ ] Real contact email (currently placeholder: hello@megashairsalon.ca)
- [ ] Postal code: confirm V3B 0J1 (Birdeye/Yelp) vs V3B 0H9 (old site). Fix everywhere.
- [ ] Fresha account ID for booking widget embed
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

## Post-launch (week 1)
- [ ] Claim unclaimed Yelp listing
- [ ] Build 5 quality citations (Yellow Pages CA, n49, Cylex, etc.)
- [ ] Request manual indexing for top 10 URLs in GSC
- [ ] Manually curate 16 best reviews for reviews marquee constants
