import { pageMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { BrandOrigin } from "@/components/sections/BrandOrigin";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ReviewsMarquee } from "@/components/sections/ReviewsMarquee";
import { Artisans } from "@/components/sections/Artisans";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { Visit } from "@/components/sections/Visit";

export const metadata = pageMetadata({
  title: "Hair Salon Coquitlam | Master Colourists Since 1984 | Megas",
  description:
    "Award-worthy hair salon in Coquitlam. Master colourists in balayage, blonde, and precision cuts. Turkish artistry since 1984. Book at (778) 858-0396.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Hero />
      <BrandOrigin />
      <ServicesGrid />
      <ReviewsMarquee />
      <Artisans />
      <FeaturedWork />
      <Testimonials />
      <Visit />
    </>
  );
}
