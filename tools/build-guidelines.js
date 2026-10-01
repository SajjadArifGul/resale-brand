// Builds resale-brand-ui-guidelines-v1.docx and .pdf from the Markdown source of truth.
// Run: cd tools && node build-guidelines.js   (PDF needs Chrome or Edge installed)
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { marked } = require('marked');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, ShadingType,
  BorderStyle, AlignmentType, ImageRun, Header, Footer, PageNumber, LevelFormat, PageBreak,
} = require('docx');

const ROOT = path.join(__dirname, '..');
const BASE = 'resale-brand-ui-guidelines-v1';
const md = fs.readFileSync(path.join(ROOT, `${BASE}.md`), 'utf8');
const LOCKUP_PNG = path.join(ROOT, 'logo', 'lockup', 'resale-lockup-1200.png');

const TEAL = '024E53', INK = '0F172A', SLATE = '64748B', BORDER = 'E2E8F0', SOFT = 'F1F5F9', CODE_BG = 'F8FAFC';
const FONT = 'Inter';
const PAGE_W = 12240, MARGIN = 1200, CONTENT_W = PAGE_W - 2 * MARGIN; // US Letter, DXA

// ---------- DOCX ----------
const inline = (tokens, base = {}) => (tokens || []).flatMap(t => {
  switch (t.type) {
    case 'strong': return inline(t.tokens, { ...base, bold: true });
    case 'em': return inline(t.tokens, { ...base, italics: true });
    case 'codespan': return [new TextRun({ ...base, text: decode(t.text), font: 'Consolas', size: 18, shading: { type: ShadingType.CLEAR, fill: SOFT, color: 'auto' } })];
    case 'link': return inline(t.tokens, { ...base, color: '027B7F', underline: {} });
    case 'br': return [new TextRun({ ...base, break: 1 })];
    case 'text': return t.tokens ? inline(t.tokens, base) : [new TextRun({ ...base, text: decode(t.text) })];
    default: return [new TextRun({ ...base, text: decode(t.raw || t.text || '') })];
  }
});
const decode = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const cellBorders = { top: { style: BorderStyle.SINGLE, size: 4, color: BORDER }, bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER }, left: { style: BorderStyle.SINGLE, size: 4, color: BORDER }, right: { style: BorderStyle.SINGLE, size: 4, color: BORDER } };

function table(t) {
  const cols = t.header.length;
  // Wider first column for 2-col rule tables, even split otherwise.
  const widths = cols === 2 ? [Math.round(CONTENT_W * .3), CONTENT_W - Math.round(CONTENT_W * .3)] : Array(cols).fill(Math.floor(CONTENT_W / cols));
  widths[cols - 1] += CONTENT_W - widths.reduce((a, b) => a + b, 0);
  const row = (cells, head) => new TableRow({
    tableHeader: head,
    children: cells.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      borders: cellBorders,
      shading: head ? { type: ShadingType.CLEAR, fill: SOFT, color: 'auto' } : undefined,
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: inline(c.tokens, head ? { bold: true, size: 18, color: SLATE } : { size: 19 }) })],
    })),
  });
  return new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: widths, rows: [row(t.header, true), ...t.rows.map(r => row(r, false))] });
}

function blocks(tokens) {
  const out = [];
  for (const t of tokens) {
    if (t.type === 'heading') {
      if (t.depth === 1) continue; // title is on the cover
      const level = [null, HeadingLevel.HEADING_1, HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3][t.depth];
      out.push(new Paragraph({ heading: level, children: inline(t.tokens) }));
    } else if (t.type === 'paragraph') {
      out.push(new Paragraph({ children: inline(t.tokens) }));
    } else if (t.type === 'table') {
      out.push(table(t), new Paragraph({ spacing: { after: 60 }, children: [] }));
    } else if (t.type === 'code') {
      const lines = t.text.split('\n');
      lines.forEach((line, i) => out.push(new Paragraph({
        spacing: { before: i === 0 ? 80 : 0, after: i === lines.length - 1 ? 160 : 0 },
        shading: { type: ShadingType.CLEAR, fill: CODE_BG, color: 'auto' },
        border: { left: { style: BorderStyle.SINGLE, size: 12, color: 'CBD5E1', space: 8 } },
        children: [new TextRun({ text: line || ' ', font: 'Consolas', size: 18 })],
      })));
    } else if (t.type === 'list') {
      for (const item of t.items) {
        const first = item.tokens.find(x => x.type === 'text' || x.type === 'paragraph');
        const runs = first ? inline(first.tokens || [{ type: 'text', text: first.text }]) : [];
        if (item.task) runs.unshift(new TextRun({ text: item.checked ? '☑ ' : '☐ ' }));
        out.push(new Paragraph({ numbering: { reference: t.ordered ? 'num' : (item.task ? 'none' : 'bullet'), level: 0 }, children: runs }));
      }
    } else if (t.type === 'hr' || t.type === 'space') {
      // skip
    }
  }
  return out;
}

