import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT, BOOKING } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Book an Appointment | Megas Hair Salon Coquitlam",
  description:
    "Book online at Megas Hair Salon. Master colourists, balayage, blonde, precision cuts, and more. Reserve instantly on Phorest or call (778) 858-0396.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Book" },
        ]}
        eyebrow="Book"
        title="Reserve your chair."
        subhead="Pick a stylist, a service, and a time — our full menu and live availability are on Phorest."
        align="center"
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn>
          <div
            className="border p-10 md:p-14 text-center"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-bg-alt)",
            }}
          >
            <Eyebrow accent>Online booking</Eyebrow>
            <h2
              className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Book instantly on Phorest.
            </h2>
            <p
              className="mt-5 text-muted md:text-lg max-w-xl mx-auto"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              Choose your service, your stylist, and a time that suits you.
              You&apos;ll get instant confirmation. Prefer to talk it through?
              Give us a call — most same-week slots are filled by phone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CtaButton href={BOOKING.url} external>
                Book on Phorest
              </CtaButton>
              <CtaButton
                href={`tel:${CONTACT.phoneHref}`}
                variant="secondary"
                external
              >
                Call {CONTACT.phone}
              </CtaButton>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
