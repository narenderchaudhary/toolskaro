"use client";

import { useState } from "react";

type Entry = { title: string; sub: string; detail: string };

const field = { width: "100%", padding: "9px 11px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 14, fontFamily: "inherit" as const };

export default function ResumeMaker() {
  const [name, setName] = useState("Your Name");
  const [role, setRole] = useState("Job Title");
  const [contact, setContact] = useState("email@example.com · +91 90000 00000 · City, India");
  const [summary, setSummary] = useState("A short professional summary highlighting your strengths and goals.");
  const [skills, setSkills] = useState("MS Office, Communication, Tally, Data Entry");
  const [exp, setExp] = useState<Entry[]>([{ title: "Job Title", sub: "Company · 2022–Present", detail: "Key responsibility or achievement." }]);
  const [edu, setEdu] = useState<Entry[]>([{ title: "B.A. / B.Com / B.Tech", sub: "University · 2019–2022", detail: "Grade / percentage" }]);

  const upd = (set: typeof setExp, list: Entry[], i: number, k: keyof Entry, v: string) =>
    set(list.map((e, idx) => (idx === i ? { ...e, [k]: v } : e)));
  const add = (set: typeof setExp, list: Entry[]) => set([...list, { title: "", sub: "", detail: "" }]);
  const del = (set: typeof setExp, list: Entry[], i: number) => set(list.filter((_, idx) => idx !== i));

  const EntryEditor = ({ label, list, set }: { label: string; list: Entry[]; set: typeof setExp }) => (
    <div style={{ marginTop: 14 }}>
      <label>{label}</label>
      {list.map((e, i) => (
        <div key={i} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 10, marginBottom: 8 }}>
          <input style={field} placeholder="Title" value={e.title} onChange={(ev) => upd(set, list, i, "title", ev.target.value)} />
          <input style={{ ...field, marginTop: 6 }} placeholder="Subtitle (company / university · years)" value={e.sub} onChange={(ev) => upd(set, list, i, "sub", ev.target.value)} />
          <input style={{ ...field, marginTop: 6 }} placeholder="Detail" value={e.detail} onChange={(ev) => upd(set, list, i, "detail", ev.target.value)} />
          <button type="button" className="chip" style={{ marginTop: 6 }} onClick={() => del(set, list, i)}>Remove</button>
        </div>
      ))}
      <button type="button" className="chip" onClick={() => add(set, list)}>+ Add</button>
    </div>
  );

  return (
    <>
      <div className="card no-print">
        <label>Full name</label>
        <input style={field} value={name} onChange={(e) => setName(e.target.value)} />
        <label>Title / role</label>
        <input style={field} value={role} onChange={(e) => setRole(e.target.value)} />
        <label>Contact line</label>
        <input style={field} value={contact} onChange={(e) => setContact(e.target.value)} />
        <label>Summary</label>
        <textarea style={{ ...field, resize: "vertical" }} rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} />
        <EntryEditor label="Experience" list={exp} set={setExp} />
        <EntryEditor label="Education" list={edu} set={setEdu} />
        <label>Skills (comma separated)</label>
        <input style={field} value={skills} onChange={(e) => setSkills(e.target.value)} />
        <div style={{ marginTop: 16 }}>
          <button className="btn" onClick={() => window.print()}>⬇ Download / Print PDF</button>
          <span className="muted-note" style={{ marginLeft: 10 }}>Choose “Save as PDF” in the print dialog.</span>
        </div>
      </div>

      <div className="card">
        <div className="doc-preview">
          <h2>{name}</h2>
          <p className="doc-sub">{role}<br />{contact}</p>
          {summary && <div className="doc-section"><h3>Summary</h3><p style={{ margin: 0, fontSize: 14 }}>{summary}</p></div>}
          <div className="doc-section"><h3>Experience</h3>
            {exp.map((e, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <strong style={{ fontSize: 15 }}>{e.title}</strong><div style={{ color: "#555", fontSize: 13 }}>{e.sub}</div>
                <div style={{ fontSize: 14 }}>{e.detail}</div>
              </div>
            ))}
          </div>
          <div className="doc-section"><h3>Education</h3>
            {edu.map((e, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <strong style={{ fontSize: 15 }}>{e.title}</strong><div style={{ color: "#555", fontSize: 13 }}>{e.sub}</div>
                <div style={{ fontSize: 14 }}>{e.detail}</div>
              </div>
            ))}
          </div>
          <div className="doc-section"><h3>Skills</h3>
            <p style={{ margin: 0, fontSize: 14 }}>{skills.split(",").map((s) => s.trim()).filter(Boolean).join(" · ")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
