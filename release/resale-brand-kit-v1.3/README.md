# resale.com.pk brand kit v1.3

Read `resale-brand-ui-guidelines-v1.pdf` first. Visual reference: https://sajjadarifgul.github.io/resale-brand/

## Which file to use

| Need | File |
|---|---|
| **Website header, desktop** | `logo/lockup/resale-lockup-header-36.svg` or `-40` (+ `-dark`) |
| **Phones 360–639px wide** | `logo/lockup/resale-lockup-header-36.svg` (+ `-dark`), 180 × 36 |
| **Phones 320–359px wide** | `logo/lockup/resale-lockup-header-28.svg` (+ `-dark`), 140 × 28 |
| **Login page, desktop** | `logo/lockup/resale-lockup-header-48.svg` (+ `-dark`), 243 × 48 |
| **Email header** | `logo/lockup/resale-lockup-header-42@2x.png` shown at 212 × 42 (white background) |
| Native app bars | Header file PNGs @2x/@3x at the matching point size |
| Lockup anywhere else (light) | `logo/lockup/resale-lockup.svg` |
| Dark mode / dark backgrounds | `logo/lockup/resale-lockup-dark.svg` |
| On teal backgrounds | `logo/lockup/resale-lockup-on-teal.svg` |
| One-colour print (receipts, stamps) | `logo/lockup/resale-lockup-ink.svg` / `-white.svg` |
| Square spaces (splash, stickers) | `logo/lockup/resale-lockup-stacked*.svg` |
| Name only (symbol already nearby) | `logo/lockup/resale-wordmark*.svg` |
| Symbol alone, 33px+ | `logo/symbol/resale-logo-master.svg` |
| Symbol alone, 16-32px | `logo/symbol/resale-logo-flat.svg` |
| Symbol, single colour | `logo/symbol/resale-logo-mono-{ink,teal,white}.svg` |
| Favicons, touch icon, PWA, manifest | `logo/favicon/` (copy to site root) |
| iOS app icon | `logo/app-icon/ios-app-icon-1024.png` (iOS applies corners) |
| Android adaptive icon | `logo/app-icon/android-adaptive-*` |

Every SVG has a PNG beside it for tools that can't use SVG. Lockup files are outlined, so no font install is needed.

## Rules in short

- Always keep ".com.pk", its orange underline and fold. Don't retype or recolour the logo.
- Use the dark version on dark backgrounds, never full colour.
- Name size minimum 16px; below that use the symbol alone.
- Header files: set height to the filename number in whole px; no CSS scaling, no `shape-rendering: crispEdges`.
- The lockup always uses the detailed gradient symbol, on desktop and mobile.
- Avatars and app icons: symbol only.
