// Data that powers the programmatic SEO pages (rendered by app/[slug]/page.tsx).
// Each entry carries UNIQUE content so every generated page is genuinely differentiated
// (not a near-duplicate template) — important for indexation and E-E-A-T.

export const KB_VALUES = [10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200, 300, 500];

export const kbSlug = (n: number) => `compress-image-to-${n}kb`;

export type KbInfo = {
  /** What this exact size is typically used for (unique per value). */
  usedFor: string;
  /** Unique 2–3 sentence context paragraph. */
  intro: string;
  /** A unique, practical tip for hitting this size. */
  tip: string;
  /** One extra, size-specific FAQ. */
  faq: { q: string; a: string };
};

export const KB_INFO: Record<number, KbInfo> = {
  10: {
    usedFor: "signatures and thumb impressions — rarely photographs",
    intro: "A 10 KB limit almost always applies to a signature or thumb-impression image, not a photograph — it is too small for a clear face photo. Many recruitment portals ask for the signature to be 10 KB or under so the upload stays light.",
    tip: "Scan or photograph your signature on plain white paper, crop tightly around the strokes, and convert to JPG before compressing — a tightly cropped black-on-white signature reaches 10 KB easily without smudging.",
    faq: { q: "Can a passport photo really fit in 10 KB?", a: "A small signature fits comfortably in 10 KB, but a face photo at 10 KB will look blurry. If your form asks for a 10 KB photo, double-check the notification — it is usually the signature that has the 10 KB cap, while the photo is allowed a larger size." },
  },
  15: {
    usedFor: "signatures and small scanned marks on many state forms",
    intro: "A 15 KB cap is common for signatures and other small line images on state PSC and university portals. It gives a little more room than 10 KB while keeping the file tiny.",
    tip: "If your signature is just over the limit, crop out the white margins first — removing empty space shrinks the file far more than dropping quality does.",
    faq: { q: "Why does my signature exceed 15 KB?", a: "Usually because the scan includes a lot of white background or was saved as PNG. Crop tightly and save as JPG, then compress — both steps bring a signature well under 15 KB." },
  },
  20: {
    usedFor: "signatures on SSC forms and very small photos",
    intro: "A 20 KB target is the typical upper limit for signatures on Staff Selection Commission (SSC) forms and a common minimum for small photos. It is one of the most-requested signature sizes in Indian government applications.",
    tip: "For an SSC-style signature, aim for roughly 140×60 pixels and JPG format before compressing — the smaller pixel size plus a 20 KB target keeps the signature crisp.",
    faq: { q: "Is 20 KB enough for an SSC signature?", a: "Yes. SSC signatures are typically capped around 20 KB and look perfectly clear at that size when signed in black ink on white paper and cropped tightly." },
  },
  25: {
    usedFor: "small photographs on some state PSC portals",
    intro: "A 25 KB photo limit appears on several state public service commission and police recruitment portals. It is small for a photo, so a clean, well-lit headshot compresses better than a busy background.",
    tip: "Use a plain light background and resize the photo to about 200×230 pixels first — a smaller starting resolution makes the 25 KB target much easier to hit without heavy blurring.",
    faq: { q: "My photo blurs at 25 KB — what can I do?", a: "Resize it to passport dimensions (around 200×230 px) before compressing. A smaller pixel size needs far less compression to reach 25 KB, so the face stays sharper." },
  },
  30: {
    usedFor: "photographs on many state and university application forms",
    intro: "A 30 KB photo cap is widely used by state recruitment boards and university admission portals. It is a comfortable middle ground — small enough to upload quickly, large enough to keep a face recognisable.",
    tip: "A front-facing photo with even lighting and a plain background compresses cleanly to 30 KB. Avoid patterned backgrounds, which add detail and push the file size up.",
    faq: { q: "What dimensions suit a 30 KB photo?", a: "Around 3.5×4.5 cm (roughly 200×230 px) works well. At that resolution a 30 KB JPG stays clear enough for form verification." },
  },
  40: {
    usedFor: "photographs on Railway (RRB) and several state forms",
    intro: "A 40 KB photo size is common on Railway Recruitment Board (RRB) and state-level application portals. It offers a touch more clarity than the 30 KB forms while still being a small upload.",
    tip: "Railway forms often want a recent colour photo on a white background — compress to 40 KB after resizing to passport size and the photo will pass the upload check easily.",
    faq: { q: "Is 40 KB good for a Railway exam photo?", a: "Yes. RRB photo limits often sit around 40 KB, and a passport-style colour photo retains good clarity at that size." },
  },
  50: {
    usedFor: "photographs on SSC, UPSC and most central government forms",
    intro: "50 KB is the single most common photo limit across Indian government exam portals — SSC, many UPSC stages, banking and central recruitment forms all frequently use it. If you only learn one size, this is the one.",
    tip: "A passport-style colour photo (about 200×230 px) on a light background compresses to 50 KB with almost no visible quality loss — this is the sweet spot for most application forms.",
    faq: { q: "Why is 50 KB so common for exam photos?", a: "It balances clarity and upload speed: 50 KB is large enough to show a clear, verifiable face yet small enough to upload reliably on slow connections, so most portals standardised on it." },
  },
  75: {
    usedFor: "higher-quality photos and small scanned documents",
    intro: "A 75 KB limit gives room for a sharper photograph or a small scanned document such as a category certificate thumbnail. Forms that want extra clarity often choose 75 KB over 50 KB.",
    tip: "If your form allows up to 75 KB, you don't need to over-compress — let the tool keep the quality high and simply land under 75 KB for the crispest result.",
    faq: { q: "Should I always compress to the smallest size?", a: "No. If the form allows up to 75 KB, staying near that cap keeps your photo sharper. Only compress harder when a smaller limit forces you to." },
  },
  100: {
    usedFor: "documents, certificates and handwritten declarations",
    intro: "A 100 KB cap is typical for scanned documents — certificates, mark sheets and the handwritten declaration that bank exams require. It is larger than a photo limit because documents contain more detail and text.",
    tip: "Scan documents in greyscale rather than full colour where allowed — greyscale scans hold text clearly while compressing to 100 KB far more easily than colour ones.",
    faq: { q: "Can I fit a scanned certificate in 100 KB?", a: "Usually yes. Scan at a moderate resolution, save as JPG, and compress to 100 KB — the text stays readable, which is what verifiers check." },
  },
  150: {
    usedFor: "scanned mark sheets and multi-page certificates",
    intro: "A 150 KB limit suits detailed scanned documents like mark sheets and certificates where the text must stay sharp. It is common on admission and document-verification portals.",
    tip: "Keep the scan straight and well-lit; a clean, well-aligned scan compresses to 150 KB with readable text, whereas a skewed or shadowed scan needs a larger file to stay legible.",
    faq: { q: "Will my mark sheet stay readable at 150 KB?", a: "Yes, if you scan it clearly. At 150 KB a typical A4 mark sheet keeps its numbers and text legible for verification." },
  },
  200: {
    usedFor: "category certificates, mark sheets and ID proofs",
    intro: "A 200 KB cap is frequently used for caste/category certificates, ID proofs and mark sheets on government portals. The extra size keeps fine print and official stamps legible.",
    tip: "Scan in colour only if the document has a coloured seal that must be visible; otherwise greyscale at 200 KB preserves more text clarity per kilobyte.",
    faq: { q: "Is 200 KB enough for a certificate with a stamp?", a: "Yes. 200 KB comfortably holds a single-page certificate including a coloured seal or stamp while keeping the text sharp." },
  },
  300: {
    usedFor: "UPSC photos/signatures and detailed document scans",
    intro: "A 300 KB limit is notable because UPSC allows photographs and signatures up to roughly this size — much larger than the 50 KB most exams use. It also fits detailed multi-element document scans.",
    tip: "Because UPSC permits a larger photo, you can keep the quality high — compress to just under 300 KB rather than shrinking aggressively, so your face photo stays crisp.",
    faq: { q: "Why would a photo be allowed up to 300 KB?", a: "Some commissions, including UPSC, accept larger images for clearer identity verification. If your form allows 300 KB, there's no need to compress down to 50 KB." },
  },
  500: {
    usedFor: "full document scans, resumes and PDFs",
    intro: "A 500 KB cap is generous — it suits full-page document scans, resumes and combined PDFs. Forms that accept richer attachments often use a 500 KB ceiling.",
    tip: "At 500 KB you have plenty of headroom; scan at a higher resolution for maximum legibility and just confirm the final file lands under 500 KB.",
    faq: { q: "Do I even need to compress for a 500 KB limit?", a: "Often a phone photo or scan already exceeds 500 KB, so a light compression brings it under the cap while keeping excellent quality." },
  },
};

