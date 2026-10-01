// Builds the single-colour silhouette (logo/source/mono-orange-cut.path.txt) used by gen-assets.js.
// Orange forms are cut back from the teal forms by a fixed gap, then thin slivers left where the
// ribbons meet tangentially at the outer edge are removed (morphological opening) before re-tracing.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const potrace = require('potrace');

const LOGO = path.join(__dirname, '..', 'logo');
const master = fs.readFileSync(path.join(LOGO, 'resale-logo-master.svg'), 'utf8');
const shape = id => master.match(new RegExp(`<clipPath id="clip-${id}">\\s*<path clip-rule="evenodd" d="([^"]+)"`))[1];

const N = 2508;           // raster size; master space is 5016 units, so 1px = 2 units
const GAP = 40;           // blur radius; effective gap is ~28px (= ~14px at source scale)
const OPEN = 20;          // removes orange slivers thinner than ~28px

const mask = async d => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5016 5016" width="${N}" height="${N}"><rect width="5016" height="5016" fill="#000"/><path fill="#fff" fill-rule="evenodd" d="${d}"/></svg>`;
  return sharp(Buffer.from(svg)).flatten({ background: "#000" }).extractChannel(0).raw().toBuffer();
};
// Blur-and-threshold gives a round structuring element of roughly radius r.
const grow = async (buf, r) => threshold(await blur(buf, r), 255 * 0.08);
const shrink = async (buf, r) => threshold(await blur(buf, r), 255 * 0.92);
const blur = (buf, r) => sharp(buf, { raw: { width: N, height: N, channels: 1 } }).blur(r / 2).extractChannel(0).raw().toBuffer();
const threshold = (buf, t) => { const o = Buffer.alloc(buf.length); for (let i = 0; i < buf.length; i++) o[i] = buf[i] > t ? 255 : 0; return o; };

(async () => {
  const teal = await mask(shape('teal-left') + shape('teal-right'));
  const orange = await mask(shape('orange-left') + shape('orange-right'));
  const tealGrown = await grow(teal, GAP);
  const cut = Buffer.alloc(orange.length);
  for (let i = 0; i < cut.length; i++) cut[i] = orange[i] > 127 && tealGrown[i] === 0 ? 255 : 0;
  const opened = await grow(await shrink(cut, OPEN), OPEN);
  // Opening also nibbles legitimate corners. Those nibbles are tiny, slivers are long:
  // drop only removed regions larger than CORNER px.
  const CORNER = 400;
  const seen = new Uint8Array(cut.length);
  for (let s = 0; s < cut.length; s++) {
    if (!cut[s] || opened[s] || seen[s]) continue;
    const region = [s], stack = [s];
    seen[s] = 1;
    while (stack.length) {
      const p = stack.pop();
      for (const q of [p - 1, p + 1, p - N, p + N]) {
        if (q >= 0 && q < cut.length && cut[q] && !opened[q] && !seen[q]) { seen[q] = 1; stack.push(q); region.push(q); }
      }
    }
    if (region.length > CORNER) for (const p of region) cut[p] = 0;
  }

  const inverted = Buffer.alloc(cut.length);
  for (let i = 0; i < cut.length; i++) inverted[i] = 255 - cut[i];
  const png = await sharp(inverted, { raw: { width: N, height: N, channels: 1 } }).png().toBuffer();
  potrace.trace(png, { threshold: 128, turdSize: 100, optTolerance: 0.3, alphaMax: 1.0 }, (err, out) => {
    if (err) throw err;
    if (!/ d="[^"]/.test(out)) { console.log(out.slice(0, 300), cut.reduce((a, v) => a + (v ? 1 : 0), 0)); return; }
    const d = out.match(/ d="([^"]+)"/)[1].replace(/-?\d+(\.\d+)?/g, n => +(n * 2).toFixed(2));
    fs.mkdirSync(path.join(LOGO, 'source'), { recursive: true });
    fs.writeFileSync(path.join(LOGO, 'source', 'mono-orange-cut.path.txt'), d + '\n');
    console.log('mono path', d.length);
  });
})();
