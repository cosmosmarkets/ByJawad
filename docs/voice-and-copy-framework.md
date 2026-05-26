# Voice & Copy Framework — Studio Kitchen

**Brand:** Jawad Jalal · Portfolio & Landing Page Specialist  
**Direction:** Warm/easy · kitchen metaphor · Studio Kitchen visual system  
**Primary business goal:** Convert visitors into booked calls or project inquiries  
**Last updated:** May 2026

**Canonical copy doc.** Visual system: [studio-kitchen-visual-direction.md](./studio-kitchen-visual-direction.md) · Tokens: [design-token-system.md](./design-token-system.md)

---

## Positioning

> Agency-level craft with a warm studio feel. I only build portfolios and landing pages — the two highest-stakes pages on the internet.

**3-second emotion:** *Clear, confident, easy to work with.*

| Pillar | Copy implication |
|--------|------------------|
| **Warm** | Kitchen metaphor explains process; plain language on money/time actions |
| **Clear** | First screen always says *portfolio websites* and *landing pages* |
| **Confident** | Bold kitchen CTAs on hero; specialist scope stated early |
| **Conversion-first** | Book a Call / Start an Inquiry unchanged in header, footer, forms |

---

## Voice principles

1. **Metaphor explains workflow** — prep, taste, plate, serve map to discovery → launch.
2. **Plain on conversion** — header, footer, Calendly, and form submit use direct labels.
3. **Bold kitchen on hero only** — Place your order · See what's cooking (homepage hero).
4. **No pun overload** — avoid gimmicks on tools, pricing, or legal copy.
5. **Portfolios first** — hero rotation leads with portfolios, then landing pages.
6. **SEO stays literal** — title tags and meta descriptions never use slang (“mouth-watering”).

### Do / don't

| Do | Don't |
|----|-------|
| “Five courses. Five days.” | “We whisk your Supabase.” |
| “From the pass” (work kicker) | “Enter orbit” / “Beam me up” |
| “Send project brief” (form) | “Send mission brief” |
| Literal subhead under playful headline | Food-only headline with no web context |

---

## Metaphor glossary

### Allowed (kitchen)

| Term | Use for |
|------|---------|
| Kitchen / studio kitchen | Brand, hero, about |
| Menu | Services, navigation to offer |
| Recipe | Process section |
| Prep / mise en place | Discovery step |
| First taste | Wireframe / prototype step |
| Plate | Visual design step |
| In the oven | Build step |
| Serve / pass | Launch / work showcase |
| Pantry / kitchen kit | Tools section |
| Order / place your order | Hero CTA → contact |
| What's cooking | Hero secondary CTA → work |

### Banned (retired space theme)

orbit · mission · cosmic · telemetry · launch pad · return to base · featured missions · stay in orbit · mission stack · mission log · transmission log · initiate contact · signal lost

---

## Homepage hero (locked)

### Copy

| Element | Copy |
|---------|------|
| Kicker | Portfolio & landing page studio |
| Headline prefix | The kitchen for mouth-watering |
| Headline variants (rotate) | portfolios · landing pages |
| Headline (reduced motion) | The kitchen for mouth-watering portfolios and landing pages |
| Subheadline | I cook portfolio websites and landing pages that taste incredible and convert for creatives, founders, and brands. |
| Audience chips | Creative freelancers · SaaS founders · Brands & agencies |
| Primary CTA | Place your order |
| Secondary CTA | See what's cooking |
| Optional trust line | Trusted tools. A proven recipe. |

| CTA | Destination |
|-----|-------------|
| Place your order | `/contact` |
| See what's cooking | `/work` |

### Headline rotation spec

| Field | Type | Default |
|-------|------|---------|
| `headlinePrefix` | string | `The kitchen for mouth-watering ` |
| `headlineVariants` | string[] | `["portfolios", "landing pages"]` |
| `headlineRotateMs` | number | `4000` |
| `headlineCrossfadeMs` | number | `400` |
| `headlineReducedMotion` | string | Full static combined headline (see above) |

**Animation:** Crossfade **suffix only**; prefix stays static. Order: portfolios → landing pages → loop.

**Accessibility:**

- `aria-live="polite"` on the rotating suffix span
- `prefers-reduced-motion: reduce` → static combined headline; no rotation
- Pause on hover/focus: optional v2

**SEO:** Crawlable H1 uses static combined line or full text in DOM; animation is progressive enhancement only. See [seo-page-map.md](./seo-page-map.md).

**Visual:** Centered mega-type hero on red (no illustration) — Steak-inspired poster stack. Legacy spaceman/halftone assets retired. See [homepage-content-hierarchy.md](./homepage-content-hierarchy.md).

---

## Global CTA hierarchy

| Tier | Label | Destination | When to use |
|------|-------|-------------|-------------|
| **Global primary** | Book a Call | `/contact#book` | Header, footer, end-of-page bands |
| **Global secondary** | Start an Inquiry | `/contact` (form anchor) | Header (optional), footer, case study ends |
| **Hero primary** | Place your order | `/contact` | Homepage hero only |
| **Hero secondary** | See what's cooking | `/work` | Homepage hero only |
| **Proof primary** | View Case Study | `/work/[slug]` | Work grid cards |
| **Proof secondary** | Start a Project | `/contact` | Work page header/footer |
| **Offer primary** | Book a Call | `/contact` | Services page |
| **Offer secondary** | Start an Inquiry | `/contact` | Services packages, FAQ end |
| **Authority primary** | Read Case Studies | `/work` | Journal index, article mid-content |
| **Authority secondary** | Book a Call | `/contact` | Journal article end |
| **Recovery primary** | Return home | `/` | 404 page |
| **Recovery secondary** | See what's cooking | `/work` | 404 page |
| **Recovery tertiary** | Place your order | `/contact` | 404 page |

