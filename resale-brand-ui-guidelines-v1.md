# resale.com.pk Digital Brand and UI Guidelines

**Version:** 1.2 (3 October 2026)  
**Status:** Approved logo, approved logo lockup (U6 "folded underline"), and recommended digital implementation standard  
**Applies to:** Website, responsive web, mobile apps, PWA, internal product interfaces, design systems, marketing, print, and partner materials  
**Visual reference:** `previews/brand-u6.html` shows every rule below applied in context.

## Instructions for AI agents

Treat this file as the implementation source of truth for resale.com.pk digital brand and UI work.

- Preserve the approved symbol geometry. Do not redraw, rotate, mirror, stretch, rearrange, or recolor it.
- When the brand name appears with the symbol, use the approved **U6 lockup** (section 2.2) from `logo/lockup/`. Do not retype or restyle the brand name as a logo. The orange underline, its fold, and the smaller grey `.com.pk` are part of the approved design, not decoration to remove.
- Use semantic design tokens instead of scattering raw values through product code.
- Use teal for trust and primary interaction, orange for selective commercial emphasis, neutrals for content, and semantic colors for system meaning.
- Meet WCAG AA at minimum. Do not rely on color alone to communicate state, status, selection, or action.
- Preserve marketplace information density and hierarchy. Do not hide important product, price, condition, seller, verification, warranty, location, or availability information merely to make a layout look minimal.
- Do not invent logo variants, palette values, typefaces, claims, taglines, or brand language not defined here.
- If an implementation requirement conflicts with accessibility, product clarity, or platform conventions, preserve accessibility and clarity and flag the deviation for review.
- Color and gradient values in this file are **normalized digital palette values derived from the approved raster logo**. They are not claimed as original vector-source values.
- Production logo files live in `logo/` (section 17). Use them as supplied; regenerate derived files with the scripts in `tools/` rather than editing exports by hand.

## 1. Brand direction

resale.com.pk is a technology marketplace covering laptops, desktops, servers, phones, tablets, components, and accessories across new, refurbished, and used conditions.

| Attribute | Direction |
|---|---|
| Trustworthy | Clean, structured, credible |
| Modern | Contemporary, but not futuristic |
| Technical | Appropriate for a technology marketplace |
| Accessible | Easy for mainstream users to understand |
| Commercial | Strong enough for buying, selling, and price comparison |
| Professional | Suitable for established shops and serious buyers |
| Friendly | Not corporate or intimidating |
| Distinctive | Avoid generic marketplace and AI visual clichés |

The interface must not look like an AI product, crypto product, gaming product, or overly futuristic startup. The logo's interlocking structure may influence modular layouts, rounded geometry, and interconnected elements, but must not be copied repeatedly as decoration.

## 2. Official logo

The logo has two approved forms: the **symbol** on its own, and the **lockup** (symbol plus wordmark).

### 2.1 Symbol

The symbol comprises four interconnected ribbon-like forms in Resale Teal and Resale Orange, arranged as a pointy-top hexagon built from vertical sides and 30° diagonals. It can function independently (app icon, favicon, avatars). Do not insert the brand name into it.

The SVG master `logo/resale-logo-master.svg` is traced 1:1 from the approved raster artwork and preserves its silhouette, internal negative spaces, ribbon overlaps, rounded corners, teal/orange relationship, proportions, and fold shading. All other symbol files are generated from it. Do not use the original AI-generated raster as a production source.

### 2.2 Lockup (U6 "folded underline")

When the brand name appears with the symbol, use the U6 lockup. The domain name is always written in full, lowercase:

```text
resale.com.pk
```

"resale" leads; ".com.pk" is set smaller but must always be present, because the full address is what people type and resale.com / resale.pk are not owned by the brand. One orange stroke with a ribbon fold underlines "com.pk" and ties the name to the symbol.

Construction (N = name size; every value scales with N):

