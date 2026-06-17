"use client";

import { useEffect, useState } from "react";

const inp = { padding: 10, border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, fontFamily: "ui-monospace, monospace" };

function fmt(d: Date) {
  if (isNaN(d.getTime())) return "—";
  return {
    local: d.toString(),
    utc: d.toUTCString(),
    iso: d.toISOString(),
  };
}

export default function Timestamp() {
  const [now, setNow] = useState(0);
  const [epoch, setEpoch] = useState("");
  const [dt, setDt] = useState("");

  useEffect(() => {
    const tick = () => setNow(Math.floor(Date.now() / 1000));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // epoch -> date (accepts seconds or milliseconds)
  let fromEpoch: ReturnType<typeof fmt> | "—" = "—";
  if (epoch.trim()) {
    const raw = Number(epoch.trim());
    if (!isNaN(raw)) fromEpoch = fmt(new Date(raw > 1e12 ? raw : raw * 1000));
  }
  // date -> epoch
  let toEpoch = "";
  if (dt) { const d = new Date(dt); if (!isNaN(d.getTime())) toEpoch = String(Math.floor(d.getTime() / 1000)); }

  return (
    <div className="card">
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 14, color: "var(--muted, #5b6473)" }}>Current Unix timestamp (seconds)</div>
        <div style={{ fontSize: 30, fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>{now || "…"}</div>
      </div>

      <h3 style={{ margin: "0 0 8px", fontSize: 16 }}>Timestamp → Date</h3>
      <input value={epoch} onChange={(e) => setEpoch(e.target.value)} placeholder="e.g. 1718600000" style={{ ...inp, width: "100%", maxWidth: 320 }} />
      {fromEpoch !== "—" && typeof fromEpoch === "object" && (
        <ul style={{ marginTop: 10, lineHeight: 1.8, fontSize: 14 }}>
          <li><b>Local:</b> {fromEpoch.local}</li>
          <li><b>UTC:</b> {fromEpoch.utc}</li>
          <li><b>ISO 8601:</b> {fromEpoch.iso}</li>
        </ul>
      )}

      <h3 style={{ margin: "20px 0 8px", fontSize: 16 }}>Date → Timestamp</h3>
      <input type="datetime-local" value={dt} onChange={(e) => setDt(e.target.value)} style={{ ...inp, maxWidth: 320 }} />
      {toEpoch && (
        <p style={{ marginTop: 10, fontSize: 14 }}>
          <b>Unix (seconds):</b> <span style={{ fontFamily: "ui-monospace, monospace" }}>{toEpoch}</span>{" · "}
          <b>Milliseconds:</b> <span style={{ fontFamily: "ui-monospace, monospace" }}>{toEpoch}000</span>
        </p>
      )}
    </div>
  );
}
