import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { Visit } from "@/components/sections/Visit";
import { SERVICES } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services | Balayage, Blonde & Precision Cuts in Coquitlam",
  description:
    "Balayage, blonde transformations, precision cuts, hair colour, keratin, blow dry, and restorative treatments — delivered by master colourists at Megas Hair Salon in Coquitlam.",
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services" },
        ]}
        eyebrow="Services"
        title="Craft for every chapter of your hair."
        subhead="Eight services, each delivered by master stylists who have spent decades perfecting them."
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group block"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                  <Image
                    src={service.image}
                    alt={`${service.name} result at Megas Hair Salon`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h2
                    className="font-display text-2xl md:text-[1.75rem]"
                    style={{
                      lineHeight: "var(--leading-tight)",
                      letterSpacing: "var(--tracking-display)",
                    }}
                  >
                    {service.name}
                  </h2>
                  <span className="text-xs text-muted whitespace-nowrap">
                    From ${service.priceFrom}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{service.teaser}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <Visit />
    </>
  );
}
