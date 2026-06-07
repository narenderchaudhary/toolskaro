#!/usr/bin/env python3
"""Generate email-safe rounded social icon PNGs (brand colours, white glyphs)."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "social")
os.makedirs(OUT, exist_ok=True)

S = 256          # render size
R = 58           # corner radius
PAD = 0
DISPLAY = 26     # intended display px (for reference)

FONT_CANDIDATES = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/Library/Fonts/Arial Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/HelveticaNeue.ttc",
]
def font(size):
    for p in FONT_CANDIDATES:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()

def rounded_mask(size=S, r=R):
    m = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=r, fill=255)
    return m

def diagonal_gradient(stops, size=S):
    """stops: list of (pos0-1, (r,g,b)). Simple top-left -> bottom-right."""
    base = Image.new("RGB", (size, size))
    px = base.load()
    def lerp(a, b, t):
        return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))
    def color_at(t):
        for i in range(len(stops) - 1):
            p0, c0 = stops[i]
            p1, c1 = stops[i + 1]
            if p0 <= t <= p1:
                lt = (t - p0) / (p1 - p0) if p1 > p0 else 0
                return lerp(c0, c1, lt)
        return stops[-1][1]
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * (size - 1))
            px[x, y] = color_at(t)
    return base

def canvas(bg):
    if isinstance(bg, Image.Image):
        img = bg.convert("RGBA")
    else:
        img = Image.new("RGBA", (S, S), bg + (255,))
    out = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    out.paste(img, (0, 0), rounded_mask())
    return out

def center_text(draw, text, fnt, fill, dy=0):
    bbox = draw.textbbox((0, 0), text, font=fnt)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    x = (S - w) / 2 - bbox[0]
    y = (S - h) / 2 - bbox[1] + dy
    draw.text((x, y), text, font=fnt, fill=fill)

def save(img, name):
    img.save(os.path.join(OUT, name + ".png"))
    print("wrote", name + ".png")

W = (255, 255, 255)

# X (Twitter) — black, white X glyph
img = canvas((0, 0, 0)); d = ImageDraw.Draw(img)
center_text(d, "X", font(150), W, dy=-4)
save(img, "x")

# Facebook — #1877F2, white f
img = canvas((24, 119, 242)); d = ImageDraw.Draw(img)
center_text(d, "f", font(170), W, dy=-6)
save(img, "facebook")

# LinkedIn — #0A66C2, white in
img = canvas((10, 102, 194)); d = ImageDraw.Draw(img)
center_text(d, "in", font(120), W, dy=-2)
save(img, "linkedin")

# Instagram — gradient + white camera outline
grad = diagonal_gradient([(0.0, (81, 91, 212)), (0.5, (221, 42, 123)), (1.0, (245, 133, 41))])
img = canvas(grad); d = ImageDraw.Draw(img)
# rounded square outline
d.rounded_rectangle([74, 74, 182, 182], radius=34, outline=W, width=16)
# lens
d.ellipse([104, 104, 152, 152], outline=W, width=15)
# flash dot
d.ellipse([160, 88, 178, 106], fill=W)
save(img, "instagram")

# YouTube — #FF0000, white play triangle
img = canvas((255, 0, 0)); d = ImageDraw.Draw(img)
d.polygon([(104, 92), (104, 164), (172, 128)], fill=W)
save(img, "youtube")

print("done")
