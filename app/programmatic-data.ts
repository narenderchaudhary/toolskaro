// Data that powers the programmatic SEO pages (rendered by app/[slug]/page.tsx).

export const KB_VALUES = [10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200, 300, 500];

export const kbSlug = (n: number) => `compress-image-to-${n}kb`;

export type Exam = { slug: string; name: string; authority: string; blurb: string };

export const EXAMS: Exam[] = [
  { slug: "photo-resize-for-ssc-cgl", name: "SSC CGL", authority: "Staff Selection Commission", blurb: "The SSC Combined Graduate Level exam recruits graduates into Group B and C posts across central government departments." },
  { slug: "photo-resize-for-ssc-chsl", name: "SSC CHSL", authority: "Staff Selection Commission", blurb: "The SSC Combined Higher Secondary Level exam recruits 12th-pass candidates for clerk and data-entry posts." },
  { slug: "photo-resize-for-ssc-mts", name: "SSC MTS", authority: "Staff Selection Commission", blurb: "The SSC Multi Tasking Staff exam fills non-technical Group C posts in central government offices." },
  { slug: "photo-resize-for-ibps-po", name: "IBPS PO", authority: "Institute of Banking Personnel Selection", blurb: "The IBPS Probationary Officer exam recruits officers for public-sector banks across India." },
  { slug: "photo-resize-for-ibps-clerk", name: "IBPS Clerk", authority: "Institute of Banking Personnel Selection", blurb: "The IBPS Clerk exam recruits clerical cadre staff for participating public-sector banks." },
  { slug: "photo-resize-for-sbi-po", name: "SBI PO", authority: "State Bank of India", blurb: "The SBI Probationary Officer exam recruits management trainees for the State Bank of India." },
  { slug: "photo-resize-for-rrb-ntpc", name: "RRB NTPC", authority: "Railway Recruitment Board", blurb: "The RRB Non-Technical Popular Categories exam fills station master, clerk and other railway posts." },
  { slug: "photo-resize-for-rrb-group-d", name: "RRB Group D", authority: "Railway Recruitment Board", blurb: "The RRB Group D exam recruits track maintainers, helpers and other Level-1 railway posts." },
  { slug: "photo-resize-for-upsc", name: "UPSC Civil Services", authority: "Union Public Service Commission", blurb: "The UPSC Civil Services Examination recruits IAS, IPS, IFS and other central service officers." },
  { slug: "photo-resize-for-up-police", name: "UP Police", authority: "UP Police Recruitment Board", blurb: "The UP Police Constable exam recruits constables for the Uttar Pradesh Police." },
];

export const ALL_SLUGS = [...KB_VALUES.map(kbSlug), ...EXAMS.map((e) => e.slug)];
