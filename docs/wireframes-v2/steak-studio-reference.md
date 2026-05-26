# steak.studio — reference for Studio Kitchen wireframes

**Source:** [https://steak.studio](https://steak.studio) (Framer, scraped May 2026)  
**Companion:** [studio-kitchen-visual-direction.md](../studio-kitchen-visual-direction.md) · [homepage-wireframe-v2.html](./homepage-wireframe-v2.html) (Studio Kitchen IA)

**Exact Framer clone (steak.studio):**

| Artifact | Path |
|----------|------|
| Wireframe duplicate | [homepage-wireframe-v2-steak.html](./homepage-wireframe-v2-steak.html) |
| Preview entry (sibling paths) | [`public/wave1/steak/index.html`](../../public/wave1/steak/index.html) |
| Regenerate wireframe | `node scripts/wave1-build-steak-wireframe.mjs` |

Serve repo root → `http://localhost:PORT/docs/wireframes-v2/homepage-wireframe-v2-steak.html` or `http://localhost:PORT/public/wave1/steak/`

---

## Link inventory

### On-site / in-page

| URL | Role |
|-----|------|
| `./` | Home |
| `./#footer` | Hero “place your order” → footer CTA band |
| `https://www.steak.studio/` | Canonical |

### Conversion

| URL | Role |
|-----|------|
| `https://calendly.com/louroundd/30min` | “book a call” |
| `https://t.me/Steak_studio` | “Chat with us” |
| `https://t.me/A1_research` | Footer Telegram |

### Partner / content

| URL | Role |
|-----|------|
| `https://a1research.io` | A1 Research mention |
| `https://marvelous-strategy-089128.framer.app/blog/hyperliquid-the-everything-exchange-valuation` | Blog “See post” |

### Social (X) — profiles

`https://x.com/Steak_studio` · `https://x.com/a1research__` · `https://x.com/Moomsxxx` · `https://x.com/0xavarek` · `https://x.com/zerokn0wledge_` · `https://x.com/Louround_` · `https://x.com/anoma` · `https://x.com/eigen_da` · `https://x.com/gaib_ai` · `https://x.com/iota` · `https://x.com/Mira_Network` · `https://x.com/myshell_ai` · `https://x.com/NEARProtocol` · `https://x.com/NRNAgents` · `https://x.com/plumenetwork` · `https://x.com/SentientAGI`

### Social (X) — post permalinks

- `https://x.com/Moomsxxx/status/1912895729053425977`
- `https://x.com/0xavarek/status/1911753659006009632`
- `https://x.com/zerokn0wledge_/status/1947996733478436870`
- `https://x.com/Louround_/status/1934157584463769764`
- `https://x.com/a1research__/status/1949881483851936148`
- `https://x.com/zerokn0wledge_/status/1949784028649030018`

### Build / assets (not user navigation)

`fonts.gstatic.com` · `framer.com/edit/init.mjs` · `framerusercontent.com/*` · `unpkg.com/lenis@1.3.7/dist/lenis.css`

---

## Take / skip (Studio Kitchen)

| Take | Skip |
|------|------|
| Centered mega type + script kicker on red | Dark default canvas |
| Mustard + white pill CTAs on red | Neon green script accents |
| Hero primary scrolls to reservation poster (`#cta`) | Crypto/agency copy tone |
| Service-style card grid (→ `#why-order`) | Live X/Telegram embeds |
| Display-scale proof strip (→ `#trust`, copy-only) | Client logo wall |
| Horizontal proof rail pattern (→ `#work` scaffold) | Framer/Lenis runtime in wireframe |
| White mini-cards for steps (→ `#process`) | Fake metrics / vanity numbers |
| Tilted footer poster + dual CTA + OR | Sticker-bomb backgrounds |
| Fixed nav + single right pill | Halftone / Mission Control legacy |

---

## Visual notes (for wireframe CSS)

| Element | steak.studio cue | Studio Kitchen token |
|---------|------------------|----------------------|
| Hero display | Centered stacked mega type, tight leading, optional tilt | Fredoka `clamp(3rem, 12vw, 7rem)` · Caveat on *mouth-watering* · **no illustration** |
| Pills | 3px black stroke, offset shadow, full radius | `.btn-mustard` / `.btn-white` |
| Cards | White fill, 2–3px border, hover lift | `--surface-card`, `--shadow-sticker` |
| Poster band | Script headline + caps shout + OR row | Caveat + Fredoka on `--heat-red` |
| Section rhythm | Full-bleed bands, editorial spacing | `.section` 48/96px |

---

## Section mapping (homepage v2)

| steak.studio | Studio Kitchen section |
|--------------|------------------------|
| Hero + place your order → footer | `#hero` → `#cta` |
| Selected services grid | `#why-order` |
| Founders’ impact strip | `#trust` (no numeric stats in v1) |
| Horizontal “See post” cards | `#work` (`.work-rail`) |
| Process / service labels | `#process` (course cards) |
| Tool/logo density | `#tools` (grouped pantry) |
| Ready to order poster | `#cta` + `id="footer"` anchor |
