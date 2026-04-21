"use client";

import { useReducedMotion } from "framer-motion";
import { MARQUEE_ROW_1, MARQUEE_ROW_2, type Review } from "@/lib/reviews";
import { SOCIAL, RATINGS } from "@/lib/constants";

function MarqueeRow({
  quotes,
  direction = "left",
  duration = 60,
}: {
  quotes: readonly Review[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const duplicated = [...quotes, ...quotes];
  return (
    <div className="overflow-hidden">
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {duplicated.map((q, i) => (
          <span
            key={i}
            className="flex items-center gap-6 md:gap-8 px-5 md:px-6 shrink-0"
          >
            <span
              className="font-display italic text-foreground text-[1.25rem] md:text-[1.625rem]"
              style={{ lineHeight: 1.2 }}
            >
              &ldquo;{q.quote}&rdquo;
            </span>
            <span
              className="uppercase text-[0.7rem] text-muted"
              style={{ letterSpacing: "0.15em" }}
            >
              {q.author}, {q.city}
            </span>
            <span className="text-accent text-xs" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function TrustHeading() {
  return (
    <>
      <p
        className="text-xs uppercase text-muted mb-3"
        style={{ letterSpacing: "var(--tracking-label)" }}
      >
        What {RATINGS.reviewCount} Clients Say
      </p>
      <p className="text-sm">
        <span className="text-accent text-base" aria-hidden="true">
          ★★★★★
        </span>
        <span className="ml-2 text-foreground font-medium">
          {RATINGS.ratingValue} on Google
        </span>
      </p>
    </>
  );
}

function GoogleCta() {
  return (
    <a
      href={SOCIAL.google}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-xs uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
      style={{ letterSpacing: "var(--tracking-label)" }}
    >
      Read all {RATINGS.reviewCount} reviews on Google →
    </a>
  );
}

export function ReviewsMarquee() {
  const reduced = useReducedMotion();

  if (reduced) {
    const quotes = [...MARQUEE_ROW_1, ...MARQUEE_ROW_2].slice(0, 6);
    return (
      <section
        className="py-16 md:py-24 lg:py-32 border-y border-border"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div
          className="mx-auto px-6 md:px-10 text-center"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <TrustHeading />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {quotes.map((q, i) => (
              <div key={i} className="text-center">
                <p
                  className="font-display italic text-2xl text-foreground"
                  style={{ lineHeight: "var(--leading-tight)" }}
                >
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p
                  className="mt-3 text-xs uppercase text-muted"
                  style={{ letterSpacing: "var(--tracking-label)" }}
                >
                  {q.author}, {q.city}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <GoogleCta />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-16 md:py-24 lg:py-32 border-y border-border overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div
        className="mx-auto px-6 md:px-10 text-center mb-12 md:mb-16"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <TrustHeading />
      </div>

      <div
        className="relative space-y-6 md:space-y-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <MarqueeRow quotes={MARQUEE_ROW_1} direction="left" duration={60} />
        <MarqueeRow quotes={MARQUEE_ROW_2} direction="right" duration={75} />
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <GoogleCta />
      </div>
    </section>
  );
}
