export type Feature = { icon: string; title: string; text: string };

export default function Features({
  heading,
  items,
}: {
  heading: React.ReactNode;
  items: Feature[];
}) {
  return (
    <section>
      <h2 className="section-center">{heading}</h2>
      <div className="feature-grid">
        {items.map((f) => (
          <div className="feature" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
