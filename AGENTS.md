# AGENTS.md — By Jawad

Persistent context for AI agents working in this repository.

## What we are building

**Jawad Jalal's portfolio and lead-generation site** for a specialist who designs and builds **landing pages and portfolio websites** for creatives, SaaS founders, and brands.

| Attribute | Value |
|-----------|-------|
| Brand direction | **Studio Kitchen** — warm kitchen metaphor · Steak-inspired chunky UI |
| Visual system | **Studio Kitchen** — cream body · red hero/poster · mustard CTAs · Fredoka + Caveat |
| Business goal | Convert visitors into **booked calls** or **project inquiries** |
| 3-second emotion | *Clear, confident, easy to work with.* |

**Positioning (locked):** Agency-level output with AI-assisted precision. Jawad only builds portfolios and landing pages — the two highest-stakes pages on the internet.

---

## Current project phase

| Done | Not done yet |
|------|--------------|
| Next.js 14 scaffold pushed to GitHub | Full visual design / UI implementation |
| Studio Kitchen voice + copy framework locked | Tokens wired into Tailwind / `globals.css` |
| Studio Kitchen visual direction + tokens locked | Kitchen hero illustration in `brand_assets/` |
| IA sitemap + page briefs | Wireframes finalized and approved |
| Homepage content hierarchy + v1 wireframe spec | Custom monogram logo file |
| Tier 2 launch strategy locked | Client case studies, testimonials |
| HTML prototypes + token showcase v3 in `docs/` | Production homepage sections beyond scaffold |
| Legacy hero assets (`brand_assets/hero/`) — retired | Kitchen hero art (replaces spaceman) |

**You are pre-build.** The app is a scaffold with placeholder content. Do not invent new sections, copy, or brand colors. Implement from the docs — do not freestyle the product direction.

---

## Source of truth (read before UI work)

Consult these in order when planning or building:

| Priority | Document | Purpose |
|----------|----------|---------|
| 1 | [`docs/voice-and-copy-framework.md`](docs/voice-and-copy-framework.md) | Voice, metaphor glossary, locked copy, hero rotation |
| 2 | [`docs/studio-kitchen-visual-direction.md`](docs/studio-kitchen-visual-direction.md) | Visual north star — color, type, poster, rhythm |
| 3 | [`docs/homepage-content-hierarchy.md`](docs/homepage-content-hierarchy.md) | Locked homepage sections, copy blocks, schemas |
| 4 | [`docs/cta-messaging-matrix.md`](docs/cta-messaging-matrix.md) | Locked labels and CTA destinations |
| 5 | [`docs/design-token-system.md`](docs/design-token-system.md) | Colors, type, spacing, motion, Tailwind snippet |
| 6 | [`docs/portfolio-component-token-spec.md`](docs/portfolio-component-token-spec.md) | Component → token mapping |
| 7 | [`docs/design-token-showcase-v3.html`](docs/design-token-showcase-v3.html) | Visual token reference v3 |
| 8 | [`docs/studio-kitchen-hero-prototype.html`](docs/studio-kitchen-hero-prototype.html) | Hero layer stack reference |
| 9 | [`docs/ia-sitemap.md`](docs/ia-sitemap.md) | Routes, section maps, global chrome |
| 10 | [`docs/page-briefs.md`](docs/page-briefs.md) | Per-page content requirements |
| 11 | [`docs/homepage-conversion-flow.md`](docs/homepage-conversion-flow.md) | Funnel goals and proof-first rationale |
| — | [`docs/launch-strategy-v1.md`](docs/launch-strategy-v1.md) | v1 constraints: pricing, Option B work, deferred sections |

Supporting: [`docs/seo-page-map.md`](docs/seo-page-map.md) · [`docs/homepage-wireframe-spec.html`](docs/homepage-wireframe-spec.html)

---

## Site map

```
/                           Homepage (The Pitch)
├── /work                   Work index (The Proof)
│   └── /work/[slug]        Case study detail
├── /services               Services (The Offer)
├── /about                  About (The Person)
├── /journal                Journal index (The Authority)
│   └── /journal/[slug]     Article detail
├── /contact                Contact (The Conversion)
└── /404                    Error recovery
```

**Global primary CTA:** Book a Call → `/contact#book`  
**Global secondary CTA:** Start an Inquiry → `/contact`

---

## Homepage structure (locked — v1 proof-first)

Do not reorder without explicit instruction:

```
nav → hero → trust → work → process → tools → cta → footer
```

**v1 constraints:** Option B work (1 live project + coming soon) · No testimonials · Trust strip is copy-only · Tools in `#tools` section.