---

## Page heroes (locked)

| Page | Kicker | Headline |
|------|--------|----------|
| Homepage | Portfolio & landing page studio | Rotating hero (see above) |
| Services | The menu | Portfolio and landing page packages, built to convert. |
| Work | From the pass | Selected work — portfolios and landing pages that perform. |
| About | Behind the pass | I build portfolios and landing pages that change trajectories. |
| Contact | Ready to order? | Start your next site in the kitchen. |
| Journal | From the kitchen | Notes on web design, conversion, and the tools I use. |
| 404 | Wrong table | This page isn't on the menu. |

### Page hero subheads & CTAs

See [cta-messaging-matrix.md](./cta-messaging-matrix.md) for full blocks.

---

## Homepage sections (locked copy)

| Section | Kicker | Heading / primary copy |
|---------|--------|-------------------------|
| Trust | — | Dual poster blocks: **A** *I cook* · **FAST FOOD** · Dishes delivered in days not months. **B** *Agency-level* · **DISHES** · at takeaway prices. Footnote: Specialist in portfolios and landing pages only. |
| Work | From the pass | **My dishes** · Live: By Jawad · Coming soon: **Next out of the kitchen** |
| Process | The recipe | **Five courses. Five days.** |
| Tools | The pantry | **My ingredients** |
| Final CTA | — | Poster: *Ready to order?* + **PLACE YOUR ORDER** (see below) |

### Process steps (kitchen titles)

| Day | Title | Description |
|-----|-------|-------------|
| 1 | Prep the brief | Align on goals, audience, and what "done" looks like. |
| 2 | First taste | Interactive structure before visual polish. |
| 3 | Plate the design | Brand-aligned UI, typography, and imagery. |
| 4 | In the oven | Production build, motion, and device QA. |
| 5 | Serve & hand off | Final checks, deploy, and handover docs. |

Section CTA: **See full process** → `/services#process`  
Bridge after process: **View Services** → `/services`

---

## Final CTA poster (locked)

| Element | Copy |
|---------|------|
| Script | Ready to order? |
| Shout | PLACE YOUR ORDER |
| Subline | Tell me about your project — I'll reply within 24 hours. |
| Primary button | Book a Call |
| Secondary button | Start an Inquiry |
| Separator | OR |

Visual: tilted red poster band — see [studio-kitchen-visual-direction.md](./studio-kitchen-visual-direction.md)

---

## Typography (visual)

| Role | Font | Usage |
|------|------|--------|
| Display | Fredoka 600–700 | Headlines, buttons, poster caps |
| Script | Caveat 700 | Poster script only |
| Body | Inter 400–500 | Subheads, cards, forms |
| Kicker | JetBrains Mono 500 | Section labels |

---

## Kitchen vs plain labels

| Use kitchen-themed | Use plain |
|--------------------|-----------|
| Hero CTAs (Place your order · See what's cooking) | Book a Call |
| Section kickers (From the pass, The recipe) | Start an Inquiry |
| Work/process headings | Submit / Send project brief |
| 404 recovery (See what's cooking) | View Services |
| Newsletter (Get the recipe) | Book a 15-min call (Calendly sublabel) |

**Avoid:** puns on tool names, pricing, or legal text.

---

## Trust & supporting lines

| Location | Copy |
|----------|------|
| Trust strip (homepage) | Block A: I cook · FAST FOOD · Dishes delivered in days not months. Block B: Agency-level · DISHES · at takeaway prices. Footnote: Specialist in portfolios and landing pages only. |
| Contact promise | I reply within 24 hours. |
| Calendly sublabel | 15-minute discovery call — no pressure, just clarity. |
| Form submit button | Send project brief |
| Newsletter heading | Get the recipe |
| Newsletter subtext | Occasional updates on design, tools, and new case studies. |
| Footer tagline | Landing pages and portfolio websites — designed to stand out and convert. |

---

## Audience-specific subheadline variants (optional)

Swap subheadline by traffic source; keep headline stable.

| Audience | Subheadline variant |
|----------|---------------------|
| Creative freelancers | Portfolio websites that make art directors stop scrolling — and hire you. |
| SaaS / product founders | Landing pages that explain your product in seconds and turn visitors into demo requests. |
| Local / UK businesses | Modern websites for London brands who need a premium first impression and fast delivery. |

---

## Risk mitigations

| Risk | Mitigation |
|------|------------|
| “Mouth-watering” feels gimmicky to B2B | Literal subheadline; professional SEO titles |
| Kitchen CTAs obscure intent | Plain Calendly label; subhead explains offer |
| Food business confusion | Subhead always says *portfolio websites and landing pages* |
| Over-punning | Glossary + plain rules on tools/pricing |

---

## Related docs

| Doc | Role |
|-----|------|
| [cta-messaging-matrix.md](./cta-messaging-matrix.md) | Full CTA + page hero blocks |
| [homepage-content-hierarchy.md](./homepage-content-hierarchy.md) | Section schemas + hero fields |
| [homepage-conversion-flow.md](./homepage-conversion-flow.md) | Funnel + 3-second rule |
| [page-briefs.md](./page-briefs.md) | Per-page content requirements |
| [seo-page-map.md](./seo-page-map.md) | Literal H1/meta (no slang) |
| [studio-kitchen-visual-direction.md](./studio-kitchen-visual-direction.md) | Visual north star |

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Studio Kitchen visual + section copy: My dishes, My ingredients, reservation poster |
