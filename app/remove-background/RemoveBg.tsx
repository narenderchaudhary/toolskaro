"use client";

import { useRef, useState } from "react";

export default function RemoveBg() {
  const [srcUrl, setSrcUrl] = useState<string | null>(null);
  const [outUrl, setOutUrl] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(file: File | null) {
    if (!file) return;
    setBusy(true);
    setError(null);
    setOutUrl(null);
    setSrcUrl(URL.createObjectURL(file));
    setStatus("Loading model (first run downloads ~a few MB)…");
    try {
      const { removeBackground } = await import("@imgly/background-removal");
      const blob = await removeBackground(file, {
        progress: (key: string, current: number, total: number) => {
          if (key.startsWith("fetch")) {
            setStatus(`Downloading model… ${Math.round((current / total) * 100)}%`);
          } else {
            setStatus("Removing background…");
          }
        },
      });
      setOutUrl(URL.createObjectURL(blob));
      setStatus("");
    } catch {
      setError("Background removal failed. Try a smaller image or a different browser.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <div
        className="dropzone"
        onClick={() => !busy && inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); if (!busy) run(e.dataTransfer.files?.[0] ?? null); }}
      >
        {busy ? status || "Working…" : <>📁 Drop your photo here, or <u>click to choose</u></>}
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => run(e.target.files?.[0] ?? null)} />
      </div>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {(srcUrl || outUrl) && (
        <div className="row" style={{ marginTop: 16 }}>
          {srcUrl && (
            <div style={{ textAlign: "center" }}>
              <div className="muted-note" style={{ marginBottom: 6 }}>Original</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={srcUrl} alt="Original" style={{ maxWidth: "100%", borderRadius: 8, border: "1px solid var(--border)" }} />
            </div>
          )}
          {outUrl && (
            <div style={{ textAlign: "center" }}>
              <div className="muted-note" style={{ marginBottom: 6 }}>Background removed</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={outUrl}
                alt="Background removed"
                style={{ maxWidth: "100%", borderRadius: 8, border: "1px solid var(--border)", backgroundImage: "linear-gradient(45deg,#eee 25%,transparent 25%),linear-gradient(-45deg,#eee 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#eee 75%),linear-gradient(-45deg,transparent 75%,#eee 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0" }}
              />
            </div>
          )}
        </div>
      )}

      {outUrl && (
        <div className="result" style={{ marginTop: 16 }}>
          <a className="btn" href={outUrl} download="no-background.png">⬇ Download PNG</a>
          <p className="muted-note" style={{ marginTop: 8 }}>Tip: for a white-background passport photo, send this to the Passport Photo Maker.</p>
        </div>
      )}
    </div>
  );
}
