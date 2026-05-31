import Link from "next/link";

export default function CtaBand({
  heading,
  text,
  links,
}: {
  heading: string;
  text: string;
  links: [string, string][];
}) {
  return (
    <section className="cta-band">
      <h2>{heading}</h2>
      <p>{text}</p>
      <div className="cta-links">
        {links.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </div>
    </section>
  );
}
