# Home Page

**URL:** `/`
**Template:** `home`
**Primary keyword:** hair salon Coquitlam
**Secondary keywords:** master colourists, balayage Coquitlam, Turkish hair salon Vancouver

## SEO Metadata

```
Title: Hair Salon Coquitlam | Master Colourists Since 1984 | Megas
Description: Award-worthy hair salon in Coquitlam. Master colourists in balayage, blonde, and precision cuts. Turkish artistry since 1984. Book at (778) 858-0396.
Canonical: https://megashairsalon.ca/
OG Image: /og-home.jpg (1200×630, salon interior with brand mark)
```

## Schema

- LocalBusiness + HairSalon (full)
- Organization
- WebSite with SearchAction

## Page Sections

### 1. Hero

**Layout:** Full viewport, single hero image (salon space), text left-aligned

**Content:**
- **Eyebrow label:** SINCE 1984 · ISTANBUL → COQUITLAM
- **H1:** Hair, sculpted with intention.
- **Subhead (1 sentence):** Master colourists shaping Coquitlam's most refined cuts, blondes, and balayages — with four decades of Turkish artistry.
- **Primary CTA:** Book an appointment
- **Secondary CTA:** Discover the craft → /about

**Motion:**
- Hero image fades in over 1.2s
- Headline: word-by-word reveal, stagger 0.04s
- Subhead + CTAs: fade up after headline completes

**Image:** Wide salon interior, natural light, no people. Format: 2400×1600.

### 2. Brand origin teaser

**Layout:** 2-column. Left: editorial portrait or salon detail. Right: text.

**Content:**
- **Eyebrow:** OUR STORY
- **Headline (H2):** Forty-one years. Two continents. One philosophy.
- **Body (2 paragraphs):**

> Our journey began in 1984, in a small Istanbul salon built on a single belief — that great hair begins with great listening. Over four decades, we grew across Turkey, refining a craft that puts the person before the trend.
>
> In 2025, we brought that craft to Coquitlam. Today, master stylists Bülent, Gazi, and Emir lead a salon where every cut is sculpted, every colour is composed, and every visit is unhurried.

- **Link:** Read our story → /about

### 3. Services grid

**Layout:** 8 service cards in a 4×2 grid (desktop), 2×4 (tablet), stacked (mobile)

**Each card:**
- Image (4:5 ratio)
- Service name (serif, large)
- One-line descriptor
- Price range
- Link to dedicated service page

**Services:**
1. Balayage — From $250 → /services/balayage-coquitlam
2. Blonde Specialist — From $280 → /services/blonde-specialist-coquitlam
3. Precision Cut — From $85 → /services/precision-haircut-coquitlam
4. Hair Colour — From $180 → /services/hair-color-coquitlam
5. Keratin Smoothing — From $300 → /services/keratin-treatment-coquitlam
6. Blow Dry — From $65 → /services/blow-dry-coquitlam
7. Root Touch Up — From $120 → /services/root-touch-up-coquitlam
8. Restorative Treatment — From $90 → /services/restorative-treatment-coquitlam

**Below grid:** "View all services" link → /services

### 4. Reviews marquee (trust band)

**Purpose:** Instant social proof — 146 Google reviews at 4.8★ — shown as a continuous, slow-scrolling band of short client quotes.

See full component spec: [`components/reviews-marquee.md`](../components/reviews-marquee.md)

**Layout:** Two horizontal rows scrolling in opposite directions, edge-faded, with the heading "What 146 clients say · ★★★★★ 4.8 on Google" above and a "Read all reviews on Google →" CTA below.

**Why this position:** After services (which raises questions like "are they really good?") and before The Artisans (which answers "yes, here's who you'll work with"). Maximum trust impact.

### 5. The artisans

**Layout:** Horizontal 4-column on desktop, swipe carousel on mobile

**Each:**
- Editorial portrait (4:5)
- Name
- Title
- Years of experience badge
- Link to bio

People:
- Bülent — Master Colourist · 35 years
- Gazi — Master Stylist · 41 years
- Emir — Colour & Styling Master · 23 years
- Fulya — Director & Client Experience

### 6. Featured work (gallery teaser)

**Layout:** Asymmetric grid, 6 images, varied sizes, no titles

**CTA:** See the gallery → /gallery

### 7. Reviews

**Layout:** 3 large pull-quotes in serif, no star icons, attribution below

**Content:** Pull strongest reviews from existing 91 (real client names, first name + last initial only)

Example:
> "I had been looking for someone like Bill in Vancouver for years — truly, he has magic hands."
>
> — Sarah M., Coquitlam

**Below:** Star rating + count + link to /reviews
- 4.8 ★★★★★ · 146 Google reviews

### 8. Visit / location

**Layout:** 2-column. Left: address details + hours. Right: embedded map (lazy-loaded).

**Content:**
- 150-1169 Pacific St
- Coquitlam, BC V3B 0J1
- (778) 858-0396
- Hours table (Mon–Sat 10am–6pm, Sun closed)
- [Get directions] button
- [Book online] button (primary CTA, copper)

### 9. Footer

(Per IA spec — 4 columns)

## Performance Budget

- LCP < 1.8s (hero image is the LCP element — must be priority + preloaded)
- Total JS for home: < 80KB
- Hero image: < 200KB at served size
- Font preload: only display weight 500 + body weight 400

## Critical CTAs

Home page must have **3** clear booking entry points:
1. Hero primary CTA
2. Sticky header "Book" button (always visible)
3. Visit section CTA

Plus phone number visible in header on mobile.
