import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { StubNotice } from "@/components/sections/StubNotice";
import { FadeIn } from "@/components/motion/FadeIn";
import { FEATURED_REVIEWS, MARQUEE_ROW_1, MARQUEE_ROW_2 } from "@/lib/reviews";
import { SOCIAL, RATINGS } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Reviews | 4.8★ from 146 Google Reviews | Megas Hair Salon",
  description:
    "What our clients say. 4.8 stars from 146 Google reviews — master colourists, balayage specialists, and precision cutting in Coquitlam.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const allShortQuotes = [...MARQUEE_ROW_1, ...MARQUEE_ROW_2];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews" },
        ]}
        eyebrow={`${RATINGS.ratingValue} ★★★★★ · ${RATINGS.reviewCount} Google reviews`}
        title="What our clients say."
        subhead="A handful of voices from our chairs — Coquitlam, Port Moody, Port Coquitlam, Burnaby, Vancouver."
      />

      {/* Featured */}
      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {FEATURED_REVIEWS.map((review, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <blockquote className="flex flex-col">
                <p
                  className="font-display text-[clamp(1.5rem,2.2vw,1.875rem)] text-foreground"
                  style={{ lineHeight: "var(--leading-tight)" }}
                >
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer
                  className="mt-6 text-xs uppercase text-muted"
                  style={{ letterSpacing: "var(--tracking-label)" }}
                >
                  — {review.author}, {review.city}
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Short quotes grid */}
      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16 border-t border-border"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {allShortQuotes.map((q, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.06}>
              <p
                className="font-display italic text-xl md:text-2xl text-foreground"
                style={{ lineHeight: "var(--leading-tight)" }}
              >
                &ldquo;{q.quote}&rdquo;
              </p>
              <p
                className="mt-3 text-[0.7rem] uppercase text-muted"
                style={{ letterSpacing: "var(--tracking-label)" }}
              >
                {q.author}, {q.city}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <StubNotice message="A fuller reviews archive — filterable by stylist and service — is on its way." />

      <FadeIn className="text-center pb-16 md:pb-24">
        <Link
          href={SOCIAL.google}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
          style={{ letterSpacing: "var(--tracking-label)" }}
        >
          Read all {RATINGS.reviewCount} reviews on Google →
        </Link>
      </FadeIn>
    </>
  );
}
