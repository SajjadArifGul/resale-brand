// Generates every derived logo asset from logo/resale-logo-master.svg.
// Run: cd tools && npm install && node gen-assets.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const LOGO = path.join(ROOT, 'logo');
const master = fs.readFileSync(path.join(LOGO, 'resale-logo-master.svg'), 'utf8');

// Silhouettes come straight from the master's clip paths, so every variant shares the traced geometry.
const shape = id => master.match(new RegExp(`<clipPath id="clip-${id}">\\s*<path clip-rule="evenodd" d="([^"]+)"`))[1];
const teal = shape('teal-left') + shape('teal-right');
const orange = shape('orange-left') + shape('orange-right');

const VB = '1008 930 3000 3000';
const svg = (body, { vb = VB, size = 1024, title = 'resale.com.pk' } = {}) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${size}" height="${size}" role="img" aria-labelledby="title">\n<title id="title">${title}</title>\n${body}\n</svg>\n`;

const TEAL = '#024E53';
const ORANGE = '#FD7009';

// Flat two-colour mark for 16–32px (guidelines §10): no shadows, no gradients.
const flatBody = `<path fill="${ORANGE}" fill-rule="evenodd" d="${orange}"/>\n<path fill="${TEAL}" fill-rule="evenodd" d="${teal}"/>`;

// Single-colour mark: the teal ribbons sit over the orange ones, so the orange forms are cut back
// by a gap (see trace-mono.js); otherwise the four forms would merge into one blob.
const orangeCut = fs.readFileSync(path.join(LOGO, 'source', 'mono-orange-cut.path.txt'), 'utf8').trim();
const monoBody = color =>
  `<path fill="${color}" fill-rule="evenodd" d="${orangeCut}"/>\n<path fill="${color}" fill-rule="evenodd" d="${teal}"/>`;

// Master content (gradients, folds) re-used inside other canvases.
const masterInner = master.replace(/^[\s\S]*?<\/title>\s*(<!--[\s\S]*?-->)?/, '').replace(/<\/svg>\s*$/, '');

const files = {
  'resale-logo-flat.svg': svg(flatBody),
  'resale-logo-mono-ink.svg': svg(monoBody('#0F172A')),
  'resale-logo-mono-teal.svg': svg(monoBody(TEAL)),
  'resale-logo-mono-white.svg': svg(monoBody('#FFFFFF')),
};
for (const [name, content] of Object.entries(files)) fs.writeFileSync(path.join(LOGO, name), content);

// Icon canvases: symbol centred on a solid background at a given visual occupancy.
const iconSvg = (body, { bg, scale, size }) => {
  const side = 3000 / scale, off = (side - 3000) / 2;
  const vb = `${1008 - off} ${930 - off} ${side} ${side}`;
  const rect = bg ? `<rect x="${1008 - off}" y="${930 - off}" width="${side}" height="${side}" fill="${bg}"/>\n` : '';
  return svg(rect + body, { vb, size });
};

const png = (content, size, out) => sharp(Buffer.from(content), { density: 72 * 4 }).resize(size, size).png().toFile(out);

(async () => {
  const fav = path.join(LOGO, 'favicon');
  const app = path.join(LOGO, 'app-icon');
  fs.mkdirSync(fav, { recursive: true });
  fs.mkdirSync(app, { recursive: true });

  // Favicons: flat mark, transparent, near edge-to-edge (browsers add their own padding).
  const favSvg = iconSvg(flatBody, { scale: 0.96, size: 32 });
  fs.writeFileSync(path.join(fav, 'favicon.svg'), favSvg);
  const icoPngs = [];
  for (const s of [16, 32, 48]) {
    const out = path.join(fav, `favicon-${s}.png`);
    await png(favSvg, s, out);
    icoPngs.push({ s, buf: fs.readFileSync(out) });
  }
  fs.writeFileSync(path.join(fav, 'favicon.ico'), ico(icoPngs));

  // Touch / PWA icons: white background, symbol ~70% of canvas (guidelines §10).
  const opaque = iconSvg(masterInner, { bg: '#FFFFFF', scale: 0.7, size: 512 });
  await png(opaque, 180, path.join(fav, 'apple-touch-icon.png'));
  await png(opaque, 192, path.join(fav, 'icon-192.png'));
  await png(opaque, 512, path.join(fav, 'icon-512.png'));
  // Maskable: launcher may crop to a circle (safe zone = inner 80%), so shrink the symbol.
  const maskable = iconSvg(masterInner, { bg: '#FFFFFF', scale: 0.6, size: 512 });
  await png(maskable, 512, path.join(fav, 'icon-maskable-512.png'));
  fs.writeFileSync(path.join(fav, 'site.webmanifest'), JSON.stringify({
    name: 'resale.com.pk', short_name: 'resale', theme_color: '#FFFFFF', background_color: '#FFFFFF', display: 'standalone',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }, null, 2) + '\n');

  // App icons: iOS 1024 master (no baked corners), Android adaptive layers (108dp canvas, 66dp safe zone).
  fs.writeFileSync(path.join(app, 'ios-app-icon-1024.svg'), opaque.replace(/width="512" height="512"/, 'width="1024" height="1024"'));
  await png(opaque, 1024, path.join(app, 'ios-app-icon-1024.png'));
  const fg = iconSvg(masterInner, { scale: 0.52, size: 432 });
  fs.writeFileSync(path.join(app, 'android-adaptive-foreground.svg'), fg);
  await png(fg, 432, path.join(app, 'android-adaptive-foreground-432.png'));
  await sharp({ create: { width: 432, height: 432, channels: 3, background: '#FFFFFF' } }).png()
    .toFile(path.join(app, 'android-adaptive-background-432.png'));

  // Preview PNGs of the variants.
  for (const name of Object.keys(files)) await png(files[name], 512, path.join(LOGO, name.replace('.svg', '-512.png')));
  console.log('done');
})();

// Minimal ICO writer: PNG-compressed entries (supported by every current browser and Windows Vista+).
function ico(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  entries.forEach(({ s, buf }, i) => {
    const o = i * 16;
    dir.writeUInt8(s >= 256 ? 0 : s, o); dir.writeUInt8(s >= 256 ? 0 : s, o + 1);
    dir.writeUInt16LE(1, o + 4); dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(buf.length, o + 8); dir.writeUInt32LE(offset, o + 12);
    offset += buf.length;
  });
  return Buffer.concat([header, dir, ...entries.map(e => e.buf)]);
}
