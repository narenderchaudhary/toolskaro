// Data that powers the programmatic SEO pages (rendered by app/[slug]/page.tsx).
// Each entry carries UNIQUE, structured content so every generated page is genuinely
// differentiated and can render an elegant spec sheet (not a near-duplicate template).

export const KB_VALUES = [10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200, 300, 500];

export const kbSlug = (n: number) => `compress-image-to-${n}kb`;

// PDF compress-to-KB programmatic targets (high-volume queries, e.g. "compress pdf to 200kb").
export const PDF_KB_VALUES = [100, 200, 300, 500];
export const pdfKbSlug = (n: number) => `compress-pdf-to-${n}kb`;

// Unique per-target content so each PDF-KB page is genuinely differentiated (not a near-duplicate
// template) — important under Google's scaled-content-abuse policy.
export const PDF_KB_INFO: Record<number, { usedFor: string; intro: string; tip: string; faq: { q: string; a: string } }> = {
  100: {
    usedFor: "single-page certificates, scanned declarations, and tight form limits",
    intro: "A 100 KB cap is one of the strictest PDF limits — common for a single scanned certificate, a mark sheet page, or a declaration page some forms ask for. A colour phone scan is usually several times this size, so it needs real compression.",
    tip: "Scan or save the document in greyscale rather than full colour where the form allows it — greyscale holds text clearly while dropping to 100 KB far more easily than a colour scan.",
    faq: { q: "Can a scanned certificate really fit in 100 KB?", a: "Yes, for a single page. Scan at a moderate resolution, keep it greyscale if colour isn't required, and the tool brings it under 100 KB while keeping the text readable — which is what verifiers check." },
  },
  200: {
    usedFor: "the most common PDF upload limit on application and job portals",
    intro: "200 KB is the single most common PDF size limit across online application portals — if a form caps your PDF, it is very often at 200 KB. It fits a short multi-page document or a detailed single-page scan with stamps.",
    tip: "If your PDF is only slightly over, deleting blank or duplicate pages first (with our Delete Pages tool) can get you under 200 KB without losing any quality at all.",
    faq: { q: "Why do so many forms use a 200 KB PDF limit?", a: "200 KB balances legibility and upload speed — large enough for a clear, verifiable scanned document, small enough to upload reliably on slow connections — so many portals standardised on it." },
  },
  300: {
    usedFor: "multi-page documents, combined certificates and detailed scans",
    intro: "A 300 KB limit gives more room for a multi-page PDF — a set of certificates, a combined mark sheet, or a scan with coloured seals that must stay visible. It is common on admission and document-verification portals.",
    tip: "Combine your pages into one PDF first (with our Merge or JPG-to-PDF tools), then compress the whole document to 300 KB in one go — that keeps every page consistent and under the limit.",
    faq: { q: "Will coloured stamps stay visible after compressing to 300 KB?", a: "Yes. 300 KB is generous enough to keep coloured seals and signatures clear across a few pages while still meeting the upload limit." },
  },
  500: {
    usedFor: "full document sets, resumes and detailed multi-page scans",
    intro: "A 500 KB cap is one of the more generous PDF limits — it suits a full document set, a resume with graphics, or a detailed multi-page scan. Many portals that accept richer attachments use a 500 KB ceiling.",
    tip: "At 500 KB you have headroom, so scan at a higher resolution for maximum legibility and simply confirm the final file lands under 500 KB — no need to over-compress.",
    faq: { q: "Do I even need to compress for a 500 KB limit?", a: "Often a multi-page phone scan already exceeds 500 KB, so a light compression brings it under the cap while keeping excellent, fully readable quality." },
  },
};

export type KbInfo = {
  usedFor: string;
  bestFor: string; // short tag for the quick-facts strip
  intro: string;
  tip: string;
  faq: { q: string; a: string };
};

