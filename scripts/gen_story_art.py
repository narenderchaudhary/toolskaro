#!/usr/bin/env python3
"""Generate relevant, themed dark artwork for the AMP web-story posters & backgrounds."""
import os, math
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "web-stories", "bg")
os.makedirs(OUT, exist_ok=True)

FONTS = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/Library/Fonts/Arial Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
]
def font(sz):
    for p in FONTS:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, sz)
            except Exception: continue
    return ImageFont.load_default()

VIOLET = (139, 124, 245)      # motif line colour
INK = (243, 241, 246)
MUTED = (199, 197, 205)
BADGE = (169, 159, 247)

GLOWS = {
    "compress": (79, 70, 229),    # indigo
    "resize":   (124, 58, 237),   # purple
    "passport": (37, 99, 235),    # blue
}

def lerp(a, b, t): return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def base(w, h, glow, gxf=0.28, gyf=0.16, grf=0.9):
    """Warm charcoal vertical gradient + soft colour glow."""
    img = Image.new("RGB", (w, h))
    top, bot = (34, 29, 46), (22, 19, 24)
    px = img.load()
    for y in range(h):
        c = lerp(top, bot, y / (h - 1))
        for x in range(w):
            px[x, y] = c
    glow_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow_layer)
    gx, gy, gr = int(w * gxf), int(h * gyf), int(w * grf)
    for r in range(gr, 0, -6):
        a = int(46 * (1 - r / gr) ** 2)
        gd.ellipse([gx - r, gy - r, gx + r, gy + r], fill=glow + (a,))
    img = Image.alpha_composite(img.convert("RGBA"), glow_layer)
    return img

def motif_layer(w, h):
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    return layer, ImageDraw.Draw(layer)

def stamp(img, layer, alpha=46):
    a = layer.split()[3].point(lambda v: int(v * alpha / 255))
    layer.putalpha(a)
    return Image.alpha_composite(img, layer)

# ---- motif primitives (drawn full-opacity on the layer, faded by stamp) ----
def m_photo_frame(d, x, y, w, h, lw=7):
    d.rounded_rectangle([x, y, x + w, y + h], radius=22, outline=VIOLET, width=lw)
    by = y + h - int(h * 0.22)
    d.line([(x + 24, by), (x + w * 0.42, y + h * 0.45), (x + w * 0.62, by)], fill=VIOLET, width=lw, joint="curve")
    d.line([(x + w * 0.5, by), (x + w * 0.72, y + h * 0.58), (x + w - 24, by)], fill=VIOLET, width=lw, joint="curve")
    r = int(w * 0.10)
    d.ellipse([x + w - r - 40, y + 34, x + w - 40, y + 34 + r], outline=VIOLET, width=lw)

def m_down_arrow(d, cx, cy, h, lw=8):
    d.line([(cx, cy), (cx, cy + h)], fill=VIOLET, width=lw)
    s = int(h * 0.38)
    d.line([(cx - s, cy + h - s), (cx, cy + h), (cx + s, cy + h - s)], fill=VIOLET, width=lw, joint="curve")

def m_person(d, cx, top, scale, lw=7):
    hr = int(46 * scale)
    d.ellipse([cx - hr, top, cx + hr, top + 2 * hr], outline=VIOLET, width=lw)
    sw = int(150 * scale)
    sy = top + 2 * hr + int(18 * scale)
    d.arc([cx - sw, sy, cx + sw, sy + int(sw * 1.8)], 200, 340, fill=VIOLET, width=lw)

def m_signature(d, x, y, w, lw=7):
    pts = []
    n = 60
    for i in range(n + 1):
        t = i / n
        px = x + w * t
        py = y + math.sin(t * math.pi * 3) * 26 - t * 14 + math.sin(t * 22) * 5
        pts.append((px, py))
    d.line(pts, fill=VIOLET, width=lw, joint="curve")
    d.line([(x - 6, y + 46), (x + w + 6, y + 46)], fill=VIOLET, width=4)

def m_crop_marks(d, x, y, w, h, lw=7, s=34):
    for (cx, cy, dx, dy) in [(x, y, 1, 1), (x + w, y, -1, 1), (x, y + h, 1, -1), (x + w, y + h, -1, -1)]:
        d.line([(cx, cy), (cx + dx * s, cy)], fill=VIOLET, width=lw)
        d.line([(cx, cy), (cx, cy + dy * s)], fill=VIOLET, width=lw)

