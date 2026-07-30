# 01 — Design System

> **2026 redesign — "Salon Haze" direction.** The client asked for the clean,
> airy look of salonhaze.com. This document was updated to that idiom: a bright
> white canvas, warm greige section bands, a geometric sans set in wide-tracked
> uppercase, and fully-rounded (pill) buttons — no serif. Reference screenshots
> live with the client; see docs/redesign-plan.md for scope.

## Design Principles

1. **Whitespace is the luxury.** Generous padding, narrow content widths, room to breathe.
2. **Typography over decoration.** A thin, wide-tracked geometric sans in uppercase carries the brand — no flourish, no serif.
3. **Imagery is non-negotiable.** Every photo earns its place — full-bleed where it can be — no stock fillers.
4. **Motion is restraint.** Every animation has purpose; nothing bounces.
5. **Speed is premium.** Slow site = cheap brand.

---

## Color Palette

```css
/* Base */
--color-bg:           #FFFFFF;  /* Bright white canvas — the Haze look */
--color-bg-alt:       #ECE7DD;  /* Warm greige — alternating section bands */
--color-text:         #1C1C1C;  /* Charcoal — never pure black */
--color-text-muted:   #6E6E6E;  /* Grey body copy */
--color-border:       #E4DFD5;

/* Brand accent — muted antique gold (hairline rules, links) */
--color-accent:       #B0925E;  /* Primary accent */
--color-accent-dark:  #8C7043;  /* Hover states */
--color-accent-soft:  #F1E9DA;  /* Subtle backgrounds / selection */

/* Functional */
--color-success:      #4A6741;
--color-error:        #8B2E2E;
```

**Usage rules:**
- Mostly white + charcoal type + warm greige bands; gold is a whisper, not a fill
- Gold only on: hairline dividers, key links/hover, small accents — never a large background block
- Buttons are charcoal (or outline), not gold
- Alternate white and greige sections for rhythm, à la Salon Haze

---

## Typography

### Fonts

```css
/* Display — geometric (Futura-style) sans for headlines.
   Set UPPERCASE with wide tracking; use the thin (300) weight at large sizes. */
--font-display: "Jost", "Futura", "Century Gothic", -apple-system, sans-serif;

/* Body — clean humanist sans */
--font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

/* Accent label — for small uppercase labels */
--font-label: "Inter", sans-serif;
```

Use `next/font` with `display: 'swap'`. Load Jost weights 300/400/500/600.

**Display treatment:** big statement headlines (hero, page heros, brand mark)
are `text-transform: uppercase`, `font-weight: 300`, letter-spacing
`--tracking-display-caps` (0.06em). Body-adjacent headings may stay sentence
case at `--tracking-display` (0.02em).

### Scale

```css
--text-hero:    clamp(3.5rem, 9vw, 8.75rem);   /* 56–140px — hero only */
--text-h1:      clamp(2.75rem, 6vw, 5rem);     /* 44–80px */
--text-h2:      clamp(2rem, 4vw, 3.25rem);     /* 32–52px */
--text-h3:      clamp(1.5rem, 2.5vw, 2rem);    /* 24–32px */
--text-body-lg: 1.25rem;   /* 20px — lead paragraphs */
--text-body:    1.0625rem; /* 17px — body */
--text-small:   0.9375rem; /* 15px */
--text-label:   0.75rem;   /* 12px uppercase */

/* Line heights */
--leading-display: 1.05;
--leading-tight:   1.2;
--leading-body:    1.6;

/* Letter spacing */
--tracking-display: -0.02em;
--tracking-label:   0.18em; /* uppercase */
```

### Typography rules

- Headlines: serif, tight leading, slight negative tracking
- Body: sans, 1.6 line-height, max 65 characters per line
- Labels: uppercase, wide letter-spacing, small size
- **Never** use bold serif for body text
- **Never** mix more than 2 type families on one page

---

## Spacing Scale