Services snapshot is **not** on the homepage. Use a text bridge: `View Services` → `/services`.

**Starter pricing:** Portfolio £500–1k · Landing pages £1k–3k (see `docs/launch-strategy-v1.md`).

**Logo:** Interim wordmark "Jawad" until monogram ready.

**Locked hero copy:**

| Element | Copy |
|---------|------|
| Kicker | Portfolio & landing page studio |
| Headline | The kitchen for mouth-watering **[portfolios \| landing pages]** (suffix rotates) |
| Subheadline | I design and build portfolio websites and landing pages that look incredible and convert — for creatives, founders, and brands. |
| Primary CTA | Place your order → `/contact` |
| Secondary CTA | See what's cooking → `/work` |

---

## Design system rules (Studio Kitchen — locked)

### Color (three tiers)
- **Paper (~70%):** `paper.cream` `#FCEAD4` · `surface.card` `#FFFFFF` — body, cards
- **Ink (~25%):** `ink.black` `#000000` · `ink.muted` `#5C4A3A` — type, borders, shadows
- **Heat (~5%):** `heat.red` `#E63946` · `accent.mustard` `#F4B942` — hero, poster, primary CTA on red only
- No legacy spectral cyan, flare gold, halftone, or spaceman assets

### Typography
- **Display / headings / CTAs:** Fredoka
- **Script (poster only):** Caveat
- **Body:** Inter
- **Kickers / metadata:** JetBrains Mono in `ink.muted` — never colored on cream

### Section labels (locked)
- **My dishes** (`#work`) · **My ingredients** (`#tools`, kicker The pantry)
- Final CTA: reservation poster — *Ready to order?* + **PLACE YOUR ORDER**

### Motion
- Animate **only** `transform` and `opacity`
- Never use `transition-all`
- Respect `prefers-reduced-motion`

### CTAs on red hero
- Primary: mustard `#F4B942` · black label · 3px black border · sticker shadow
- Secondary: white pill · black border

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion, GSAP + ScrollTrigger, Lenis |
| Content | MDX in `content/journal/` |
| Backend | Supabase, Resend (contact) |

### Dev commands

```bash
npm install
cp .env.example .env.local   # fill keys before contact/supabase features
npm run dev                  # http://localhost:3000
```

### Key directories

```
app/              Routes and pages
components/       ui, layout, sections, animations, forms, 3d
lib/              utils, supabase, validations, site config
content/          MDX journal posts
brand_assets/     Real brand images (check here before placeholders)
docs/             Strategy, tokens, copy, wireframes, prototypes
prototypes/       Local HTML experiments (not deployed)
scripts/          Asset tooling (e.g. export-hero-assets.mjs)
```

---

## Brand assets

Check `brand_assets/` before using placeholders.

**Hero (legacy — pending Studio Kitchen art):** Legacy spaceman assets in `brand_assets/hero/` are retired for copy direction; new kitchen illustration TBD.

**Still needed for launch:** logo/monogram, tool logos (6–8), project screenshots, testimonial photos, case study content.

---

## Implementation gaps (do not ignore)

The scaffold predates the token system. When implementing design:

1. Replace generic shadcn violet `--primary` in `app/globals.css` with Studio Kitchen tokens from `docs/design-token-system.md`
2. Extend `tailwind.config.ts` per the Tailwind snippet in the design token doc
3. Wire Fredoka, Caveat, Inter, JetBrains Mono in `app/layout.tsx`
4. Update `lib/site.ts` copy to match locked messaging (currently generic placeholder)
5. Build homepage sections per `docs/homepage-content-hierarchy.md`, not the current placeholder in `app/page.tsx`

---

## Agent workflow

### Before wireframing
- Read voice framework + visual direction + homepage content hierarchy + conversion flow

### Before building UI
- Read design token system + component token spec + showcase v3
- Match [`docs/studio-kitchen-hero-prototype.html`](docs/studio-kitchen-hero-prototype.html) for hero behavior
- Use locked copy from voice doc / CTA matrix — do not rewrite headlines

### Before adding sections or pages
- Check IA sitemap and page briefs — if it's not listed, don't add it

### Scope discipline
- Minimize diff; match existing code conventions in `components/` and `app/`
- Do not commit unless explicitly asked
- Do not create new markdown docs unless asked

---

## Decision filters (apply to every design choice)

1. Does this feel like 1% craft?
2. Does it support conversion (CTA hierarchy readable in 3s)?
3. Would an art director stop scrolling?
4. Does color use follow the three-tier accent budget (paper / ink / heat)?
5. Is it documented in `docs/`?

If any answer is no, stop and consult the relevant doc.
