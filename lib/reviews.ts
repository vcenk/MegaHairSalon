// ⚠️ PLACEHOLDER CONTENT
// Quotes below are from the component spec (docs/components/reviews-marquee.md)
// and are illustrative only. Before launch, curate 16 real quotes from the
// salon's Google reviews per LAUNCH-BLOCKERS.md.

export type Review = {
  readonly quote: string;
  readonly author: string;
  readonly city: string;
};

export const MARQUEE_ROW_1: readonly Review[] = [
  { quote: "Magic hands.", author: "Sarah M.", city: "Coquitlam" },
  { quote: "Best cut I've had in years.", author: "Jessica T.", city: "Port Moody" },
  { quote: "Bülent is the real deal.", author: "Maya K.", city: "Burnaby" },
  { quote: "Found my forever salon.", author: "Anna R.", city: "Vancouver" },
  { quote: "The blonde of my dreams.", author: "Linda P.", city: "Coquitlam" },
  { quote: "Worth every minute of the drive.", author: "Rachel B.", city: "PoCo" },
  { quote: "Excellent service and results.", author: "Rain H.", city: "Coquitlam" },
  { quote: "Beautifully renovated, beautifully run.", author: "Emily F.", city: "Port Moody" },
] as const;

export const MARQUEE_ROW_2: readonly Review[] = [
  { quote: "Gazi sculpts hair like art.", author: "Sophia L.", city: "Vancouver" },
  { quote: "Emir's blowouts last for days.", author: "Hannah W.", city: "Coquitlam" },
  { quote: "Honest, skilled, unhurried.", author: "Diana K.", city: "Burnaby" },
  { quote: "Calm, clean, professional.", author: "Olivia M.", city: "PoCo" },
  { quote: "Fulya remembers everything.", author: "Tara S.", city: "Coquitlam" },
  { quote: "I recommend them to everyone.", author: "Priya N.", city: "Vancouver" },
  { quote: "Patient and thorough — rare today.", author: "Margaret D.", city: "Port Moody" },
  { quote: "Walked out feeling brand new.", author: "Aisha R.", city: "Coquitlam" },
] as const;

export const FEATURED_REVIEWS: readonly Review[] = [
  {
    quote:
      "I had been looking for someone like Bill in Vancouver for years — truly, he has magic hands.",
    author: "Sarah M.",
    city: "Coquitlam",
  },
  {
    quote:
      "Gazi understood exactly what I wanted without me having to explain. The cut moves beautifully and has lasted weeks.",
    author: "Rachel B.",
    city: "Port Coquitlam",
  },
  {
    quote:
      "The colour work is the best I've seen in the Tri-Cities. I will happily drive from Burnaby again.",
    author: "Maya K.",
    city: "Burnaby",
  },
] as const;
