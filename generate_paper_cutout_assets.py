from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import random

ROOT = Path(__file__).parent
OUT = ROOT / 'src' / 'assets' / 'generated'
CHAR_DIR = OUT / 'characters'
BG_DIR = OUT / 'backgrounds'
BUILDING_DIR = OUT / 'buildings'

for p in [CHAR_DIR, BG_DIR, BUILDING_DIR]:
    p.mkdir(parents=True, exist_ok=True)


def hex_rgba(hex_color: str, alpha: int = 255):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4)) + (alpha,)


def paper_texture(size: tuple[int, int], base: str, grain: int = 28) -> Image.Image:
    w, h = size
    img = Image.new('RGBA', size, hex_rgba(base))
    px = img.load()
    random.seed(42 + w + h)
    for y in range(h):
        for x in range(w):
            n = random.randint(-grain, grain)
            r, g, b, a = px[x, y]
            px[x, y] = (
                max(0, min(255, r + n)),
                max(0, min(255, g + n)),
                max(0, min(255, b + n)),
                a,
            )
    return img.filter(ImageFilter.GaussianBlur(0.5))


def add_shadow(img: Image.Image, offset=(3, 3), alpha=90) -> Image.Image:
    shadow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    mask = img.split()[3]
    sh = Image.new('RGBA', img.size, (0, 0, 0, alpha))
    shadow.paste(sh, offset, mask)
    shadow = shadow.filter(ImageFilter.GaussianBlur(3))
    out = Image.new('RGBA', img.size, (0, 0, 0, 0))
    out.alpha_composite(shadow)
    out.alpha_composite(img)
    return out


def save_part(path: Path, size: tuple[int, int], draw_fn):
    canvas = Image.new('RGBA', size, (0, 0, 0, 0))
    draw_fn(canvas)
    canvas = add_shadow(canvas)
    canvas.save(path)


def draw_wolf_head(canvas: Image.Image):
    d = ImageDraw.Draw(canvas)
    base = paper_texture(canvas.size, '#8D9197')
    mask = Image.new('L', canvas.size, 0)
    m = ImageDraw.Draw(mask)
    m.ellipse((22, 28, 234, 220), fill=255)
    m.polygon([(56, 58), (26, 15), (86, 48)], fill=255)
    m.polygon([(202, 58), (232, 15), (172, 48)], fill=255)
    canvas.paste(base, (0, 0), mask)
    d.ellipse((84, 110, 108, 134), fill='#101014')
    d.ellipse((148, 110, 172, 134), fill='#101014')
    d.polygon([(116, 152), (128, 145), (140, 152), (128, 160)], fill='#2F2E36')
    d.line((114, 160, 128, 167), fill='#221f25', width=4)
    d.line((128, 167, 142, 160), fill='#221f25', width=4)


def draw_wolf_body(canvas: Image.Image):
    d = ImageDraw.Draw(canvas)
    torso = paper_texture(canvas.size, '#4A2E7F')
    mask = Image.new('L', canvas.size, 0)
    m = ImageDraw.Draw(mask)
    m.polygon([(46, 20), (196, 20), (212, 200), (30, 200)], fill=255)
    canvas.paste(torso, (0, 0), mask)
    sash = paper_texture(canvas.size, '#D19A45')
    sm = Image.new('L', canvas.size, 0)
    ImageDraw.Draw(sm).polygon([(60, 24), (96, 24), (172, 204), (136, 204)], fill=220)
    canvas.paste(sash, (0, 0), sm)
    d.rectangle((84, 76, 156, 144), outline='#EEE4C9', width=5)


def draw_wolf_arm(canvas: Image.Image, flip=False):
    arm = paper_texture(canvas.size, '#4A2E7F')
    mask = Image.new('L', canvas.size, 0)
    m = ImageDraw.Draw(mask)
    pts = [(30, 20), (82, 36), (74, 200), (24, 200)]
    if flip:
        pts = [(canvas.size[0]-x, y) for x, y in pts]
    m.polygon(pts, fill=255)
    canvas.paste(arm, (0, 0), mask)
    d = ImageDraw.Draw(canvas)
    paw = [(16, 180), (90, 180), (90, 220), (16, 220)] if not flip else [(canvas.size[0]-90, 180), (canvas.size[0]-16, 180), (canvas.size[0]-16, 220), (canvas.size[0]-90, 220)]
    d.polygon(paw, fill='#D7D1C7')


