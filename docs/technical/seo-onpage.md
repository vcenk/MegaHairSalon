# On-Page SEO Template

Apply this checklist to **every** page of the site.

## Metadata (Next.js Metadata API)

```ts
export const metadata: Metadata = {
  title: "Primary Keyword | Secondary Modifier | Megas Hair Salon",
  description: "140–155 character description with primary keyword in first 100 chars, value proposition, and CTA. Include phone or location.",
  alternates: {
    canonical: "https://megashairsalon.ca/path",
  },
  openGraph: {
    title: "Page-specific OG title",
    description: "OG description",
    url: "https://megashairsalon.ca/path",
    siteName: "Megas Hair Salon",
    images: [{ url: "/og-page-specific.jpg", width: 1200, height: 630 }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter title",
    description: "Twitter desc",
    images: ["/og-page-specific.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
```

## Title Tag Rules

- 50–60 characters max (anything over 60 truncates in SERPs)
- Primary keyword first
- Brand name last, separated by `|`
- Each page must have a unique title
- No keyword stuffing — natural language

**Templates by page type:**
- Home: `Hair Salon Coquitlam | Master Colourists Since 1984 | Megas`
- Service: `Balayage Coquitlam | Master Colourists | Megas Hair Salon`
- Location: `Hair Salon Port Moody | 5 Min from Megas | Coquitlam`
- Team: `Bülent — Master Colourist & Blonde Specialist | Megas`
- Blog: `[Question or Topic] | Megas Hair Salon Coquitlam`

## Meta Description Rules

- 140–155 characters
- Includes primary keyword once, naturally
- Includes a benefit or differentiator
- Includes a CTA verb (Book, Visit, Discover)
- Includes phone number on local pages where space allows

## Heading Hierarchy

- **One H1 per page** — contains primary keyword
- H2s introduce major sections, include secondary keywords
- H3s for subsections
- Never skip levels (H1 → H3 is wrong)
- Don't style by heading level — use semantic level + visual class separately

## URL Slug Rules

- Lowercase, hyphens only
- Includes primary keyword
- Short (3–5 words ideal)
- No stop words unless natural ("the", "and", "of" — usually skip)
- No dates or IDs in marketing URLs

## Body Content Rules

- Primary keyword in first 100 words
- Primary keyword density: 0.5–1.5% (don't stuff)
- Use semantic synonyms and related terms naturally
- Internal links: 3–5 per page minimum, with descriptive anchor text
- External links: 1–2 to authoritative sources where relevant (e.g., to a hair color brand's official site)
- Word count by template (see IA doc)
- Short paragraphs (2–4 sentences)
- Use bulleted lists where it aids scanning, not for everything

## Image SEO

Every image needs:
- **Filename:** descriptive, hyphenated — `balayage-result-bulent-megas-coquitlam.jpg`
- **Alt text:** descriptive, includes keyword if natural — never "image of" or just keyword stuffing
- **Width/height** attributes set
- **Loading:** `priority` for above-fold, `lazy` for below
- **Format:** AVIF/WebP via next/image
- **Compression:** under 200KB per image

## Internal Linking

Every page links to:
- 3 related service pages
- 1 location page
- 1 team page
- Booking CTA (always)
- Home (via logo)

Use descriptive anchor text — never "click here" or "read more."

✅ "Learn about our [balayage process in Coquitlam](/services/balayage-coquitlam)"
❌ "Read more about balayage [here](/services/balayage-coquitlam)"

## FAQ Sections

Add an FAQ section to every service and location page:
- 4–6 questions
- Real questions people search ("How much does balayage cost in Coquitlam?")
- Answers 40–80 words each
- Mark up with `FAQPage` schema → eligible for rich results

## Pre-Launch Checklist (per page)

- [ ] Title tag set, unique, 50–60 chars
- [ ] Meta description set, 140–155 chars
- [ ] H1 present, unique, contains primary keyword
- [ ] Canonical URL set
- [ ] Open Graph image (1200×630)
- [ ] All images have alt text + dimensions
- [ ] Schema markup added and validated
- [ ] Internal links to 3+ related pages
- [ ] Breadcrumb present (except home)
- [ ] No broken links
- [ ] Mobile usability passes
- [ ] Lighthouse SEO score = 100
