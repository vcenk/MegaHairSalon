import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, menuSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Visit } from "@/components/sections/Visit";
import { MENU } from "@/lib/menu";
import { BOOKING } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Price Menu | Hair Colour, Cuts & Treatments in Coquitlam | Megas",
  description:
    "The full service and price menu at Megas Hair Salon, Coquitlam — colour, balayage, cuts, blowouts, keratin, perms, brows, and extensions. Book online on Phorest.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
        ])}
      />
      <JsonLd data={menuSchema(MENU)} />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Menu" }]}
        eyebrow="Menu"
        title="The full price menu."
        subhead="Every service we offer, with honest starting prices. Book any of them online — our live availability is on Phorest."
      />

      {/* Intro + jump nav + primary CTA */}
      <section
        className="mx-auto px-6 md:px-10 py-8 md:py-12"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <p
              className="text-muted md:text-lg"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              Prices are starting points — final pricing depends on hair length,
              density, and the work involved, and is always confirmed in-salon
              before we begin. Lightening services include a toner.
            </p>
            <nav aria-label="Menu categories" className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {MENU.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="text-[0.7rem] uppercase text-muted hover:text-accent transition-colors"
                  style={{ letterSpacing: "var(--tracking-label)" }}
                >
                  {cat.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex-none">
            <CtaButton href={BOOKING.url} external>
              Book on Phorest
            </CtaButton>
          </div>
        </FadeIn>
      </section>

      {/* Categories */}
      <section
        className="mx-auto px-6 md:px-10 pb-6"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="flex flex-col gap-16 md:gap-24">
          {MENU.map((cat) => (
            <div key={cat.slug} id={cat.slug} className="scroll-mt-28">
              <FadeIn className="max-w-2xl">
                <Eyebrow accent>{cat.name}</Eyebrow>
                {cat.blurb && (
                  <p
                    className="mt-4 text-muted md:text-lg"
                    style={{ lineHeight: "var(--leading-body)" }}
                  >
                    {cat.blurb}
                  </p>
                )}
              </FadeIn>
              <FadeIn delay={0.05}>
                <dl className="mt-8 border-t border-border">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                    >
                      <dt className="md:text-lg text-foreground">
                        {item.name}
                        {item.note && (
                          <span className="ml-2 text-sm text-muted">
                            · {item.note}
                          </span>
                        )}
                      </dt>
                      <dd className="md:text-lg text-foreground text-right whitespace-nowrap">
                        {item.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="mx-auto px-6 md:px-10 py-16 md:py-24 text-center"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn>
          <h2
            className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Found your service?
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            Pick a stylist and a time on Phorest, or call us — most same-week
            slots are filled by phone.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href={BOOKING.url} external>
              Book on Phorest
            </CtaButton>
          </div>
        </FadeIn>
      </section>

      <Visit />
    </>
  );
}