| Element | Rule |
|---|---|
| Name "resale" | Inter 700, letter-spacing −2% (−0.02 N), Teal 800 `#024E53`, size N |
| Domain ".com.pk" | Inter 700 at 0.7 N, same letter-spacing, Slate 500 `#64748B`, on the name's baseline. The full stop is an ordinary full stop in the domain colour. |
| Underline | Under "com.pk" only (not under the full stop). Thickness 0.14 × domain size (≈ 0.1 N), never below 2px. Gap between text box and stroke equals the thickness. Both ends cut at 30° from vertical (offset = thickness × tan 30°), matching the symbol's hexagon sides. Orange 600 `#FD7009`. |
| Fold | A tab folding down beneath the stroke's right end, Orange 700 `#E55106`. Width 0.308 × domain size, depth 0.364 × domain size; its lower edge slopes up from left to right. |
| Symbol | Height 1.55 N, vertically centred on the name, gap 0.42 N to the name. |
| Stacked version | Symbol 2.6 N, centred above the wordmark, gap 0.5 N. |
| Clear space | At least 0.25 × symbol height on every side. |

Versions:

| Version | Use | File |
|---|---|---|
| Horizontal, full colour | Default: headers, documents, most placements | `logo/lockup/resale-lockup.svg` |
| Header (pixel-fitted) | Website headers and mobile app bars, 28–44px tall. Small-size optical version: see below. | `logo/lockup/resale-lockup-header-{28,32,36,40,44}(-dark).svg` + 1×/2×/3× PNG |
| Horizontal, flat symbol | Optional, only where gradients cannot be reproduced (e.g. some print methods) | `logo/lockup/resale-lockup-small.svg` |
| Horizontal, dark | Dark surfaces and dark mode: white symbol and name, Slate 400 `#94A3B8` domain, orange stroke and fold kept | `logo/lockup/resale-lockup-dark.svg` |
| Horizontal, on teal | Teal 800 surfaces: as dark, with Teal Soft 2 `#CCDCDD` domain | `logo/lockup/resale-lockup-on-teal.svg` |
| One colour, ink / white | Receipts, stamps, engraving, embroidery, reversed print. Stroke and fold take the same single colour. | `resale-lockup-ink.svg`, `resale-lockup-white.svg` |
| Stacked | Square spaces: splash screens, stickers, posts | `resale-lockup-stacked*.svg` |
| Wordmark only | When the symbol already appears nearby | `resale-wordmark*.svg` |

Lockup files are outlined (no font dependency). Each has a 1200px transparent PNG beside it (header files have exact 1×/2×/3× PNGs instead).

The lockup always uses the **detailed full-gradient symbol**, at every size and on every device, including mobile headers. The flat symbol is only for the standalone symbol at favicon sizes (section 10).

#### Header lockup (small optical size)

At header sizes the master proportions look cramped and the thin stroke falls between pixel rows. The header files are drawn for 28–44px height and differ from the master only in these optical adjustments:

| Element | Master | Header version |
|---|---|---|
| Name letter-spacing | −2% | −0.5% |
| ".com.pk" | Inter 700 at 0.7 N, −2% | Inter **600** at **0.72 N**, **+1.2%** letter-spacing |
| Symbol gap | 0.42 N | 0.45 N |
| Baseline, stroke, fold | Proportional | Snapped to whole pixels; stroke never under 2px |

Use a header file at its exact size: set the `<img>` height to the number in the filename (e.g. `height="36"`) and let the width follow. Do not scale it with CSS transforms, do not use fractional sizes, and do not set `shape-rendering="crispEdges"`. Native apps use the @2x/@3x PNGs at the matching point size. In live web UI the lockup may be built in HTML/CSS only if it matches this construction exactly; the reference implementation is the `.wm` / `.lockup` CSS in `previews/brand-u6.html`. Otherwise use the SVG.

## 3. Core brand colors

### Resale Teal

