import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { aboutPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { Artisans } from "@/components/sections/Artisans";
import { Visit } from "@/components/sections/Visit";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = pageMetadata({
  title:
    "About Megas Hair Salon | Turkish Hair Artistry in Coquitlam Since 1984",
  description:
    "From a small Istanbul salon in 1984 to Coquitlam's premier destination for master colourists. Discover the Megas story, philosophy, and team.",
  path: "/about",
});

const PHILOSOPHY = [
  {
    title: "Listen first, design second",
    body: "Every great hairstyle starts with a real conversation. We ask, we observe, we recommend — but we never assume.",
  },
  {
    title: "Healthy hair, always",
    body: "We use professional-grade products that nourish and protect through every process. The result lasts because the hair stays well.",
  },
  {
    title: "A space that breathes",
    body: "Modern, clean, calm. Fresh coffee or herbal tea. Time to think. The visit is part of the work.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema()} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About" },
        ]}
        eyebrow="Our Story"
        title="Forty-one years in the making."
        subhead="A Turkish hair house, brought to the Tri-Cities."
      />

      {/* Origin (1984) */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn className="md:order-2 relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
            <Image
              src="/images/placeholder/salon-interior-3.svg"
              alt="Megas Hair Salon archive — Turkish hair house established in Istanbul, 1984"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn className="md:order-1">
            <Eyebrow>1984</Eyebrow>
            <h2
              className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              It started in Istanbul.
            </h2>
            <div
              className="mt-8 space-y-5 text-muted md:text-lg"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              <p>
                In 1984, three brothers opened a small salon in Istanbul with
                a single belief: that great hair begins with great listening.
                There were no chairs to spare, no marketing, no shortcuts —
                only the work, and the people who trusted it.
              </p>
              <p>
                Word spread. The salon grew. Over the next four decades, Megas
                became a destination across multiple Turkish cities — a place
                where executives, brides, and grandmothers all sat in the
                same chair, and all left feeling seen.
              </p>
              <p>
                The craft we built in those years is what we carry to every
                client today: precision over flash, listening over assumption,
                and the patience to do hair properly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vancouver chapter (2025) */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
            <Image
              src="/images/placeholder/salon-interior-1.svg"
              alt="Megas Hair Salon Coquitlam interior — styling floor at 150-1169 Pacific St"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Eyebrow>2025 — Coquitlam</Eyebrow>
            <h2
              className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Why we crossed an ocean.
            </h2>
            <div
              className="mt-8 space-y-5 text-muted md:text-lg"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              <p>
                In 2025, we brought our craft to Coquitlam — drawn by the
                city&apos;s energy, its diversity, and the chance to bring
                something specific to the Tri-Cities: master colourists with
                decades behind them, and the unhurried care that only comes
                with experience.
              </p>
              <p>
                Today, three master stylists — Bülent, Gazi, and Emir — lead
                the salon, with director Fulya guiding the experience.
                Together, they&apos;ve built a space that feels both modern
                and warm, where every appointment is treated as a quiet
                ritual.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20 border-y border-border"
        style={{
          backgroundColor: "var(--color-bg-alt)",
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <FadeIn className="max-w-2xl mx-auto text-center">
            <Eyebrow>Philosophy</Eyebrow>
            <h2
              className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              How we work.
            </h2>
          </FadeIn>

          <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-10 md:gap-12">
            {PHILOSOPHY.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <h3
                  className="font-display text-2xl md:text-[1.75rem]"
                  style={{
                    lineHeight: "var(--leading-tight)",
                    letterSpacing: "var(--tracking-display)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-4 text-muted"
                  style={{ lineHeight: "var(--leading-body)" }}
                >
                  {p.body}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Artisans />

      <FadeIn className="text-center pb-6">
        <Link
          href="/gallery"
          className="inline-block text-xs uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
          style={{ letterSpacing: "var(--tracking-label)" }}
        >
          See the salon in the gallery →
        </Link>
      </FadeIn>

      <Visit />
    </>
  );
}
