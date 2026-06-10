"use client";

import { useState } from "react";

const r2 = (n: number) => (Math.round(n * 100) / 100).toString();

export default function Marks() {
  // Marks → percentage
  const [obtained, setObtained] = useState(425);
  const [total, setTotal] = useState(500);
  // CGPA → percentage
  const [cgpa, setCgpa] = useState(8.2);
  const [factor, setFactor] = useState(9.5);
  // Percentage → CGPA
  const [pct, setPct] = useState(75);
  const [divFactor, setDivFactor] = useState(9.5);

  const marksPct = total === 0 ? 0 : (obtained / total) * 100;

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Marks to percentage</h3>
      <div className="row">
        <div><label>Marks obtained</label><input type="number" min={0} value={obtained} onChange={(e) => setObtained(Math.max(0, Number(e.target.value) || 0))} /></div>
        <div><label>Total marks</label><input type="number" min={1} value={total} onChange={(e) => setTotal(Math.max(1, Number(e.target.value) || 1))} /></div>
      </div>
      <p className="stat" style={{ marginTop: 8 }}>Percentage: <b>{r2(marksPct)}%</b></p>

      <h3 style={{ marginTop: 22 }}>CGPA to percentage</h3>
      <div className="row">
        <div><label>CGPA</label><input type="number" min={0} step={0.01} value={cgpa} onChange={(e) => setCgpa(Math.max(0, Number(e.target.value) || 0))} /></div>
        <div><label>Multiplying factor</label><input type="number" min={1} step={0.1} value={factor} onChange={(e) => setFactor(Math.max(1, Number(e.target.value) || 1))} /></div>
      </div>
      <p className="stat" style={{ marginTop: 8 }}>Percentage: <b>{r2(cgpa * factor)}%</b> <span className="muted-note">(CGPA × {factor}; CBSE uses 9.5)</span></p>

      <h3 style={{ marginTop: 22 }}>Percentage to CGPA</h3>
      <div className="row">
        <div><label>Percentage (%)</label><input type="number" min={0} value={pct} onChange={(e) => setPct(Math.max(0, Number(e.target.value) || 0))} /></div>
        <div><label>Dividing factor</label><input type="number" min={1} step={0.1} value={divFactor} onChange={(e) => setDivFactor(Math.max(1, Number(e.target.value) || 1))} /></div>
      </div>
      <p className="stat" style={{ marginTop: 8 }}>CGPA: <b>{r2(pct / divFactor)}</b></p>
    </div>
  );
}
