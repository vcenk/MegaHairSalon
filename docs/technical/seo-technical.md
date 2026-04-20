# Technical SEO

## robots.txt

`app/robots.ts`:

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
    ],
    sitemap: "https://megashairsalon.ca/sitemap.xml",
    host: "https://megashairsalon.ca",
  };
}
```

## sitemap.xml

`app/sitemap.ts`:

```ts
import { MetadataRoute } from "next";
import { services, locations, team, blogPosts } from "@/lib/content";

const SITE = "https://megashairsalon.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE}/locations`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE}/team`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE}/about`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${SITE}/gallery`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE}/reviews`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${SITE}/contact`, priority: 0.8, changeFrequency: "yearly" as const },
    { url: `${SITE}/book`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const servicePages = services.map((s) => ({
    url: `${SITE}/services/${s.slug}`,
    lastModified: s.updatedAt,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const locationPages = locations.map((l) => ({
    url: `${SITE}/locations/${l.slug}`,
    lastModified: l.updatedAt,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const teamPages = team.map((t) => ({
    url: `${SITE}/team/${t.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.publishedAt,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...teamPages, ...blogPages];
}
```

## Image sitemap (separate)

Create `app/sitemap-images.xml/route.ts` to serve a dedicated image sitemap. Most salon sites skip this — direct local SEO win.

## Web App Manifest

`app/manifest.ts`:

```ts
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Megas Hair Salon",
    short_name: "Megas",
    description: "Master colourists in Coquitlam since 1984.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#B87333",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
```

## llms.txt

`public/llms.txt` — emerging standard for AI crawlers (ChatGPT, Perplexity, Claude):

```
# Megas Hair Salon

> Master colourists in Coquitlam, BC. Turkish hair artistry tradition since 1984. Specializing in balayage, blonde transformations, and precision cuts.

## Key Information
- Location: 150-1169 Pacific St, Coquitlam, BC V3B 0J1, Canada
- Phone: (778) 858-0396
- Hours: Mon-Sat 10am-6pm, Sun closed
- Founded: 1984 (Istanbul) | Vancouver location: 2025
- Team: Bülent (Bill), Gazi, Emir — master stylists. Fulya — director.

## Pages
- [Home](https://megashairsalon.ca/)
- [About](https://megashairsalon.ca/about)
- [Services](https://megashairsalon.ca/services)
- [Team](https://megashairsalon.ca/team)
- [Book Appointment](https://megashairsalon.ca/book)
- [Contact](https://megashairsalon.ca/contact)

## Specialties
- Balayage and ombre
- Blonde transformations and toning
- Precision haircuts
- Restorative hair treatments
- Keratin smoothing
- Root touch-ups
- Blow dry and styling

## Service Area
Coquitlam, Port Moody, Port Coquitlam, Burnaby, Vancouver
```

## Schema Markup

### LocalBusiness + HairSalon (sitewide, in root layout)

```ts
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://megashairsalon.ca/#business",
  name: "Megas Hair Salon",
  image: "https://megashairsalon.ca/images/salon-exterior.jpg",
  url: "https://megashairsalon.ca",
  telephone: "+17788580396",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "150-1169 Pacific St",
    addressLocality: "Coquitlam",
    addressRegion: "BC",
    postalCode: "V3B 0J1",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.2828,
    longitude: -122.7937,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/megashairsalon",
    "https://www.facebook.com/megashairsalon",
    "https://www.google.com/maps/place/MEGAS+Hair+Salon",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "146",
  },
  founder: {
    "@type": "Person",
    name: "Bülent (Bill)",
  },
  foundingDate: "1984",
  foundingLocation: "Istanbul, Turkey",
  areaServed: [
    { "@type": "City", name: "Coquitlam" },
    { "@type": "City", name: "Port Moody" },
    { "@type": "City", name: "Port Coquitlam" },
    { "@type": "City", name: "Vancouver" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hair Salon Services",
    itemListElement: [
      // Pulled from services data
    ],
  },
};
```

### Per Service Page

```ts
{
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Balayage",
  name: "Balayage Coquitlam",
  description: "Hand-painted balayage by master colourists at Megas Hair Salon in Coquitlam.",
  provider: { "@id": "https://megashairsalon.ca/#business" },
  areaServed: [{ "@type": "City", name: "Coquitlam" }],
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "250",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "200",
      maxPrice: "450",
    },
  },
}
```

### Per Team Page

```ts
{
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bülent",
  alternateName: "Bill",
  jobTitle: "Master Colourist",
  worksFor: { "@id": "https://megashairsalon.ca/#business" },
  knowsAbout: ["Balayage", "Blonde transformations", "Precision cutting"],
  image: "https://megashairsalon.ca/images/team/bulent.jpg",
}
```

### FAQPage (on every service + location page)

```ts
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}
```

### BreadcrumbList (every non-home page)

```ts
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://megashairsalon.ca/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://megashairsalon.ca/services" },
    { "@type": "ListItem", position: 3, name: "Balayage Coquitlam" },
  ],
}
```

Validate every schema at https://search.google.com/test/rich-results before pushing.

## Core Web Vitals Targets

| Metric | Target | How |
|---|---|---|
| **LCP** | < 2.0s | Hero image as `next/image` priority + preload, Vercel Edge cache |
| **INP** | < 150ms | Defer Framer Motion, no heavy JS on initial load, use RSC |
| **CLS** | < 0.05 | Width/height on every image, `next/font` with swap, no late-loaded ads |
| **TTFB** | < 600ms | Vercel Edge, ISR for content pages |
| **FCP** | < 1.0s | Inline critical CSS, minimal blocking JS |

## Performance Optimizations

- Static generation (SSG) for all marketing pages
- ISR with `revalidate: 86400` for blog
- All images via `next/image` with proper sizes prop
- Self-host fonts via `next/font` (no Google Fonts CDN call)
- Inline critical CSS (Next.js does this automatically)
- Defer non-critical JS (Framer Motion, analytics)
- Preconnect to required origins in `<head>`
- Use `<Link prefetch>` for primary navigation

## Redirects

In `next.config.ts`, set up 301 redirects for any old URLs:

```ts
async redirects() {
  return [
    { source: "/our-team", destination: "/team", permanent: true },
    { source: "/our-services", destination: "/services", permanent: true },
    { source: "/contact-us", destination: "/contact", permanent: true },
    // Trailing slash normalization
    { source: "/:path*/", destination: "/:path*", permanent: true },
  ];
}
```

## HTTPS & Headers

In `next.config.ts`:

```ts
async headers() {
  return [
    {
      source: "/:path*",
      headers: [
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ];
}
```

## Indexing Acceleration

Post-launch:
1. Submit `sitemap.xml` to Google Search Console
2. Submit `sitemap.xml` to Bing Webmaster Tools
3. Manually request indexing for top 10 pages via URL Inspection
4. Build 3–5 quality backlinks in week 1 (Tri-Cities Chamber, local lifestyle blogs, Birdeye profile)
5. Post on Google Business Profile weekly to keep entity signals strong
6. Share on Instagram + Facebook with link to relevant page (drives crawl)