| Token | HEX | RGB | Recommended use |
|---|---|---|---|
| Teal 900 | `#013E43` | `1, 62, 67` | Deep shadow and pressed states |
| Teal 800 | `#024E53` | `2, 78, 83` | Primary brand color |
| Teal 600 | `#027B7F` | `2, 123, 127` | Links, highlights, lighter brand use |
| Teal Soft | `#E6EDEE` | `230, 237, 238` | Subtle teal background |
| Teal Soft 2 | `#CCDCDD` | `204, 220, 221` | Selected and hover backgrounds |

The main solid digital brand color is `#024E53`.

### Resale Orange

| Token | HEX | RGB | Recommended use |
|---|---|---|---|
| Orange 700 | `#E55106` | `229, 81, 6` | Deep logo orange |
| Orange 600 | `#FD7009` | `253, 112, 9` | Primary accent |
| Orange 500 | `#FE8D14` | `254, 141, 20` | Highlight and gradient |
| Orange Soft | `#FFF1E6` | `255, 241, 230` | Accent background |
| Orange Soft 2 | `#FFE2CE` | `255, 226, 206` | Stronger accent background |
| Orange Text | `#C2410C` | `194, 65, 12` | Accessible orange text on white |

The primary solid accent is `#FD7009`. Orange is an accent, not the dominant UI color.

### Normalized logo gradients

```css
/* Teal */
linear-gradient(
  135deg,
  #027B7F 0%,
  #024E53 55%,
  #013E43 100%
);

/* Orange */
linear-gradient(
  135deg,
  #FE8D14 0%,
  #FD7009 55%,
  #E55106 100%
);
```

Reserve gradients for the official full-color logo, large brand graphics, hero illustrations, and selected promotional graphics. Use solid brand colors for routine buttons, fields, cards, and navigation.

### Color hierarchy

| Color family | Approximate visual share | Role |
|---|---:|---|
| White and neutrals | 70% | Content, surfaces, and whitespace |
| Teal | 20% | Trust, structure, and primary interaction |
| Orange | 10% | Commercial emphasis and selective accent |

This ratio expresses hierarchy rather than a mathematical requirement.

Within the logo, orange appears only in the symbol and in the lockup's underline (Orange 600) and fold (Orange 700). Do not add further orange to the wordmark.

## 4. Neutral and semantic colors

### Neutral UI palette

| Token | HEX | Recommended use |
|---|---|---|
| Ink 950 | `#0F172A` | Primary text and prices |
| Ink 800 | `#1E293B` | Secondary headings |
| Slate 700 | `#334155` | Secondary text and default icons |
| Slate 500 | `#64748B` | Muted text |
| Slate 400 | `#94A3B8` | Placeholder and disabled text |
| Slate 300 | `#CBD5E1` | Strong borders |
| Slate 200 | `#E2E8F0` | Default borders |
| Slate 100 | `#F1F5F9` | Secondary backgrounds |
| Slate 50 | `#F8FAFC` | Page and surface backgrounds |
| White | `#FFFFFF` | Cards and primary surfaces |

### Semantic colors

| Purpose | Main | Soft background | Text |
|---|---|---|---|
| Success | `#15803D` | `#F0FDF4` | `#166534` |
| Warning | `#B45309` | `#FFFBEB` | `#92400E` |
| Error | `#B91C1C` | `#FEF2F2` | `#991B1B` |
| Information | `#1D4ED8` | `#EFF6FF` | `#1E40AF` |

Do not use Resale Orange for errors. Orange belongs to the brand and commercial accent system; red communicates errors and destructive actions.

## 5. Accessibility and contrast

All interfaces must target **WCAG AA** at minimum.

| Background | Text | Approximate contrast | Status |
|---|---|---:|---|
| `#024E53` | `#FFFFFF` | `9.47:1` | Excellent |
| `#013E43` | `#FFFFFF` | `11.86:1` | Excellent |
| `#027B7F` | `#FFFFFF` | `5.07:1` | AA |
| `#FD7009` | `#0F172A` | `6.37:1` | AA |
| `#FE8D14` | `#0F172A` | `7.68:1` | AA |
| `#C2410C` | `#FFFFFF` | `5.18:1` | AA |

