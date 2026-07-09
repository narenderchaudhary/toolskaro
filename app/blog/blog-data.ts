// Blog content — original posts. Body sections render as HTML (so they can include <a> links to tools).
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO, datePublished
  category: string;
  readMins: number;
  excerpt: string;
  related: [string, string][]; // [href, label]
  intro: string; // HTML
  sections: { h2: string; html: string }[];
  faqs: { q: string; a: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "resize-photo-and-signature-for-exam-forms",
    title: "How to Resize Your Photo and Signature for Government Exam Forms",
    description: "A step-by-step guide to resizing and compressing your photo and signature to the exact pixel size and KB that SSC, UPSC, IBPS and other exam forms require.",
    date: "2026-06-02",
    category: "Exam forms",
    readMins: 6,
    excerpt: "Every government exam form rejects photos that are the wrong size. Here's how to hit the exact dimensions and KB they ask for — in two minutes, free.",
    related: [["/image-resizer/", "Image Resizer"], ["/image-compressor/", "Image Compressor"], ["/passport-photo-maker/", "Passport Photo Maker"], ["/signature-resize/", "Signature Resize"]],
    intro: "<p>One of the most common reasons an online exam application fails is a simple one: the photo or signature is the wrong size. Every commission — SSC, UPSC, IBPS, SBI, RRB and the state PSCs — specifies an exact pixel dimension <em>and</em> a file-size range in kilobytes, and the upload form rejects anything outside it. The good news is that fixing this takes about two minutes once you know the steps.</p>",
    sections: [
      { h2: "What size does an exam photo and signature need to be?", html: "<p>While each notification has its own numbers, the typical requirements look like this:</p><ul><li><strong>Photograph:</strong> a recent colour photo, JPG/JPEG, roughly <strong>200×230 pixels</strong> (about 3.5×4.5 cm), and a file size of about <strong>20–50 KB</strong>.</li><li><strong>Signature:</strong> signed in black ink on white paper, JPG/JPEG, roughly <strong>140×60 pixels</strong>, and about <strong>10–20 KB</strong>.</li></ul><p>Always confirm the exact figures in the official notification for your exam, because they change from one cycle to the next.</p>" },
      { h2: "Step 1 — Set the correct pixel dimensions", html: "<p>Start with the dimensions, not the file size. Open the <a href=\"/image-resizer/\">Image Resizer</a>, upload your photo, and type the width and height your form specifies — for example 200×230. Keep the aspect-ratio lock on if you don't want to stretch the image, or turn it off to force an exact size. For a clean white-background passport-style photo, use the <a href=\"/passport-photo-maker/\">Passport Photo Maker</a> instead, which has the standard sizes built in.</p>" },
      { h2: "Step 2 — Compress to the exact KB limit", html: "<p>Once the pixels are right, bring the file weight into range. Open the <a href=\"/image-compressor/\">Image Compressor</a> (or a ready-made page like <a href=\"/compress-image-to-50kb/\">compress to 50 KB</a>), upload the resized photo, set the target, and download. The tool keeps the best possible quality while landing at or under your limit. If a form needs a <em>minimum</em> size too, our <a href=\"/increase-image-size-in-kb/\">increase image size</a> tool tops it up.</p>" },
      { h2: "Step 3 — Prepare the signature", html: "<p>Sign in black ink on plain white paper, photograph or scan it, then crop tightly around the strokes. Use <a href=\"/signature-resize/\">Signature Resize</a> to set the dimensions and KB the form needs. A tightly cropped, black-on-white signature compresses to 10–20 KB easily without smudging.</p>" },
      { h2: "A few tips that prevent rejections", html: "<ul><li>Use a recent photo on a plain, light background with your face clearly visible.</li><li>Avoid caps, sunglasses and heavy filters.</li><li>Resize <em>before</em> you compress — it keeps the face sharper.</li><li>Keep the original high-resolution file in case you need a different size later.</li></ul><p>Because every tool runs in your browser, your photo and signature are never uploaded — which matters when you're handling ID documents.</p>" },
    ],
    faqs: [
      { q: "Why does my exam form keep rejecting my photo?", a: "Almost always because the pixel dimensions or the file size in KB are outside the allowed range. Resize to the exact pixels first, then compress to the KB limit." },
      { q: "Should I resize or compress first?", a: "Resize first. Setting the correct pixel dimensions before compressing keeps the photo sharper for any given KB target." },
      { q: "Is it safe to use online tools for my exam photo?", a: "With ToolsKaro, yes — everything runs in your browser and nothing is uploaded, so your photo and signature never leave your device." },
    ],
  },
  {
    slug: "how-to-compress-a-photo-to-50kb",
    title: "How to Compress a Photo to 50 KB Without Losing Quality",
    description: "Learn how to compress any photo to 50 KB (or any KB target) for exam and job forms while keeping it sharp — a simple, free, in-browser method.",
    date: "2026-06-04",
    category: "Image tools",
    readMins: 5,
    excerpt: "50 KB is the most common photo limit on Indian forms. Here's how to hit it while keeping your photo clear.",
    related: [["/compress-image-to-50kb/", "Compress to 50 KB"], ["/image-compressor/", "Image Compressor"], ["/image-resizer/", "Image Resizer"], ["/resize-image-in-kb/", "Resize Image in KB"]],
    intro: "<p>A photo straight from your phone is usually two to five megabytes — fifty to a hundred times bigger than the 50 KB many forms allow. Compressing it sounds like it should ruin the quality, but with the right approach the result still looks crisp. Here's how to get a clean 50 KB photo every time.</p>",
    sections: [
      { h2: "Why 50 KB is so common", html: "<p>50 KB is the sweet spot most Indian exam portals settled on: it's large enough to show a clear, verifiable face, but small enough to upload quickly on a slow connection. SSC, many UPSC stages, banking and central recruitment forms all use it. Some forms ask for less (20–30 KB) or more (100 KB), but if you learn one target, make it 50 KB.</p>" },
      { h2: "The trick: resize the pixels first", html: "<p>The single biggest mistake is compressing a full-resolution photo. A 4000×3000 px phone photo forced down to 50 KB will look soft because there's far too much detail for the file size. Instead, <a href=\"/image-resizer/\">resize it to passport dimensions</a> first — around 200×230 px. At that resolution, 50 KB is plenty, so the compressor barely has to touch the quality.</p>" },
      { h2: "Compress to exactly 50 KB", html: "<p>Open the <a href=\"/compress-image-to-50kb/\">compress to 50 KB</a> page (the target is preset for you) or the general <a href=\"/image-compressor/\">Image Compressor</a> and type 50. Upload your resized photo and download. The tool runs a smart quality search to land at or just under 50 KB while keeping the image as sharp as possible. Need a different number? Use <a href=\"/resize-image-in-kb/\">resize image in KB</a> to type any target.</p>" },
      { h2: "Keep it sharp: do's and don'ts", html: "<ul><li><strong>Do</strong> start from a well-lit photo on a plain background — busy backgrounds add detail and waste your KB budget.</li><li><strong>Do</strong> save as JPG, which compresses photos far more efficiently than PNG.</li><li><strong>Don't</strong> enlarge a small photo to passport size — that always looks blurry.</li><li><strong>Don't</strong> compress the same file repeatedly; start fresh from the original each time.</li></ul>" },
    ],
    faqs: [
      { q: "Does compressing to 50 KB ruin the photo?", a: "Not if you resize to passport dimensions first. At around 200×230 px, 50 KB is enough to keep the photo clear." },
      { q: "What format should the photo be?", a: "JPG/JPEG. It compresses photographs much more efficiently than PNG, so you get a smaller file at the same quality." },
      { q: "Can I compress to other sizes like 20 KB or 100 KB?", a: "Yes — use the Image Compressor and type any target, or open the ready-made page for 20 KB, 100 KB, 200 KB and more." },
    ],
  },
  {
    slug: "passport-size-photo-dimensions-guide",
    title: "Passport Size Photo Dimensions: cm, Inches & Pixels (Full Guide)",
    description: "The complete guide to passport size photo dimensions — India 3.5×4.5 cm, US 2×2 inch — with the exact measurements in centimetres, inches and pixels.",
    date: "2026-06-06",
    category: "Passport photo",
    readMins: 5,
    excerpt: "What exactly is a 'passport size' photo? Here are the dimensions in cm, inches and pixels for India, the US and more.",
    related: [["/passport-photo-maker/", "Passport Photo Maker"], ["/resize-image-in-cm/", "Resize in CM"], ["/image-resizer/", "Image Resizer"], ["/change-image-dpi/", "Change DPI"]],
    intro: "<p>\"Passport size\" sounds standard, but the exact dimensions differ by country and purpose — and getting them wrong means a rejected form or a reprint. This guide lists the real measurements in centimetres, inches and pixels, so you can set your photo correctly the first time.</p>",
    sections: [
      { h2: "Standard passport photo sizes", html: "<p>Here are the most common dimensions:</p><ul><li><strong>India passport &amp; most exam forms:</strong> 3.5 × 4.5 cm — 1.38 × 1.77 inches — about 413 × 531 px at 300 DPI.</li><li><strong>US visa, OCI, Green Card:</strong> 2 × 2 inch — 5.1 × 5.1 cm — 600 × 600 px (a square).</li><li><strong>Schengen / UK visa:</strong> 3.5 × 4.5 cm, the same as India.</li><li><strong>Stamp size (some forms):</strong> about 2 × 2.5 cm.</li></ul>" },
      { h2: "How centimetres convert to pixels", html: "<p>Pixels depend on the DPI (dots per inch). The formula is <strong>pixels = (cm ÷ 2.54) × DPI</strong>. At the standard 300 DPI, a 3.5×4.5 cm photo works out to roughly 413×531 px. If your form specifies a size in centimetres, our <a href=\"/resize-image-in-cm/\">resize in cm</a> tool does the maths and resizes your photo for you; if it gives pixels, use the <a href=\"/image-resizer/\">Image Resizer</a>.</p>" },
      { h2: "The ratio and why it matters", html: "<p>A 3.5×4.5 cm photo has an aspect ratio of about <strong>7:9</strong> (0.78) — slightly taller than wide. A US 2×2 inch photo is a perfect <strong>1:1 square</strong>. If you crop to the wrong ratio, your face ends up stretched or off-centre, which is a common rejection reason. The <a href=\"/passport-photo-maker/\">Passport Photo Maker</a> keeps the correct ratio automatically.</p>" },
      { h2: "Don't forget DPI and background", html: "<p>Many forms expect <strong>300 DPI</strong> and a plain white background. If your file's DPI is wrong, set it with <a href=\"/change-image-dpi/\">change image DPI</a>. For the background, choose white in the passport maker, or remove a busy background first with our background tool. Always confirm the exact size, DPI and background colour in your official instructions.</p>" },
    ],
    faqs: [
      { q: "What is the passport size photo dimension in India?", a: "3.5 × 4.5 cm — about 1.38 × 1.77 inches, or roughly 413 × 531 pixels at 300 DPI, on a white background." },
      { q: "What size is a US passport / visa photo?", a: "2 × 2 inch (5.1 × 5.1 cm), which is 600 × 600 pixels at 300 DPI — a square photo." },
      { q: "What DPI should a passport photo be?", a: "300 DPI is the standard for printing and most forms. You can set the DPI of any image with the Change Image DPI tool." },
    ],
  },
  {
    slug: "jpg-png-webp-heic-image-formats-explained",
    title: "JPG vs PNG vs WebP vs HEIC: Which Image Format Should You Use?",
    description: "A plain-English guide to the main image formats — JPG, PNG, WebP and HEIC — when to use each, and how to convert between them for free.",
    date: "2026-06-08",
    category: "Image tools",
    readMins: 6,
    excerpt: "JPG, PNG, WebP, HEIC — what's the difference, and which one should you actually use? Here's the simple answer.",
    related: [["/image-converter/", "Image Converter"], ["/jpeg-to-jpg/", "JPEG to JPG"], ["/png-to-jpg/", "PNG to JPG"], ["/heic-to-jpg/", "HEIC to JPG"]],
    intro: "<p>Image formats can be confusing: your phone saves HEIC, websites prefer WebP, forms demand JPG, and PNG shows up everywhere. Here's what each one is good at, so you always pick the right format — and how to convert when you need to.</p>",
    sections: [
      { h2: "JPG (JPEG) — the universal photo format", html: "<p>JPG and JPEG are the same format (just different extensions). It uses smart, lossy compression, which makes photographs small while still looking good — perfect for forms, email and uploads. It's the safest, most compatible choice for any photo. If you have a <code>.jpeg</code> file but need <code>.jpg</code>, our <a href=\"/jpeg-to-jpg/\">JPEG to JPG</a> tool simply re-saves it.</p>" },
      { h2: "PNG — for graphics and transparency", html: "<p>PNG is lossless and supports transparency, which makes it ideal for logos, screenshots and graphics with sharp edges. The downside: photo-style PNGs are large. If a PNG photo is too big for an upload, convert it with <a href=\"/png-to-jpg/\">PNG to JPG</a> to shrink it dramatically (note that JPG removes transparency, replacing it with white).</p>" },
      { h2: "WebP — the modern web format", html: "<p>WebP is a newer Google format that's smaller than both JPG and PNG at similar quality, which is why websites love it. The catch is compatibility: some apps, editors and upload forms still won't open WebP. When that happens, convert it with <a href=\"/webp-to-jpg/\">WebP to JPG</a> or <a href=\"/webp-to-pdf/\">WebP to PDF</a>.</p>" },
      { h2: "HEIC — what your iPhone uses", html: "<p>HEIC (HEIF) is Apple's space-saving format, the default on iPhones. It's efficient but poorly supported outside the Apple ecosystem — Windows PCs, many websites and forms can't open it. Convert iPhone photos with <a href=\"/heic-to-jpg/\">HEIC to JPG</a> for images or <a href=\"/heic-to-pdf/\">HEIC to PDF</a> for documents.</p>" },
      { h2: "Quick recommendation", html: "<ul><li><strong>Uploading a photo to a form?</strong> Use JPG.</li><li><strong>Logo or screenshot with transparency?</strong> Use PNG.</li><li><strong>Building a fast website?</strong> Use WebP, but offer JPG fallbacks.</li><li><strong>iPhone photo that won't open?</strong> Convert HEIC to JPG.</li></ul><p>Whatever you have, the all-in-one <a href=\"/image-converter/\">image converter</a> switches between PNG, JPG and WebP in a click — all in your browser, nothing uploaded.</p>" },
    ],
    faqs: [
      { q: "Is JPG or PNG better?", a: "JPG is better for photographs (much smaller files); PNG is better for graphics, logos and anything needing transparency or sharp edges." },
      { q: "Why won't my iPhone photo open on Windows?", a: "iPhones save photos as HEIC, which Windows and many apps don't support. Convert it to JPG and it will open everywhere." },
      { q: "Should I use WebP?", a: "WebP is great for websites because it's smaller, but not all apps and forms accept it. For uploads and compatibility, JPG is safer." },
    ],
  },
  {
    slug: "how-to-compress-a-pdf-below-an-upload-limit",
    title: "How to Compress a PDF Below an Upload Limit (200 KB to 1 MB)",
    description: "A simple guide to compressing a PDF below a portal's size limit — 200 KB, 500 KB, 1 MB or 2 MB — while keeping the pages readable, free and in your browser.",
    date: "2026-06-10",
    category: "PDF tools",
    readMins: 5,
    excerpt: "Portal won't accept your PDF because it's too big? Here's how to shrink it under the limit without making it unreadable.",
    related: [["/pdf/compress/", "Compress PDF"], ["/compress-pdf-to-200kb/", "Compress to 200 KB"], ["/pdf/split/", "Split PDF"], ["/resize-pdf/", "Resize PDF"]],
    intro: "<p>Scanned documents are deceptively large — a single colour scan can be several megabytes, far over the limit most exam, bank and visa portals set. Here's how to compress a PDF below the size you need while keeping the text and stamps clearly legible.</p>",
    sections: [
      { h2: "Why scanned PDFs are so large", html: "<p>A PDF made from photos or scans is essentially a stack of images, and colour images at high resolution are heavy. That's why a three-page scan can be 5–10 MB. Compressing works by re-encoding those page images at a lower (but still readable) quality, which can cut the size by 70–90%.</p>" },
      { h2: "Compress to a specific target", html: "<p>The easiest way is a target page. Pick the limit your portal sets — <a href=\"/compress-pdf-to-200kb/\">200 KB</a> is the most common, with <a href=\"/compress-pdf-to-100kb/\">100 KB</a>, <a href=\"/compress-pdf-to-500kb/\">500 KB</a>, <a href=\"/compress-pdf-to-1mb/\">1 MB</a> and <a href=\"/compress-pdf-to-2mb/\">2 MB</a> also available — drop in your file, and download. The tool finds the highest quality that fits under your target. For a general squeeze, use <a href=\"/pdf/compress/\">Compress PDF</a>.</p>" },
      { h2: "If it's still too big", html: "<p>A few extra moves help on stubborn files:</p><ul><li>Scan in <strong>greyscale or black-and-white</strong> where colour isn't required — it compresses far smaller.</li><li><a href=\"/pdf/split/\">Split the PDF</a> or <a href=\"/pdf/delete-pages/\">delete blank pages</a> to remove weight before compressing.</li><li>If the file is a mix of odd page sizes, <a href=\"/resize-pdf/\">resize it to A4</a> first for consistency.</li></ul>" },
      { h2: "Keep it private", html: "<p>Because the whole process runs in your browser, your documents are never uploaded — which is exactly what you want for bank statements, certificates and ID proofs. Always confirm the exact size limit and format in your portal's official instructions before uploading.</p>" },
    ],
    faqs: [
      { q: "What's the most common PDF upload limit?", a: "200 KB is very common on Indian exam and recruitment portals, though many use 500 KB, 1 MB or 2 MB. Always check your form's instructions." },
      { q: "Will compressing make the text unreadable?", a: "No — the tool keeps the highest quality that fits your target, so the pages stay legible. Scanning in greyscale first helps on heavy files." },
      { q: "Is the compression done on a server?", a: "No. It runs entirely in your browser, so your PDF is never uploaded — important for sensitive documents." },
    ],
  },
  {
    slug: "heic-files-explained",
    title: "HEIC Files Explained: Why iPhone Photos Won't Open and How to Fix It",
    description: "What a HEIC file is, why your iPhone photos won't open on Windows or websites, and how to convert HEIC to JPG or PDF for free in your browser.",
    date: "2026-06-12",
    category: "Image tools",
    readMins: 5,
    excerpt: "Sent an iPhone photo and the other person can't open it? It's a HEIC file. Here's what that means and how to fix it.",
    related: [["/heic-to-jpg/", "HEIC to JPG"], ["/heic-to-pdf/", "HEIC to PDF"], ["/image-converter/", "Image Converter"], ["/image-compressor/", "Image Compressor"]],
    intro: "<p>You email a photo from your iPhone, and the person on the other end says it won't open. The culprit is almost always a HEIC file. Here's what HEIC is, why it causes trouble, and the quick fix.</p>",
    sections: [
      { h2: "What is a HEIC file?", html: "<p>HEIC (High Efficiency Image Container) is the format iPhones and iPads use to save photos by default. It's based on the HEIF standard and stores a photo at roughly half the size of a JPG at similar quality. Great for saving space on your phone — less great when you need to share it.</p>" },
      { h2: "Why HEIC won't open elsewhere", html: "<p>HEIC is well supported inside Apple's ecosystem but poorly supported outside it. Many Windows PCs, older Android phones, websites, editing apps and government upload forms simply can't read it. So a photo that looks fine on your iPhone becomes an \"unsupported file\" everywhere else.</p>" },
      { h2: "The fix: convert HEIC to JPG or PDF", html: "<p>The simplest solution is to convert HEIC to a universal format. Use <a href=\"/heic-to-jpg/\">HEIC to JPG</a> to turn photos into standard images that open anywhere, or <a href=\"/heic-to-pdf/\">HEIC to PDF</a> to combine photographed documents into one PDF you can upload. Both run in your browser, so your photos are never uploaded.</p>" },
      { h2: "Stop your iPhone making HEIC files", html: "<p>If you'd rather avoid the problem entirely, change your camera setting: open <strong>Settings → Camera → Formats</strong> and choose <strong>Most Compatible</strong>. Your iPhone will then save new photos as JPG. (You'll use a bit more storage, but you'll never hit the \"can't open\" issue again.) Existing HEIC photos still need converting.</p>" },
    ],
    faqs: [
      { q: "How do I open a HEIC file?", a: "On Apple devices it opens natively. Elsewhere, convert it to JPG first using a HEIC to JPG tool — then it opens on any device." },
      { q: "Does converting HEIC to JPG lose quality?", a: "There's a tiny re-compression, but at high quality the JPG looks the same. JPG files are a little larger than HEIC because the format is less efficient." },
      { q: "Can I stop my iPhone saving HEIC?", a: "Yes — go to Settings → Camera → Formats and choose 'Most Compatible' to save new photos as JPG." },
    ],
  },
  {
    slug: "exam-photo-and-signature-requirements",
    title: "Photo & Signature Requirements for SSC, IBPS, UPSC & RRB Exams",
    description: "A clear summary of the photo and signature requirements for major Indian exams — SSC, IBPS, SBI, UPSC and RRB — including the extra uploads bank exams need.",
    date: "2026-06-14",
    category: "Exam forms",
    readMins: 6,
    excerpt: "Each commission has its own photo and signature rules — and bank exams need even more. Here's a quick reference.",
    related: [["/photo-resize-for-ssc-cgl/", "SSC CGL Photo"], ["/photo-resize-for-ibps-po/", "IBPS PO Photo"], ["/photo-resize-for-upsc/", "UPSC Photo"], ["/image-compressor/", "Image Compressor"]],
    intro: "<p>Before you fill any government exam form, it pays to know exactly what photo and signature it expects — and a few exams ask for more than two uploads. Here's a quick reference for the major commissions, with links to detailed pages for each.</p>",
    sections: [
      { h2: "SSC (CGL, CHSL, MTS)", html: "<p>The Staff Selection Commission uses a One-Time Registration, so your photo and signature are stored once and reused across SSC exams. Expect a recent colour photo around 20–50 KB and a signature of about 10–20 KB. See the detailed pages for <a href=\"/photo-resize-for-ssc-cgl/\">SSC CGL</a>, <a href=\"/photo-resize-for-ssc-chsl/\">SSC CHSL</a> and <a href=\"/photo-resize-for-ssc-mts/\">SSC MTS</a>.</p>" },
      { h2: "Banking exams (IBPS & SBI) — four uploads", html: "<p>Bank exams are different: you must upload <strong>four</strong> images, not two — a photograph, a signature, a <strong>left thumb impression</strong>, and a <strong>handwritten declaration</strong> (a fixed paragraph copied in your own running handwriting, not capitals). Prepare all four in advance. See <a href=\"/photo-resize-for-ibps-po/\">IBPS PO</a>, <a href=\"/photo-resize-for-ibps-clerk/\">IBPS Clerk</a> and <a href=\"/photo-resize-for-sbi-po/\">SBI PO</a>.</p>" },
      { h2: "UPSC Civil Services", html: "<p>UPSC has a distinctive rule: the photograph must show your <strong>name and the date</strong> the photo was taken printed at the bottom. A plain photo without this strip can be rejected. UPSC also allows a larger file (often up to about 300 KB). See the <a href=\"/photo-resize-for-upsc/\">UPSC photo and signature</a> page.</p>" },
      { h2: "Railways (RRB NTPC & Group D)", html: "<p>Railway exams typically want a recent colour photo, often taken within the last three months, at around 15–40 KB. Because Group D includes a Physical Efficiency Test where your face is matched to the upload, use a current, clearly lit photo. See <a href=\"/photo-resize-for-rrb-ntpc/\">RRB NTPC</a> and <a href=\"/photo-resize-for-rrb-group-d/\">RRB Group D</a>.</p>" },
      { h2: "Get every file sized in minutes", html: "<p>Once you know the numbers, the <a href=\"/image-resizer/\">Image Resizer</a>, <a href=\"/image-compressor/\">Image Compressor</a> and <a href=\"/signature-resize/\">Signature Resize</a> tools hit them in a click — free and in your browser. Always confirm the exact figures in the official notification, as requirements change each cycle.</p>" },
    ],
    faqs: [
      { q: "Which exams need a thumb impression and handwritten declaration?", a: "Banking exams — IBPS PO, IBPS Clerk and SBI PO — require four uploads: photo, signature, left thumb impression and a handwritten declaration." },
      { q: "Does the UPSC photo really need a name and date?", a: "Yes. UPSC requires the photograph to show your name and the date it was taken printed at the bottom, or it can be rejected." },
      { q: "Can I reuse my SSC photo across SSC exams?", a: "Yes. SSC uses One-Time Registration, so the photo and signature in your profile are reused for SSC CGL, CHSL, MTS and more." },
    ],
  },
  {
    slug: "combine-images-and-documents-into-one-pdf",
    title: "How to Combine Multiple Images or Documents Into One PDF",
    description: "Turn several photos, scans or PDFs into a single PDF for free — perfect for applications that want one document. Step-by-step, in your browser.",
    date: "2026-06-15",
    category: "PDF tools",
    readMins: 5,
    excerpt: "Need to submit several pages as one file? Here's how to combine images and PDFs into a single document.",
    related: [["/pdf/jpg-to-pdf/", "Image to PDF"], ["/pdf/merge/", "Merge PDF"], ["/heic-to-pdf/", "HEIC to PDF"], ["/pdf/compress/", "Compress PDF"]],
    intro: "<p>Many applications — visas, jobs, admissions, loans — ask for your documents as a single PDF, not a pile of separate images or files. Combining them is quick once you know which tool to use for each starting point.</p>",
    sections: [
      { h2: "Combining photos or scans into a PDF", html: "<p>If you have photos or phone scans of documents, use <a href=\"/pdf/jpg-to-pdf/\">Image to PDF</a> (it accepts JPG, PNG and WebP). Add your images, put them in the right order — each becomes one page — and download a single PDF. On an iPhone, photos are HEIC; convert and combine them in one step with <a href=\"/heic-to-pdf/\">HEIC to PDF</a>.</p>" },
      { h2: "Merging existing PDFs", html: "<p>If you already have several PDF files — say, monthly bank statements or separate certificates — use <a href=\"/pdf/merge/\">Merge PDF</a>. Add the files, drag them into the order you want, and merge into one document. There's a dedicated guide for <a href=\"/combine-bank-statements-pdf/\">combining bank statements</a> too.</p>" },
      { h2: "Getting the order and size right", html: "<p>Order matters for documents, so arrange files before combining (oldest to newest is common for statements). After merging, if the file is too big for an upload, run it through <a href=\"/pdf/compress/\">Compress PDF</a> or a target like <a href=\"/compress-pdf-to-500kb/\">500 KB</a>. To standardise odd page sizes, <a href=\"/resize-pdf/\">resize the PDF to A4</a>.</p>" },
      { h2: "Why do it in the browser", html: "<p>Combining documents online usually means uploading them to a stranger's server. With ToolsKaro, the PDF is built entirely on your device, so your personal papers never leave your browser — the safe way to handle IDs, statements and certificates.</p>" },
    ],
    faqs: [
      { q: "How do I put multiple photos into one PDF?", a: "Use the Image to PDF tool: add your photos in order (each becomes a page) and download a single PDF. It accepts JPG, PNG and WebP." },
      { q: "How do I merge several PDF files?", a: "Use Merge PDF — add the files, arrange them in order, and combine them into one document, all in your browser." },
      { q: "The combined PDF is too large — what now?", a: "Run it through Compress PDF or a target size like 500 KB or 1 MB to bring it under the upload limit while keeping it readable." },
    ],
  },
  {
    slug: "resume-pdf-tips-size-format-ats",
    title: "Resume PDF Tips: Size, Format and Passing ATS Systems",
    description: "How to save your resume as a clean PDF that fits upload limits, keeps formatting, and passes applicant tracking systems (ATS) — with free tools to do it.",
    date: "2026-06-16",
    category: "Career",
    readMins: 6,
    excerpt: "A great resume gets rejected if the file is too big or unreadable by an ATS. Here's how to get the PDF right.",
    related: [["/resume-maker/", "Resume Maker"], ["/compress-resume-pdf/", "Compress Resume PDF"], ["/cover-letter-generator/", "Cover Letter"], ["/pdf/merge/", "Merge PDF"]],
    intro: "<p>Recruiters and applicant tracking systems (ATS) judge your resume before a human ever reads it — and a badly formatted or oversized file can cost you the interview. Here's how to make a resume PDF that's small, clean and ATS-friendly.</p>",
    sections: [
      { h2: "Why PDF (usually) wins", html: "<p>PDF preserves your layout exactly across every device, which is why most employers ask for it. The one caveat: a few older ATS prefer .docx, so always follow the job posting's instructions. When it says PDF, make sure yours is a true text-based PDF, not a scanned image of a printout — an image-only resume is invisible to an ATS.</p>" },
      { h2: "Keep the file size down", html: "<p>Many portals and email systems cap attachments at around 1–2 MB, and a resume with a photo or a designed header can blow past that. If yours is too big, <a href=\"/compress-resume-pdf/\">compress your resume PDF</a> to slip under the limit while staying crisp. Building from scratch? Our <a href=\"/resume-maker/\">Resume Maker</a> exports a clean, lightweight PDF.</p>" },
      { h2: "Make it ATS-readable", html: "<ul><li>Use a standard, single-column layout — ATS software struggles with complex tables and multi-column designs.</li><li>Use real text, not text inside an image, so the system can parse it.</li><li>Stick to common fonts and clear section headings (Experience, Education, Skills).</li><li>Avoid putting key details only in headers/footers, which some parsers ignore.</li></ul>" },
      { h2: "One file for the whole application", html: "<p>If a posting asks for a resume and cover letter together, write the letter with our <a href=\"/cover-letter-generator/\">Cover Letter Generator</a> and <a href=\"/pdf/merge/\">merge them into one PDF</a>. A single, well-named file (FirstName_LastName_Resume.pdf) looks more professional than several attachments.</p>" },
    ],
    faqs: [
      { q: "Should I send my resume as PDF or Word?", a: "PDF preserves your formatting and is preferred by most employers. Send Word only if the job posting specifically asks for it." },
      { q: "What size should a resume PDF be?", a: "Aim for under 1–2 MB for most portals and email. If yours is larger, compress it with a resume PDF compressor." },
      { q: "How do I make my resume ATS-friendly?", a: "Use a simple single-column layout with real text (not an image), standard fonts and clear headings, and avoid complex tables." },
    ],
  },
  {
    slug: "how-to-make-a-passport-photo-at-home",
    title: "How to Make a Passport Size Photo at Home for Free",
    description: "Make a professional passport size photo at home for free — correct size, white background and the right file size — without a studio. Step-by-step guide.",
    date: "2026-06-17",
    category: "Passport photo",
    readMins: 5,
    excerpt: "Skip the studio. Here's how to turn a normal photo into a proper passport size photo at home, for free.",
    related: [["/passport-photo-maker/", "Passport Photo Maker"], ["/remove-background/", "Remove Background"], ["/image-compressor/", "Image Compressor"], ["/resize-image-in-cm/", "Resize in CM"]],
    intro: "<p>A trip to the studio for a few passport prints costs time and money — and you still have to scan them for online forms. With a phone and a couple of free tools, you can make a perfectly compliant passport size photo at home in minutes.</p>",
    sections: [
      { h2: "Take a good base photo", html: "<p>Stand against a plain, light-coloured wall in even, natural light (face a window). Keep a neutral expression, look straight at the camera, and make sure your whole head and the top of your shoulders are in frame, with no caps, sunglasses or harsh shadows. Have someone take the photo from a metre or so away to avoid distortion.</p>" },
      { h2: "Set the size and white background", html: "<p>Open the <a href=\"/passport-photo-maker/\">Passport Photo Maker</a>, upload your photo, and pick the size your application needs (3.5×4.5 cm for India, 2×2 inch for US visa). Choose a white background and use \"crop to fill\" so your face is centred. If your wall wasn't plain, <a href=\"/remove-background/\">remove the background</a> first, then come back to set the size.</p>" },
      { h2: "Hit the file-size and DPI rules", html: "<p>Forms usually want the photo at <strong>300 DPI</strong> and within a KB range. Compress it to the limit with the <a href=\"/image-compressor/\">Image Compressor</a>, set the DPI with <a href=\"/change-image-dpi/\">change image DPI</a> if needed, and use <a href=\"/resize-image-in-cm/\">resize in cm</a> for an exact centimetre size. Always confirm the exact requirements in your official instructions.</p>" },
      { h2: "Print or upload", html: "<p>For an online form, your downloaded photo is ready to upload. To print, place several copies on a 4×6 sheet at a local shop or home printer. Because everything runs in your browser, your photo is never uploaded — a private, free alternative to the studio.</p>" },
    ],
    faqs: [
      { q: "Can I make a passport photo with my phone?", a: "Yes. Take a clear, front-facing photo against a plain wall in good light, then use a passport photo maker to set the size, white background and file size." },
      { q: "How do I get a white background?", a: "Choose the white background option in the Passport Photo Maker. If your original has a busy background, remove it first with a background-removal tool." },
      { q: "Is it free to make a passport photo at home?", a: "Yes — the tools are completely free with no watermark or sign-up, and nothing is uploaded, so your photo stays private." },
    ],
  },
  {
    slug: "how-to-remove-the-background-from-a-photo",
    title: "How to Remove the Background from a Photo for Free",
    description: "Remove the background from a photo for free in your browser — for passport photos, product images and profile pictures. No watermark, no sign-up, nothing uploaded.",
    date: "2026-06-18",
    category: "Image tools",
    readMins: 5,
    excerpt: "Cut out the background of any photo automatically — no design skills, no watermark, and nothing uploaded.",
    related: [["/remove-background/", "Remove Background"], ["/passport-photo-maker/", "Passport Photo Maker"], ["/crop-image/", "Crop Image"], ["/image-converter/", "Image Converter"]],
    intro: "<p>Removing the background from a photo used to mean fiddly manual selection in an editor. Now it takes one click — the tool detects the subject automatically and cuts everything else away. Here's when you need it and how to do it for free.</p>",
    sections: [
      { h2: "When you need a clean background", html: "<p>A transparent or plain background is essential for several everyday tasks: a <strong>passport or ID photo</strong> that requires a white background, a <strong>product photo</strong> for a marketplace listing, a <strong>profile picture</strong> that needs to stand out, or a <strong>signature</strong> isolated on white. Removing the original background makes any of these look professional.</p>" },
      { h2: "How to remove a background in one click", html: "<p>Open the <a href=\"/remove-background/\">Remove Background</a> tool and upload your photo. It uses on-device AI to detect the person or object and erase everything behind it, leaving a transparent PNG you can download. Because it runs in your browser, your photo is never uploaded — important for personal pictures.</p>" },
      { h2: "Add a white (or any) background back", html: "<p>For a passport or ID photo, you usually need a solid white background rather than transparency. After removing the background, open the <a href=\"/passport-photo-maker/\">Passport Photo Maker</a>, which places your cut-out subject on a clean white (or light blue / grey) background at the correct size. You can also <a href=\"/crop-image/\">crop</a> to the exact shape you need.</p>" },
      { h2: "Tips for the best cut-out", html: "<ul><li>Start from a photo where the subject is clearly separated from the background and well lit.</li><li>Avoid backgrounds that are the same colour as the subject's clothing or hair.</li><li>Save as PNG to keep the transparency; convert to JPG (which adds a white background) only when the form needs it.</li></ul>" },
    ],
    faqs: [
      { q: "How do I remove a background from a photo for free?", a: "Upload your photo to the Remove Background tool — it automatically detects the subject and erases the background, giving you a transparent PNG to download, all in your browser." },
      { q: "Is there a watermark?", a: "No. The tool is completely free with no watermark and no sign-up, and nothing is uploaded to a server." },
      { q: "How do I get a white background for a passport photo?", a: "Remove the background first, then use the Passport Photo Maker to place your subject on a solid white background at the correct passport size." },
    ],
  },
  {
    slug: "how-to-reduce-pdf-size-for-email",
    title: "How to Reduce PDF Size for Email Attachments",
    description: "Reduce a PDF's size so it fits an email attachment limit (like Gmail's 25 MB) for free. Compress documents in your browser — no watermark, no sign-up, nothing uploaded.",
    date: "2026-06-19",
    category: "PDF tools",
    readMins: 5,
    excerpt: "Email bouncing because your PDF is too big? Here's how to shrink it under the attachment limit.",
    related: [["/pdf/compress/", "Compress PDF"], ["/compress-pdf-to-2mb/", "Compress to 2 MB"], ["/pdf/split/", "Split PDF"], ["/pdf/merge/", "Merge PDF"]],
    intro: "<p>Most email providers cap attachments — Gmail and Outlook at around 25 MB, others lower — and a scanned or image-heavy PDF can blow past that easily. Here's how to reduce a PDF so it sends without bouncing.</p>",
    sections: [
      { h2: "Why PDFs get too big for email", html: "<p>A PDF made from photos or high-resolution scans is essentially a stack of images, which are heavy. Add a few colour pages and you're quickly over the limit. Compressing re-encodes those page images at a lower but still readable quality, often cutting the size by 70–90%.</p>" },
      { h2: "Compress the PDF", html: "<p>Open <a href=\"/pdf/compress/\">Compress PDF</a>, drop in your file, and download the smaller version — or aim for a specific target like <a href=\"/compress-pdf-to-2mb/\">2 MB</a> or <a href=\"/compress-pdf-to-1mb/\">1 MB</a> to be safely under any email limit. Everything runs in your browser, so your document is never uploaded.</p>" },
      { h2: "Still too big? Split or send a link", html: "<p>If a single PDF won't compress enough, <a href=\"/pdf/split/\">split it</a> into parts and send them across a couple of emails, or remove pages you don't need first. For very large files, a cloud-storage link (Drive, Dropbox) is often more reliable than an attachment. Tip: name the file clearly so the recipient knows what it is.</p>" },
      { h2: "Keep it readable", html: "<p>The goal is small <em>and</em> legible. The compressor keeps the highest quality that fits, so text and stamps stay clear. If you're starting from a scan, scanning in greyscale rather than full colour produces a much smaller file to begin with.</p>" },
    ],
    faqs: [
      { q: "What is the email attachment size limit?", a: "Gmail and Outlook allow about 25 MB per email; some providers are lower. If your PDF is over the limit, compress it or send a cloud-storage link instead." },
      { q: "How do I make a PDF smaller for email?", a: "Use the Compress PDF tool, or compress to a target like 2 MB. It reduces the file in your browser while keeping the pages readable." },
      { q: "Will compressing make my PDF unreadable?", a: "No — it keeps the highest quality that fits your target. For heavy scans, scanning in greyscale first helps a lot." },
    ],
  },
  {
    slug: "image-dpi-explained-300-dpi",
    title: "Image DPI Explained: What 300 DPI Means and How to Change It",
    description: "Understand image DPI — what 300 DPI means, the difference between DPI and pixels, and how to change a photo's DPI for free for exam forms and printing.",
    date: "2026-06-20",
    category: "Image tools",
    readMins: 5,
    excerpt: "Forms ask for '300 DPI' — but what does that actually mean, and how do you set it? Here's the plain-English answer.",
    related: [["/change-image-dpi/", "Change Image DPI"], ["/resize-image-in-cm/", "Resize in CM"], ["/image-resizer/", "Image Resizer"], ["/passport-photo-maker/", "Passport Photo Maker"]],
    intro: "<p>\"Submit your photo at 300 DPI.\" It's a common instruction on exam and print forms, and it confuses a lot of people. Here's what DPI really means, how it differs from pixels, and how to set it in seconds.</p>",
    sections: [
      { h2: "What DPI actually means", html: "<p>DPI stands for <strong>dots per inch</strong> — the print resolution stored in an image file. It tells a printer how many pixels to pack into each inch of paper, which decides how large (and how sharp) the photo prints. 300 DPI is the standard for crisp printing and is what most exam and passport forms expect.</p>" },
      { h2: "DPI vs pixels — the key difference", html: "<p>This trips everyone up: <strong>DPI doesn't change the number of pixels</strong> in your image. A 600×600 px photo is still 600×600 px whether it's tagged 72 DPI or 300 DPI — what changes is the print size. At 300 DPI those 600 pixels print as 2 inches; at 72 DPI they'd print much larger and look blocky. So DPI is about <em>printing</em>, not the pixel dimensions on screen.</p>" },
      { h2: "How to change a photo's DPI", html: "<p>Use <a href=\"/change-image-dpi/\">Change Image DPI</a>: pick 300 (or any value), upload your photo, and download. The tool writes the DPI into the file without resampling the pixels, so the image stays the same size and just reports the correct DPI. It runs in your browser, so nothing is uploaded.</p>" },
      { h2: "Getting both DPI and physical size right", html: "<p>Some forms want a specific physical size <em>and</em> 300 DPI — for example a 3.5×4.5 cm photo at 300 DPI. Set the size first with <a href=\"/resize-image-in-cm/\">resize in cm</a> (it works out the pixels for you), or the <a href=\"/image-resizer/\">Image Resizer</a> for pixels, then set the DPI. Always confirm the exact requirement in your official instructions.</p>" },
    ],
    faqs: [
      { q: "What does 300 DPI mean?", a: "300 dots per inch — the print resolution stored in the image. It tells a printer to pack 300 pixels into each inch, which is the standard for sharp passport and exam photos." },
      { q: "Does changing DPI change the image quality?", a: "No. Changing the DPI tag doesn't resample the pixels, so the image keeps the same dimensions and quality — only the print size and the DPI value change." },
      { q: "How do I change a photo to 300 DPI?", a: "Use the Change Image DPI tool: set 300, upload your photo, and download. It writes the DPI into the file in your browser." },
    ],
  },
  {
    slug: "how-to-make-a-professional-email-signature",
    title: "How to Make a Professional Email Signature for Gmail & Outlook",
    description: "Create a professional email signature for free — with your name, title, company, photo and social links — and add it to Gmail or Outlook. No sign-up, in your browser.",
    date: "2026-06-21",
    category: "Career",
    readMins: 6,
    excerpt: "A clean email signature makes every message look credible. Here's how to build one and add it to Gmail or Outlook.",
    related: [["/email-signature-maker/", "Email Signature Maker"], ["/resume-maker/", "Resume Maker"], ["/cover-letter-generator/", "Cover Letter"], ["/qr-code-generator/", "QR Code Generator"]],
    intro: "<p>A professional email signature makes every message you send look credible and makes it easy for people to reach you. You don't need a designer — here's how to build a polished signature and add it to Gmail or Outlook in a few minutes.</p>",
    sections: [
      { h2: "What a good email signature includes", html: "<p>Keep it clean and useful. The essentials are your <strong>full name, job title, company, and one or two contact methods</strong> (email, phone or website). Optionally add a small photo or logo, a brand colour, and links to your professional profiles. Avoid clutter — long quotes, multiple images and big banners look unprofessional and can trigger spam filters.</p>" },
      { h2: "Build your signature", html: "<p>Open the <a href=\"/email-signature-maker/\">Email Signature Maker</a>, fill in your details, add a profile photo, pick a template and a brand colour, and add your social links (LinkedIn, X, etc.). You'll see a live preview as you type. When it looks right, click to copy it — it's generated as clean, email-safe HTML so it pastes correctly.</p>" },
      { h2: "Add it to Gmail or Outlook", html: "<p>In <strong>Gmail</strong>: copy the signature, then go to Settings → See all settings → General → Signature → Create new, and paste. Save changes at the bottom. In <strong>Outlook</strong> (web): Settings → Mail → Compose and reply → Signature, and paste. Your formatted signature, photo and social icons will appear on new emails.</p>" },
      { h2: "Tips for a signature that works everywhere", html: "<ul><li>Host your photo online or keep it small so it loads in every email client.</li><li>Use the brand-coloured social icons rather than huge logos.</li><li>Pair it with a matching <a href=\"/resume-maker/\">resume</a> and <a href=\"/cover-letter-generator/\">cover letter</a> for a consistent personal brand.</li></ul>" },
    ],
    faqs: [
      { q: "How do I create an email signature for free?", a: "Use the Email Signature Maker: enter your name, title, company, photo and social links, choose a template, and copy the result into Gmail or Outlook. It's free with no sign-up." },
      { q: "How do I add a signature to Gmail?", a: "Copy your signature, then in Gmail go to Settings → See all settings → Signature → Create new, paste it, and save changes." },
      { q: "Will the photo and icons show in every email?", a: "The social icons are hosted, so they show everywhere. For your photo to appear in every client, host it online or keep it small." },
    ],
  },
  {
    slug: "how-to-increase-image-size-in-kb",
    title: "How to Increase Image Size in KB (For Minimum Size Limits)",
    description: "Some forms require a minimum file size. Here's how to increase a photo's size in KB — to 20 KB, 50 KB or any minimum — for free, without losing quality.",
    date: "2026-06-22",
    category: "Image tools",
    readMins: 4,
    excerpt: "Form rejecting your photo for being too small? Here's how to increase its file size to meet a minimum.",
    related: [["/increase-image-size-in-kb/", "Increase Image Size in KB"], ["/image-compressor/", "Image Compressor"], ["/resize-image-in-kb/", "Resize Image in KB"], ["/image-resizer/", "Image Resizer"]],
    intro: "<p>Most guides explain how to make a photo <em>smaller</em>. But some forms set a <strong>minimum</strong> file size too — and an image that's too small gets rejected just like one that's too big. Here's how to increase a photo's size in KB to meet a minimum.</p>",
    sections: [
      { h2: "Why would a form need a minimum size?", html: "<p>A minimum file size is a rough check that your photo has enough detail to be verifiable — a 5 KB image is usually too low-quality to confirm a face. So a form might require, say, \"20 KB to 50 KB\". If your photo is under 20 KB (common after heavy compression or for a small crop), you need to increase it.</p>" },
      { h2: "How to increase image size in KB", html: "<p>Open <a href=\"/increase-image-size-in-kb/\">Increase Image Size in KB</a>, set the minimum you need (for example 20 KB), and upload your photo. The tool re-saves it at top quality — enlarging it slightly if necessary — and tops the file up to reach your target, then lets you download it. It runs entirely in your browser.</p>" },
      { h2: "Does it reduce quality?", html: "<p>No. Increasing the file size doesn't damage the image — the tool keeps your photo at full quality and adds harmless data to reach the size. The picture looks identical; it just weighs more on disk, so it passes the minimum-size check. The result is a standard JPG that uploads anywhere.</p>" },
      { h2: "When you need both a minimum and a maximum", html: "<p>If a form asks for a range like \"20–50 KB\", aim for the middle. Start by setting the correct <a href=\"/image-resizer/\">pixel dimensions</a>, then either <a href=\"/increase-image-size-in-kb/\">increase</a> a too-small file or <a href=\"/image-compressor/\">compress</a> a too-large one to land inside the range.</p>" },
    ],
    faqs: [
      { q: "How do I increase the file size of an image in KB?", a: "Use the Increase Image Size in KB tool: set the minimum KB you need, upload your photo, and download. It tops the file up to the target without changing how the photo looks." },
      { q: "Why does a form reject my photo for being too small?", a: "Some forms set a minimum file size to ensure the photo has enough detail. If yours is below it, increase the size in KB to meet the minimum." },
      { q: "Does increasing image size lose quality?", a: "No — the tool keeps your photo at full quality and only adds padding to reach the size, so it looks identical." },
    ],
  },
  {
    slug: "why-does-my-passport-photo-keep-getting-rejected",
    title: "Why Does My Passport Photo Keep Getting Rejected? Common Reasons & Fixes",
    description: "Passport or exam photo rejected again? Here are the most common reasons a photo gets rejected — wrong size, background, lighting, file size — and how to fix each one for free.",
    date: "2026-06-23",
    category: "Passport photo",
    readMins: 6,
    excerpt: "Uploaded the same photo three times and it keeps getting rejected? Here are the real reasons — and the fix for each.",
    related: [["/passport-photo-maker/", "Passport Photo Maker"], ["/remove-background/", "Remove Background"], ["/image-compressor/", "Image Compressor"], ["/resize-image-in-cm/", "Resize in CM"]],
    intro: "<p>Few things are more frustrating than an application form that keeps rejecting your photo without saying why. The cause is almost always one of a handful of issues. Here are the most common reasons a passport or exam photo gets rejected — and exactly how to fix each one.</p>",
    sections: [
      { h2: "1. The dimensions or pixel size are wrong", html: "<p>Forms expect an exact size — often 3.5×4.5 cm (about 413×531 px) or a 2×2 inch square. If your photo is the wrong shape or pixel size, it's rejected. Fix it with the <a href=\"/passport-photo-maker/\">Passport Photo Maker</a> (which has the standard sizes built in) or <a href=\"/resize-image-in-cm/\">resize in cm</a> for an exact measurement.</p>" },
      { h2: "2. The file size is too big — or too small", html: "<p>Most portals set a range, like 20–50 KB. A photo straight from your phone is far too big, while an over-compressed one can be too small. <a href=\"/image-compressor/\">Compress</a> a large photo down, or <a href=\"/increase-image-size-in-kb/\">increase</a> a too-small one, to land inside the allowed range.</p>" },
      { h2: "3. The background isn't plain", html: "<p>Passport and most exam photos require a plain, light (usually white) background. A wall with a poster, shadows or a busy scene gets rejected. <a href=\"/remove-background/\">Remove the background</a>, then use the passport maker to set a clean white one.</p>" },
      { h2: "4. Lighting, expression or framing", html: "<p>Common rejections also come from harsh shadows, a tilted head, eyes not visible, caps, sunglasses, or the face being too small or too large in the frame. Use even lighting, look straight at the camera with a neutral expression, and crop so your head and the top of your shoulders fill the frame.</p>" },
      { h2: "5. Wrong format or DPI", html: "<p>Some forms only accept JPG and expect 300 DPI. If you uploaded a PNG or HEIC, convert it to <a href=\"/png-to-jpg/\">JPG</a> (or <a href=\"/heic-to-jpg/\">HEIC to JPG</a>), and set the resolution with <a href=\"/change-image-dpi/\">change DPI</a> if needed. Always re-read the exact requirements in the official notification — they vary by form.</p>" },
    ],
    faqs: [
      { q: "Why does my passport photo keep getting rejected?", a: "Almost always one of: wrong dimensions, file size outside the allowed range, a non-plain background, poor lighting or framing, or the wrong format/DPI. Fix the specific issue and re-upload." },
      { q: "What background does a passport photo need?", a: "A plain, light background — usually white. Remove a busy background first, then place your photo on a clean white one with a passport photo tool." },
      { q: "What size should the photo be?", a: "Commonly 3.5×4.5 cm (about 413×531 px) within a KB range like 20–50 KB, though it varies by form. Always check the official instructions." },
    ],
  },
  {
    slug: "convert-heic-to-jpg-on-windows-without-software",
    title: "How to Convert HEIC to JPG on Windows Without Installing Software",
    description: "Convert HEIC to JPG on a Windows PC without downloading any software — do it free in your browser. Open and use iPhone photos on Windows in seconds.",
    date: "2026-06-24",
    category: "Image tools",
    readMins: 4,
    excerpt: "Got iPhone HEIC photos on your Windows PC that won't open? Convert them to JPG without installing anything.",
    related: [["/heic-to-jpg/", "HEIC to JPG"], ["/heic-to-pdf/", "HEIC to PDF"], ["/image-converter/", "Image Converter"], ["/webp-to-jpg/", "WebP to JPG"]],
    intro: "<p>iPhones save photos as HEIC, and Windows often can't open them without extra codecs — leaving you with files you can't view, edit or upload. The good news: you can convert HEIC to JPG on Windows without installing any software at all, right in your browser.</p>",
    sections: [
      { h2: "Why Windows struggles with HEIC", html: "<p>HEIC is Apple's space-saving format. Windows can sometimes open it if you install Microsoft's HEIF/HEVC codecs, but those aren't there by default — so a HEIC file shows a blank thumbnail or an \"unsupported format\" error. Converting to JPG removes the problem entirely, because JPG opens on every PC.</p>" },
      { h2: "Convert HEIC to JPG in your browser", html: "<p>Open <a href=\"/heic-to-jpg/\">HEIC to JPG</a> in any browser on your Windows PC, drag in your .heic photos (you can do several at once), and download standard JPGs. There's nothing to install, no account, and nothing is uploaded — the conversion happens locally on your machine.</p>" },
      { h2: "Need a PDF instead?", html: "<p>If you photographed documents on an iPhone and need to upload them, convert straight to PDF with <a href=\"/heic-to-pdf/\">HEIC to PDF</a> — it combines several HEIC photos into one document. For other formats, the <a href=\"/image-converter/\">image converter</a> handles PNG, JPG and WebP.</p>" },
      { h2: "Stop the problem at the source", html: "<p>To avoid HEIC files in future, change the iPhone setting: <strong>Settings → Camera → Formats → Most Compatible</strong>. New photos will then save as JPG, which open on Windows natively. Existing HEIC photos still need converting once.</p>" },
    ],
    faqs: [
      { q: "How do I convert HEIC to JPG on Windows for free?", a: "Open a browser-based HEIC to JPG tool, drag in your .heic files, and download JPGs. No software to install and nothing is uploaded." },
      { q: "Why won't HEIC open on my Windows PC?", a: "Windows doesn't include HEIC support by default. Rather than installing codecs, convert the file to JPG, which opens on any PC." },
      { q: "Can I convert several HEIC files at once?", a: "Yes — the tool accepts multiple HEIC photos and converts each to a JPG you can download." },
    ],
  },
  {
    slug: "put-photo-and-signature-on-one-page-for-exam-form",
    title: "How to Put Your Photo and Signature on One Image for an Exam Form",
    description: "Some exam forms ask for your photo and signature in a single combined image. Here's how to put a photo and signature on one page for free, sized and ready to upload.",
    date: "2026-06-25",
    category: "Exam forms",
    readMins: 4,
    excerpt: "Form asking for your photo and signature as one image? Here's how to combine them cleanly and size it for upload.",
    related: [["/photo-signature-combiner/", "Photo + Signature Combiner"], ["/signature-resize/", "Signature Resize"], ["/image-compressor/", "Image Compressor"], ["/passport-photo-maker/", "Passport Photo Maker"]],
    intro: "<p>Most forms take your photo and signature as two separate uploads, but some ask for them together in a single image — your photo on top and your signature below. Here's how to combine them into one clean, correctly sized image for free.</p>",
    sections: [
      { h2: "When you need a combined image", html: "<p>A handful of exam and application portals (and some school or office forms) want a single image showing your photograph and signature together, usually in a fixed layout. Trying to do this by hand in an editor is fiddly to get aligned and sized correctly — a dedicated tool does it cleanly.</p>" },
      { h2: "Combine photo and signature", html: "<p>Open the <a href=\"/photo-signature-combiner/\">Photo + Signature Combiner</a>, upload your photo and your signature, and it places them into one neatly arranged image on a white background, photo above signature. Download the result, ready to upload. Everything runs in your browser, so your files aren't uploaded anywhere.</p>" },
      { h2: "Get each part right first", html: "<p>For the best result, prepare the two pieces before combining: use the <a href=\"/passport-photo-maker/\">Passport Photo Maker</a> for a clean photo and <a href=\"/signature-resize/\">Signature Resize</a> for a tight, black-on-white signature. A well-cropped signature on white paper combines much more cleanly than a dark phone snapshot.</p>" },
      { h2: "Hit the file-size limit", html: "<p>Once combined, if the form has a KB limit, run the image through the <a href=\"/image-compressor/\">Image Compressor</a> to bring it under the cap while keeping both the face and the signature clear. Always confirm the required layout and size in your official instructions, as they differ between forms.</p>" },
    ],
    faqs: [
      { q: "How do I put my photo and signature in one image?", a: "Use the Photo + Signature Combiner: upload both, and it arranges your photo above your signature on a white background as a single image you can download." },
      { q: "Why do some forms want them combined?", a: "A few portals ask for a single combined image instead of two separate uploads. Combining them in the required layout avoids a rejection." },
      { q: "How do I make the combined image fit a size limit?", a: "After combining, compress the image to the form's KB limit with the Image Compressor while keeping both the photo and signature clear." },
    ],
  },
  {
    slug: "how-to-scan-a-document-with-your-phone-as-pdf",
    title: "How to Scan a Document With Your Phone and Save It as a PDF",
    description: "Scan a document with your phone and turn it into a clean PDF for free — no scanner app needed. Combine multiple pages, then compress it to fit an upload limit.",
    date: "2026-06-26",
    category: "PDF tools",
    readMins: 5,
    excerpt: "No scanner? Your phone is one. Here's how to turn photos of documents into a single, upload-ready PDF.",
    related: [["/pdf/jpg-to-pdf/", "Image to PDF"], ["/heic-to-pdf/", "HEIC to PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf/merge/", "Merge PDF"]],
    intro: "<p>You don't need a scanner — your phone camera works fine for most forms and applications. The trick is turning those photos into a single, tidy PDF that portals accept. Here's how to do it for free, without a scanner app.</p>",
    sections: [
      { h2: "Take good photos of each page", html: "<p>Lay each page flat on a dark, plain surface in even light (a window works well), hold the phone directly above so the page isn't skewed, and make sure all four corners and the text are sharp. Take one photo per page. Good photos here save a lot of cleanup later.</p>" },
      { h2: "Turn the photos into a PDF", html: "<p>Open <a href=\"/pdf/jpg-to-pdf/\">Image to PDF</a>, add your page photos in order (each becomes a page), and download a single PDF. If your phone is an iPhone saving HEIC files, use <a href=\"/heic-to-pdf/\">HEIC to PDF</a> instead — it decodes and combines them in one step. Nothing is uploaded; the PDF is built in your browser.</p>" },
      { h2: "Combine and tidy multiple documents", html: "<p>If you already have separate PDFs to add, <a href=\"/pdf/merge/\">merge them</a> into one. To standardise mixed page sizes, <a href=\"/resize-pdf/\">resize the PDF to A4</a>. Put pages in the right order before combining so the final document reads correctly.</p>" },
      { h2: "Shrink it for the upload limit", html: "<p>Phone photos are large, so a multi-page scan can be several megabytes. Run the PDF through <a href=\"/pdf/compress/\">Compress PDF</a> or a target like <a href=\"/compress-pdf-to-500kb/\">500 KB</a> to fit the portal's limit while keeping the text readable. Always check the accepted format and size in the form's instructions.</p>" },
    ],
    faqs: [
      { q: "How do I scan a document with my phone for free?", a: "Photograph each page in good light, then use an Image to PDF tool to combine the photos into a single PDF — no scanner or app required." },
      { q: "How do I turn multiple photos into one PDF?", a: "Add the photos to the Image to PDF tool in order; each becomes a page, and you download one combined PDF." },
      { q: "My scanned PDF is too large to upload — what do I do?", a: "Compress it with Compress PDF or to a target like 500 KB. Scanning in good, even light and greyscale where possible also keeps the file smaller." },
    ],
  },
  {
    slug: "how-to-compress-an-image-to-20kb",
    title: "How to Compress an Image to 20 KB Without Blurring It",
    description: "Compress an image to 20 KB for online forms without it turning blurry. A simple free method that keeps a small photo clear — 100% in your browser, no upload.",
    date: "2026-06-27",
    category: "Image tools",
    readMins: 4,
    excerpt: "20 KB is tiny — but your photo doesn't have to look it. Here's how to hit 20 KB and stay sharp.",
    related: [["/compress-image-to-20kb/", "Compress to 20 KB"], ["/resize-image-in-kb/", "Resize Image in KB"], ["/image-resizer/", "Image Resizer"], ["/image-compressor/", "Image Compressor"]],
    intro: "<p>A 20 KB limit is one of the smallest you'll meet — common for signatures and small photos on application forms. Squeezing a photo that small without it turning into a blurry mess is possible if you do it in the right order. Here's how.</p>",
    sections: [
      { h2: "The mistake that causes blur", html: "<p>People upload a full-resolution photo and force it to 20 KB in one step. With millions of pixels crammed into 20 KB, the result is always soft. The fix is to reduce the pixel dimensions <em>first</em>, so there's far less detail to compress.</p>" },
      { h2: "Step 1 — resize the pixels", html: "<p>Open the <a href=\"/image-resizer/\">Image Resizer</a> and bring your photo down to a small size — around 150×200 px for a small photo, or roughly 140×60 px for a signature. At those dimensions, 20 KB is plenty of room, so the image barely loses quality.</p>" },
      { h2: "Step 2 — compress to 20 KB", html: "<p>Now open <a href=\"/compress-image-to-20kb/\">compress to 20 KB</a> (the target is preset) or <a href=\"/resize-image-in-kb/\">resize image in KB</a> and type 20. Upload your resized image and download. Because you shrank the pixels first, the tool only has to compress gently, so the result stays clear.</p>" },
      { h2: "Extra tips for tiny targets", html: "<ul><li>Use a plain background — detail in the background wastes your tiny KB budget.</li><li>Save as JPG, not PNG, for photos.</li><li>For a signature, crop tightly around the strokes; a black-on-white signature reaches 20 KB easily and stays crisp.</li></ul>" },
    ],
    faqs: [
      { q: "How do I compress an image to 20 KB without blurring it?", a: "Resize the pixel dimensions down first (e.g. to about 150×200 px), then compress to 20 KB. Shrinking the pixels first means the compressor barely has to reduce quality." },
      { q: "Is 20 KB enough for a photo?", a: "It's small, but fine for a tightly cropped passport-style photo or a signature at small pixel dimensions. Resize first to keep it clear." },
      { q: "What format should I use for a 20 KB image?", a: "JPG for photos — it compresses far more efficiently than PNG, so you get a smaller, clearer file at the same target." },
    ],
  },
  {
    slug: "how-to-fix-invalid-json-errors",
    title: "How to Fix \"Invalid JSON\" Errors: 8 Common Causes",
    description: "Getting an \"invalid JSON\" or parse error? Here are the 8 most common causes — trailing commas, single quotes, unquoted keys — and how to find and fix them fast.",
    date: "2026-06-28",
    category: "Developer tools",
    readMins: 6,
    excerpt: "Trailing comma? Single quotes? Here are the 8 things that make JSON invalid — and the fastest way to find the exact line that's broken.",
    related: [["/json-formatter/", "JSON Formatter"], ["/base64-encode-decode/", "Base64 Encode/Decode"], ["/url-encode-decode/", "URL Encode/Decode"], ["/developer-tools/", "Developer Tools"]],
    intro: "<p>You paste a block of JSON into your code or an API client and it throws <em>Unexpected token</em> or <em>invalid JSON</em>. JSON is strict — one stray character breaks the whole document — but the rules are simple, and almost every error comes down to the same handful of mistakes. Here's what makes JSON invalid and how to fix it in seconds.</p>",
    sections: [
      { h2: "What \"invalid JSON\" really means", html: "<p>JSON has a tight grammar: data is keys and values, keys are double-quoted strings, and values are strings, numbers, <code>true</code>, <code>false</code>, <code>null</code>, arrays or objects. A parser reads the text character by character, and the moment it sees something the grammar doesn't allow, it stops and reports the position. \"Invalid JSON\" simply means the text broke one of those rules — it doesn't mean your data is wrong, only that the formatting is.</p>" },
      { h2: "The 8 most common causes", html: "<ol><li><strong>Trailing commas</strong> — a comma after the last item, like <code>[1, 2, 3,]</code>. JSON forbids it.</li><li><strong>Single quotes</strong> — JSON requires double quotes, so <code>'name'</code> must be <code>\"name\"</code>.</li><li><strong>Unquoted keys</strong> — <code>{name: \"x\"}</code> is JavaScript, not JSON; keys need quotes.</li><li><strong>Comments</strong> — <code>//</code> and <code>/* */</code> are not allowed in JSON.</li><li><strong>Missing or extra brackets</strong> — an unclosed <code>{</code> or <code>[</code>, or a stray closing one.</li><li><strong>Wrong booleans</strong> — use lowercase <code>true</code>/<code>false</code>, not <code>True</code> or <code>TRUE</code>.</li><li><strong>undefined or NaN</strong> — these JavaScript values aren't valid JSON; use <code>null</code> or a number.</li><li><strong>Hidden characters</strong> — a byte-order mark (BOM) or smart quotes pasted from a document.</li></ol>" },
      { h2: "How to find the exact error fast", html: "<p>Instead of hunting line by line, paste your text into the <a href=\"/json-formatter/\">JSON Formatter</a> and click <strong>Validate</strong>. It uses the browser's native parser and reports the precise position where parsing failed, so you can jump straight to the trailing comma or missing bracket. Click <strong>Beautify</strong> afterwards to re-indent the document — misaligned nesting often reveals a missing brace at a glance.</p>" },
      { h2: "How to avoid invalid JSON next time", html: "<p>Generate JSON with a library — <code>JSON.stringify</code> in JavaScript, <code>json.dumps</code> in Python — rather than building strings by hand, so quotes and commas are escaped correctly for you. Keep a formatter handy to validate before you ship a config or payload. And if your data is travelling in a URL or header, pair it with the <a href=\"/url-encode-decode/\">URL encoder</a> or <a href=\"/base64-encode-decode/\">Base64 encoder</a>; the full set is on the <a href=\"/developer-tools/\">developer tools</a> page.</p>" },
    ],
    faqs: [
      { q: "Why is my JSON invalid when it looks fine?", a: "The usual hidden culprits are a trailing comma after the last item, single quotes instead of double quotes, or smart quotes pasted from a Word or Google doc. Run it through a validator to see the exact position." },
      { q: "Are comments allowed in JSON?", a: "No. Standard JSON does not support // or /* */ comments. Some tools accept a relaxed 'JSON with comments' format, but a strict parser will reject them." },
      { q: "How do I find which line broke my JSON?", a: "Paste it into the JSON Formatter and click Validate — it reports the character position of the error — then Beautify to re-indent and spot a missing bracket visually." },
    ],
  },
  {
    slug: "sha256-vs-md5-which-hash-to-use",
    title: "SHA-256 vs MD5: Which Hash Should You Use?",
    description: "MD5 vs SHA-256 explained simply: what a hash is, why MD5 is no longer safe, and when to use SHA-256, SHA-512 or a password hash like bcrypt instead.",
    date: "2026-06-29",
    category: "Developer tools",
    readMins: 6,
    excerpt: "MD5 is fast but broken; SHA-256 is the modern default. Here's the difference, in plain English, and which one to pick.",
    related: [["/hash-generator/", "Hash Generator"], ["/password-generator/", "Password Generator"], ["/uuid-generator/", "UUID Generator"], ["/developer-tools/", "Developer Tools"]],
    intro: "<p>If you've ever verified a download or stored a checksum, you've used a hash function. The two names that come up most are <strong>MD5</strong> and <strong>SHA-256</strong> — but they're not interchangeable. One is considered broken; the other is the modern standard. Here's the difference and how to choose.</p>",
    sections: [
      { h2: "What a hash function does", html: "<p>A hash takes any input — a word, a file, a password — and produces a fixed-length fingerprint. The same input always yields the same hash, but you can't reverse the hash back to the input, and even a one-character change produces a completely different result. That makes hashes ideal for integrity checks, checksums and comparing values without storing the original.</p>" },
      { h2: "Why MD5 is no longer safe", html: "<p>MD5 produces a 128-bit hash and is very fast — but that speed is now a weakness. Researchers can deliberately create two different inputs with the <em>same</em> MD5 hash (a \"collision\"), which means it can no longer guarantee that data hasn't been tampered with. MD5 is fine for a quick non-security checksum, but never use it for signatures, certificates or anything an attacker might try to forge.</p>" },
      { h2: "SHA-256 and the SHA-2 family", html: "<p><strong>SHA-256</strong> produces a 256-bit hash and has no known practical collision attacks, which is why it's the default for software signing, TLS certificates and blockchains. <strong>SHA-512</strong> is its larger sibling (512-bit) and can be faster on 64-bit hardware. For almost any integrity or checksum need today, SHA-256 is the right choice — and you can generate all of them from any text with the <a href=\"/hash-generator/\">hash generator</a>.</p>" },
      { h2: "What about hashing passwords?", html: "<p>Here's the catch: <em>none</em> of MD5, SHA-256 or SHA-512 are suitable for storing passwords on their own, precisely because they're fast — an attacker can try billions of guesses per second. For passwords, use a deliberately slow, salted algorithm like <strong>bcrypt</strong>, <strong>scrypt</strong> or <strong>Argon2</strong>. If you just need strong random secrets rather than to hash one, the <a href=\"/password-generator/\">password generator</a> and <a href=\"/uuid-generator/\">UUID generator</a> are better tools. See them all on the <a href=\"/developer-tools/\">developer tools</a> page.</p>" },
    ],
    faqs: [
      { q: "Is MD5 still okay to use?", a: "Only for non-security checks, like a quick checksum to spot accidental file corruption. For anything where tampering matters, use SHA-256 — MD5 is vulnerable to deliberate collisions." },
      { q: "Is SHA-256 better than SHA-512?", a: "Neither is strictly better — both are secure. SHA-256 has a shorter 256-bit digest and is the common default; SHA-512 is longer and can be faster on 64-bit systems. Pick based on what your system expects." },
      { q: "Can I use SHA-256 to store passwords?", a: "Not by itself — it's too fast, so it's easy to brute-force. Use a salted, slow password hash like bcrypt or Argon2 for password storage." },
    ],
  },
  {
    slug: "uuid-v4-vs-v1-which-to-use",
    title: "UUID v4 vs v1: Which UUID Version Should You Use?",
    description: "UUID v1 vs v4 explained: how each is generated, what they leak, performance as database keys, and which version to choose for IDs in your app.",
    date: "2026-06-30",
    category: "Developer tools",
    readMins: 5,
    excerpt: "v1 is built from a timestamp and MAC address; v4 is fully random. Here's which UUID version to use, and why v4 is the safe default.",
    related: [["/uuid-generator/", "UUID Generator"], ["/hash-generator/", "Hash Generator"], ["/timestamp-converter/", "Timestamp Converter"], ["/developer-tools/", "Developer Tools"]],
    intro: "<p>A UUID is a 128-bit identifier you can generate anywhere without a central authority and trust to be unique. But there's more than one kind. The two you'll meet most are <strong>version 1</strong> and <strong>version 4</strong>, and they're built in completely different ways. Here's how they differ and which to reach for.</p>",
    sections: [
      { h2: "What a UUID looks like", html: "<p>Every UUID is 32 hexadecimal digits in the familiar <code>8-4-4-4-12</code> pattern, like <code>f47ac10b-58cc-4372-a567-0e02b2c3d479</code>. One digit identifies the version. The format is identical across versions — what changes is how the bits are filled in.</p>" },
      { h2: "UUID v1 — time and MAC based", html: "<p>Version 1 combines the current <strong>timestamp</strong> with the computer's <strong>MAC address</strong> and a counter. Because it embeds time, v1 IDs are roughly sortable by creation order, which can help database indexing. The downside: a v1 UUID can leak <em>when</em> and <em>on which machine</em> it was created, a privacy and security concern if the IDs are exposed publicly.</p>" },
      { h2: "UUID v4 — fully random", html: "<p>Version 4 fills the identifier with <strong>122 random bits</strong>. It carries no timestamp and no hardware information, so it leaks nothing and is unpredictable. The collision risk is negligible — you'd need to generate billions before a clash became likely. This is why v4 is the default in most languages and the version the <a href=\"/uuid-generator/\">UUID generator</a> produces.</p>" },
      { h2: "Which one should you use?", html: "<p>For almost everything, choose <strong>v4</strong>: it's simple, private and unpredictable. Consider v1 (or the newer time-ordered v7) only when you specifically need IDs that sort by creation time for database performance — and even then, weigh the metadata leak. If you need a one-way fingerprint instead of an identifier, use the <a href=\"/hash-generator/\">hash generator</a>; to decode a timestamp embedded in data, try the <a href=\"/timestamp-converter/\">timestamp converter</a>. More on the <a href=\"/developer-tools/\">developer tools</a> page.</p>" },
    ],
    faqs: [
      { q: "Is UUID v4 safe to use as a database primary key?", a: "Yes — v4 UUIDs are widely used as primary keys because they can be generated anywhere without coordination. Just add an index; fully random keys can fragment indexes more than sequential ones." },
      { q: "Why would anyone use v1 over v4?", a: "Because v1 embeds a timestamp, the IDs roughly sort by creation order, which can improve index locality. Many teams now use UUID v7 for that instead, since it's time-ordered without exposing a MAC address." },
      { q: "Can two v4 UUIDs ever collide?", a: "In theory yes, but with 122 random bits you'd need to generate billions of them before a single collision became likely, so they're treated as practically unique." },
    ],
  },
  {
    slug: "how-to-compress-an-image-to-100kb",
    title: "How to Compress an Image to 100 KB Without Losing Quality",
    description: "Compress any photo to 100 KB for forms and uploads while keeping it sharp. A free, in-browser method — resize the pixels first, then compress to exactly 100 KB.",
    date: "2026-07-01",
    category: "Image tools",
    readMins: 5,
    excerpt: "Need a photo under 100 KB? Here's how to hit that target while keeping it clear — the trick is what you do before you compress.",
    related: [["/compress-image-to-100kb/", "Compress to 100 KB"], ["/image-compressor/", "Image Compressor"], ["/image-resizer/", "Image Resizer"], ["/resize-image-in-kb/", "Resize Image in KB"]],
    intro: "<p>100 KB is a common upload limit — generous enough for a clear photo, but a phone picture is usually 20 to 50 times larger. The good news: 100 KB is plenty of room to keep an image sharp, as long as you compress it the right way. Here's how.</p>",
    sections: [
      { h2: "Why forms ask for 100 KB", html: "<p>100 KB sits in a comfortable middle ground: bigger than the strict 20–50 KB photo limits, so the image stays detailed, but small enough to upload quickly and store cheaply. Many job portals, document uploads and ID forms use it for scans and photos where clarity matters more than a tiny file.</p>" },
      { h2: "Resize the pixels first", html: "<p>The biggest mistake is compressing a full-resolution photo straight to 100 KB — the result looks soft because there's too much detail for the file size. First <a href=\"/image-resizer/\">resize the image</a> to the dimensions you actually need; for a passport-style photo, around 600×800 px is ample at 100 KB. With fewer pixels to store, the compressor barely has to reduce quality.</p>" },
      { h2: "Compress to exactly 100 KB", html: "<p>Open the <a href=\"/compress-image-to-100kb/\">compress to 100 KB</a> page (the target is preset) or the general <a href=\"/image-compressor/\">Image Compressor</a> and type 100. Upload your resized image and download — the tool runs a quality search to land at or just under 100 KB while keeping it as sharp as possible. Need a different limit? <a href=\"/resize-image-in-kb/\">Resize image in KB</a> lets you type any number.</p>" },
      { h2: "Keep it sharp", html: "<ul><li>Save photos as <strong>JPG</strong> — it compresses far more efficiently than PNG.</li><li>Start from a well-lit photo on a plain background; clutter wastes your KB budget.</li><li>Resize <em>before</em> compressing, never the other way round.</li><li>Always work from the original file, not an already-compressed copy.</li></ul><p>Everything runs in your browser, so your photo is never uploaded to a server.</p>" },
    ],
    faqs: [
      { q: "How do I compress an image to 100 KB without it getting blurry?", a: "Resize the pixel dimensions to what you actually need first, then compress to 100 KB. Shrinking the pixels first means the compressor only has to reduce quality slightly." },
      { q: "What format is best for a 100 KB photo?", a: "JPG/JPEG. It compresses photographs much more efficiently than PNG, so you get a clearer image at the same 100 KB target." },
      { q: "Can I compress to other sizes too?", a: "Yes — use the Image Compressor and type any target like 20 KB, 50 KB or 200 KB, or open the ready-made page for each common limit." },
    ],
  },
  {
    slug: "how-to-merge-two-pdf-files-into-one",
    title: "How to Merge Two PDF Files Into One (Free, No Upload)",
    description: "Combine two or more PDF files into a single document in your browser — free, no sign-up, nothing uploaded. Plus how to reorder pages and shrink the merged file.",
    date: "2026-07-02",
    category: "PDF tools",
    readMins: 5,
    excerpt: "Need to join two PDFs into one? Here's the fastest free way to do it in your browser — and how to fix the page order and file size after.",
    related: [["/pdf/merge/", "Merge PDF"], ["/pdf/organize/", "Organize PDF"], ["/pdf/compress/", "Compress PDF"], ["/pdf/jpg-to-pdf/", "JPG to PDF"]],
    intro: "<p>Whether you're combining a cover letter with a CV, joining scanned pages, or bundling statements for an application, merging PDFs is one of the most common document tasks — and one of the easiest. Here's how to combine two (or more) PDFs into a single file for free, without uploading anything.</p>",
    sections: [
      { h2: "When you need to merge PDFs", html: "<p>Forms often ask for a single PDF, but your documents arrive in pieces: a resume and a cover letter, several scanned certificates, or monthly statements saved separately. Merging them into one file keeps everything in order and makes uploads simpler — many portals only allow a single attachment.</p>" },
      { h2: "How to merge two PDFs", html: "<p>Open the <a href=\"/pdf/merge/\">Merge PDF</a> tool, add your first and second PDF (you can add more), drag them into the order you want, and download the combined file. It all happens in your browser with the pages kept at full quality — nothing is uploaded to a server, which matters for personal or financial documents.</p>" },
      { h2: "Fix the page order", html: "<p>If a page ends up in the wrong place, use <a href=\"/pdf/organize/\">Organize PDF</a> to reorder, rotate or delete individual pages with thumbnails before you save. It's the easiest way to get a tidy, correctly ordered document when you're merging scans that came in out of sequence.</p>" },
      { h2: "Shrink the merged file if it's too big", html: "<p>Combining files adds up, and the result can exceed an upload limit. Run it through <a href=\"/pdf/compress/\">Compress PDF</a> (or a target page like <a href=\"/compress-pdf-to-100kb/\">100 KB</a>) to bring it down while keeping the pages readable. Building a PDF from photos instead? <a href=\"/pdf/jpg-to-pdf/\">JPG to PDF</a> turns images into one document the same way.</p>" },
    ],
    faqs: [
      { q: "How do I merge two PDF files into one for free?", a: "Open the Merge PDF tool, add both files, drag them into the order you want, and download the single combined PDF. It's free, needs no sign-up, and runs entirely in your browser." },
      { q: "Will merging reduce the quality of my PDFs?", a: "No — merging keeps each page at its original quality. If the combined file is too large to upload, compress it afterwards rather than losing quality during the merge." },
      { q: "Is it safe to merge personal documents online?", a: "With ToolsKaro, yes — the merge happens in your browser and your files are never uploaded to a server, so sensitive documents stay on your device." },
    ],
  },
  {
    slug: "how-to-join-photos-into-one-image-free",
    title: "How to Join Two Photos Into One Image Free (Side by Side or Stacked)",
    description: "Join two or more photos into one image with a free photo joiner — side by side, stacked or in a grid. No watermark, no sign-up, 100% in your browser.",
    date: "2026-07-03",
    category: "Image tools",
    readMins: 5,
    excerpt: "Want to put two pictures next to each other or make a quick collage? Here's how to join photos into one image for free, without uploading anything.",
    related: [["/photo-joiner/", "Photo Joiner"], ["/crop-image/", "Crop Image"], ["/image-compressor/", "Image Compressor"], ["/photo-signature-combiner/", "Photo + Signature"]],
    intro: "<p>Putting two photos side by side — a before-and-after, a pair of pictures for a message, or a simple collage — sounds like it needs a photo editor. It doesn't. A <strong>free photo joiner</strong> combines several images into one in a couple of clicks, right in your browser, with no app to install and nothing uploaded. Here's how to do it and get a clean result every time.</p>",
    sections: [
      { h2: "What a photo joiner does", html: "<p>A photo joiner takes two or more separate images and merges them into a single picture. You choose the arrangement — <strong>side by side</strong> for a row, <strong>stacked</strong> for a tall image, or a <strong>grid</strong> for a small collage — and the tool lines the photos up neatly, adds any gap or background colour you want, and exports one combined image. It's the quickest way to make a before-and-after, a comparison, or a multi-photo share without learning an editor.</p>" },
      { h2: "Join your photos in three steps", html: "<p>Open the <a href=\"/photo-joiner/\">Photo Joiner</a> and you're done in under a minute:</p><ol><li><strong>Add your photos</strong> — drop in two or more images (JPG, PNG or WebP).</li><li><strong>Pick a layout</strong> — side by side, stacked or grid, then set the gap and a background colour to frame them.</li><li><strong>Download</strong> — click join and save the single combined image, ready to share or upload.</li></ol><p>Because it's a genuinely free photo joiner, there's no watermark stamped on the result and no sign-up — and since everything runs on your device, your photos are never uploaded to a server.</p>" },
      { h2: "Get a clean, even result", html: "<p>A few small things make the join look professional rather than rough:</p><ul><li>Use photos of a <strong>similar size or orientation</strong> — two portraits or two landscapes line up far more evenly than a mix.</li><li><strong>Crop first</strong> if one image has extra space around the subject; the <a href=\"/crop-image/\">Crop Image</a> tool trims them to a matching shape so heights and widths match.</li><li>Add a <strong>small gap and a white or black background</strong> for a clean, framed look instead of two photos jammed edge to edge.</li></ul>" },
      { h2: "After joining: resize or compress", html: "<p>Once you've joined the images, you may need the final file at a particular size. If a website or form has a KB limit, run the result through the <a href=\"/image-compressor/\">Image Compressor</a> to bring it under the cap while keeping it clear. Need your photo and signature combined for an exam form instead of ordinary pictures? Use the dedicated <a href=\"/photo-signature-combiner/\">Photo + Signature Combiner</a>, which lays them out in the format those forms expect.</p>" },
    ],
    faqs: [
      { q: "How do I join two photos into one for free?", a: "Open the free Photo Joiner, add both images, choose 'Side by side' or 'Stacked', set the gap and background, and click join. Download the single combined image — no watermark and no sign-up." },
      { q: "Is this photo joiner really free?", a: "Yes — it's completely free with no watermark, no sign-up and no limits. You can join as many photos as you like, as often as you like, and nothing is uploaded because it runs in your browser." },
      { q: "Can I join more than two photos?", a: "Yes. Add as many images as you want — use side by side or stacked for a strip, or the grid layout to make a simple collage out of several photos." },
    ],
  },
{
  slug: "how-to-resize-a-pdf-to-a4-size",
  title: "How to Resize a PDF to A4 Size (Free, No Upload)",
  description: "Learn how to resize a PDF to A4 size for free in your browser, with no upload. A simple pdf to a4 converter guide with step-by-step tips.",
  date: "2026-07-03",
  category: "PDF tools",
  readMins: 6,
  excerpt: "A plain-English guide to resizing any PDF to A4 size right in your browser, why PDFs end up the wrong page size, and how to shrink the file afterwards.",
  related: [["/resize-pdf/","Resize PDF"],["/pdf/compress/","Compress PDF"],["/pdf/merge/","Merge PDF"],["/pdf-tools/","PDF Tools"]],
  intro: "<p>You open a document, hit print, and the pages come out cropped, shrunk, or floating in a sea of white margin. The usual culprit is page size: your PDF is not actually A4. The good news is you do not need expensive software to fix it. In this guide you will learn how to <strong>resize a PDF to A4 size</strong> entirely in your browser, with no upload and no sign-up, plus a few tips so your files print cleanly every time.</p>",
  sections: [
    {
      h2: "Why PDFs end up the wrong page size",
      html: "<p>A PDF stores an exact page size in points, and that size is locked in by whatever created the file. Trouble starts when the source did not use A4. Common reasons a PDF is not A4 include:</p><ul><li><strong>US Letter defaults.</strong> Many apps, especially those made in North America, default to Letter (216 x 279 mm), which is slightly wider and shorter than A4.</li><li><strong>Scanned documents.</strong> Scanners often save at odd sizes or at the scanner glass dimensions rather than a standard sheet.</li><li><strong>Phone photos turned into PDFs.</strong> A photo-to-PDF app keeps the camera aspect ratio, so the page is rarely A4.</li><li><strong>Slides, receipts, and tickets.</strong> These are built for screens or thermal printers, not standard paper.</li></ul><p>When the page size does not match your printer or an upload form that demands A4, you need to <strong>change the PDF size to A4</strong> so every page conforms to one clean standard.</p>"
    },
    {
      h2: "What A4 actually is (and how it differs from Letter)",
      html: "<p>A4 measures <strong>210 x 297 mm</strong> (about 8.27 x 11.69 inches). It is the international standard sheet used almost everywhere outside the United States and Canada, and it is what most exam portals, government forms, and offices expect. US Letter, by contrast, is 216 x 279 mm. That seemingly small gap is enough to cause cut-off text or extra margins when you print one on the other. So when a form says A4 only, you genuinely do need a true <strong>pdf to a4 converter</strong> rather than just trusting your printer to cope. Adjusting the page geometry once, up front, saves you from reprinting later.</p>"
    },
    {
      h2: "Step by step: resize your PDF to A4 in the browser",
      html: "<p>Our <a href=\"/resize-pdf/\">Resize PDF</a> tool runs fully on your device, so the file never leaves your computer. Here is the whole process to <strong>adjust a PDF to A4</strong>:</p><ul><li><strong>Open the tool.</strong> Go to <a href=\"/resize-pdf/\">resize a PDF to A4</a> and drop your file onto the page, or tap to browse for it.</li><li><strong>Pick A4 as the target.</strong> Choose A4 (210 x 297 mm) from the page-size list so every page is rebuilt to that standard.</li><li><strong>Choose how content fits.</strong> Select fit-to-page to scale the existing content so it sits neatly inside the A4 frame without clipping. This is the safest way to <strong>fit a PDF to A4</strong>.</li><li><strong>Set orientation.</strong> Keep portrait for most documents, or switch to landscape for wide tables and slides.</li><li><strong>Process and download.</strong> The tool re-lays every page to A4 and gives you the finished file instantly. No account, no watermark.</li></ul><p>Because everything happens locally, even sensitive paperwork stays private. Nothing is sent to a server to <strong>resize the PDF to A4 size</strong>.</p>"
    },
    {
      h2: "Tips: page size is not the same as file size",
      html: "<p>This is the single most common mix-up, so it is worth saying clearly. <strong>Page size</strong> is the physical dimensions of the sheet, measured in mm or inches, such as A4. <strong>File size</strong> is how much storage the document takes, measured in KB or MB. Resizing to A4 changes the page dimensions; it does not necessarily make the file smaller, and a tiny file can still be the wrong page size.</p><ul><li>If a form asks for A4, use the <a href=\"/resize-pdf/\">Resize PDF</a> tool to fix the dimensions.</li><li>If a form asks for a maximum like 100 KB, shrink the file with <a href=\"/pdf/compress/\">Compress PDF</a> or the focused <a href=\"/compress-pdf-to-100kb/\">compress to 100 KB</a> tool.</li><li>Often you need both: first set the page to A4, then compress the result so it meets an upload limit.</li><li>Joining several A4 pages into one document? Use <a href=\"/pdf/merge/\">Merge PDF</a> before you compress.</li></ul><p>A good order of operations is resize first, then compress, then merge if needed. Explore the full set of utilities on the <a href=\"/pdf-tools/\">PDF Tools</a> page to handle whatever a portal throws at you.</p>"
    }
  ],
  faqs: [
    { q: "Is it really free to resize a PDF to A4?", a: "Yes. The Resize PDF tool is completely free with no sign-up, no watermark, and no page limits. You can change the PDF size to A4 as many times as you need." },
    { q: "Do I have to upload my file anywhere?", a: "No. The tool processes your PDF directly in your browser on your own device, so the document is never uploaded to a server. This keeps private paperwork secure while you fit the PDF to A4." },
    { q: "Will resizing to A4 reduce my file size in KB or MB?", a: "Not necessarily. Page size and file size are different things. To make the file smaller, run it through the Compress PDF tool or the compress-to-100KB tool after you have set the page to A4." },
    { q: "What is the difference between A4 and Letter?", a: "A4 is 210 x 297 mm, the international standard, while US Letter is 216 x 279 mm. If a form requires A4, use a proper pdf to a4 converter rather than relying on your printer to rescale the page." }
  ]
},
{
  slug: "how-to-resize-an-image-in-cm-at-300-dpi",
  title: "How to Resize an Image in CM at 300 DPI",
  description: "Learn how to resize an image in cm at 300 DPI for crisp printing and ID photos. Simple formula, step-by-step guide, and common cm sizes explained.",
  date: "2026-07-04",
  category: "Image tools",
  readMins: 6,
  excerpt: "A plain-English guide to resizing an image in cm at 300 DPI, with the pixel formula, why 300 DPI matters for printing, and the exact steps to do it.",
  related: [["/resize-image-in-cm/","Resize Image in CM"],["/change-image-dpi/","Change DPI"],["/image-resizer/","Image Resizer"],["/passport-photo-maker/","Passport Photo Maker"]],
  intro: "<p>If you have ever tried to print a photo or upload a passport picture and ended up with something blurry, pixelated, or the wrong size, the culprit is almost always a mismatch between centimetres, pixels, and DPI. This guide explains how to resize an image in cm with dpi 300 the right way. You will learn what each term means, the one formula that ties them together, and the exact steps to get a print-ready file every time.</p>",
  sections: [
    {
      h2: "CM vs Pixels vs DPI: the difference in plain English",
      html: "<p>These three words confuse a lot of people, so here is the simplest way to think about them. Centimetres (cm) describe the physical size of a printed image, the real width and height you can measure with a ruler. Pixels are the tiny coloured dots that make up a digital image on a screen, and they have no fixed physical size on their own. DPI, which stands for dots per inch, is the bridge between the two: it tells the printer how many of those dots to pack into every inch of paper.</p><p>A screen does not care about cm, it only sees pixels. A printer, on the other hand, needs to know how many pixels belong in each centimetre. That is why a photo can look perfectly sharp on your phone but turn out fuzzy when printed at a larger size. The image simply did not have enough pixels for the physical dimensions you asked for. When you use a <a href=\"/resize-image-in-cm/\">photo resizer in cm with dpi</a>, you are telling the file exactly how many pixels to carry per centimetre so the print stays crisp.</p>"
    },
    {
      h2: "The formula that connects cm, pixels, and DPI",
      html: "<p>There is one tidy formula that does all the heavy lifting. Because one inch equals 2.54 centimetres, you convert any centimetre measurement into pixels like this:</p><p><strong>pixels = (cm / 2.54) x DPI</strong></p><p>Say you want a photo that is 3.5 cm wide at 300 DPI. The maths is (3.5 / 2.54) x 300, which comes out to roughly 413 pixels. For a 4.5 cm height at the same 300 DPI, you get (4.5 / 2.54) x 300, or about 531 pixels. So a classic 3.5 x 4.5 cm passport photo needs to be about 413 x 531 pixels to print correctly at 300 DPI.</p><p>You do not have to do this by hand. A good tool lets you type the size in centimetres, pick 300 DPI, and it works out the pixels for you. But understanding the formula helps you sanity-check the result and explains why a tiny low-resolution image cannot magically become a large sharp print.</p>"
    },
    {
      h2: "Why 300 DPI matters for printing and ID photos",
      html: "<p>300 DPI is the long-standing gold standard for print. At that density, the dots are small enough that the human eye blends them into smooth tones and clean edges, so text stays legible and skin tones look natural. Drop below 300, say to 150 or 72 DPI, and printed images start to look soft or jagged up close. Going much higher than 300 rarely helps for normal viewing distances and just creates needlessly huge files.</p><p>This matters most for passport and ID photos, where official portals and print shops often demand an exact physical size combined with 300 DPI. If you upload a file that is the right cm dimensions but only 72 DPI, it may be rejected or printed blurry. When you resize photo in cm 300 dpi before submitting, you meet both requirements at once: correct size and correct resolution. For official portraits, pairing the resize with a dedicated <a href=\"/passport-photo-maker/\">passport photo maker</a> helps you nail the framing too.</p>"
    },
    {
      h2: "Step-by-step: resize an image in cm at 300 DPI",
      html: "<p>Here is the quick workflow using a browser-based tool, no software install needed.</p><ol><li><strong>Open the tool.</strong> Head to the <a href=\"/resize-image-in-cm/\">resize image in cm</a> page and upload your photo.</li><li><strong>Switch the unit to centimetres.</strong> Make sure width and height are set to cm rather than pixels.</li><li><strong>Enter your size.</strong> Type the exact dimensions you need, for example 3.5 x 4.5 cm.</li><li><strong>Set DPI to 300.</strong> This locks in print quality. If your file is already sized but the resolution is wrong, you can instead use the <a href=\"/change-image-dpi/\">change DPI</a> tool.</li><li><strong>Download.</strong> Save the result and check the preview before printing or uploading.</li></ol><p>Some common targets to keep handy: 3.5 x 4.5 cm is the standard for many countries' passport and visa photos, while the United States and a few others use a 2 x 2 inch (about 5.08 x 5.08 cm) square. If you only need to hit a pixel target or file size rather than a physical size, a general <a href=\"/image-resizer/\">image resizer</a> works well, and you can browse the full set of options on the <a href=\"/image-tools/\">image tools</a> page.</p>"
    }
  ],
  faqs: [
    {
      q: "What does it mean to resize an image in cm with dpi 300?",
      a: "It means setting the physical print size in centimetres and the resolution to 300 dots per inch at the same time. The tool converts your cm dimensions into the right number of pixels using the formula pixels = (cm / 2.54) x 300, so the file prints at the correct size without looking blurry."
    },
    {
      q: "How many pixels is a 3.5 x 4.5 cm photo at 300 DPI?",
      a: "About 413 x 531 pixels. You get this from (3.5 / 2.54) x 300 for the width and (4.5 / 2.54) x 300 for the height. Most photo resizers in cm with dpi calculate this for you automatically once you enter the size and choose 300 DPI."
    },
    {
      q: "Can I increase a small image to 300 DPI and keep it sharp?",
      a: "Changing the DPI label alone does not add real detail. If the original image has too few pixels for the physical size you want, enlarging it will look soft. For best results start with a high-resolution photo, then resize it in cm at 300 DPI rather than stretching a tiny image."
    },
    {
      q: "Why do passport portals reject my photo even when the size is right?",
      a: "A common reason is the DPI being too low. Many official systems require both the exact cm dimensions and 300 DPI. Resize your photo in cm 300 dpi before uploading, and if the size is already correct, just use a change DPI tool to bump the resolution to 300."
    }
  ]
},
{
  slug: "how-to-combine-photos-into-one-image",
  title: "How to Combine Photos Into One Image (Free)",
  description: "Learn how to combine photos into one image for free. Use a photo joiner to merge pictures side by side, stacked, or in a grid in your browser.",
  date: "2026-07-05",
  category: "Image tools",
  readMins: 5,
  excerpt: "A simple, free way to combine photos into one image. Join pictures side by side, stack them, or build a quick grid with a browser photo joiner.",
  related: [["/photo-joiner/","Photo Joiner"],["/photo-signature-combiner/","Photo + Signature"],["/crop-image/","Crop Image"],["/image-resizer/","Image Resizer"]],
  intro: "<p>Putting two or more pictures together used to mean opening heavy editing software, lining up layers and exporting through a dozen menus. It does not have to be that hard anymore. If you just want to combine photos into one image, a lightweight photo joiner does the whole job in your browser, in under a minute, for free. This guide explains when joining photos makes sense, how to do it step by step, and the small layout and quality tips that make the finished picture look clean instead of thrown together.</p>",
  sections: [
    {
      h2: "When you need to join photos",
      html: "<p>There are three layouts people reach for most often, and each one solves a different problem.</p><p><strong>Side by side.</strong> When you want to join photos side by side, you are usually comparing two things: a before and after, two outfit options, a product from two angles, or a left and right page of a document. Placing them next to each other lets the viewer judge both at a glance without scrolling.</p><p><strong>Stacked (top and bottom).</strong> Vertical stacking suits screenshots, chat threads, recipes or step sequences where order matters. It also fits portrait phone screens well, so the result reads naturally on mobile.</p><p><strong>Grid or collage.</strong> When you have three, four or more pictures, a grid keeps everything tidy and equal. A simple grid is perfect for event recaps, mood boards, listings or a quick social post. The goal in every case is the same: merge photos into one picture so you can share a single file instead of a messy folder.</p>"
    },
    {
      h2: "How to combine photos into one image, step by step",
      html: "<p>Here is the full workflow using a free browser tool. Open the <a href=\"/photo-joiner/\">photo joiner</a> and follow along.</p><ol><li><strong>Add your pictures.</strong> Click to upload or drag and drop the images you want to combine. You can start with two and add more later.</li><li><strong>Pick a layout.</strong> Choose horizontal to join photos side by side, vertical to stack them, or a grid to combine photos into one collage.</li><li><strong>Order the images.</strong> Drag them into the sequence you want. For before and after shots, put the before image first so the story reads left to right or top to bottom.</li><li><strong>Adjust spacing and background.</strong> Add a little gap between pictures and choose a background colour so the seams look intentional.</li><li><strong>Download.</strong> Export the finished file as a single JPG or PNG, ready to send or post.</li></ol><p>That is the whole process. Because this is a photo joiner free online, there is no account, no watermark and no software to install.</p>"
    },
    {
      h2: "Layout, spacing and alignment tips",
      html: "<p>The difference between a sloppy combo and a polished one is almost always alignment. A few habits help.</p><ul><li><strong>Match dimensions first.</strong> If your images are wildly different sizes, the joined result looks lopsided. Run each one through the <a href=\"/image-resizer/\">image resizer</a> so they share a width (for stacking) or a height (for side by side).</li><li><strong>Crop out the clutter.</strong> Trim distracting edges with the <a href=\"/crop-image/\">crop tool</a> before joining, so every panel focuses on the subject.</li><li><strong>Keep spacing consistent.</strong> Use the same gap between all images. Equal margins make the layout feel deliberate.</li><li><strong>Mind the read order.</strong> People scan left to right and top to bottom, so place the most important image where the eye lands first.</li><li><strong>Pick a neutral background.</strong> White or light grey usually works; it keeps the focus on the photos rather than the gaps between them.</li></ul>"
    },
    {
      h2: "Export quality and privacy",
      html: "<p>Once your layout looks right, think about the file you save. Choose <strong>PNG</strong> when you need crisp edges and text, such as joined screenshots or documents. Choose <strong>JPG</strong> for photos with lots of colour and detail, where a smaller file matters more than perfect edges. If the combined image comes out larger than you need for email or a form, run it through the <a href=\"/image-compressor/\">image compressor</a> to shrink the size without an obvious drop in quality.</p><p>Privacy is the quiet advantage of a browser based tool. A good photo joiner online free does all the work on your own device, so your pictures are never uploaded to a server. Nothing leaves your phone or laptop, which matters when you are combining ID pages, receipts or personal photos. When you need a picture and signature in one file, the <a href=\"/photo-signature-combiner/\">photo and signature combiner</a> follows the same private, in-browser approach. You can explore the full set in our <a href=\"/image-tools/\">image tools</a> collection.</p>"
    }
  ],
  faqs: [
    { q: "How do I combine photos into one image for free?", a: "Open a free photo joiner in your browser, upload your pictures, choose a side by side, stacked or grid layout, then download the result as one file. No account or software needed." },
    { q: "Can I join photos side by side without losing quality?", a: "Yes. Add your images at full resolution and export as PNG for the sharpest result. Only compress afterwards if you need a smaller file." },
    { q: "Is the photo joiner online free and safe to use?", a: "It is. The tool runs entirely in your browser, so your photos stay on your device and are never uploaded, making it safe for personal or document images." },
    { q: "How many pictures can I merge into one picture?", a: "You can combine two for a simple side by side or stack, or add several more to build a grid collage. Just keep the layout balanced so every image stays clear." }
  ]
},
{
  slug: "how-to-combine-bank-statements-into-one-pdf",
  title: "How to Combine Bank Statements Into One PDF",
  description: "Learn how to combine bank statements into one PDF for visa, loan, rental and mortgage applications, with the page order, file size and privacy tips that matter.",
  date: "2026-07-06",
  category: "PDF tools",
  readMins: 6,
  excerpt: "A clear, step-by-step guide to merging several months of bank statements into one clean PDF, including how to unlock encrypted statements, fix the page order and shrink the file to fit an upload limit.",
  related: [["/combine-bank-statements-pdf/","Combine Bank Statements"],["/pdf/merge/","Merge PDF"],["/pdf/compress/","Compress PDF"],["/pdf-tools/","PDF Tools"]],
  intro: "<p>If you have ever applied for a visa, a loan, a rental flat or a mortgage, you have probably hit the same request: send us your last three to six months of bank statements as a single PDF. Banks hand you one file per month, so you are left wondering how to combine bank statements into one tidy document that an officer can actually open and read. This guide walks you through exactly how to combine bank statements into one PDF, in the right order, at a size that fits the upload box, while keeping your financial data private.</p>",
  sections: [
    {
      h2: "Why applications want one PDF, not six",
      html: "<p>Reviewers process hundreds of files a day, so a single, well-ordered document is far easier for them than juggling six separate attachments. When you <a href=\"/combine-bank-statements-pdf/\">combine bank statements</a> into one PDF, the person assessing your case can scroll through your full financial history in one window instead of downloading, opening and matching files by hand.</p><p>It also protects you. A complete, continuous file shows there are no missing months, which is one of the most common reasons applications get sent back. Visa officers, loan underwriters, landlords and mortgage lenders all read statements the same way: they want an unbroken run of months that proves steady income and a healthy balance. Learning how to combine bank statements properly means fewer follow-up emails and a faster decision.</p><p>The good news is that you do not need expensive software. A free browser tool can merge bank statements into one PDF in under a minute, and you stay in control of the order and the final size.</p>"
    },
    {
      h2: "Unlock encrypted statements first",
      html: "<p>This is the step most people miss. Many banks send statements as password-protected or encrypted PDFs, where you have to type your card number, date of birth or a chosen PIN to open the file. A secured PDF like that usually cannot be merged until the protection is removed, and a merge tool will not strip a password for you.</p><p>The fix is simple and stays on your own device. Open each protected statement with the password as normal, then re-save it without the password. On most computers you can use the print dialog and choose Save as PDF (or Print to PDF) as the destination; the new copy you create is no longer encrypted. Some PDF readers also offer a Save a Copy or Export option that lets you remove the password once the file is open. Do this for every locked statement before you start merging.</p><p>To be clear: our tool does not crack or remove PDF passwords. You unlock the file yourself using the password you already have, then bring the unlocked copies to the merge step. This keeps things both legal and secure, because only you ever see the password.</p>"
    },
    {
      h2: "Step by step: merge bank statements into one PDF",
      html: "<p>Once your statements are unlocked, combining them takes only a few clicks. Here is how to combine bank statements into one file using our <a href=\"/pdf/merge/\">Merge PDF</a> tool:</p><ol><li>Open the <a href=\"/combine-bank-statements-pdf/\">combine bank statements</a> page, or go straight to <a href=\"/pdf/merge/\">Merge PDF</a>.</li><li>Add your monthly statement PDFs. You can select all of them at once or drag them in one at a time.</li><li>Set the page order. Drag the files so the months run in sequence, usually oldest first or newest first depending on what the application asks for.</li><li>Click merge. The tool joins every page into one continuous document.</li><li>Download your single combined PDF and check that no month is missing or duplicated.</li></ol><p>Getting the order right matters more than people expect. If you want to combine monthly bank statements into one PDF file the way a reviewer prefers, keep the months in a clear, logical run rather than a random mix. Open the finished file and scroll from the first page to the last to confirm January follows December cleanly, statement totals line up, and there are no blank pages between months.</p>"
    },
    {
      h2: "Shrink the file to fit upload limits and stay private",
      html: "<p>Six months of statements can add up to a large file, and many portals cap uploads at a few megabytes. If your merged PDF is too big, run it through our <a href=\"/pdf/compress/\">Compress PDF</a> tool, which reduces the size while keeping the text sharp and readable. When a form demands something very small, our <a href=\"/compress-pdf-to-100kb/\">compress to 100KB</a> tool can squeeze it down to a strict target. A handy workflow is to merge first, then compress, so you only optimise once.</p><p>Privacy deserves special attention with financial documents. Our PDF tools run entirely in your browser, which means your statements are processed on your own device and are never uploaded to a server. Your account numbers, balances and transactions stay with you. That matters a great deal more for bank statements than for an ordinary document, so it is worth using a tool that keeps everything local.</p><p>Once you know how to combine bank statements this way, you can reuse the same steps for any future application. Explore the full set of <a href=\"/pdf-tools/\">PDF tools</a> to split, rotate or reorder pages whenever a form needs something specific.</p>"
    }
  ],
  faqs: [
    {
      q: "How do I combine bank statements into one PDF for free?",
      a: "Unlock any password-protected statements first, then open our Merge PDF tool, add all your monthly files, drag them into the right order and click merge. The combined PDF downloads straight to your device at no cost."
    },
    {
      q: "Can I merge bank statements PDF if they are password protected?",
      a: "Not directly. Open each protected statement with its password, re-save it without the password using Save as PDF or your reader's export option, and then merge the unlocked copies. The merge tool does not remove PDF passwords for you."
    },
    {
      q: "What order should the months be in when I combine monthly bank statements into one PDF file?",
      a: "Keep the months in a clear sequence, usually oldest to newest, unless the application asks otherwise. After merging, scroll through the whole file to confirm no month is missing or duplicated."
    },
    {
      q: "My merged statements file is too large to upload. What can I do?",
      a: "Run the combined PDF through our Compress PDF tool to reduce its size, or use the compress to 100KB tool when a form sets a strict limit. Merge first, then compress, so you optimise the file just once."
    }
  ]
},
{
  slug: "how-to-resize-a-photo-for-whatsapp-dp",
  title: "How to Resize a Photo for Your WhatsApp DP",
  description: "Learn how to resize a photo for WhatsApp DP so it stays sharp and your face never gets cropped. Ideal sizes, a square-crop guide, and free tools.",
  date: "2026-07-07",
  category: "Image tools",
  readMins: 5,
  excerpt: "WhatsApp crops and zooms every profile picture into a circle. Here is the ideal WhatsApp DP size and how to resize a photo so your face stays perfectly centred.",
  related: [["/resize-image-for-whatsapp-dp/","WhatsApp DP Resizer"],["/crop-image/","Crop Image"],["/social-media-image-resizer/","Social Media Resizer"],["/image-resizer/","Image Resizer"]],
  intro: "<p>You found the perfect photo, set it as your WhatsApp DP, and somehow half your face got cut off or the picture looks blurry. It is one of the most common little frustrations on the app, and it happens because WhatsApp forces every profile picture into a fixed shape. The good news is that a quick resize fixes it for good. In this guide you will learn exactly what the right WhatsApp DP size is, why the app crops your photos, and how to resize a photo for WhatsApp DP in under a minute using a free in-browser tool.</p>",
  sections: [
    {
      h2: "What does DP mean, and why does WhatsApp crop it?",
      html: "<p>DP simply stands for display picture, the small image that represents you across WhatsApp. It shows up next to your chats, in groups, and on your profile. The catch is that WhatsApp does not display your photo exactly as you uploaded it. Instead, it shows your DP inside a circle in most places and as a square thumbnail in others.</p><p>To make any photo fit that shape, WhatsApp zooms in and crops the edges automatically. If your original image is wide, tall, or rectangular, the app trims whatever does not fit, which is why faces, text, or important details near the edges so often disappear. A landscape holiday photo or a tall portrait will almost always get chopped. The fix is to give WhatsApp an image that already matches the shape it wants, so it has nothing left to crop.</p>"
    },
    {
      h2: "The ideal WhatsApp DP size",
      html: "<p>The single most important rule is that your DP should be a perfect square. Because WhatsApp displays the profile picture in a circle, a square photo gives the app a clean, predictable area to work with and keeps your face centred.</p><p>For the actual dimensions, aim for a square around 640x640 pixels. That is large enough to look crisp on modern high-resolution phone screens without making the file unnecessarily heavy. The minimum WhatsApp profile picture size is roughly 192x192 pixels, so anything smaller will look soft or pixelated. Going much larger than 640 pixels brings no visible benefit on a small DP and only slows uploads on weak connections. A square in the 500 to 640 pixel range is the sweet spot for a sharp, fast-loading WhatsApp DP size that looks great everywhere the picture appears.</p>"
    },
    {
      h2: "Step by step: crop and resize your photo",
      html: "<p>The easiest way to get this right is to crop to a square first, then set the dimensions. Our free <a href=\"/resize-image-for-whatsapp-dp/\">WhatsApp DP resizer</a> does both in one place, with no app to install and no sign-up. Here is the full process:</p><ol><li>Open the <a href=\"/resize-image-for-whatsapp-dp/\">WhatsApp DP resizer</a> and upload the photo you want to use.</li><li>Use the square crop option to trim the image to a 1:1 ratio. If you only need to recompose the shot, the dedicated <a href=\"/crop-image/\">crop image</a> tool gives you finer control over the frame.</li><li>Set the output to a square size, ideally 640x640 pixels. For other platforms, the <a href=\"/image-resizer/\">image resizer</a> lets you type in any custom dimensions you like.</li><li>Preview the result to confirm your face sits nicely inside the frame, then download the finished image.</li><li>Open WhatsApp, tap your profile, choose the new photo, and you will see the crop circle barely move because the image already fits.</li></ol><p>Posting to several apps at once? The <a href=\"/social-media-image-resizer/\">social media image resizer</a> handles Instagram, Facebook, and more from the same upload, so you are never guessing dimensions again.</p>"
    },
    {
      h2: "Tips to keep your face centred and sharp",
      html: "<p>A few small habits make every DP look better. When you crop, leave a little breathing room around your head rather than zooming in tight, since WhatsApp trims the corners of the square to form the circle. Anything pushed right to the edge risks being clipped, so keep your eyes and smile near the middle of the frame.</p><p>If your photo file is large, run it through the <a href=\"/image-compressor/\">image compressor</a> after resizing. A lighter file uploads instantly even on slow data and still looks identical at DP size. Always start from the highest-quality original you have, because enlarging a tiny image only adds blur that no tool can undo.</p><p>On privacy, it is worth knowing that a good <a href=\"/resize-image-for-whatsapp-dp/\">WhatsApp dp maker</a> processes everything right inside your browser. With our tools, your photo is never uploaded to a server, so your image stays on your own device from start to finish. Explore the full set of free utilities on the <a href=\"/image-tools/\">image tools</a> page whenever you need to edit a picture quickly and safely.</p>"
    }
  ],
  faqs: [
    {
      q: "What is the best size to resize a photo for WhatsApp DP?",
      a: "A perfect square of about 640x640 pixels is ideal. It stays sharp on high-resolution screens, loads quickly, and matches the circular shape WhatsApp uses so your face is not cropped."
    },
    {
      q: "Why does WhatsApp crop or zoom my profile picture?",
      a: "WhatsApp displays your DP inside a circle and as a square thumbnail, so it automatically zooms and trims any photo that is not already square. Uploading a square image stops it from cutting off the edges."
    },
    {
      q: "What is the minimum WhatsApp profile picture size?",
      a: "Around 192x192 pixels is the practical minimum. Smaller images look soft or pixelated. For a crisp result, a square between 500 and 640 pixels works best."
    },
    {
      q: "Is it safe to use an online WhatsApp dp maker?",
      a: "It is when the tool works in your browser. Our WhatsApp DP resizer processes your photo locally on your device and never uploads it to a server, so your picture stays completely private."
    }
  ]
},
{
  slug: "how-to-resize-photo-and-signature-for-pan-card",
  title: "How to Resize Photo and Signature for a PAN Card",
  description: "A simple step-by-step guide to resize your photo and signature for a PAN card application so your Form 49A passes the NSDL or UTIITSL upload check.",
  date: "2026-07-08",
  category: "Document tools",
  readMins: 6,
  excerpt: "Get your photo and signature for a PAN card application sized correctly the first time. Learn the exact dimensions, file sizes, and how to resize both online in minutes.",
  related: [["/resize-for-pan-card/","PAN Card Photo"],["/signature-resize/","Signature Resize"],["/image-compressor/","Image Compressor"],["/passport-photo-maker/","Passport Photo Maker"]],
  intro: "<p>Applying for a PAN card sounds straightforward until the online form rejects your uploads. The two files that trip people up most are the photo and the signature, because both have strict size and dimension rules. If your image is a few kilobytes too large or the wrong shape, the portal simply will not accept it. This guide walks you through the exact pan card photo size and pan card signature size you need, then shows you how to resize both files in a couple of minutes using free browser tools, so your Form 49A goes through on the first try.</p>",
  sections: [
    {
      h2: "Where you actually submit a PAN photo and signature",
      html: "<p>A new PAN card is applied for using Form 49A (for Indian citizens) through one of two official channels: the Protean portal, formerly known as NSDL, or the UTIITSL portal. Both let you apply fully online with e-KYC or with a scanned photo and signature upload. The moment you choose the upload route, the system expects a properly cropped passport-style photo and a clear signature image that meet its file rules.</p><p>The two portals are run by different agencies, so their upload screens and exact limits can differ slightly and can change over time. Treat the numbers in this guide as the typical, widely-used values, and always confirm the current limits printed on the actual NSDL or UTIITSL upload page before you submit. The good news is that once you understand the pattern, resizing for either portal uses the same simple steps.</p>"
    },
    {
      h2: "The photo and signature requirements at a glance",
      html: "<p>Here is what a PAN application usually asks for. Getting these right is the whole game.</p><ul><li><strong>Photo:</strong> a recent colour passport-style photograph, roughly 3.5 x 2.5 cm, with your face centred, plain light background, and no caps or dark glasses. The file is typically a JPEG and is expected to sit within a small kilobyte range, often a few KB up to around 20 to 50 KB depending on the portal.</li><li><strong>Signature:</strong> your signature done in black ink on plain white paper, then scanned or photographed. The signature should fill the box neatly without touching the edges, and the file is again a small JPEG within a similar KB range.</li></ul><p>Two details cause most rejections. First, the photo and signature for pan card application must be the correct shape, not a random crop from a phone selfie. Second, the file size must fall inside the allowed KB window. A photo straight from a modern phone can be 3 to 6 MB, which is hundreds of times larger than allowed, so a signature resize for pan card and a photo resize are almost always required.</p>"
    },
    {
      h2: "Step by step: resize your photo and signature",
      html: "<p>You can do everything from a phone or laptop browser, with no app to install. Here is the workflow we recommend.</p><ol><li><strong>Start with the all-in-one tool.</strong> Open the <a href=\"/resize-for-pan-card/\">PAN card photo and signature</a> resizer, which is built specifically for this document and handles both files with the right targets.</li><li><strong>Fix the photo dimensions.</strong> Upload your photograph and crop it to the passport-style shape close to 3.5 x 2.5 cm. If you only need a clean crop and scale, the general <a href=\"/image-resizer/\">image resizer</a> works too, and the <a href=\"/passport-photo-maker/\">passport photo maker</a> is handy when you want a tidy plain background.</li><li><strong>Resize the signature.</strong> Photograph or scan your black-ink signature, then open the <a href=\"/signature-resize/\">signature resize</a> tool to crop out the white margins and set the dimensions so it fills the signature box correctly.</li><li><strong>Bring both files under the KB limit.</strong> Run each image through the <a href=\"/image-compressor/\">image compressor</a> and target the KB range shown on the portal. Compression shrinks the file without changing the visible dimensions, which is exactly what the upload check wants.</li><li><strong>Save and upload.</strong> Download the finished JPEGs and upload them on the NSDL or UTIITSL form. Because they already match the shape and size rules, the portal should accept them straight away.</li></ol><p>Everything runs in your browser, so your photo and signature are processed on your own device rather than being sent to a server. You can explore the full set under <a href=\"/image-tools/\">image tools</a> if you need other formats later.</p>"
    },
    {
      h2: "Common rejection reasons and how to avoid them",
      html: "<p>If a PAN portal keeps refusing your upload, it is almost always one of these.</p><ul><li><strong>File too large.</strong> The single most common cause. A raw phone photo is far above the KB limit, so compress it before uploading.</li><li><strong>Wrong dimensions or aspect ratio.</strong> A square selfie crop will not pass a passport-style check. Match the expected pan card photo size and pan card signature size before compressing.</li><li><strong>Signature in blue or pencil.</strong> Use black ink on white paper, then do the signature resize for pan card so only the signature, not the page, shows.</li><li><strong>Faint or low-contrast signature.</strong> A light grey scan can read as blank. Use a firm pen stroke and good lighting.</li><li><strong>Dark, blurred, or cluttered photo.</strong> A plain light background, even lighting, and a clear face are expected.</li></ul><p>Fix the shape first, then the file size, and you remove almost every reason a PAN application gets bounced at the upload step.</p>"
    }
  ],
  faqs: [
    { q: "What is the correct pan card photo size?", a: "A PAN photo is a colour passport-style photograph of roughly 3.5 x 2.5 cm, saved as a small JPEG within the kilobyte range the portal shows on its upload page. Crop to the passport shape first, then compress the file to fit the allowed KB window." },
    { q: "What is the right pan card signature size?", a: "Your signature should be done in black ink on white paper, then cropped so it fills the signature box without touching the edges. Save it as a small JPEG inside the KB range listed on the NSDL or UTIITSL upload screen, and make sure the strokes are dark and clear." },
    { q: "How do I prepare the photo and signature for pan card application online?", a: "Crop the photo to passport shape, crop the signature out of its white margins, then compress both JPEGs to the allowed KB size. You can do all of this in your browser using the PAN card photo and signature tool, the signature resize tool, and the image compressor." },
    { q: "Why does the portal keep rejecting my files?", a: "Usually the file is too large or the wrong shape. Resize the image to the expected dimensions, then compress it under the KB limit. Always confirm the exact specifications on the official NSDL or UTIITSL portal, since the limits can change." }
  ],
},
  {
    slug: "how-to-convert-powerpoint-to-word",
    title: "How to Convert PowerPoint to Word (Free, No Software)",
    description: "Convert PowerPoint to Word in your browser — extract slide text into an editable .docx for free. Step by step, no software, no sign-up, files never uploaded.",
    date: "2026-07-09",
    category: "Document tools",
    readMins: 5,
    excerpt: "Need the wording of a deck in Word? Here's how to turn a PowerPoint into an editable .docx in seconds — free, private, and with no software to install.",
    related: [["/ppt-to-word/", "PPT to Word"], ["/txt-to-word/", "Text to Word"], ["/epub-to-word/", "EPUB to Word"], ["/pdf/merge/", "Merge PDF"]],
    intro: "<p>Reusing the content of a presentation — for meeting notes, a report, a handout or a script — usually means retyping each slide by hand. It doesn't have to. If you have a modern <strong>.pptx</strong> file, you can pull all of its text into an editable Word document in one step, right in your browser. Here's exactly how, plus an honest note on what this kind of conversion can and can't do.</p>",
    sections: [
      { h2: "The quick way: convert in your browser", html: "<p>Open the <a href=\"/ppt-to-word/\">PowerPoint to Word</a> tool and drop your <code>.pptx</code> file onto it. The tool reads every slide, extracts the text, and builds an editable Word <strong>.docx</strong> that downloads automatically. Each slide's text is grouped under a bold \"Slide 1\", \"Slide 2\" heading, so the structure stays clear. There's no upload — the whole conversion runs on your device — so it's safe even for confidential decks.</p>" },
      { h2: "What you get (and what you don't)", html: "<p>It's worth being clear about this, because many \"ppt to word\" services quietly disappoint. This kind of in-browser conversion is a <strong>text extraction</strong>: it captures the words and the slide-by-slide order into an editable document. It does <em>not</em> redraw slide graphics, photos, charts, animations or the exact visual layout inside Word — recreating slide visuals in a Word page needs desktop software or a paid server service. For the most common goal — getting the wording out so you can edit and reuse it — the extracted text is exactly what you need.</p>" },
      { h2: ".pptx vs the old .ppt format", html: "<p>The tool works with <strong>.pptx</strong> files — PowerPoint 2007 and newer — because that format is an open package the browser can read. If you have an old binary <strong>.ppt</strong> file, open it in PowerPoint (or Google Slides / LibreOffice Impress) and use \"Save As\" to save a <code>.pptx</code> copy first, then convert that.</p>" },
      { h2: "After converting: tidy it up", html: "<p>Open the downloaded <code>.docx</code> in Word, Google Docs or LibreOffice Writer and it's fully editable — add headings, bold, fonts and spacing as you like. If you also need to combine documents or shrink a PDF, the <a href=\"/pdf/merge/\">Merge PDF</a> and <a href=\"/pdf/compress/\">Compress PDF</a> tools help. For plain text or ebooks, the <a href=\"/txt-to-word/\">Text to Word</a> and <a href=\"/epub-to-word/\">EPUB to Word</a> converters use the same approach.</p>" },
    ],
    faqs: [
      { q: "How do I convert PowerPoint to Word for free?", a: "Open the PowerPoint to Word tool, drop in your .pptx, and it extracts the slide text into an editable Word .docx that downloads automatically — free, with no sign-up and nothing uploaded." },
      { q: "Does it keep the slide design and images?", a: "No. It extracts the text and slide-by-slide structure into an editable document. Slide graphics, images and exact layout aren't reproduced — that requires desktop software or a paid server service." },
      { q: "Can I convert an old .ppt file?", a: "Not directly. Open it in PowerPoint or Google Slides and save a .pptx copy first, then convert the .pptx." },
      { q: "Are my slides uploaded anywhere?", a: "No. The conversion happens entirely in your browser, so your presentation never leaves your device." },
    ],
  },
  {
    slug: "dog-years-to-human-years",
    title: "Dog Years to Human Years: How Old Is Your Dog Really?",
    description: "How to convert dog years to human years accurately — the real vet method by breed size, why the '×7' rule is a myth, and a quick reference chart.",
    date: "2026-07-09",
    category: "Calculators",
    readMins: 5,
    excerpt: "The 'multiply by 7' rule is a myth. Here's how dog years really map to human years — and why a Chihuahua and a Great Dane age very differently.",
    related: [["/dog-age-calculator/", "Dog Age Calculator"], ["/age-calculator/", "Age Calculator"], ["/pregnancy-calculator/", "Pregnancy Calculator"], ["/date-difference-calculator/", "Date Difference"]],
    intro: "<p>\"One dog year equals seven human years\" is one of the most repeated pet facts — and it's wrong. Dogs mature very quickly in their first two years and then age more gradually, and how fast they age later depends a lot on their <strong>size</strong>. Here's how the conversion actually works, with a quick chart and a tool that does the maths for you.</p>",
    sections: [
      { h2: "Why the '×7' rule is a myth", html: "<p>The simple multiply-by-seven rule badly misrepresents a dog's early life. A one-year-old dog isn't like a seven-year-old child — it's closer to a <strong>15-year-old human</strong>, already near adulthood. By age two, a dog is roughly <strong>24 in human years</strong>. After that, each dog year adds far fewer human years — and the rule ignores breed size entirely, which is the other half of the story.</p>" },
      { h2: "Size changes everything", html: "<p>Small dogs live longer and age slowly in later life; large and giant breeds age faster and reach their senior years sooner. That's why a 10-year-old small dog and a 10-year-old giant dog are not the same age in human terms. As a rough guide, after year two each dog year adds about <strong>4 human years for small breeds</strong>, around 4.5 for medium, 5.3 for large and up to <strong>7 for giant breeds</strong>. The <a href=\"/dog-age-calculator/\">Dog Age Calculator</a> uses this size-adjusted method automatically.</p>" },
      { h2: "Quick dog-age chart", html: "<p>Approximate human-age equivalents for a medium-sized dog:</p><ul><li><strong>1 year</strong> ≈ 15 human years</li><li><strong>2 years</strong> ≈ 24</li><li><strong>5 years</strong> ≈ 37</li><li><strong>8 years</strong> ≈ 51</li><li><strong>10 years</strong> ≈ 60</li><li><strong>13 years</strong> ≈ 74</li></ul><p>Small breeds land a little lower and giant breeds a lot higher at the same ages. Enter your dog's exact age and size in the calculator for a figure tailored to your dog.</p>" },
      { h2: "Life stages and why they matter", html: "<p>Knowing your dog's human-age equivalent helps you plan care. Broadly, a dog is a <strong>puppy</strong> under 1, a <strong>young adult</strong> to about 3, an <strong>adult</strong> to 7, <strong>mature</strong> to 10, and <strong>senior</strong> beyond that — earlier for giant breeds. Senior dogs benefit from more frequent vet check-ups, adjusted diet and gentler exercise. Curious how old that is in days or weeks? The <a href=\"/age-calculator/\">Age Calculator</a> works for any birth date.</p>" },
    ],
    faqs: [
      { q: "How do you convert dog years to human years?", a: "A dog's first year is about 15 human years, the second adds about 9 more (so 2 dog years ≈ 24). After that each dog year adds roughly 4 human years for small breeds up to about 7 for giant breeds. A size-adjusted calculator is the most accurate way." },
      { q: "Is one dog year really seven human years?", a: "No. That's a myth. It underestimates the first two years dramatically and ignores breed size, which strongly affects how dogs age later in life." },
      { q: "Why do bigger dogs age faster?", a: "Large and giant breeds have shorter lifespans and reach their senior years sooner, so each later year of their life corresponds to more human years than it does for a small dog." },
      { q: "When is a dog considered a senior?", a: "Broadly from about 10 years for small and medium dogs, and earlier — around 7 to 8 — for large and giant breeds." },
    ],
  },
  {
    slug: "how-to-convert-text-to-image",
    title: "How to Convert Text to an Image (JPG or PNG) for Free",
    description: "Turn any text into a JPG or PNG image online for free. A simple guide to making quote images, captions and text graphics in your browser — no watermark, no upload.",
    date: "2026-07-09",
    category: "Image tools",
    readMins: 4,
    excerpt: "Need your words as a picture — a quote, a caption, an uneditable snippet? Here's how to turn text into a clean JPG or PNG in seconds.",
    related: [["/text-to-image/", "Text to Image"], ["/image-converter/", "Image Converter"], ["/crop-image/", "Crop Image"], ["/qr-code-generator/", "QR Code Generator"]],
    intro: "<p>Sometimes you need words as an <strong>image</strong> rather than editable text — a quote for Instagram, a caption for a WhatsApp status, a snippet for a slide, or text you want to share as a picture so it can't be easily edited or copied. Turning text into a JPG or PNG takes seconds and doesn't need any design software. Here's how.</p>",
    sections: [
      { h2: "The fast way to turn text into an image", html: "<p>Open the <a href=\"/text-to-image/\">Text to Image</a> tool, type or paste your text, and it renders instantly onto an image you can download as a <strong>JPG or PNG</strong>. You can set the font size, the image width, and the background and text colours to match wherever you're posting it. There's no watermark and nothing is uploaded — the image is drawn on your device.</p>" },
      { h2: "JPG or PNG — which should you pick?", html: "<p>Choose <strong>PNG</strong> when you want the crispest text and a clean file for simple graphics. Choose <strong>JPG</strong> when you want the smallest possible file for a photo-style background. For plain text on a solid colour, PNG usually looks sharpest. You can try both — the tool lets you switch and re-download.</p>" },
      { h2: "Tips for a clean result", html: "<ul><li>Keep a comfortable width so lines don't run too long — text wraps automatically to the width you set.</li><li>Use strong contrast between the text and background colour for readability.</li><li>Bump the font size for social posts, where images are viewed small.</li><li>Break long content into shorter lines using the Enter key — your line breaks are preserved.</li></ul>" },
      { h2: "Related things you can do", html: "<p>Once you have your image, you might want to <a href=\"/crop-image/\">crop it</a> to a specific ratio, <a href=\"/image-compressor/\">compress it</a> to a smaller file, or <a href=\"/image-converter/\">convert it</a> to another format. If you're making something shareable, the <a href=\"/qr-code-generator/\">QR Code Generator</a> is handy for linking back to a page.</p>" },
    ],
    faqs: [
      { q: "How do I turn text into an image?", a: "Open the Text to Image tool, type or paste your text, style it with font size and colours, and download it as a JPG or PNG. It renders in your browser with no watermark." },
      { q: "Can I save the text as a JPG or a PNG?", a: "Both. PNG gives the crispest text for simple graphics; JPG gives the smallest file. You can switch between them and download either." },
      { q: "Is there a watermark?", a: "No. The image contains only your text — no logo, no branding and no sign-up." },
      { q: "Is my text uploaded to a server?", a: "No. The image is generated locally in your browser, so your text never leaves your device." },
    ],
  },
  {
    slug: "meters-to-feet-conversion-guide",
    title: "Meters to Feet: How to Convert (Formula, Chart & Tool)",
    description: "How to convert meters to feet and back — the exact formula (1 m = 3.28084 ft), a quick reference chart, and a free converter for length, weight, temperature and more.",
    date: "2026-07-09",
    category: "Calculators",
    readMins: 4,
    excerpt: "One meter is 3.28084 feet — here's the formula, a handy chart, and a free tool that also does cm, inches, miles, kg, and Celsius to Fahrenheit.",
    related: [["/unit-converter/", "Unit Converter"], ["/resize-image-in-cm/", "Resize in CM"], ["/percentage-calculator/", "Percentage Calculator"], ["/age-calculator/", "Age Calculator"]],
    intro: "<p>Converting between <strong>meters and feet</strong> is one of the most common everyday conversions — for height, rooms, distances and DIY. The maths is simple once you know the factor, and a converter removes the guesswork entirely. Here's the formula, a quick chart, and a tool that handles this plus every other everyday unit.</p>",
    sections: [
      { h2: "The formula", html: "<p>One meter equals about <strong>3.28084 feet</strong>. So to convert meters to feet, <strong>multiply by 3.28084</strong>. To go the other way, one foot is exactly <strong>0.3048 meters</strong>, so <strong>multiply feet by 0.3048</strong> to get meters. For example, 5 meters times 3.28084 is about 16.4 feet, and 10 feet times 0.3048 is 3.048 meters. The <a href=\"/unit-converter/\">Unit Converter</a> does this instantly and lets you swap the direction with one tap.</p>" },
      { h2: "Quick meters-to-feet chart", html: "<ul><li><strong>1 m</strong> = 3.28 ft</li><li><strong>1.5 m</strong> = 4.92 ft</li><li><strong>1.7 m</strong> = 5.58 ft</li><li><strong>2 m</strong> = 6.56 ft</li><li><strong>5 m</strong> = 16.40 ft</li><li><strong>10 m</strong> = 32.81 ft</li><li><strong>100 m</strong> = 328.08 ft</li></ul><p>For heights, remember a foot has 12 inches — so 1.7 m (5.58 ft) is about 5 feet 7 inches.</p>" },
      { h2: "Feet and inches for height", html: "<p>Because people give height in feet <em>and inches</em>, the decimal part of a feet value is a fraction of a foot, not inches. Multiply the decimals by 12 to get inches: 5.58 ft becomes 0.58 times 12, about 7 inches, so 1.7 m is about 5 feet 7 inches. The converter shows the precise decimal; then a quick times-12 gives the inches.</p>" },
      { h2: "One tool for every unit", html: "<p>Meters and feet are just the start. The same <a href=\"/unit-converter/\">Unit Converter</a> handles length (cm, mm, km, inches, miles, nautical miles), plus <strong>weight</strong> (kg, pounds, ounces), <strong>temperature</strong> (Celsius, Fahrenheit, Kelvin), <strong>area</strong>, <strong>volume</strong> (US and UK gallons) and <strong>speed</strong> (km/h, mph, knots). For photo and print sizes in centimetres, the <a href=\"/resize-image-in-cm/\">resize in cm</a> tool is a companion.</p>" },
    ],
    faqs: [
      { q: "How many feet are in a meter?", a: "One meter equals about 3.28084 feet. Multiply meters by 3.28084 to get feet, or multiply feet by 0.3048 to get meters." },
      { q: "How do I convert my height from meters to feet and inches?", a: "Multiply your height in meters by 3.28084 to get feet, then multiply the decimal part by 12 to get inches. For example, 1.7 m is about 5.58 ft, which is about 5 feet 7 inches." },
      { q: "Is the conversion exact?", a: "Yes — one inch is defined as exactly 0.0254 meters, so a foot is exactly 0.3048 meters. The converter uses these exact factors." },
      { q: "Can the tool convert other units too?", a: "Yes. The Unit Converter also handles weight, temperature, area, volume and speed, in addition to all common length units." },
    ],
  },
  {
    slug: "what-is-a-jfif-file",
    title: "What Is a JFIF File and How to Convert It to JPG or PNG",
    description: "What a .jfif file is, why Windows sometimes saves photos as JFIF, and how to convert JFIF to JPG or PNG for free in your browser — no software, no upload.",
    date: "2026-07-09",
    category: "Image tools",
    readMins: 4,
    excerpt: "Downloaded an image that saved as .jfif and won't open where you need it? Here's what JFIF is and how to convert it to JPG or PNG in seconds.",
    related: [["/jfif-to-jpg/", "JFIF to JPG"], ["/jfif-to-png/", "JFIF to PNG"], ["/image-converter/", "Image Converter"], ["/png-to-jpg/", "PNG to JPG"]],
    intro: "<p>You saved a picture from a website or email and it came down as a <strong>.jfif</strong> file — and now some app or upload form won't accept it. It's a common, frustrating surprise. The good news: a JFIF is barely different from an ordinary JPEG, and converting it to a standard <strong>.jpg</strong> or <strong>.png</strong> takes seconds. Here's what's going on and how to fix it.</p>",
    sections: [
      { h2: "What is a JFIF file?", html: "<p><strong>JFIF</strong> stands for JPEG File Interchange Format. In plain terms, it's a JPEG image saved with a <code>.jfif</code> extension instead of <code>.jpg</code>. The actual image data inside is standard JPEG — the pixels are identical. Only the file name is unusual, which is why some apps and upload forms, expecting <code>.jpg</code> or <code>.png</code>, refuse to open it.</p>" },
      { h2: "Why does Windows save images as JFIF?", html: "<p>On some Windows and browser configurations, a quirk in how the system maps image types causes downloaded JPEGs to be saved with the <code>.jfif</code> extension. It's not a corrupted file and nothing is wrong with the image — it's just labelled with the interchange-format name. You can change registry settings to stop it, but for a one-off file it's far quicker to simply convert it.</p>" },
      { h2: "How to convert JFIF to JPG or PNG", html: "<p>Use the <a href=\"/jfif-to-jpg/\">JFIF to JPG</a> tool for a standard JPG (with a quality slider to control the file size), or <a href=\"/jfif-to-png/\">JFIF to PNG</a> for a lossless PNG. Click or drop your <code>.jfif</code> file, and the converted image downloads immediately. Everything runs in your browser, so your photo is never uploaded to a server.</p>" },
      { h2: "JPG or PNG for a JFIF?", html: "<p>Pick <strong>JPG</strong> if you want a small file — ideal for uploads and sharing — and <strong>PNG</strong> if you want a lossless copy that many editors and design tools prefer. For batch work or other formats, the all-in-one <a href=\"/image-converter/\">Image Converter</a> handles PNG, JPG and WebP, and <a href=\"/png-to-jpg/\">PNG to JPG</a> covers the reverse.</p>" },
    ],
    faqs: [
      { q: "Is a JFIF file the same as a JPEG?", a: "Essentially yes. A JFIF is a JPEG image saved with a .jfif extension. The image data is standard JPEG — only the file name differs, which is why some apps reject it." },
      { q: "How do I convert JFIF to JPG?", a: "Open the JFIF to JPG tool, drop in your .jfif file, and download the standard .jpg. It's re-encoded in your browser with a quality option, and nothing is uploaded." },
      { q: "Why did my photo download as .jfif?", a: "A quirk in some Windows and browser setups saves downloaded JPEGs with the .jfif extension. The image is fine — converting it to .jpg makes it work everywhere." },
      { q: "Will converting lose quality?", a: "Converting to PNG is lossless. Converting to JPG re-encodes at a quality you choose; at 90 percent or higher the difference is not visible." },
    ],
  },
  {
    slug: "how-to-convert-csv-to-json",
    title: "How to Convert CSV to JSON (With Examples)",
    description: "How to convert CSV to JSON online for free — turn spreadsheet rows into JSON objects with headers as keys, handle quoted commas, and keep numbers and booleans typed.",
    date: "2026-07-09",
    category: "Developer tools",
    readMins: 5,
    excerpt: "Have spreadsheet data but need JSON for your code or API? Here's how to convert CSV to JSON cleanly — headers as keys, quoted commas handled.",
    related: [["/csv-to-json/", "CSV to JSON"], ["/csv-to-pdf/", "CSV to PDF"], ["/json-formatter/", "JSON Formatter"], ["/text-to-json/", "Text to JSON"]],
    intro: "<p>CSV is how spreadsheets and databases export data, but code and APIs almost always want <strong>JSON</strong>. Converting between them by hand is tedious and error-prone — especially when fields contain commas or quotes. Here's how to do it cleanly and safely in your browser, with examples.</p>",
    sections: [
      { h2: "What the conversion looks like", html: "<p>Given a CSV with a header row of <code>name, age, active</code> and rows for Ada (36, true) and Alan (41, false), a good CSV-to-JSON conversion produces an array of objects that use the header row as the keys — for example an object with <code>name</code> set to \"Ada\", <code>age</code> set to the number 36 and <code>active</code> set to the boolean true, and a second object for Alan. The <a href=\"/csv-to-json/\">CSV to JSON</a> tool does this instantly — paste your CSV, then copy or download the JSON.</p>" },
      { h2: "Headers as keys, and typed values", html: "<p>Two options make the output genuinely useful. Keep <strong>\"First row is header\"</strong> on so your column names become the object keys. Turn on <strong>\"Detect numbers &amp; booleans\"</strong> so values like <code>36</code> and <code>true</code> become real JSON numbers and booleans instead of strings — which is what most code expects. Turn that off if you need everything kept as text, for example ID codes with leading zeros.</p>" },
      { h2: "Handling commas and quotes inside fields", html: "<p>The tricky part of CSV is fields that themselves contain commas or line breaks — like a city written as \"London, UK\". Proper CSV wraps those in double quotes, and escapes internal quotes by doubling them. A good converter follows these rules so that value stays a single field rather than splitting in two. The tool also supports <strong>semicolon, tab and pipe</strong> delimiters, which are common in European spreadsheets and exports from Excel or Google Sheets.</p>" },
      { h2: "Privacy and related tools", html: "<p>Because the conversion runs entirely in your browser, your data is never uploaded — which matters for private or sensitive spreadsheets. Once you have JSON, tidy it with the <a href=\"/json-formatter/\">JSON Formatter</a>, or turn the same data into a printable table with <a href=\"/csv-to-pdf/\">CSV to PDF</a>. For free-form text rather than tabular data, use <a href=\"/text-to-json/\">Text to JSON</a>.</p>" },
    ],
    faqs: [
      { q: "How do I convert CSV to JSON?", a: "Paste your CSV into the CSV to JSON tool, keep 'First row is header' on so columns become keys, and click Convert. Each row becomes a JSON object you can copy or download." },
      { q: "Will numbers and booleans stay as strings?", a: "Only if you want them to. With 'Detect numbers and booleans' on, values like 42 and true become real JSON numbers and booleans; turn it off to keep everything as text." },
      { q: "Does it handle commas inside a field?", a: "Yes. Fields wrapped in double quotes can contain commas, line breaks and escaped quotes, so a value like \"Smith, John\" stays in one field." },
      { q: "Is my data uploaded?", a: "No. The conversion runs in your browser, so your CSV never leaves your device — safe for private data." },
    ],
  },
];

export const POST_SLUGS = POSTS.map((p) => p.slug);
