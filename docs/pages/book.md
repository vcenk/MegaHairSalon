# Booking Page

**URL:** `/book`
**Template:** `book`
**Primary keyword:** book hair salon Coquitlam
**Secondary keywords:** hair appointment Coquitlam, online booking Megas

## SEO Metadata

```
Title: Book an Appointment | Megas Hair Salon Coquitlam
Description: Book online with master colourists at Megas Hair Salon Coquitlam. Real-time availability for balayage, blonde, cuts, and color. Or call (778) 858-0396.
Canonical: https://megashairsalon.ca/book
OG Image: /og-book.jpg
robots: index, follow
```

## Schema

- ContactPage
- LocalBusiness with reservationAction
- BreadcrumbList

## Page Sections

### 1. Hero (compact)

- **Eyebrow:** APPOINTMENTS
- **H1:** Book your visit.
- **Subhead:** Real-time availability with our master stylists. New clients welcome.

### 2. Booking widget

Embed your chosen booking platform here:

**Recommended platforms:**

| Platform | Pros | Cons |
|---|---|---|
| **Fresha** | Free, salon-specific, used by competitors | Branded with Fresha logo |
| **Square Appointments** | Free, integrates with payments | Generic UI |
| **Vagaro** | Industry standard, marketing tools | $25/mo minimum |
| **Custom (Cal.com self-hosted)** | Full brand control | Most setup work |

The widget should allow:
- Service selection (8 services)
- Stylist selection (Bülent, Gazi, Emir, "first available")
- Date/time picker (real availability)
- Client info form
- SMS + email confirmations
- 24h reminder

### 3. Phone fallback

Below widget:

> Prefer to call? Reach us at [(778) 858-0396](tel:+17788580396) — Mon–Sat, 10am–6pm.

### 4. New client welcome

> **First time at Megas?**
>
> We recommend booking a consultation if you're considering a major change like balayage, blonde transformation, or color correction. It's complimentary and helps us plan the right approach.
>
> [Book a consultation]

### 5. Cancellation policy

Brief, clear:

> 24-hour cancellation notice appreciated. We send reminder texts the day before — please confirm or reschedule promptly so we can offer your slot to others on our waitlist.

### 6. FAQ section (5 Q's)

- How far in advance should I book?
- Can I request a specific stylist?
- Do you accept walk-ins?
- What's included in a consultation?
- How do I prepare for my first appointment?

Mark up with `FAQPage` schema.

## Conversion Optimization

- Booking widget must load above the fold on mobile
- Phone number tap-to-call prominent
- No distractions in nav while on booking flow (consider hiding nav once user starts booking)
- Add Microsoft Clarity heatmap to identify drop-off points
- Set GA4 conversion event: `booking_completed`
