# Homepage Wireframe v1

**Route:** `/`  
**Brand:** Studio Kitchen  
**Status:** Wireframe v1 spec (structure + locked copy)  
**Last updated:** May 2026

**Related:** [services-wireframe-v1.md](./services-wireframe-v1.md) · [homepage-wireframe-spec.html](../homepage-wireframe-spec.html) · [homepage-conversion-flow.md](../homepage-conversion-flow.md) · [launch-strategy-v1.md](../launch-strategy-v1.md)

**Deliverable format:** Grayscale HTML frames · Desktop **1200px** + Mobile **375px** · No tokens, hover states, or motion in v1.

---

## Page role

| Attribute | Spec |
|-----------|------|
| **Funnel job** | Pitch · brief qualification · route to proof or conversion within 30 seconds |
| **Primary conversion** | Place your order (red surfaces) · Chat to the chef (global chrome) |
| **Secondary conversion** | See what's cooking → `/work` |
| **3-second rule** | Visitor knows: what you build · who it's for · what to do next |

---

## CTA model (sitewide — agreed in wireframe session)

| Label | Role | Surfaces | Destination |
|-------|------|----------|-------------|
| **Chat to the chef** | Global primary | Header, footer, cream CTA bands | `/order` |
| **Place your order** | High-intent primary | **Red surfaces only** (hero, reservation poster) | `/order` |
| **Call the chef** | Book a call | `/order` page only | Cal.com / Calendly |
| **See what's cooking** | Proof path | Hero secondary, section bridges, 404 | `/work` |

**`/order` page (not homepage):** Short chat/inquiry form · social links · **Call the chef** button → Calendly.

**Note:** Poster and hero red CTAs may use different labels but **share the same destination** (`/order`) where agreed.

---

## Locked scroll order (v1)

Proof-first with new `#why-order` teaser before work.

```
nav → hero → trust → why-order → work → process → tools → cta → footer
```

**Funnel IDs for analytics:**

```
#hero → #trust → #why-order → #work → #process → #tools → #cta
```

**Not on homepage v1:** Services snapshot section · Testimonials (deferred v2).

**Bridge after process:** View Services → `/services#process`

---

## Global chrome

### Header

| Element | Spec |
|---------|------|
| Logo | Jawad (interim wordmark) → `/` |
| Nav order | Work · Services · About · Journal · Contact |
| Header CTA | **Chat to the chef** → `/order` |
| Scroll (v2) | Transparent over red hero → solid/blur on scroll |
| Mobile | Hamburger · **Chat to the chef** visible in header or top of drawer |

### Footer

| Element | Copy / link |
|---------|-------------|
| Tagline | Landing pages and portfolio websites designed to stand out and convert. |
| Primary | **Chat to the chef** → `/order` |
| Secondary | See what's cooking → `/work` |
| Nav columns | Work · Services · About · Journal · Contact |
| Newsletter | **Get the recipe** |
| Legal | © Jawad Jalal · London, UK |

---

## Section 0 — Navigation `nav`

Standard global header (see above). No **Place your order** in nav.

---

## Section 1 — Hero `#hero`

**Surface:** RED poster hero  
**Purpose:** Service clarity + primary conversion in first viewport.

| Element | Copy |
|---------|------|
| **Kicker** | Portfolio & landing page chef |
| **Headline prefix** | The kitchen for mouth-watering |
| **Headline suffix (rotate)** | portfolios · landing pages |
| **Headline (reduced motion)** | The kitchen for mouth-watering portfolios and landing pages |
| **Subheadline** | I cook portfolio websites and landing pages that taste incredible and convert for creatives, founders, and brands. |
| **Audience** | Creative freelancers · SaaS founders · Brands & agencies |
| **Primary CTA** | **Place your order** → `/order` |
| **Secondary CTA** | **See what's cooking** → `/work` |

**Visual (v1):** Red poster band · content left · kitchen illustration placeholder right (stacked on mobile).

**Rotation (v2):** Crossfade suffix only · ~4s · `prefers-reduced-motion` → static combined headline.

**No em dashes** in new copy blocks.

---

## Section 2 — Trust `#trust`

**Surface:** CREAM  
**Purpose:** Copy-only credibility. No logos (logos live in `#tools`).  
**Layout:** Dual poster blocks (diagonal desktop · stacked mobile). White sticker cards on cream.

**Block A — speed**

| Element | Copy |
|---------|------|
| **Script** | I cook |
| **Display** | FAST FOOD |
| **Support** | Dishes delivered in days not months. |

**Block B — quality & value**

| Element | Copy |
|---------|------|
| **Script** | Agency-level |
| **Display** | DISHES |
| **Support** | at takeaway prices. |

**Footnote:** Specialist in portfolios and landing pages only.

**No CTA** in this section. **No tilt** on trust cards.

---

## Section 3 — Why order teaser `#why-order`

**Surface:** CREAM  
**Purpose:** Short visual qualification before proof. Expanded story lives on `/services#why`.

| Element | Copy |
|---------|------|
| **Kicker** | Why order? |
| **Heading** | Different orders, different dishes. |
| **Bridge (below tiles)** | See the full menu → `/services#why` |

### Tile 1 — The empty plate

| Field | Copy |
|-------|------|
| **Audience chip** | Creative freelancers |
| **Kitchen label** | The empty plate |
| **One-liner** | A portfolio website plates your best work so art directors stop scrolling and start hiring. |
| **Link (entire tile clickable)** | `/services#why-portfolio` |

### Tile 2 — One dish, one goal

| Field | Copy |
|-------|------|
| **Audience chip** | SaaS founders |
| **Kitchen label** | One dish, one goal |
| **One-liner** | One landing page, one job: explain your product in seconds and turn visitors into demo requests. |
| **Link (entire tile clickable)** | `/services#why-landing` |

