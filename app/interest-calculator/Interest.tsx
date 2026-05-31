"use client";

import { useMemo, useState } from "react";

const inr = (n: number) => n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export default function Interest() {
  const [type, setType] = useState<"simple" | "compound">("simple");
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(5);
  const [freq, setFreq] = useState(1); // compounding per year

  const { interest, total } = useMemo(() => {
    if (type === "simple") {
      const interest = (principal * rate * years) / 100;
      return { interest, total: principal + interest };
    }
    const n = freq;
    const total = principal * Math.pow(1 + rate / 100 / n, n * years);
    return { interest: total - principal, total };
  }, [type, principal, rate, years, freq]);

  return (
    <div className="card">
      <div className="preset-row">
        <button type="button" className="chip" onClick={() => setType("simple")} style={type === "simple" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Simple interest</button>
        <button type="button" className="chip" onClick={() => setType("compound")} style={type === "compound" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Compound interest</button>
      </div>

      <div className="row" style={{ marginTop: 6 }}>
        <div><label>Principal (₹)</label><input type="number" min={0} value={principal} onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value) || 0))} /></div>
        <div><label>Rate (% per year)</label><input type="number" min={0} step={0.1} value={rate} onChange={(e) => setRate(Math.max(0, Number(e.target.value) || 0))} /></div>
        <div><label>Time (years)</label><input type="number" min={0} step={0.5} value={years} onChange={(e) => setYears(Math.max(0, Number(e.target.value) || 0))} /></div>
      </div>

      {type === "compound" && (
        <>
          <label htmlFor="freq">Compounding frequency</label>
          <select id="freq" value={freq} onChange={(e) => setFreq(Number(e.target.value))}>
            <option value={1}>Yearly</option>
            <option value={2}>Half-yearly</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
          </select>
        </>
      )}

      <div className="result" style={{ marginTop: 18 }}>
        <p className="stat" style={{ fontSize: 20 }}>Interest: <b>₹{inr(interest)}</b></p>
        <p className="stat">Total amount (principal + interest): ₹{inr(total)}</p>
      </div>
    </div>
  );
}
