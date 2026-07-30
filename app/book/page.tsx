import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT, BOOKING } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Book an Appointment | Megas Hair Salon Coquitlam",
  description:
    "Book online at Megas Hair Salon. Master colourists, balayage, blonde, precision cuts, and more. Call (778) 858-0396 or schedule below.",
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
        subhead="Pick a stylist, a service, and a time. We'll confirm by email."
        align="center"
      />

      {/* Phorest online booking.
          Direct link to the hosted booking page is the reliable integration —
          it carries the live service menu and pricing. An inline iframe embed
          can replace this later if Phorest confirms framing is allowed for the
          account (X-Frame-Options / CSP must permit it); until verified, we
          link out so the CTA never renders blank. */}
      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn>
          <div
            className="border p-10 md:p-14 text-center"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Eyebrow accent>Online booking</Eyebrow>
            <h2
              className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Book online, anytime.
            </h2>
            <p
              className="mt-5 text-muted md:text-lg max-w-xl mx-auto"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              See real-time availability, pick your stylist and service, and
              reserve your chair through our booking system. Full service menu
              and pricing are listed there.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CtaButton href={BOOKING.url} external>
                Book Now
              </CtaButton>
              <CtaButton
                href={`tel:${CONTACT.phoneHref}`}
                variant="secondary"
                external
              >
                Call {CONTACT.phone}
              </CtaButton>
            </div>
            <p className="mt-6 text-sm text-muted">
              Prefer to call? We&apos;re here Mon–Sat, 10am–6pm.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
