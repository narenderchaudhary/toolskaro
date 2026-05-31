export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="card faq">
      <h2 style={{ marginTop: 0 }}>Frequently asked questions</h2>
      {items.map((f) => (
        <details className="faq-item" key={f.q}>
          <summary>{f.q}</summary>
          <div className="faq-a">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