export type Exam = {
  slug: string;
  name: string;
  authority: string;
  portal: string;
  posts: string;
  blurb: string;
  /** Photo spec line (unique per exam). */
  photo: string;
  /** Signature spec line (unique per exam). */
  signature: string;
  /** Extra required uploads beyond photo+signature (the real differentiator). */
  extras: string[];
  /** A unique paragraph of exam-specific guidance. */
  unique: string;
  /** KB the compressor presets to for this exam's photo. */
  target: number;
  /** Two exam-specific FAQs. */
  uniqueFaqs: { q: string; a: string }[];
};

export const EXAMS: Exam[] = [
  {
    slug: "photo-resize-for-ssc-cgl",
    name: "SSC CGL",
    authority: "Staff Selection Commission",
    portal: "ssc.gov.in",
    posts: "Inspector, Assistant Section Officer, Auditor, Tax Assistant and other Group B & C posts",
    blurb: "The SSC Combined Graduate Level exam recruits graduates into Group B and C posts across central government departments.",
    photo: "Recent colour photo, JPG/JPEG, about 20–50 KB, ~3.5×4.5 cm (≈200×230 px), plain light background.",
    signature: "Black-ink signature on white paper, JPG/JPEG, about 10–20 KB, ~4×2 cm (≈140×60 px).",
    extras: ["SSC uses a One-Time Registration (OTR) — your photo and signature are stored in your profile and reused for every SSC exam, so getting them right once matters."],
    unique: "SSC CGL is filled through the Commission's One-Time Registration, so the photo you upload is reused across SSC CGL, CHSL and MTS. The Commission expects a recent colour photograph (taken within the last few months) with your face clearly visible and no caps or sunglasses. Get a clean 50 KB photo and a 20 KB signature once, and you are set for every SSC exam.",
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
    photo: "Recent colour photo, JPG/JPEG, about 20–50 KB, ~3.5×4.5 cm (≈200×230 px), light background.",
    signature: "Signature in black ink on white paper, JPG/JPEG, about 10–20 KB, ~4×2 cm (≈140×60 px).",
    extras: ["Like all SSC exams, CHSL uses One-Time Registration, so your stored photo and signature are reused automatically."],
    unique: "SSC CHSL is a 12th-pass exam for clerical and data-entry roles, and it shares the same SSC One-Time Registration profile as CGL and MTS. The data-entry roles place a premium on a clear identity photo for document verification at the typing test and joining stages, so use a sharp, recent colour photo compressed to about 50 KB.",
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
    photo: "Recent colour photo, JPG/JPEG, about 20–50 KB, ~3.5×4.5 cm (≈200×230 px), plain background.",
    signature: "Black-ink signature, JPG/JPEG, about 10–20 KB, ~4×2 cm (≈140×60 px).",
    extras: ["MTS and Havaldar posts include a Physical Efficiency / document-verification stage where your uploaded photo is matched to you in person."],
    unique: "SSC MTS recruits Multi Tasking Staff and Havaldar posts, and because the Havaldar role involves a physical and document-verification round, the uploaded photo must clearly match your current appearance. Use a very recent colour photo so verification at the test centre goes smoothly. It shares the SSC One-Time Registration profile with CGL and CHSL.",
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
    photo: "Colour photo, JPG/JPEG, about 20–50 KB, 200×230 px, light background.",
    signature: "Signature in black ink, JPG/JPEG, about 10–20 KB, 140×60 px.",
    extras: [
      "Left thumb impression — JPG, about 20–50 KB, 240×240 px, in black or blue ink on white paper.",
      "Handwritten declaration — JPG, about 50–100 KB, 800×400 px, the prescribed sentence written by hand in running handwriting (not capital letters).",
    ],
    unique: "IBPS PO is different from SSC-style exams: you must upload four images, not two. Besides the photograph and signature, IBPS requires your left thumb impression and a handwritten declaration (a fixed paragraph copied in your own running handwriting). Each has its own size limit, so prepare all four before you start the form. The handwritten declaration is the largest at up to 100 KB.",
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
    photo: "Colour photo, JPG/JPEG, about 20–50 KB, 200×230 px, light background.",
    signature: "Black-ink signature, JPG/JPEG, about 10–20 KB, 140×60 px.",
    extras: [
      "Left thumb impression — JPG, about 20–50 KB, 240×240 px, black or blue ink on white paper.",
      "Handwritten declaration — JPG, about 50–100 KB, 800×400 px, the prescribed text in running handwriting.",
    ],
    unique: "Like IBPS PO, the IBPS Clerk application needs four uploads — photograph, signature, left thumb impression and a handwritten declaration. Many first-time applicants miss the thumb impression and declaration and get stuck mid-form, so scan all four in advance. Keep the photo near 50 KB and the declaration under 100 KB.",
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
    photo: "Colour photo, JPG/JPEG, about 20–50 KB, 200×230 px, light background.",
    signature: "Black-ink signature, JPG/JPEG, about 10–20 KB, 140×60 px.",
    extras: [
      "Left thumb impression — JPG, about 20–50 KB, 240×240 px, black or blue ink on white paper.",
      "Handwritten declaration — JPG, about 50–100 KB, 800×400 px, the exact declaration in running handwriting.",
    ],
    unique: "SBI conducts its own PO recruitment (separate from IBPS) but uses the same four-image upload pattern: photograph, signature, left thumb impression and a handwritten declaration. SBI is strict that the declaration must be in your running handwriting in English — typed text or block capitals are rejected. Prepare all four files at the listed sizes before applying.",
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
    portal: "rrb regional websites",
    posts: "Station Master, Goods Train Manager, Clerk, Typist and other non-technical posts",
    blurb: "The RRB Non-Technical Popular Categories exam fills station master, clerk and other railway posts.",
    photo: "Recent colour photo, JPG/JPEG, about 15–40 KB, ~3.5×4.5 cm, taken on a clear day against a light background.",
    signature: "Signature in black ink on white paper, JPG/JPEG, about 10–40 KB.",
    extras: ["RRB advises a recent colour photograph (often taken within the last three months) and may ask you to bring printed copies of the same photo to later stages."],
    unique: "RRB NTPC is conducted region-wise by the Railway Recruitment Boards, and the application asks for a recent colour photograph — many notifications specify it should be taken within the last three months. Keep extra printed copies of the exact photo you upload, because railway exam stages and document verification often ask for matching hard-copy photos. Photo sizes tend to run a little smaller (around 15–40 KB) than SSC.",
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
    portal: "rrb regional websites",
    posts: "Track Maintainer, Helper, Assistant Pointsman and other Level-1 posts",
    blurb: "The RRB Group D exam recruits track maintainers, helpers and other Level-1 railway posts.",
    photo: "Recent colour photo, JPG/JPEG, about 15–40 KB, light background, face clearly visible.",
    signature: "Black-ink signature on white paper, JPG/JPEG, about 10–40 KB.",
    extras: ["Group D selection includes a Physical Efficiency Test, and the uploaded photo is matched to you at every stage, so use a current, clearly visible photo."],
    unique: "RRB Group D fills Level-1 railway posts and includes a Physical Efficiency Test (PET) where staff verify your identity against the uploaded photo. Because of the physical stages, a very recent and clearly lit photograph is important — an old or unclear photo can cause problems at verification. Photo sizes are small (around 15–40 KB), so resize to passport dimensions before compressing.",
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
    portal: "upsc.gov.in / upsconline.gov.in",
    posts: "IAS, IPS, IFS and other central civil services",
    blurb: "The UPSC Civil Services Examination recruits IAS, IPS, IFS and other central service officers.",
    photo: "Colour photo with your NAME and the DATE the photo was taken printed at the bottom, JPG, commonly up to about 300 KB, 350×350 px or as specified.",
    signature: "Signature in black ink, JPG, commonly up to about 300 KB.",
    extras: ["UPSC specifically requires the photograph to show your name and the date the photo was taken printed clearly at the bottom — a photo without the name and date can be rejected.", "Photo and signature size limits for UPSC are larger (often up to ~300 KB) than the 50 KB used by most exams."],
    unique: "UPSC has a distinctive photo rule that trips up many applicants: the photograph must display your name and the date it was taken printed at the bottom of the image. A plain photo without this name-and-date strip can be rejected. UPSC also allows a much larger file (often up to around 300 KB), so you do not need to compress aggressively — keep the photo sharp and just confirm it stays under the stated limit with the name and date clearly readable.",
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
    photo: "Recent colour photo, JPG/JPEG, about 20–50 KB, ~3.5×4.5 cm, plain light background.",
    signature: "Signature in black ink on white paper, JPG/JPEG, about 10–20 KB.",
    extras: ["UP Police selection includes Physical Standards and a Physical Efficiency Test, so your uploaded photo is matched to you in person at the document-verification and physical stages."],
    unique: "UP Police Constable recruitment, run by the UPPRPB, includes Physical Standards Tests (height/chest measurement) and a Physical Efficiency Test where your identity is checked against the uploaded photo. Use a recent, clear colour photograph on a plain background so verification at the physical stages is smooth. The photo is typically around 50 KB and the signature around 20 KB.",
    target: 50,
    uniqueFaqs: [
      { q: "What photo size does UP Police Constable need?", a: "Usually a colour photo of about 20–50 KB and a signature of about 10–20 KB in JPG format. Confirm the exact limits in the UPPRPB notification on uppbpb.gov.in." },
      { q: "Will my photo be checked at the physical test?", a: "Yes. UP Police has Physical Standards and Efficiency Tests with document verification where your face is matched to the uploaded photo, so use a current, clearly visible photograph." },
    ],
  },
];

export const ALL_SLUGS = [...KB_VALUES.map(kbSlug), ...EXAMS.map((e) => e.slug)];
