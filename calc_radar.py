import math

cx, cy = 350, 350

areas = [
    ('Area 1 (Blue/Dark)', [200, 250, 260, 230, 180, 160, 120, 150, 200, 240, 270, 220]),
    ('Area 2 (Teal/Green)', [160, 180, 200, 240, 250, 220, 180, 140, 120, 150, 170, 140]),
    ('Area 3 (Red/Pink)', [100, 130, 170, 150, 120, 90, 140, 180, 160, 130, 100, 110]),
]

for name, radii in areas:
    points = []
    for hour in range(12):
        angle_deg = hour * 30 - 90
        angle_rad = angle_deg * math.pi / 180
        x = cx + radii[hour] * math.cos(angle_rad)
        y = cy + radii[hour] * math.sin(angle_rad)
        points.append((round(x, 2), round(y, 2)))

    parts = []
    for i, (x, y) in enumerate(points):
        if i == 0:
            parts.append("M {},{}".format(x, y))
        else:
            parts.append("L {},{}".format(x, y))
    parts.append("Z")
    path = " ".join(parts)
    print("=== {} ===".format(name))
    print(path)
    print()
