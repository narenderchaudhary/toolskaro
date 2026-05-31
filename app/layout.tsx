import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ToolsKaro — Free Photo, Signature & PDF Tools for Indian Govt Forms",
    template: "%s | ToolsKaro",
  },
  description:
    "Free online tools for Indian exam & job applicants: resize and compress photo/signature to exact KB, JPG to PDF, merge & compress PDF, and more. 100% in your browser — files never uploaded.",
  metadataBase: new URL("https://toolskaro.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site">
          <div className="container">
            <Link href="/" className="logo">
              Tools<span>Karo</span>
            </Link>
            <nav className="nav">
              <Link href="/image-compressor/">Compress</Link>
              <Link href="/image-resizer/">Resize</Link>
              <Link href="/age-calculator/">Age</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site">
          <div className="container">
            All tools run entirely in your browser — your files are never uploaded to any
            server. © ToolsKaro.
          </div>
        </footer>
      </body>
    </html>
  );
}
