import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SERVICES, getService } from "@/lib/services";
import { TEAM } from "@/lib/team";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const stylists = service.stylistSlugs
    .map((s) => TEAM.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => !!t);

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name} Coquitlam`,
          serviceType: service.name,
          description: service.teaser,
          slug: service.slug,
          priceMin: service.priceFrom,
          priceMax: service.priceMax,
        })}
      />
      <JsonLd data={faqSchema(service.faqs.map((f) => ({ q: f.q, a: f.a })))} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name },
        ]}
        eyebrow={service.eyebrow}
        title={service.h1}
        subhead={service.subhead}
      />

      {/* Hero image */}
      <section
        className="mx-auto px-6 md:px-10 pb-10 md:pb-14"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-bg-alt">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </FadeIn>
        <FadeIn className="mt-6 flex flex-wrap items-center gap-5">
          <span
            className="text-[0.7rem] uppercase text-accent"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            From ${service.priceFrom}
            {service.priceMax ? ` – $${service.priceMax}` : ""}
          </span>
          <CtaButton href="/book">Book this service</CtaButton>
        </FadeIn>
      </section>

      {/* Approach */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-text)" }}
      >
        <FadeIn>
          <Eyebrow>The approach</Eyebrow>
          <p
            className="mt-5 text-lg md:text-xl text-foreground"
            style={{ lineHeight: "var(--leading-body)" }}
          >
            {service.approach}
          </p>
        </FadeIn>
      </section>

      {/* Process (optional) */}
      {service.process && service.process.length > 0 && (
        <section
          className="border-y border-border"
          style={{ backgroundColor: "var(--color-bg-alt)" }}
        >
          <div
            className="mx-auto px-6 md:px-10 py-14 md:py-20"
            style={{ maxWidth: "var(--container-max)" }}
          >
            <FadeIn className="max-w-2xl">
              <Eyebrow>What to expect</Eyebrow>
              <h2
                className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)]"
                style={{
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "var(--tracking-display)",
                }}
              >
                The {service.name.toLowerCase()} process.
              </h2>
            </FadeIn>
            <ol className="mt-10 md:mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
              {service.process.map((step, i) => (
                <FadeIn key={i} delay={(i % 4) * 0.08}>
                  <li>
                    <span
                      className="text-[0.7rem] uppercase text-accent"
                      style={{ letterSpacing: "var(--tracking-label)" }}
                    >
                      Step {i + 1}
                    </span>
                    <h3
                      className="mt-3 font-display text-xl md:text-2xl"
                      style={{
                        lineHeight: "var(--leading-tight)",
                        letterSpacing: "var(--tracking-display)",
                      }}
                    >
                      {step.step}
                    </h3>
                    <p
                      className="mt-3 text-sm md:text-base text-muted"
                      style={{ lineHeight: "var(--leading-body)" }}
                    >
                      {step.body}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Who it's for (optional) */}
      {service.whoItsFor && (
        <section
          className="mx-auto px-6 md:px-10 py-14 md:py-20"
          style={{ maxWidth: "var(--container-text)" }}
        >
          <FadeIn>
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <p
              className="mt-5 text-lg text-muted"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              {service.whoItsFor}
            </p>
          </FadeIn>
        </section>
      )}

      {/* Highlights list (optional) */}
      {service.highlights && service.highlights.length > 0 && (
        <section
          className="mx-auto px-6 md:px-10 py-10 md:py-14"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <FadeIn className="max-w-2xl">
            <Eyebrow>What we specialise in</Eyebrow>
            <h2
              className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Every shade of {service.name.toLowerCase()}.
            </h2>
          </FadeIn>
          <FadeIn delay={0.05} className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-4">
            {service.highlights.map((h) => (
              <p key={h} className="flex gap-3 text-muted md:text-lg">
                <span className="text-accent" aria-hidden="true">·</span>
                <span>{h}</span>
              </p>
            ))}
          </FadeIn>
        </section>
      )}

      {/* Pricing */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn>
          <Eyebrow>Pricing</Eyebrow>
          <h2
            className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Honest starting prices.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <table className="mt-10 w-full text-left">
            <thead>
              <tr
                className="border-b border-border"
                style={{ letterSpacing: "var(--tracking-label)" }}
              >
                <th className="text-[0.7rem] uppercase text-muted pb-4 pr-4 font-medium">
                  Service
                </th>
                <th className="text-[0.7rem] uppercase text-muted pb-4 font-medium text-right">
                  Starting price
                </th>
              </tr>
            </thead>
            <tbody>
              {service.pricing.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-4 pr-4 md:text-lg text-foreground">
                    {row.label}
                  </td>
                  <td className="py-4 md:text-lg text-foreground text-right whitespace-nowrap">
                    {row.from}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {service.pricingNote && (
            <p className="mt-6 text-sm text-muted italic">
              {service.pricingNote}
            </p>
          )}
        </FadeIn>
      </section>

      {/* Stylists */}
      {stylists.length > 0 && (
        <section
          className="mx-auto px-6 md:px-10 py-14 md:py-20"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <FadeIn className="max-w-2xl">
            <Eyebrow>Stylists who specialise</Eyebrow>
            <h2
              className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Who will be cutting or colouring your hair.
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stylists.map((p, i) => (
              <FadeIn key={p.slug} delay={(i % 3) * 0.08}>
                <Link href={`/team/${p.slug}`} className="group block">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                    <Image
                      src={p.portrait}
                      alt={p.portraitAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3
                    className="mt-4 font-display text-xl md:text-2xl"
                    style={{
                      lineHeight: "var(--leading-tight)",
                      letterSpacing: "var(--tracking-display)",
                    }}
                  >
                    {p.name}
                    {p.alternateName && (
                      <span className="text-muted"> ({p.alternateName})</span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{p.title}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Gallery */}
      {service.gallery.length > 0 && (
        <section
          className="mx-auto px-6 md:px-10 py-14 md:py-20"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <FadeIn className="max-w-2xl">
            <Eyebrow>Recent work</Eyebrow>
            <h2
              className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              {service.name} at Megas.
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {service.gallery.map((img, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.05} className="relative aspect-[4/5] overflow-hidden bg-bg-alt">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section
        className="border-y border-border"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div
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
              Common questions about {service.name.toLowerCase()}.
            </h2>
          </FadeIn>
          <dl className="mt-10 divide-y divide-[var(--color-border)] border-t border-border">
            {service.faqs.map((faq, i) => (
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
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="mx-auto px-6 md:px-10 py-16 md:py-24 text-center"
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
            {service.finalCta}
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/book">Book your appointment</CtaButton>
          </div>
        </FadeIn>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section
          className="mx-auto px-6 md:px-10 py-10 md:py-16 border-t border-border"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <FadeIn>
            <Eyebrow>Related services</Eyebrow>
            <h2
              className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Explore more.
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.08}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
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
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