export const KB_INFO: Record<number, KbInfo> = {
  10: {
    usedFor: "signatures and thumb impressions — rarely photographs",
    bestFor: "Signatures",
    intro: "A 10 KB limit almost always applies to a signature or thumb-impression image, not a photograph — it is too small for a clear face photo. Many online forms ask for the signature to be 10 KB or under so the upload stays light.",
    tip: "Scan or photograph your signature on plain white paper, crop tightly around the strokes, and convert to JPG before compressing — a tightly cropped black-on-white signature reaches 10 KB easily without smudging.",
    faq: { q: "Can a passport photo really fit in 10 KB?", a: "A small signature fits comfortably in 10 KB, but a face photo at 10 KB will look blurry. If your form asks for a 10 KB photo, double-check the notification — it is usually the signature that has the 10 KB cap, while the photo is allowed a larger size." },
  },
  15: {
    usedFor: "signatures and small scanned marks on many online forms",
    bestFor: "Signatures",
    intro: "A 15 KB cap is common for signatures and other small line images on many online application portals. It gives a little more room than 10 KB while keeping the file tiny.",
    tip: "If your signature is just over the limit, crop out the white margins first — removing empty space shrinks the file far more than dropping quality does.",
    faq: { q: "Why does my signature exceed 15 KB?", a: "Usually because the scan includes a lot of white background or was saved as PNG. Crop tightly and save as JPG, then compress — both steps bring a signature well under 15 KB." },
  },
  20: {
    usedFor: "signatures on online application forms and very small photos",
    bestFor: "Signatures",
    intro: "A 20 KB target is a typical upper limit for signatures on online application forms and a common minimum for small photos. It is one of the most-requested signature sizes across web forms.",
    tip: "For a signature image, aim for roughly 140×60 pixels and JPG format before compressing — the smaller pixel size plus a 20 KB target keeps the signature crisp.",
    faq: { q: "Is 20 KB enough for a signature image?", a: "Yes. Signatures are typically capped around 20 KB and look perfectly clear at that size when signed in black ink on white paper and cropped tightly." },
  },
  25: {
    usedFor: "small photographs on some online application portals",
    bestFor: "Small photos",
    intro: "A 25 KB photo limit appears on several online application and registration portals. It is small for a photo, so a clean, well-lit headshot compresses better than a busy background.",
    tip: "Use a plain light background and resize the photo to about 200×230 pixels first — a smaller starting resolution makes the 25 KB target much easier to hit without heavy blurring.",
    faq: { q: "My photo blurs at 25 KB — what can I do?", a: "Resize it to passport dimensions (around 200×230 px) before compressing. A smaller pixel size needs far less compression to reach 25 KB, so the face stays sharper." },
  },
  30: {
    usedFor: "photographs on many online application forms",
    bestFor: "Photos",
    intro: "A 30 KB photo cap is widely used by many online application and admission portals. It is a comfortable middle ground — small enough to upload quickly, large enough to keep a face recognisable.",
    tip: "A front-facing photo with even lighting and a plain background compresses cleanly to 30 KB. Avoid patterned backgrounds, which add detail and push the file size up.",
    faq: { q: "What dimensions suit a 30 KB photo?", a: "Around 3.5×4.5 cm (roughly 200×230 px) works well. At that resolution a 30 KB JPG stays clear enough for form verification." },
  },
  40: {
    usedFor: "photographs on many online application forms",
    bestFor: "Photos",
    intro: "A 40 KB photo size is common on many online application and registration portals. It offers a touch more clarity than the 30 KB forms while still being a small upload.",
    tip: "Many forms want a recent colour photo on a white background — compress to 40 KB after resizing to passport size and the photo will pass the upload check easily.",
    faq: { q: "Is 40 KB good for an application photo?", a: "Yes. Photo limits often sit around 40 KB, and a passport-style colour photo retains good clarity at that size." },
  },
  50: {
    usedFor: "photographs on most online application forms",
    bestFor: "Photos",
    intro: "50 KB is the single most common photo limit across online application portals — registration, recruitment and account-signup forms all frequently use it. If you only learn one size, this is the one.",
    tip: "A passport-style colour photo (about 200×230 px) on a light background compresses to 50 KB with almost no visible quality loss — this is the sweet spot for most application forms.",
    faq: { q: "Why is 50 KB so common for application photos?", a: "It balances clarity and upload speed: 50 KB is large enough to show a clear, verifiable face yet small enough to upload reliably on slow connections, so most portals standardised on it." },
  },
  75: {
    usedFor: "higher-quality photos and small scanned documents",
    bestFor: "Sharper photos",
    intro: "A 75 KB limit gives room for a sharper photograph or a small scanned document such as a certificate thumbnail. Forms that want extra clarity often choose 75 KB over 50 KB.",
    tip: "If your form allows up to 75 KB, you don't need to over-compress — let the tool keep the quality high and simply land under 75 KB for the crispest result.",
    faq: { q: "Should I always compress to the smallest size?", a: "No. If the form allows up to 75 KB, staying near that cap keeps your photo sharper. Only compress harder when a smaller limit forces you to." },
  },
  100: {
    usedFor: "documents, certificates and handwritten declarations",
    bestFor: "Documents",
    intro: "A 100 KB cap is typical for scanned documents — certificates, mark sheets and handwritten declarations that some forms require. It is larger than a photo limit because documents contain more detail and text.",
    tip: "Scan documents in greyscale rather than full colour where allowed — greyscale scans hold text clearly while compressing to 100 KB far more easily than colour ones.",
    faq: { q: "Can I fit a scanned certificate in 100 KB?", a: "Usually yes. Scan at a moderate resolution, save as JPG, and compress to 100 KB — the text stays readable, which is what verifiers check." },
  },
  150: {
    usedFor: "scanned mark sheets and multi-page certificates",
    bestFor: "Mark sheets",
    intro: "A 150 KB limit suits detailed scanned documents like mark sheets and certificates where the text must stay sharp. It is common on admission and document-verification portals.",
    tip: "Keep the scan straight and well-lit; a clean, well-aligned scan compresses to 150 KB with readable text, whereas a skewed or shadowed scan needs a larger file to stay legible.",
    faq: { q: "Will my mark sheet stay readable at 150 KB?", a: "Yes, if you scan it clearly. At 150 KB a typical A4 mark sheet keeps its numbers and text legible for verification." },
  },
  200: {
    usedFor: "certificates, mark sheets and ID proofs",
    bestFor: "Certificates",
    intro: "A 200 KB cap is frequently used for certificates, ID proofs and mark sheets on online portals. The extra size keeps fine print and official stamps legible.",
    tip: "Scan in colour only if the document has a coloured seal that must be visible; otherwise greyscale at 200 KB preserves more text clarity per kilobyte.",
    faq: { q: "Is 200 KB enough for a certificate with a stamp?", a: "Yes. 200 KB comfortably holds a single-page certificate including a coloured seal or stamp while keeping the text sharp." },
  },
  300: {
    usedFor: "larger photos/signatures and detailed document scans",
    bestFor: "Larger photos",
    intro: "A 300 KB limit is notable because some forms allow photographs and signatures up to roughly this size — much larger than the 50 KB most forms use. It also fits detailed multi-element document scans.",
    tip: "Because a 300 KB cap permits a larger photo, you can keep the quality high — compress to just under 300 KB rather than shrinking aggressively, so your face photo stays crisp.",
    faq: { q: "Why would a photo be allowed up to 300 KB?", a: "Some portals accept larger images for clearer identity verification. If your form allows 300 KB, there's no need to compress down to 50 KB." },
  },
  500: {
    usedFor: "full document scans, resumes and PDFs",
    bestFor: "Full scans",
    intro: "A 500 KB cap is generous — it suits full-page document scans, resumes and combined PDFs. Forms that accept richer attachments often use a 500 KB ceiling.",
    tip: "At 500 KB you have plenty of headroom; scan at a higher resolution for maximum legibility and just confirm the final file lands under 500 KB.",
    faq: { q: "Do I even need to compress for a 500 KB limit?", a: "Often a phone photo or scan already exceeds 500 KB, so a light compression brings it under the cap while keeping excellent quality." },
  },
};

