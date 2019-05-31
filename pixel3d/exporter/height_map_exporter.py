import json


class Pixel:

    def __init__(self, x, y, height):
        self.x = x
        self.y = y
        self.height = height


class PixelEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Pixel):
            return {"x": obj.x, "y": obj.y, "h": obj.height}
        # Let the base class default method raise the TypeError
        return json.JSONEncoder.default(self, obj)


def generate_height_map(pixel_heights):
    height_map = []
    for i in range(len(pixel_heights)):
        for j in range(len(pixel_heights[i])):
            pixel_height = pixel_heights[i][j]
            if pixel_height > 0:
                height_map.append(Pixel(i, j, pixel_height))

    return json.dumps(height_map, cls=PixelEncoder)
