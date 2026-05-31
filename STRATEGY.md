# India Exam-Tools Website — Strategy, Keyword Research & Architecture

> Audience locked: **Exam / job applicants in India** (SSC, UPSC, IBPS/Bank, Railway/RRB, State PSC, Police, Teaching, Defence).
> Positioning: the **free, no-login, "your files never leave your device"** toolkit for filling government exam forms — resize/compress photo & signature to exact specs, convert documents, build resume/biodata.
> Synergy engine: feeds off / into **govsarkariresult.com** (existing audience + internal-link authority).

---

## 1. Keyword research — real India volumes (Google Ads, May 2026)

> Google Ads reports volume in **bands** (e.g. "1,000,000"), so treat these as order-of-magnitude, not exact. Competition = *ad* competition; for these utilities organic difficulty is mostly **low–medium** (tool intent, not commercial). CPC is low (₹-equivalent ~$0.05–0.5) — typical for utility traffic, monetised by **volume × AdSense**, not high RPM.

### Tier 1 — Mega-volume anchors (build first, these are the traffic firehose)

| Keyword | India volume/mo | Comp | Notes |
|---|--:|---|---|
| age calculator | **9,140,000** | LOW | Astonishing volume, trivial to build, evergreen |
| jpg to pdf | **7,480,000** | LOW | Form uploads — core exam use-case |
| remove background | **6,120,000** | LOW | + "background remover" 4.09M |
| pdf to jpg | **4,090,000** | LOW | |
| merge pdf | **3,350,000** | LOW | |
| compress pdf | **2,740,000** | LOW | + "pdf compressor" 2.24M |
| typing test | **2,240,000** | LOW | Govt typing-test exams (CPCT, SSC skill test) |
| image resizer | **1,500,000** | LOW | + "resize image" 1.22M, "photo resizer" 1.22M |
| qr code generator | **1,220,000** | LOW | |
| image compressor | **1,000,000** | LOW | + "photo compressor" 1.0M |

### Tier 2 — Strong, high-intent (exam-specific & document)

| Keyword | India volume/mo | Comp | Notes |
|---|--:|---|---|
| compress image | 673,000 | LOW | |
| split pdf | 673,000 | LOW | High CPC (~$0.99) — good RPM |
| passport size photo | 550,000 | LOW | + "...maker" 368k — exam photo |
| resume maker | 450,000 | MED | + "resume builder" 135k, "cv maker" 110k |
| hindi typing | 450,000 | LOW | Hindi typing exams (state govt) |
| word counter | 301,000 | LOW | |
| online typing test | 246,000 | LOW | |
| hindi typing test | 165,000 | LOW | |
| english typing test | 165,000 | LOW | |
| remove background from image | 135,000 | LOW | |
| reduce image size in kb | 110,000 | LOW | **The exam-form money phrase** |
| biodata for marriage | 110,000 | MED | + "marriage biodata format" 74k |

### Tier 3 — Exact-spec long-tail (low volume each, but convert + cluster into programmatic pages)

| Keyword | India volume/mo | Comp | Notes |
|---|--:|---|---|
| signature resize | 74,000 | LOW | Exam signature spec |
| compress image to 100kb | 60,500 | LOW | |
| free resume builder | 49,500 | HIGH | |
| compress image to 20kb | 49,500 | LOW | |
| compress jpg to 50kb | 33,100 | LOW | |
| biodata maker | 18,100 | MED | + "marriage biodata maker" 18.1k |
| resize photo in kb | 12,100 | LOW | |
| add date on photo | 1,000 | LOW | Low as search; keep as a *feature*, not a landing page |

**Read-through:**
- The **PDF suite + age calculator + background remover** alone command **30M+ searches/month** in India at LOW competition. These are the foundation.
- The **exam-specific value (resize/compress to exact KB & dimensions)** is lower individual volume but *uniquely defensible* and where your Sarkari synergy wins — the big generic tools (iLovePDF, remove.bg) don't target "compress to 50KB for SSC CGL."
- "add date on photo" is weak as a keyword (people use phone apps) — **demote it to a feature** inside the image tool, don't give it a hero page.

---

## 2. The programmatic SEO play (where traffic compounds)

Two flagship tools spawn hundreds of long-tail landing pages from templates:

**A. "Compress / resize to exact KB" matrix** — off the Image Compressor:
```
/compress-image-to-{10,15,20,25,30,40,50,75,100,150,200,300,500}-kb
/resize-image-to-{20,50,100}-kb
/compress-jpg-to-{20,50,100}-kb
/compress-signature-to-{10,20,50}-kb
```

**B. "Photo & signature for {exam}" matrix** — off Image Resizer + Passport Photo:
```
/photo-resize-for-{ssc-cgl, ssc-chsl, upsc, ibps-po, ibps-clerk, sbi-po,
                    rrb-ntpc, rrb-group-d, neet, jee, uppsc, bpsc, ...}
```
Each page: the live tool pre-set to that exam's official spec (dimensions + KB range) + a short "official requirement" table + FAQ schema. **Pull the spec table straight from govsarkariresult.com exam data** — you already have it.

**Guardrail:** these are tool pages with unique pre-sets + unique spec data, NOT thin doorways. Each must render the working tool and exam-specific data. Cap the matrix to exams/sizes that actually have search demand (validate with `dataforseo_labs_google_keyword_ideas` before generating). Log what you skip — don't silently ship 500 near-empty pages (index-bloat risk).

---

## 3. Site architecture

