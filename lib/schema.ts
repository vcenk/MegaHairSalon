import {
  BUSINESS,
  CONTACT,
  HOURS,
  SOCIAL,
  RATINGS,
  SITE,
  AREA_SERVED,
} from "./constants";

export const BUSINESS_ID = `${SITE.url}/#business`;

const dayName = (d: string) => d[0].toUpperCase() + d.slice(1);

const openingHoursSpecification = Object.entries(HOURS)
  .filter(([, v]) => v !== null)
  .map(([day, hours]) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: dayName(day),
    opens: hours!.opens,
    closes: hours!.closes,
  }));

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": BUSINESS_ID,
  name: BUSINESS.name,
  image: `${SITE.url}/images/salon-exterior.jpg`,
  url: SITE.url,
  telephone: CONTACT.phoneHref,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.streetAddress,
    addressLocality: CONTACT.address.addressLocality,
    addressRegion: CONTACT.address.addressRegion,
    postalCode: CONTACT.address.postalCode,
    addressCountry: CONTACT.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CONTACT.geo.latitude,
    longitude: CONTACT.geo.longitude,
  },
  openingHoursSpecification,
  sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.google],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(RATINGS.ratingValue),
    reviewCount: String(RATINGS.reviewCount),
  },
  founder: { "@type": "Person", name: BUSINESS.founderStylist },
  foundingDate: BUSINESS.foundingDate,
  foundingLocation: { "@type": "Place", name: BUSINESS.foundingLocation },
  areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
} as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: BUSINESS.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  foundingDate: BUSINESS.foundingDate,
  founder: { "@type": "Person", name: BUSINESS.founderStylist },
  sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.google],
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: BUSINESS.name,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-CA",
} as const;

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE.url}${item.path}` } : {}),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${BUSINESS.name}`,
    url: `${SITE.url}/contact`,
    mainEntity: { "@id": BUSINESS_ID },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${BUSINESS.name}`,
    url: `${SITE.url}/about`,
    about: { "@id": BUSINESS_ID },
  };
}

type ServiceInput = {
  name: string;
  serviceType: string;
  description: string;
  slug: string;
  priceMin?: number;
  priceMax?: number;
};

export function serviceSchema({
  name,
  serviceType,
  description,
  slug,
  priceMin,
  priceMax,
}: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name,
    description,
    url: `${SITE.url}/services/${slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED.map((city) => ({ "@type": "City", name: city })),
    ...(priceMin !== undefined && priceMax !== undefined
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "CAD",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: priceMin,
              maxPrice: priceMax,
              priceCurrency: "CAD",
            },
          },
        }
      : {}),
  };
}

type PersonInput = {
  name: string;
  alternateName?: string;
  jobTitle: string;
  slug: string;
  image: string;
  knowsAbout?: string[];
};

export function personSchema({
  name,
  alternateName,
  jobTitle,
  slug,
  image,
  knowsAbout,
}: PersonInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    ...(alternateName ? { alternateName } : {}),
    jobTitle,
    url: `${SITE.url}/team/${slug}`,
    image: image.startsWith("http") ? image : `${SITE.url}${image}`,
    worksFor: { "@id": BUSINESS_ID },
    ...(knowsAbout ? { knowsAbout } : {}),
  };
}

type MenuCategoryInput = {
  name: string;
  items: readonly { name: string; priceValue?: number }[];
};

/** OfferCatalog for the full price menu page. */
export function menuSchema(categories: readonly MenuCategoryInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${BUSINESS.name} — Service Menu`,
    url: `${SITE.url}/menu`,
    provider: { "@id": BUSINESS_ID },
    itemListElement: categories.map((cat) => ({
      "@type": "OfferCatalog",
      name: cat.name,
      itemListElement: cat.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.name },
        ...(item.priceValue !== undefined
          ? { price: item.priceValue, priceCurrency: "CAD" }
          : {}),
      })),
    })),
  };
}

/** Drop in a <JsonLd data={...} /> component inside any page. */
export function jsonLdScriptProps(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
