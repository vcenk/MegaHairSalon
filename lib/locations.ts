export type Location = {
  readonly slug: string;
  readonly city: string;
  readonly headline: string;
  readonly intro: string;
  readonly driveTime?: string;
};

export const LOCATIONS: readonly Location[] = [
  {
    slug: "hair-salon-coquitlam",
    city: "Coquitlam",
    headline: "Hair Salon Coquitlam",
    intro:
      "Megas is located in downtown Coquitlam on Pacific Street, five minutes from Coquitlam Centre. Four decades of Turkish hair artistry, at the heart of the Tri-Cities.",
  },
  {
    slug: "hair-salon-port-moody",
    city: "Port Moody",
    headline: "Hair Salon Serving Port Moody",
    intro:
      "Ten minutes from the Port Moody inlet, Megas brings master colourists and precision cuts to the eastern Tri-Cities. A short drive, a calmer salon, a sharper result.",
    driveTime: "~10 min from Port Moody",
  },
  {
    slug: "hair-salon-port-coquitlam",
    city: "Port Coquitlam",
    headline: "Hair Salon Serving Port Coquitlam",
    intro:
      "Just a short drive from Port Coquitlam, Megas offers unhurried, editorial-quality hair work — balayage, blonde, and precision cutting by stylists with decades behind them.",
    driveTime: "~12 min from Port Coquitlam",
  },
  {
    slug: "turkish-hair-salon-vancouver",
    city: "Vancouver",
    headline: "Turkish Hair Salon Serving Vancouver",
    intro:
      "Founded in Istanbul in 1984, Megas now brings Turkish hair artistry to Greater Vancouver. The drive from Vancouver proper is worth the craft — and our clients tell us so.",
    driveTime: "~30–45 min from Vancouver",
  },
] as const;
