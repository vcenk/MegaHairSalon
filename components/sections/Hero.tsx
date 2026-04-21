"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { RATINGS } from "@/lib/constants";

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

  const photoMotion = {
    initial: { opacity: 0, scale: 1.04 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: reduced ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <section className="relative min-h-[calc(100svh-84px)] md:min-h-[calc(100svh-108px)] grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] overflow-hidden">
      {/* Mobile-only photo backdrop with warm scrim */}
      <motion.div
        className="md:hidden absolute inset-0 -z-10"
        {...photoMotion}
      >
        <Image
          src="/images/photos/hero.jpg"
          alt="Megas Hair Salon interior — master colourists in Coquitlam, BC"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,248,245,0.92) 0%, rgba(250,248,245,0.78) 55%, rgba(250,248,245,0.55) 100%)",
          }}
        />
      </motion.div>

      {/* Left — brand panel */}
      <div
        className="relative flex items-center"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20"
        >
          {/* Brand lockup */}
          <motion.div variants={item} className="flex items-baseline gap-4">
            <span
              className="font-display text-3xl md:text-[2.25rem] leading-none"
              style={{ letterSpacing: "var(--tracking-display)" }}
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
            className="mt-10 md:mt-12 font-display text-[clamp(2.5rem,5.5vw,5rem)]"
            style={{
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
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
            className="mt-7 max-w-md text-lg md:text-xl text-muted"
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
            <CtaButton href="/book">Book an appointment</CtaButton>
            <Link
              href="/about"
              className="text-[0.75rem] uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
              style={{ letterSpacing: "var(--tracking-label)" }}
            >
              Discover the craft →
            </Link>
          </motion.div>

          {/* Stylist line */}
          <motion.p
            variants={item}
            className="mt-10 text-[0.7rem] uppercase text-muted"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            Master colourists — Bülent · Gazi · Emir
          </motion.p>
        </motion.div>
      </div>

      {/* Right — photo panel (md+) */}
      <motion.div
        className="relative hidden md:block"
        {...photoMotion}
      >
        <Image
          src="/images/photos/hero.jpg"
          alt="Megas Hair Salon interior — master colourists in Coquitlam, BC"
          fill
          priority
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
