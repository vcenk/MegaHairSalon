import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { StubNotice } from "@/components/sections/StubNotice";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SERVICES } from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.name} Coquitlam | Master Colourists | Megas Hair Salon`,
    description: `${service.teaser} at Megas Hair Salon in Coquitlam. From $${service.priceFrom}. Book with our master stylists.`,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name} Coquitlam`,
          serviceType: service.name,
          description: service.teaser,
          slug: service.slug,
          priceMin: service.priceFrom,
        })}
      />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name },
        ]}
        eyebrow={`From $${service.priceFrom}`}
        title={service.name}
        subhead={service.teaser}
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-14"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-bg-alt">
          <Image
            src={service.image}
            alt={`${service.name} result at Megas Hair Salon`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </FadeIn>
      </section>

      <StubNotice
        message={`Full ${service.name.toLowerCase()} service details — what to expect, timing, maintenance, and FAQ — are on their way.`}
      />

      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn className="text-center">
          <h2
            className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Ready to book?
          </h2>
          <p className="mt-5 text-muted md:text-lg">
            Same-week appointments often available.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/book">Book an appointment</CtaButton>
          </div>
        </FadeIn>
      </section>

      {/* Related services */}
      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16 border-t border-border"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn>
          <Eyebrow>Explore more</Eyebrow>
          <h2
            className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Other services.
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.08}>
              <Link
                href={`/services/${s.slug}`}
                className="group block"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                  <Image
                    src={s.image}
                    alt={`${s.name} result`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
    </>
  );
}
