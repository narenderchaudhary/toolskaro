// Single source of truth for the tool catalog — consumed by the homepage and the cluster hub pages.
import type { ToolCat } from "./tools-map";

export type Tool = { href: string; icon: string; t: string; d: string; vol: string; ready?: boolean };
export type Category = {
  key: ToolCat;
  name: string;
  hubHref: string;
  color: string;
  tint: string;
  tools: Tool[];
};

export const CATEGORIES: Category[] = [
  {
    key: "image",
    name: "Image Tools",
    hubHref: "/image-tools/",
    color: "#4f46e5",
    tint: "#eef2ff",
    tools: [
      { href: "/image-compressor/", icon: "🗜️", t: "Image Compressor", d: "Compress JPG/PNG to an exact KB size for exam forms.", vol: "1M+/mo", ready: true },
      { href: "/image-resizer/", icon: "📐", t: "Image Resizer", d: "Resize photo by pixels or exam preset.", vol: "1.5M/mo", ready: true },
      { href: "/passport-photo-maker/", icon: "🪪", t: "Passport Photo Maker", d: "White-background passport / exam photo.", vol: "550K/mo", ready: true },
      { href: "/signature-resize/", icon: "✍️", t: "Signature Resize", d: "Resize signature to the KB & size you need.", vol: "74K/mo", ready: true },
      { href: "/remove-background/", icon: "🪄", t: "Remove Background", d: "Erase photo background in your browser.", vol: "6M/mo", ready: true },
      { href: "/crop-image/", icon: "✂️", t: "Crop Image", d: "Drag to crop, or use ratio presets.", vol: "", ready: true },
      { href: "/image-converter/", icon: "🔁", t: "Image Converter", d: "PNG ↔ JPG ↔ WebP with quality.", vol: "", ready: true },
      { href: "/photo-signature-combiner/", icon: "🧩", t: "Photo + Signature", d: "Combine photo & signature in one image.", vol: "", ready: true },
      { href: "/photo-joiner/", icon: "🖼️", t: "Photo Joiner", d: "Combine photos side by side, stacked or grid.", vol: "", ready: true },
      { href: "/social-media-image-resizer/", icon: "📱", t: "Social Media Resizer", d: "Exact sizes for Instagram, FB, WhatsApp, LinkedIn.", vol: "", ready: true },
    ],
  },
  {
    key: "pdf",
    name: "PDF Tools",
    hubHref: "/pdf-tools/",
    color: "#e11d48",
    tint: "#ffe4e6",
    tools: [
      { href: "/pdf/jpg-to-pdf/", icon: "📄", t: "JPG to PDF", d: "Combine images into one PDF.", vol: "7.5M/mo", ready: true },
      { href: "/pdf/pdf-to-jpg/", icon: "🖼️", t: "PDF to JPG", d: "Convert PDF pages to images.", vol: "4.1M/mo", ready: true },
      { href: "/pdf/merge/", icon: "🗂️", t: "Merge PDF", d: "Join multiple PDFs into one.", vol: "3.4M/mo", ready: true },
      { href: "/pdf/compress/", icon: "📉", t: "Compress PDF", d: "Shrink PDF file size for uploads.", vol: "2.7M/mo", ready: true },
      { href: "/pdf/split/", icon: "✂️", t: "Split PDF", d: "Extract pages or split into files.", vol: "", ready: true },
      { href: "/pdf/rotate/", icon: "🔄", t: "Rotate PDF", d: "Rotate pages 90/180/270°.", vol: "", ready: true },
      { href: "/pdf/delete-pages/", icon: "🗑️", t: "Delete PDF Pages", d: "Remove unwanted pages.", vol: "", ready: true },
      { href: "/pdf/page-numbers/", icon: "🔢", t: "Add Page Numbers", d: "Number pages in any position.", vol: "", ready: true },
      { href: "/pdf/watermark/", icon: "💧", t: "Watermark PDF", d: "Add a text watermark to every page.", vol: "", ready: true },
      { href: "/pdf/organize/", icon: "🔀", t: "Organize PDF", d: "Reorder, rotate & delete pages.", vol: "", ready: true },
    ],
  },
  {
    key: "doc",
    name: "Documents",
    hubHref: "/document-tools/",
    color: "#0891b2",
    tint: "#cffafe",
    tools: [
      { href: "/resume-maker/", icon: "📝", t: "Resume / CV Maker", d: "Build a resume and export to PDF.", vol: "450K/mo", ready: true },
      { href: "/marriage-biodata-maker/", icon: "💍", t: "Marriage Biodata Maker", d: "Hindi & English biodata templates.", vol: "110K/mo", ready: true },
      { href: "/cover-letter-generator/", icon: "✉️", t: "Cover Letter Generator", d: "Professional cover letter to PDF.", vol: "", ready: true },
      { href: "/invoice-generator/", icon: "🧾", t: "Invoice Generator", d: "GST invoice maker, export to PDF.", vol: "", ready: true },
    ],
  },
  {
    key: "calc",
    name: "Calculators",
    hubHref: "/calculators/",
    color: "#d97706",
    tint: "#fef3c7",
    tools: [
      { href: "/emi-calculator/", icon: "🏦", t: "EMI Calculator", d: "Home, car & personal loan EMI.", vol: "", ready: true },
      { href: "/sip-calculator/", icon: "📈", t: "SIP Calculator", d: "Mutual fund SIP returns.", vol: "", ready: true },
      { href: "/gst-calculator/", icon: "🧾", t: "GST Calculator", d: "Add or remove GST (CGST/SGST).", vol: "", ready: true },
      { href: "/interest-calculator/", icon: "💰", t: "Interest Calculator", d: "Simple & compound interest.", vol: "", ready: true },
      { href: "/percentage-calculator/", icon: "％", t: "Percentage Calculator", d: "Find %, of, increase/decrease.", vol: "", ready: true },
      { href: "/marks-percentage-calculator/", icon: "🎓", t: "Marks % & CGPA", d: "Marks %, CGPA ↔ percentage.", vol: "", ready: true },
      { href: "/tdee-calculator/", icon: "🔥", t: "TDEE Calculator", d: "Daily calories to maintain, lose or gain.", vol: "", ready: true },
      { href: "/pregnancy-calculator/", icon: "🤰", t: "Pregnancy Calculator", d: "Due date & week-by-week tracker.", vol: "", ready: true },
    ],
  },
  {
    key: "util",
    name: "Utilities",
    hubHref: "/utilities/",
    color: "#059669",
    tint: "#d1fae5",
    tools: [
      { href: "/age-calculator/", icon: "🎂", t: "Age Calculator", d: "Exact age in years, months, days.", vol: "9.1M/mo", ready: true },
      { href: "/qr-code-generator/", icon: "🔳", t: "QR Code Generator", d: "Make a QR from any link or text.", vol: "1.2M/mo", ready: true },
      { href: "/word-counter/", icon: "🔠", t: "Word Counter", d: "Count words, characters, reading time.", vol: "301K/mo", ready: true },
      { href: "/typing-test/", icon: "⌨️", t: "Typing Test", d: "Hindi & English typing practice (WPM).", vol: "2.2M/mo", ready: true },
      { href: "/password-generator/", icon: "🔑", t: "Password Generator", d: "Strong, secure random passwords.", vol: "", ready: true },
      { href: "/text-case-converter/", icon: "🔡", t: "Text Case Converter", d: "UPPERCASE, lowercase, Title Case.", vol: "", ready: true },
      { href: "/date-difference-calculator/", icon: "📆", t: "Date Difference", d: "Days between two dates.", vol: "", ready: true },
    ],
  },
];

export const CAT_BY_KEY: Record<ToolCat, Category> = CATEGORIES.reduce(
  (acc, c) => ({ ...acc, [c.key]: c }),
  {} as Record<ToolCat, Category>,
);
