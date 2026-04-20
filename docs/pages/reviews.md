# Reviews Page

**URL:** `/reviews`
**Template:** `reviews`
**Primary keyword:** Megas Hair Salon reviews
**Secondary keywords:** best hair salon Coquitlam reviews

## SEO Metadata

```
Title: Reviews | 4.8★ from 146 Clients | Megas Hair Salon Coquitlam
Description: Read what 146+ clients say about Megas Hair Salon in Coquitlam. 4.8-star rated master colourists for balayage, blonde, and precision cuts.
Canonical: https://megashairsalon.ca/reviews
OG Image: /og-reviews.jpg
```

## Schema

- LocalBusiness with aggregateRating + review array
- BreadcrumbList

## Page Sections

### 1. Hero

- **Eyebrow:** WHAT CLIENTS SAY
- **H1:** Four-point-eight stars. One hundred forty-six voices.
- **Subhead:** Real reviews from real clients across the Tri-Cities.

Display: Large 4.5 stars + "146 Google Reviews" + link to leave a review

### 2. Featured pull quotes (3)

Large serif quotes, no boxes, lots of whitespace:

> "I had been looking for someone like Bill in Vancouver for years — truly, he has magic hands."
>
> — Sarah M., Coquitlam · ★★★★★

> "Megas is a lovely locally owned shop. The space is modern, clean, and welcoming. I left feeling very happy and absolutely loving my new look."
>
> — Jessica T., Port Moody · ★★★★★

> "Bulent and Gazi started with a thorough consultation, really listening to my preferences. The results exceeded my expectations."
>
> — Maya K., Burnaby · ★★★★★

### 3. All reviews grid

Pull all reviews from Google (via Places API or Birdeye) and display:
- Star rating
- Reviewer name
- Date
- Full text
- Stylist tag (if mentioned)

Filter by stylist (Bülent, Gazi, Emir) — drives traffic to team pages.

### 4. Leave a review CTA

> Loved your visit? Tell us — and Google.
>
> [Write a Google review]

Links directly to your GBP review form.

### 5. Booking CTA

> Ready to experience it yourself?
>
> [Book your appointment]

## Schema for Reviews

Mark up the top 5 featured reviews with `Review` schema. Don't mark up all 91 — Google can detect aggregation and may flag it. Aggregate rating handles the rest.

```ts
{
  "@type": "Review",
  reviewRating: { "@type": "Rating", ratingValue: "5" },
  author: { "@type": "Person", name: "Sarah M." },
  reviewBody: "I had been looking for someone like Bill in Vancouver for years — truly, he has magic hands.",
  itemReviewed: { "@id": "https://megashairsalon.ca/#business" },
}
```