Do not place normal-size white text on `#FD7009`. For a bright orange button, use `#0F172A` text. If white text on orange is required, use `#C2410C` as the background.

Do not use color as the only indicator for errors, selected states, verification, condition, or availability. Add a label, icon, check, border, or other perceivable state change.

## 6. Buttons, links, focus, and forms

### Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#024E53` | `#FFFFFF` | Transparent | `#013E43` |
| Secondary | `#FFFFFF` | `#024E53` | `#024E53` | `#E6EDEE` background |
| Orange accent | `#FD7009` | `#0F172A` | Transparent | `#E55106` |

- Use teal for the standard primary CTA: View Offers, Compare Prices, Contact Seller, Continue.
- Use orange selectively for promotions or seller-oriented actions.
- Do not give teal and orange buttons equal visual importance beside each other without a clear hierarchy.
- Recommended radius: `10px`.
- Recommended weight: `600`.

### Links

```css
a {
  color: #027B7F;
}

a:hover {
  color: #024E53;
}
```

Use an underline on hover or focus where appropriate. Do not depend only on color to distinguish actionable text.

### Focus

```css
:focus-visible {
  outline: 2px solid #027B7F;
  outline-offset: 2px;
}
```

Use a white or otherwise contrasting focus ring on teal surfaces. Never remove browser focus styling without an accessible replacement.

### Form controls

| State | Background | Border | Text or message |
|---|---|---|---|
| Default | `#FFFFFF` | `#CBD5E1` | `#0F172A`; placeholder `#64748B` |
| Hover | `#FFFFFF` | `#94A3B8` | `#0F172A` |
| Focus | `#FFFFFF` | `#027B7F` | Teal focus ring |
| Error | `#FFFFFF` | `#B91C1C` | Message `#991B1B` |
| Disabled | `#F1F5F9` | `#E2E8F0` | `#94A3B8` |

## 7. Marketplace-specific UI

### Product condition

| Condition | Background | Text |
|---|---|---|
| New | `#E6EDEE` | `#024E53` |
| Refurbished | `#FFF1E6` | `#C2410C` |
| Used | `#F1F5F9` | `#475569` |

Use both text and color. Do not introduce a new color family for every condition or inventory state.

### Verified seller

```text
Background: #E6EDEE
Icon:       #024E53
Text:       #024E53
Label:      Verified Shop
```

Verification is a trust signal and uses teal, not orange.

### Prices

- Use `#0F172A` for the actual price.
- Use weight `700`.
- Use tabular numbers.
- Use `#C2410C` for savings, discount percentages, or deal messaging on white.

```css
.price,
.numeric-data {
  font-variant-numeric: tabular-nums;
}
```

### Cards

```text
Background:     #FFFFFF
Border:         #E2E8F0
Radius:         12–16px
Primary text:   #0F172A
Secondary text: #64748B
Desktop hover:  #CCDCDD border and a very small elevation change
```

Product imagery remains the visual focus. Avoid heavy shadows.

### Information hierarchy

A typical offer card prioritizes:

1. Product or model
2. Price
3. Condition
4. Seller
5. Verification
6. Warranty
7. Location
8. Primary CTA

Usually only one or two card areas need accent color. Orange must not compete with price, condition, verification, and CTA simultaneously.

### Badges, chips, and selections

| Pattern | Default | Selected or active |
|---|---|---|
| Filter chip | White; `#CBD5E1` border; `#334155` text | `#E6EDEE` background; `#024E53` border/text |
| Radio or checkbox | `#CBD5E1` border | `#024E53` control; white check |
| Commercial badge | `#FFF1E6` background; `#C2410C` text | Use sparingly |
| Status badge | Semantic soft background | Matching semantic text and icon |

## 8. Radius and spacing

