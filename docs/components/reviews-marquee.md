# Component: Reviews Marquee

A continuous, slow-scrolling band of real Google reviews. Builds instant trust without the visual noise of a typical "testimonial carousel."

## Where it appears

- **Home page** — between Services grid and The Artisans (high-impact location)
- **Booking page** — above the booking widget (reduces commitment anxiety)
- **Optional:** Bottom of every service page (reinforces decision)

## Visual design

```
[ Eyebrow label ]
WHAT 146 CLIENTS SAY · GOOGLE ★★★★★ 4.8

[ Marquee row 1 — scrolling left, 60s loop ]
"Magic hands." — Sarah M.   ◆   "Best cut in years." — Jessica T.   ◆   "Bulent is the real deal." — Maya K.   ◆   ...

[ Marquee row 2 — scrolling right, 75s loop, opposite direction ]
"Worth the drive from Vancouver." — Lisa P.   ◆   "Found my forever salon." — Anna R.   ◆   ...

[ CTA below ]
Read all 146 reviews on Google →
```

## Layout specs

- **Two horizontal rows**, opposite scroll directions (creates motion balance)
- **Edge fade** — left and right edges fade to background using CSS mask-image (no hard cut-offs)
- **Quote separator** — small copper diamond `◆` between each quote
- **Quote format:** `"Quote text" — First L., City`
- **Length cap:** quotes between 4–14 words (longer ones break the rhythm)

## Typography

- Quotes: serif (Cormorant Garamond), 1.5rem desktop / 1.125rem mobile
- Names: sans (Inter), uppercase, 0.75rem, letter-spacing 0.15em
- Eyebrow label: sans uppercase, copper accent

## Motion

- **Speed:** 60s for one full loop on row 1, 75s for row 2 (slightly off-tempo prevents visual sync)
- **Easing:** linear (CSS `animation-timing-function: linear`)
- **Pause on hover:** desktop only — pauses both rows when cursor enters the section
- **Respects `prefers-reduced-motion`:** static display showing 6 quotes in a grid instead

## Implementation (Framer Motion + Tailwind)

```tsx
// components/sections/ReviewsMarquee.tsx
"use client";

import { motion } from "framer-motion";

const quotesRow1 = [
  { quote: "Magic hands.", author: "Sarah M.", city: "Coquitlam" },
  { quote: "Best cut I've had in years.", author: "Jessica T.", city: "Port Moody" },
  { quote: "Bülent is the real deal.", author: "Maya K.", city: "Burnaby" },
  { quote: "Found my forever salon.", author: "Anna R.", city: "Vancouver" },
  { quote: "The blonde of my dreams.", author: "Linda P.", city: "Coquitlam" },
  { quote: "Worth every minute of the drive.", author: "Rachel B.", city: "PoCo" },
  { quote: "Excellent service and results.", author: "Rain H.", city: "Coquitlam" },
  { quote: "Beautifully renovated, beautifully run.", author: "Emily F.", city: "Port Moody" },
];

const quotesRow2 = [
  { quote: "Gazi sculpts hair like art.", author: "Sophia L.", city: "Vancouver" },
  { quote: "Emir's blowouts last for days.", author: "Hannah W.", city: "Coquitlam" },
  { quote: "Honest, skilled, unhurried.", author: "Diana K.", city: "Burnaby" },
  { quote: "Calm, clean, professional.", author: "Olivia M.", city: "PoCo" },
  { quote: "Fulya remembers everything.", author: "Tara S.", city: "Coquitlam" },
  { quote: "I recommend them to everyone.", author: "Priya N.", city: "Vancouver" },
  { quote: "Patient and thorough — rare today.", author: "Margaret D.", city: "Port Moody" },
  { quote: "Walked out feeling brand new.", author: "Aisha R.", city: "Coquitlam" },
];

function MarqueeRow({
  quotes,
  direction = "left",
  duration = 60,
}: {
  quotes: typeof quotesRow1;
  direction?: "left" | "right";
  duration?: number;
}) {
  // Duplicate the array so the animation seamlessly loops
  const duplicated = [...quotes, ...quotes];
  const animationDirection = direction === "left" ? "-50%" : "0%";
  const startPosition = direction === "left" ? "0%" : "-50%";

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [startPosition, animationDirection] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((q, i) => (
          <span key={i} className="flex items-center gap-8 px-6">
            <span className="font-display italic text-charcoal text-2xl md:text-3xl">
              "{q.quote}"
            </span>
            <span className="font-sans uppercase tracking-widest text-xs text-muted">
              {q.author}, {q.city}
            </span>
            <span className="text-copper text-sm">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ReviewsMarquee() {
  return (
    <section className="py-24 md:py-32 bg-bg-alt overflow-hidden">
      {/* Eyebrow */}
      <div className="container mx-auto text-center mb-12">
        <p className="text-xs uppercase tracking-widest text-muted mb-3">
          What 146 Clients Say
        </p>
        <p className="font-sans text-sm">
          <span className="text-copper text-base">★★★★★</span>
          <span className="ml-2 text-charcoal font-medium">4.8 on Google</span>
        </p>
      </div>

      {/* Two scrolling rows with edge fade */}
      <div
        className="relative space-y-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <MarqueeRow quotes={quotesRow1} direction="left" duration={60} />
        <MarqueeRow quotes={quotesRow2} direction="right" duration={75} />
      </div>

      {/* CTA */}
      <div className="container mx-auto text-center mt-12">
        <a
          href="https://www.google.com/maps/place/MEGAS+Hair+Salon"
          target="_blank"
          rel="noopener"
          className="inline-block text-sm uppercase tracking-widest text-charcoal underline underline-offset-4 hover:text-copper transition-colors"
        >
          Read all 146 reviews on Google →
        </a>
      </div>
    </section>
  );
}
```