```css
--space-1:  0.25rem;  /*  4px */
--space-2:  0.5rem;   /*  8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
--space-40: 10rem;    /* 160px */
```

**Section padding:**
- Mobile: `--space-16` top/bottom (64px)
- Tablet: `--space-24` (96px)
- Desktop: `--space-32` to `--space-40` (128–160px)

---

## Layout

```css
--container-max:    1280px;  /* outer max width */
--container-text:   720px;   /* readable text columns */
--container-narrow: 960px;   /* feature sections */
--gutter-mobile:    1.5rem;  /* 24px */
--gutter-desktop:   2.5rem;  /* 40px */
```

Grid: 12-column, 24–40px gutters.

---

## Motion

### Timing

```css
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);     /* default */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--duration-fast:   200ms;
--duration-base:   400ms;
--duration-slow:   800ms;
--duration-reveal: 1200ms; /* hero reveal */
```

### Animation patterns

**Section reveal (default for every section):**
```js
initial: { opacity: 0, y: 24 }
whileInView: { opacity: 1, y: 0 }
transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
viewport: { once: true, margin: "-100px" }
```

**Image hover:**
```css
transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
&:hover { transform: scale(1.04); }
```

**Hero headline (one-time, on load):**
- Letter-by-letter or word-by-word reveal
- `staggerChildren: 0.04`
- `duration: 0.8`

**Smooth scroll:** Lenis library, default settings.

**Custom cursor (desktop only, optional):**
- 8px circle, charcoal, mix-blend-mode: difference
- Scales to 32px over interactive elements

### Motion rules

- ❌ No spring/bounce animations
- ❌ No animations under 200ms or over 1000ms (except hero reveal)
- ❌ No more than 2 properties animating at once
- ❌ No auto-playing carousels
- ❌ Respect `prefers-reduced-motion` — disable all decorative motion

---

## Imagery Guidelines

### Required asset list

**Salon space (commission immediately):**
- 1 wide hero shot, natural light, no people — landscape 3:2
- 4–6 interior detail shots (chairs, mirrors, product shelves)
- 1 exterior storefront shot

**Hair work (build over time):**
- 8–12 close-up results: back of head, color detail, texture
- Mix of long/short, blonde/brunette, men/women
- All shot on same neutral backdrop where possible

**People:**
- 1 portrait per stylist (Bülent, Gazi, Emir, Fulya) — 4:5 ratio
- 1 candid action shot per stylist working
- Optional: black & white treatment for cohesion

### Technical specs

- Format: AVIF primary, WebP fallback, JPG last resort
- Hero: 2400×1600 source, served at 1920w/1280w/640w via `next/image`
- Gallery: 1600×1200 source
- Always include `width`, `height`, descriptive `alt`
- Use `priority` on hero, `placeholder="blur"` everywhere else

---

## Component Patterns

### Buttons

**Primary (book now):**
- Background: `--color-text` (charcoal)
- Text: `--color-bg`
- Padding: 18px 36px
- Letter-spacing: 0.08em uppercase
- **Fully rounded (pill): `border-radius: 9999px`** — the Haze button shape
- Hover: background `--color-accent`

**Secondary:**
- Background: transparent
- Border: 1px solid `--color-text`
- Same pill radius, padding, and typography

**Text link:**
- Underline on hover only, with `text-underline-offset: 4px`

### Cards (services)

- Image-led, 4:5 aspect ratio
- Title in the display sans (uppercase) over image or below
- Hover: image scales 1.04, label slides up
- No drop shadows; keep card corners square — pills are for buttons only

### Forms

- Single-column always
- Labels above inputs
- Underline-only inputs (no boxes)
- Submit buttons match primary button style

---

## Accessibility

- WCAG 2.1 AA minimum
- Color contrast 4.5:1 body, 3:1 large text
- All interactive elements keyboard-accessible
- Focus rings visible (2px gold accent outline, 2px offset)
- Skip-to-content link
- Semantic HTML always (no `<div>` buttons)
- Motion respects `prefers-reduced-motion`
