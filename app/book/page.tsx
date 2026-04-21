import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT } from "@/lib/constants";

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

      {/* Fresha embed placeholder */}
      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn>
          {/* TODO: Replace with Fresha embed once NEXT_PUBLIC_FRESHA_ACCOUNT_ID is provisioned (see docs/LAUNCH-BLOCKERS.md). Fresha snippet goes here as a <script> + <div id="fresha-widget"> or an iframe per their current integration docs. */}
          <div
            className="border-2 border-dashed p-10 md:p-14 text-center"
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
              Our Fresha booking widget lands here.
            </h2>
            <p
              className="mt-5 text-muted md:text-lg max-w-xl mx-auto"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              We&apos;re finalising our online scheduling. In the meantime,
              the fastest way to book is by phone — most same-week slots are
              filled this way.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CtaButton href={`tel:${CONTACT.phoneHref}`} external>
                Call {CONTACT.phone}
              </CtaButton>
              <CtaButton
                href={`mailto:${CONTACT.email}`}
                variant="secondary"
                external
              >
                Email us
              </CtaButton>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
