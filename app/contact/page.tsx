import Link from "next/link";
import { MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { contactPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT, BOOKING } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Contact Megas Hair Salon | 150-1169 Pacific St, Coquitlam",
  description:
    "Visit Megas Hair Salon at 150-1169 Pacific St, Coquitlam. Call (778) 858-0396 or book online. Open Mon–Sat, 10am–6pm.",
  path: "/contact",
});

function directionsHref() {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    CONTACT.address;
  const q = `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

const WEEKDAYS = [
  ["Monday", "10am – 6pm"],
  ["Tuesday", "10am – 6pm"],
  ["Wednesday", "10am – 6pm"],
  ["Thursday", "10am – 6pm"],
  ["Friday", "10am – 6pm"],
  ["Saturday", "10am – 6pm"],
  ["Sunday", "Closed"],
] as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
        eyebrow="Visit"
        title="Come see us."
        subhead="We're on Pacific Street in downtown Coquitlam — five minutes from Coquitlam Centre."
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <FadeIn>
            <div className="space-y-8 md:space-y-10">
              <div>
                <Eyebrow>Address</Eyebrow>
                <address
                  className="not-italic mt-3 md:text-lg text-foreground"
                  style={{ lineHeight: "var(--leading-body)" }}
                >
                  {CONTACT.address.streetAddress}
                  <br />
                  {CONTACT.address.addressLocality},{" "}
                  {CONTACT.address.addressRegion}{" "}
                  {CONTACT.address.postalCode}
                </address>
              </div>

              <div>
                <Eyebrow>Phone</Eyebrow>
                <p className="mt-3 md:text-lg">
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
              </div>

              <div>
                <Eyebrow>Email</Eyebrow>
                <p className="mt-3 md:text-lg">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </p>
              </div>

              <div>
                <Eyebrow>Hours</Eyebrow>
                <dl className="mt-4 flex flex-col gap-1.5 max-w-xs">
                  {WEEKDAYS.map(([day, hrs]) => (
                    <div key={day} className="flex justify-between gap-4 text-muted">
                      <dt>{day}</dt>
                      <dd>{hrs}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <CtaButton href={BOOKING.url} external>Book online</CtaButton>
                <CtaButton
                  href={directionsHref()}
                  variant="secondary"
                  external
                >
                  Get directions
                </CtaButton>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <a
              href={directionsHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Megas Hair Salon location in Google Maps"
              className="group relative block w-full aspect-[4/3] md:aspect-[5/6] overflow-hidden border border-border bg-bg-alt"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent 0 18px, var(--color-border) 18px 19px), repeating-linear-gradient(-45deg, transparent 0 28px, var(--color-border) 28px 29px)",
                }}
              />
              <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                <span
                  className="inline-flex items-center justify-center size-14 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <MapPin
                    size={26}
                    strokeWidth={1.5}
                    style={{ color: "var(--color-background)" }}
                  />
                </span>
                <p
                  className="mt-5 font-display text-2xl md:text-3xl text-foreground"
                  style={{
                    lineHeight: "var(--leading-tight)",
                    letterSpacing: "var(--tracking-display)",
                  }}
                >
                  {CONTACT.address.addressLocality}, {CONTACT.address.addressRegion}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {CONTACT.address.streetAddress}
                </p>
                <span
                  className="mt-6 text-[0.7rem] uppercase text-foreground group-hover:text-accent transition-colors underline underline-offset-4"
                  style={{ letterSpacing: "var(--tracking-label)" }}
                >
                  View on Google Maps →
                </span>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Parking & access */}
      <section
        className="mx-auto px-6 md:px-10 py-14 md:py-20"
        style={{ maxWidth: "var(--container-narrow)" }}
      >
        <FadeIn>
          <Eyebrow>Parking & access</Eyebrow>
          <h2
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Getting here.
          </h2>
          <p
            className="mt-6 md:text-lg text-muted"
            style={{ lineHeight: "var(--leading-body)" }}
          >
            The salon is located on the ground floor of Pacific Street,
            between Westwood and Pinetree. Free underground visitor parking
            is available in the building. The Lincoln SkyTrain station is a
            7-minute walk.
          </p>
        </FadeIn>
      </section>

      {/* Booking CTA banner */}
      <section
        className="border-y border-border"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div
          className="mx-auto px-6 md:px-10 py-16 md:py-20 text-center"
          style={{ maxWidth: "var(--container-narrow)" }}
        >
          <FadeIn>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)]"
              style={{
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Ready when you are.
            </h2>
            <p
              className="mt-5 text-muted md:text-lg max-w-xl mx-auto"
              style={{ lineHeight: "var(--leading-body)" }}
            >
              For appointments, our booking page is the fastest way. For
              anything else,{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-foreground hover:text-accent underline underline-offset-4 transition-colors"
              >
                email us
              </a>{" "}
              or{" "}
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="text-foreground hover:text-accent underline underline-offset-4 transition-colors"
              >
                give us a call
              </a>
              .
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton href={BOOKING.url} external>Book your appointment</CtaButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
