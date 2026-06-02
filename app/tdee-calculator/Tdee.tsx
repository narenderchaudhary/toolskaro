"use client";

import { useMemo, useState } from "react";

const field = { width: "100%" } as const;
const round = (n: number) => Math.round(n).toLocaleString("en-IN");

const ACTIVITY: { value: number; label: string }[] = [
  { value: 1.2, label: "Sedentary — little or no exercise" },
  { value: 1.375, label: "Lightly active — light exercise 1–3 days/week" },
  { value: 1.55, label: "Moderately active — exercise 3–5 days/week" },
  { value: 1.725, label: "Very active — hard exercise 6–7 days/week" },
  { value: 1.9, label: "Extra active — hard daily exercise or physical job" },
];

export default function Tdee() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170); // cm
  const [weight, setWeight] = useState(65); // kg
  const [activity, setActivity] = useState(1.55);

  const { bmr, tdee } = useMemo(() => {
    // Mifflin–St Jeor
    const base = 10 * weight + 6.25 * height - 5 * age;
    const bmr = gender === "male" ? base + 5 : base - 161;
    return { bmr: Math.max(0, bmr), tdee: Math.max(0, bmr * activity) };
  }, [gender, age, height, weight, activity]);

  return (
    <div className="card">
      <div className="row">
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" style={field} value={gender} onChange={(e) => setGender(e.target.value as "male" | "female")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" min={1} max={120} style={field} value={age} onChange={(e) => setAge(Math.max(1, Number(e.target.value) || 0))} />
        </div>
        <div>
          <label htmlFor="height">Height (cm)</label>
          <input id="height" type="number" min={50} max={260} style={field} value={height} onChange={(e) => setHeight(Math.max(0, Number(e.target.value) || 0))} />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <input id="weight" type="number" min={10} max={400} style={field} value={weight} onChange={(e) => setWeight(Math.max(0, Number(e.target.value) || 0))} />
        </div>
      </div>

      <div className="row" style={{ marginTop: 14 }}>
        <div style={{ flexBasis: "100%" }}>
          <label htmlFor="activity">Activity level</label>
          <select id="activity" style={field} value={activity} onChange={(e) => setActivity(Number(e.target.value))}>
            {ACTIVITY.map((a) => (
              <option key={a.value} value={a.value}>{a.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="result" style={{ marginTop: 18 }}>
        <p className="stat" style={{ fontSize: 20 }}>Your TDEE: <b>{round(tdee)} kcal/day</b></p>
        <p className="stat">BMR (calories at complete rest): {round(bmr)} kcal/day</p>
      </div>

      <h3 style={{ margin: "22px 0 10px", fontSize: 16 }}>Daily calories for your goal</h3>
      <div className="goal-grid">
        <div className="goal-card">
          <div className="goal-h">Lose weight</div>
          <div className="goal-kcal">{round(tdee - 500)} <span>kcal</span></div>
          <div className="goal-sub">≈ 0.45 kg / week (−500 kcal)</div>
        </div>
        <div className="goal-card goal-mid">
          <div className="goal-h">Maintain weight</div>
          <div className="goal-kcal">{round(tdee)} <span>kcal</span></div>
          <div className="goal-sub">Stay at your current weight</div>
        </div>
        <div className="goal-card">
          <div className="goal-h">Gain weight</div>
          <div className="goal-kcal">{round(tdee + 500)} <span>kcal</span></div>
          <div className="goal-sub">≈ 0.45 kg / week (+500 kcal)</div>
        </div>
      </div>
      <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 12 }}>
        Estimates use the Mifflin–St Jeor equation. These figures are a starting point for general
        fitness planning, not medical advice — consult a doctor or dietitian before making big
        changes to your diet.
      </p>
    </div>
  );
}
