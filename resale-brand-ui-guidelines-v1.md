# resale.com.pk Digital Brand and UI Guidelines

**Version:** 1.0  
**Status:** Approved logo and recommended digital implementation standard  
**Applies to:** Website, responsive web, mobile apps, PWA, internal product interfaces, design systems, and marketing landing pages

## Instructions for AI agents

Treat this file as the implementation source of truth for resale.com.pk digital brand and UI work.

- Preserve the approved icon-only logo geometry. Do not redraw, rotate, mirror, stretch, rearrange, or recolor it.
- Use semantic design tokens instead of scattering raw values through product code.
- Use teal for trust and primary interaction, orange for selective commercial emphasis, neutrals for content, and semantic colors for system meaning.
- Meet WCAG AA at minimum. Do not rely on color alone to communicate state, status, selection, or action.
- Preserve marketplace information density and hierarchy. Do not hide important product, price, condition, seller, verification, warranty, location, or availability information merely to make a layout look minimal.
- Do not invent logo variants, palette values, typefaces, claims, taglines, or brand language not defined here.
- If an implementation requirement conflicts with accessibility, product clarity, or platform conventions, preserve accessibility and clarity and flag the deviation for review.
- Color and gradient values in this file are **normalized digital palette values derived from the approved raster logo**. They are not claimed as original vector-source values.
- A clean vector logo master, flat micro mark, favicon family, mobile app assets, and approved monochrome/reversed artwork remain production requirements.

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

The approved logo is an **icon-only symbol** comprising four interconnected ribbon-like forms in Resale Teal and Resale Orange.

When the brand name appears beside the symbol, write:

```text
resale.com.pk
```

Use lowercase. Keep the symbol capable of functioning independently. Do not insert the brand name into the icon.

### Production requirement

Convert the finalized raster artwork into a clean SVG master before broad production. Preserve:

- exact silhouette;
- internal negative spaces;
- ribbon overlaps;
- rounded corners;
- teal/orange relationship;
- proportions;
- visual depth.

Do not use an AI-generated raster as the source for every favicon, mobile icon, and web size.

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

Use this construction:

```text
[Logo] resale.com.pk
```

Use Inter, weight `700`, lowercase. Do not reproduce the name inside the symbol.

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

### Micro logo

| Rendered size | Artwork |
|---|---|
| `33px` and above | Full gradient version |
| `16–32px` | Flat two-color mark using `#024E53` and `#FD7009`; no shadows or micro-gradients |
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

1. Place the full-color logo on a white or light container.
2. Use an officially prepared monochrome white version.
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

| Category | Required files |
|---|---|
| Master logo | Editable vector master; SVG; print-ready PDF/EPS where required |
| Digital logo | Full-color SVG and PNG; flat two-color SVG and PNG; approved monochrome and reversed variants |
| Favicon | Optimized 16, 32, and 48px assets plus `favicon.ico` |
| Web app | Apple touch icon 180px; PWA icons 192 and 512px |
| Mobile | iOS 1024px master; Android adaptive foreground and background assets |
| Documentation | Color/token source, usage notes, version, and export date |

Use filenames that identify brand, asset, variant, color mode, size, and version.

```text
resale-symbol-flat-color-32-v1.png
```

Do not label exploratory or AI-generated files as production masters.

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
