export type Testimonial = {
  readonly quote: string;
  readonly author: string;
  readonly city?: string;
};

export type TeamMember = {
  readonly slug: string;
  readonly name: string;
  readonly alternateName?: string;
  readonly title: string;
  readonly years: number | null;
  readonly portrait: string;
  readonly portraitAlt: string;
  readonly actionImage?: string;
  readonly actionImageAlt?: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly eyebrow: string;
  readonly h1: string;
  readonly bio: string;
  readonly specialties: readonly string[];
  readonly knowsAbout?: readonly string[];
  readonly gallery: readonly { readonly src: string; readonly alt: string }[];
  readonly pullQuote: Testimonial;
  readonly relatedServices: readonly string[];
};

export const TEAM: readonly TeamMember[] = [
  {
    slug: "bulent-bill",
    name: "Bülent",
    alternateName: "Bill",
    title: "Founder & Master Colourist",
    years: 35,
    portrait: "/images/photos/bulent.jpg",
    portraitAlt:
      "Portrait of Bülent (Bill), founder and master colourist at Megas Hair Salon, Coquitlam",
    actionImage: "/images/placeholder/stylist-bulent-action.svg",
    actionImageAlt:
      "Bülent working with a client — balayage colour placement at Megas Coquitlam",
    metaTitle:
      'Bülent "Bill" — Master Colourist & Blonde Specialist | Megas Hair Salon Coquitlam',
    metaDescription:
      "Meet Bülent (Bill), Master Colourist & Blonde Specialist at Megas Hair Salon Coquitlam. 35+ years specialising in blonde transformations. Book at (778) 858-0396.",
    eyebrow: "35 years · Master Stylist",
    h1: "Bülent — known to clients as Bill.",
    bio: "Known in the salon as 'Bill,' Bülent is a master of his craft with over 35 years of experience — an artist who turns hair into a statement. With two established salons in Turkey and a thriving career in Canada, he brings vision, precision, and passion to every strand. He is especially celebrated for his expertise in blonding, precision cutting, and restorative hair treatments. To Bill, hair is not just something to style; it's something to understand.",
    specialties: [
      "Blonde transformations",
      "Balayage",
      "Precision cutting",
      "Restorative hair treatments",
    ],
    knowsAbout: [
      "Balayage",
      "Blonde transformations",
      "Precision cutting",
      "Colour correction",
      "Restorative hair treatments",
    ],
    gallery: [
      {
        src: "/images/photos/result-balayage-1.jpg",
        alt: "Balayage work by Bülent at Megas Hair Salon, Coquitlam",
      },
      {
        src: "/images/photos/result-blonde-1.jpg",
        alt: "Platinum blonde transformation by Bülent, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-blonde-2.jpg",
        alt: "Lived-in blonde with root depth by Bülent, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-balayage-2.jpg",
        alt: "Close-up of hand-painted balayage by Bülent, Megas Coquitlam",
      },
    ],
    pullQuote: {
      quote:
        "I have been looking for someone like Bill in Vancouver for years — truly, he has magic hands.",
      author: "Sarah M.",
      city: "Coquitlam",
    },
    relatedServices: [
      "blonde-specialist-coquitlam",
      "balayage-coquitlam",
      "precision-haircut-coquitlam",
    ],
  },
  {
    slug: "gazi",
    name: "Gazi",
    title: "Master Stylist",
    years: 41,
    portrait: "/images/placeholder/stylist-gazi-portrait.svg",
    portraitAlt:
      "Portrait of Gazi, master stylist and colour sculptor at Megas Hair Salon, Coquitlam",
    actionImage: "/images/placeholder/stylist-gazi-action.svg",
    actionImageAlt:
      "Gazi mid-cut, precision styling at Megas Hair Salon, Coquitlam",
    metaTitle:
      "Gazi — Master Stylist & Colour Sculptor | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Gazi, Master Stylist & Colour Sculptor at Megas Hair Salon Coquitlam. 41+ years specialising in precision colour placement. Book at (778) 858-0396.",
    eyebrow: "41 years · Master Stylist",
    h1: "Gazi — sculptor of confidence.",
    bio: "Since 1984, Gazi has been more than a hairstylist — he's been a force in hair artistry. Fast, innovative, and instinctively skilled, Gazi doesn't just style hair; he leaves his mark. Clients often describe his work not as a service, but as a transformation. For Gazi, hair is not simply cut. It's sculpted. It speaks. It becomes you.",
    specialties: [
      "Precision colour placement",
      "Custom cuts",
      "Transformative restyles",
    ],
    knowsAbout: [
      "Precision cutting",
      "Editorial styling",
      "Men's grooming",
      "Transformative restyles",
    ],
    gallery: [
      {
        src: "/images/photos/result-precision-cut-1.jpg",
        alt: "Precision cut by Gazi at Megas Hair Salon, Coquitlam",
      },
      {
        src: "/images/photos/result-precision-cut-2.jpg",
        alt: "Men's precision haircut by Gazi, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-hair-color-1.jpg",
        alt: "Custom colour placement by Gazi, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-balayage-2.jpg",
        alt: "Sculpted colour detail by Gazi, Megas Coquitlam",
      },
    ],
    pullQuote: {
      quote:
        "Bulent and Gazi started with a thorough consultation, really listening to my preferences. The results exceeded my expectations.",
      author: "Maya K.",
      city: "Burnaby",
    },
    relatedServices: [
      "precision-haircut-coquitlam",
      "hair-color-coquitlam",
      "balayage-coquitlam",
    ],
  },
  {
    slug: "emir",
    name: "Emir",
    title: "Colour & Styling Master",
    years: 23,
    portrait: "/images/placeholder/stylist-emir-portrait.svg",
    portraitAlt:
      "Portrait of Emir, colour and styling master at Megas Hair Salon, Coquitlam",
    actionImage: "/images/placeholder/stylist-emir-action.svg",
    actionImageAlt:
      "Emir finishing a blowout — styling at Megas Hair Salon, Coquitlam",
    metaTitle:
      "Emir — Colour & Styling Master | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Emir, Colour & Styling Master at Megas Hair Salon Coquitlam. 23+ years specialising in hair colour and blowouts. Book at (778) 858-0396.",
    eyebrow: "23 years · Master Stylist",
    h1: "Emir — the craftsman of modern beauty.",
    bio: "With 23 years of hands-on expertise across both Turkey and Canada, Emir is more than a stylist; he's a sculptor of confidence. His mastery in hair colouring, styling, and especially blow-drying sets him apart as a true craftsman of modern beauty. Emir is constantly evolving, bringing current trends to life with skill, speed, and precision. Known for his warm and upbeat personality, he brings both talent and positive energy to every session. He has worked with industry-leading brands such as L'Oréal, Kérastase, and Wella, and has completed multiple advanced training programmes in his field.",
    specialties: [
      "Hair colour",
      "Styling",
      "Blow-drying",
      "Modern trend interpretation",
    ],
    knowsAbout: [
      "Hair colour",
      "Blow dry",
      "Keratin treatments",
      "Modern styling",
    ],
    gallery: [
      {
        src: "/images/photos/result-blow-dry-1.jpg",
        alt: "Signature blowout by Emir at Megas Hair Salon, Coquitlam",
      },
      {
        src: "/images/photos/result-hair-color-2.jpg",
        alt: "Copper colour work by Emir, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-keratin-1.jpg",
        alt: "Post-keratin smooth finish styled by Emir, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-precision-cut-2.jpg",
        alt: "Modern men's styling by Emir, Megas Coquitlam",
      },
    ],
    pullQuote: {
      quote:
        "Clients often call him 'the best at what he does' — not just for the results, but for how they feel afterward: confident, refreshed, and seen.",
      author: "From a recent review",
    },
    relatedServices: [
      "hair-color-coquitlam",
      "blow-dry-coquitlam",
      "keratin-treatment-coquitlam",
    ],
  },
  {
    slug: "fulya",
    name: "Fulya",
    title: "Owner & Director",
    years: 15,
    portrait: "/images/placeholder/stylist-fulya-portrait.svg",
    portraitAlt:
      "Portrait of Fulya, owner and director at Megas Hair Salon, Coquitlam",
    actionImage: "/images/placeholder/stylist-fulya-action.svg",
    actionImageAlt:
      "Fulya at the front of the salon, welcoming a client at Megas Coquitlam",
    metaTitle:
      "Fulya — Owner & Director | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Fulya, owner and director of Megas Hair Salon Coquitlam. 15+ years in client experience and salon operations. Book at (778) 858-0396.",
    eyebrow: "Owner & Director",
    h1: "Fulya — the architect of the experience.",
    bio: "A strong vision, refined leadership, and an unwavering commitment to excellence — Fulya is the driving force behind the experience at our salon. With business education across Turkey, the United States, and Canada, she brings a globally informed and multifaceted perspective to the beauty industry. As the salon's director and client relations lead, Fulya is known for her graceful yet solution-focused approach. She oversees every aspect of the client journey — from appointments and team coordination to service quality and long-term satisfaction. To her, beauty is not just appearance; it's trust, connection, and consistency. The Vancouver chapter of our story was shaped under her leadership.",
    specialties: [
      "Client experience",
      "Salon operations",
      "Service quality",
    ],
    knowsAbout: [
      "Client experience",
      "Salon operations",
      "Service quality",
    ],
    gallery: [
      {
        src: "/images/photos/salon-interior-1.jpg",
        alt: "Megas Hair Salon interior, styling floor — Coquitlam",
      },
      {
        src: "/images/photos/salon-interior-2.jpg",
        alt: "Megas Hair Salon styling chair and mirror detail, Coquitlam",
      },
      {
        src: "/images/photos/salon-interior-3.jpg",
        alt: "Megas Hair Salon wash station and product shelf, Coquitlam",
      },
      {
        src: "/images/photos/salon-interior-4.jpg",
        alt: "Megas Hair Salon detail shot — tools and materials, Coquitlam",
      },
    ],
    pullQuote: {
      quote:
        "Fulya made me feel welcomed from the moment I walked in. She follows up after every visit — that level of care is rare.",
      author: "Recent client review",
    },
    relatedServices: [
      "balayage-coquitlam",
      "precision-haircut-coquitlam",
      "blow-dry-coquitlam",
    ],
  },

  // ── New stylists (2025 roster) ─────────────────────────────────────────
  // PLACEHOLDER PROFILES. Names are confirmed; the client is supplying real
  // titles, bios, years, and portraits. Until then these carry neutral copy
  // (no invented specifics), years: null, and generated placeholder portraits.
  // Replace per person as content arrives — see docs/LAUNCH-BLOCKERS.md.
  ...(["Fara", "Nadia", "Rain", "Angela"] as const).map((name) => {
    const slug = name.toLowerCase();
    return {
      slug,
      name,
      title: "Senior Stylist",
      years: null,
      portrait: `/images/placeholder/stylist-${slug}-portrait.svg`,
      portraitAlt: `Portrait of ${name}, senior stylist at Megas Hair Salon, Coquitlam`,
      metaTitle: `${name} — Senior Stylist | Megas Hair Salon Coquitlam`,
      metaDescription: `Meet ${name}, senior stylist at Megas Hair Salon in Coquitlam. Book cuts, colour, and styling at (778) 858-0396.`,
      eyebrow: "Senior Stylist",
      h1: `${name}.`,
      bio: `${name} is part of the senior styling team at Megas Hair Salon in Coquitlam. A fuller profile — training, specialties, and featured work — is on its way. In the meantime, you can book an appointment online.`,
      specialties: ["Cutting", "Colour", "Blow-dry & styling"],
      knowsAbout: ["Cutting", "Colour", "Styling"],
      gallery: [],
      pullQuote: {
        quote:
          "From Istanbul to Coquitlam — the same standard of care in every chair.",
        author: "Megas Hair Salon",
      },
      relatedServices: [
        "precision-haircut-coquitlam",
        "hair-color-coquitlam",
        "blow-dry-coquitlam",
      ],
    };
  }),
] as const;

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM.find((p) => p.slug === slug);
}
