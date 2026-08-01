export type FaqItem = { readonly q: string; readonly a: string };
export type ProcessStep = { readonly step: string; readonly body: string };
export type PricingRow = { readonly label: string; readonly from: string };
export type GalleryImage = { readonly src: string; readonly alt: string };

export type Service = {
  readonly slug: string;
  readonly name: string;
  readonly teaser: string;
  readonly priceFrom: number;
  readonly priceMax?: number;
  readonly image: string;
  readonly imageAlt: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly eyebrow: string;
  readonly h1: string;
  readonly subhead: string;
  readonly approach: string;
  readonly process?: readonly ProcessStep[];
  readonly whoItsFor?: string;
  readonly highlights?: readonly string[];
  readonly pricing: readonly PricingRow[];
  readonly pricingNote?: string;
  readonly stylistSlugs: readonly string[];
  readonly gallery: readonly GalleryImage[];
  readonly faqs: readonly FaqItem[];
  readonly related: readonly string[];
  readonly finalCta: string;
};

export const SERVICES: readonly Service[] = [
  {
    slug: "balayage-coquitlam",
    name: "Balayage",
    teaser: "Hand-painted dimension",
    priceFrom: 350,
    priceMax: 450,
    image: "/images/photos/result-balayage-1.jpg",
    imageAlt:
      "Hand-painted balayage result with soft dimension, by master colourists at Megas Hair Salon, Coquitlam",
    metaTitle: "Balayage Coquitlam | Master Colourists | Megas Hair Salon",
    metaDescription:
      "Hand-painted balayage by master colourists in Coquitlam. Soft, sun-kissed dimension that grows out beautifully. Book at Megas (778) 858-0396.",
    eyebrow: "Service · Colour",
    h1: "Balayage in Coquitlam, painted by hand.",
    subhead:
      "Soft, sun-kissed dimension that grows out as beautifully as the day you sat in our chair.",
    approach:
      "Balayage isn't a formula — it's a hand. The depth of placement, the angle of the brush, the patience to let each strand develop differently. Our master colourists have spent decades reading hair: how it grows, how it reflects light, how it ages. That's what makes the result feel custom, not copied.",
    process: [
      {
        step: "Consultation",
        body: "We start with a real conversation. Your hair history, lifestyle, the look you're after, and what's realistic for your texture and starting colour.",
      },
      {
        step: "Custom placement",
        body: "Your colourist hand-paints each section, working with the natural fall of your hair to create dimension that reads as soft and lived-in.",
      },
      {
        step: "Process & tone",
        body: "We let the lift develop with care, then tone to your exact desired finish — warm, cool, or neutral.",
      },
      {
        step: "Cut, treatment & style",
        body: "Your appointment includes a finishing cut and a Kérastase treatment to seal the cuticle. You leave with hair that's polished, healthy, and ready to live in.",
      },
    ],
    whoItsFor:
      "Anyone wanting low-maintenance dimension, growing out previous colour, transitioning to a lighter shade, or adding warmth and movement to brunette. If you hate the look of harsh regrowth lines, balayage is built for you.",
    pricing: [
      { label: "Balayage (includes toner)", from: "$350" },
      { label: "Balayage + blow-dry", from: "$400" },
      { label: "Half-head babylights", from: "$200" },
      { label: "Full-head babylights", from: "$320" },
      { label: "Colour correction", from: "Consultation" },
    ],
    pricingNote:
      "Final pricing depends on hair length, density, and the work involved. We confirm pricing at consultation — no surprises at checkout.",
    stylistSlugs: ["bulent-bill", "gazi", "emir"],
    gallery: [
      {
        src: "/images/photos/result-balayage-1.jpg",
        alt: "Long blonde balayage, hand-painted dimension — Megas Hair Salon, Coquitlam",
      },
      {
        src: "/images/photos/result-balayage-2.jpg",
        alt: "Close-up of balayage colour placement by Bülent at Megas Coquitlam",
      },
      {
        src: "/images/photos/result-blonde-1.jpg",
        alt: "Lived-in blonde balayage with soft regrowth, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-hair-color-1.jpg",
        alt: "Brunette with caramel balayage, toned for warmth, Megas Coquitlam",
      },
    ],
    faqs: [
      {
        q: "How long does balayage take at Megas?",
        a: "Most balayage appointments take 3–4 hours, including consultation, processing, toning, cut, and style. First-time appointments or major colour shifts may take longer — we'll confirm at booking.",
      },
      {
        q: "How much does balayage cost in Coquitlam?",
        a: "At Megas, balayage starts at $350 and includes a toner. A balayage with a blow-dry is from $400. Babylights (a softer, finer technique) start at $200 for a half-head. Final pricing depends on length, density, and the level of work involved, and is confirmed at consultation.",
      },
      {
        q: "How often should I get my balayage refreshed?",
        a: "Most clients return every 10–14 weeks. Because balayage grows out softly, it's far lower maintenance than traditional foils. Between appointments, a toner or gloss refresh (from $85) keeps colour looking fresh.",
      },
      {
        q: "Will balayage damage my hair?",
        a: "Done correctly, no. We use professional lighteners with bond protectors and finish every appointment with a Kérastase treatment. Hair health is the foundation of beautiful colour — we won't compromise it.",
      },
      {
        q: "Can I get balayage if my hair is already coloured?",
        a: "Often yes — but it depends on what's in the hair. Box dye and very dark previous colour can require a more involved process. Book a complimentary consultation and we'll give you an honest plan.",
      },
      {
        q: "Do you offer ombre as well?",
        a: "Yes. Ombre is a more dramatic gradient — darker roots, much lighter ends. We'll talk through balayage vs ombre at consultation and recommend what suits your hair and lifestyle.",
      },
    ],
    related: [
      "blonde-specialist-coquitlam",
      "root-touch-up-coquitlam",
      "restorative-treatment-coquitlam",
    ],
    finalCta: "Ready for balayage that finally looks like you?",
  },
  {
    slug: "blonde-specialist-coquitlam",
    name: "Blonde Specialist",
    teaser: "Transformative light, fearlessly toned",
    priceFrom: 145,
    priceMax: 400,
    image: "/images/photos/result-blonde-1.jpg",
    imageAlt:
      "Platinum blonde transformation with healthy lift and cool tone, by Bülent at Megas Hair Salon, Coquitlam",
    metaTitle:
      "Blonde Specialist Coquitlam | Master Colourists | Megas Hair Salon",
    metaDescription:
      "The Tri-Cities' trusted blonde specialists. Brilliant tones, healthy lift, no brass. 35+ years of expertise. Book at Megas Coquitlam (778) 858-0396.",
    eyebrow: "Service · Colour",
    h1: "Blonde, properly done.",
    subhead:
      "Brilliant tones, healthy lift, and the kind of finish that doesn't dull, brass, or break.",
    approach:
      "Blonde is the most demanding colour in our craft. It requires reading hair underneath what's been done before, anticipating how each strand will lift, and knowing when to stop. Bülent — known to clients as Bill — has built a reputation across two continents for getting blonde right: clean tones, intact hair, and a finish that holds for months.",
    process: [
      {
        step: "Honest consultation",
        body: "We assess your starting hair: condition, history, undertone, and porosity. We tell you exactly what's possible in one sitting and what may take more. No promises we can't keep.",
      },
      {
        step: "Custom lift",
        body: "Foils, balayage, root shadow, or full bleach — we choose the technique that gives you the lift you want with the least stress on the hair.",
      },
      {
        step: "Toning is everything",
        body: "The difference between a $400 blonde and a $40 blonde is in the tone. We mix your toner specifically — never off the shelf — for the exact undertone you want: cool, neutral, warm, or icy.",
      },
      {
        step: "Treatment & finish",
        body: "Every blonde appointment includes a bond-rebuilding treatment and a finishing cut and style.",
      },
    ],
    highlights: [
      "Bright blondes — full-coverage, high-impact lift",
      "Cool & icy blondes — toned to suppress all warmth",
      "Neutral & beige blondes — wearable, modern, low-fuss",
      "Warm honey & caramel blondes — for warmer skin tones",
      "Money-piece & face-framing brightness",
      "Lived-in blondes with grown-out roots",
    ],
    pricing: [
      { label: "Half-head highlights (includes toner)", from: "$145" },
      { label: "Full-head highlights (includes toner)", from: "$185" },
      { label: "Half-head babylights (includes toner)", from: "$200" },
      { label: "Full-head babylights (includes toner)", from: "$320" },
      { label: "Bleach & tone (roots or partial)", from: "$150" },
      { label: "Toner / gloss refresh", from: "$85" },
      { label: "Colour correction", from: "Consultation" },
    ],
    pricingNote:
      "Final pricing depends on hair length, density, and the work involved. We confirm pricing at consultation — no surprises at checkout.",
    stylistSlugs: ["bulent-bill", "gazi", "emir"],
    gallery: [
      {
        src: "/images/photos/result-blonde-1.jpg",
        alt: "Bright platinum blonde transformation by Bülent, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-blonde-2.jpg",
        alt: "Toned blonde with root shadow, lived-in finish — Megas Coquitlam",
      },
      {
        src: "/images/photos/result-balayage-1.jpg",
        alt: "Blonde balayage with hand-painted dimension, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-balayage-2.jpg",
        alt: "Cool-toned blonde foils, no brass, Megas Coquitlam",
      },
    ],
    faqs: [
      {
        q: "How long does going blonde take at Megas?",
        a: "A full blonde appointment usually takes 3–5 hours. If you're going significantly lighter or correcting previous colour, the appointment may need to be split across two visits to protect your hair.",
      },
      {
        q: "Can I go blonde if my hair has been box-coloured?",
        a: "Often yes, but the process is more involved and may take multiple sessions. We'll tell you honestly what's achievable at the consultation. Never trust a salon that promises platinum from box dye in one sitting.",
      },
      {
        q: "Will going blonde damage my hair?",
        a: "Lightening always involves some structural change. Our job is to minimize it. We use bond protectors during lightening, finish every appointment with a Kérastase treatment, and recommend home care that maintains hair health between visits.",
      },
      {
        q: "How often should I touch up my blonde?",
        a: "Bright blondes typically need a root touch-up every 4–6 weeks. Lived-in blondes and balayage extend that to 8–14 weeks. Toner refreshes between appointments keep colour from fading or pulling brassy.",
      },
      {
        q: "What's the price range for going blonde at Megas?",
        a: "Most blonde services fall between $145 and $370, depending on how much of the head is lightened — half-head or full-head highlights, or babylights — and always including a toner. Colour correction work, for previous bad colour or deep box dye, is quoted at a consultation. We confirm pricing before we start.",
      },
    ],
    related: [
      "balayage-coquitlam",
      "root-touch-up-coquitlam",
      "restorative-treatment-coquitlam",
    ],
    finalCta: "Ready for blonde you don't have to fix?",
  },
  {
    slug: "precision-haircut-coquitlam",
    name: "Precision Cut",
    teaser: "Sculpted for your bone structure",
    priceFrom: 60,
    image: "/images/photos/result-precision-cut-1.jpg",
    imageAlt:
      "Precision haircut with clean lines and soft movement, by master stylists at Megas Hair Salon, Coquitlam",
    metaTitle: "Precision Haircuts Coquitlam | Master Stylists | Megas",
    metaDescription:
      "Precision haircuts by master stylists in Coquitlam. Cut to your face, hair texture, and lifestyle. Book at Megas (778) 858-0396. Women, men, all hair types.",
    eyebrow: "Service · Cuts",
    h1: "A precision haircut, sculpted to you.",
    subhead:
      "We cut for face, texture, and the way you actually wear your hair — not for a trend.",
    approach:
      "A great cut isn't about the latest scissor technique — it's about understanding the hair in front of us. How it grows, how it falls, what it does on the third day after a wash. Our master stylists have spent decades developing the eye for that. The result is a cut that looks intentional from every angle, and grows out gracefully instead of awkwardly.",
    pricing: [
      { label: "Women's cut, short hair", from: "$60" },
      { label: "Women's cut, long or thick hair", from: "$75" },
      { label: "Men's cut", from: "$55" },
      { label: "Kids' cut (3–11 yrs)", from: "$40" },
      { label: "Bang trim", from: "$20" },
    ],
    pricingNote:
      "Final pricing depends on hair length, density, and the work involved. We always confirm at consultation — no surprises at checkout.",
    stylistSlugs: ["bulent-bill", "gazi", "emir"],
    gallery: [
      {
        src: "/images/photos/result-precision-cut-1.jpg",
        alt: "Women's precision cut with soft layers by Gazi, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-precision-cut-2.jpg",
        alt: "Men's precision haircut, sharp lines and texture, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-blow-dry-1.jpg",
        alt: "Fresh cut finished with a polished blow dry, Megas Coquitlam",
      },
    ],
    faqs: [
      {
        q: "How much does a haircut cost at Megas Coquitlam?",
        a: "Women's cuts start at $60 for short hair and $75 for long or thick hair, men's cuts at $55, and kids' cuts (3–11) from $40. A bang trim is $20. Final pricing depends on length and complexity — confirmed before we start.",
      },
      {
        q: "Do I need to book in advance?",
        a: "We strongly recommend booking ahead, especially for weekends. Walk-ins are welcome when our stylists have availability, but Saturday slots typically book a week or more in advance.",
      },
      {
        q: "Can you cut curly or textured hair?",
        a: "Yes. Our master stylists work with every hair type — straight, wavy, curly, coily, fine, and coarse. We cut dry or wet depending on what your texture needs.",
      },
      {
        q: "What's included in a haircut appointment?",
        a: "Consultation, shampoo, conditioning rinse, the cut itself, and a finishing blow dry and style. We finish with product recommendations to maintain the cut at home.",
      },
      {
        q: "How often should I get a haircut?",
        a: "Most clients return every 6–10 weeks for cuts. Shorter cuts and styles with precise lines need more frequent visits; long layered cuts can stretch to 12 weeks. We'll suggest a schedule based on your cut.",
      },
    ],
    related: [
      "balayage-coquitlam",
      "blow-dry-coquitlam",
      "hair-color-coquitlam",
    ],
    finalCta: "Ready for a cut that looks right from every angle?",
  },
  {
    slug: "hair-color-coquitlam",
    name: "Hair Colour",
    teaser: "Rich, custom-composed colour",
    priceFrom: 120,
    image: "/images/photos/result-hair-color-1.jpg",
    imageAlt:
      "Rich brunette hair colour with custom tone, by master colourists at Megas Hair Salon, Coquitlam",
    metaTitle: "Hair Colour Coquitlam | Master Colourists | Megas Hair Salon",
    metaDescription:
      "Custom hair colour in Coquitlam by master colourists. All-over colour, glossing, colour correction. 35+ years of expertise. Book at Megas (778) 858-0396.",
    eyebrow: "Service · Colour",
    h1: "Custom hair colour, mixed for you.",
    subhead:
      "From a single-process refresh to full colour correction — done by colourists who treat tone like a craft.",
    approach:
      "Off-the-shelf colour gives off-the-shelf results. We mix every formula at the bowl, for the exact tone, depth, and undertone your hair needs. Our colourists have worked with L'Oréal, Wella, and Kérastase for decades — and that fluency shows in the finish: rich, true, and built to hold.",
    pricing: [
      { label: "Full colour, short hair", from: "$120" },
      { label: "Full colour, long hair", from: "$150" },
      { label: "Full colour + blow-dry", from: "$170" },
      { label: "Men's colour", from: "$90" },
      { label: "Toner / gloss", from: "$85" },
      { label: "Colour correction", from: "Consultation" },
    ],
    pricingNote:
      "Final pricing depends on hair length, density, and the work involved. We always confirm at consultation — no surprises at checkout.",
    stylistSlugs: ["bulent-bill", "gazi", "emir"],
    gallery: [
      {
        src: "/images/photos/result-hair-color-1.jpg",
        alt: "Rich brunette single-process colour, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-hair-color-2.jpg",
        alt: "Copper red colour with custom warmth, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-root-touch-up-1.jpg",
        alt: "Seamless grey-coverage root colour, Megas Coquitlam",
      },
    ],
    faqs: [
      {
        q: "How much does hair colour cost in Coquitlam?",
        a: "Full colour starts at $120 for short hair and $150 for long hair; add a blow-dry from $170. A toner or gloss is from $85, and men's colour is from $90. Colour correction is quoted at a consultation. We always confirm pricing before we start.",
      },
      {
        q: "How long does a colour appointment take?",
        a: "A single-process colour with style takes about 2 hours. Colour correction can take 4 hours or more, sometimes split across two appointments to protect hair health.",
      },
      {
        q: "How do I prepare for a colour appointment?",
        a: "Come with hair washed within the last 24–48 hours (not the same day) and bring reference photos if you have them. If you've used box dye recently, mention it at booking.",
      },
      {
        q: "Can you cover grey hair?",
        a: "Yes. Grey coverage is handled within our full-colour service, from $120, and is one of our most-requested services. We use formulas designed for full opacity on resistant grey, with tone customised to flatter your skin and lifestyle.",
      },
      {
        q: "What's colour correction and do I need it?",
        a: "Colour correction is the process of fixing previous colour gone wrong — banding, uneven tone, brassiness, or unwanted darkness. Book a complimentary consultation and we'll give you an honest plan.",
      },
    ],
    related: [
      "balayage-coquitlam",
      "blonde-specialist-coquitlam",
      "root-touch-up-coquitlam",
    ],
    finalCta: "Colour that looks composed, never applied.",
  },
  {
    slug: "keratin-treatment-coquitlam",
    name: "Keratin Smoothing",
    teaser: "Frizz-free for months",
    priceFrom: 300,
    priceMax: 450,
    image: "/images/photos/result-keratin-1.jpg",
    imageAlt:
      "Keratin-smoothed hair with glossy finish and reduced frizz, Megas Hair Salon, Coquitlam",
    metaTitle:
      "Keratin Treatment Coquitlam | Smoothing & Frizz Control | Megas",
    metaDescription:
      "Keratin smoothing treatments in Coquitlam. Reduce frizz, cut blow-dry time, restore shine. Healthy formulas, lasting results. Book Megas (778) 858-0396.",
    eyebrow: "Service · Treatment",
    h1: "Keratin smoothing that lasts.",
    subhead:
      "Less frizz, less time, more shine — with formulas that respect your hair.",
    approach:
      "A keratin treatment can transform daily styling — but only if it's done well, with the right formula for your hair type. We use professional-grade keratin systems with no compromise on hair health, and we customise the application based on your texture, porosity, and the result you want. Some clients want pin-straight; most want manageable. We do both.",
    pricing: [
      { label: "Keratin smoothing, short hair", from: "$300" },
      { label: "Keratin smoothing, long hair", from: "$450" },
      { label: "Hair Botox treatment", from: "$250" },
      { label: "Treatment add-on", from: "$30" },
    ],
    pricingNote:
      "Final pricing depends on hair length, density, and the work involved. We always confirm at consultation — no surprises at checkout.",
    stylistSlugs: ["bulent-bill", "gazi", "emir"],
    gallery: [
      {
        src: "/images/photos/result-keratin-1.jpg",
        alt: "Keratin smoothing result, polished finish — Megas Coquitlam",
      },
      {
        src: "/images/photos/result-blow-dry-1.jpg",
        alt: "Post-keratin blowout with extended hold, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-restorative-1.jpg",
        alt: "Healthy-hair finish after keratin treatment, Megas Coquitlam",
      },
    ],
    faqs: [
      {
        q: "How long does a keratin treatment last?",
        a: "Most keratin treatments last 3–5 months depending on formula, hair type, and aftercare. Premium formulas can last up to 6 months. We'll recommend the right system at consultation.",
      },
      {
        q: "How long does the appointment take?",
        a: "Plan for 2.5–4 hours depending on hair length and density. The treatment itself doesn't require waiting hours like older formulas — modern systems are much faster.",
      },
      {
        q: "Will keratin make my hair pin-straight?",
        a: "Only if you want it to. Most clients prefer a treatment that reduces frizz and adds shine while maintaining their natural wave or curl pattern. We customise based on what you want.",
      },
      {
        q: "Is keratin treatment safe?",
        a: "We only use formulas with safe formaldehyde levels (or formaldehyde-free options). All treatments are performed in our well-ventilated studio. We don't compromise on safety.",
      },
      {
        q: "How should I care for my hair after keratin?",
        a: "Use a sulfate-free, sodium-chloride-free shampoo and conditioner. Wait 72 hours before washing. Avoid tight ponytails and hair clips for the first 3 days. We'll send you home with detailed care instructions.",
      },
    ],
    related: [
      "restorative-treatment-coquitlam",
      "blow-dry-coquitlam",
      "precision-haircut-coquitlam",
    ],
    finalCta: "Mornings, simpler.",
  },
  {
    slug: "blow-dry-coquitlam",
    name: "Blow Dry",
    teaser: "Polished, lasting styling",
    priceFrom: 50,
    image: "/images/photos/result-blow-dry-1.jpg",
    imageAlt:
      "Polished blow-dry styling with lasting hold, by Emir at Megas Hair Salon, Coquitlam",
    metaTitle:
      "Blow Dry & Styling Coquitlam | Special Occasion Hair | Megas",
    metaDescription:
      "Professional blow dry and styling in Coquitlam. Everyday blowouts, special occasions, weddings. Book Megas Hair Salon (778) 858-0396.",
    eyebrow: "Service · Styling",
    h1: "A blowout that holds.",
    subhead:
      "From everyday polish to event-ready glamour — styled by hands that have done this for decades.",
    approach:
      "There's a difference between a quick dry and a real blowout. Tension at the root, the right brush for your texture, the patience to direct each section — that's what gives hair the shape and bounce that lasts past lunchtime. Emir, in particular, is celebrated for this work: clients say his blowouts hold longer than anyone else's they've tried.",
    pricing: [
      { label: "Short hair blowout", from: "$50" },
      { label: "Long hair blowout", from: "$65" },
      { label: "Blowout with extensions", from: "$75" },
      { label: "Braid", from: "$80" },
      { label: "Evening style", from: "$90" },
      { label: "Updo", from: "$110" },
    ],
    pricingNote:
      "Final pricing depends on hair length, density, and the work involved. We always confirm at consultation — no surprises at checkout.",
    stylistSlugs: ["emir", "gazi", "bulent-bill"],
    gallery: [
      {
        src: "/images/photos/result-blow-dry-1.jpg",
        alt: "Finished blowout with lasting shape by Emir, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-precision-cut-1.jpg",
        alt: "Blow-dry finish on a layered cut, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-keratin-1.jpg",
        alt: "Smooth, glossy blowout on keratin-treated hair, Megas Coquitlam",
      },
    ],
    faqs: [
      {
        q: "How long does a blow dry take at Megas?",
        a: "A standard blow dry takes 30–45 minutes. Special occasion styling takes 60–90 minutes depending on complexity. Bridal styling is booked as a longer appointment.",
      },
      {
        q: "Should I come with clean or dirty hair?",
        a: "Either works — our blow dry service starts with a wash. If you'd like to skip the wash for a quick refresh, let us know at booking and we'll adjust the time and price.",
      },
      {
        q: "Can you do my hair for my wedding?",
        a: "Yes. We offer bridal trials and on-the-day styling. Book the trial 4–6 weeks before your wedding so we have time to perfect the look. We can also accommodate bridal parties.",
      },
      {
        q: "How long does a blowout last?",
        a: "Most blowouts hold for 3–4 days with proper care. Sleep on a silk pillowcase, avoid touching your hair, and use dry shampoo at the roots to extend it. Emir is known for blowouts that hold up to 5 days.",
      },
      {
        q: "Do you offer mobile or in-home styling?",
        a: "Currently we serve clients in-salon only. We can accommodate early morning bridal appointments by request — please call to arrange.",
      },
    ],
    related: [
      "precision-haircut-coquitlam",
      "keratin-treatment-coquitlam",
      "hair-color-coquitlam",
    ],
    finalCta: "Styled to last — through dinner, through dancing, through Monday.",
  },
  {
    slug: "root-touch-up-coquitlam",
    name: "Root Touch Up",
    teaser: "Seamless colour refresh",
    priceFrom: 95,
    image: "/images/photos/result-root-touch-up-1.jpg",
    imageAlt:
      "Seamlessly blended root touch-up with custom-mixed colour, Megas Hair Salon, Coquitlam",
    metaTitle:
      "Root Touch Up Coquitlam | Grey Coverage & Regrowth | Megas",
    metaDescription:
      "Root touch-ups and grey coverage in Coquitlam by master colourists. Quick, seamless, exactly your shade. Book Megas Hair Salon (778) 858-0396.",
    eyebrow: "Service · Colour",
    h1: "Roots, refreshed.",
    subhead:
      "Quick appointments, seamless blending — and colour that matches the rest of your hair exactly.",
    approach:
      "A root touch-up is one of the most-requested services in any salon — and one of the easiest to get wrong. Lines of demarcation, mismatched tone, over-processing the hair you've grown out. We do them properly: a custom-mixed formula that matches your existing colour exactly, applied with care to protect everything below the regrowth.",
    pricing: [
      { label: "Root retouch", from: "$95" },
      { label: "Root retouch + blow-dry", from: "$145" },
      { label: "Base break", from: "$85" },
      { label: "Toner add-on", from: "$50" },
    ],
    pricingNote:
      "Final pricing depends on hair length, density, and the work involved. We always confirm at consultation — no surprises at checkout.",
    stylistSlugs: ["bulent-bill", "gazi", "emir"],
    gallery: [
      {
        src: "/images/photos/result-root-touch-up-1.jpg",
        alt: "Seamless regrowth blend, no line of demarcation, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-hair-color-1.jpg",
        alt: "Brunette root refresh with tone-matched colour, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-blonde-2.jpg",
        alt: "Blonde root touch-up with tone refresh, Megas Coquitlam",
      },
    ],
    faqs: [
      {
        q: "How often should I get a root touch-up?",
        a: "Most clients return every 4–6 weeks. If you have visible grey or significant contrast between your colour and natural shade, you may prefer 4-week intervals. Lower-contrast colours can stretch to 6–8 weeks.",
      },
      {
        q: "How much does a root touch-up cost in Coquitlam?",
        a: "A root retouch at Megas starts at $95. With a blow-dry it's from $145. You can add a toner to refresh your overall tone for $50.",
      },
      {
        q: "How long does a root touch-up take?",
        a: "About 90 minutes from start to finish — including consultation, application, processing, rinse, and a finishing blow dry.",
      },
      {
        q: "Can you match my existing colour?",
        a: "Yes. Our colourists mix every root touch-up to match your existing shade exactly. If you've been to another salon, bring the formula card if you have it — otherwise we'll match by eye, which is what experience is for.",
      },
      {
        q: "Will the touch-up cover stubborn grey?",
        a: "Our grey coverage formulas are designed for full opacity even on resistant white hair. If you've struggled with grey not 'taking' at other salons, mention it at booking — we'll use a higher-pigment formula and longer processing time.",
      },
    ],
    related: [
      "hair-color-coquitlam",
      "balayage-coquitlam",
      "blonde-specialist-coquitlam",
    ],
    finalCta: "Regrowth handled — in about ninety minutes.",
  },
  {
    slug: "restorative-treatment-coquitlam",
    name: "Restorative Treatment",
    teaser: "Deep conditioning for damaged hair",
    priceFrom: 40,
    image: "/images/photos/result-restorative-1.jpg",
    imageAlt:
      "Restored, glossy hair after bond-rebuilding treatment at Megas Hair Salon, Coquitlam",
    metaTitle:
      "Restorative Hair Treatments Coquitlam | Repair & Recovery | Megas",
    metaDescription:
      "Restorative treatments for damaged hair in Coquitlam. Bond repair, deep conditioning, scalp therapy. Healthier hair from the first visit. Megas (778) 858-0396.",
    eyebrow: "Service · Treatment",
    h1: "Hair repair, taken seriously.",
    subhead:
      "Bond rebuilders, deep conditioners, and scalp therapy — for hair that needs more than a trim.",
    approach:
      "Healthy hair is the foundation of every great cut and colour. When hair is damaged — from over-processing, heat, or just years of styling — no service will look its best until that's addressed. Our restorative treatments use professional bond rebuilders and deep conditioning systems to bring hair back: stronger, smoother, and ready for whatever you want to do with it next.",
    pricing: [
      { label: "Deep conditioning mask", from: "$40" },
      { label: "Aveda botanical treatment", from: "$45" },
      { label: "Aveda scalp treatment", from: "$40" },
      { label: "Hair Botox", from: "$250" },
      { label: "Add to any service", from: "$30" },
    ],
    pricingNote:
      "Final pricing depends on hair length, density, and the work involved. We always confirm at consultation — no surprises at checkout.",
    stylistSlugs: ["bulent-bill", "gazi", "emir"],
    gallery: [
      {
        src: "/images/photos/result-restorative-1.jpg",
        alt: "Post-treatment shine after bond rebuilding, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-keratin-1.jpg",
        alt: "Healthy hair finish following restorative service, Megas Coquitlam",
      },
      {
        src: "/images/photos/result-blonde-1.jpg",
        alt: "Blonde hair restored with bond-rebuilding treatment, Megas Coquitlam",
      },
    ],
    faqs: [
      {
        q: "How do I know if my hair needs a restorative treatment?",
        a: "Signs include breakage, mid-shaft snapping, gummy or stretchy strands when wet, dullness that doesn't respond to home care, or hair that won't hold colour. We assess at consultation and recommend honestly.",
      },
      {
        q: "How often should I get a treatment?",
        a: "Most clients benefit from a treatment every 4–6 weeks alongside their regular services. For severely damaged hair, a more intensive plan over 2–3 months can rebuild structure significantly.",
      },
      {
        q: "Will one treatment fix my hair?",
        a: "One treatment will help — sometimes dramatically — but real recovery takes consistency. Damaged hair regrows; the goal is to maintain the existing length while it grows out healthier.",
      },
      {
        q: "What's the difference between a deep conditioner and a bond rebuilder?",
        a: "Deep conditioners moisturise and smooth the surface. Bond rebuilders work inside the hair shaft to repair the broken disulfide bonds caused by chemical processing. Most damaged hair benefits from both.",
      },
      {
        q: "Can I add a treatment to another appointment?",
        a: "Yes. Adding a treatment to a colour, cut, or blowout is one of the most efficient ways to maintain hair health. Add-on treatments start at $30.",
      },
    ],
    related: [
      "keratin-treatment-coquitlam",
      "blonde-specialist-coquitlam",
      "balayage-coquitlam",
    ],
    finalCta: "Strong, shiny, back to itself.",
  },
] as const;

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
