import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/motion/FadeIn";
import { TEAM } from "@/lib/team";

export function Artisans() {
  return (
    <section
      className="mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32"
      style={{ maxWidth: "var(--container-max)" }}
    >
      <FadeIn className="max-w-2xl">
        <Eyebrow>The Artisans</Eyebrow>
        <h2
          className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)]"
          style={{
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display)",
          }}
        >
          Hands that have shaped decades of hair.
        </h2>
      </FadeIn>

      <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {TEAM.map((person, i) => (
          <FadeIn key={person.slug} delay={(i % 4) * 0.08}>
            <Link href={`/team/${person.slug}`} className="group block">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-alt">
                <Image
                  src={person.portrait}
                  alt={`${person.name}, ${person.title}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5">
                <h3
                  className="font-display text-2xl md:text-[1.625rem]"
                  style={{
                    lineHeight: "var(--leading-tight)",
                    letterSpacing: "var(--tracking-display)",
                  }}
                >
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{person.title}</p>
                {person.years !== null && (
                  <p
                    className="mt-3 text-[0.7rem] uppercase text-accent"
                    style={{ letterSpacing: "var(--tracking-label)" }}
                  >
                    {person.years} years
                  </p>
                )}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 md:mt-16 text-center">
        <Link
          href="/team"
          className="inline-block text-xs uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
          style={{ letterSpacing: "var(--tracking-label)" }}
        >
          Meet the team →
        </Link>
      </FadeIn>
    </section>
  );
}
