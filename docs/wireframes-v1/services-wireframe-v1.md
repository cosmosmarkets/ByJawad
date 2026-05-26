# Services Wireframe v1

**Route:** `/services`  
**Brand:** Studio Kitchen  
**Status:** Wireframe v1 spec (structure + locked copy)  
**Last updated:** May 2026

**Related:** [homepage-wireframe-v1.md](./homepage-wireframe-v1.md) · [services-wireframe-v1.html](./services-wireframe-v1.html) · [page-briefs.md](../page-briefs.md) · [launch-strategy-v1.md](../launch-strategy-v1.md)

**Deliverable format:** Grayscale HTML frames · Desktop **1200px** + Mobile **375px** · No tokens, accordion animation, or hover states in v1.

---

## Page role

| Attribute | Spec |
|-----------|------|
| **Funnel job** | Self-qualify · explain portfolio vs landing page · show price bands · reduce pre-call questions |
| **Surface rule** | **Cream hero** (not red). Red reserved for `/` and `/contact` heroes + homepage reservation poster |
| **Primary conversion** | **Chat to the chef** → `/order` |
| **Secondary conversion** | **See what's cooking** → `/work` |

---

## CTA model (aligned with homepage spec)

| Label | When on `/services` | Destination |
|-------|---------------------|-------------|
| **Chat to the chef** | Header, hero, package cards, FAQ micro-CTA, `#cta` band, footer | `/order` |
| **See what's cooking** | Hero secondary, portfolio card secondary, `#cta` band, footer | `/work` |
| **Place your order** | **Not used** (no red surface on this page) | — |

**`/order` page:** Chat form · social links · **Call the chef** → Cal.com / Calendly.

---

## Inbound links

| From | Destination |
|------|-------------|
| Homepage `#why-order` tile 1 | `/services#why-portfolio` |
| Homepage `#why-order` tile 2 | `/services#why-landing` |
| Homepage `#why-order` tile 3 | `/services#why-brands` |
| Homepage `#why-order` bridge | `/services#why` |
| Homepage `#process` bridge | `/services#process` |
| Work hero secondary | `/services` |
| Nav | Services (active state) |

---

## Locked scroll order

```
nav → hero → why → portfolio → landing → addons → process → faq → cta → footer
```

### Section anchors

| Section | ID |
|---------|-----|
| Hero | `#hero` |
| Why (full menu) | `#why` |
| Why — creatives panel | `#why-portfolio` |
| Why — founders panel | `#why-landing` |
| Why — brands panel | `#why-brands` |
| Portfolio package | `#portfolio` |
| Landing page package | `#landing` |
| Add-ons | `#addons` |
| Process | `#process` |
| FAQ | `#faq` |
| Final CTA | `#cta` |

---

## Global chrome

Same as homepage spec. **Services** nav item active. Header CTA: **Chat to the chef** → `/order`.

---

## Section 1 — Hero `#hero`

**Surface:** CREAM · black type

| Element | Copy |
|---------|------|
| **Kicker** | The menu |
| **Headline** | Portfolio and landing page packages, built to convert. |
| **Subheadline** | Clear scope, fast timelines, and studio quality craft without agency bloat. |
| **Primary CTA** | **Chat to the chef** → `/order` |
| **Secondary CTA** | **See what's cooking** → `/work` |
| **Optional text link** | Jump to packages → `#portfolio` |

**Layout:** Left-aligned copy column ~640px max. No hero illustration required in v1.

---

## Section 2 — Why `#why`

**Surface:** CREAM  
**Purpose:** Expanded homepage `#why-order` story. Route each audience to the right package or `/order`.

### Section header

| Element | Copy |
|---------|------|
| **Kicker** | Why order? |
| **Heading** | The full menu. |
| **Intro** | Same three orders as the homepage. Here is what each one means, what you get, and which package fits. |

### Panel 1 — `#why-portfolio`

| Field | Copy |
|-------|------|
| **Kitchen label** | The empty plate |
| **Audience** | Creative freelancers |
| **One-liner** | A portfolio website plates your best work so art directors stop scrolling and start hiring. |
| **Bullets** | You need a home for case studies, not a link in bio · Your work is strong but your site looks like a template · You want inquiries from the right clients |
| **Tie-in** | **Portfolio package** · ~1 week · £500–£1,000 |
| **Panel CTA** | See portfolio package → `#portfolio` |

### Panel 2 — `#why-landing`

| Field | Copy |
|-------|------|
| **Kitchen label** | One dish, one goal |
| **Audience** | SaaS founders |
| **One-liner** | One landing page, one job: explain your product in seconds and turn visitors into demo requests. |
| **Bullets** | Paid traffic goes to a page that does too many jobs · Visitors bounce before they get the offer · You need one clear CTA: signup, demo, or waitlist |
| **Tie-in** | **Landing page package** · 3–5 days · £1,000–£3,000 |
| **Panel CTA** | See landing page package → `#landing` |

