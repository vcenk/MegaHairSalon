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
  {
    src: "/images/photos/result-balayage-1.jpg",
    alt: "Hand-painted balayage result by master colourists at Megas Hair Salon, Coquitlam",
  },
  {
    src: "/images/photos/result-blonde-1.jpg",
    alt: "Platinum blonde transformation by Bülent at Megas Hair Salon, Coquitlam",
  },
  {
    src: "/images/photos/salon-interior-1.jpg",
    alt: "Megas Hair Salon interior — styling floor, Coquitlam",
  },
  {
    src: "/images/photos/result-precision-cut-1.jpg",
    alt: "Women's precision cut with soft layers by Gazi, Megas Coquitlam",
  },
  {
    src: "/images/photos/result-hair-color-1.jpg",
    alt: "Rich brunette custom hair colour by master colourists, Megas Coquitlam",
  },
  {
    src: "/images/photos/salon-interior-2.jpg",
    alt: "Megas Hair Salon styling chair and mirror detail, Coquitlam",
  },
  {
    src: "/images/photos/result-balayage-2.jpg",
    alt: "Close-up of hand-painted balayage colour placement, Megas Coquitlam",
  },
  {
    src: "/images/photos/result-blonde-2.jpg",
    alt: "Toned blonde with natural root depth, Megas Coquitlam",
  },
  {
    src: "/images/photos/salon-interior-3.jpg",
    alt: "Megas Hair Salon wash station and Kérastase product shelf, Coquitlam",
  },
  {
    src: "/images/photos/result-precision-cut-2.jpg",
    alt: "Men's precision haircut with sharp lines by Gazi, Megas Coquitlam",
  },
  {
    src: "/images/photos/result-hair-color-2.jpg",
    alt: "Copper red colour work by Emir, Megas Coquitlam",
  },
  {
    src: "/images/photos/salon-interior-4.jpg",
    alt: "Megas Hair Salon tools and materials detail, Coquitlam",
  },
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
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden bg-bg-alt group"
            >
              <Image
                src={img.src}
                alt={img.alt}
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
