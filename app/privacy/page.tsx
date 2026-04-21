import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { BUSINESS, CONTACT } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Privacy Policy | Megas Hair Salon",
  description:
    "How Megas Hair Salon collects, uses, and protects your information.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy" },
        ]}
        eyebrow="Legal"
        title="Privacy policy."
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-14"
        style={{ maxWidth: "var(--container-text)" }}
      >
        <FadeIn
          className="space-y-6 text-muted"
        >
          <p style={{ lineHeight: "var(--leading-body)" }}>
            {BUSINESS.name} respects your privacy. This page outlines, in
            plain terms, what information we collect and how we use it.
            Full policy copy is being finalised for launch.
          </p>
          <h2 className="text-foreground font-display text-2xl mt-8">
            What we collect
          </h2>
          <p style={{ lineHeight: "var(--leading-body)" }}>
            When you book an appointment, we collect your name, phone
            number, and email through our scheduling provider. When you
            contact us directly, we collect what you send us. We use
            anonymised site analytics (page views, referrers) through
            Google Analytics and Microsoft Clarity.
          </p>
          <h2 className="text-foreground font-display text-2xl mt-8">
            How we use it
          </h2>
          <p style={{ lineHeight: "var(--leading-body)" }}>
            To book and remind you of appointments. To reply to your
            messages. To understand how the site is used so we can improve
            it. We don&apos;t sell your information, ever.
          </p>
          <h2 className="text-foreground font-display text-2xl mt-8">
            Contact
          </h2>
          <p style={{ lineHeight: "var(--leading-body)" }}>
            To request correction or deletion of your data, email us at{" "}
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