## Reduced motion variant

```tsx
import { useReducedMotion } from "framer-motion";

const shouldReduceMotion = useReducedMotion();

if (shouldReduceMotion) {
  return (
    <section className="py-24 bg-bg-alt">
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted text-center mb-8">
          What 146 Clients Say · ★★★★★ 4.8 on Google
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[...quotesRow1, ...quotesRow2].slice(0, 6).map((q, i) => (
            <div key={i} className="text-center">
              <p className="font-display italic text-2xl text-charcoal mb-2">
                "{q.quote}"
              </p>
              <p className="text-xs uppercase tracking-widest text-muted">
                {q.author}, {q.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Where to source quotes

1. **Best option:** Pull live from Google Places API (`reviews` field), cache in Supabase, refresh nightly
2. **Simpler:** Manually curate ~16 best quotes from your existing 146, store as constants
3. **Skip Birdeye widget** for the marquee — their iframe is slow and doesn't match the brand

For launch, hand-pick 16 short quotes that:
- Mention specific stylists by name (drives team page traffic)
- Mention specific services (reinforces service pages)
- Mention surrounding cities (signals to Google for local SEO across Tri-Cities)
- Are emotionally specific ("magic hands" > "great service")

## SEO benefits

- **Trust signal** — 146 reviews + 4.8 rating in plain text on the page (crawlable)
- **Local entity reinforcement** — city names in author tags signal Tri-Cities relevance
- **Stylist mentions** — Bülent, Gazi, Emir mentioned on home page builds entity authority
- **Lower bounce rate** — engaging motion increases dwell time
- **Schema** — wrap each quote in `Review` schema for the top 5 to be eligible for rich snippets

## Performance notes

- All animations are CSS transforms (GPU-accelerated, no layout thrash)
- Total component weight: ~3KB JS + minimal CSS
- No external assets (no review API call needed if quotes are hardcoded for launch)
- Lazy-load the section: only animate when scrolled into view

## Variants you could try later

- **Live indicator:** Small pulsing copper dot + "Updated daily from Google" — implies freshness
- **Filter pills:** "All / Bülent / Gazi / Emir" — pause marquee, show only matching reviews
- **Photo strip variant:** Reviewer profile pic + quote (more personal, more visual weight)

## Where to NOT use this

- **Don't put it in the hero** — it competes with your H1 and dilutes the first impression
- **Don't put it in the footer** — wasted impact in low-attention zone
- **Don't combine with another carousel on the same page** — too much motion at once

---

## Updated home page sequence (with marquee)

1. Hero
2. Brand origin teaser
3. Services grid
4. **→ Reviews marquee (NEW)**
5. The artisans
6. Featured work (gallery teaser)
7. Featured pull-quotes (3 long ones — different from marquee)
8. Visit / location
9. Footer
