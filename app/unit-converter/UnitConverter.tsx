"use client";

import { useState } from "react";

type Unit = { id: string; name: string; factor: number };
type Cat = { key: string; name: string; units: Unit[] };

// Each unit's `factor` is how many base units it equals (base = first unit's unit).
const CATS: Cat[] = [
  {
    key: "length", name: "Length",
    units: [
      { id: "m", name: "Meter (m)", factor: 1 },
      { id: "ft", name: "Foot (ft)", factor: 0.3048 },
      { id: "cm", name: "Centimeter (cm)", factor: 0.01 },
      { id: "mm", name: "Millimeter (mm)", factor: 0.001 },
      { id: "km", name: "Kilometer (km)", factor: 1000 },
      { id: "in", name: "Inch (in)", factor: 0.0254 },
      { id: "yd", name: "Yard (yd)", factor: 0.9144 },
      { id: "mi", name: "Mile (mi)", factor: 1609.344 },
      { id: "nmi", name: "Nautical mile (nmi)", factor: 1852 },
    ],
  },
  {
    key: "weight", name: "Weight",
    units: [
      { id: "kg", name: "Kilogram (kg)", factor: 1000 },
      { id: "g", name: "Gram (g)", factor: 1 },
      { id: "mg", name: "Milligram (mg)", factor: 0.001 },
      { id: "t", name: "Metric ton (t)", factor: 1_000_000 },
      { id: "lb", name: "Pound (lb)", factor: 453.59237 },
      { id: "oz", name: "Ounce (oz)", factor: 28.349523125 },
      { id: "st", name: "Stone (st)", factor: 6350.29318 },
    ],
  },
  {
    key: "temperature", name: "Temperature",
    units: [
      { id: "c", name: "Celsius (°C)", factor: 1 },
      { id: "f", name: "Fahrenheit (°F)", factor: 1 },
      { id: "k", name: "Kelvin (K)", factor: 1 },
    ],
  },
  {
    key: "area", name: "Area",
    units: [
      { id: "m2", name: "Square meter (m²)", factor: 1 },
      { id: "ft2", name: "Square foot (ft²)", factor: 0.09290304 },
      { id: "cm2", name: "Square centimeter (cm²)", factor: 0.0001 },
      { id: "km2", name: "Square kilometer (km²)", factor: 1_000_000 },
      { id: "ha", name: "Hectare (ha)", factor: 10000 },
      { id: "acre", name: "Acre", factor: 4046.8564224 },
      { id: "mi2", name: "Square mile (mi²)", factor: 2_589_988.110336 },
      { id: "yd2", name: "Square yard (yd²)", factor: 0.83612736 },
      { id: "in2", name: "Square inch (in²)", factor: 0.00064516 },
    ],
  },
  {
    key: "volume", name: "Volume",
    units: [
      { id: "l", name: "Liter (L)", factor: 1 },
      { id: "ml", name: "Milliliter (mL)", factor: 0.001 },
      { id: "m3", name: "Cubic meter (m³)", factor: 1000 },
      { id: "galus", name: "Gallon — US", factor: 3.785411784 },
      { id: "galuk", name: "Gallon — UK", factor: 4.54609 },
      { id: "qt", name: "Quart — US", factor: 0.946352946 },
      { id: "pt", name: "Pint — US", factor: 0.473176473 },
      { id: "cup", name: "Cup — US", factor: 0.2365882365 },
      { id: "flozus", name: "Fluid ounce — US", factor: 0.0295735295625 },
      { id: "ft3", name: "Cubic foot (ft³)", factor: 28.316846592 },
    ],
  },
  {
    key: "speed", name: "Speed",
    units: [
      { id: "kmh", name: "Kilometer/hour (km/h)", factor: 0.277777778 },
      { id: "mph", name: "Mile/hour (mph)", factor: 0.44704 },
      { id: "ms", name: "Meter/second (m/s)", factor: 1 },
      { id: "fts", name: "Foot/second (ft/s)", factor: 0.3048 },
      { id: "knot", name: "Knot", factor: 0.514444444 },
    ],
  },
];

function toCelsius(v: number, id: string): number {
  if (id === "f") return (v - 32) * (5 / 9);
  if (id === "k") return v - 273.15;
  return v;
}
function fromCelsius(c: number, id: string): number {
  if (id === "f") return c * (9 / 5) + 32;
  if (id === "k") return c + 273.15;
  return c;
}

function fmt(n: number): string {
  if (!isFinite(n)) return "";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  if (abs !== 0 && (abs < 1e-6 || abs >= 1e15)) return n.toExponential(6).replace(/\.?0+e/, "e");
  const r = Number(n.toPrecision(8));
  return r.toLocaleString("en-US", { maximumFractionDigits: 8 });
}

const selStyle = { width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 15, background: "var(--bg, #fff)", color: "var(--ink)" };

export default function UnitConverter() {
  const [catKey, setCatKey] = useState("length");
  const cat = CATS.find((c) => c.key === catKey)!;
  const [from, setFrom] = useState(cat.units[0].id);
  const [to, setTo] = useState(cat.units[1].id);
  const [value, setValue] = useState("1");

  function pickCat(key: string) {
    const c = CATS.find((x) => x.key === key)!;
    setCatKey(key);
    setFrom(c.units[0].id);
    setTo(c.units[1].id);
  }

  const num = parseFloat(value);
  const valid = value.trim() !== "" && !isNaN(num);
  const fromU = cat.units.find((u) => u.id === from)!;
  const toU = cat.units.find((u) => u.id === to)!;

  let result = "";
  if (valid) {
    result = catKey === "temperature"
      ? fmt(fromCelsius(toCelsius(num, from), to))
      : fmt((num * fromU.factor) / toU.factor);
  }

  function swap() { setFrom(to); setTo(from); }

  const chip = (active: boolean) => `chip${active ? " active" : ""}`;

  return (
    <div className="card">
      <div className="preset-row" style={{ marginBottom: 18 }}>
        {CATS.map((c) => (
          <button key={c.key} type="button" className={chip(catKey === c.key)} onClick={() => pickCat(c.key)}>{c.name}</button>
        ))}
      </div>

      <div className="row">
        <div>
          <label htmlFor="uc-value">Value</label>
          <input id="uc-value" type="number" inputMode="decimal" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a number" />
        </div>
        <div>
          <label htmlFor="uc-from">From</label>
          <select id="uc-from" value={from} onChange={(e) => setFrom(e.target.value)} style={selStyle}>
            {cat.units.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <button type="button" className="btn secondary" onClick={swap} aria-label="Swap units" style={{ padding: "6px 16px" }}>⇅ Swap</button>
      </div>

      <div className="row">
        <div>
          <label htmlFor="uc-result">Result</label>
          <input id="uc-result" type="text" readOnly value={result} placeholder="—" style={{ background: "var(--bg-soft, #faf9fc)", fontWeight: 600 }} />
        </div>
        <div>
          <label htmlFor="uc-to">To</label>
          <select id="uc-to" value={to} onChange={(e) => setTo(e.target.value)} style={selStyle}>
            {cat.units.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
        </div>
      </div>

      {valid && result && (
        <div className="result" style={{ marginTop: 16 }}>
          <p className="stat" style={{ fontSize: 18 }}>
            <b>{fmt(num)}</b> {fromU.name.replace(/\s*\(.*\)/, "")} = <b>{result}</b> {toU.name.replace(/\s*\(.*\)/, "")}
          </p>
        </div>
      )}
    </div>
  );
}
