---
name: By Jawad — Cinematic Mission
projectId: '13841983534348291374'
colors:
  ink-white: '#FAFAFA'
  ink-black: '#000000'
  surface-base: '#000000'
  surface-elevated: '#0A0A0A'
  surface-floating: '#141414'
  surface-overlay: 'rgba(0, 0, 0, 0.72)'
  text-primary: '#FAFAFA'
  text-secondary: '#A3A3A3'
  text-muted: '#737373'
  text-inverse: '#000000'
  border-subtle: '#262626'
  border-default: '#404040'
  neutral-50: '#FAFAFA'
  neutral-100: '#F5F5F5'
  neutral-200: '#E5E5E5'
  neutral-300: '#D4D4D4'
  neutral-400: '#A3A3A3'
  neutral-500: '#737373'
  neutral-600: '#525252'
  neutral-700: '#404040'
  neutral-800: '#262626'
  neutral-900: '#171717'
  neutral-950: '#0A0A0A'
  success-500: '#34D399'
  warning-500: '#FBBF24'
  error-500: '#F87171'
  info-500: '#60A5FA'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: clamp(3rem, 8vw, 6rem)
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: '-0.025em'
  h1:
    fontFamily: Space Grotesk
    fontSize: clamp(2.5rem, 6vw, 4.5rem)
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: '-0.02em'
  h2:
    fontFamily: Space Grotesk
    fontSize: clamp(2rem, 4vw, 3rem)
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: '-0.015em'
  h3:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.15'
    letterSpacing: '-0.01em'
  h4:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  small:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0.02em'
  kicker-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0.05em'
    textTransform: uppercase
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  full: 999px
spacing:
  unit: 4px
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-5: 20px
  space-6: 24px
  space-8: 32px
  space-10: 40px
  space-12: 48px
  space-16: 64px
  space-20: 80px
  space-24: 96px
  section-y-desktop: 120px
  section-y-tablet: 80px
  section-y-mobile: 48px
  content-max: 1280px
  grid-gutter: 24px
  grid-columns: 12
shadows:
  shadow-1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)'
  shadow-2: '0 4px 6px rgba(0,0,0,0.14), 0 2px 4px rgba(0,0,0,0.1)'
  shadow-3: '0 10px 15px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.12)'
  shadow-4: '0 20px 25px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.14)'
motion:
  easing-default: 'cubic-bezier(0.4, 0, 0.2, 1)'
  easing-enter: 'cubic-bezier(0, 0, 0.2, 1)'
  easing-exit: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-75: 75ms
  duration-150: 150ms
  duration-200: 200ms
  duration-300: 300ms
  duration-500: 500ms
effects:
  grain-opacity: 0.03
  halftone-pitch: 6px
  halftone-opacity: 0.1
  halftone-hero-pitch: 8px
  halftone-hero-opacity: 0.12
  blur-nav: 12px
  blur-overlay: 20px
  surface-overlay: 'rgba(0, 0, 0, 0.72)'
---

# Design System: By Jawad — Cinematic Mission

**Owner:** Jawad Jalal · Portfolio & Landing Page Specialist  
**Brand direction:** Cinematic Mission — editorial print meets mission-control UI  
**Business goal:** Convert visitors into **Book a Call** or **Start an Inquiry**  
**3-second emotion:** *"This person is operating at a different level."*

---

## 0. Codebase Context (read before designing)

### What this product is

A **conversion-focused marketing site** for a freelance specialist who designs and builds **landing pages and portfolio websites only** — for creative freelancers, SaaS founders, and brands & agencies. Not a general agency site. Not a SaaS dashboard. The homepage is **The Pitch**; work pages are **The Proof**; contact is **The Conversion**.

**Positioning (locked):** Agency-level craft. AI-assisted precision. Specialist in the two highest-stakes pages on the internet.

### Primary goals

| Goal | User action | Success signal |
|------|-------------|----------------|
| **Trust** | Explore work / case studies | Case study page view from homepage |
| **Hire** | Contact | Form submit or Calendly booking |

**Global CTAs (sitewide):**
- Primary: **Book a Call** → `/contact#book`
- Secondary: **Start an Inquiry** → `/contact`

### Site map (native product shape)

```
/                           Homepage (The Pitch)
├── /work                   Work index (The Proof)
│   └── /work/[slug]        Case study detail
├── /services               Services (The Offer)
├── /about                  About (The Person)
├── /journal                Journal index (The Authority)
│   └── /journal/[slug]     Article detail
├── /contact