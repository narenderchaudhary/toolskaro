"use client";

import { useState } from "react";

const r2 = (n: number) => (Math.round(n * 100) / 100).toLocaleString("en-US", { maximumFractionDigits: 2 });

export default function Percent() {
  // Mode 1: X% of Y
  const [pct, setPct] = useState(15);
  const [of, setOf] = useState(2500);
  // Mode 2: X is what % of Y
  const [a, setA] = useState(45);
  const [b, setB] = useState(60);
  // Mode 3: % change from X to Y
  const [from, setFrom] = useState(800);
  const [to, setTo] = useState(1000);

  const change = from === 0 ? 0 : ((to - from) / from) * 100;

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>What is X% of Y?</h3>
      <div className="row">
        <div><label>Percentage (%)</label><input type="number" value={pct} onChange={(e) => setPct(Number(e.target.value) || 0)} /></div>
        <div><label>of</label><input type="number" value={of} onChange={(e) => setOf(Number(e.target.value) || 0)} /></div>
      </div>
      <p className="stat" style={{ marginTop: 8 }}><b>{r2((pct * of) / 100)}</b> &nbsp;(= {pct}% of {of})</p>

      <h3 style={{ marginTop: 22 }}>X is what percent of Y?</h3>
      <div className="row">
        <div><label>Value</label><input type="number" value={a} onChange={(e) => setA(Number(e.target.value) || 0)} /></div>
        <div><label>of</label><input type="number" value={b} onChange={(e) => setB(Number(e.target.value) || 0)} /></div>
      </div>
      <p className="stat" style={{ marginTop: 8 }}><b>{b === 0 ? "—" : r2((a / b) * 100) + "%"}</b> &nbsp;({a} is that % of {b})</p>

      <h3 style={{ marginTop: 22 }}>Percentage increase / decrease</h3>
      <div className="row">
        <div><label>From</label><input type="number" value={from} onChange={(e) => setFrom(Number(e.target.value) || 0)} /></div>
        <div><label>To</label><input type="number" value={to} onChange={(e) => setTo(Number(e.target.value) || 0)} /></div>
      </div>
      <p className="stat" style={{ marginTop: 8 }}>
        <b style={{ color: change >= 0 ? "var(--accent)" : "#dc2626" }}>{change >= 0 ? "+" : ""}{r2(change)}%</b> &nbsp;({change >= 0 ? "increase" : "decrease"})
      </p>
    </div>
  );
}
