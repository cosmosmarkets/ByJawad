# Homepage Content Hierarchy

**Project:** Jawad Jalal — Portfolio & Landing Page Specialist  
**Page:** `/` (Homepage — The Pitch)  
**Brand:** Cinematic Mission  
**Status:** Locked for wireframing (v1 proof-first · Option B work · no testimonials)  
**Last updated:** May 2026

**Related docs:** [homepage-conversion-flow.md](./homepage-conversion-flow.md) · [page-briefs.md](./page-briefs.md) · [cta-messaging-matrix.md](./cta-messaging-matrix.md) · [homepage-wireframe-spec.html](./homepage-wireframe-spec.html) · [launch-strategy-v1.md](./launch-strategy-v1.md)

---

## Locked page structure

Proof-first order is the default for wireframes and build. Do not reorder without an active ORD1 A/B test.

| Order | Section name   | Section ID        | Anchor   | Priority   |
|-------|----------------|-------------------|----------|------------|
| 0     | Navigation     | `nav`             | —        | Must-have  |
| 1     | Hero           | `hero`            | `#hero`  | Must-have  |
| 2     | Trust bar      | `trust`           | `#trust` | Must-have  |
| 3     | Selected work  | `work`            | `#work`  | Must-have  |
| 4     | Process        | `process`         | `#process` | Must-have |
| 5     | Tools showcase | `tools`           | `#tools` | Must-have  |
| 6     | Final CTA      | `cta`             | `#cta`   | Must-have  |
| 7     | Footer         | `footer`          | —        | Must-have  |

**Not on homepage (v1):** Full services snapshot section · Testimonials (deferred v2). Use a text bridge after process: `View Services` → `/services`.

**Funnel sequence for analytics:**

```
hero → trust → work → process → tools → cta
```

---

## Section map (wireframe annotations)

### SECTION 1: NAVIGATION

| Attribute | Spec |
|-----------|------|
| **Wireframe** | `Top sticky nav (full width): [Logo] [Work] [About] [Services] [Journal] [Contact] [Book a Call]` |
| **Nav links** | Work · About · Services · Journal · Contact |
| **Logo** | Left-aligned → `/` |
| **Scroll** | Transparent over hero → solid/blurred on scroll; slight height shrink; `Book a Call` always visible |
| **Mobile** | Hamburger (top-right); sticky `Book a Call` in header pill or top of drawer |
| **Purpose** | Orientation + persistent conversion access |
| **Priority** | Must-have |
| **Mobile stack** | Drawer: CTA row → links (vertical) → optional close |
| **Exit rate** | Low (nav); risk if CTA hidden or too many competing actions |

#### Copy blocks

| Element | Copy | Link |
|---------|------|------|
| Logo label | Jawad (interim wordmark; monogram TBD) | `/` |
| Nav: Work | Work | `/work` |
| Nav: About | About | `/about` |
| Nav: Services | Services | `/services` |
| Nav: Journal | Journal | `/journal` |
| Nav: Contact | Contact | `/contact` |
| Header CTA | Book a Call | `/contact#book` |

#### Component fields

| Field | Type | Required |
|-------|------|----------|
| `logoSrc` | image/svg | yes |
| `logoAlt` | string | yes |
| `navItems[]` | `{ label, href }` | yes (5) |
| `ctaLabel` | string | yes |
| `ctaHref` | string | yes |
| `isScrolled` | boolean (UI state) | — |

---

### SECTION 2: HERO (`#hero`)

**Interaction audit:** [homepage-hero-interaction-audit.md](./homepage-hero-interaction-audit.md)  
**Prototype:** [hero-prototype.html](./hero-prototype.html)

| Attribute | Spec |
|-----------|------|
| **Wireframe** | `Immersive full-viewport hero — layered (see stack below)` |
| **Layout model** | Immersive full-bleed; spaceman **right** (halftone poster); **left column** = headline grab + copy + CTAs |
| **Visual hierarchy** | 1) Headline (grab anchor, left) 2) Subheadline + audience 3) Dual CTAs — kicker above headline |
| **Headline placement** | **Upper-left / center-left** (where spaceman hand reaches); left-aligned desktop; centered mobile |
| **CTA placement** | Same left column, below subheadline (two-button row) |
| **Background** | **L0** `hero.image` halftone poster (now) · optional `hero.video` Phase 2 · **L1** orbit · **L2** light scrim |
| **Headline interaction** | Subtle pull toward hand (right); Ken Burns on poster until video ships |
| **Social proof** | Optional one-line under CTAs; full trust in `#trust` |
| **Purpose** | 3-second clarity: what you do, who it's for, what to do next — halftone is visual layer only |
| **Priority** | Must-have (poster + copy); orbit = nice-to-have v1; video loop = Phase 2 |
| **Mobile stack** | `spaceman-grab-mobile.webp` → kicker → headline → subhead → audience → CTAs; orbit off |
| **Exit rate** | **High** — bounce if service type unclear or headline low contrast on halftone |

