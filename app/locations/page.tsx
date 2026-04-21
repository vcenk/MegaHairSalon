import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { Visit } from "@/components/sections/Visit";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LOCATIONS } from "@/lib/locations";

export const metadata = pageMetadata({
  title: "Locations | Hair Salon Serving Coquitlam & the Tri-Cities",
  description:
    "One salon. Four cities we serve. Megas Hair Salon is in downtown Coquitlam, within easy reach of Port Moody, Port Coquitlam, and Greater Vancouver.",
  path: "/locations",
});

export default function LocationsHubPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Locations" },
        ]}
        eyebrow="Locations"
        title="One salon. Four neighbourhoods we serve."
        subhead="Megas is located in downtown Coquitlam — but our clients come from across the Tri-Cities and Greater Vancouver."
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {LOCATIONS.map((loc, i) => (
            <FadeIn key={loc.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/locations/${loc.slug}`}
                className="group block border border-border p-8 md:p-10 transition-colors hover:border-accent"
              >
                <Eyebrow accent>{loc.city}</Eyebrow>
                <h2
                  className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] group-hover:text-accent transition-colors"
                  style={{
                    lineHeight: "var(--leading-tight)",
                    letterSpacing: "var(--tracking-display)",
                  }}
                >
                  {loc.headline}
                </h2>
                <p
                  className="mt-5 text-muted"
                  style={{ lineHeight: "var(--leading-body)" }}
                >
                  {loc.intro}
                </p>
                {loc.driveTime && (
                  <p className="mt-4 text-xs text-muted">{loc.driveTime}</p>
                )}
                <span
                  className="mt-6 inline-block text-[0.7rem] uppercase text-foreground group-hover:text-accent transition-colors"
                  style={{ letterSpacing: "var(--tracking-label)" }}
                >
                  Learn more →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <Visit />
    </>
  );
}
