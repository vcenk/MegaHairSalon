import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { StubNotice } from "@/components/sections/StubNotice";
import { Visit } from "@/components/sections/Visit";

export const metadata = pageMetadata({
  title: "Journal | Notes on Hair from Megas Hair Salon",
  description:
    "Notes on hair, colour, and craft from master colourists at Megas Hair Salon in Coquitlam. New posts coming soon.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Journal" },
        ]}
        eyebrow="Journal"
        title="Notes on hair, colour, and craft."
        subhead="We write slowly. New posts land here — from stylist tutorials to colour theory to the occasional story from the chair."
      />

      <StubNotice message="Our first posts are being written now — a 12-month editorial calendar is in place per docs/content/blog-roadmap.md." />

      <Visit />
    </>
  );
}