#### Hero layer stack (z-index)

| Layer | ID | Content |
|-------|-----|---------|
| L0 | `hero.image` | `spaceman-grab-poster.webp` full bleed, `object-position: right` |
| L0b | `hero.video` | Phase 2: same composition loop; poster = reduced-motion fallback |
| L1 | `hero.orbitScene` | Solar orbit in **left void** (Spline/WebGL); optional |
| L2 | `hero.cosmos` | Light left scrim + grain (only if contrast QA requires) |
| L3 | `hero.content` | Left column: kicker → **headline** → subhead → audience → CTAs |

#### Reduced motion (`prefers-reduced-motion`)

- Static `spaceman-grab-poster.webp` only (no Ken Burns)
- Static headline; no orbit drag / parallax
- Keep all copy and CTAs identical

#### Copy blocks (locked)

| Element | Copy |
|---------|------|
| Kicker | Orbit-ready web design |
| Headline | Landing pages. Out of this world. |
| Subheadline | I design and build high-converting landing pages, portfolio websites, and modern web experiences for brands and creators. |
| Audience chips | Creative freelancers · SaaS founders · Brands & agencies |
| Primary CTA | Launch Your Website |
| Secondary CTA | Explore Missions |
| Optional trust line | Trusted tools. Proven process. |

| CTA | Destination |
|-----|-------------|
| Launch Your Website | `/contact` |
| Explore Missions | `/work` |

#### Component fields

| Field | Type | Required |
|-------|------|----------|
| `kicker` | string | yes |
| `headline` | string | yes |
| `subheadline` | string | yes |
| `audience[]` | string[] | yes (3) |
| `primaryCta` | `{ label, href }` | yes |
| `secondaryCta` | `{ label, href }` | yes |
| `heroImage` | `{ src, srcset, alt }` | yes |
| `heroImageMobile` | `{ src, alt }` | yes |
| `heroVideoDesktop` | video/webm | Phase 2 |
| `heroVideoMobile` | video/webm | Phase 2 |
| `heroOrbitScene` | Spline embed URL or `.splinecode` | no |
| `headlineGrabAnchor` | left column; tune per breakpoint | yes |
| `trustLine` | string | no |

#### Hero assets (`brand_assets/hero/`)

| File | Use |
|------|-----|
| `spaceman-grab-poster.webp` | Desktop L0 (1×) |
| `spaceman-grab-poster@2x.webp` | Retina |
| `spaceman-grab-poster.jpg` | Fallback |
| `spaceman-grab-mobile.webp` | Mobile crop |
| `spaceman-grab-headline.webm` | Phase 2 loop; hand reaches left |
| `solar-orbit.splinecode` or embed | Optional orbit sphere (see audit) |

---

### SECTION 3: TRUST / CREDIBILITY STRIP (`#trust`)

| Attribute | Spec |
|-----------|------|
| **Wireframe** | `Thin copy-only band — no logos (logos live in #tools)` |
| **Credibility** | Positioning lines only — no project count until real stats exist |
| **Placement** | Immediately after hero |
| **Format** | Centered text, single or dual line |
| **Purpose** | Instant specialist positioning before work evaluation |
| **Priority** | Must-have |
| **Mobile stack** | Same copy, centered |
| **Exit rate** | Low — passive scan |

#### Copy blocks (locked v1)

| Element | Copy |
|---------|------|
| Primary line | Agency-level craft. Days-not-months delivery. |
| Supporting line | Specialist in portfolios and landing pages only. |

**No CTA** in this section. **No logo row** in v1.

#### Component fields

| Field | Type | Required |
|-------|------|----------|
| `primaryLine` | string | yes |
| `supportingLine` | string | yes |

---

### SECTION 4: SELECTED WORK (`#work`) — Option B

| Attribute | Spec |
|-----------|------|
| **Wireframe** | `1 live project card + coming-soon panel (desktop side-by-side; mobile stacked)` |
| **Count** | 1 live project at v1 launch |
| **Layout** | ~60% featured card + coming-soon panel desktop; single column mobile |
| **Card depth** | Thumbnail + title + type tag + one-line description |
| **Visual** | Real screenshot for By Jawad; coming-soon panel is text-only |
| **Interaction** | Full card clickable on live project; coming-soon is non-clickable |
| **Purpose** | Honest proof (this site) without faking client work |
| **Priority** | Must-have |
| **Mobile stack** | Heading → live card → coming-soon panel → Explore work link |
| **Exit rate** | **Medium-high** — expand grid when client case studies ship |

#### Copy blocks

