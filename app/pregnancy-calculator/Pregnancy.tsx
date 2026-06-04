"use client";

import { useEffect, useMemo, useState } from "react";

const field = { width: "100%" } as const;
const DAY = 86400000;
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * DAY);
const fmt = (d: Date) =>
  d.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });

type Method = "lmp" | "conception" | "ivf5" | "ivf3";

const METHODS: { value: Method; label: string }[] = [
  { value: "lmp", label: "First day of last menstrual period (LMP)" },
  { value: "conception", label: "Conception / ovulation date" },
  { value: "ivf5", label: "IVF — Day 5 embryo transfer" },
  { value: "ivf3", label: "IVF — Day 3 embryo transfer" },
];

export default function Pregnancy() {
  const [method, setMethod] = useState<Method>("lmp");
  const [date, setDate] = useState("");
  const [cycle, setCycle] = useState(28);
  const [today, setToday] = useState<Date | null>(null);

  // Compute "today" only on the client to avoid SSR hydration mismatch.
  useEffect(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    setToday(t);
  }, []);

  const result = useMemo(() => {
    if (!date) return null;
    const base = new Date(`${date}T00:00:00`);
    if (isNaN(base.getTime())) return null;

    // Due date (estimated, 40 weeks of gestational age).
    let dueDate: Date;
    let lmp: Date; // gestational "start" used for age in weeks
    if (method === "lmp") {
      const adj = cycle - 28; // longer cycle → later ovulation → later due date
      dueDate = addDays(base, 280 + adj);
      lmp = base;
    } else if (method === "conception") {
      dueDate = addDays(base, 266);
      lmp = addDays(base, -14);
    } else if (method === "ivf5") {
      dueDate = addDays(base, 261);
      lmp = addDays(base, -19);
    } else {
      dueDate = addDays(base, 263);
      lmp = addDays(base, -17);
    }
    const conception = addDays(lmp, 14);
    return { dueDate, lmp, conception };
  }, [method, date, cycle]);

  const progress = useMemo(() => {
    if (!result || !today) return null;
    const ageDays = Math.floor((today.getTime() - result.lmp.getTime()) / DAY);
    if (ageDays < 0) return { notYet: true } as const;
    const weeks = Math.floor(ageDays / 7);
    const days = ageDays % 7;
    const remainingDays = Math.max(0, Math.ceil((result.dueDate.getTime() - today.getTime()) / DAY));
    const trimester = weeks < 13 ? "First trimester" : weeks < 27 ? "Second trimester" : "Third trimester";
    const pct = Math.min(100, Math.max(0, Math.round((ageDays / 280) * 100)));
    return { weeks, days, remainingDays, trimester, pct, notYet: false } as const;
  }, [result, today]);

  return (
    <div className="card">
      <div className="row">
        <div style={{ flexBasis: "100%" }}>
          <label htmlFor="method">Calculate based on</label>
          <select id="method" style={field} value={method} onChange={(e) => setMethod(e.target.value as Method)}>
            {METHODS.map((m) => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row" style={{ marginTop: 14 }}>
        <div>
          <label htmlFor="date">
            {method === "lmp" ? "First day of your last period" : method === "conception" ? "Conception date" : "Embryo transfer date"}
          </label>
          <input id="date" type="date" style={field} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        {method === "lmp" && (
          <div>
            <label htmlFor="cycle">Average cycle length (days)</label>
            <input id="cycle" type="number" min={20} max={45} style={field} value={cycle} onChange={(e) => setCycle(Math.min(45, Math.max(20, Number(e.target.value) || 28)))} />
          </div>
        )}
      </div>

      {result && (
        <div className="result" style={{ marginTop: 18 }}>
          <p className="stat" style={{ fontSize: 20 }}>Estimated due date: <b>{fmt(result.dueDate)}</b></p>
          {progress && !progress.notYet && (
            <>
              <p className="stat">You are <b>{progress.weeks} weeks {progress.days} days</b> pregnant — {progress.trimester}.</p>
              <p className="stat">About <b>{progress.remainingDays}</b> days to go ({progress.pct}% complete).</p>
            </>
          )}
          {progress?.notYet && <p className="stat">That date is in the future — enter your actual last period or conception date.</p>}
          <p className="stat">Estimated conception date: {fmt(result.conception)}</p>
        </div>
      )}

      {result && progress && !progress.notYet && (
        <>
          <div className="preg-bar" aria-hidden="true">
            <div className="preg-fill" style={{ width: `${progress.pct}%` }} />
          </div>
          <div className="preg-tri">
            <span className={progress.weeks < 13 ? "on" : ""}>1st</span>
            <span className={progress.weeks >= 13 && progress.weeks < 27 ? "on" : ""}>2nd</span>
            <span className={progress.weeks >= 27 ? "on" : ""}>3rd</span>
          </div>
        </>
      )}

      <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 14 }}>
        This is an <strong>estimate</strong>{" "}based on a standard 40-week pregnancy (Naegele&apos;s rule).
        Only about 5% of babies arrive on the exact due date. It is not medical advice — please confirm
        your dates and care with your doctor, midwife or an ultrasound scan.
      </p>
    </div>
  );
}
