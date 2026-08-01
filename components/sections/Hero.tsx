"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { RATINGS, BOOKING } from "@/lib/constants";

const HEADLINE_WORDS = ["Hair,", "sculpted", "with", "intention."] as const;

export function Hero() {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.08,
        delayChildren: reduced ? 0 : 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[calc(100svh-84px)] md:min-h-[calc(100svh-108px)] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduced ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/photos/hero.jpg"
          alt="Megas Hair Salon interior — master colourists in Coquitlam, BC"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Legibility scrim — white from the left, fading to transparent */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 35%, rgba(255,255,255,0.35) 65%, rgba(255,255,255,0.05) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,26,26,0) 60%, rgba(26,26,26,0.15) 100%)",
          }}
        />
      </motion.div>

      <div
        className="relative mx-auto w-full px-6 md:px-10 py-16 md:py-24"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-3xl"
        >
          {/* Brand lockup */}
          <motion.div variants={item} className="flex items-baseline gap-4">
            <span
              className="font-display uppercase text-3xl md:text-[2.25rem] leading-none"
              style={{ letterSpacing: "var(--tracking-display-caps)" }}
            >
              Megas
            </span>
            <span
              aria-hidden="true"
              className="h-px w-8"
              style={{ backgroundColor: "var(--color-border)" }}
            />
            <span
              className="text-[0.7rem] uppercase text-muted"
              style={{ letterSpacing: "var(--tracking-label)" }}
            >
              Est. 1984
            </span>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-3 text-[0.7rem] uppercase text-muted"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            Istanbul → Coquitlam
          </motion.div>

          <h1
            className="mt-8 md:mt-10 font-display font-light uppercase text-[clamp(2.5rem,6.5vw,5.5rem)]"
            style={{
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display-caps)",
            }}
          >
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                variants={item}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg md:text-xl text-muted"
            style={{ lineHeight: "var(--leading-body)" }}
          >
            Master colourists shaping Coquitlam&apos;s most refined cuts,
            blondes, and balayages — with four decades of Turkish artistry.
          </motion.p>

          {/* Ratings */}
          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-2.5 text-sm"
          >
            <span
              className="flex items-center gap-0.5"
              style={{ color: "var(--color-accent)" }}
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-foreground font-medium">
              {RATINGS.ratingValue.toFixed(1)}
            </span>
            <span className="text-muted">·</span>
            <span className="text-muted">
              {RATINGS.reviewCount} Google reviews
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row gap-5 sm:gap-8 items-start sm:items-center"
          >
            <CtaButton href={BOOKING.url} external>
              Book an appointment
            </CtaButton>
            <Link
              href="/about"
              className="text-[0.75rem] uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
              style={{ letterSpacing: "var(--tracking-label)" }}
            >
              Discover the craft →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
