# Megas Hair Salon Redesign

Premium Turkish hair salon website redesign. Full specification in ./docs.

## Critical context
- Business: Megas Hair Salon, 150-1169 Pacific St, Coquitlam, BC V3B 0J1
- Phone: (778) 858-0396
- Rating: 4.8 stars from 146 Google reviews
- Founded: 1984 (Istanbul) | Vancouver location: 2025
- Team: Bulent (Bill), Gazi, Emir - master stylists. Fulya - director.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 with custom design tokens from docs/01-design-system.md
- Framer Motion (animations) + Lenis (smooth scroll)
- shadcn/ui primitives
- next/font: Cormorant Garamond (display) + Inter (body)
- Hosting: Vercel

## Strategy (per docs/00-strategy.md)
- Target Coquitlam + Tri-Cities, NOT Vancouver proper
- Moat keyword: 'Turkish hair salon Vancouver' (low competition)
- Premium positioning: master colourists, 1984 heritage

## Hard constraints
- Mobile Lighthouse score must be >= 95
- All animations must respect prefers-reduced-motion
- Every page needs unique title, meta description, canonical, OG image
- Schema markup on every page (LocalBusiness sitewide, Service/Person/FAQPage as appropriate)
- NAP consistency: 150-1169 Pacific St, Coquitlam, BC V3B 0J1 / (778) 858-0396

## Workflow rule
- ALWAYS read the relevant doc in ./docs before building any page or component
- Reference docs by path: 'per docs/services/balayage-coquitlam.md'
- Stop and ask if any spec is unclear or conflicts with another doc
