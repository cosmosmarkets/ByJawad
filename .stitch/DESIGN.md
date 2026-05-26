---
name: Studio Kitchen
colors:
  surface: '#fff8f3'
  surface-dim: '#e9d7c2'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff2e3'
  surface-container: '#fdebd5'
  surface-container-high: '#f7e6d0'
  surface-container-highest: '#f2e0ca'
  on-surface: '#231a0d'
  on-surface-variant: '#5b403f'
  inverse-surface: '#392f20'
  inverse-on-surface: '#ffeeda'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#b7102a'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#fec24a'
  on-secondary-container: '#715000'
  tertiary: '#ba081b'
  on-tertiary: '#ffffff'
  tertiary-container: '#de2c30'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#ffdea7'
  secondary-fixed-dim: '#f8bd45'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930011'
  background: '#fff8f3'
  on-background: '#231a0d'
  surface-variant: '#f2e0ca'
  paper-cream-dark: '#F5DFC4'
  ink-black: '#000000'
  ink-muted: '#5C4A3A'
  ink-subtle: '#8B7355'
  surface-card: '#FFFFFF'
typography:
  display:
    fontFamily: Fredoka
    fontSize: 88px
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Fredoka
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.08'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Fredoka
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Fredoka
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.015em
  script-accent:
    fontFamily: Caveat
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  kicker:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 24px
  margin-desktop: 48px
  section-v-desktop: 96px
  section-v-mobile: 48px
  content-max: 1280px
  grid-red: 24px
---

## Brand & Style

This design system is built on a "warm kitchen studio" metaphor, evoking the tactile feel of an editorial food magazine or a high-end chef's boutique. It targets creatives, founders, and brands looking for professional craft delivered with the speed and reliability of a well-run kitchen.

The aesthetic is a sophisticated mix of **Minimalism** and **Tactile/Sticker** design. It utilizes heavy cream paper textures, thick black "ink" strokes, and high-energy "heat" accents to create a conversion-first experience. The UI feels grounded and physical, avoiding the coldness of traditional SaaS platforms in favor of approachable, chunky elements and hand-drawn flourishes. Key emotional drivers are trust, warmth, and appetite for quality.

## Colors

The palette is strictly governed by an "accent budget" to maintain visual hierarchy.

- **Paper (70%):** `#FCEAD4` (Cream) is the primary surface, used for page backgrounds and footers to provide a warm, non-digital feel.
- **Ink (25%):** `#000000` (Black) is used for all structural elements including borders, headlines, and primary labels. `#5C4A3A` (Muted Brown) provides a softer secondary tone for body copy.
- **Heat (5%):** `#E63946` (Tomato Red) is reserved for high-impact "poster" sections like the Hero and final CTA. `#F4B942` (Mustard) is the high-conversion action color, used exclusively for primary buttons when they sit atop red backgrounds.

Semantic colors (Success, Error, Info) are restricted to form validation and status indicators only.

## Typography

The typographic system uses four distinct voices:
- **Fredoka:** The primary display face. It should be used for headlines, logo, and primary buttons. Large sizes should use tight tracking and line-height.
- **Caveat:** A "kitchen notes" script reserved for emotional accents and conversational prompts (e.g., "Ready to order?"). Use only in poster sections.
- **Inter:** The utility workhorse for body copy, paragraphs, and forms.
- **JetBrains Mono:** Used for "Kickers" (section labels) and metadata. 

**Constraint:** Never use Caveat for navigation or functional UI. Never use colored Mono text on cream backgrounds; use `#5C4A3A` instead.

## Layout & Spacing

This design system follows a **Fixed Grid** model with a maximum content width of 1280px. The layout is centered with significant vertical breathing room between sections to maintain an "airy" editorial feel.

- **Grid:** On red "Heat" sections, a visible 24px grid texture using `#C1121F` at low opacity (approx. 15%) should be applied to simulate graph paper or cutting boards.
- **Responsive Behavior:** 
  - **Desktop:** 12-column grid with 48px margins and 24px gutters.
  - **Tablet/Mobile:** Single column stacking for most cards (e.g., Why-order tiles, Work cards).
  - **Transitions:** Layout adjustments should focus on `transform` and `opacity` only; avoid heavy `transition-all` rules to maintain the "snappy" sticker-book feel.

## Elevation & Depth

Visual hierarchy is achieved through **Bold Borders** and **Sticker Shadows** (Hard-offset shadows).

- **Depth Character:** Instead of blurred ambient shadows, use hard 4px or 8px offset shadows with 100% opacity using `#000000`. This creates a "sticker" or "magnet" effect on the paper background.
- **Interactions:** On hover, elements should translate 2px towards the shadow (simulating a "press") while the shadow reduces in size. On active/click states, elements should translate fully to the shadow's origin, effectively "grounding" the element.
- **Outlines:** All cards and buttons must feature a 2px to 3px solid black border.
- **Special Effects:** High-impact CTA posters use a 2-degree clockwise tilt to break the horizontal grid and draw the eye.

## Shapes

The shape language is "Soft-Chunky." We use 16px (rounded-lg) as the standard for containers to balance the harshness of the thick black borders.

- **Buttons:** Always pill-shaped (9999px) to contrast against the rectangular grid of the cards.
- **Cards/Inputs:** 16px corners for cards, 8px corners for input fields to keep them feeling precise but approachable.
- **Stickers:** UI elements should feel like they could be peeled off the page.

## Components

### Buttons
- **Mustard Primary:** Mustard fill (`#F4B942`), 3px black border, black Fredoka label. Used ONLY on red backgrounds.
- **White Secondary:** White fill, 3px black border. Used for secondary actions in the hero or primary actions in the header (e.g., "Chat to the chef").
- **Hover State:** 1px/1px translation + 2px shadow.

### Cards
- **Dish Cards:** White background, 2px black border, 16px radius. No tilt.
- **Work Cards:** Flat white surface with high-contrast screenshots. No decorative noise.

### Inputs
- White background, 2px black border, 8px radius.
- **Focus:** Solid black border thickness increase + focus ring offset by 3px.

### Navigation
- **Default:** Transparent over red hero.
- **Scrolled:** Cream background with 12px backdrop-blur and 2px black bottom border.
- **CTA:** "Chat to the chef" as a white pill button with a 2px sticker shadow.

### The CTA Poster
- Large red section with the dark red grid texture.
- Inner panel tilted 2° clockwise.
- Uses Caveat script for sub-leads and Fredoka All-Caps for the "SHOUT" headline.