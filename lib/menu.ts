// Full salon price menu, mirroring the live Phorest booking menu.
//
// SOURCE OF TRUTH IS PHOREST (https://megashairsalon.phorest.me). This is a
// manual snapshot — if the salon edits services or prices in Phorest, update
// this file (and MENU_UPDATED) to match. All prices are in CAD and are
// starting points ("from"); final pricing is confirmed in-salon.
//
// The Phorest "Extra Service" category (Academi, Extra Service Time, Redo) is
// intentionally omitted here — those are internal booking helpers, not
// client-facing menu items.

export const MENU_UPDATED = "2026-07-31";

export type MenuItem = {
  readonly name: string;
  /** Display price, e.g. "$350", "From $500", "Consultation", "Complimentary". */
  readonly price: string;
  /** Numeric starting price, for schema/sorting. Omit for consult/free items. */
  readonly priceValue?: number;
  readonly note?: string;
};

export type MenuCategory = {
  readonly slug: string;
  readonly name: string;
  readonly blurb?: string;
  readonly items: readonly MenuItem[];
};

export const MENU: readonly MenuCategory[] = [
  {
    slug: "colour",
    name: "Colour Services",
    blurb:
      "Custom-mixed colour by our master colourists — from a single-process refresh to full transformations. Most lightening services include a toner.",
    items: [
      { name: "Complimentary consultation", price: "Complimentary" },
      { name: "Root retouch", price: "$95", priceValue: 95 },
      { name: "Root retouch + blow-dry", price: "$145", priceValue: 145 },
      { name: "Base break", price: "$85", priceValue: 85 },
      { name: "Full colour, short hair", price: "$120", priceValue: 120 },
      { name: "Full colour, short hair + blow-dry", price: "$170", priceValue: 170 },
      { name: "Full colour, long hair", price: "$150", priceValue: 150 },
      { name: "Full colour, long hair + blow-dry", price: "$200", priceValue: 200 },
      { name: "Men's colour", price: "$90", priceValue: 90 },
      { name: "Crown foil", price: "$110", priceValue: 110 },
      { name: "Crown foil + colour", price: "$195", priceValue: 195, note: "includes toner" },
      { name: "Crown foil + colour + blow-dry", price: "$245", priceValue: 245, note: "includes toner" },
      { name: "Half-head highlights", price: "$145", priceValue: 145, note: "includes toner" },
      { name: "Half-head highlights + blow-dry", price: "$195", priceValue: 195, note: "includes toner" },
      { name: "Full-head highlights", price: "$185", priceValue: 185, note: "includes toner" },
      { name: "Full-head highlights + blow-dry", price: "$235", priceValue: 235, note: "includes toner" },
      { name: "Half-head babylights", price: "$200", priceValue: 200, note: "includes toner" },
      { name: "Half-head babylights + blow-dry", price: "$250", priceValue: 250, note: "includes toner" },
      { name: "Full-head babylights", price: "$320", priceValue: 320 },
      { name: "Full-head babylights + blow-dry", price: "$370", priceValue: 370 },
      { name: "Balayage", price: "$350", priceValue: 350, note: "includes toner" },
      { name: "Balayage + blow-dry", price: "$400", priceValue: 400, note: "includes toner" },
      { name: "Partial bleach out", price: "$150", priceValue: 150, note: "includes toner" },
      { name: "Partial bleach out + blow-dry", price: "$200", priceValue: 200, note: "includes toner" },
      { name: "Roots bleach out", price: "$150", priceValue: 150, note: "includes toner" },
      { name: "Roots bleach out + blow-dry", price: "$200", priceValue: 200, note: "includes toner" },
      { name: "Toner / gloss", price: "$85", priceValue: 85 },
      { name: "Toner (add-on)", price: "$50", priceValue: 50 },
      { name: "Colour correction", price: "Consultation" },
    ],
  },
  {
    slug: "cut",
    name: "Cut Services",
    blurb:
      "Precision cuts for every hair type, cut to your face, texture, and the way you actually wear your hair.",
    items: [
      { name: "Women's cut, short hair", price: "$60", priceValue: 60 },
      { name: "Women's cut, long or thick hair", price: "$75", priceValue: 75 },
      { name: "Men's cut", price: "$55", priceValue: 55 },
      { name: "Men's long hair cut", price: "$55", priceValue: 55 },
      { name: "Kids' cut, girl (3–11 yrs)", price: "$45", priceValue: 45 },
      { name: "Kids' cut, boy (3–11 yrs)", price: "$40", priceValue: 40 },
      { name: "Bang trim", price: "$20", priceValue: 20 },
      { name: "Hairwash", price: "$30", priceValue: 30 },
    ],
  },
  {
    slug: "style",
    name: "Style Services",
    blurb: "Blowouts and finished styling — from everyday polish to event-ready glamour.",
    items: [
      { name: "Short hair blowout", price: "$50", priceValue: 50 },
      { name: "Long hair blowout", price: "$65", priceValue: 65 },
      { name: "Blowout with extensions", price: "$75", priceValue: 75 },
      { name: "Braid", price: "$80", priceValue: 80 },
      { name: "Evening style", price: "$90", priceValue: 90 },
      { name: "Updo", price: "$110", priceValue: 110 },
    ],
  },
  {
    slug: "treatment",
    name: "Treatments",
    blurb:
      "Smoothing, repair, and deep conditioning — including keratin, hair botox, and Aveda rituals.",
    items: [
      { name: "Keratin smoothing, short hair", price: "$300", priceValue: 300 },
      { name: "Keratin smoothing, long hair", price: "$450", priceValue: 450 },
      { name: "Hair botox", price: "$250", priceValue: 250 },
      { name: "Aveda botanical treatment", price: "$45", priceValue: 45 },
      { name: "Aveda Nutriplenish treatment", price: "$40", priceValue: 40 },
      { name: "Aveda scalp treatment", price: "$40", priceValue: 40 },
      { name: "Deep conditioning mask", price: "$40", priceValue: 40 },
      { name: "Treatment (add-on)", price: "$30", priceValue: 30 },
    ],
  },
  {
    slug: "perm",
    name: "Perms & Straightening",
    blurb: "Digital and classic perms, plus permanent straightening.",
    items: [
      { name: "Digital perm, medium to long hair", price: "$280", priceValue: 280 },
      { name: "Digital perm, short to medium hair", price: "$250", priceValue: 250 },
      { name: "Perm, women's long hair", price: "$198", priceValue: 198 },
      { name: "Perm, women's medium hair", price: "$150", priceValue: 150 },
      { name: "Perm, women's short hair", price: "$168", priceValue: 168 },
      { name: "Perm, men's hair", price: "$120", priceValue: 120 },
      { name: "Down perm", price: "$50", priceValue: 50 },
      { name: "Permanent straightening, long hair", price: "$300", priceValue: 300 },
      { name: "Permanent straightening, short hair", price: "$250", priceValue: 250 },
    ],
  },
  {
    slug: "brows",
    name: "Brow Services",
    blurb: "Lamination, tinting, and threading.",
    items: [
      { name: "Brow lamination", price: "$85", priceValue: 85 },
      { name: "Brow lamination, tint & shaping combo", price: "$125", priceValue: 125 },
      { name: "Brow tinting", price: "$22", priceValue: 22 },
      { name: "Brow threading", price: "$20", priceValue: 20 },
      { name: "Full face threading", price: "$50", priceValue: 50 },
    ],
  },
  {
    slug: "extensions",
    name: "Hair Extensions",
    blurb: "Length and volume, fitted and blended. Booked after a consultation.",
    items: [
      { name: "Hair extensions", price: "From $500", priceValue: 500 },
      { name: "Extensions consultation", price: "Consultation" },
    ],
  },
];