### Radius system

| Component | Radius |
|---|---:|
| Small controls | `8px` |
| Inputs and buttons | `10px` |
| Standard cards | `12px` |
| Large cards and panels | `16px` |
| Modals and dialogs | `16px` |
| Pills and badges | `999px` |

Echo the logo's rounded ribbon geometry subtly. Do not make every surface excessively rounded; the brand should remain technical and structured.

### Spacing system

Use a `4px` base grid with an `8px` preferred rhythm.

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
```

Avoid arbitrary spacing such as `17px`, `27px`, or `43px` without a specific optical reason.

## 9. Typography

Use **Inter Variable** where supported.

Approved weights:

```text
400 Regular
500 Medium
600 SemiBold
700 Bold
```

Avoid routine use of `800` and `900`.

### Web typography

| Role | Size | Line height | Weight |
|---|---:|---:|---:|
| Display | `48px` | `56px` | `700` |
| H1 | `40px` | `48px` | `700` |
| H2 | `32px` | `40px` | `700` |
| H3 | `24px` | `32px` | `600` |
| H4 | `20px` | `28px` | `600` |
| Large body | `18px` | `28px` | `400` |
| Body | `16px` | `24px` | `400` |
| UI / small | `14px` | `20px` | `500` |
| Caption | `12px` | `16px` | `500` |
| Button | `14–16px` | `20–24px` | `600` |

### Mobile typography

| Role | Size | Line height | Weight |
|---|---:|---:|---:|
| H1 | `32px` | `40px` | `700` |
| H2 | `24px` | `32px` | `700` |
| H3 | `20px` | `28px` | `600` |
| Body | `16px` | `24px` | `400` |
| Small | `14px` | `20px` | `500` |
| Caption | `12px` | `16px` | `500` |

Do not shrink important marketplace information merely to fit more content on a screen. Buttons should generally remain at least `14px`.

### Brand name in headers

Use the U6 lockup (section 2.2), not a typed brand name. The wordmark is always Inter 700 regardless of the interface font in use; do not redraw it in another typeface or weight. Do not reproduce the name inside the symbol.

## 10. Logo sizing and clear space

Maintain clear space on every side equal to approximately **12.5% of the logo width**. No text, border, button, icon, or imagery may enter this zone.

| Use | Recommended size |
|---|---:|
| Desktop header | `30–36px` |
| Mobile header | `28–32px` |
| Compact navigation | `24–28px` |
| Footer | `28–32px` |
| Account or brand display | `40px+` |
| Marketing | As required by layout |

Avoid the detailed logo below approximately `24px` in ordinary UI.

### Lockup sizes

| Use | Name size N | Symbol |
|---|---:|---|
| Desktop header | `22–24px` | `36–40px`: `resale-lockup-header-36` or `-40` |
| Desktop header, scrolled / compact | `18–21px` | `28–32px`: `resale-lockup-header-28` or `-32` |
| Mobile header and app bar | `18–21px` | `28–32px`: `resale-lockup-header-28` or `-32` |
| Footer and documents | `18–22px` | Header file of matching size, or the master lockup |
| Minimum | `16px` (domain ≈ 11px) | Below this, use the symbol alone |

### Micro logo

| Rendered size | Artwork |
|---|---|
| `33px` and above | Full gradient version |
| `16–32px` | Flat two-color mark using `#024E53` and `#FD7009`; no shadows or micro-gradients. Applies to the **standalone symbol** (favicons, tiny UI icons) only; the lockup keeps the full-gradient symbol at all sizes. |
| `16px` test failure | Dedicated simplified favicon preserving the overall silhouette |

### Required favicon assets

| Asset | Size |
|---|---:|
| Favicon | `16×16` |
| Favicon | `32×32` |
| Favicon | `48×48` |
| Apple touch icon | `180×180` |
| PWA icon | `192×192` |
| PWA icon | `512×512` |

Do not use a blurred downscale of the large PNG. Build and test an optimized flat micro symbol.

