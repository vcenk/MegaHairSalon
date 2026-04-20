# Tech Stack

## Core

- **Framework:** Next.js 15 (App Router, React Server Components)
- **Language:** TypeScript
- **Hosting:** Vercel (Edge Network, ISR enabled)
- **CMS (optional):** Sanity or Payload CMS — only if Fulya needs to edit content directly
- **Domain/DNS:** Existing domain, point nameservers to Vercel

## Styling

- **Tailwind CSS** v4 with custom theme tokens from design system
- **CSS variables** for all design tokens
- **shadcn/ui** for primitives (Dialog, Sheet, Form, Button)

## Fonts

- **next/font** for font loading
- Cormorant Garamond (display, weights 300/500)
- Inter (body, weights 400/500/600)
- Both with `display: 'swap'`

## Animation

- **Framer Motion** — section reveals, hover effects, hero text reveal
- **Lenis** — smooth scroll
- **Tailwind CSS animate** for simple transitions

## Images

- **next/image** with AVIF + WebP
- All hero images `priority`, others `loading="lazy"` + `placeholder="blur"`
- Sharp for build-time blur placeholders

## SEO

- **Next.js Metadata API** for all meta tags
- **next-sitemap** OR built-in `app/sitemap.ts` for sitemaps
- **schema-dts** for typed JSON-LD schema

## Forms / Booking

- **React Hook Form** + **Zod** for validation
- Booking integration options (pick one):
  - **Fresha** (already used by Coquitlam salons, has embed widget)
  - **Square Appointments** (free, integrates with payments later)
  - **Vagaro** (industry standard for salons)
  - Custom Supabase backend (overkill unless you want to own the data)
- **Resend** for transactional emails

## Analytics & Monitoring

- **Google Analytics 4**
- **Google Search Console** (DNS verification)
- **Microsoft Clarity** (free heatmaps + session recordings)
- **Vercel Analytics** (Web Vitals from real users)
- **Vercel Speed Insights**

## Reviews / Social Proof

- **Google Reviews** pulled via Places API (cached in Supabase, refreshed daily)
- Or **Birdeye** widget (already in use)
- Manual quote selection for hero/testimonial sections

## Recommended Folder Structure

```
megas-hair/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # Home
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── reviews/page.tsx
│   │   ├── book/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx                # Hub
│   │   │   └── [slug]/page.tsx         # Service pages from MDX
│   │   ├── locations/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── team/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── manifest.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                             # shadcn primitives
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Nav.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── TeamGrid.tsx
│   │   ├── ReviewsCarousel.tsx
│   │   ├── BookingCTA.tsx
│   │   └── ...
│   ├── motion/
│   │   ├── FadeIn.tsx
│   │   ├── TextReveal.tsx
│   │   └── SmoothScroll.tsx
│   └── seo/
│       ├── LocalBusinessSchema.tsx
│       ├── ServiceSchema.tsx
│       ├── PersonSchema.tsx
│       ├── BreadcrumbSchema.tsx
│       └── FAQSchema.tsx
├── content/
│   ├── services/*.mdx
│   ├── locations/*.mdx
│   ├── team/*.mdx
│   └── blog/*.mdx
├── lib/
│   ├── seo.ts                          # Metadata helpers
│   ├── schema.ts                       # JSON-LD builders
│   ├── constants.ts                    # NAP, hours, social URLs
│   └── utils.ts
├── public/
│   ├── images/
│   ├── favicon.ico
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── og-default.jpg
│   └── llms.txt
└── next.config.ts
```

## Performance Budget

| Metric | Target | Hard limit |
|---|---|---|
| LCP (mobile) | < 2.0s | 2.5s |
| INP | < 150ms | 200ms |
| CLS | < 0.05 | 0.1 |
| Total JS (initial) | < 100KB | 150KB |
| Total CSS | < 30KB | 50KB |
| Hero image | < 150KB | 200KB |
| Lighthouse mobile | ≥ 95 | 90 |

## Deployment

- Production: `main` branch → vercel.com
- Preview: every PR gets unique URL
- Environment variables in Vercel dashboard
- `vercel.json` with redirect rules for any old URLs