def draw_wolf_leg(canvas: Image.Image, flip=False):
    d = ImageDraw.Draw(canvas)
    leg = paper_texture(canvas.size, '#17181D')
    mask = Image.new('L', canvas.size, 0)
    m = ImageDraw.Draw(mask)
    pts = [(40, 8), (82, 8), (74, 182), (30, 182)]
    if flip:
        pts = [(canvas.size[0]-x, y) for x, y in pts]
    m.polygon(pts, fill=255)
    canvas.paste(leg, (0, 0), mask)
    foot = [(20, 170), (88, 170), (88, 218), (20, 218)] if not flip else [(canvas.size[0]-88, 170), (canvas.size[0]-20, 170), (canvas.size[0]-20, 218), (canvas.size[0]-88, 218)]
    d.polygon(foot, fill='#111217')


def draw_tiger_head(canvas: Image.Image):
    d = ImageDraw.Draw(canvas)
    base = paper_texture(canvas.size, '#E2A244')
    mask = Image.new('L', canvas.size, 0)
    m = ImageDraw.Draw(mask)
    m.ellipse((20, 32, 236, 220), fill=255)
    m.polygon([(56, 64), (28, 24), (88, 48)], fill=255)
    m.polygon([(200, 64), (228, 24), (168, 48)], fill=255)
    canvas.paste(base, (0, 0), mask)
    d.ellipse((82, 112, 106, 136), fill='#111216')
    d.ellipse((150, 112, 174, 136), fill='#111216')
    d.ellipse((98, 148, 158, 182), fill='#F7E9D4')
    d.polygon([(120, 154), (128, 148), (136, 154), (128, 162)], fill='#7A3E2A')
    for x in [74, 95, 116, 140, 161, 182]:
        d.polygon([(x, 72), (x+8, 64), (x+11, 88), (x+2, 92)], fill='#2E241C')


def draw_tiger_body(canvas: Image.Image):
    d = ImageDraw.Draw(canvas)
    torso = paper_texture(canvas.size, '#2F7A4A')
    mask = Image.new('L', canvas.size, 0)
    m = ImageDraw.Draw(mask)
    m.polygon([(48, 24), (192, 24), (206, 202), (34, 202)], fill=255)
    canvas.paste(torso, (0, 0), mask)
    d.polygon([(78, 64), (162, 64), (176, 188), (64, 188)], fill='#F1E7CE')
    d.rectangle((92, 84, 148, 120), outline='#7A5A2A', width=4)


def draw_tiger_arm(canvas: Image.Image, flip=False):
    arm = paper_texture(canvas.size, '#2F7A4A')
    mask = Image.new('L', canvas.size, 0)
    m = ImageDraw.Draw(mask)
    pts = [(24, 22), (88, 34), (76, 198), (16, 198)]
    if flip:
        pts = [(canvas.size[0]-x, y) for x, y in pts]
    m.polygon(pts, fill=255)
    canvas.paste(arm, (0, 0), mask)
    d = ImageDraw.Draw(canvas)
    paw = [(14, 176), (88, 176), (88, 220), (14, 220)] if not flip else [(canvas.size[0]-88, 176), (canvas.size[0]-14, 176), (canvas.size[0]-14, 220), (canvas.size[0]-88, 220)]
    d.polygon(paw, fill='#E2A244')


def draw_tiger_leg(canvas: Image.Image, flip=False):
    d = ImageDraw.Draw(canvas)
    leg = paper_texture(canvas.size, '#3C2D20')
    mask = Image.new('L', canvas.size, 0)
    m = ImageDraw.Draw(mask)
    pts = [(38, 6), (80, 6), (70, 182), (28, 182)]
    if flip:
        pts = [(canvas.size[0]-x, y) for x, y in pts]
    m.polygon(pts, fill=255)
    canvas.paste(leg, (0, 0), mask)
    foot = [(18, 168), (86, 168), (86, 218), (18, 218)] if not flip else [(canvas.size[0]-86, 168), (canvas.size[0]-18, 168), (canvas.size[0]-18, 218), (canvas.size[0]-86, 218)]
    d.polygon(foot, fill='#161515')


