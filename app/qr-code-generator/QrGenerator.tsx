"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QrGenerator() {
  const [text, setText] = useState("https://toolskaro.com");
  const [size, setSize] = useState(320);
  const [dark, setDark] = useState("#000000");
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!text.trim()) {
      setUrl(null);
      return;
    }
    QRCode.toDataURL(text, { width: size, margin: 2, color: { dark, light: "#ffffff" } })
      .then((u) => !cancelled && setUrl(u))
      .catch(() => !cancelled && setUrl(null));
    return () => {
      cancelled = true;
    };
  }, [text, size, dark]);

  return (
    <div className="card">
      <label htmlFor="qr-text">Text or URL</label>
      <textarea
        id="qr-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="Enter a link, UPI ID, Wi-Fi details, phone number…"
        style={{ width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 10, fontSize: 15, fontFamily: "inherit", resize: "vertical" }}
      />

      <div className="row" style={{ marginTop: 12 }}>
        <div>
          <label htmlFor="qr-size">Size (px)</label>
          <input id="qr-size" type="number" min={128} max={1024} step={32} value={size} onChange={(e) => setSize(Number(e.target.value) || 320)} />
        </div>
        <div>
          <label htmlFor="qr-color">Colour</label>
          <input id="qr-color" type="color" value={dark} onChange={(e) => setDark(e.target.value)} style={{ height: 42, padding: 4 }} />
        </div>
      </div>

      {url && (
        <div className="result" style={{ textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt="Generated QR code" style={{ maxWidth: "100%", width: size, background: "#fff", borderRadius: 8 }} />
          <div style={{ marginTop: 10 }}>
            <a className="btn" href={url} download="qr-code.png">⬇ Download PNG</a>
          </div>
        </div>
      )}
    </div>
  );
}
