import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { SOCIAL } from "@/lib/constants";

const HANDLE = "@megashairsalon";

// A row of recent work, à la the Salon Haze "Follow Us" strip. Uses the
// featured-work photography; each tile links out to Instagram.
const SHOTS = [
  { src: "/images/photos/result-balayage-1.jpg", alt: "Balayage by Megas Hair Salon, Coquitlam" },
  { src: "/images/photos/result-blonde-1.jpg", alt: "Blonde transformation at Megas Hair Salon, Coquitlam" },
  { src: "/images/photos/result-hair-color-1.jpg", alt: "Custom hair colour at Megas Hair Salon, Coquitlam" },
  { src: "/images/photos/result-precision-cut-1.jpg", alt: "Precision cut at Megas Hair Salon, Coquitlam" },
  { src: "/images/photos/result-blow-dry-1.jpg", alt: "Blow-dry styling at Megas Hair Salon, Coquitlam" },
  { src: "/images/photos/result-keratin-1.jpg", alt: "Keratin smooth finish at Megas Hair Salon, Coquitlam" },
] as const;

export function InstagramStrip() {
  return (
    <section
      className="border-y border-border"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="mx-auto px-6 md:px-10 py-16 md:py-24" style={{ maxWidth: "var(--container-max)" }}>
        <FadeIn>
          <h2
            className="text-center font-display font-light text-[clamp(1.5rem,3vw,2.25rem)]"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Follow us :{" "}
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:text-accent-dark transition-colors"
            >
              {HANDLE}
            </a>
          </h2>
        </FadeIn>

        <div className="mt-10 md:mt-14 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {SHOTS.map((shot, i) => (
            <FadeIn key={shot.src} delay={(i % 6) * 0.05}>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${shot.alt} — open Instagram`}
                className="group relative block aspect-square overflow-hidden bg-background"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 16vw, 33vw"
                  className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
