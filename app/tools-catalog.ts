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
      { href: "/image-compressor/", icon: "🗜️", t: "Image Compressor", d: "Compress JPG/PNG to an exact KB size.", vol: "1M+/mo", ready: true },
      { href: "/image-resizer/", icon: "📐", t: "Image Resizer", d: "Resize photo by pixels or exam preset.", vol: "1.5M/mo", ready: true },
      { href: "/passport-photo-maker/", icon: "🪪", t: "Passport Photo Maker", d: "White-background passport / exam photo.", vol: "550K/mo", ready: true },
      { href: "/signature-resize/", icon: "✍️", t: "Signature Resize", d: "Resize signature to the KB & size you need.", vol: "74K/mo", ready: true },
      { href: "/remove-background/", icon: "🪄", t: "Remove Background", d: "Erase photo background in your browser.", vol: "6M/mo", ready: true },
      { href: "/crop-image/", icon: "✂️", t: "Crop Image", d: "Drag to crop, or use ratio presets.", vol: "", ready: true },
      { href: "/image-converter/", icon: "🔁", t: "Image Converter", d: "PNG ↔ JPG ↔ WebP with quality.", vol: "", ready: true },
      { href: "/photo-signature-combiner/", icon: "🧩", t: "Photo + Signature", d: "Combine photo & signature in one image.", vol: "", ready: true },
      { href: "/photo-joiner/", icon: "🖼️", t: "Photo Joiner", d: "Combine photos side by side, stacked or grid.", vol: "", ready: true },
      { href: "/image-joiner/", icon: "🧷", t: "Image Joiner", d: "Join images horizontally or vertically into one.", vol: "", ready: true },
      { href: "/social-media-image-resizer/", icon: "📱", t: "Social Media Resizer", d: "Exact sizes for Instagram, FB, WhatsApp, LinkedIn.", vol: "", ready: true },
      { href: "/jpeg-to-jpg/", icon: "🔄", t: "JPEG to JPG", d: "Convert JPEG / PNG / WebP to JPG.", vol: "", ready: true },
      { href: "/png-to-jpg/", icon: "🖼️", t: "PNG to JPG", d: "Convert PNG to a smaller JPG.", vol: "", ready: true },
      { href: "/resize-image-in-kb/", icon: "⚖️", t: "Resize Image in KB", d: "Reduce a photo to an exact KB size.", vol: "", ready: true },
      { href: "/increase-image-size-in-kb/", icon: "➕", t: "Increase Image Size in KB", d: "Make a photo meet a minimum KB.", vol: "", ready: true },
      { href: "/resize-image-in-cm/", icon: "📏", t: "Resize Image in CM", d: "Resize a photo to exact centimetres.", vol: "", ready: true },
      { href: "/change-image-dpi/", icon: "🎯", t: "Change Image DPI", d: "Set a photo to 300 DPI or any DPI.", vol: "", ready: true },
      { href: "/resize-image-for-whatsapp-dp/", icon: "💬", t: "WhatsApp DP Resizer", d: "Square crop & resize for your WhatsApp DP.", vol: "", ready: true },
      { href: "/resize-for-pan-card/", icon: "🪪", t: "PAN Card Photo", d: "Photo & signature size for a PAN card.", vol: "", ready: true },
      { href: "/heic-to-jpg/", icon: "📱", t: "HEIC to JPG", d: "Convert iPhone HEIC photos to JPG.", vol: "", ready: true },
      { href: "/webp-to-jpg/", icon: "🔄", t: "WebP to JPG", d: "Convert WebP images to JPG.", vol: "", ready: true },
      { href: "/text-to-image/", icon: "🔤", t: "Text to Image", d: "Turn text into a JPG or PNG image.", vol: "33K/mo", ready: true },
      { href: "/jfif-to-jpg/", icon: "🔄", t: "JFIF to JPG", d: "Convert .jfif images to standard JPG.", vol: "", ready: true },
      { href: "/jfif-to-png/", icon: "🖼️", t: "JFIF to PNG", d: "Convert .jfif images to lossless PNG.", vol: "", ready: true },
      { href: "/bmp-to-jpg/", icon: "🗜️", t: "BMP to JPG", d: "Shrink large .bmp bitmaps into JPG.", vol: "", ready: true },
      { href: "/avif-to-jpg/", icon: "🔄", t: "AVIF to JPG", d: "Convert modern .avif images to JPG.", vol: "", ready: true },
      { href: "/rotate-image/", icon: "🔄", t: "Rotate Image", d: "Rotate to any angle, flip & straighten.", vol: "", ready: true },
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
      { href: "/resize-pdf/", icon: "📐", t: "Resize PDF", d: "Fit pages to A4, Letter, Legal & more.", vol: "", ready: true },
      { href: "/heic-to-pdf/", icon: "📱", t: "HEIC to PDF", d: "Convert iPhone HEIC photos to one PDF.", vol: "", ready: true },
      { href: "/webp-to-pdf/", icon: "🖼️", t: "WebP to PDF", d: "Convert WebP images into one PDF.", vol: "", ready: true },
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
      { href: "/email-signature-maker/", icon: "✉️", t: "Email Signature Maker", d: "Pro email signature for Gmail & Outlook.", vol: "", ready: true },
      { href: "/ppt-to-word/", icon: "📊", t: "PPT to Word", d: "Extract PowerPoint slide text into an editable Word doc.", vol: "50K/mo", ready: true },
      { href: "/txt-to-word/", icon: "📝", t: "Text to Word", d: "Convert a .txt file or text into a Word .docx.", vol: "8K/mo", ready: true },
      { href: "/epub-to-word/", icon: "📖", t: "EPUB to Word", d: "Extract an ebook's text into an editable Word doc.", vol: "", ready: true },
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
      { href: "/dog-age-calculator/", icon: "🐕", t: "Dog Age Calculator", d: "Dog years to human years, by breed size.", vol: "60K/mo", ready: true },
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
      { href: "/unit-converter/", icon: "📏", t: "Unit Converter", d: "Meters to feet, kg, °C, area, volume, speed.", vol: "1M+/mo", ready: true },
    ],
  },
  {
    key: "dev",
    name: "Developer Tools",
    hubHref: "/developer-tools/",
    color: "#7c3aed",
    tint: "#ede9fe",
    tools: [
      { href: "/json-formatter/", icon: "{ }", t: "JSON Formatter", d: "Beautify, minify & validate JSON.", vol: "1M+/mo", ready: true },
      { href: "/base64-encode-decode/", icon: "🔤", t: "Base64 Encode/Decode", d: "Text ↔ Base64, Unicode-safe.", vol: "550K/mo", ready: true },
      { href: "/url-encode-decode/", icon: "🔗", t: "URL Encode/Decode", d: "Escape & unescape URLs and params.", vol: "246K/mo", ready: true },
      { href: "/hash-generator/", icon: "#️⃣", t: "Hash Generator", d: "SHA-1, SHA-256, SHA-384, SHA-512.", vol: "165K/mo", ready: true },
      { href: "/lorem-ipsum-generator/", icon: "✒️", t: "Lorem Ipsum Generator", d: "Placeholder text by para/sentence/word.", vol: "450K/mo", ready: true },
      { href: "/uuid-generator/", icon: "🆔", t: "UUID Generator", d: "Random UUID v4, single or bulk.", vol: "201K/mo", ready: true },
      { href: "/timestamp-converter/", icon: "🕒", t: "Timestamp Converter", d: "Unix epoch ↔ date, live clock.", vol: "165K/mo", ready: true },
      { href: "/color-converter/", icon: "🎨", t: "Color Converter", d: "HEX ↔ RGB ↔ HSL with picker.", vol: "110K/mo", ready: true },
      { href: "/csv-to-json/", icon: "🔧", t: "CSV to JSON", d: "Convert CSV to clean JSON in the browser.", vol: "40K/mo", ready: true },
      { href: "/csv-to-pdf/", icon: "🧾", t: "CSV to PDF", d: "Turn CSV data into a printable PDF table.", vol: "", ready: true },
      { href: "/text-to-html/", icon: "📄", t: "Text to HTML", d: "Convert plain text into escaped HTML.", vol: "", ready: true },
      { href: "/text-to-xml/", icon: "📄", t: "Text to XML", d: "Convert plain text into valid XML.", vol: "", ready: true },
      { href: "/text-to-json/", icon: "{ }", t: "Text to JSON", d: "Convert plain text into a JSON object.", vol: "", ready: true },
    ],
  },
];

export const CAT_BY_KEY: Record<ToolCat, Category> = CATEGORIES.reduce(
  (acc, c) => ({ ...acc, [c.key]: c }),
  {} as Record<ToolCat, Category>,
);
