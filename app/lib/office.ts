// Client-side Office helpers: extract text from .pptx / .epub (both are ZIP+XML)
// and build a real .docx (also ZIP+XML) — all in the browser, nothing uploaded.
// JSZip is dynamically imported so it never touches other pages' bundles.

export type Para = { text: string; heading?: boolean };

function escXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function decodeEntities(s: string): string {
  return s
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, "&");
}

// Build a minimal, valid .docx from paragraphs. Headings render bold + larger
// via run properties, so no separate styles part is required.
export async function buildDocxBlob(paras: Para[]): Promise<Blob> {
  const { default: JSZip } = await import("jszip");
  const zip = new JSZip();

  const body = paras.map((p) => {
    const text = escXml(p.text || "");
    const rPr = p.heading ? "<w:rPr><w:b/><w:sz w:val=\"30\"/></w:rPr>" : "";
    const pPr = p.heading ? "<w:pPr><w:spacing w:before=\"200\" w:after=\"80\"/></w:pPr>" : "";
    return `<w:p>${pPr}<w:r>${rPr}<w:t xml:space="preserve">${text}</w:t></w:r></w:p>`;
  }).join("");

  zip.file("[Content_Types].xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`);
  zip.file("_rels/.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`);
  zip.file("word/document.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr/></w:body></w:document>`);

  return zip.generateAsync({ type: "blob", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
}

export function txtToParagraphs(text: string): Para[] {
  return text.replace(/\r\n?/g, "\n").split("\n").map((line) => ({ text: line }));
}

// Extract text from a .pptx: slides are ppt/slides/slideN.xml; text runs are <a:t>.
export async function extractPptx(file: File): Promise<Para[]> {
  const { default: JSZip } = await import("jszip");
  const zip = await JSZip.loadAsync(file);
  const slideNames = Object.keys(zip.files)
    .filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n))
    .sort((a, b) => (parseInt(a.match(/(\d+)/)![1]) - parseInt(b.match(/(\d+)/)![1])));
  if (!slideNames.length) throw new Error("No slides found. Make sure this is a .pptx file (PowerPoint 2007 or newer).");
  const out: Para[] = [];
  for (let i = 0; i < slideNames.length; i++) {
    const xml = await zip.files[slideNames[i]].async("string");
    out.push({ text: `Slide ${i + 1}`, heading: true });
    // Each <a:p> is a paragraph; concatenate its <a:t> runs.
    const paraBlocks = xml.match(/<a:p>[\s\S]*?<\/a:p>/g) || [];
    let any = false;
    for (const block of paraBlocks) {
      const runs = [...block.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)].map((m) => decodeEntities(m[1]));
      const line = runs.join("").trim();
      if (line) { out.push({ text: line }); any = true; }
    }
    if (!any) out.push({ text: "(no text on this slide)" });
  }
  return out;
}

// Extract text from an .epub: follow the spine order from the OPF, strip HTML.
export async function extractEpub(file: File): Promise<Para[]> {
  const { default: JSZip } = await import("jszip");
  const zip = await JSZip.loadAsync(file);
  let htmlFiles: string[] = [];
  try {
    const container = await zip.file("META-INF/container.xml")!.async("string");
    const opfPath = container.match(/full-path="([^"]+)"/)![1];
    const opfDir = opfPath.includes("/") ? opfPath.slice(0, opfPath.lastIndexOf("/") + 1) : "";
    const opf = await zip.file(opfPath)!.async("string");
    const manifest: Record<string, string> = {};
    for (const m of opf.matchAll(/<item\s[^>]*id="([^"]+)"[^>]*href="([^"]+)"[^>]*>/g)) manifest[m[1]] = m[2];
    const spine = [...opf.matchAll(/<itemref\s[^>]*idref="([^"]+)"/g)].map((m) => manifest[m[1]]).filter(Boolean);
    htmlFiles = spine.map((h) => opfDir + decodeEntities(h));
  } catch {
    htmlFiles = Object.keys(zip.files).filter((n) => /\.x?html?$/i.test(n)).sort();
  }
  if (!htmlFiles.length) throw new Error("No readable content found in this EPUB.");
  const out: Para[] = [];
  for (const name of htmlFiles) {
    const f = zip.file(name);
    if (!f) continue;
    let html = await f.async("string");
    html = html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, "");
    const isHeading = (tag: string) => /^h[1-6]$/i.test(tag);
    // Split into block chunks so paragraphs/headings survive.
    const blocks = html.split(/<\/(p|div|h[1-6]|li|br)>/i);
    for (let i = 0; i < blocks.length; i++) {
      const seg = blocks[i];
      const tagMatch = seg.match(/<(h[1-6])[\s>]/i);
      const text = decodeEntities(seg.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
      if (text) out.push({ text, heading: !!tagMatch && isHeading(tagMatch[1]) });
    }
  }
  if (!out.length) throw new Error("Could not extract text from this EPUB.");
  return out;
}

export function downloadBlob(blob: Blob, name: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
