import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { CONTACT } from "@/lib/constants";

function fullAddress() {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    CONTACT.address;
  return `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
}

function directionsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress())}`;
}

function mapEmbedSrc() {
  return `https://www.google.com/maps?q=${encodeURIComponent(fullAddress())}&output=embed`;
}

export function Visit() {
  return (
    <section
      className="mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32"
      style={{ maxWidth: "var(--container-max)" }}
    >
      {/* Antique-gold hairline, in the Salon Haze "Get In Touch" idiom */}
      <div
        aria-hidden="true"
        className="h-px w-full mb-12 md:mb-16"
        style={{ backgroundColor: "var(--color-accent)", opacity: 0.5 }}
      />
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
          <div className="relative w-full aspect-[4/3] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden border border-border bg-bg-alt">
            <iframe
              src={mapEmbedSrc()}
              title={`Map to Megas Hair Salon, ${fullAddress()}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
            />
          </div>
        </FadeIn>
      </div>
      <div
        aria-hidden="true"
        className="h-px w-full mt-12 md:mt-16"
        style={{ backgroundColor: "var(--color-accent)", opacity: 0.5 }}
      />
    </section>
  );
}
