"use client";

import { useState } from "react";

function diff(fromStr: string, toStr: string) {
  const from = new Date(fromStr), to = new Date(toStr);
  if (isNaN(from.getTime()) || isNaN(to.getTime())) return null;
  const sign = to >= from ? 1 : -1;
  const a = sign > 0 ? from : to, b = sign > 0 ? to : from;
  let years = b.getFullYear() - a.getFullYear();
  let months = b.getMonth() - a.getMonth();
  let days = b.getDate() - a.getDate();
  if (days < 0) { months -= 1; days += new Date(b.getFullYear(), b.getMonth(), 0).getDate(); }
  if (months < 0) { years -= 1; months += 12; }
  const totalDays = Math.round(Math.abs(b.getTime() - a.getTime()) / 86400000);
  return { years, months, days, totalDays, totalWeeks: Math.floor(totalDays / 7), totalMonths: years * 12 + months, sign };
}

export default function DateDiff() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const d = from && to ? diff(from, to) : null;

  return (
    <div className="card">
      <div className="row">
        <div><label htmlFor="f">From date</label><input id="f" type="date" value={from} onChange={(e) => setFrom(e.target.value)} /></div>
        <div><label htmlFor="t">To date</label><input id="t" type="date" value={to} onChange={(e) => setTo(e.target.value)} /></div>
      </div>

      {d && (
        <div className="result" style={{ marginTop: 16 }}>
          <p className="stat" style={{ fontSize: 18 }}>
            <b>{d.years}</b> years, <b>{d.months}</b> months, <b>{d.days}</b> days
          </p>
          <p className="stat">
            {d.totalMonths.toLocaleString("en-IN")} months · {d.totalWeeks.toLocaleString("en-IN")} weeks · {d.totalDays.toLocaleString("en-IN")} days
          </p>
        </div>
      )}
    </div>
  );
}
