"use client";

import { useMemo, useState } from "react";

const inr = (n: number) => n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export default function Sip() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const { invested, value, returns } = useMemo(() => {
    const i = rate / 12 / 100;
    const n = years * 12;
    const value = i === 0 ? monthly * n : monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = monthly * n;
    return { invested, value, returns: value - invested };
  }, [monthly, rate, years]);

  return (
    <div className="card">
      <div className="row">
        <div>
          <label htmlFor="m">Monthly investment (₹)</label>
          <input id="m" type="number" min={0} value={monthly} onChange={(e) => setMonthly(Math.max(0, Number(e.target.value) || 0))} />
        </div>
        <div>
          <label htmlFor="r">Expected return (% per year)</label>
          <input id="r" type="number" min={0} step={0.1} value={rate} onChange={(e) => setRate(Math.max(0, Number(e.target.value) || 0))} />
        </div>
        <div>
          <label htmlFor="y">Time period (years)</label>
          <input id="y" type="number" min={1} value={years} onChange={(e) => setYears(Math.max(1, Number(e.target.value) || 1))} />
        </div>
      </div>

      <div className="result" style={{ marginTop: 18 }}>
        <p className="stat" style={{ fontSize: 20 }}>Future value: <b>₹{inr(value)}</b></p>
        <p className="stat">Total invested: ₹{inr(invested)}</p>
        <p className="stat">Estimated returns: ₹{inr(returns)}</p>
      </div>
    </div>
  );
}
