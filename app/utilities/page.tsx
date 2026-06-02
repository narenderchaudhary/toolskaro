import type { Metadata } from "next";
import Link from "next/link";
import Hub from "@/app/components/Hub";

export const metadata: Metadata = {
  title: "Free Online Utility Tools — Typing Test, QR, Word Counter & More",
  description:
    "Handy free utilities: typing speed test (Hindi & English), QR code generator, word counter, password generator, text case converter and date difference calculator. No sign-up.",
  alternates: { canonical: "/utilities/" },
};

const faqs = [
  { q: "What utilities does ToolsKaro offer?", a: "A typing speed test (Hindi and English), a QR code generator, a word and character counter, a strong password generator, a text case converter and a date difference calculator — all free and in your browser." },
  { q: "Is the typing test useful for government exam practice?", a: "Yes. Many clerical and stenographer exams test typing speed, and the Typing Test measures your words-per-minute and accuracy in both Hindi and English so you can practise." },
  { q: "Does the password generator store my passwords?", a: "No. Passwords are generated locally in your browser and are never sent or saved anywhere, so they remain completely private to you." },
  { q: "Are these utility tools free?", a: "Yes, every utility is completely free to use with no sign-up, no watermark and no usage limits." },
];

export default function Page() {
  return (
    <Hub
      catKey="util"
      heading="Free Online Utility Tools"
      headingNode={<>Free <span className="grad">Utility Tools</span></>}
      lede="Everyday helpers in one place — typing test, QR code generator, word counter, password generator, text case converter and date difference. Free and private to your browser."
      faqs={faqs}
    >
      <h2 style={{ marginTop: 0 }}>Small tools that save you time every day</h2>
      <p>
        These are the quick utilities you reach for again and again. Practise for clerical and
        stenographer exams with the <Link href="/typing-test/">Typing Test</Link> (Hindi and English
        WPM), turn any link or text into a scannable code with the{" "}
        <Link href="/qr-code-generator/">QR Code Generator</Link>, and check the length of an essay or
        application with the <Link href="/word-counter/">Word Counter</Link>.
      </p>
      <p>
        Keep your accounts safe with the{" "}
        <Link href="/password-generator/">Password Generator</Link>, fix capitalisation instantly with
        the <Link href="/text-case-converter/">Text Case Converter</Link>, and count the days between
        two dates with the <Link href="/date-difference-calculator/">Date Difference Calculator</Link>.
        Every utility runs entirely in your browser, so whatever you type stays on your own device.
      </p>
    </Hub>
  );
}
