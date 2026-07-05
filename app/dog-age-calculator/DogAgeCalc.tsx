"use client";

import { useState } from "react";

type Size = "small" | "medium" | "large" | "giant";

// Size-adjusted veterinary chart (AKC-style). Year 1 and year 2 are fixed
// milestones; growth after year 2 is a per-year rate that differs by breed size,
// because larger dogs age faster in later life.
const TABLE: Record<Size, { y1: number; y2: number; rate: number; label: string }> = {
  small: { y1: 15, y2: 24, rate: 4, label: "Small (up to 9 kg / 20 lb)" },
  medium: { y1: 15, y2: 24, rate: 4.5, label: "Medium (9–23 kg / 21–50 lb)" },
  large: { y1: 15, y2: 24, rate: 5.3, label: "Large (23–41 kg / 51–90 lb)" },
  giant: { y1: 12, y2: 22, rate: 7, label: "Giant (over 41 kg / 90 lb)" },
};

function humanAge(dogYears: number, size: Size): number {
  const t = TABLE[size];
  if (dogYears <= 0) return 0;
  if (dogYears <= 1) return dogYears * t.y1;
  if (dogYears <= 2) return t.y1 + (dogYears - 1) * (t.y2 - t.y1);
  return t.y2 + (dogYears - 2) * t.rate;
}

function stage(dogYears: number): string {
  if (dogYears < 1) return "Puppy 🐾";
  if (dogYears < 3) return "Young adult";
  if (dogYears < 7) return "Adult";
  if (dogYears < 10) return "Mature";
  return "Senior";
}

export default function DogAgeCalc() {
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("0");
  const [size, setSize] = useState<Size>("medium");

  const y = Math.max(0, Number(years) || 0) + Math.min(11, Math.max(0, Number(months) || 0)) / 12;
  const valid = years !== "" && y > 0 && y <= 30;
  const human = valid ? humanAge(y, size) : 0;
  // Classic "×7" method, shown for comparison / familiarity.
  const classic = valid ? Math.round(y * 7) : 0;

  const chip = (active: boolean) => `chip${active ? " active" : ""}`;

  return (
    <div className="card">
      <div className="row">
        <div>
          <label htmlFor="dog-years">Dog&apos;s age — years</label>
          <input id="dog-years" type="number" min={0} max={30} inputMode="numeric" placeholder="e.g. 3" value={years} onChange={(e) => setYears(e.target.value)} />
        </div>
        <div>
          <label htmlFor="dog-months">Extra months</label>
          <input id="dog-months" type="number" min={0} max={11} inputMode="numeric" value={months} onChange={(e) => setMonths(e.target.value)} />
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <label style={{ display: "block", marginBottom: 8 }}>Breed size</label>
        <div className="preset-row">
          {(Object.keys(TABLE) as Size[]).map((s) => (
            <button key={s} type="button" className={chip(size === s)} onClick={() => setSize(s)}>
              {s[0].toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "var(--muted, #6b7280)", marginTop: 8 }}>{TABLE[size].label}</p>
      </div>

      {years !== "" && !valid && (
        <p style={{ color: "#c0392b", marginTop: 14 }}>Please enter a dog age between 1 month and 30 years.</p>
      )}

      {valid && (
        <div className="result">
          <p className="stat" style={{ fontSize: 20 }}>
            Your dog is about <b>{Math.round(human)}</b> in human years.
          </p>
          <p className="stat">Life stage: <b>{stage(y)}</b></p>
          <p className="stat" style={{ fontSize: 13, color: "var(--muted, #6b7280)" }}>
            (The old “multiply by 7” rule would give {classic} — less accurate, especially for the first two years.)
          </p>
        </div>
      )}
    </div>
  );
}
