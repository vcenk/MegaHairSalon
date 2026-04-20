# 02 — Information Architecture

## Sitemap

```
/                                          [Home]
├── /services                               [Services hub]
│   ├── /services/balayage-coquitlam
│   ├── /services/blonde-specialist-coquitlam
│   ├── /services/precision-haircut-coquitlam
│   ├── /services/hair-color-coquitlam
│   ├── /services/keratin-treatment-coquitlam
│   ├── /services/blow-dry-coquitlam
│   ├── /services/root-touch-up-coquitlam
│   └── /services/restorative-treatment-coquitlam
│
├── /locations                              [Locations hub]
│   ├── /locations/hair-salon-coquitlam
│   ├── /locations/hair-salon-port-moody
│   ├── /locations/hair-salon-port-coquitlam
│   └── /locations/turkish-hair-salon-vancouver
│
├── /team                                   [Team hub]
│   ├── /team/bulent-bill
│   ├── /team/gazi
│   ├── /team/emir
│   └── /team/fulya
│
├── /about                                  [Brand story 1984 → Vancouver]
├── /gallery                                [Portfolio]
├── /reviews                                [Social proof]
├── /book                                   [Booking page]
├── /contact                                [Visit, hours, map]
├── /blog                                   [Long-tail content]
│   └── /blog/[slug]
│
├── /privacy
├── /terms
└── /sitemap.xml
```

## URL Conventions

- All lowercase, hyphens for spaces
- Service slugs always include city: `balayage-coquitlam`
- **No trailing slashes.** Any request with a trailing slash is 301 redirected to the canonical no-slash form (see `technical/seo-technical.md`)
- No `.html` extensions
- No query strings for primary content

## Navigation

### Primary nav (desktop)
```
Megas (logo)        Services    Team    Gallery    About    Contact         [Book Now]
```

### Mobile nav
- Hamburger top-right
- Full-screen overlay
- Same items + phone number prominent + booking CTA

### Footer (4 columns)

**Column 1 — Brand:** Logo, tagline, "Since 1984. From Istanbul to Vancouver."

**Column 2 — Services:** Balayage, Blonde Specialist, Precision Cut, Hair Color, Keratin, Blow Dry, Root Touch Up, Restorative Treatment

**Column 3 — Visit:** Address, phone, email, hours, [Get Directions], [Book Now]

**Column 4 — Connect:** Instagram, Facebook, Google reviews link, "Hoş geldiniz"

**Footer bottom:** © 2026 Megas Hair Salon · Privacy · Terms · Sitemap

## Internal Linking Strategy

Every page links to:
- 3 related service pages (with keyword anchor text)
- 1 location page
- 1 team page
- Booking page (always)

**Hub-and-spoke structure:**
- `/services` links to all 8 service pages
- Each service page links to 3 related services + relevant team member
- `/team` links to all 4 team pages
- Each team member page links to their specialty services
- `/locations` hub links to all 4 location pages
- Each location page links to top 3 services + map + booking

## Breadcrumb Structure

```
Home > Services > Balayage Coquitlam
Home > Team > Bülent (Bill)
Home > Locations > Hair Salon Port Moody
Home > Blog > [Post Title]
```

Marked up with `BreadcrumbList` schema on every non-home page.

## Page Type Templates

| Type | Template | Min word count | Schema |
|---|---|---|---|
| Home | `home` | 600 | LocalBusiness, HairSalon, Organization, WebSite |
| Service | `service` | 700 | Service, FAQPage |
| Location | `location` | 900 | LocalBusiness, Place |
| Team | `person` | 400 | Person |
| Hub (services/team) | `hub` | 400 | CollectionPage |
| Blog post | `article` | 1200 | Article, FAQPage |
| About | `about` | 800 | AboutPage, Organization |
| Contact | `contact` | 200 | ContactPage, LocalBusiness |
