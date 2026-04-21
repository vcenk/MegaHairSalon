import { MapPin } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { CONTACT } from "@/lib/constants";

function directionsHref() {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    CONTACT.address;
  const q = `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export function Visit() {
  return (
    <section
      className="mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32"
      style={{ maxWidth: "var(--container-max)" }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <FadeIn>
          <Eyebrow>Visit</Eyebrow>
          <h2
            className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)]"
            style={{
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Come and see us.
          </h2>
          <address
            className="mt-8 not-italic md:text-lg text-muted"
            style={{ lineHeight: "var(--leading-body)" }}
          >
            {CONTACT.address.streetAddress}
            <br />
            {CONTACT.address.addressLocality},{" "}
            {CONTACT.address.addressRegion}{" "}
            {CONTACT.address.postalCode}
            <br />
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="mt-3 inline-block text-foreground hover:text-accent transition-colors"
            >
              {CONTACT.phone}
            </a>
          </address>
          <dl className="mt-6 flex flex-col gap-1.5 max-w-xs text-muted">
            <div className="flex justify-between gap-4">
              <dt>Mon — Sat</dt>
              <dd>10am – 6pm</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Sunday</dt>
              <dd>Closed</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/book">Book online</CtaButton>
            <CtaButton
              href={directionsHref()}
              variant="secondary"
              external
            >
              Get directions
            </CtaButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <a
            href={directionsHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Megas Hair Salon location in Google Maps"
            className="group relative block w-full aspect-[4/3] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden border border-border bg-bg-alt"
          >
            {/* Stylized map placeholder — swap for a real embed or static map image at launch */}
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
  );
}
