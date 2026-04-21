export type LocationFaq = { readonly q: string; readonly a: string };

export type Location = {
  readonly slug: string;
  readonly city: string;
  readonly headline: string;
  readonly intro: string;
  readonly driveTime?: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly eyebrow: string;
  readonly h1: string;
  readonly subhead: string;
  readonly about: string;
  readonly areasServed: string;
  readonly gettingHere: string;
  readonly topServices: readonly string[];
  readonly testimonials: readonly {
    readonly quote: string;
    readonly author: string;
    readonly city: string;
  }[];
  readonly faqs: readonly LocationFaq[];
};

export const LOCATIONS: readonly Location[] = [
  {
    slug: "hair-salon-coquitlam",
    city: "Coquitlam",
    headline: "Hair Salon Coquitlam",
    intro:
      "Megas is located in downtown Coquitlam on Pacific Street, five minutes from Coquitlam Centre. Four decades of Turkish hair artistry, at the heart of the Tri-Cities.",
    metaTitle: "Hair Salon Coquitlam | Megas — Master Colourists on Pacific St",
    metaDescription:
      "Premier hair salon in Coquitlam at 150-1169 Pacific St. Master colourists in balayage, blonde, and precision cuts since 1984. Book (778) 858-0396.",
    eyebrow: "Serving · Coquitlam",
    h1: "Megas — your Coquitlam hair salon.",
    subhead:
      "Master colourists on Pacific Street, five minutes from Coquitlam Centre.",
    about:
      "Coquitlam has changed a lot in the last decade — and so has its salon scene. Among the dozens of options, Megas brings something specific: master stylists with 20–35 years of experience each, a salon designed for unhurried care, and a focus on the work that's hardest to get right — colour, blonde, and balayage. We opened our Coquitlam location in 2025 after four decades of building the craft in Turkey.",
    areasServed:
      "We serve clients across Coquitlam — from Burquitlam and Maillardville to Westwood Plateau and the Tri-Cities core. Many clients also drive in from Port Moody, Port Coquitlam, Burnaby, and east Vancouver.",
    gettingHere:
      "We're on the ground floor of 1169 Pacific Street, between Westwood Plateau and Pinetree Way. Free underground visitor parking is available in the building. The Lincoln SkyTrain station is a 7-minute walk; Coquitlam Central is a 5-minute drive.",
    topServices: [
      "balayage-coquitlam",
      "blonde-specialist-coquitlam",
      "precision-haircut-coquitlam",
    ],
    testimonials: [
      {
        quote:
          "I had been looking for someone like Bill in Vancouver for years — truly, he has magic hands.",
        author: "Sarah M.",
        city: "Coquitlam",
      },
      {
        quote:
          "Beautifully renovated, beautifully run. Worth the short drive from Burquitlam.",
        author: "Emily F.",
        city: "Coquitlam",
      },
    ],
    faqs: [
      {
        q: "What's the best hair salon in Coquitlam?",
        a: "Coquitlam has many strong salons — what makes Megas different is the combined experience of our team (over 100 years between Bülent, Gazi, and Emir), our specialisation in colour and blonde, and our heritage from a Turkish hair house founded in 1984.",
      },
      {
        q: "How do I book at Megas in Coquitlam?",
        a: "You can book online through our booking page, or call us at (778) 858-0396 during business hours (Mon–Sat, 10am–6pm). New clients are always welcome.",
      },
      {
        q: "Where exactly is Megas Hair Salon located in Coquitlam?",
        a: "We're at 150-1169 Pacific Street, Coquitlam, BC V3B 0J1 — on the ground floor with free underground visitor parking. Five minutes from Coquitlam Centre, seven-minute walk from Lincoln SkyTrain.",
      },
      {
        q: "What services do you offer in Coquitlam?",
        a: "Balayage, blonde transformations, precision cuts, all-over colour, root touch-ups, keratin smoothing, blow dry & styling, and restorative treatments. Bridal and special occasion styling available by appointment.",
      },
      {
        q: "Do you take walk-ins?",
        a: "We accept walk-ins when our stylists have availability, but we strongly recommend booking ahead — especially for weekends and colour services. Saturday slots typically book a week or more in advance.",
      },
    ],
  },
  {
    slug: "hair-salon-port-moody",
    city: "Port Moody",
    headline: "Hair Salon Serving Port Moody",
    intro:
      "Ten minutes from the Port Moody inlet, Megas brings master colourists and precision cuts to the eastern Tri-Cities. A short drive, a calmer salon, a sharper result.",
    driveTime: "~7–10 min from Port Moody",
    metaTitle: "Hair Salon Port Moody | Megas — 7 Minutes Away in Coquitlam",
    metaDescription:
      "Looking for a hair salon in Port Moody? Megas Hair Salon in Coquitlam is just 7 minutes away — master colourists, balayage, blonde. Book (778) 858-0396.",
    eyebrow: "Serving · Port Moody",
    h1: "A Port Moody hair salon, just minutes away.",
    subhead:
      "Master colourists in Coquitlam — a quick drive from Port Moody, with the kind of skill worth driving for.",
    about:
      "Port Moody has its own salon scene — but for clients who want master colourists with serious experience in blonde, balayage, and precision colour, the trip to Coquitlam is short and the difference is significant. Megas is a 7-minute drive from downtown Port Moody, with free parking when you arrive.",
    areasServed:
      "We serve Port Moody clients from Inlet Centre, Newport Village, Heritage Mountain, College Park, and the broader Suter Brook area. Most clients drive directly to our Pacific Street location in 7–10 minutes.",
    gettingHere:
      "From Port Moody, take Barnet Highway / St Johns Street west — Pacific Street is on your left after about 4 km. Look for the 1169 Pacific Street building. Free underground visitor parking.",
    topServices: [
      "balayage-coquitlam",
      "blonde-specialist-coquitlam",
      "precision-haircut-coquitlam",
    ],
    testimonials: [
      {
        quote: "Worth every minute of the drive.",
        author: "Rachel B.",
        city: "Port Moody",
      },
      {
        quote: "Patient and thorough — rare today.",
        author: "Margaret D.",
        city: "Port Moody",
      },
    ],
    faqs: [
      {
        q: "Is Megas Hair Salon in Port Moody?",
        a: "Megas is located in Coquitlam at 150-1169 Pacific Street — a 7-minute drive from downtown Port Moody. Many of our regular clients come from Newport Village, Suter Brook, and Heritage Mountain.",
      },
      {
        q: "Why drive to Coquitlam for hair when Port Moody has salons?",
        a: "Port Moody has good salons — but our specialisation in blonde, balayage, and corrective colour, combined with master stylists who have 20–35 years of experience each, is what brings clients across the Tri-Cities.",
      },
      {
        q: "How long does it take to get to Megas from Port Moody?",
        a: "Typically 7–12 minutes by car depending on traffic, mostly along Barnet Highway / St Johns Street. We're on the ground floor at 1169 Pacific Street with free underground visitor parking.",
      },
      {
        q: "Do you offer parking in Coquitlam?",
        a: "Yes — free underground visitor parking is available in the 1169 Pacific Street building. No need to feed meters or hunt for street parking.",
      },
      {
        q: "Can I book a Port Moody appointment online?",
        a: "Yes. Our booking page shows real-time availability with all our master stylists. Or call (778) 858-0396 during business hours.",
      },
    ],
  },
  {
    slug: "hair-salon-port-coquitlam",
    city: "Port Coquitlam",
    headline: "Hair Salon Serving Port Coquitlam",
    intro:
      "Just a short drive from Port Coquitlam, Megas offers unhurried, editorial-quality hair work — balayage, blonde, and precision cutting by stylists with decades behind them.",
    driveTime: "~10–15 min from Port Coquitlam",
    metaTitle: "Hair Salon Port Coquitlam | Megas — 10 Minutes in Coquitlam",
    metaDescription:
      "Hair salon serving Port Coquitlam — Megas in Coquitlam is just 10 minutes away. Master colourists in balayage, blonde, precision cuts. (778) 858-0396.",
    eyebrow: "Serving · Port Coquitlam",
    h1: "A short drive from Port Coquitlam, well worth it.",
    subhead:
      "Megas is 10 minutes from Port Coquitlam — and the work speaks for itself.",
    about:
      "Port Coquitlam clients have always crossed into Coquitlam for serious salon work, and Megas continues that tradition. We're 10 minutes from downtown PoCo, with master stylists who specialise in the services that demand experience: blonde, balayage, colour correction, and precision cuts that grow out gracefully.",
    areasServed:
      "We welcome Port Coquitlam clients from Citadel Heights, Mary Hill, Birchland Manor, and downtown PoCo. The Pacific Street location is easy to reach via Lougheed Highway or Barnet Highway depending on where you're coming from.",
    gettingHere:
      "From Port Coquitlam, take Lougheed Highway west or Pitt River Road south to Barnet — Pacific Street is just past Coquitlam Centre. About 10–15 minutes depending on traffic. Free underground parking on arrival.",
    topServices: [
      "balayage-coquitlam",
      "blonde-specialist-coquitlam",
      "precision-haircut-coquitlam",
    ],
    testimonials: [
      {
        quote: "Emir's blowouts last for days.",
        author: "Hannah W.",
        city: "Port Coquitlam",
      },
      {
        quote: "Honest, skilled, unhurried.",
        author: "Diana K.",
        city: "Port Coquitlam",
      },
    ],
    faqs: [
      {
        q: "Is there a Megas Hair Salon in Port Coquitlam?",
        a: "Megas is in Coquitlam at 150-1169 Pacific Street — about 10 minutes from downtown Port Coquitlam. Many of our regular clients come from PoCo specifically for our colour and blonde work.",
      },
      {
        q: "How long is the drive from Port Coquitlam to Megas?",
        a: "10–15 minutes depending on time of day, mostly via Lougheed Highway. We're on the ground floor at 1169 Pacific Street with free underground visitor parking.",
      },
      {
        q: "What services do clients from Port Coquitlam come for?",
        a: "Most travel for colour services — balayage, blonde transformations, colour correction, and grey coverage with master colourists. Precision cuts and keratin smoothing are also popular reasons to make the drive.",
      },
      {
        q: "Are there closer salons in Port Coquitlam?",
        a: "Yes, PoCo has several salons. What brings clients across to Megas is the depth of experience — Bülent, Gazi, and Emir each have decades of master-level work, with a specific focus on advanced colour techniques.",
      },
      {
        q: "Can I book online?",
        a: "Yes. Our online booking shows real-time availability with each stylist. Or call (778) 858-0396 during business hours, Mon–Sat.",
      },
    ],
  },
  {
    slug: "turkish-hair-salon-vancouver",
    city: "Vancouver",
    headline: "Turkish Hair Salon Serving Vancouver",
    intro:
      "Founded in Istanbul in 1984, Megas now brings Turkish hair artistry to Greater Vancouver. The drive from Vancouver proper is worth the craft — and our clients tell us so.",
    driveTime: "~25–45 min from Vancouver",
    metaTitle: "Turkish Hair Salon Vancouver Area | Megas — Coquitlam, BC",
    metaDescription:
      "A Turkish hair salon in the Vancouver area, located in Coquitlam. Master stylists from Istanbul since 1984. Kuaför, balayage, blonde. (778) 858-0396.",
    eyebrow: "Serving · Vancouver Area",
    h1: "A Turkish hair house, in the Vancouver area.",
    subhead:
      "Forty-one years of Istanbul craft, brought to Coquitlam in 2025. Hoş geldiniz.",
    about:
      "There's a particular tradition to Turkish hairdressing — the patience of the consultation, the layered approach to colour, the precision of the cut. Our salon was founded in Istanbul in 1984 and grew across multiple Turkish cities before opening in Coquitlam in 2025. For Turkish-speaking clients across Greater Vancouver, and for anyone drawn to that tradition, we're the closest thing to home in the Lower Mainland.",
    areasServed:
      "We welcome the Turkish community across Greater Vancouver — from Coquitlam and Burnaby to Vancouver, Richmond, and the North Shore. Our team speaks Turkish, and we understand the specific colour, cut, and styling preferences that come from that tradition.",
    gettingHere:
      "We're located in Coquitlam at 150-1169 Pacific Street — about 25 minutes from downtown Vancouver via Highway 1, or accessible via the Millennium Line SkyTrain to Lincoln Station (7-minute walk from there). Free underground visitor parking.",
    topServices: [
      "balayage-coquitlam",
      "blonde-specialist-coquitlam",
      "precision-haircut-coquitlam",
    ],
    testimonials: [
      {
        quote: "Found my forever salon.",
        author: "Anna R.",
        city: "Vancouver",
      },
      {
        quote: "Gazi sculpts hair like art.",
        author: "Sophia L.",
        city: "Vancouver",
      },
    ],
    faqs: [
      {
        q: "Is there a Turkish hair salon in Vancouver?",
        a: "Megas is a Turkish-founded hair salon in the Greater Vancouver area, located in Coquitlam. Our salon was founded in Istanbul in 1984 and we opened our Vancouver-area location in 2025. Our team speaks Turkish and English.",
      },
      {
        q: "Do you speak Turkish at the salon?",
        a: "Evet. Bülent, Gazi, Emir ve Fulya hepimiz Türkçe konuşuyoruz. Türkçe randevu almak için (778) 858-0396 numarasını arayabilirsiniz veya online rezervasyon yapabilirsiniz.",
      },
      {
        q: "How far is Coquitlam from Vancouver?",
        a: "About 25 minutes by car from downtown Vancouver via Highway 1, or accessible by SkyTrain — the Millennium Line goes to Lincoln Station, a 7-minute walk from the salon.",
      },
      {
        q: "What kind of training do your stylists have?",
        a: "All three of our master stylists trained and worked extensively in Turkey before joining the Vancouver location. They have advanced training with international brands including L'Oréal, Wella, and Kérastase, and 20–35 years of experience each.",
      },
      {
        q: "Do you do special occasion or wedding hair?",
        a: "Yes — including styles popular for Turkish weddings and engagements. We offer bridal trials and on-the-day styling for the bride and bridal party.",
      },
    ],
  },
] as const;

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