| Element | Copy |
|---------|------|
| Section kicker | Mission log |
| Section heading | Featured missions |
| Live card title | By Jawad |
| Live card line | The site you're on — halftone, monochrome, conversion-first |
| Coming soon heading | More missions launching soon |
| Coming soon subline | Case studies added as projects ship. |
| Card CTA | View project |
| Section CTA | Explore work |

#### Project card schema

| Field | Type | Example |
|-------|------|---------|
| `slug` | string | `by-jawad` |
| `status` | enum | `live` \| `coming-soon` |
| `thumbnail` | image | hero shot |
| `title` | string | By Jawad |
| `typeTag` | enum | `Portfolio` \| `Landing page` \| `SaaS` \| `Brand` |
| `resultLine` | string | The site you're on — halftone, monochrome, conversion-first |
| `href` | string | `/work/by-jawad` |
| `position` | number | 1 |

#### v1 projects (locked)

| # | Title | Type | Status | Result line |
|---|-------|------|--------|-------------|
| 1 | By Jawad | Portfolio | live | The site you're on — halftone, monochrome, conversion-first |
| — | More missions launching soon | — | coming-soon | Case studies added as projects ship. |

| CTA | Destination |
|-----|-------------|
| View project (live card) | `/work/by-jawad` |
| Explore work | `/work` |

---

### SECTION 5: PROCESS (`#process`)

| Attribute | Spec |
|-----------|------|
| **Wireframe** | `5-step strip with orbit connector; horizontal desktop, vertical mobile` |
| **Steps** | 5 (minimum 3 if space constrained) |
| **Layout** | Timeline + cards hybrid |
| **Depth** | Icon + title + 1–2 sentence description (no accordion on homepage) |
| **Purpose** | Reduce delivery uncertainty for non-clickers |
| **Priority** | Must-have |
| **Mobile stack** | Vertical steps with connector line |
| **Exit rate** | **Medium** — abandon if timeline feels unrealistic |

#### Copy blocks

| Element | Copy |
|---------|------|
| Section heading | From brief to launch in 5 days |
| Section CTA | See full process |

| Step | Title | Description (wireframe placeholder) |
|------|-------|-------------------------------------|
| 1 | Day 1 — Discovery & strategy | Align on goals, audience, and conversion targets. |
| 2 | Day 2 — Wireframe & prototype | Interactive structure before visual polish. |
| 3 | Day 3 — Visual design & assets | Brand-aligned UI, typography, and imagery. |
| 4 | Day 4 — Build & responsive polish | Production build, motion, and device QA. |
| 5 | Day 5 — QA, launch & handoff | Final checks, deploy, and handover docs. |

| CTA | Destination |
|-----|-------------|
| See full process | `/services#process` |

#### Step card schema

| Field | Type | Required |
|-------|------|----------|
| `day` | string | yes |
| `title` | string | yes |
| `description` | string | yes (max ~120 chars) |
| `icon` | svg/component | yes |

---

### SECTION 6: TOOLS SHOWCASE (`#tools`)

| Attribute | Spec |
|-----------|------|
| **Wireframe** | `Section header + 8 tool cards (4×2 desktop, 2×4 mobile)` |
| **Count** | 8 tools (locked list) |
| **Layout** | Grid; each card = logo + name + one-line role |
| **Format** | Grayscale logos; mono labels (`font.mono`) |
| **Purpose** | Technical credibility for scrollers who skip work section |
| **Priority** | Must-have |
| **Mobile stack** | 2-column grid |
| **Exit rate** | Low — passive scan |

#### Copy blocks (locked)

| Element | Copy |
|---------|------|
| Kicker | Mission stack |
| Section heading | Tools I build with |
| Subheadline | AI-assisted precision — human-led strategy and craft. |

#### Tool list (locked v1)

| Tool | Role line |
|------|-----------|
| Cursor | AI-native development |
| Claude | Strategy & copy |
| Figma | UI design |
| Next.js | Production build |
| Tailwind CSS | Design system |
| Spline | 3D accents |
| GSAP | Scroll motion |
| Supabase | Backend & forms |

**No CTA** in this section.

#### Tool card schema

| Field | Type | Required |
|-------|------|----------|
| `name` | string | yes |
| `roleLine` | string | yes |
| `logoSrc` | image/svg | yes |
| `logoAlt` | string | yes |

---

### SECTION 7: FINAL CTA (`#cta`)

| Attribute | Spec |
|-----------|------|
| **Wireframe** | `Full-width contrasting band: headline + subheadline + 2 CTAs` |
| **Closing argument** | Ready for new portfolio or landing page + 24h reply promise |
| **Layout** | High-contrast background (rhythm break) |
| **CTAs** | Book a Call (primary) · Start an Inquiry (secondary) |
| **Purpose** | Last-chance conversion for scroll-without-click path |
| **Priority** | Must-have |
| **Mobile stack** | Centered copy → full-width buttons (stacked) |
| **Exit rate** | Low if upstream sections landed; higher if trust weak |

