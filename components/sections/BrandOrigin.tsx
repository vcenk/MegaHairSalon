import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/motion/FadeIn";

export function BrandOrigin() {
  return (
    <section
      className="mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32"
      style={{ maxWidth: "var(--container-max)" }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <FadeIn className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
          <Image
            src="/images/placeholder/salon-interior-2.svg"
            alt="Megas Hair Salon styling floor, Coquitlam — Turkish hair salon since 1984"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <Eyebrow>Our Story</Eyebrow>
          <h2
            className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Forty-one years. Two continents. One philosophy.
          </h2>
          <div
            className="mt-8 space-y-5 text-muted md:text-lg"
            style={{ lineHeight: "var(--leading-body)" }}
          >
            <p>
              Our journey began in 1984, in a small Istanbul salon built on a
              single belief — that great hair begins with great listening. Over
              four decades, we grew across Turkey, refining a craft that puts
              the person before the trend.
            </p>
            <p>
              In 2025, we brought that craft to Coquitlam. Today, master
              stylists Bülent, Gazi, and Emir lead a salon where every cut is
              sculpted, every colour is composed, and every visit is unhurried.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-block text-[0.75rem] uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            Read our story →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