def draw_motif(img, theme, w, h):
    layer, d = motif_layer(w, h)
    cx = w // 2
    midy = int(h * 0.40)
    if theme == "compress":
        fw, fh = int(w * 0.46), int(w * 0.40)
        m_photo_frame(d, cx - fw // 2, midy, fw, fh)
        m_down_arrow(d, cx, midy + fh + 30, int(h * 0.10))
        f = font(int(w * 0.085))
        d.text((cx - 70, midy + fh + int(h * 0.10) + 56), "KB", font=f, fill=VIOLET)
    elif theme == "resize":
        fw, fh = int(w * 0.40), int(w * 0.34)
        fx = cx - fw // 2
        fy = midy - int(h * 0.04)
        d.rounded_rectangle([fx, fy, fx + fw, fy + fh], radius=20, outline=VIOLET, width=7)
        m_person(d, cx, fy + int(fh * 0.18), 0.78)
        m_signature(d, fx, fy + fh + int(h * 0.07), fw)
    else:  # passport
        fw, fh = int(w * 0.46), int(w * 0.40)
        fx, fy = cx - fw // 2, midy
        m_crop_marks(d, fx - 18, fy - 18, fw + 36, fh + 36)
        d.rounded_rectangle([fx, fy, fx + fw, fy + fh], radius=20, outline=VIOLET, width=7)
        m_person(d, cx, fy + int(fh * 0.16), 1.05)
    return stamp(img, layer, alpha=48)

def wrap(d, text, f, maxw):
    words, lines, cur = text.split(), [], ""
    for wd in words:
        t = (cur + " " + wd).strip()
        if d.textlength(t, font=f) <= maxw: cur = t
        else: lines.append(cur); cur = wd
    if cur: lines.append(cur)
    return lines

def logo_chip(d, x, y, s=58):
    # gradient-ish "T" chip (flat violet→indigo)
    d.rounded_rectangle([x, y, x + s, y + s], radius=15, fill=(99, 76, 220))
    f = font(int(s * 0.62))
    tw = d.textlength("T", font=f)
    d.text((x + (s - tw) / 2, y + s * 0.13), "T", font=f, fill=(255, 255, 255))

POSTERS = {
    "compress": "Compress your photo to 50 KB",
    "resize": "Resize photo & signature for exams",
    "passport": "Make a passport-size photo",
}

def make_poster(theme, title):
    w, h = 720, 960
    img = base(w, h, GLOWS[theme])
    img = draw_motif(img, theme, w, h)
    d = ImageDraw.Draw(img)
    pad = 56
    d.text((pad, 70), "TOOLSKARO", font=font(28), fill=BADGE)
    tf = font(58)
    lines = wrap(d, title, tf, w - pad * 2)
    ty = 118
    for ln in lines:
        d.text((pad, ty), ln, font=tf, fill=INK); ty += 70
    # bottom brand row
    by = h - 96
    logo_chip(d, pad, by - 6, 56)
    d.text((pad + 72, by), "ToolsKaro", font=font(34), fill=INK)
    d.text((pad + 72, by + 40), "Free · no upload · in your browser", font=font(20), fill=MUTED)
    img.convert("RGB").save(os.path.join(OUT, f"{theme}-poster.png"))
    print("wrote", f"{theme}-poster.png")

def make_bg(theme):
    w, h = 720, 1280
    img = base(w, h, GLOWS[theme])
    img = draw_motif(img, theme, w, h)
    img.convert("RGB").save(os.path.join(OUT, f"{theme}-bg.png"))
    print("wrote", f"{theme}-bg.png")

APP = os.path.join(os.path.dirname(__file__), "..", "app")

def make_og():
    """Landscape social / OG preview (1200x630) with relevant motif on the right."""
    w, h = 1200, 630
    img = base(w, h, GLOWS["compress"], 0.75, 0.46, 0.6)
    layer, d = motif_layer(w, h)
    cx = int(w * 0.75)
    fw, fh = 300, 250
    fx, fy = cx - fw // 2, 150
    d.rounded_rectangle([fx, fy, fx + fw, fy + fh], radius=22, outline=VIOLET, width=8)
    m_person(d, cx, fy + int(fh * 0.16), 1.12)
    m_signature(d, fx, fy + fh + 48, fw)
    img = stamp(img, layer, alpha=54)

    d = ImageDraw.Draw(img)
    pad = 80
    logo_chip(d, pad, 62, 66)
    d.text((pad + 84, 76), "ToolsKaro", font=font(46), fill=INK)
    hf = font(60)
    ty = 190
    for ln in wrap(d, "Free tools for Indian exam & job applicants", hf, 600):
        d.text((pad, ty), ln, font=hf, fill=INK); ty += 72
    d.text((pad, ty + 10), "Resize & compress photo & signature, PDFs", font=font(27), fill=MUTED)
    d.text((pad, ty + 46), "and build a resume — 100% in your browser.", font=font(27), fill=MUTED)

    chips = ["Compress", "Passport Photo", "Remove BG", "PDF", "Resume"]
    cf = font(24)
    cxp, cyp = pad, h - 92
    for c in chips:
        pw = d.textlength(c, font=cf) + 40
        d.rounded_rectangle([cxp, cyp, cxp + pw, cyp + 50], radius=25, fill=(139, 124, 245, 30), outline=(139, 124, 245, 95), width=2)
        d.text((cxp + 20, cyp + 11), c, font=cf, fill=(212, 207, 250))
        cxp += pw + 14

    img.convert("RGB").save(os.path.join(APP, "opengraph-image.png"))
    img.convert("RGB").save(os.path.join(APP, "twitter-image.png"))
    print("wrote app/opengraph-image.png + app/twitter-image.png")

for th, title in POSTERS.items():
    make_poster(th, title)
    make_bg(th)
make_og()
print("done")
