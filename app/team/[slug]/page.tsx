import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { StubNotice } from "@/components/sections/StubNotice";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TEAM } from "@/lib/team";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TEAM.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const person = TEAM.find((p) => p.slug === slug);
  if (!person) return {};
  return pageMetadata({
    title: `${person.name} — ${person.title} | Megas Hair Salon`,
    description: `${person.name}${
      person.alternateName ? ` (${person.alternateName})` : ""
    } — ${person.title}${
      person.years ? ` with ${person.years} years of experience` : ""
    } at Megas Hair Salon in Coquitlam.`,
    path: `/team/${slug}`,
  });
}

export default async function TeamMemberPage({ params }: Params) {
  const { slug } = await params;
  const person = TEAM.find((p) => p.slug === slug);
  if (!person) notFound();

  const others = TEAM.filter((p) => p.slug !== slug);

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
        eyebrow={person.years ? `${person.years} years of craft` : undefined}
        title={
          person.alternateName
            ? `${person.name} — "${person.alternateName}"`
            : person.name
        }
        subhead={person.title}
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-14"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <FadeIn className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
            <Image
              src={person.portrait}
              alt={`${person.name}, ${person.title}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col justify-center">
            {person.knowsAbout && (
              <>
                <Eyebrow>Specialities</Eyebrow>
                <ul className="mt-4 space-y-2 md:text-lg text-muted">
                  {person.knowsAbout.map((k) => (
                    <li key={k}>· {k}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="mt-8">
              <CtaButton href="/book">Book with {person.name}</CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <StubNotice
        message={`A full profile of ${person.name} — story, training, favourite work, and client favourites — is on its way.`}
      />

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
                    alt={`${p.name}, ${p.title}`}
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