export type Upload = { icon: string; label: string; kb: string; dims: string; format: string; note: string };

export type Exam = {
  slug: string;
  name: string;
  authority: string;
  portal: string;
  posts: string;
  blurb: string;
  /** Structured list of every file the form requires (the spec-card grid). */
  uploads: Upload[];
  /** A unique paragraph of exam-specific guidance. */
  unique: string;
  /** One exam-specific "do" and "don't" for the checklist. */
  do: string;
  dont: string;
  /** KB the compressor presets to for this exam's photo. */
  target: number;
  uniqueFaqs: { q: string; a: string }[];
};

const PHOTO = (kb: string, dims: string, note: string): Upload => ({ icon: "📷", label: "Photograph", kb, dims, format: "JPG / JPEG", note });
const SIGN = (kb: string, dims: string, note: string): Upload => ({ icon: "✍️", label: "Signature", kb, dims, format: "JPG / JPEG", note });

export const EXAMS: Exam[] = [
  {
    slug: "photo-resize-for-ssc-cgl",
    name: "SSC CGL",
    authority: "Staff Selection Commission",
    portal: "ssc.gov.in",
    posts: "Inspector, Assistant Section Officer, Auditor, Tax Assistant and other Group B & C posts",
    blurb: "The SSC Combined Graduate Level exam recruits graduates into Group B and C posts across central government departments.",
    uploads: [
      PHOTO("20–50 KB", "≈200×230 px", "Recent colour photo, plain light background"),
      SIGN("10–20 KB", "≈140×60 px", "Black ink on white paper"),
    ],
    unique: "SSC CGL is filled through the Commission's One-Time Registration (OTR), so the photo you upload is reused across SSC CGL, CHSL and MTS. The Commission expects a recent colour photograph (taken within the last few months) with your face clearly visible and no caps or sunglasses. Get a clean 50 KB photo and a 20 KB signature once, and you are set for every SSC exam.",
    do: "Use a recent colour photo — your SSC OTR photo is reused across every SSC exam",
    dont: "Don't upload an old school-ID photo with borders or logos",
    target: 50,
    uniqueFaqs: [
      { q: "Does the SSC CGL photo need a date or name on it?", a: "Current SSC One-Time Registration asks for a recent, clear colour photograph; it does not generally require a name/date placard, but always read the latest notice as SSC has used dated-photo rules in some cycles." },
      { q: "Can I reuse my SSC photo for other SSC exams?", a: "Yes. Because SSC uses One-Time Registration, the photo and signature in your profile are reused for SSC CGL, CHSL, MTS and other SSC exams, so a correctly sized photo serves all of them." },
    ],
  },
  {
    slug: "photo-resize-for-ssc-chsl",
    name: "SSC CHSL",
    authority: "Staff Selection Commission",
    portal: "ssc.gov.in",
    posts: "Lower Division Clerk, Data Entry Operator and Postal/Sorting Assistant posts",
    blurb: "The SSC Combined Higher Secondary Level exam recruits 12th-pass candidates for clerk and data-entry posts.",
    uploads: [
      PHOTO("20–50 KB", "≈200×230 px", "Recent colour photo, light background"),
      SIGN("10–20 KB", "≈140×60 px", "Black ink on white paper"),
    ],
    unique: "SSC CHSL is a 12th-pass exam for clerical and data-entry roles, and it shares the same SSC One-Time Registration profile as CGL and MTS. The data-entry roles place a premium on a clear identity photo for document verification at the typing test and joining stages, so use a sharp, recent colour photo compressed to about 50 KB.",
    do: "A clear, recent photo helps at the typing-test document check",
    dont: "Avoid cropped group photos or selfies",
    target: 50,
    uniqueFaqs: [
      { q: "Is the SSC CHSL photo size the same as SSC CGL?", a: "Yes. Both use the same SSC One-Time Registration, so the photo (around 20–50 KB) and signature (around 10–20 KB) specifications are the same." },
      { q: "I am applying right after 12th — any photo tips?", a: "Use a recent passport-style colour photo on a plain background, taken within the last few months, and compress it to about 50 KB. Avoid school-ID style photos with logos or borders." },
    ],
  },
  {
    slug: "photo-resize-for-ssc-mts",
    name: "SSC MTS",
    authority: "Staff Selection Commission",
    portal: "ssc.gov.in",
    posts: "Multi Tasking (Non-Technical) Staff and Havaldar posts in CBIC and CBN",
    blurb: "The SSC Multi Tasking Staff exam fills non-technical Group C posts in central government offices.",
    uploads: [
      PHOTO("20–50 KB", "≈200×230 px", "Very recent colour photo, plain background"),
      SIGN("10–20 KB", "≈140×60 px", "Black ink on white paper"),
    ],
    unique: "SSC MTS recruits Multi Tasking Staff and Havaldar posts, and because the Havaldar role involves a physical and document-verification round, the uploaded photo must clearly match your current appearance. Use a very recent colour photo so verification at the test centre goes smoothly. It shares the SSC One-Time Registration profile with CGL and CHSL.",
    do: "Use a very recent photo — Havaldar posts verify it in person",
    dont: "Don't use a photo more than a few months old",
    target: 50,
    uniqueFaqs: [
      { q: "Why does SSC MTS stress a recent photo?", a: "Havaldar and MTS posts include in-person document verification where staff match your face to the uploaded photo, so an out-of-date photo can cause problems. Use one taken within the last few months." },
      { q: "What signature size does SSC MTS need?", a: "Around 10–20 KB in JPG format, signed in black ink on white paper — the same as other SSC exams via One-Time Registration." },
    ],
  },
  {
    slug: "photo-resize-for-ibps-po",
    name: "IBPS PO",
    authority: "Institute of Banking Personnel Selection",
    portal: "ibps.in",
    posts: "Probationary Officer / Management Trainee in public-sector banks",
    blurb: "The IBPS Probationary Officer exam recruits officers for public-sector banks across India.",
    uploads: [
      PHOTO("20–50 KB", "200×230 px", "Colour photo, light background"),
      SIGN("10–20 KB", "140×60 px", "Black ink"),
      { icon: "👍", label: "Left thumb impression", kb: "20–50 KB", dims: "240×240 px", format: "JPG", note: "Black or blue ink on white paper" },
      { icon: "📝", label: "Handwritten declaration", kb: "50–100 KB", dims: "800×400 px", format: "JPG", note: "Running handwriting, not capitals" },
    ],
    unique: "IBPS PO is different from SSC-style exams: you must upload four images, not two. Besides the photograph and signature, IBPS requires your left thumb impression and a handwritten declaration (a fixed paragraph copied in your own running handwriting). Each has its own size limit, so prepare all four before you start the form. The handwritten declaration is the largest at up to 100 KB.",
    do: "Prepare all four files before opening the application form",
    dont: "Don't write the declaration in capital letters or type it",
    target: 50,
    uniqueFaqs: [
      { q: "What four images does IBPS PO require?", a: "A photograph (~20–50 KB), a signature (~10–20 KB), a left thumb impression (~20–50 KB), and a handwritten declaration (~50–100 KB). All four are mandatory and each has its own size limit." },
      { q: "How do I make the handwritten declaration image?", a: "Write the exact declaration text given in the notification in running handwriting (not capitals) on white paper, photograph or scan it, and compress to about 50–100 KB. Capital letters or a typed version are rejected." },
    ],
  },
  {
    slug: "photo-resize-for-ibps-clerk",
    name: "IBPS Clerk",
    authority: "Institute of Banking Personnel Selection",
    portal: "ibps.in",
    posts: "Clerical cadre staff in participating public-sector banks",
    blurb: "The IBPS Clerk exam recruits clerical cadre staff for participating public-sector banks.",
    uploads: [
      PHOTO("20–50 KB", "200×230 px", "Colour photo, light background"),
      SIGN("10–20 KB", "140×60 px", "Black ink"),
      { icon: "👍", label: "Left thumb impression", kb: "20–50 KB", dims: "240×240 px", format: "JPG", note: "Black or blue ink on white paper" },
      { icon: "📝", label: "Handwritten declaration", kb: "50–100 KB", dims: "800×400 px", format: "JPG", note: "Running handwriting, not capitals" },
    ],
    unique: "Like IBPS PO, the IBPS Clerk application needs four uploads — photograph, signature, left thumb impression and a handwritten declaration. Many first-time applicants miss the thumb impression and declaration and get stuck mid-form, so scan all four in advance. Keep the photo near 50 KB and the declaration under 100 KB.",
    do: "Scan your thumb impression and declaration in advance",
    dont: "Don't skip the thumb impression — it's mandatory",
    target: 50,
    uniqueFaqs: [
      { q: "Is IBPS Clerk's upload list the same as IBPS PO?", a: "Yes. Both need a photograph, signature, left thumb impression and handwritten declaration, each with its own KB limit. Prepare all four before opening the form." },
      { q: "My thumb impression is too dark — will it be rejected?", a: "Use black or blue ink and press lightly so the ridges are visible, scan it cleanly on white paper, and compress to about 20–50 KB. A smudged or over-inked impression can be rejected." },
    ],
  },
  {
    slug: "photo-resize-for-sbi-po",
    name: "SBI PO",
    authority: "State Bank of India",
    portal: "sbi.co.in/careers",
    posts: "Probationary Officer / management trainee in the State Bank of India",
    blurb: "The SBI Probationary Officer exam recruits management trainees for the State Bank of India.",
    uploads: [
      PHOTO("20–50 KB", "200×230 px", "Colour photo, light background"),
      SIGN("10–20 KB", "140×60 px", "Black ink"),
      { icon: "👍", label: "Left thumb impression", kb: "20–50 KB", dims: "240×240 px", format: "JPG", note: "Black or blue ink on white paper" },
      { icon: "📝", label: "Handwritten declaration", kb: "50–100 KB", dims: "800×400 px", format: "JPG", note: "Running handwriting, English, not capitals" },
    ],
    unique: "SBI conducts its own PO recruitment (separate from IBPS) but uses the same four-image upload pattern: photograph, signature, left thumb impression and a handwritten declaration. SBI is strict that the declaration must be in your running handwriting in English — typed text or block capitals are rejected. Prepare all four files at the listed sizes before applying.",
    do: "Write the declaration in your own running handwriting in English",
    dont: "Don't type or print the declaration",
    target: 50,
    uniqueFaqs: [
      { q: "Does SBI PO need a handwritten declaration like IBPS?", a: "Yes. SBI PO requires the same four uploads — photo, signature, left thumb impression and a handwritten declaration of about 50–100 KB, written in your own running handwriting in English." },
      { q: "Is SBI PO recruitment the same as IBPS PO?", a: "No. SBI recruits its Probationary Officers separately through sbi.co.in, though the image upload requirements are very similar to IBPS." },
    ],
  },
  {
    slug: "photo-resize-for-rrb-ntpc",
    name: "RRB NTPC",
    authority: "Railway Recruitment Board",
    portal: "regional RRB websites",
    posts: "Station Master, Goods Train Manager, Clerk, Typist and other non-technical posts",
    blurb: "The RRB Non-Technical Popular Categories exam fills station master, clerk and other railway posts.",
    uploads: [
      PHOTO("15–40 KB", "≈3.5×4.5 cm", "Colour photo taken within the last 3 months"),
      SIGN("10–40 KB", "—", "Black ink on white paper"),
    ],
    unique: "RRB NTPC is conducted region-wise by the Railway Recruitment Boards, and the application asks for a recent colour photograph — many notifications specify it should be taken within the last three months. Keep extra printed copies of the exact photo you upload, because railway exam stages and document verification often ask for matching hard-copy photos. Photo sizes tend to run a little smaller (around 15–40 KB) than SSC.",
    do: "Keep printed copies of the same photo for later stages",
    dont: "Don't use a photo older than three months",
    target: 40,
    uniqueFaqs: [
      { q: "How recent must the RRB NTPC photo be?", a: "RRB notifications often require a colour photograph taken within the last three months. Keep several printed copies of the same photo for later document-verification rounds." },
      { q: "What photo size does RRB NTPC use?", a: "Railway photo limits are typically around 15–40 KB for the photograph and a similar small range for the signature — slightly smaller than the SSC 50 KB standard." },
    ],
  },
  {
    slug: "photo-resize-for-rrb-group-d",
    name: "RRB Group D",
    authority: "Railway Recruitment Board",
    portal: "regional RRB websites",
    posts: "Track Maintainer, Helper, Assistant Pointsman and other Level-1 posts",
    blurb: "The RRB Group D exam recruits track maintainers, helpers and other Level-1 railway posts.",
    uploads: [
      PHOTO("15–40 KB", "≈3.5×4.5 cm", "Recent colour photo, face clearly visible"),
      SIGN("10–40 KB", "—", "Black ink on white paper"),
    ],
    unique: "RRB Group D fills Level-1 railway posts and includes a Physical Efficiency Test (PET) where staff verify your identity against the uploaded photo. Because of the physical stages, a very recent and clearly lit photograph is important — an old or unclear photo can cause problems at verification. Photo sizes are small (around 15–40 KB), so resize to passport dimensions before compressing.",
    do: "Use a current photo — it's matched at the Physical Efficiency Test",
    dont: "Don't use an unclear, dark or old photo",
    target: 40,
    uniqueFaqs: [
      { q: "Why does RRB Group D need such a recent photo?", a: "Group D has a Physical Efficiency Test and document verification where your face is matched to the uploaded photo, so use a current, clearly visible colour photograph." },
      { q: "What is the RRB Group D signature size?", a: "Usually a small JPG in the region of 10–40 KB, signed in black ink on white paper. Check your regional RRB notification for the exact figure." },
    ],
  },
  {
    slug: "photo-resize-for-upsc",
    name: "UPSC Civil Services",
    authority: "Union Public Service Commission",
    portal: "upsconline.gov.in",
    posts: "IAS, IPS, IFS and other central civil services",
    blurb: "The UPSC Civil Services Examination recruits IAS, IPS, IFS and other central service officers.",
    uploads: [
      PHOTO("up to ~300 KB", "350×350 px", "Must show your NAME and DATE printed at the bottom"),
      SIGN("up to ~300 KB", "—", "Black ink on white paper"),
    ],
    unique: "UPSC has a distinctive photo rule that trips up many applicants: the photograph must display your name and the date it was taken printed at the bottom of the image. A plain photo without this name-and-date strip can be rejected. UPSC also allows a much larger file (often up to around 300 KB), so you do not need to compress aggressively — keep the photo sharp and just confirm it stays under the stated limit with the name and date clearly readable.",
    do: "Make sure your name and the photo date are printed at the bottom",
    dont: "Don't upload a plain photo without the name/date strip",
    target: 300,
    uniqueFaqs: [
      { q: "Does the UPSC photo really need my name and date on it?", a: "Yes. UPSC requires the photograph to show your name and the date the photo was taken printed at the bottom. Studios that take UPSC photos add this strip automatically; a photo without it can be rejected." },
      { q: "Why is the UPSC photo size limit larger?", a: "UPSC commonly allows photographs and signatures up to roughly 300 KB — much larger than the 50 KB most exams use — so you can keep the image high quality. Always confirm the exact limit in the current notification." },
    ],
  },
  {
    slug: "photo-resize-for-up-police",
    name: "UP Police",
    authority: "UP Police Recruitment & Promotion Board",
    portal: "uppbpb.gov.in",
    posts: "Constable (Civil Police) and equivalent posts in the Uttar Pradesh Police",
    blurb: "The UP Police Constable exam recruits constables for the Uttar Pradesh Police.",
    uploads: [
      PHOTO("20–50 KB", "≈3.5×4.5 cm", "Recent colour photo, plain light background"),
      SIGN("10–20 KB", "—", "Black ink on white paper"),
    ],
    unique: "UP Police Constable recruitment, run by the UPPRPB, includes Physical Standards Tests (height/chest measurement) and a Physical Efficiency Test where your identity is checked against the uploaded photo. Use a recent, clear colour photograph on a plain background so verification at the physical stages is smooth. The photo is typically around 50 KB and the signature around 20 KB.",
    do: "Use a recent, clear photo for the physical-test verification",
    dont: "Don't use filters, selfies or a busy background",
    target: 50,
    uniqueFaqs: [
      { q: "What photo size does UP Police Constable need?", a: "Usually a colour photo of about 20–50 KB and a signature of about 10–20 KB in JPG format. Confirm the exact limits in the UPPRPB notification on uppbpb.gov.in." },
      { q: "Will my photo be checked at the physical test?", a: "Yes. UP Police has Physical Standards and Efficiency Tests with document verification where your face is matched to the uploaded photo, so use a current, clearly visible photograph." },
    ],
  },
];

