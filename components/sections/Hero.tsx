"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";

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
          src="/images/placeholder/hero.svg"
          alt="Megas Hair Salon interior — master colourists in Coquitlam, BC"
          fill
          priority
          sizes="100vw"
          className="object-cover"
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
          <motion.div variants={item}>
            <Eyebrow>Since 1984 · Istanbul → Coquitlam</Eyebrow>
          </motion.div>

          <h1
            className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)]"
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
            className="mt-8 max-w-xl text-lg md:text-xl text-muted"
            style={{ lineHeight: "var(--leading-body)" }}
          >
            Master colourists shaping Coquitlam&apos;s most refined cuts, blondes,
            and balayages — with four decades of Turkish artistry.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-5 sm:gap-8 items-start sm:items-center"
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
        </motion.div>
      </div>
    </section>
  );
}