def draw_bakery_building(path: Path):
    img = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    wall = paper_texture((1024, 1024), '#D8B68F')
    roof = paper_texture((1024, 1024), '#B85D45')
    awning = paper_texture((1024, 1024), '#F2E3C5')
    wmask = Image.new('L', (1024, 1024), 0)
    ImageDraw.Draw(wmask).rectangle((170, 320, 854, 860), fill=255)
    img.paste(wall, (0, 0), wmask)
    rmask = Image.new('L', (1024, 1024), 0)
    ImageDraw.Draw(rmask).polygon([(120, 360), (512, 120), (904, 360)], fill=255)
    img.paste(roof, (0, 0), rmask)
    amask = Image.new('L', (1024, 1024), 0)
    ImageDraw.Draw(amask).polygon([(170, 430), (854, 430), (784, 530), (240, 530)], fill=255)
    img.paste(awning, (0, 0), amask)
    d.rectangle((450, 600, 575, 860), fill='#6A432A')
    d.rectangle((250, 570, 400, 760), fill='#7FB1C9')
    d.rectangle((624, 570, 774, 760), fill='#7FB1C9')
    d.text((338, 462), 'THE CRUSTY CRUMB', fill='#6A432A')
    img = add_shadow(img, offset=(0, 0), alpha=60)
    img.save(path)


def draw_environment(path: Path, sky: str, ground: str, accent: str, mood: str):
    img = Image.new('RGBA', (1536, 1024), hex_rgba(sky))
    d = ImageDraw.Draw(img)
    gtex = paper_texture((1536, 1024), ground, grain=20)
    gmask = Image.new('L', (1536, 1024), 0)
    ImageDraw.Draw(gmask).rectangle((0, 500, 1536, 1024), fill=255)
    img.paste(gtex, (0, 0), gmask)
    for i in range(8):
      x = 80 + i * 180
      d.ellipse((x, 560, x + 110, 670), fill=accent)
      d.rectangle((x + 46, 640, x + 64, 760), fill='#4B3525')
    d.rectangle((0, 720, 1536, 760), fill='#BBA68C')
    d.rectangle((0, 760, 1536, 770), fill='#8F7D68')
    if mood == 'rain':
      for _ in range(160):
        x = random.randint(0, 1536)
        y = random.randint(0, 1024)
        d.line((x, y, x-8, y+24), fill=(200, 220, 240, 90), width=2)
    if mood == 'night':
      d.rectangle((0, 0, 1536, 420), fill=(30, 32, 70, 80))
      for _ in range(120):
        x = random.randint(0, 1536)
        y = random.randint(0, 420)
        d.ellipse((x, y, x+3, y+3), fill=(255, 245, 210, 180))
    img.save(path)


# character parts export
save_part(CHAR_DIR / 'nox_head.png', (256, 256), draw_wolf_head)
save_part(CHAR_DIR / 'nox_body.png', (256, 256), draw_wolf_body)
save_part(CHAR_DIR / 'nox_left_arm.png', (120, 240), lambda c: draw_wolf_arm(c, False))
save_part(CHAR_DIR / 'nox_right_arm.png', (120, 240), lambda c: draw_wolf_arm(c, True))
save_part(CHAR_DIR / 'nox_left_leg.png', (120, 230), lambda c: draw_wolf_leg(c, False))
save_part(CHAR_DIR / 'nox_right_leg.png', (120, 230), lambda c: draw_wolf_leg(c, True))

save_part(CHAR_DIR / 'nyra_head.png', (256, 256), draw_tiger_head)
save_part(CHAR_DIR / 'nyra_body.png', (256, 256), draw_tiger_body)
save_part(CHAR_DIR / 'nyra_left_arm.png', (120, 240), lambda c: draw_tiger_arm(c, False))
save_part(CHAR_DIR / 'nyra_right_arm.png', (120, 240), lambda c: draw_tiger_arm(c, True))
save_part(CHAR_DIR / 'nyra_left_leg.png', (120, 230), lambda c: draw_tiger_leg(c, False))
save_part(CHAR_DIR / 'nyra_right_leg.png', (120, 230), lambda c: draw_tiger_leg(c, True))

# building + environments
draw_bakery_building(BUILDING_DIR / 'crusty_crumb_exterior.png')
draw_environment(BG_DIR / 'town_square_day_papercut.png', '#DFC9A7', '#C7B08D', '#6E8A5A', 'day')
draw_environment(BG_DIR / 'docks_rain_papercut.png', '#9BA8B6', '#71818D', '#42535F', 'rain')
draw_environment(BG_DIR / 'festival_park_night_papercut.png', '#5A628A', '#384253', '#5E7A4B', 'night')

print('Generated asset pack in', OUT)
