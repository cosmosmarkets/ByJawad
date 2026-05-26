# Steak.studio ↔ Homepage Wireframe v2 — Side-by-Side Audit

**Date:** May 2026  
**Reference:** [`public/wave1/steak/_source.html`](../../public/wave1/steak/_source.html) · [`public/wave1/steak/index.html`](../../public/wave1/steak/index.html)  
**Target:** [`homepage-wireframe-v2.html`](./homepage-wireframe-v2.html)  
**Extract script:** `node scripts/steak-audit-extract.mjs`

**Review viewports:** 375px · 900px · 1200px  
**Serve:** `npx --yes serve "." -p 3000`

| Frame | URL |
|-------|-----|
| Jawad v2 | `http://localhost:3000/docs/wireframes-v2/homepage-wireframe-v2.html` |
| Steak | `http://localhost:3000/public/wave1/steak/index.html` |

---

## Section map (Steak → Studio Kitchen)

| Steak block | Jawad section | Surface after fix |
|-------------|---------------|-------------------|
| Red hero · centered mega type · script + caps | `#hero` | `heat.red` + `.red-grid` |
| Light impact / intro strip | `#trust` | `paper.cream` |
| Selected services · glass cards on dark | `#why-order` | `surface.ink` |
| Proof / case cards on dark | `#work` | `surface.ink` · horizontal rail |
| Process / service steps on light | `#process` | `paper.cream` |
| Tool / logo density | `#tools` | `paper.cream-dark` |
| Reservation poster + OR | `#cta` | `heat.red` + `.poster` |
| Footer | `#footer` | `paper.cream` |

---

## Extract signals (from `_source.html`)

| Signal | Count / value | Jawad mapping |
|--------|---------------|---------------|
| Hero red | `rgb(245, 35, 35)` | `#E63946` (`--heat-red`) |
| Mustard accent | `rgb(245, 217, 57)` | `#F4B942` (`--accent-mustard`) |
| Dark band | `rgb(18, 18, 18)` · `rgb(38, 38, 38)` | `--surface-ink` `#121212` |
| Glass cards | `rgba(255, 255, 255, 0.06)` ×24 | `.card--on-ink` |
| Hero display | 100–130px Framer | `clamp(3rem, 12vw, 7rem)` Fredoka |
| Nav CTA | “Chat with us” white pill | “Chat to the chef” → `/order` |

---

## Pass / gap / skip

| Category | Steak | Jawad v2 (before this pass) | Status |
|----------|-------|----------------------------|--------|
| Hero layout | Centered poster, tilted type | Centered poster, Caveat accent | **Pass** (polish P1) |
| Hero scale | ~120px caps | `clamp(3rem, 12vw, 7rem)` | **Close** |
| Hero edge | White zigzag | White sawtooth → trust | **Fixed** (Phase 1) |
| Hero CTAs | Single bottom pill | Dual mustard + white | **By design** (locked copy) |
| Nav CTA | Chat with us | Book a Call | **Fixed** → Chat to the chef |
| `#why-order` | Dark services grid | Missing | **Fixed** |
| `#work` | Dark horizontal proof | Cream 2-col | **Fixed** → ink rail |
| `#trust` | Display impact · dual poster blocks | Plain centered | **Pass** (dual-block layout) |
| `#process` | White mini-cards | Step cards | **Pass** |
| `#tools` | Dense grid | 4×2 on cream-dark | **Pass** |
| `#cta` | Tilted poster | Implemented | **Pass** |
| Lenis / Framer | Full runtime | None | **Skip** |
| Steak fonts | Obviously / Meie | Fredoka / Caveat / Inter | **Skip** |
| Crypto / X embeds | Present | Absent | **Skip** |

---

## Prioritized fix list

### P0 (exit checklist blockers) — implemented in this pass

- [x] Nav + drawer: **Chat to the chef** → `/order`
- [x] Add `#why-order` with three whole-tile links + bridge on **ink**
- [x] Rebuild `#work` on **ink** with horizontal rail (Option B copy)
- [x] Ink tokens in `_chrome.css`

### P1 (visual parity)

- [x] Hero: flex column rhythm, sparkle decor, CTA spacing toward viewport bottom
- [x] Trust: dual poster blocks (FAST FOOD / DISHES · takeaway prices)
- [x] Spec footer: correct scroll order + surface rhythm

### P2 (Stage 0c)

- [x] Screenshot pairs documented (run locally: `npx --yes serve "." -p 3000` → compare 4 frames × 375/900/1200)
- [ ] Work card secondary image hover
- [ ] GSAP / Lenis scroll scenes
- [ ] Nav zigzag color tweak on scroll (optional)

---

## Page rhythm (locked)

```
nav
hero          [red grid]
trust         [cream]
why-order     [ink]
work          [ink]
process       [cream]
tools         [cream-dark]
cta           [red grid + poster]
footer        [cream]
```

---

## Screenshots (manual)

After `npx --yes serve "." -p 3000`, capture at 375 / 900 / 1200:

1. Hero — Steak vs v2  
2. First ink band (`#why-order`) — Steak services vs v2 tiles  
3. `#work` rail — Steak proof vs v2  
4. `#cta` poster — both  

Save as `temporary screenshots/steak-audit-{viewport}-{frame}.png` (optional; not committed).

---

## Changelog

| Date | Note |
|------|------|
| May 2026 | Initial audit; P0 fixes applied to `homepage-wireframe-v2.html` + `_chrome.css` |
| May 2026 | Wave 1 pass: nav order, pantry tools, work thumb emphasis, trust scale tune; screenshot audit run locally at 375/900/1200 |
