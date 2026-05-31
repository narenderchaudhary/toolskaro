"use client";

import { useState } from "react";

type Item = { desc: string; qty: number; rate: number };
const field = { width: "100%", padding: "9px 11px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 14, fontFamily: "inherit" as const };

export default function Invoice() {
  const [cur, setCur] = useState("₹");
  const [from, setFrom] = useState("Your Business Name\nAddress line, City, State\nGSTIN / contact (optional)");
  const [to, setTo] = useState("Client Name\nClient address, City");
  const [invNo, setInvNo] = useState("INV-001");
  const [date, setDate] = useState("");
  const [due, setDue] = useState("");
  const [items, setItems] = useState<Item[]>([{ desc: "Service or product", qty: 1, rate: 1000 }]);
  const [tax, setTax] = useState(18);
  const [notes, setNotes] = useState("Thank you for your business.");

  const upd = (i: number, k: keyof Item, v: string) =>
    setItems(items.map((it, idx) => (idx === i ? { ...it, [k]: k === "desc" ? v : Number(v) || 0 } : it)));
  const subtotal = items.reduce((s, it) => s + it.qty * it.rate, 0);
  const taxAmt = (subtotal * tax) / 100;
  const total = subtotal + taxAmt;
  const money = (n: number) => cur + n.toLocaleString("en-IN", { maximumFractionDigits: 2 });

  const Row = ({ children }: { children: React.ReactNode }) => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>{children}</div>
  );

  return (
    <>
      <div className="card no-print">
        <div className="row">
          <div><label>Currency symbol</label><input style={field} value={cur} onChange={(e) => setCur(e.target.value)} /></div>
          <div><label>Invoice number</label><input style={field} value={invNo} onChange={(e) => setInvNo(e.target.value)} /></div>
        </div>
        <div className="row">
          <div><label>Invoice date</label><input style={field} value={date} onChange={(e) => setDate(e.target.value)} placeholder="1 June 2026" /></div>
          <div><label>Due date (optional)</label><input style={field} value={due} onChange={(e) => setDue(e.target.value)} /></div>
        </div>
        <label>From (your details)</label>
        <textarea style={{ ...field, resize: "vertical" }} rows={3} value={from} onChange={(e) => setFrom(e.target.value)} />
        <label>Bill to (client)</label>
        <textarea style={{ ...field, resize: "vertical" }} rows={2} value={to} onChange={(e) => setTo(e.target.value)} />

        <label>Items</label>
        {items.map((it, i) => (
          <div key={i} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 10, marginBottom: 8 }}>
            <input style={field} placeholder="Description" value={it.desc} onChange={(e) => upd(i, "desc", e.target.value)} />
            <div className="row" style={{ marginTop: 6 }}>
              <div><label style={{ margin: "0 0 4px" }}>Qty</label><input style={field} type="number" value={it.qty} onChange={(e) => upd(i, "qty", e.target.value)} /></div>
              <div><label style={{ margin: "0 0 4px" }}>Rate</label><input style={field} type="number" value={it.rate} onChange={(e) => upd(i, "rate", e.target.value)} /></div>
              <div style={{ display: "flex", alignItems: "flex-end" }}><button className="chip" type="button" onClick={() => setItems(items.filter((_, idx) => idx !== i))}>Remove</button></div>
            </div>
          </div>
        ))}
        <button className="chip" type="button" onClick={() => setItems([...items, { desc: "", qty: 1, rate: 0 }])}>+ Add item</button>

        <div className="row" style={{ marginTop: 12 }}>
          <div><label>Tax / GST (%)</label><input style={field} type="number" value={tax} onChange={(e) => setTax(Number(e.target.value) || 0)} /></div>
        </div>
        <label>Notes</label>
        <textarea style={{ ...field, resize: "vertical" }} rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} />

        <div style={{ marginTop: 16 }}>
          <button className="btn" onClick={() => window.print()}>⬇ Download / Print PDF</button>
          <span className="muted-note" style={{ marginLeft: 10 }}>Choose “Save as PDF” in the print dialog.</span>
        </div>
      </div>

      <div className="card">
        <div className="doc-preview">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
            <div style={{ whiteSpace: "pre-line", fontSize: 14 }}><strong style={{ fontSize: 18 }}>{from.split("\n")[0]}</strong>{"\n" + from.split("\n").slice(1).join("\n")}</div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--brand)" }}>INVOICE</div>
              <div style={{ fontSize: 13, color: "#555" }}>{invNo}</div>
              {date && <div style={{ fontSize: 13, color: "#555" }}>Date: {date}</div>}
              {due && <div style={{ fontSize: 13, color: "#555" }}>Due: {due}</div>}
            </div>
          </div>

          <div className="doc-section">
            <div style={{ fontSize: 12, textTransform: "uppercase", color: "#888", letterSpacing: ".05em" }}>Bill to</div>
            <div style={{ whiteSpace: "pre-line", fontSize: 14 }}>{to}</div>
          </div>

          <div style={{ marginTop: 16 }}>
            <Row><span style={{ flex: 1, fontSize: 12, textTransform: "uppercase", color: "#888" }}>Description</span><span style={{ width: 50, fontSize: 12, color: "#888", textAlign: "right" }}>Qty</span><span style={{ width: 90, fontSize: 12, color: "#888", textAlign: "right" }}>Rate</span><span style={{ width: 100, fontSize: 12, color: "#888", textAlign: "right" }}>Amount</span></Row>
            {items.map((it, i) => (
              <div key={i} style={{ borderTop: "1px solid #eee", padding: "7px 0" }}>
                <Row><span style={{ flex: 1, fontSize: 14 }}>{it.desc || "—"}</span><span style={{ width: 50, fontSize: 14, textAlign: "right" }}>{it.qty}</span><span style={{ width: 90, fontSize: 14, textAlign: "right" }}>{money(it.rate)}</span><span style={{ width: 100, fontSize: 14, textAlign: "right" }}>{money(it.qty * it.rate)}</span></Row>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end" }}>
            <div style={{ width: 260, fontSize: 14 }}>
              <Row><span style={{ flex: 1, color: "#555" }}>Subtotal</span><span>{money(subtotal)}</span></Row>
              <Row><span style={{ flex: 1, color: "#555" }}>Tax ({tax}%)</span><span>{money(taxAmt)}</span></Row>
              <div style={{ borderTop: "2px solid var(--border)", marginTop: 6, paddingTop: 6 }}>
                <Row><span style={{ flex: 1, fontWeight: 800 }}>Total</span><span style={{ fontWeight: 800, color: "var(--brand)" }}>{money(total)}</span></Row>
              </div>
            </div>
          </div>

          {notes && <div className="doc-section" style={{ marginTop: 16 }}><div style={{ fontSize: 12, textTransform: "uppercase", color: "#888" }}>Notes</div><p style={{ margin: "4px 0 0", fontSize: 14 }}>{notes}</p></div>}
        </div>
      </div>
    </>
  );
}
