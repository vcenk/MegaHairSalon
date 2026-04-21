import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { StubNotice } from "@/components/sections/StubNotice";
import { FadeIn } from "@/components/motion/FadeIn";
import { Visit } from "@/components/sections/Visit";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return pageMetadata({
    title: `${loc.headline} | Master Colourists | Megas Hair Salon`,
    description: `${loc.intro} Call (778) 858-0396 to book.`,
    path: `/locations/${slug}`,
  });
}

export default async function LocationPage({ params }: Params) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const topServices = SERVICES.slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: loc.city },
        ]}
        eyebrow={loc.driveTime ?? loc.city}
        title={loc.headline}
        subhead={loc.intro}
      />

      <StubNotice
        message={`Full ${loc.city} page — driving directions, transit, and local recommendations — is on its way.`}
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn>
          <Eyebrow>Popular services</Eyebrow>
          <h2
            className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]"
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
                className="group block border border-border p-6 transition-colors hover:border-accent"
              >
                <h3
                  className="font-display text-xl md:text-2xl group-hover:text-accent transition-colors"
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

      <Visit />
    </>
  );
}
