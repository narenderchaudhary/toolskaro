"use client";

import { useRef, useState } from "react";

type Result = {
  url: string;
  bytes: number;
  width: number;
  height: number;
  quality: number;
};

const PRESETS = [20, 50, 100, 200]; // KB — common target sizes

function fmtKB(bytes: number) {
  return (bytes / 1024).toFixed(1) + " KB";
}

// Encode a canvas to a JPEG Blob at a given quality (0..1).
function encode(canvas: HTMLCanvasElement, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("encode failed"))),
      "image/jpeg",
      quality
    );
  });
}

/**
 * Compress an image to at-or-under a target KB by binary-searching JPEG quality.
 * If even q=0.1 is too big, progressively downscale the canvas and retry.
 * Pure browser — no upload, no dependencies.
 */
async function compressToTarget(file: File, targetKB: number): Promise<Result> {
  const targetBytes = targetKB * 1024;
  const bitmap = await createImageBitmap(file);
  let width = bitmap.width;
  let height = bitmap.height;

  for (let attempt = 0; attempt < 6; attempt++) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(bitmap, 0, 0, width, height);

    // Binary search on quality.
    let lo = 0.1;
    let hi = 0.95;
    let best: Blob | null = null;
    let bestQ = lo;
    for (let i = 0; i < 8; i++) {
      const q = (lo + hi) / 2;
      const blob = await encode(canvas, q);
      if (blob.size <= targetBytes) {
        best = blob;
        bestQ = q;
        lo = q; // try higher quality while staying under target
      } else {
        hi = q;
      }
    }

    if (best) {
      return {
        url: URL.createObjectURL(best),
        bytes: best.size,
        width,
        height,
        quality: Math.round(bestQ * 100),
      };
    }

    // Couldn't fit even at lowest quality — downscale 15% and retry.
    width = Math.round(width * 0.85);
    height = Math.round(height * 0.85);
  }

  // Fallback: return the smallest we can produce.
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, width, height);
  const blob = await encode(canvas, 0.1);
  return { url: URL.createObjectURL(blob), bytes: blob.size, width, height, quality: 10 };
}

export default function Compressor({ initialTarget = 50 }: { initialTarget?: number }) {
  const [file, setFile] = useState<File | null>(null);
  const [targetKB, setTargetKB] = useState(initialTarget);
  const [result, setResult] = useState<Result | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function run(selected = file, kb = targetKB) {
    if (!selected) return;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const r = await compressToTarget(selected, kb);
      setResult(r);
    } catch {
      setError("Could not compress this file. Try a JPG or PNG image.");
    } finally {
      setBusy(false);
    }
  }

  function onPick(f: File | null) {
    setFile(f);
    setResult(null);
    setError(null);
    if (f) run(f, targetKB);
  }

  return (
    <div className="card">
      <div
        className="dropzone"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          onPick(e.dataTransfer.files?.[0] ?? null);
        }}
      >
        {file ? (
          <>
            <strong>{file.name}</strong> — {fmtKB(file.size)} · click to change
          </>
        ) : (
          <>📁 Drop your image here, or <u>click to choose</u> (JPG / PNG)</>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => onPick(e.target.files?.[0] ?? null)}
        />
      </div>

      <label htmlFor="kb">Target size (KB)</label>
      <div className="row">
        <div>
          <input
            id="kb"
            type="number"
            min={5}
            value={targetKB}
            onChange={(e) => setTargetKB(Math.max(5, Number(e.target.value) || 0))}
          />
        </div>
        <div style={{ flex: 2 }}>
          <div className="preset-row">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                className="chip"
                onClick={() => {
                  setTargetKB(p);
                  run(file, p);
                }}
              >
                {p} KB
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn" disabled={!file || busy} onClick={() => run()}>
          {busy ? "Compressing…" : "Compress image"}
        </button>
      </div>

      {error && <p style={{ color: "#c0392b", marginTop: 14 }}>{error}</p>}

      {result && (
        <div className="result">
          <p className="stat">
            ✅ Compressed to <b>{fmtKB(result.bytes)}</b> ({result.width}×{result.height}px, JPEG
            quality {result.quality}%)
            {file && (
              <> — was {fmtKB(file.size)}, saved{" "}
                <b>{Math.max(0, Math.round((1 - result.bytes / file.size) * 100))}%</b></>
            )}
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.url}
            alt="Compressed preview"
            style={{ maxWidth: "100%", borderRadius: 8, margin: "10px 0" }}
          />
          <div>
            <a
              className="btn"
              href={result.url}
              download={`compressed-${targetKB}kb.jpg`}
            >
              ⬇ Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
