import Link from "next/link";

// Bump when content is substantively reviewed/updated. An honest snapshot — not a daily auto-stamp.
export const UPDATED = "June 2026";

export default function Byline() {
  return (
    <p className="byline">
      By <Link href="/about/">Narender Chaudhary</Link>, Editorial &amp; Product Lead · Updated {UPDATED}
    </p>
  );
}
