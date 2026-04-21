import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { Visit } from "@/components/sections/Visit";
import { TEAM } from "@/lib/team";

export const metadata = pageMetadata({
  title: "Our Team | Master Colourists & Stylists in Coquitlam",
  description:
    "Meet the master colourists and stylists at Megas Hair Salon in Coquitlam — Bülent, Gazi, Emir, and director Fulya. Decades of Turkish hair artistry.",
  path: "/team",
});

export default function TeamHubPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Team" },
        ]}
        eyebrow="The Artisans"
        title="Hands that have shaped decades of hair."
        subhead="Four stylists. One hundred and twenty-plus years of combined craft."
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {TEAM.map((person, i) => (
            <FadeIn key={person.slug} delay={(i % 4) * 0.08}>
              <Link href={`/team/${person.slug}`} className="group block">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                  <Image
                    src={person.portrait}
                    alt={person.portraitAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5">
                  <h2
                    className="font-display text-2xl md:text-[1.75rem]"
                    style={{
                      lineHeight: "var(--leading-tight)",
                      letterSpacing: "var(--tracking-display)",
                    }}
                  >
                    {person.name}
                    {person.alternateName && (
                      <span className="text-muted"> ({person.alternateName})</span>
                    )}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{person.title}</p>
                  {person.years !== null && (
                    <p
                      className="mt-3 text-[0.7rem] uppercase text-accent"
                      style={{ letterSpacing: "var(--tracking-label)" }}
                    >
                      {person.years} years
                    </p>
                  )}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <Visit />
    </>
  );
}
