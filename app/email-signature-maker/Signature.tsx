"use client";

import { useMemo, useRef, useState } from "react";

const SITE = "https://toolskaro.com";

type Tpl = "classic" | "modern" | "minimal";
type Shape = "round" | "square";

type Data = {
  name: string; title: string; company: string; website: string; email: string; phone: string;
  linkedin: string; twitter: string; facebook: string; instagram: string; youtube: string;
  photo: string; color: string; template: Tpl; shape: Shape;
};

const DEFAULTS: Data = {
  name: "Priya Sharma", title: "Marketing Manager", company: "BrightLabs", website: "brightlabs.com",
  email: "priya@brightlabs.com", phone: "+91 98765 43210",
  linkedin: "priyasharma", twitter: "priyasharma", facebook: "", instagram: "priya.sharma", youtube: "",
  photo: "", color: "#4f46e5", template: "classic", shape: "round",
};

const SOCIALS: { key: keyof Data; icon: string; base: string; label: string }[] = [
  { key: "linkedin", icon: "linkedin", base: "https://www.linkedin.com/in/", label: "LinkedIn" },
  { key: "twitter", icon: "x", base: "https://twitter.com/", label: "Twitter / X" },
  { key: "facebook", icon: "facebook", base: "https://facebook.com/", label: "Facebook" },
  { key: "instagram", icon: "instagram", base: "https://instagram.com/", label: "Instagram" },
  { key: "youtube", icon: "youtube", base: "https://youtube.com/@", label: "YouTube" },
];

const PRESET_COLORS = ["#4f46e5", "#db2777", "#0891b2", "#059669", "#d97706", "#e11d48", "#0f172a"];

