"use client";

import { useState } from "react";

const field = { width: "100%", padding: "9px 11px", border: "1px solid var(--border)", borderRadius: 8, fontSize: 14, fontFamily: "inherit" as const };

export default function CoverLetter() {
  const [name, setName] = useState("Your Name");
  const [contact, setContact] = useState("email@example.com · +91 90000 00000 · City, India");
  const [date, setDate] = useState("");
  const [toName, setToName] = useState("Hiring Manager");
  const [company, setCompany] = useState("Company Name");
  const [role, setRole] = useState("the position");
  const [body, setBody] = useState(
    "I am writing to apply for the position mentioned above. With my background and skills, I am confident I can contribute meaningfully to your team.\n\nIn my previous experience, I developed strong abilities that align well with this role. I am eager to bring the same dedication and results to your organisation.\n\nThank you for considering my application. I would welcome the opportunity to discuss how I can add value to your team."
  );
  const [signoff, setSignoff] = useState("Sincerely");

  return (
    <>
      <div className="card no-print">
        <label>Your name</label><input style={field} value={name} onChange={(e) => setName(e.target.value)} />
        <label>Your contact line</label><input style={field} value={contact} onChange={(e) => setContact(e.target.value)} />
        <label>Date (optional)</label><input style={field} value={date} onChange={(e) => setDate(e.target.value)} placeholder="e.g. 1 June 2026" />
        <div className="row">
          <div><label>Recipient name</label><input style={field} value={toName} onChange={(e) => setToName(e.target.value)} /></div>
          <div><label>Company</label><input style={field} value={company} onChange={(e) => setCompany(e.target.value)} /></div>
        </div>
        <label>Position you&apos;re applying for</label><input style={field} value={role} onChange={(e) => setRole(e.target.value)} />
        <label>Letter body</label>
        <textarea style={{ ...field, resize: "vertical" }} rows={8} value={body} onChange={(e) => setBody(e.target.value)} />
        <label>Sign-off</label><input style={field} value={signoff} onChange={(e) => setSignoff(e.target.value)} />
        <div style={{ marginTop: 16 }}>
          <button className="btn" onClick={() => window.print()}>⬇ Download / Print PDF</button>
          <span className="muted-note" style={{ marginLeft: 10 }}>Choose “Save as PDF” in the print dialog.</span>
        </div>
      </div>

      <div className="card">
        <div className="doc-preview" style={{ fontSize: 15 }}>
          <div style={{ marginBottom: 18 }}>
            <strong style={{ fontSize: 18 }}>{name}</strong>
            <div style={{ color: "#555", fontSize: 14 }}>{contact}</div>
          </div>
          {date && <p style={{ margin: "0 0 14px" }}>{date}</p>}
          <p style={{ margin: "0 0 4px" }}>{toName},</p>
          <p style={{ margin: "0 0 14px", color: "#555" }}>{company}</p>
          <p style={{ marginTop: 0 }}>Dear {toName},</p>
          <p>Re: Application for {role}</p>
          {body.split(/\n{2,}/).map((para, i) => (<p key={i}>{para}</p>))}
          <p style={{ marginBottom: 2 }}>{signoff},</p>
          <p style={{ marginTop: 0 }}><strong>{name}</strong></p>
        </div>
      </div>
    </>
  );
}
