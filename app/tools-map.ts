// Central registry of tool pages — used for auto-breadcrumbs and footer link clusters.
// href (with trailing slash) -> { name, cat }
export type ToolCat = "image" | "pdf" | "doc" | "calc" | "util";

export const TOOLS: Record<string, { name: string; cat: ToolCat }> = {
  // Image
  "/image-compressor/": { name: "Image Compressor", cat: "image" },
  "/image-resizer/": { name: "Image Resizer", cat: "image" },
  "/passport-photo-maker/": { name: "Passport Photo Maker", cat: "image" },
  "/signature-resize/": { name: "Signature Resize", cat: "image" },
  "/remove-background/": { name: "Remove Background", cat: "image" },
  "/crop-image/": { name: "Crop Image", cat: "image" },
  "/image-converter/": { name: "Image Converter", cat: "image" },
  "/photo-signature-combiner/": { name: "Photo & Signature Combiner", cat: "image" },
  "/photo-joiner/": { name: "Photo Joiner", cat: "image" },
  "/social-media-image-resizer/": { name: "Social Media Image Resizer", cat: "image" },
  // PDF
  "/pdf/jpg-to-pdf/": { name: "JPG to PDF", cat: "pdf" },
  "/pdf/pdf-to-jpg/": { name: "PDF to JPG", cat: "pdf" },
  "/pdf/merge/": { name: "Merge PDF", cat: "pdf" },
  "/pdf/compress/": { name: "Compress PDF", cat: "pdf" },
  "/pdf/split/": { name: "Split PDF", cat: "pdf" },
  "/pdf/rotate/": { name: "Rotate PDF", cat: "pdf" },
  "/pdf/delete-pages/": { name: "Delete PDF Pages", cat: "pdf" },
  "/pdf/page-numbers/": { name: "Add Page Numbers to PDF", cat: "pdf" },
  "/pdf/watermark/": { name: "Watermark PDF", cat: "pdf" },
  "/pdf/organize/": { name: "Organize PDF", cat: "pdf" },
  // Documents
  "/resume-maker/": { name: "Resume Maker", cat: "doc" },
  "/marriage-biodata-maker/": { name: "Marriage Biodata Maker", cat: "doc" },
  "/cover-letter-generator/": { name: "Cover Letter Generator", cat: "doc" },
  "/invoice-generator/": { name: "Invoice Generator", cat: "doc" },
  "/email-signature-maker/": { name: "Email Signature Maker", cat: "doc" },
  // Calculators
  "/emi-calculator/": { name: "EMI Calculator", cat: "calc" },
  "/sip-calculator/": { name: "SIP Calculator", cat: "calc" },
  "/gst-calculator/": { name: "GST Calculator", cat: "calc" },
  "/interest-calculator/": { name: "Interest Calculator", cat: "calc" },
  "/percentage-calculator/": { name: "Percentage Calculator", cat: "calc" },
  "/marks-percentage-calculator/": { name: "Marks % & CGPA Calculator", cat: "calc" },
  "/tdee-calculator/": { name: "TDEE Calculator", cat: "calc" },
  "/pregnancy-calculator/": { name: "Pregnancy Calculator", cat: "calc" },
  // Utilities
  "/age-calculator/": { name: "Age Calculator", cat: "util" },
  "/qr-code-generator/": { name: "QR Code Generator", cat: "util" },
  "/word-counter/": { name: "Word Counter", cat: "util" },
  "/typing-test/": { name: "Typing Test", cat: "util" },
  "/password-generator/": { name: "Password Generator", cat: "util" },
  "/text-case-converter/": { name: "Text Case Converter", cat: "util" },
  "/date-difference-calculator/": { name: "Date Difference Calculator", cat: "util" },
};
