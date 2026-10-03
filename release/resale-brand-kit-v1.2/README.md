# resale.com.pk brand kit v1.2

Read `resale-brand-ui-guidelines-v1.pdf` first. Visual reference: https://sajjadarifgul.github.io/resale-brand/

## Which file to use

| Need | File |
|---|---|
| **Website header / mobile app bar** | `logo/lockup/resale-lockup-header-{28,32,36,40,44}.svg` (+ `-dark`). Use at the exact height in the filename. Native apps: the @2x/@3x PNGs. |
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
