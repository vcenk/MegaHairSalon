export type Service = {
  readonly name: string;
  readonly slug: string;
  readonly teaser: string;
  readonly priceFrom: number;
  readonly image: string;
};

export const SERVICES: readonly Service[] = [
  {
    name: "Balayage",
    slug: "balayage-coquitlam",
    teaser: "Hand-painted dimension",
    priceFrom: 250,
    image: "/images/placeholder/result-balayage-1.svg",
  },
  {
    name: "Blonde Specialist",
    slug: "blonde-specialist-coquitlam",
    teaser: "Transformative light, fearlessly toned",
    priceFrom: 280,
    image: "/images/placeholder/result-blonde-1.svg",
  },
  {
    name: "Precision Cut",
    slug: "precision-haircut-coquitlam",
    teaser: "Sculpted for your bone structure",
    priceFrom: 85,
    image: "/images/placeholder/result-precision-cut-1.svg",
  },
  {
    name: "Hair Colour",
    slug: "hair-color-coquitlam",
    teaser: "Rich, custom-composed colour",
    priceFrom: 180,
    image: "/images/placeholder/result-hair-color-1.svg",
  },
  {
    name: "Keratin Smoothing",
    slug: "keratin-treatment-coquitlam",
    teaser: "Frizz-free for months",
    priceFrom: 300,
    image: "/images/placeholder/result-keratin-1.svg",
  },
  {
    name: "Blow Dry",
    slug: "blow-dry-coquitlam",
    teaser: "Polished, lasting styling",
    priceFrom: 65,
    image: "/images/placeholder/result-blow-dry-1.svg",
  },
  {
    name: "Root Touch Up",
    slug: "root-touch-up-coquitlam",
    teaser: "Seamless colour refresh",
    priceFrom: 120,
    image: "/images/placeholder/result-root-touch-up-1.svg",
  },
  {
    name: "Restorative Treatment",
    slug: "restorative-treatment-coquitlam",
    teaser: "Deep conditioning for damaged hair",
    priceFrom: 90,
    image: "/images/placeholder/result-restorative-1.svg",
  },
] as const;
