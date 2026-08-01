import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LOCATIONS, getLocation } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { CONTACT, BOOKING } from "@/lib/constants";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return pageMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${slug}`,
  });
}

function directionsHref() {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    CONTACT.address;
  const q = `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export default async function LocationPage({ params }: Params) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const topServices = loc.topServices
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema(loc.faqs.map((f) => ({ q: f.q, a: f.a })))} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: loc.city },
        ]}
        eyebrow={loc.eyebrow}
        title={loc.h1}
        subhead={loc.subhead}
      />

      <section
        className="mx-auto px-6 md:px-10 pb-10 md:pb-14 flex flex-wrap gap-4"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <CtaButton href={BOOKING.url} external>Book your appointment</CtaButton>
        <CtaButton href={directionsHref()} variant="secondary" external>
          Get directions
        </CtaButton>
      </section>

      {/* About this location */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-text)" }}
      >
        <FadeIn>
          <Eyebrow>About this location</Eyebrow>
          <p
            className="mt-5 text-lg md:text-xl text-foreground"
            style={{ lineHeight: "var(--leading-body)" }}
          >
            {loc.about}
          </p>
        </FadeIn>
      </section>

      {/* Areas we serve + getting here */}
      <section
        className="border-y border-border"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div
          className="mx-auto px-6 md:px-10 py-14 md:py-20"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <FadeIn>
              <Eyebrow>Areas we serve</Eyebrow>
              <p
                className="mt-5 text-muted md:text-lg"
                style={{ lineHeight: "var(--leading-body)" }}
              >
                {loc.areasServed}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Eyebrow>Getting here</Eyebrow>
              <p
                className="mt-5 text-muted md:text-lg"
                style={{ lineHeight: "var(--leading-body)" }}
              >
                {loc.gettingHere}
              </p>
              <div className="mt-6 space-y-2 text-muted md:text-lg">
                <p>
                  <span className="text-foreground font-medium">Address:</span>{" "}
                  {CONTACT.address.streetAddress},{" "}
                  {CONTACT.address.addressLocality},{" "}
                  {CONTACT.address.addressRegion}{" "}
                  {CONTACT.address.postalCode}
                </p>
                <p>
                  <span className="text-foreground font-medium">Phone:</span>{" "}
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="hover:text-accent transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
                <p>
                  <span className="text-foreground font-medium">Hours:</span>{" "}
                  Mon–Sat, 10am–6pm · Sun closed
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn>
          <a
            href={directionsHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${loc.city} location of Megas Hair Salon in Google Maps`}
            className="group relative block w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-border bg-bg-alt"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent 0 18px, var(--color-border) 18px 19px), repeating-linear-gradient(-45deg, transparent 0 28px, var(--color-border) 28px 29px)",
              }}
            />
            <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
              <span
                className="inline-flex items-center justify-center size-14 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <MapPin
                  size={26}
                  strokeWidth={1.5}
                  style={{ color: "var(--color-background)" }}
                />
              </span>
              <p
                className="mt-5 font-display text-2xl md:text-3xl text-foreground"
                style={{
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "var(--tracking-display)",
                }}
              >
                {CONTACT.address.addressLocality},{" "}
                {CONTACT.address.addressRegion}
              </p>
              <p className="mt-2 text-sm text-muted">
                {CONTACT.address.streetAddress}
              </p>
              <span
                className="mt-6 text-[0.7rem] uppercase text-foreground group-hover:text-accent transition-colors underline underline-offset-4"
                style={{ letterSpacing: "var(--tracking-label)" }}
              >
                View on Google Maps →
              </span>
            </div>
          </a>
        </FadeIn>
      </section>

      {/* Top services */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn className="max-w-2xl">
          <Eyebrow>Popular services</Eyebrow>
          <h2
            className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            What {loc.city} clients come for.
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {topServices.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.08}>
              <Link
                href={`/services/${s.slug}`}
                className="group block"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <h3
                  className="mt-5 font-display text-xl md:text-2xl"
                  style={{
                    lineHeight: "var(--leading-tight)",
                    letterSpacing: "var(--tracking-display)",
                  }}
                >
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{s.teaser}</p>
                <p className="mt-3 text-xs text-muted">From ${s.priceFrom}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials from this area */}
      {loc.testimonials.length > 0 && (
        <section
          className="border-y border-border"
          style={{ backgroundColor: "var(--color-bg-alt)" }}
        >
          <div
            className="mx-auto px-6 md:px-10 py-14 md:py-20"
            style={{ maxWidth: "var(--container-max)" }}
          >
            <FadeIn className="max-w-2xl">
              <Eyebrow>Clients from {loc.city}</Eyebrow>
              <h2
                className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)]"
                style={{
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "var(--tracking-display)",
                }}
              >
                What they say.
              </h2>
            </FadeIn>
            <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-16">
              {loc.testimonials.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <blockquote>
                    <p
                      className="font-display text-[clamp(1.25rem,2vw,1.75rem)] text-foreground"
                      style={{ lineHeight: "var(--leading-tight)" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer
                      className="mt-5 text-xs uppercase text-muted"
                      style={{ letterSpacing: "var(--tracking-label)" }}
                    >
                      — {t.author}, {t.city}
                    </footer>
                  </blockquote>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn>
          <Eyebrow>Questions</Eyebrow>
          <h2
            className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            {loc.city} FAQ.
          </h2>
        </FadeIn>
        <dl className="mt-10 divide-y divide-[var(--color-border)] border-t border-border">
          {loc.faqs.map((faq, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.05}>
              <div className="py-6 md:py-8">
                <dt
                  className="font-display text-xl md:text-[1.375rem] text-foreground"
                  style={{ lineHeight: "var(--leading-tight)" }}
                >
                  {faq.q}
                </dt>
                <dd
                  className="mt-3 text-muted md:text-lg"
                  style={{ lineHeight: "var(--leading-body)" }}
                >
                  {faq.a}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </section>

      {/* Final CTA */}
      <section
        className="mx-auto px-6 md:px-10 py-16 md:py-24 text-center border-t border-border"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn>
          <h2
            className="font-display text-[clamp(2rem,4vw,3rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Ready to make the drive?
          </h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <CtaButton href={BOOKING.url} external>Book your appointment</CtaButton>
            <CtaButton href={directionsHref()} variant="secondary" external>
              Get directions
            </CtaButton>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
