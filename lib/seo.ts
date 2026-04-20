import type { Metadata } from "next";
import { SITE, BUSINESS } from "./constants";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: PageMetaInput): Metadata {
  const canonical = `${SITE.url}${path === "/" ? "" : path}`;
  const image = ogImage ?? SITE.ogImage;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BUSINESS.name,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
