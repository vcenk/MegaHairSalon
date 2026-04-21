import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { StubNotice } from "@/components/sections/StubNotice";
import { FadeIn } from "@/components/motion/FadeIn";
import { Visit } from "@/components/sections/Visit";

export const metadata = pageMetadata({
  title: "Gallery | Work from Megas Hair Salon Coquitlam",
  description:
    "Balayage, blonde transformations, precision cuts, and the salon itself — a look at the work of Megas Hair Salon in Coquitlam.",
  path: "/gallery",
});

const IMAGES = [
  "/images/placeholder/result-balayage-1.svg",
  "/images/placeholder/result-blonde-1.svg",
  "/images/placeholder/salon-interior-1.svg",
  "/images/placeholder/result-precision-cut-1.svg",
  "/images/placeholder/result-hair-color-1.svg",
  "/images/placeholder/salon-interior-2.svg",
  "/images/placeholder/result-balayage-2.svg",
  "/images/placeholder/result-blonde-2.svg",
  "/images/placeholder/salon-interior-3.svg",
  "/images/placeholder/result-precision-cut-2.svg",
  "/images/placeholder/result-hair-color-2.svg",
  "/images/placeholder/salon-interior-4.svg",
] as const;

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Gallery" },
        ]}
        eyebrow="Gallery"
        title="Looks from the chairs."
        subhead="A selection of recent work — balayage, blonde, precision cutting, and the salon space itself."
      />

      <section
        className="mx-auto px-6 md:px-10 py-10 md:py-16"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <FadeIn className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden bg-bg-alt group"
            >
              <Image
                src={src}
                alt="Gallery entry"
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </FadeIn>
      </section>

      <StubNotice message="The full gallery — sortable by service and stylist — is on its way." />

      <Visit />
    </>
  );
}
