export const SITE = {
  url: "https://megashairsalon.ca",
  locale: "en_CA",
  ogImage: "/images/photos/og-default.jpg",
} as const;

export const BUSINESS = {
  name: "Megas Hair Salon",
  shortName: "Megas",
  founderStylist: "Bülent (Bill)",
  director: "Fulya",
  stylists: ["Bülent (Bill)", "Gazi", "Emir"] as const,
  foundingDate: "1984",
  foundingLocation: "Istanbul, Turkey",
  vancouverSince: "2025",
  tagline: "Master colourists since 1984.",
  longTagline: "Four decades of Turkish hair artistry. Now in Coquitlam.",
} as const;

export const CONTACT = {
  address: {
    streetAddress: "150-1169 Pacific St",
    addressLocality: "Coquitlam",
    addressRegion: "BC",
    postalCode: "V3B 0J1",
    addressCountry: "CA",
  },
  phone: "(778) 858-0396",
  phoneHref: "+17788580396",
  email: "hello@megashairsalon.ca",
  geo: { latitude: 49.2814, longitude: -122.7905 },
} as const;

type DayHours = { opens: string; closes: string } | null;

export const HOURS: Record<
  "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday",
  DayHours
> = {
  monday: { opens: "10:00", closes: "18:00" },
  tuesday: { opens: "10:00", closes: "18:00" },
  wednesday: { opens: "10:00", closes: "18:00" },
  thursday: { opens: "10:00", closes: "18:00" },
  friday: { opens: "10:00", closes: "18:00" },
  saturday: { opens: "10:00", closes: "18:00" },
  sunday: null,
} as const;

export const BOOKING = {
  // Phorest hosted online-booking page. Services and pricing live here.
  url: "https://phorest.com/book/salons/megashairsalon",
  provider: "Phorest",
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/megashairsalon",
  facebook: "https://www.facebook.com/megashairsalon",
  google: "https://www.google.com/maps/place/MEGAS+Hair+Salon",
} as const;

export const RATINGS = {
  ratingValue: 4.8,
  reviewCount: 146,
} as const;

export const AREA_SERVED = ["Coquitlam", "Port Moody", "Port Coquitlam", "Vancouver"] as const;
