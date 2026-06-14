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
];

export const POST_SLUGS = POSTS.map((p) => p.slug);