### Stack
- **Next.js (App Router) + static export** (`output: 'export'`) → pure static, host on **Cloudflare Pages / Vercel / Netlify** (free tier covers huge traffic).
- **All processing client-side** (browser): zero server cost, infinite scale, privacy selling point.
  - Image resize/compress/crop → Canvas API (no lib needed; quality binary-search for exact KB).
  - Background removal → `@imgly/background-removal` (WASM/ONNX, in-browser).
  - PDF merge/split/compress/jpg↔pdf → `pdf-lib` + `pdf.js` + `jspdf`.
  - QR → `qrcode`. Typing/age/counters → vanilla.
- **Bilingual EN + Hindi** — mirror your Polylang pattern (`/` + `/hi/`), or `next-intl`.

### URL / sitemap structure
```
/                          Home — tool grid, search box
/image-resizer             Hub: resize by px / %
/image-compressor          Hub: compress to target KB   ← flagship + matrix
/passport-photo-maker      Passport/exam photo (presets + white bg)
/signature-resize          Signature to spec
/remove-background
/photo-stamp               Name/date/watermark on photo (feature-rich, not its own keyword bet)
/pdf/merge  /pdf/split  /pdf/compress  /pdf/jpg-to-pdf  /pdf/pdf-to-jpg
/resume-maker              Templates + PDF export
/marriage-biodata-maker    EN + HI templates
/typing-test               /typing-test/hindi  /typing-test/english
/age-calculator
/qr-code-generator
/word-counter
/compress-image-to-{N}-kb        (programmatic, matrix A)
/photo-resize-for-{exam}         (programmatic, matrix B)
/hi/...                          Hindi mirror
```

### Page template (every tool page)
1. **H1 + 1-line intent** ("Compress JPG to 50KB online — free, no signup").
2. **The live tool, above the fold** (this is what users came for; don't bury it).
3. Short "How to" (3–4 steps) + "Why use this" trust line ("100% in your browser — files never uploaded").
4. Exam spec table (on programmatic pages).
5. **FAQ with `FAQPage` JSON-LD** + `SoftwareApplication`/`HowTo` schema.
6. Related-tools internal links + breadcrumb.

### Performance / SEO baseline
- Static HTML, lazy-load the heavy WASM (background removal) only on that route.
- Target green Core Web Vitals (LCP < 2.5s, INP < 200ms) — static + tiny JS makes this easy and it's a ranking edge over bloated competitors.
- `sitemap.xml` (split: core + programmatic), `robots.txt`, IndexNow ping on publish (you already do this for GSR).

---

## 4. Monetisation
- **Primary: Google AdSense** display — these are complete-task-and-leave sessions, perfect for display. Volume × RPM is the model.
  - Best ad real estate: below the tool result, between "how to" and FAQ. Don't block the tool with ads (hurts UX + CWV).
- Auto-ads off; manual placements for CWV control.
- **Phase 2:** optional "Pro / no-ads + batch processing + larger files" one-time or small subscription; affiliate (resume-writing services, hosting) on resume/CV pages.
- Eligibility note: AdSense wants real content + privacy policy + some site age; ship the content/FAQ sections and legal pages from day one (reuse GSR legal-page generator).

---

## 5. Build roadmap (phased)

**Phase 1 — Traffic core (highest volume × synergy):**
Image Compressor (+ KB matrix), Image Resizer, Passport Photo, Signature resize, JPG→PDF, PDF Merge/Split/Compress, PDF→JPG, Age Calculator. Ship legal pages + AdSense + sitemap.

**Phase 2 — Engagement & niche moat:**
Remove Background, Resume/CV Maker, Marriage Biodata Maker, Photo stamp, programmatic exam-photo matrix wired to GSR exam specs.

**Phase 3 — Long-tail & repeat visits:**
Typing Test (EN + HI), QR generator, Word counter, calculators (EMI/GST/SIP/percentage), Hindi mirror of everything.

---

## 6. Domain & branding ideas

Goal: short, India/exam-flavoured, brandable, ideally `.in`/`.com`. Candidates (check availability before committing):

**Exam-flavoured (strong topical signal):**
- `sarkaritools.in` / `.com`  ← clearest match to your Sarkari audience
- `examtools.in`
- `formtools.in`  /  `formready.in`
- `examphoto.in`

**Utility-brandable (broader, future-proof):**
- `kbresizer.com`  /  `resizekb.com`  (owns the "to exact KB" angle)
- `toolskaro.com`  /  `photokaro.in`  ("karo" = "do it", very Indian)
- `quicktools.in`  /  `tooly.in`
- `resizo.in`  /  `compresso.in`

### Live availability checked (Vercel registrar, `.com` only — May 2026)

| Domain | Status |
|---|---|
| sarkaritools.com | ❌ taken |
| examtools.com | ❌ taken |
| kbresizer.com / kbphoto.com / photoresizekb.com | ❌ taken |
| sarkaritool.com / formphoto.com / examready.com | ❌ taken |
| **resizekb.com** | ✅ available (~$11.25/yr) |
| **examphototools.com** | ✅ available (~$11.25/yr) |
| **resizeforexam.com** | ✅ available (~$11.25/yr) |
| **toolskaro.com** | ✅ available (~$11.25/yr) |
| **exampkit.com** | ✅ available (~$11.25/yr) |
| **tooljee.com** | ✅ available (~$11.25/yr) |

> The checker only supports `.com`. The strong `.in` candidates (`sarkaritools.in`, `examtools.in`, `formtools.in`, `photokaro.in`) were **not** checkable here — verify them at an `.in` registrar (often available even when `.com` is taken, and `.in` carries strong India geo-signal).

**Recommendation:**
1. First choice — grab **`sarkaritools.in`** if free (max synergy + India signal).
2. Best available `.com` for the exam-photo niche — **`resizekb.com`** (owns the "to exact KB" angle) or **`examphototools.com`** (literal + descriptive).
3. If going broad/brandable — **`toolskaro.com`**.