### Tile 3 — Front of house

| Field | Copy |
|-------|------|
| **Audience chip** | Brands & agencies |
| **Kitchen label** | Front of house |
| **One-liner** | A premium first impression, served fast. Look agency level without the long wait. |
| **Link (entire tile clickable)** | `/services#why-brands` |

**Layout:** Three tiles in a row (desktop) · stacked (mobile). One viewport max. Icon/line-art placeholder per tile. **No CTA buttons inside tiles** — whole card is the link.

**Wireframe v2:** Hover/focus states · `cursor: pointer` · keyboard focus ring.

**Visual weight:** Lighter than `#work` below — proof section remains the payoff.

---

## Section 4 — Selected work `#work`

**Surface:** CREAM  
**Strategy:** Option B (launch) — 1 live project + coming soon panel. No filler client cards.

| Element | Copy |
|---------|------|
| **Kicker** | From the pass |
| **Heading** | My dishes |
| **Live card title** | By Jawad |
| **Live card type** | Portfolio |
| **Live card description** | The site you're on — Studio Kitchen voice, conversion-first |
| **Live card CTA** | View project → `/work/by-jawad` |
| **Coming soon panel** | Next out of the kitchen · Case studies added as projects ship. |
| **Section CTA** | Explore work → `/work` |

**Layout:** One featured card + adjacent coming-soon panel (desktop) · stacked (mobile).

---

## Section 5 — Process `#process`

**Surface:** CREAM

| Element | Copy |
|---------|------|
| **Kicker** | The recipe |
| **Heading** | Five courses. Five days. |

| Step | Name |
|------|------|
| 1 | Prep the brief |
| 2 | First taste |
| 3 | Plate the design |
| 4 | In the oven |
| 5 | Serve & hand off |

**Layout:** Horizontal timeline with connector (desktop) · vertical stack (mobile).

| Bridge | Destination |
|--------|-------------|
| See full process | `/services#process` |
| View Services | `/services` |

---

## Section 6 — Tools `#tools`

**Surface:** CREAM

| Element | Copy |
|---------|------|
| **Kicker** | The pantry |
| **Heading** | My ingredients |
| **Subheadline** | AI-assisted precision — human-led strategy and craft. |

| Tool | Role |
|------|------|
| Cursor | AI-native development |
| Claude | Strategy & copy |
| Figma | UI design |
| Next.js | Production build |
| Tailwind CSS | Design system |
| Spline | 3D accents |
| GSAP | Scroll motion |
| Supabase | Backend & forms |

**Layout:** 4×2 grid (desktop) · 2×4 (mobile). Logo + name + one-line role per card.

**No section CTA.**

---

## Section 7 — Final CTA `#cta`

**Surface:** RED reservation poster (tilted in hi-fi)  
**Purpose:** Last-chance conversion.

| Element | Copy |
|---------|------|
| **Script (Caveat in hi-fi)** | Ready to order? |
| **Shout** | PLACE YOUR ORDER |
| **Subline** | Tell me about your project. I reply within 24 hours. |
| **Primary CTA** | **Place your order** → `/order` |
| **Secondary CTA** | **Chat to the chef** → `/order` |
| **Separator** | OR |

Both poster CTAs **share the same destination** (`/order`) with different labels.

---

## Section 8 — Footer `footer`

Standard global footer (see Global chrome).

---

## Conversion paths

### Proof path

```
#hero → #trust → #why-order (optional) → #work → /work/by-jawad → /order
```

### Scroll path (no work click)

```
#hero → #trust → #why-order → #work (scroll past) → #process → #tools → #cta → /order
```

### High intent

```
#hero Place your order → /order
Header Chat to the chef → /order
```

### Qualification path

```
#why-order tile → /services#why-* → packages → /order
```

---

## SEO (metadata)

| Field | Copy |
|-------|------|
| **Title** | Jawad Jalal — Landing Page & Portfolio Website Designer |
| **Meta description** | High-converting landing pages and portfolio websites for creatives, SaaS founders, and brands. Book a call or start your project. |

---

## Mobile summary (375px)

| Section | Behavior |
|---------|----------|
| Nav | Logo + Chat to the chef + hamburger |
| Hero | Stack CTAs full width · static headline if reduced motion |
| `#why-order` | 3 stacked linked tiles |
| `#work` | Card + coming soon stacked |
| `#process` | Vertical 5 steps |
| `#tools` | 2-column grid |
| `#cta` | Stacked poster CTAs |
| Footer | 2-column link grid |

---

## Wireframe v1 exit checklist

- [x] Desktop 1200px + mobile 375px frames
- [x] Scroll order includes `#why-order` after `#trust`
- [x] Locked copy verbatim (no em dashes in new blocks)
- [x] Option B work: 1 card + coming soon only
- [x] Global header/footer on frame
- [x] `#why-order` tiles link to `/services#why-*`
- [x] Red surfaces: Place your order · Header: Chat to the chef
- [x] No testimonials · no services snapshot section

---

## Deferred to wireframe v2

- Nav scroll blur/shrink
- Hero suffix rotation + reduced motion
- Tile/card hover and focus states
- Accordion, form fields, Calendly embed
- Studio Kitchen tokens and typography
- Kitchen hero illustration

---

## Changelog (wireframe session)

| Change | Notes |
|--------|-------|
| Hero kicker | `studio` → **chef** |
| New section | `#why-order` between trust and work |
| CTA model | Chat to the chef → `/order` · Place your order on red only |
| Poster | Two CTAs, same destination `/order` |
| Work | Option B locked |
| Why depth | Full story deferred to `/services#why` |