### Mobile app icon

- Use the logo symbol only.
- Use `#FFFFFF` or `#F8FAFC` as the background.
- The symbol should occupy approximately 68–72% of the canvas visually.
- Leave generous safe area.
- For iOS, provide a `1024×1024` master and do not bake rounded corners into the artwork.
- For Android, use adaptive foreground and background assets and keep essential geometry inside the launcher safe region.

## 11. Logo background use and misuse

### Light backgrounds

Use the full-color logo on:

```text
#FFFFFF
#F8FAFC
#F1F5F9
```

### Dark backgrounds

Use these options in order:

1. Use the approved dark lockup or white symbol (`resale-lockup-dark.svg`, `resale-logo-mono-white.svg`).
2. Place the full-color logo on a white or light container.
3. Use another specifically approved reversed version.

Do not place the dark teal portions directly on similarly dark backgrounds. Do not recolor individual sections to force a fit.

### Photography

Avoid placing the full-color logo directly on visually complex photography. Use a light container or an approved monochrome version with adequate contrast. Never add an arbitrary glow.

### Prohibited logo treatments

Do not:

- stretch or compress the logo;
- rotate or mirror it;
- rearrange the four forms;
- replace teal with random blue/green or orange with yellow/red;
- add drop shadows, outlines, bevels, glow, or neon effects;
- insert text or device icons inside the symbol;
- place it inside an unnecessary circle;
- add AI-style glowing circuitry;
- remove a structural section;
- use the literal `器` character instead of the approved symbol;
- repeat the logo as a page background pattern.

For the lockup, also do not:

- drop ".com.pk" or set it larger than "resale";
- remove, move, or recolor the underline or fold, or underline "resale" instead;
- add an orange or coloured full stop, or replace it with a shape;
- retype the wordmark in another font, weight, or capitalization (for example "Resale.com.pk");
- use the full-colour lockup on dark or orange backgrounds;
- put the wordmark inside avatars or app icons (use the symbol alone).

## 12. Iconography, imagery, and effects

### Iconography

Use one consistent icon system. Icons should be geometric, clean, slightly rounded, simple, and consistent in stroke.

```text
Canvas:           24×24
Stroke:           1.75–2px
Joins and caps:   Rounded where appropriate
Default color:    #334155
Active color:     #024E53
Selective accent: #FD7009
```

Suitable systems include Lucide or Material Symbols Rounded, provided only one family is used consistently.

### Product photography

Use clean backgrounds, accurate colors, sharp details, minimal visual noise, and consistent aspect ratios. Product images should generally appear on `#FFFFFF` or `#F8FAFC`. Do not tint products teal or orange. Brand colors frame the product; they do not alter it.

### Avoid the AI startup look

Avoid:

- neon blue or purple;
- glowing gradients;
- random sparkles and AI star symbols;
- circuit-board backgrounds;
- generic robot imagery;
- dark cyberpunk layouts;
- glassmorphism everywhere;
- floating glowing orbs;
- excessive blur.

### Shadows

```css
box-shadow:
  0 1px 2px rgba(15, 23, 42, 0.04),
  0 4px 12px rgba(15, 23, 42, 0.06);
```

Large overlays and modals may use slightly stronger shadows. Do not use heavy black shadows under every card.

## 13. Navigation, modes, responsive behavior, and motion

### Navigation

```text
Header background:          #FFFFFF
Header text:                #0F172A
Border:                     #E2E8F0
Active item:                #024E53
Optional active indicator:  #FD7009
```

Do not use an orange navigation bar as the default interface.

### Light mode

| Layer | Recommended token |
|---|---|
| Page | `#F8FAFC` |
| Primary surface | `#FFFFFF` |
| Primary text | `#0F172A` |
| Muted text | `#64748B` |
| Border | `#E2E8F0` |
| Primary action | `#024E53` |
| Accent | `#FD7009` |

### Dark mode

