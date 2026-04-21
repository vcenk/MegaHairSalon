export type TeamMember = {
  readonly name: string;
  readonly alternateName?: string;
  readonly slug: string;
  readonly title: string;
  readonly years: number | null;
  readonly portrait: string;
  readonly knowsAbout?: readonly string[];
};

export const TEAM: readonly TeamMember[] = [
  {
    name: "Bülent",
    alternateName: "Bill",
    slug: "bulent-bill",
    title: "Master Colourist",
    years: 35,
    portrait: "/images/placeholder/stylist-bulent-portrait.svg",
    knowsAbout: ["Balayage", "Blonde transformations", "Precision cutting"],
  },
  {
    name: "Gazi",
    slug: "gazi",
    title: "Master Stylist",
    years: 41,
    portrait: "/images/placeholder/stylist-gazi-portrait.svg",
    knowsAbout: ["Precision cutting", "Editorial styling", "Men's grooming"],
  },
  {
    name: "Emir",
    slug: "emir",
    title: "Colour & Styling Master",
    years: 23,
    portrait: "/images/placeholder/stylist-emir-portrait.svg",
    knowsAbout: ["Hair colour", "Blow dry", "Keratin treatments"],
  },
  {
    name: "Fulya",
    slug: "fulya",
    title: "Director & Client Experience",
    years: null,
    portrait: "/images/placeholder/stylist-fulya-portrait.svg",
  },
] as const;
