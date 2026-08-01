import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { SERVICES } from "@/lib/services";

// Homepage shows a curated six; the full list lives on /services and /menu.
const FEATURED_SERVICES = SERVICES.slice(0, 6);

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32"
      style={{ maxWidth: "var(--container-max)" }}
    >
      <FadeIn className="max-w-2xl">
        <Eyebrow>Services</Eyebrow>
        <h2
          className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)]"
          style={{
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display)",
          }}
        >
          A practiced hand for every chapter of your hair.
        </h2>
      </FadeIn>

      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {FEATURED_SERVICES.map((service, i) => (
          <FadeIn key={service.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/services/${service.slug}`}
              className="group block"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3
                  className="font-display text-2xl md:text-[1.625rem]"
                  style={{
                    lineHeight: "var(--leading-tight)",
                    letterSpacing: "var(--tracking-display)",
                  }}
                >
                  {service.name}
                </h3>
                <span className="text-xs text-muted whitespace-nowrap">
                  From ${service.priceFrom}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{service.teaser}</p>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <Link
          href="/services"
          className="inline-block text-xs uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
          style={{ letterSpacing: "var(--tracking-label)" }}
        >
          View all services →
        </Link>
        <Link
          href="/menu"
          className="inline-block text-xs uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
          style={{ letterSpacing: "var(--tracking-label)" }}
        >
          See full price menu →
        </Link>
      </FadeIn>
    </section>
  );
}