async function buildDocx() {
  const tokens = marked.lexer(md);
  const title = tokens.find(t => t.type === 'heading' && t.depth === 1).text;
  const meta = md.match(/\*\*Version:\*\*\s*([^\n]+?)\s{2}/)[1];
  const cover = [
    new Paragraph({ spacing: { before: 1600, after: 480 }, alignment: AlignmentType.CENTER, children: [new ImageRun({ type: 'png', data: fs.readFileSync(LOCKUP_PNG), transformation: { width: 360, height: Math.round(360 * 292 / 1200) } })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, children: [new TextRun({ text: title, bold: true, size: 40, color: INK })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 }, children: [new TextRun({ text: `Version ${meta}`, size: 22, color: SLATE })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Web, mobile, print and partner brand implementation standard', size: 22, color: SLATE })] }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
  // Drop the H1 and the version/status lines (already on the cover) from the body.
  const bodyTokens = tokens.filter((t, i) => !(t.type === 'heading' && t.depth === 1) && !(t.type === 'paragraph' && /^\*\*Version:\*\*/.test(t.raw)));

  const doc = new Document({
    creator: 'resale.com.pk', title, subject: 'Web and mobile brand implementation standards',
    keywords: 'resale.com.pk, brand, UI, design system, accessibility, logo lockup',
    styles: {
      default: { document: { run: { font: FONT, size: 20, color: '1E293B' }, paragraph: { spacing: { after: 120, line: 288 } } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 32, bold: true, color: TEAL, font: FONT }, paragraph: { spacing: { before: 480, after: 160 }, keepNext: true, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 25, bold: true, color: INK, font: FONT }, paragraph: { spacing: { before: 320, after: 120 }, keepNext: true, outlineLevel: 1 } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 22, bold: true, color: INK, font: FONT }, paragraph: { spacing: { before: 240, after: 100 }, keepNext: true, outlineLevel: 2 } },
      ],
    },
    numbering: { config: [
      { reference: 'bullet', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] },
      { reference: 'num', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 300 } } } }] },
      { reference: 'none', levels: [{ level: 0, format: LevelFormat.NONE, text: '', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 270, hanging: 0 } } } }] },
    ] },
    sections: [{
      properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: 1300, bottom: 1200, left: MARGIN, right: MARGIN } }, titlePage: true },
      headers: { default: new Header({ children: [new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER, space: 6 } }, children: [new TextRun({ text: `resale.com.pk · Brand and UI guidelines · v${meta.split(' ')[0]}`, size: 16, color: SLATE })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ children: ['Page ', PageNumber.CURRENT], size: 16, color: SLATE })] })] }) },
      children: [...cover, ...blocks(bodyTokens)],
    }],
  });
  fs.writeFileSync(path.join(ROOT, `${BASE}.docx`), await Packer.toBuffer(doc));
}

// ---------- PDF (HTML → headless Chrome/Edge) ----------
function buildPdf() {
  const meta = md.match(/\*\*Version:\*\*\s*([^\n]+?)\s{2}/)[1];
  const body = marked.parse(md.replace(/^# .*\n/, ''));
  const img = 'data:image/png;base64,' + fs.readFileSync(LOCKUP_PNG).toString('base64');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>resale.com.pk Digital Brand and UI Guidelines</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">
<style>
  @page { size: Letter; margin: 18mm 17mm 18mm; }
  body { font: 10pt/1.5 Inter, Arial, sans-serif; color: #1E293B; }
  .cover { height: 230mm; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; page-break-after: always; }
  .cover img { width: 95mm; margin-bottom: 14mm; }
  .cover h1 { font-size: 22pt; color: #0F172A; margin: 0 0 4mm; }
  .cover p { color: #64748B; margin: 1mm 0; }
  h2 { color: #024E53; font-size: 16pt; margin: 9mm 0 3mm; break-after: avoid; }
  h3 { color: #0F172A; font-size: 12pt; margin: 6mm 0 2mm; break-after: avoid; }
  table { border-collapse: collapse; width: 100%; margin: 2mm 0 4mm; font-size: 9pt; break-inside: auto; }
  tr { break-inside: avoid; }
  th, td { border: 1px solid #E2E8F0; padding: 4px 7px; text-align: left; vertical-align: top; }
  th { background: #F1F5F9; color: #64748B; }
  code { font: 8.5pt Consolas, monospace; background: #F1F5F9; padding: 0 3px; border-radius: 3px; }
  pre { background: #F8FAFC; border-left: 3px solid #CBD5E1; padding: 3mm 4mm; break-inside: avoid; }
  pre code { background: none; padding: 0; }
  ul { padding-left: 6mm; } li { margin: 1mm 0; }
  input[type=checkbox] { margin-right: 4px; }
</style></head><body>
<div class="cover"><img src="${img}" alt="resale.com.pk"><h1>resale.com.pk Digital Brand and UI Guidelines</h1><p>Version ${meta}</p><p>Web, mobile, print and partner brand implementation standard</p></div>
${body}</body></html>`;
  const tmp = path.join(require('os').tmpdir(), 'resale-guidelines.html');
  fs.writeFileSync(tmp, html);
  const browsers = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', '/usr/bin/google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'];
  const exe = browsers.find(b => fs.existsSync(b));
  if (!exe) throw new Error('Chrome or Edge not found; PDF not built');
  execFileSync(exe, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000',
    `--print-to-pdf=${path.join(ROOT, `${BASE}.pdf`)}`, 'file:///' + tmp.replace(/\\/g, '/')], { stdio: 'ignore' });
}

(async () => {
  await buildDocx();
  buildPdf();
  console.log('Built', `${BASE}.docx`, 'and', `${BASE}.pdf`);
})();
