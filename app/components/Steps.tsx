export type Step = { icon: string; title: string; text: string };

export default function Steps({
  heading,
  steps,
  tint = "#eef2ff",
  color = "#4f46e5",
}: {
  heading: React.ReactNode;
  steps: Step[];
  tint?: string;
  color?: string;
}) {
  return (
    <section>
      <h2 className="section-center">{heading}</h2>
      <div className="steps-rail">
        {steps.map((s, i) => (
          <div className="step-row" key={s.title}>
            <div className="step-num">{i + 1}</div>
            <div className="step-body">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
            <div className="step-icon" style={{ background: tint, color }}>{s.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
