# Order Wireframe v1

**Route:** `/order`  
**Brand:** Studio Kitchen  
**Status:** Wireframe v1 spec (conversion hub)  
**Last updated:** May 2026

**Related:** [homepage-wireframe-v1.md](./homepage-wireframe-v1.md) · [services-wireframe-v1.md](./services-wireframe-v1.md) · [work-wireframe-v1.md](./work-wireframe-v1.md) · [order-wireframe-v1.html](./order-wireframe-v1.html)

**Deliverable format:** Grayscale HTML frames · Desktop **1200px** + Mobile **375px**

---

## Page role

| Attribute | Spec |
|-----------|------|
| **Funnel job** | Primary global conversion hub: message, social proof of access, book a call |
| **Surface rule** | **Cream** page (not red poster) |
| **Replaces** | Header/footer **Book a Call** → `/contact#book` in legacy wireframes |

**Note:** `/contact` may remain a separate red-hero full project brief in a later pass. v1 treats `/order` as the default target for **Chat to the chef** and homepage poster CTAs.

---

## Inbound links

| From | Label |
|------|-------|
| Global header | Chat to the chef |
| Homepage hero | Place your order |
| Homepage `#cta` poster | Place your order · Chat to the chef |
| Services / Work / FAQ | Chat to the chef |
| Footer | Chat to the chef |

---

## Locked scroll order

```
nav → hero → form → socials → book → footer
```

| Section | Anchor |
|---------|--------|
| Hero | `#hero` |
| Short form | `#form` |
| Social links | `#socials` |
| Calendly block | `#book` |
| Footer | `footer` |

---

## Global chrome

| Element | Spec |
|---------|------|
| Nav order | Work · Services · About · Journal · Contact |
| Header CTA | **Chat to the chef** (current page; optional scroll to `#form`) |
| Footer | Standard · Chat to the chef → `/order` |

---

## Section 1 — Hero `#hero`

**Surface:** Cream

| Element | Copy |
|---------|------|
| **Kicker** | Pull up a chair |
| **Headline** | Chat to the chef |
| **Subheadline** | Send a quick message, connect on socials, or book a 15-minute call. I reply within 24 hours. |

**No Place your order** on this section (cream surface). Full project brief may live on `/contact` later.

---

## Section 2 — Form `#form`

**Surface:** Cream · white card

| Field | Type | Required |
|-------|------|----------|
| Name | text | yes |
| Email | email | yes |
| Project type | select | optional · Portfolio website · Landing page · Redesign · Other |
| Message | textarea | yes |

| Element | Copy |
|---------|------|
| **Submit** | Send project brief |
| **Promise** | I reply within 24 hours. |

**Layout (desktop):** Form left or centered max ~480px.  
**Layout (mobile):** Full-width fields stacked.

---

## Section 3 — Socials `#socials`

**Surface:** Cream

| Element | Copy |
|---------|------|
| **Kicker** | Elsewhere |
| **Heading** | Find me online |
| **Links** | LinkedIn · Email · Discord (optional) |

Icon placeholders in v1 wireframe.

---

## Section 4 — Book a call `#book`

**Surface:** Light band or cream card

| Element | Copy |
|---------|------|
| **Kicker** | Prefer a call? |
| **Heading** | Call the chef |
| **Subline** | 15-minute discovery call. No pressure, just clarity. |
| **CTA / embed** | Calendly or Cal.com embed placeholder |
| **Button label** | Call the chef |

---

## Section 5 — Footer

Standard global footer.

---

## CTA map

| Location | Action |
|----------|--------|
| `#form` submit | Send project brief (stays on page / success state v2) |
| `#book` | Call the chef → external Calendly |
| `#socials` | External profile links |

---

## Mobile summary (375px)

| Section | Behavior |
|---------|----------|
| Nav | Logo + Chat to the chef + hamburger |
| Hero | Centered stack |
| Form | Full-width |
| Socials | Icon row or stacked links |
| `#book` | Full-width embed/button |
| Footer | Standard |

---

## Wireframe v1 exit checklist

- [x] Desktop 1200px + mobile 375px frames
- [x] Form field schema visible
- [x] Call the chef block present
- [x] Social links block present
- [x] Global header/footer
- [x] No retired space/mission copy

---

## Deferred to v2

- Form validation states
- Success/error after submit
- Live Calendly URL
- Supabase + Resend backend

---

## Changelog

| Change | Notes |
|--------|-------|
| New route | `/order` as global conversion hub |
| Call the chef | Calendly on this page only (label locked) |
