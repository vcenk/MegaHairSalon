import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TEAM, getTeamMember } from "@/lib/team";
import { SERVICES } from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TEAM.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const person = getTeamMember(slug);
  if (!person) return {};
  return pageMetadata({
    title: person.metaTitle,
    description: person.metaDescription,
    path: `/team/${slug}`,
  });
}

export default async function TeamMemberPage({ params }: Params) {
  const { slug } = await params;
  const person = getTeamMember(slug);
  if (!person) notFound();

  const others = TEAM.filter((p) => p.slug !== slug);
  const relatedServices = person.relatedServices
    .map((s) => SERVICES.find((svc) => svc.slug === s))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <>
      <JsonLd
        data={personSchema({
          name: person.name,
          alternateName: person.alternateName,
          jobTitle: person.title,
          slug: person.slug,
          image: person.portrait,
          knowsAbout: person.knowsAbout ? [...person.knowsAbout] : undefined,
        })}
      />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Team", href: "/team" },
          { name: person.name },
        ]}
        eyebrow={person.eyebrow}
        title={person.h1}
        subhead={person.title}
      />

      {/* Portrait + bio */}
      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-14"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <FadeIn className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
            <Image
              src={person.portrait}
              alt={person.portraitAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Eyebrow>Bio</Eyebrow>
            <p
              className="mt-5 text-lg md:text-xl text-foreground"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              {person.bio}
            </p>

            <div className="mt-10">
              <Eyebrow>Specialities</Eyebrow>
              <ul className="mt-4 space-y-2 md:text-lg text-muted">
                {person.specialties.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-accent" aria-hidden="true">
                      ·
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <CtaButton href="/book">
                Book an appointment with {person.name}
              </CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured work */}
      {person.gallery.length > 0 && (
        <section
          className="mx-auto px-6 md:px-10 py-14 md:py-20"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <FadeIn className="max-w-2xl">
            <Eyebrow>Featured work</Eyebrow>
            <h2
              className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              A few recent favourites.
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {person.gallery.map((img, i) => (
              <FadeIn
                key={i}
                delay={(i % 4) * 0.05}
                className="relative aspect-[4/5] overflow-hidden bg-bg-alt"
              >
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

      {/* Pull quote */}
      <section
        className="border-y border-border"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div
          className="mx-auto px-6 md:px-10 py-16 md:py-24 text-center"
          style={{ maxWidth: "var(--container-text)" }}
        >
          <FadeIn>
            <blockquote>
              <p
                className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-foreground"
                style={{ lineHeight: "var(--leading-tight)" }}
              >
                &ldquo;{person.pullQuote.quote}&rdquo;
              </p>
              <footer
                className="mt-8 text-xs uppercase text-muted"
                style={{ letterSpacing: "var(--tracking-label)" }}
              >
                — {person.pullQuote.author}
                {person.pullQuote.city ? `, ${person.pullQuote.city}` : ""}
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section
          className="mx-auto px-6 md:px-10 py-14 md:py-20"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <FadeIn className="max-w-2xl">
            <Eyebrow>Book {person.name} for</Eyebrow>
            <h2
              className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Services {person.name} specialises in.
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedServices.map((s, i) => (
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
                  <p className="mt-3 text-xs text-muted">
                    From ${s.priceFrom}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Other stylists */}
      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16 border-t border-border"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn>
          <Eyebrow>More of the team</Eyebrow>
          <h2
            className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Other stylists.
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {others.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.08}>
              <Link href={`/team/${p.slug}`} className="group block">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                  <Image
                    src={p.portrait}
                    alt={p.portraitAlt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
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
                </h3>
                <p className="mt-1 text-sm text-muted">{p.title}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
