"use client";

import { useState } from "react";

type Age = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalMonths: number;
  totalWeeks: number;
  nextBirthdayInDays: number;
};

function computeAge(dobStr: string, onStr: string): Age | null {
  const dob = new Date(dobStr);
  const on = new Date(onStr);
  if (isNaN(dob.getTime()) || isNaN(on.getTime()) || dob > on) return null;

  let years = on.getFullYear() - dob.getFullYear();
  let months = on.getMonth() - dob.getMonth();
  let days = on.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    // days in the month before "on"
    const prevMonth = new Date(on.getFullYear(), on.getMonth(), 0).getDate();
    days += prevMonth;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msPerDay = 86400000;
  const totalDays = Math.floor((on.getTime() - dob.getTime()) / msPerDay);

  // Next birthday
  let nextBday = new Date(on.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBday < on) nextBday = new Date(on.getFullYear() + 1, dob.getMonth(), dob.getDate());
  const nextBirthdayInDays = Math.ceil((nextBday.getTime() - on.getTime()) / msPerDay);

  return {
    years,
    months,
    days,
    totalDays,
    totalMonths: years * 12 + months,
    totalWeeks: Math.floor(totalDays / 7),
    nextBirthdayInDays,
  };
}

function todayISO() {
  // Build from local date parts to avoid TZ shift.
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export default function AgeCalc() {
  const [dob, setDob] = useState("");
  const [on, setOn] = useState(todayISO());
  const age = dob ? computeAge(dob, on) : null;

  return (
    <div className="card">
      <div className="row">
        <div>
          <label htmlFor="dob">Date of birth</label>
          <input id="dob" type="date" value={dob} max={on} onChange={(e) => setDob(e.target.value)} />
        </div>
        <div>
          <label htmlFor="on">Age as on</label>
          <input id="on" type="date" value={on} onChange={(e) => setOn(e.target.value)} />
        </div>
      </div>

      {dob && !age && (
        <p style={{ color: "#c0392b", marginTop: 14 }}>
          Please enter a valid date of birth on or before the “age as on” date.
        </p>
      )}

      {age && (
        <div className="result">
          <p className="stat" style={{ fontSize: 18 }}>
            You are <b>{age.years}</b> years, <b>{age.months}</b> months and <b>{age.days}</b> days
            old.
          </p>
          <p className="stat">
            That is {age.totalMonths.toLocaleString("en-IN")} months ·{" "}
            {age.totalWeeks.toLocaleString("en-IN")} weeks ·{" "}
            {age.totalDays.toLocaleString("en-IN")} days.
          </p>
          <p className="stat">
            🎂 Next birthday in <b>{age.nextBirthdayInDays}</b> days.
          </p>
        </div>
      )}
    </div>
  );
}
