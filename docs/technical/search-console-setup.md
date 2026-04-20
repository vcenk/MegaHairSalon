# Google Search Console — Full Setup

## Pre-Launch (in staging)

- [ ] Build sitemap.xml and verify it loads at `/sitemap.xml`
- [ ] Build robots.txt and verify it loads at `/robots.txt`
- [ ] Confirm all canonical URLs point to production domain
- [ ] Confirm no `noindex` meta tags on production pages
- [ ] Validate every schema at https://search.google.com/test/rich-results
- [ ] Run mobile-friendly test on key pages
- [ ] Lighthouse mobile score ≥ 95 across all templates
- [ ] All images have alt text + dimensions
- [ ] All pages have unique title + description

## Launch Day

### 1. Verify Domain Ownership

**Method: DNS TXT record (most reliable)**

1. In GSC, click **Add property** → choose **Domain** (not URL prefix)
2. Enter `megashairsalon.ca`
3. Copy the TXT record value Google provides
4. Add to your DNS:
   - Type: `TXT`
   - Host: `@`
   - Value: `google-site-verification=xxxxxxxxxxxx`
5. Wait 10–60 minutes, click **Verify**

This verifies ALL subdomains (www, blog, etc.) at once.

### 2. Submit Sitemaps

In **Sitemaps** section:
- Submit `sitemap.xml`
- Submit `sitemap-images.xml` (separately)

Wait 24–48 hours, check status = "Success" with all URLs discovered.

### 3. Set International Targeting

**Legacy Tools** → **International Targeting**:
- Country: Canada
- (hreflang not needed — single language site)

### 4. Manually Request Indexing

For the top 10 most important URLs, use **URL Inspection** → **Request Indexing**:

1. `/` (home)
2. `/services/balayage-coquitlam`
3. `/services/blonde-specialist-coquitlam`
4. `/services/precision-haircut-coquitlam`
5. `/services/hair-color-coquitlam`
6. `/locations/hair-salon-coquitlam`
7. `/locations/turkish-hair-salon-vancouver`
8. `/team/bulent-bill`
9. `/about`
10. `/contact`

Daily quota is ~10 URLs, so this fills the limit.

### 5. Set Preferred Domain

Decide: `megashairsalon.ca` (no www) — recommended.

In `next.config.ts`, add a redirect:

```ts
async redirects() {
  return [
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.megashairsalon.ca" }],
      destination: "https://megashairsalon.ca/:path*",
      permanent: true,
    },
  ];
}
```

### 6. Connect Google Business Profile

- In GBP dashboard, go to **Edit profile** → **Contact**
- Confirm website URL matches GSC property exactly
- This links GBP performance data with GSC

### 7. Connect Google Analytics 4

- Set up GA4 property
- Add measurement ID to site (via Google Tag in `layout.tsx`)
- In GSC: **Settings** → **Associations** → link GA4 property

### 8. Connect Bing Webmaster Tools

- Free, takes 5 minutes
- Visit https://www.bing.com/webmasters
- Sign in → **Import from GSC** → select property → done
- Sitemaps and verification import automatically
- Bing powers DuckDuckGo, ChatGPT search, and Yahoo — small but real traffic

### 9. Enable Email Alerts

In **Settings** → **Email preferences**:
- Enable: Coverage issues, Manual actions, Security issues, Performance changes

## Week 1 Post-Launch

- [ ] Verify sitemap submitted successfully (check **Sitemaps**)
- [ ] Check **Pages** report — should show URLs being indexed
- [ ] Check **Coverage** for any errors (404s, server errors, redirect loops)
- [ ] Check **Mobile Usability** — should be zero issues
- [ ] Check **Manual Actions** — should be empty
- [ ] Check **Security Issues** — should be empty
- [ ] Set up **Microsoft Clarity** for heatmaps (free, 5 min)
- [ ] Build 3 high-quality citations: Tri-Cities Chamber, Yellow Pages CA, n49

## Weekly Monitoring (set a recurring 30-min slot)

- **Performance** report: which queries are bringing impressions/clicks?
- **Pages**: any new indexing issues?
- **Core Web Vitals**: any URLs in the "Poor" or "Needs Improvement" bucket?
- **Top growing queries**: opportunities for new content
- **Top declining queries**: pages needing refresh

## Monthly Tasks

- Review search query report — find new long-tail opportunities
- Publish 1 blog post targeting a long-tail keyword
- Refresh 1 existing service/location page (Google rewards freshness)
- Build 1–2 quality backlinks
- Respond to all new Google reviews
- Post 4 photos to Google Business Profile

## Quarterly Audits

- Full Lighthouse audit on top 10 pages
- Schema validation re-check
- Broken link audit (use Screaming Frog free version)
- Competitor SERP analysis
- Refresh sitemap if pages added/removed
- Review GA4 conversion funnel for booking drop-off

## Off-Page Setup (parallel to GSC)

### Critical local citations (week 1)

- [ ] **Google Business Profile** — claim, optimize, add 30+ photos
- [ ] **Bing Places** — submit
- [ ] **Apple Maps Connect** — submit (Mac users skip Google often)
- [ ] **Yelp** — claim profile (currently unclaimed)
- [ ] **Facebook Page** — verify NAP consistency
- [ ] **Instagram bio** — link to site

### Secondary citations (week 2–4)

- [ ] Yellow Pages Canada (yellowpages.ca)
- [ ] n49.ca
- [ ] Cylex Canada
- [ ] FourSquare
- [ ] Tupalo
- [ ] HotFrog
- [ ] OpenSettings
- [ ] Tri-Cities Chamber of Commerce member listing
- [ ] BC Business Directory
- [ ] Visit Coquitlam (if applicable)

**Critical:** NAP (Name, Address, Phone) must be **identical** everywhere — same suite number, same formatting, same phone format.

Current NAP discrepancy to resolve first:
- Site says: V3B 0H9
- Birdeye/Yelp say: V3B 0J1
- **Fix:** verify correct postal code with Canada Post, then update everywhere

### Backlink opportunities

- Tri-Cities lifestyle blogs (guest post or local feature)
- BC wedding directories (bridal hair angle)
- Local Turkish/Middle Eastern community sites
- Real estate agents promoting "best of Coquitlam" lists
- Interior designers/photographers who shot the salon
- Hair product brands (L'Oréal Pro, Wella, Kérastase) — request salon listing

## Reporting Dashboard

Build a simple dashboard combining:
- GSC (impressions, clicks, avg position)
- GA4 (sessions, conversions, top pages)
- GBP (calls, direction requests, photo views)
- Vercel Analytics (Core Web Vitals)

Free option: **Looker Studio** with GSC + GA4 connectors.