### Panel 3 — `#why-brands`

| Field | Copy |
|-------|------|
| **Kitchen label** | Front of house |
| **Audience** | Brands & agencies |
| **One-liner** | A premium first impression, served fast. Look agency level without the long wait. |
| **Bullets** | Your brand outgrew a generic builder look · You need polish and speed, not a long agency timeline · You want one specialist who owns design and build |
| **Tie-in** | **Portfolio or landing page** · format chosen on a quick call |
| **Panel CTA** | **Chat to the chef** → `/order` |

### `#why` footer strip

| Element | Copy |
|---------|------|
| **Line** | Still deciding? |
| **CTA** | **Chat to the chef** → `/order` |

**Layout:** Stacked panels (desktop and mobile). Icon placeholder · label · audience chip · one-liner · bullets · tie-in · link/button.

**v2:** On hash load, scroll target panel into view with optional highlight.

---

## Section 3 — Portfolio package `#portfolio`

**Surface:** CREAM · white card

| Element | Copy |
|---------|------|
| **Kicker** | For creatives |
| **Heading** | Portfolio package |
| **For** | Photographers, designers, illustrators, videographers, writers, architects |
| **Includes** | Discovery and positioning workshop · Custom design, not a template · Up to X project case studies · Mobile responsive build · Basic SEO and performance optimization · Launch support |
| **Timeline** | ~1 week |
| **Price** | £500–£1,000 |
| **Primary CTA** | **Chat to the chef** → `/order` |
| **Secondary link** | See what's cooking → `/work` |

---

## Section 4 — Landing page package `#landing`

**Surface:** CREAM · white card (paired with portfolio)

| Element | Copy |
|---------|------|
| **Kicker** | For founders and launches |
| **Heading** | Landing page package |
| **For** | SaaS founders, brands, agencies, product launches |
| **Includes** | Conversion brief and competitor review · Single high converting page · Copy support and CTA strategy · Analytics ready structure · Fast load and responsive build |
| **Timeline** | 3–5 days |
| **Price** | £1,000–£3,000 |
| **Primary CTA** | **Chat to the chef** → `/order` |

### Shared pricing note (below both cards)

Starter rates for early clients. Review after first 3 completed projects.

**Layout (desktop):** Side-by-side package cards for comparison.  
**Layout (mobile):** Portfolio card, then landing card, full width.

---

## Section 5 — Add-ons `#addons`

**Surface:** Light recessed band

| Element | Copy |
|---------|------|
| **Kicker** | Extra toppings |
| **Heading** | Add-ons |

| Add-on | Description |
|--------|-------------|
| CMS setup | Update projects and content yourself (Supabase or similar) |
| 3D elements | Spline or WebGL hero and section accents |
| Animation package | Scroll storytelling, GSAP, micro interactions |
| Copywriting | Full page copy pass |
| Ongoing support | Post launch tweaks (monthly retainer) |

**Optional line:** Add-ons quoted after we scope your project.

**No section CTA.** No add-on prices in v1.

**Layout:** Table (desktop) · stacked rows (mobile).

---

## Section 6 — Process `#process`

**Surface:** CREAM

| Element | Copy |
|---------|------|
| **Kicker** | The recipe |
| **Heading** | Five courses. Five days. |
| **Subline** | From brief to launch without the agency wait. |

| Step | Name | Short description |
|------|------|-------------------|
| 1 | Prep the brief | Discovery, goals, audience, and scope |
| 2 | First taste | Wireframe or prototype for early feedback |
| 3 | Plate the design | Brand aligned UI, type, and imagery |
| 4 | In the oven | Build, responsive polish, performance pass |
| 5 | Serve and hand off | QA, launch, and handover |

**Layout:** Horizontal 5-step timeline (desktop) · vertical stack (mobile).

**No section CTA.**

---

## Section 7 — FAQ `#faq`

**Surface:** Light band

| Element | Copy |
|---------|------|
| **Kicker** | Before you order |
| **Heading** | FAQ |

**Micro CTA (below accordion):** Still have questions? **Chat to the chef** → `/order`

### Q1. What's included in each package?

**Portfolio package (~1 week, £500–£1,000):** Discovery and positioning, custom design, up to X case study slots, mobile responsive build, basic SEO and performance, and launch support.

**Landing page package (3–5 days, £1,000–£3,000):** Conversion brief, competitor review, one high converting page, copy and CTA support, analytics ready structure, and a fast responsive build.

Add-ons like CMS, 3D, animation, or copywriting are quoted separately. Full ingredient lists sit in the package cards above.

### Q2. How many revision rounds?

Each package includes **two structured revision rounds** after you see the first taste (wireframe or prototype, then design).

That keeps momentum and avoids endless back and forth. Small tweaks at launch are included. Larger scope changes are quoted before extra work starts.

### Q3. Do I own the site and code?

**Yes.** When the project is paid in full, you own the site, design, and code built for you.

