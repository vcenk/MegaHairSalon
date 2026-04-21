import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = {
  message?: string;
};

export function StubNotice({
  message = "Full content for this page is on its way.",
}: Props) {
  return (
    <section
      className="mx-auto px-6 md:px-10 py-10 md:py-14"
      style={{ maxWidth: "var(--container-narrow)" }}
    >
      <FadeIn>
        <div
          className="border-l-2 pl-6 py-2"
          style={{ borderColor: "var(--color-accent)" }}
        >
          <p
            className="text-[0.7rem] uppercase text-accent mb-2"
            style={{ letterSpacing: "var(--tracking-label)" }}
          >
            In progress
          </p>
          <p className="text-muted md:text-lg" style={{ lineHeight: "var(--leading-body)" }}>
            {message} In the meantime, feel free to{" "}
            <Link
              href="/contact"
              className="text-foreground hover:text-accent underline underline-offset-4 transition-colors"
            >
              contact us
            </Link>{" "}
            or{" "}
            <Link
              href="/book"
              className="text-foreground hover:text-accent underline underline-offset-4 transition-colors"
            >
              book an appointment
            </Link>
            .
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
