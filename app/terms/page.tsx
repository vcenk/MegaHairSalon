import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { BUSINESS, CONTACT } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Terms of Service | Megas Hair Salon",
  description:
    "Terms of service and booking policies for Megas Hair Salon in Coquitlam.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Terms" },
        ]}
        eyebrow="Legal"
        title="Terms of service."
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-14"
        style={{ maxWidth: "var(--container-text)" }}
      >
        <FadeIn className="space-y-6 text-muted">
          <p style={{ lineHeight: "var(--leading-body)" }}>
            These terms apply to your use of {BUSINESS.name} services and
            this website. Full terms are being finalised for launch.
          </p>

          <h2 className="text-foreground font-display text-2xl mt-8">
            Appointments
          </h2>
          <p style={{ lineHeight: "var(--leading-body)" }}>
            Appointments are by reservation. A phone number or email is
            required to book. We ask for 24 hours&apos; notice to cancel or
            reschedule. No-shows may be asked for a deposit on future
            bookings.
          </p>

          <h2 className="text-foreground font-display text-2xl mt-8">
            Services & pricing
          </h2>
          <p style={{ lineHeight: "var(--leading-body)" }}>
            Prices listed on this website are starting prices. Final pricing
            depends on hair length, condition, and time required, and is
            confirmed with your stylist at the start of your appointment.
          </p>

          <h2 className="text-foreground font-display text-2xl mt-8">
            Contact
          </h2>
          <p style={{ lineHeight: "var(--leading-body)" }}>
            Questions? Email us at{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-foreground hover:text-accent underline underline-offset-4 transition-colors"
            >
              {CONTACT.email}
            </a>
            .
          </p>
        </FadeIn>
      </section>
    </>
  );
}
