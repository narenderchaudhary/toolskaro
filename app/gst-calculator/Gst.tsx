"use client";

import { useMemo, useState } from "react";

const inr = (n: number) => n.toLocaleString("en-IN", { maximumFractionDigits: 2 });
const RATES = [3, 5, 12, 18, 28];

export default function Gst() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(18);
  const [mode, setMode] = useState<"add" | "remove">("add");

  const { gst, net, gross } = useMemo(() => {
    if (mode === "add") {
      const gst = (amount * rate) / 100;
      return { gst, net: amount, gross: amount + gst };
    }
    const net = amount / (1 + rate / 100);
    return { gst: amount - net, net, gross: amount };
  }, [amount, rate, mode]);

  return (
    <div className="card">
      <label>Calculation</label>
      <div className="preset-row">
        <button type="button" className="chip" onClick={() => setMode("add")} style={mode === "add" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Add GST</button>
        <button type="button" className="chip" onClick={() => setMode("remove")} style={mode === "remove" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>Remove GST</button>
      </div>

      <div className="row" style={{ marginTop: 6 }}>
        <div>
          <label htmlFor="amt">{mode === "add" ? "Amount (excl. GST) ₹" : "Amount (incl. GST) ₹"}</label>
          <input id="amt" type="number" min={0} value={amount} onChange={(e) => setAmount(Math.max(0, Number(e.target.value) || 0))} />
        </div>
        <div>
          <label htmlFor="rate">GST rate (%)</label>
          <input id="rate" type="number" min={0} step={0.5} value={rate} onChange={(e) => setRate(Math.max(0, Number(e.target.value) || 0))} />
        </div>
      </div>
      <div className="preset-row" style={{ marginTop: 8 }}>
        {RATES.map((r) => (
          <button key={r} type="button" className="chip" onClick={() => setRate(r)}>{r}%</button>
        ))}
      </div>

      <div className="result" style={{ marginTop: 18 }}>
        <p className="stat" style={{ fontSize: 20 }}>GST amount: <b>₹{inr(gst)}</b></p>
        <p className="stat">CGST ({(rate / 2).toFixed(1)}%): ₹{inr(gst / 2)} · SGST ({(rate / 2).toFixed(1)}%): ₹{inr(gst / 2)}</p>
        <p className="stat">Net (excl. GST): ₹{inr(net)} · Gross (incl. GST): ₹{inr(gross)}</p>
      </div>
    </div>
  );
}