Dark mode is a product mode, not a recolored logo.

- Use a stepped dark-neutral hierarchy instead of pure black everywhere.
- Use high-contrast near-white primary text and quieter secondary text.
- Test interactive teal values against every dark surface before release.
- Keep orange selective. Test Ink/dark text on bright orange and white on `#C2410C`.
- Preserve semantic success, warning, error, and information meaning with dark-mode-specific contrast testing.
- Use an approved reversed logo or a light-container treatment. Do not place the standard dark teal logo directly on dark surfaces.

### Responsive behavior

- Preserve hierarchy across breakpoints.
- Do not hide price, condition, or trust details solely to simplify mobile layouts.
- Allow cards to reflow, stack, or change density while keeping labels close to values.
- Use the mobile type scale and approved spacing tokens instead of proportionally shrinking desktop UI.
- Keep the logo within recommended sizes and switch to the micro mark when required.

### Touch targets

Use a minimum `44×44px` touch target for essential interactive controls. Visible icons may be smaller inside the target. Provide comfortable separation between adjacent actions.

### Motion

- Use motion to clarify state and hierarchy.
- Keep common transitions restrained, generally `150–250ms`.
- Use natural easing.
- Do not spin the logo or use glowing loops and continuous decorative motion.
- Respect reduced-motion preferences.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 14. Figma variable architecture

Create semantic variables rather than applying raw values directly to components. Separate primitive palette values from role-based aliases so modes can change without detaching components.

| Collection | Examples |
|---|---|
| Primitives | `color.teal.800`, `color.orange.600`, `color.slate.200`, `space.16`, `radius.12` |
| Semantic color | `surface.page`, `surface.card`, `text.primary`, `text.muted`, `action.primary`, `border.default` |
| Component | `button.primary.bg`, `input.focus.border`, `badge.verified.bg`, `card.border` |
| Mode | Light and Dark aliases resolved from the same semantic names |

- Publish variables from a controlled design-system library.
- Use number variables for spacing, radius, and sizing.
- Name variables by role, not by the screen where they first appeared.
- Do not create one-off local colors when an approved token exists.

## 15. CSS design tokens

```css
:root {
  --color-brand-teal: #024E53;
  --color-brand-teal-hover: #013E43;
  --color-brand-teal-link: #027B7F;
  --color-brand-orange: #FD7009;
  --color-brand-orange-text: #C2410C;

  --color-text: #0F172A;
  --color-text-muted: #64748B;
  --color-border: #E2E8F0;
  --color-surface: #FFFFFF;
  --color-page: #F8FAFC;

  --color-success: #15803D;
  --color-warning: #B45309;
  --color-error: #B91C1C;
  --color-info: #1D4ED8;

  --radius-small: 8px;
  --radius-control: 10px;
  --radius-card: 12px;
  --radius-panel: 16px;
  --radius-pill: 999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  --shadow-card:
    0 1px 2px rgba(15, 23, 42, 0.04),
    0 4px 12px rgba(15, 23, 42, 0.06);
}
```

Projects may map these values into framework-specific token systems, but must preserve the semantic meaning and approved values unless a reviewed accessibility requirement demands a mode-specific adjustment.

## 16. Practical offer-card example

A standard offer card should apply the system as follows:

| Element | Applied rule |
|---|---|
| Surface | White with Slate 200 border and 12px radius |
| Product image | Neutral background, accurate color, consistent ratio |
| Product/model | Clear heading without unnecessary accent color |
| Price | Ink 950, weight 700, tabular figures |
| Condition | New, Refurbished, or Used token |
| Seller verification | Teal trust treatment with icon and text label |
| Savings | Orange Text on white |
| CTA | Primary teal button with accessible focus ring |

## 17. Asset package

