import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  subhead?: string;
  breadcrumbs?: Crumb[];
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  subhead,
  breadcrumbs,
  align = "left",
}: Props) {
  return (
    <section
      className="mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-10 md:pb-16"
      style={{ maxWidth: "var(--container-max)" }}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} className="mb-8 md:mb-12" />
      )}
      <FadeIn className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1
          className="mt-4 font-display font-light uppercase text-[clamp(2.25rem,4.5vw,3.75rem)]"
          style={{
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display-caps)",
          }}
        >
          {title}
        </h1>
        {subhead && (
          <p
            className="mt-6 text-lg md:text-xl text-muted"
            style={{ lineHeight: "var(--leading-body)" }}
          >
            {subhead}
          </p>
        )}
      </FadeIn>
    </section>
  );
}
