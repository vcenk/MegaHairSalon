import Link from "next/link";
import { Star, MapPin, Phone, Mail } from "lucide-react";
import { BUSINESS, CONTACT, SOCIAL } from "@/lib/constants";
import { FOOTER_SERVICES } from "@/lib/nav";
import { Logo } from "./Logo";
import { InstagramIcon, FacebookIcon } from "./BrandIcons";

function directionsHref() {
  const { streetAddress, addressLocality, addressRegion, postalCode } = CONTACT.address;
  const q = `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

const LABEL_CLASS =
  "text-[0.7rem] uppercase text-foreground mb-5 block";
const LABEL_STYLE = { letterSpacing: "var(--tracking-label)" } as const;

const LINK_CLASS =
  "text-sm text-muted hover:text-accent transition-colors";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div
        className="mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10"
        style={{ maxWidth: "var(--container-max)" }}
      >
        {/* Column 1 — Brand */}
        <div>
          <Logo size="lg" />
          <p className="mt-5 text-sm text-muted leading-relaxed">
            Since 1984.
            <br />
            From Istanbul to Vancouver.
          </p>
        </div>

        {/* Column 2 — Services */}
        <div>
          <span className={LABEL_CLASS} style={LABEL_STYLE}>
            Services
          </span>
          <ul className="flex flex-col gap-3">
            {FOOTER_SERVICES.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={LINK_CLASS}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Visit */}
        <div>
          <span className={LABEL_CLASS} style={LABEL_STYLE}>
            Visit
          </span>
          <address className="not-italic flex flex-col gap-3 text-sm text-muted">
            <a
              href={directionsHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-accent transition-colors"
            >
              <MapPin size={15} strokeWidth={1.5} className="mt-0.5 flex-none" />
              <span>
                {CONTACT.address.streetAddress}
                <br />
                {CONTACT.address.addressLocality}, {CONTACT.address.addressRegion}{" "}
                {CONTACT.address.postalCode}
              </span>
            </a>
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone size={15} strokeWidth={1.5} />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail size={15} strokeWidth={1.5} />
              {CONTACT.email}
            </a>
          </address>

          <dl className="mt-5 text-sm text-muted flex flex-col gap-1.5 max-w-[240px]">
            <div className="flex justify-between gap-4">
              <dt>Mon — Sat</dt>
              <dd>10am – 6pm</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Sunday</dt>
              <dd>Closed</dd>
            </div>
          </dl>

          <Link
            href="/book"
            className="mt-6 inline-flex items-center bg-foreground text-background px-6 py-3 text-[0.7rem] uppercase hover:bg-accent transition-colors"
            style={{ letterSpacing: "0.08em" }}
          >
            Book Now
          </Link>
        </div>

        {/* Column 4 — Connect */}
        <div>
          <span className={LABEL_CLASS} style={LABEL_STYLE}>
            Connect
          </span>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            <li>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <InstagramIcon size={15} />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FacebookIcon size={15} />
                Facebook
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Star size={15} strokeWidth={1.5} />
                Google Reviews
              </a>
            </li>
          </ul>

          <p
            lang="tr"
            className="mt-8 font-display text-[1.75rem] leading-none text-accent"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Hoş geldiniz
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div
          className="mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted"
          style={{ maxWidth: "var(--container-max)" }}
        >
          <p>
            © {year} {BUSINESS.name}
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
