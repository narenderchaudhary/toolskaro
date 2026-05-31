"use client";

import { useState } from "react";

type Lang = "en" | "hi";

const LABELS: Record<string, Record<Lang, string>> = {
  name: { en: "Name", hi: "नाम" },
  dob: { en: "Date of Birth", hi: "जन्म तिथि" },
  tob: { en: "Time of Birth", hi: "जन्म समय" },
  pob: { en: "Place of Birth", hi: "जन्म स्थान" },
  height: { en: "Height", hi: "ऊंचाई" },
  complexion: { en: "Complexion", hi: "रंग" },
  religion: { en: "Religion / Caste", hi: "धर्म / जाति" },
  gotra: { en: "Gotra", hi: "गोत्र" },
  education: { en: "Education", hi: "शिक्षा" },
  occupation: { en: "Occupation", hi: "व्यवसाय" },
  income: { en: "Annual Income", hi: "वार्षिक आय" },
  father: { en: "Father's Name", hi: "पिता का नाम" },
  mother: { en: "Mother's Name", hi: "माता का नाम" },
  siblings: { en: "Siblings", hi: "भाई / बहन" },
  contact: { en: "Contact", hi: "संपर्क" },
  address: { en: "Address", hi: "पता" },
};

const FIELDS = Object.keys(LABELS);
const field = { width: "100%", padding: "9px 11px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 14, fontFamily: "inherit" as const };

export default function BiodataMaker() {
  const [lang, setLang] = useState<Lang>("en");
  const [header, setHeader] = useState("॥ श्री गणेशाय नमः ॥");
  const [data, setData] = useState<Record<string, string>>({ name: "", dob: "", height: "", religion: "", education: "", occupation: "", father: "", mother: "", contact: "" });

  const set = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));
  const filled = FIELDS.filter((k) => data[k]?.trim());

  return (
    <>
      <div className="card no-print">
        <div className="preset-row" style={{ marginBottom: 14 }}>
          <button type="button" className="chip" onClick={() => setLang("en")} style={lang === "en" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>English labels</button>
          <button type="button" className="chip" onClick={() => setLang("hi")} style={lang === "hi" ? { borderColor: "var(--brand)", color: "var(--brand)" } : undefined}>हिंदी लेबल</button>
        </div>
        <label>Header line</label>
        <input style={field} value={header} onChange={(e) => setHeader(e.target.value)} placeholder="e.g. ॥ श्री गणेशाय नमः ॥" />
        {FIELDS.map((k) => (
          <div key={k}>
            <label>{LABELS[k][lang]}</label>
            <input style={field} value={data[k] || ""} onChange={(e) => set(k, e.target.value)} />
          </div>
        ))}
        <div style={{ marginTop: 16 }}>
          <button className="btn" onClick={() => window.print()}>⬇ Download / Print PDF</button>
          <span className="muted-note" style={{ marginLeft: 10 }}>Choose “Save as PDF” in the print dialog.</span>
        </div>
      </div>

      <div className="card">
        <div className="doc-preview">
          {header && <p style={{ textAlign: "center", color: "var(--brand)", fontWeight: 700, margin: "0 0 6px" }}>{header}</p>}
          <h2 style={{ textAlign: "center" }}>{data.name || (lang === "hi" ? "विवाह बायोडाटा" : "Marriage Biodata")}</h2>
          <div className="doc-section" style={{ marginTop: 10 }}>
            <table>
              <tbody>
                {(filled.length ? filled : ["name", "dob", "height", "education", "occupation", "father", "mother", "contact"]).map((k) => (
                  <tr key={k}>
                    <td>{LABELS[k][lang]}</td>
                    <td>{data[k] || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