You get handover on launch. Hosting and domain stay in your accounts. I do not lock you into a proprietary platform.

### Q4. What do you need from me to start?

A short brief: what you are building, who it is for, timeline, and budget band. Links to brands or sites you like help. For portfolios, work samples and project write ups. For landing pages, product one liner, main CTA, and any existing copy.

If you are not sure yet, **Chat to the chef** on `/order` and we will shape the brief on a quick call.

### Q5. How does payment work?

**50% to book your slot, 50% before launch.**

Starter rates apply for early clients. Invoices by bank transfer. Payment plan for larger add-ons can be discussed on a call.

### Q6. What if I need more pages later?

Portfolios and landing pages are my focus, so extra pages are scoped as a **phase two** or a new package.

A blog, extra case studies, or a second landing page can usually be added without rebuilding from scratch. Tell me the goal and I will quote a clear mini scope.

### Q7. Which package should I pick?

**Need to show work and win clients?** Portfolio package.

**Need one page to convert traffic for a product or launch?** Landing page package.

**Brand needs polish but the format is unclear?** Start with **Chat to the chef** on `/order` and we will pick the right dish in fifteen minutes.

**Layout (v1):** Stacked question rows (collapsed titles OK).  
**Layout (v2):** Accordion, one open at a time on mobile.

---

## Section 8 — Final CTA `#cta`

**Surface:** CREAM band (not red reservation poster)

| Element | Copy |
|---------|------|
| **Kicker** | Ready to order? |
| **Heading** | Tell me what you are building. |
| **Subline** | Book a quick chat or send a brief. I reply within 24 hours. |
| **Primary CTA** | **Chat to the chef** → `/order` |
| **Secondary CTA** | **See what's cooking** → `/work` |

---

## Section 9 — Footer

Standard global footer. **Chat to the chef** → `/order`.

---

## CTA map (full page)

| Location | Primary | Secondary |
|----------|---------|-----------|
| Header | Chat to the chef → `/order` | — |
| Hero | Chat to the chef → `/order` | See what's cooking → `/work` |
| `#why` panels 1–2 | See package → `#portfolio` / `#landing` | — |
| `#why` panel 3 + footer | Chat to the chef → `/order` | — |
| `#portfolio` card | Chat to the chef → `/order` | See what's cooking → `/work` |
| `#landing` card | Chat to the chef → `/order` | — |
| After FAQ | Chat to the chef → `/order` | — |
| `#cta` band | Chat to the chef → `/order` | See what's cooking → `/work` |
| Footer | Chat to the chef → `/order` | See what's cooking → `/work` |

---

## Visitor journeys

**A — Homepage infographic**  
Tile click → `/services#why-*` → panel CTA → `#portfolio` or `#landing` → Chat to the chef → `/order`

**B — Price shopper**  
Nav → Services → packages → FAQ → `#cta`

**C — Process curious**  
Homepage View Services → `/services#process` → packages or FAQ

**D — Proof first**  
Hero See what's cooking → `/work` → return → `/order`

---

## SEO (metadata)

| Field | Copy |
|-------|------|
| **Title** | Portfolio and Landing Page Design Services. Jawad Jalal |
| **Meta description** | Portfolio and landing page packages for creatives, founders, and brands. Clear scope, fast timelines, studio quality craft. |
| **Target keyword** | portfolio website designer freelance |

---

## Mobile summary (375px)

| Section | Behavior |
|---------|----------|
| Nav | Logo + Chat to the chef + hamburger |
| Hero | Stack · full-width CTAs |
| `#why` | 3 stacked panels |
| Packages | 1 column |
| Add-ons | Stacked list |
| `#process` | Vertical 5 steps |
| FAQ | Full-width rows |
| `#cta` | Stacked buttons |
| Footer | 2-column grid |

---

## Wireframe v1 exit checklist

- [x] Desktop 1200px + mobile 375px frames
- [x] All section anchors present (see table above)
- [x] `#why` block between hero and packages
- [x] Locked copy + FAQ answers verbatim
- [x] Global header/footer
- [x] CTAs use Chat to the chef (not Book a Call)
- [x] Process uses kitchen step names (not generic Day 1–5 only)
- [x] Package cards side-by-side on desktop
- [x] No Place your order on this page

---

## Gaps vs existing `services-wireframe-v1.html`

HTML frame synced to this spec May 2026 (`services-wireframe-v1.html`).

---

## Policy defaults (confirm before build)

| Topic | Draft value |
|-------|-------------|
| Revision rounds | 2 structured rounds |
| Payment | 50% deposit · 50% before launch |
| Case study slots | Up to X (set number before launch) |

---

## Changelog (wireframe session)

| Change | Notes |
|--------|-------|
| New section | `#why` with deep links from homepage tiles |
| CTA model | Chat to the chef → `/order` globally on this page |
| FAQ | Seven questions with short answers drafted |
| Hero subhead | No em dash |
| Packages | Side-by-side desktop layout |
