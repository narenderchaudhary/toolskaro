"use client";

import { useMemo, useState } from "react";

const inr = (n: number) => n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
const field = { width: "100%" } as const;

export default function Emi() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(20);

  const { emi, total, interest } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    return { emi, total, interest: total - amount };
  }, [amount, rate, years]);

  return (
    <div className="card">
      <div className="row">
        <div>
          <label htmlFor="amt">Loan amount (₹)</label>
          <input id="amt" type="number" min={0} style={field} value={amount} onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))} />
        </div>
        <div>
          <label htmlFor="rate">Interest rate (% per year)</label>
          <input id="rate" type="number" min={0} step={0.1} style={field} value={rate} onChange={(e) => setRate(Math.max(0, Number(e.target.value) || 0))} />
        </div>
        <div>
          <label htmlFor="yrs">Tenure (years)</label>
          <input id="yrs" type="number" min={1} style={field} value={years} onChange={(e) => setYears(Math.max(1, Number(e.target.value) || 1))} />
        </div>
      </div>

      <div className="result" style={{ marginTop: 18 }}>
        <p className="stat" style={{ fontSize: 20 }}>Monthly EMI: <b>₹{inr(emi)}</b></p>
        <p className="stat">Total interest payable: ₹{inr(interest)}</p>
        <p className="stat">Total payment (principal + interest): ₹{inr(total)}</p>
      </div>
    </div>
  );
}
