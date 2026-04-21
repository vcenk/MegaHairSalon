import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { FEATURED_REVIEWS } from "@/lib/reviews";
import { RATINGS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section
      className="mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32"
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

      <FadeIn className="mt-14 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center">
        <p className="flex items-center gap-3 text-sm">
          <span className="text-accent text-base" aria-hidden="true">
            ★★★★★
          </span>
          <span className="font-medium text-foreground">
            {RATINGS.ratingValue}
          </span>
          <span className="text-muted">·</span>
          <span className="text-muted">
            {RATINGS.reviewCount} Google reviews
          </span>
        </p>
        <Link
          href="/reviews"
          className="inline-block text-xs uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
          style={{ letterSpacing: "var(--tracking-label)" }}
        >
          Read more reviews →
        </Link>
      </FadeIn>
    </section>
  );
}
