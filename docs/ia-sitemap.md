# Information Architecture & Sitemap

**Project:** Jawad Jalal — Portfolio & Landing Page Specialist  
**Direction:** Studio Kitchen (warm kitchen metaphor, service-first copy)  
**Conversion goals:** Book a call · Start an inquiry  
**Last updated:** May 2026

**Copy canonical:** [voice-and-copy-framework.md](./voice-and-copy-framework.md)

---

## Site Objective

Move visitors from **discovery → trust → proof → offer → action** with minimal confusion about what you do: **landing pages, portfolio websites, and modern web design for brands and creators.**

---

## Visual Sitemap

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

---

## Page Registry

| URL | Page name | Role in funnel | Primary CTA | Secondary CTA |
|-----|-----------|---------------|-------------|---------------|
| `/` | Homepage | Pitch + trust + proof teaser | Book a Call | See what's cooking (hero) / View Work |
| `/work` | Work | Proof catalog | View Case Study | Start a Project |
| `/work/[slug]` | Case study | Deep proof | Book a Call | Start an Inquiry |
| `/services` | Services | Offer + qualification | Book a Call | Start an Inquiry |
| `/about` | About | Trust + personality | Work With Me | See what's cooking |
| `/journal` | Journal | SEO + authority | See what's cooking | Book a Call |
| `/journal/[slug]` | Article | Education → conversion | Book a Call | View Services |
| `/contact` | Contact | Conversion | Submit Inquiry / Book a Call | — |
| `/404` | Not found | Recovery | Return home | See what's cooking |

---

## Homepage (`/`) — Section Map

Proof-first order (v1). See [homepage-content-hierarchy.md](./homepage-content-hierarchy.md).

| Order | Section | Purpose | Links to |
|-------|---------|---------|----------|
| 1 | Hero | Who you are, what you do, who it's for, primary CTA | `/contact`, `/work` |
| 2 | Trust strip | Copy-only credibility (no logos) | — |
| 3 | Selected work | Option B: 1 live project + coming soon | `/work`, `/work/by-jawad` |
| 4 | Process | 5-day timeline (visual) | `/services#process` |
| 5 | Tools showcase | Full tool stack grid | — |
| 6 | Final CTA | Ready for new site? | `/contact` |
| 7 | Footer | Nav, newsletter, legal | All main pages |

**Not on homepage v1:** Services snapshot · Testimonials (deferred v2). Bridge: `View Services` → `/services` after process.

**Page goal:** Establish specialist positioning and route to proof or contact within 30 seconds.

---

## Work (`/work`) — Section Map

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Hero | Frame as kitchen intro / proof |
| 2 | Filter or group | By type: Portfolio · Landing page · SaaS · Brand |
| 3 | Project grid | Cards with industry, type, result tag |
| 4 | CTA band | Start a project | `/contact` |

**Page goal:** Prove quality and outcomes; drive case study depth or direct inquiry.

---

## Case Study (`/work/[slug]`) — Required Structure

| Order | Block | Content |
|-------|-------|---------|
| 1 | Hero | Project name, type, one-line result |
| 2 | Overview | Client, timeline, role, live link |
| 3 | The Problem | What wasn't working |
| 4 | My Approach | Strategy, design, build decisions |
| 5 | The Result | Metrics when available; qualitative wins |
| 6 | Gallery / walkthrough | Screenshots, video, before/after |
| 7 | Related projects | 2–3 links | `/work/[slug]` |
| 8 | CTA band | Book a Call + Start an Inquiry | `/contact` |

**Page goal:** Convert proof-consumed visitors into high-intent leads.

---

## Services (`/services`) — Section Map

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Hero | Packages overview |
| 2 | Portfolio package | Inclusions, timeline, price range |
| 3 | Landing page package | Inclusions, timeline, price range |
| 4 | Add-ons | CMS, 3D, animation packages |
| 5 | Process timeline | Same 5-day visual as homepage |
| 6 | FAQ | Scope, revisions, ownership, payment |
| 7 | CTA band | Book + inquiry | `/contact` |

**Page goal:** Self-qualify leads and reduce pre-call ambiguity.

---

## About (`/about`) — Section Map

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Hero | Positioning statement |
| 2 | Story | Origin (father's site, Weld, freelance pivot) |
| 3 | Stack | Tools with short rationale |
| 4 | Process | Vibe-coding workflow |
| 5 | Photo / avatar | Human trust |
| 6 | Personal | Interests outside work |
| 7 | CTA band | Work With Me | `/contact` |

**Page goal:** Emotional trust before conversion.

---

## Journal (`/journal`) — Section Map

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Hero | Authority positioning |
| 2 | Featured post | Latest or pillar content |
| 3 | Article grid | Categories: Process · Case study · Tools · Industry |
| 4 | Newsletter CTA | List signup |
| 5 | CTA band | Explore work / book call |

**Categories (initial):**

- `process` — Design process, workflow
- `case-study` — Deep dives (can mirror `/work` with more narrative)
- `tools` — Reviews, tutorials (Claude, Cursor, Spline, etc.)
- `industry` — Observations, trends

**Page goal:** Organic traffic and funnel to services/contact.

---

## Contact (`/contact`) — Section Map

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Hero | Clear conversion framing |
| 2 | Calendly embed | 15-min discovery call |
| 3 | Inquiry form | Name, email, project type, budget, timeline, message |
| 4 | Response promise | Reply within 24 hours |
| 5 | FAQ | Working together, revisions, timeline |
| 6 | Footer | Standard |

**Form fields:**

| Field | Type | Options / notes |
|-------|------|-----------------|
| Name | text | Required |
| Email | email | Required |
| Project type | select | Portfolio website · Landing page · Redesign · Other |
| Budget range | select | Under £2k · £2k–£5k · £5k–£10k · £10k+ · Not sure |
| Timeline | select | ASAP · 1–2 weeks · 1 month · Flexible |
| Message | textarea | Required |

**Page goal:** Maximize call bookings and form submissions.

---

## 404 (`/404`) — Recovery Map

| Element | Action |
|---------|--------|
| On-brand headline | Wrong table — this page isn't on the menu |
| Primary | Return home → `/` |
| Secondary | See what's cooking → `/work` |
| Tertiary | Place your order → `/contact` |
| Quick links | Services, About, Journal |

---

## Global Chrome

### Header (all pages)

- Logo → `/`
- Nav: Work · Services · About · Journal · Contact
- CTA: Book a Call → `/contact#book`

### Footer (all pages)

- Tagline + Book a Call / Start an Inquiry
- Nav columns: Work · Services · About · Journal · Contact
- Newsletter signup
- Social: LinkedIn, Discord (optional), email
- © Jawad Jalal · London, UK

---

## Content Dependencies (Minimum Viable Launch)

| Asset | Minimum for launch |
|-------|-------------------|
| Case studies | 1 live (`/work/by-jawad` — this site); expand as client work ships |
| Testimonials | Deferred v1 (add when 2+ real quotes) |
| Tool logos | 8 for `#tools` section (Cursor, Claude, Figma, Next.js, Tailwind, Spline, GSAP, Supabase) |
| Service packages | Copy + price ranges: Portfolio £500–1k · Landing pages £1k–3k |
| Calendly | 15-min event configured |
| Journal | 1–2 seed posts (optional for v1) |
| Logo | Interim wordmark "Jawad" until monogram ready |

---

## Related Documents

- [CTA & Messaging Matrix](./cta-messaging-matrix.md)
- [Page Content Briefs](./page-briefs.md)
- [SEO Page-Keyword Map](./seo-page-map.md)
