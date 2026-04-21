import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/motion/FadeIn";

const WORKS = [
  {
    src: "/images/placeholder/result-balayage-2.svg",
    alt: "Hand-painted balayage close-up",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/placeholder/result-blonde-2.svg",
    alt: "Toned blonde with root depth",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/placeholder/result-precision-cut-2.svg",
    alt: "Precision short cut",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/placeholder/result-hair-color-2.svg",
    alt: "Rich copper colour result",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/placeholder/result-keratin-1.svg",
    alt: "Keratin smoothed hair",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/placeholder/result-blow-dry-1.svg",
    alt: "Polished blow-dry finish",
    span: "col-span-2 row-span-1",
  },
] as const;

export function FeaturedWork() {
  return (
    <section
      className="mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32"
      style={{ maxWidth: "var(--container-max)" }}
    >
      <FadeIn className="max-w-2xl">
        <Eyebrow>Featured Work</Eyebrow>
        <h2
          className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)]"
          style={{
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display)",
          }}
        >
          Looks from the chairs.
        </h2>
      </FadeIn>

      <FadeIn
        delay={0.1}
        className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]"
      >
        {WORKS.map((work, i) => (
          <div
            key={i}
            className={`${work.span} relative overflow-hidden bg-bg-alt group`}
          >
            <Image
              src={work.src}
              alt={work.alt}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </FadeIn>

      <FadeIn className="mt-14 md:mt-16 text-center">
        <Link
          href="/gallery"
          className="inline-block text-xs uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
          style={{ letterSpacing: "var(--tracking-label)" }}
        >
          See the gallery →
        </Link>
      </FadeIn>
    </section>
  );
}