| Category | Files | Status |
|---|---|---|
| Symbol master | `logo/resale-logo-master.svg` | Done (v1.1) |
| Symbol variants | `logo/resale-logo-flat.svg`, `resale-logo-mono-ink.svg`, `resale-logo-mono-teal.svg`, `resale-logo-mono-white.svg` (+ 512px PNGs) | Done |
| Lockup (U6) | `logo/lockup/`: horizontal, small, dark, on-teal, ink, white, stacked, wordmark-only; SVG (outlined) + 1200px PNG | Done |
| Favicon | `logo/favicon/favicon.svg`, `favicon.ico` (16/32/48), `favicon-16/32/48.png` | Done |
| Web app | `logo/favicon/apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `site.webmanifest` | Done |
| Mobile | `logo/app-icon/ios-app-icon-1024.png/.svg`; `android-adaptive-foreground(-432).svg/png`, `android-adaptive-background-432.png` | Done |
| Print | Print-ready PDF/EPS of the lockup in CMYK and Pantone references | Still required (printer to confirm) |
| Generators | `tools/gen-assets.js`, `tools/trace-mono.js`, `tools/gen-lockups.js` | Re-run after any master change |

The original AI-generated raster is kept only as the approved reference image. Do not label exploratory files (`previews/brand-preview.html`) as production artwork.

## 18. Governance

- Maintain one approved source package owned by the designated brand or design-system owner.
- Designers, developers, and AI agents must not create ad-hoc recolors, redraws, gradient changes, or simplified marks outside the approved asset process.
- Test every new variant at its intended size and on its intended background before approval.
- Record each change with version, date, owner, reason, and affected assets or tokens.
- Deprecate superseded files clearly and remove them from shared libraries and production repositories.
- Review accessibility whenever a color, typography, component state, or dark-mode value changes.

## 19. Agent completion checklist

Before considering brand/UI work complete, verify:

- [ ] The approved logo asset and correct variant are used.
- [ ] Where the brand name appears with the symbol, the U6 lockup is used unchanged (".com.pk" present, underline and fold intact, correct light/dark version).
- [ ] Logo size and clear space meet this guide.
- [ ] No ad-hoc logo treatment or brand color was introduced.
- [ ] Components use semantic tokens rather than unexplained raw values.
- [ ] Teal is the primary interaction/trust color.
- [ ] Orange is selective and does not communicate errors or verification.
- [ ] Normal-size white text is not used on `#FD7009`.
- [ ] Text and interactive elements meet WCAG AA contrast.
- [ ] Keyboard focus is visible.
- [ ] States do not rely on color alone.
- [ ] Touch targets are at least `44×44px` where required.
- [ ] Price, condition, seller, verification, warranty, location, and CTA retain a clear hierarchy.
- [ ] Product photography is accurate and is not brand-tinted.
- [ ] Typography, spacing, radius, icons, and shadows follow the system.
- [ ] Responsive layouts preserve important marketplace information.
- [ ] Reduced-motion behavior is supported.
- [ ] New assets and token changes have been documented and approved.

## 20. Core UI rule

Use teal for trust and primary interaction, orange for selective commercial emphasis, neutrals for content, and semantic colors for system meaning. Never allow brand styling to reduce product clarity, accessibility, or marketplace information density.

## Final design principle

Build a marketplace that feels trustworthy, clear, and distinctly resale.com.pk. Let teal carry confidence, orange add controlled commercial energy, and the product information remain the hero.

## Change log

| Version | Date | Change |
|---|---|---|
| 1.2 | 3 October 2026 | Added pixel-fitted header lockups (28–44px, light and dark, 1×/2×/3× PNG) with small-size optical adjustments so the wordmark stays clear in headers. The lockup now uses the detailed full-gradient symbol at every size, including mobile. |
| 1.1 | 1 October 2026 | Approved the U6 "folded underline" lockup (section 2.2) with sizes, versions, and misuse rules. Added the traced SVG symbol master and the full generated asset set (section 17). Updated agent instructions, dark-background order, header guidance, and checklist accordingly. |
| 1.0 | 1 October 2026 | Initial guidelines and approved symbol. |