#### Copy blocks (locked)

| Element | Copy |
|---------|------|
| Headline | Ready for your new portfolio or landing page? |
| Subheadline | Tell me about your project — I'll reply within 24 hours. |
| Primary CTA | Book a Call |
| Secondary CTA | Start an Inquiry |

| CTA | Destination |
|-----|-------------|
| Book a Call | `/contact#book` |
| Start an Inquiry | `/contact` (form anchor) |

---

### SECTION 8: FOOTER

| Attribute | Spec |
|-----------|------|
| **Wireframe** | `Tagline + CTAs \| 4 columns \| newsletter \| social icons \| legal` |
| **Columns** | Work · Services · Journal · Connect (About + Contact in Connect) |
| **Newsletter** | Minimal: email + compact CTA |
| **Social** | Icon row (LinkedIn, email; Discord optional) |
| **Purpose** | Recovery nav, secondary conversion, credibility |
| **Priority** | Must-have (newsletter = nice-to-have if scope tight) |
| **Mobile stack** | CTAs → accordion/stacked columns → newsletter → social → legal |
| **Exit rate** | Moderate (natural session end); still converts via CTAs |

#### Copy blocks

| Element | Copy |
|---------|------|
| Tagline | Landing pages and portfolio websites — designed to stand out and convert. |
| Primary CTA | Book a Call |
| Secondary CTA | Start an Inquiry |
| Newsletter heading | Stay in orbit |
| Newsletter subtext | Occasional updates on web design, tools, and new case studies. |
| Newsletter button | Subscribe (or Join) |
| Legal | © 2026 Jawad Jalal · London, UK |

#### Footer column links

| Column | Links |
|--------|-------|
| Work | Work index → `/work` |
| Services | Services → `/services` |
| Journal | Journal → `/journal` |
| Connect | About → `/about` · Contact → `/contact` · Email |

#### Component fields

| Field | Type | Required |
|-------|------|----------|
| `tagline` | string | yes |
| `columns[]` | `{ title, links[] }` | yes (4) |
| `newsletter` | `{ heading, subtext, placeholder }` | no |
| `social[]` | `{ platform, href, icon }` | yes |
| `legal` | string | yes |

---

## Services bridge (not a full section)

Place after `#process`:

| Element | Copy | Link |
|---------|------|------|
| Inline link | View Services | `/services` |

---

## Exit-risk heatmap (wireframe review)

| Zone | Risk level | Typical drop-off cause |
|------|------------|------------------------|
| Hero | High | Unclear offer or wrong audience |
| Trust | Low | — |
| Selected work | Medium-high | Weak thumbnails / no outcomes |
| Process | Medium | Timeline feels unrealistic |
| Tools | Low | — |
| Final CTA | Low | Upstream trust failure |
| Footer | Moderate | Natural exit |

---

## Wireframe handoff checklist

- [x] Proof-first section order locked
- [x] Section IDs: `#hero`, `#trust`, `#work`, `#process`, `#tools`, `#cta`
- [x] Copy blocks per section
- [x] Card/field schemas for work (Option B), process, tools
- [x] Desktop + mobile frames → [homepage-wireframe-spec.html](./homepage-wireframe-spec.html)
- [x] Hero immersive layers + halftone poster (see hero audit)
- [x] `brand_assets/hero/spaceman-grab-poster.webp` + mobile crop
- [ ] Phase 2: `spaceman-grab-headline.webm` Blender loop
- [ ] Optional: embed Spline `hero.orbitScene` in `hero-prototype.html`
- [x] v1 work: By Jawad live + coming-soon panel (Option B)
- [x] Tools section spec + wireframe
- [x] Trust strip: copy-only (no logos, no project count)
- [x] Tier 2: pricing, logo interim, launch strategy doc
- [ ] Phase 2: expand work grid when client case studies exist
- [ ] v2: testimonials section (2+ real quotes)

---

## Deferred v2: Testimonials (`#testimonials`)

Not on homepage for v1 launch. Add when 2+ authentic client quotes exist.

| Attribute | Spec (when enabled) |
|-----------|---------------------|
| **Wireframe** | 1 featured card + 2 supporting cards |
| **Section heading** | What clients say |
| **Placement** | Between `#tools` and `#cta` (re-evaluate funnel) |

---

## Changelog

| Date | Change |
|------|--------|
| May 2026 | Initial hierarchy locked (proof-first) per conversion flow plan |
| May 2026 | v1 update: Option B work, #tools section, testimonials deferred, slim trust |
