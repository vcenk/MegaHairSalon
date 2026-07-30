# Emilee's Sweet House — Website Concept

A demo/pitch website for **Emilee's Sweet House**, an authentic Turkish baklava shop in East Vancouver ([@emilees_sweet_house](https://www.instagram.com/emilees_sweet_house)).

Built as a **single, self-contained `index.html`** — no build step, no dependencies, no framework. Just open it in a browser or drop it on any static host.

## What's inside

- **Fully responsive** one-page site (desktop → mobile) with a sticky nav + mobile drawer.
- **Custom artwork** — every baklava piece, lokum, coffee cup, Ottoman pattern and the map are hand-drawn inline SVG/CSS. Nothing loads from a third party, so it can never look broken.
- **Motion** — scroll-reveal, animated stat counters, a phyllo-layer build animation, floating treats with pointer parallax, hero parallax, and a scrolling menu marquee. All motion respects `prefers-reduced-motion`.
- **Real business info** — address (3671 E Hastings St, Vancouver), phone (604) 568-7701, daily 10am–11pm hours, and links to their Instagram, Facebook and **Uber Eats**.
- **SEO basics** — descriptive `<title>` + meta description, semantic sections.

## Preview

Open the file directly:

```bash
open baklava-demo/index.html      # macOS
xdg-open baklava-demo/index.html  # Linux
```

Or serve it:

```bash
cd baklava-demo && python3 -m http.server 8000
# → http://localhost:8000
```

## Before showing / going live — quick swaps

Two placeholders to replace with the client's real details:

1. **Uber Eats link** — every "Order on Uber Eats" button points to a search URL
   (`https://www.ubereats.com/ca/search?q=Emilee's%20Sweet%20House`). Swap it for the
   store's exact Uber Eats storefront URL once you have it.
2. **Photography** — the SVG treats are polished placeholders. Dropping in a handful of
   the shop's real Instagram photos (baklava trays, künefe, the storefront) will make it
   sing. Search the file for `class="thumb"` / `class="gal"` to see where images go.

Prices and review quotes are illustrative — confirm the real ones before publishing.

## Deploy

Any static host works: Vercel, Netlify, Cloudflare Pages, GitHub Pages, or a plain S3
bucket. Point it at the `baklava-demo/` folder (or just upload `index.html`).