// PDF compress to a megabyte target ("compress pdf to 1mb / 2mb").
export const PDF_MB_VALUES = [1, 2];
export const pdfMbSlug = (n: number) => `compress-pdf-to-${n}mb`;
export const PDF_MB_INFO: Record<number, { usedFor: string; intro: string; tip: string; faq: { q: string; a: string } }> = {
  1: {
    usedFor: "larger multi-page documents, résumés and combined certificate sets",
    intro: "A 1 MB (about 1024 KB) limit is generous — it comfortably fits a multi-page scanned document, a résumé with graphics, or several certificates combined into one PDF. It is a common ceiling on portals that accept richer attachments.",
    tip: "Merge all your pages into one PDF first (with our Merge or JPG-to-PDF tools), then compress the whole document to 1 MB in one pass so every page stays consistent.",
    faq: { q: "Is 1 MB enough for a multi-page PDF?", a: "Yes. 1 MB easily holds several scanned pages at readable quality. If your document is much larger, this tool reduces it under 1 MB while keeping the text legible." },
  },
  2: {
    usedFor: "full document sets and high-resolution multi-page scans",
    intro: "A 2 MB (about 2048 KB) limit is one of the more generous PDF caps — it suits a complete document set or a high-resolution multi-page scan with colour seals. You rarely need to compress hard to fit it.",
    tip: "Because 2 MB allows good quality, scan at a higher resolution for maximum legibility and just confirm the final file lands under 2 MB.",
    faq: { q: "Do I need to compress for a 2 MB limit?", a: "Often a long colour scan or a graphics-heavy PDF exceeds 2 MB, so a light compression brings it under the cap while keeping excellent, fully readable quality." },
  },
};

export const ALL_SLUGS = [...KB_VALUES.map(kbSlug), ...PDF_KB_VALUES.map(pdfKbSlug), ...PDF_MB_VALUES.map(pdfMbSlug), ...EXAMS.map((e) => e.slug)];