const esc = (s: string) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function socialUrl(base: string, v: string) {
  const t = v.trim();
  if (!t) return "";
  if (/^https?:\/\//i.test(t)) return t;
  return base + t.replace(/^@/, "").replace(/^\/+/, "");
}
function webUrl(v: string) {
  const t = v.trim();
  if (!t) return "";
  return /^https?:\/\//i.test(t) ? t : "https://" + t;
}
const webLabel = (v: string) => v.trim().replace(/^https?:\/\//i, "").replace(/\/$/, "");

function buildSignatureHtml(d: Data, absolute: boolean): string {
  const base = absolute ? SITE : "";
  const c = d.color;
  const photoRadius = d.shape === "round" ? "50%" : "10px";

  const photoImg = d.photo
    ? `<img src="${d.photo}" width="96" height="96" alt="${esc(d.name)}" style="display:block;width:96px;height:96px;border-radius:${photoRadius};object-fit:cover;" />`
    : "";

  const socialCells = SOCIALS.map((s) => {
    const raw = (d[s.key] as string) || "";
    const url = socialUrl(s.base, raw);
    if (!url) return "";
    return `<td style="padding-right:8px;"><a href="${esc(url)}" target="_blank" style="text-decoration:none;"><img src="${base}/social/${s.icon}.png" width="26" height="26" alt="${s.label}" style="display:block;border:0;border-radius:6px;" /></a></td>`;
  }).join("");
  const socialRow = socialCells
    ? `<table cellpadding="0" cellspacing="0" border="0" role="presentation"><tr>${socialCells}</tr></table>`
    : "";

  const lines: string[] = [];
  if (d.email) lines.push(`<a href="mailto:${esc(d.email)}" style="color:${c};text-decoration:none;">${esc(d.email)}</a>`);
  if (d.phone) lines.push(`<a href="tel:${esc(d.phone.replace(/\s+/g, ""))}" style="color:#5b6470;text-decoration:none;">${esc(d.phone)}</a>`);
  if (d.website) lines.push(`<a href="${esc(webUrl(d.website))}" target="_blank" style="color:${c};text-decoration:none;">${esc(webLabel(d.website))}</a>`);
  const contactStacked = lines.map((l) => `<div style="padding-top:3px;">${l}</div>`).join("");

  const nameHtml = `<div style="font-size:18px;font-weight:bold;color:${c};line-height:1.2;">${esc(d.name)}</div>`;
  const titleHtml = (d.title || d.company)
    ? `<div style="font-size:13px;color:#5b6470;padding-top:3px;">${esc(d.title)}${d.title && d.company ? " · " : ""}${d.company ? `<span style="font-weight:bold;color:#374151;">${esc(d.company)}</span>` : ""}</div>`
    : "";

  const wrapStart = `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="font-family:Arial,Helvetica,sans-serif;color:#3b3b3b;font-size:13px;line-height:1.45;">`;
  const wrapEnd = `</table>`;

  if (d.template === "minimal") {
    return `${wrapStart}<tr><td>
      ${nameHtml}${titleHtml}
      <div style="padding-top:8px;font-size:13px;color:#5b6470;line-height:1.8;">${contactStacked}</div>
      ${socialRow ? `<div style="padding-top:10px;">${socialRow}</div>` : ""}
    </td></tr>${wrapEnd}`;
  }

  if (d.template === "modern") {
    const topPhoto = d.photo
      ? `<td valign="middle" style="padding-right:16px;">${photoImg}</td>`
      : "";
    return `${wrapStart}<tr>${topPhoto}<td valign="middle">${nameHtml}${titleHtml}</td></tr>
      <tr><td colspan="${d.photo ? 2 : 1}" style="padding-top:12px;">
        <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%"><tr><td style="border-top:2px solid ${c};font-size:0;line-height:0;height:2px;">&nbsp;</td></tr></table>
        <div style="padding-top:10px;font-size:13px;color:#5b6470;line-height:1.8;">${contactStacked}</div>
        ${socialRow ? `<div style="padding-top:10px;">${socialRow}</div>` : ""}
      </td></tr>${wrapEnd}`;
  }

  // classic
  const photoCell = d.photo ? `<td valign="top" style="padding-right:18px;">${photoImg}</td>` : "";
  return `${wrapStart}<tr>${photoCell}
    <td valign="top" style="border-left:3px solid ${c};padding-left:18px;">
      ${nameHtml}${titleHtml}
      <div style="padding-top:9px;font-size:13px;color:#5b6470;line-height:1.8;">${contactStacked}</div>
      ${socialRow ? `<div style="padding-top:11px;">${socialRow}</div>` : ""}
    </td></tr>${wrapEnd}`;
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div className="esig-field">
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default function Signature() {
  const [d, setD] = useState<Data>(DEFAULTS);
  const [copied, setCopied] = useState<"" | "rich" | "code">("");
  const previewRef = useRef<HTMLDivElement>(null);
  const set = (k: keyof Data) => (v: string) => setD((p) => ({ ...p, [k]: v }));

  const previewHtml = useMemo(() => buildSignatureHtml(d, false), [d]);

  function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setD((p) => ({ ...p, photo: String(reader.result) }));
    reader.readAsDataURL(file);
  }

  async function copyRich() {
    const html = buildSignatureHtml(d, true);
    const plain = `${d.name}\n${d.title}${d.company ? " · " + d.company : ""}\n${d.email}${d.phone ? " · " + d.phone : ""}`;
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "text/html": new Blob([html], { type: "text/html" }), "text/plain": new Blob([plain], { type: "text/plain" }) }),
      ]);
      flash("rich");
    } catch {
      // Fallback: select a rendered node and execCommand copy
      const tmp = document.createElement("div");
      tmp.contentEditable = "true";
      tmp.style.cssText = "position:fixed;left:-9999px;top:0;";
      tmp.innerHTML = html;
      document.body.appendChild(tmp);
      const range = document.createRange();
      range.selectNodeContents(tmp);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      try { document.execCommand("copy"); flash("rich"); } catch { alert("Copy failed — use 'Copy HTML code' instead."); }
      sel?.removeAllRanges();
      document.body.removeChild(tmp);
    }
  }
  async function copyCode() {
    try { await navigator.clipboard.writeText(buildSignatureHtml(d, true)); flash("code"); }
    catch { alert("Copy failed in this browser."); }
  }
  function flash(w: "rich" | "code") { setCopied(w); setTimeout(() => setCopied(""), 1800); }

  return (
    <div className="esig">
      <div className="esig-grid">
        {/* ---------- Form ---------- */}
        <div className="esig-form card">
          <h3 className="esig-h">Your details</h3>
          <div className="esig-row2">
            <Field label="Full name" value={d.name} onChange={set("name")} placeholder="Priya Sharma" />
            <Field label="Designation / job title" value={d.title} onChange={set("title")} placeholder="Marketing Manager" />
          </div>
          <div className="esig-row2">
            <Field label="Company" value={d.company} onChange={set("company")} placeholder="BrightLabs" />
            <Field label="Company website" value={d.website} onChange={set("website")} placeholder="brightlabs.com" />
          </div>
          <div className="esig-row2">
            <Field label="Official email" type="email" value={d.email} onChange={set("email")} placeholder="priya@brightlabs.com" />
            <Field label="Phone (optional)" value={d.phone} onChange={set("phone")} placeholder="+91 98765 43210" />
          </div>

          <h3 className="esig-h">Profile photo / logo</h3>
          <div className="esig-photo-row">
            <label className="esig-upload">
              <input type="file" accept="image/*" onChange={onPhoto} hidden />
              {d.photo ? "Change image" : "Upload image"}
            </label>
            {d.photo && <button type="button" className="esig-remove" onClick={() => set("photo")("")}>Remove</button>}
            <div className="esig-shape">
              <button type="button" className={d.shape === "round" ? "on" : ""} onClick={() => set("shape")("round")}>Round</button>
              <button type="button" className={d.shape === "square" ? "on" : ""} onClick={() => set("shape")("square")}>Square</button>
            </div>
          </div>

          <h3 className="esig-h">Social links</h3>
          {SOCIALS.map((s) => (
            <Field key={s.key} label={s.label} value={d[s.key] as string} onChange={set(s.key)} placeholder="username or full URL" />
          ))}

          <h3 className="esig-h">Style</h3>
          <div className="esig-tpls">
            {(["classic", "modern", "minimal"] as Tpl[]).map((t) => (
              <button key={t} type="button" className={`esig-tpl ${d.template === t ? "on" : ""}`} onClick={() => set("template")(t)}>{t}</button>
            ))}
          </div>
          <div className="esig-colors">
            {PRESET_COLORS.map((col) => (
              <button key={col} type="button" aria-label={col} className={`esig-sw ${d.color === col ? "on" : ""}`} style={{ background: col }} onClick={() => set("color")(col)} />
            ))}
            <input type="color" value={d.color} onChange={(e) => set("color")(e.target.value)} className="esig-color-input" aria-label="Custom colour" />
          </div>
        </div>

        {/* ---------- Preview ---------- */}
        <div className="esig-preview-wrap">
          <div className="esig-preview card">
            <div className="esig-mail-head">
              <span className="esig-dot" /><span className="esig-dot" /><span className="esig-dot" />
              <span className="esig-mail-label">Signature preview</span>
            </div>
            <div className="esig-canvas">
              <div ref={previewRef} dangerouslySetInnerHTML={{ __html: previewHtml }} />
            </div>
          </div>
          <div className="esig-actions">
            <button type="button" className="btn esig-copy" onClick={copyRich}>{copied === "rich" ? "✓ Copied!" : "Copy signature"}</button>
            <button type="button" className="btn esig-code" onClick={copyCode}>{copied === "code" ? "✓ Copied!" : "Copy HTML code"}</button>
          </div>
          <p className="esig-hint">
            Click <strong>Copy signature</strong>, then in Gmail go to Settings → See all settings → Signature, and paste.
            In Outlook, use <strong>Copy HTML code</strong> in your signature settings. Tip: for the photo to show in every
            email client, host it online and it will always load.
          </p>
        </div>
      </div>
    </div>
  );
}
