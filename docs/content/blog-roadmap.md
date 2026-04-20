# Blog Content Roadmap

A 12-month editorial calendar of long-tail SEO content. One post per month is the minimum sustainable pace. Each post supports a service or location page through internal linking.

## Content principles

- **Answer one specific question per post** — not generic "guides to hair"
- **Target real search queries** — use Google autocomplete + "People also ask" for inspiration
- **1200–1800 words** — enough depth to rank, not bloated for SEO's sake
- **Include images** from your gallery + custom diagrams where helpful
- **Internal-link** to relevant service/team/location pages
- **FAQ section** at the end of every post (with FAQPage schema)
- **Updated date** displayed (Google rewards freshness)

## Year 1 calendar

### Month 1 — How much does balayage cost in Coquitlam?

- **Target:** "balayage cost coquitlam", "how much is balayage in vancouver"
- **Length:** 1500 words
- **Angle:** Honest pricing breakdown, what affects cost, what you actually get at different price points
- **Internal links:** /services/balayage-coquitlam, /team/bulent-bill, /book

### Month 2 — Balayage vs highlights vs ombre: what's the difference?

- **Target:** "balayage vs highlights", "balayage vs ombre"
- **Length:** 1400 words
- **Angle:** Visual comparison with photos from your gallery, who each technique suits
- **Internal links:** /services/balayage-coquitlam, /services/blonde-specialist-coquitlam, /services/hair-color-coquitlam

### Month 3 — How to find a great hair colourist in the Tri-Cities

- **Target:** "best hair colourist coquitlam", "experienced colourist tri-cities"
- **Length:** 1500 words
- **Angle:** What to look for, what questions to ask, red flags
- **Internal links:** /team/bulent-bill, /team/gazi, /team/emir, /services hub

### Month 4 — Going blonde: what to expect, what to avoid

- **Target:** "going blonde for the first time", "platinum blonde transformation"
- **Length:** 1800 words
- **Angle:** The honest process, multiple sessions, hair health, before/after gallery
- **Internal links:** /services/blonde-specialist-coquitlam, /team/bulent-bill, /services/restorative-treatment-coquitlam

### Month 5 — How often should you actually get a haircut?

- **Target:** "how often haircut", "haircut frequency by hair type"
- **Length:** 1300 words
- **Angle:** By hair type, length, and goal — practical, not generic
- **Internal links:** /services/precision-haircut-coquitlam, /team hub, /book

### Month 6 — Keratin treatment vs Brazilian blowout vs hair botox

- **Target:** "keratin vs brazilian blowout", "hair botox treatment"
- **Length:** 1600 words
- **Angle:** Differences, who each is for, longevity, safety
- **Internal links:** /services/keratin-treatment-coquitlam, /services/restorative-treatment-coquitlam

### Month 7 — Bridal hair guide for Tri-Cities brides

- **Target:** "bridal hair coquitlam", "wedding hair port moody"
- **Length:** 1500 words
- **Angle:** Timeline (6 months out → day-of), trial process, styling options, real photos
- **Internal links:** /services/blow-dry-coquitlam, /book, /contact

### Month 8 — Why your colour fades fast (and how to fix it)

- **Target:** "hair colour fading", "colour-treated hair care"
- **Length:** 1400 words
- **Angle:** Causes, products to use/avoid, salon-grade fixes
- **Internal links:** /services/hair-color-coquitlam, /services/root-touch-up-coquitlam, /services/restorative-treatment-coquitlam

### Month 9 — Box dye to balayage: how we fix it

- **Target:** "box dye removal", "fix box dye coquitlam"
- **Length:** 1700 words
- **Angle:** Real case studies (with permission), the corrective process, realistic timelines
- **Internal links:** /services/balayage-coquitlam, /services/blonde-specialist-coquitlam, /team/bulent-bill

### Month 10 — Hair care for Vancouver winters

- **Target:** "winter hair care vancouver", "dry hair winter"
- **Length:** 1300 words
- **Angle:** Local angle (PNW humidity + heating), products, in-salon treatments
- **Internal links:** /services/restorative-treatment-coquitlam, /services/keratin-treatment-coquitlam

### Month 11 — Turkish hair styling techniques explained

- **Target:** "turkish hair styling", "kuaför vancouver"
- **Length:** 1500 words
- **Angle:** Heritage piece — what makes the Turkish tradition specific, with team perspectives
- **Internal links:** /locations/turkish-hair-salon-vancouver, /about, /team hub

### Month 12 — Best hair salons in Coquitlam (and what makes a good one)

- **Target:** "best hair salon coquitlam", "top hair salons tri-cities"
- **Length:** 1800 words
- **Angle:** Honest framework for evaluating salons (not a self-promotional list), then position Megas naturally within it
- **Internal links:** /locations/hair-salon-coquitlam, /about, /team hub, /reviews

## Year 2 — keep going

Repeat-publishing cycle:
- Refresh year-1 posts every 12 months (update date, add new info)
- Add 1 new post per month targeting newly discovered long-tail keywords from Search Console
- Consider video content (Bülent doing a balayage walk-through, Emir's blowout technique) — embed YouTube + transcribe for SEO

## Promotion playbook (per post)

1. Publish on a Tuesday or Wednesday morning (best engagement window)
2. Submit to Google Search Console URL Inspection → Request Indexing
3. Share on Instagram (story + grid post linking to bio)
4. Share on Facebook page
5. Email to client list (if/when you build one) — even 200 subscribers drives meaningful traffic
6. Pin highest-performing post in the blog hub
7. After 30 days, check Search Console for impressions — if 0, refresh the title/H1 with a stronger keyword

## Schema for blog posts

```ts
{
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How much does balayage cost in Coquitlam?",
  image: "https://megashairsalon.ca/blog/balayage-cost-cover.jpg",
  datePublished: "2026-05-15",
  dateModified: "2026-05-15",
  author: {
    "@type": "Person",
    name: "Bülent Megas",
    url: "https://megashairsalon.ca/team/bulent-bill",
  },
  publisher: {
    "@type": "Organization",
    name: "Megas Hair Salon",
    logo: {
      "@type": "ImageObject",
      url: "https://megashairsalon.ca/logo.png",
    },
  },
  mainEntityOfPage: "https://megashairsalon.ca/blog/balayage-cost-coquitlam",
}
```

Plus FAQPage schema for the FAQ section at the bottom.

## Blog template structure

Every post:

1. **H1** — the question or specific topic (matches title tag closely)
2. **Lead paragraph** — answer the question in 2–3 sentences (featured-snippet-friendly)
3. **Detailed sections** — H2s for each subtopic, H3s where needed
4. **Visual element** — image, photo grid, or simple diagram (every 400 words minimum)
5. **Internal links** — 3–5 to relevant pages
6. **FAQ section** — 4–6 related questions
7. **Author byline** — with photo + bio link
8. **Related posts** — 3 cards
9. **CTA** — booking or consultation, in keeping with post topic

## Production tips

- Write a batch of 3 posts at a time (more efficient than monthly start-from-zero)
- Use voice memo to brain-dump expertise → transcribe → edit → publish (faster than typing from scratch)
- Stylists are the experts — interview them and write in their voice rather than guessing
- Always include real, named examples ("Last week, Bülent did a colour correction where...") — Google's helpful-content system rewards specificity
