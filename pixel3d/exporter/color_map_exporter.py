import json
from PIL import Image

"""
Color class with hash and equals methods
"""
class Color:

    def __init__(self, r, g, b):
        self.r = r
        self.g = g
        self.b = b

    def __eq__(self, other): 
        if not isinstance(other, Color):
            return NotImplemented

        return self.r == other.r and self.g == other.g and self.b == other.b

    def __hash__(self):
        return hash((self.r, self.g, self.b,))

"""
Simple wrapper for a {color : height} dictionnary, used by the custom PixelMapEncoder.
"""
class ColorMap:

    def __init__(self, colorHeights):
        self.colorHeights = colorHeights

"""
Wrapper for the pixelMap and the colorMap
"""
class FullMap:

    def __init__(self, pixelMap, colorMap):
        self.pixelMap = pixelMap
        self.colorMap = colorMap


def encodeColorHeight(color, height):
    return {"r": color.r, "g":color.g, "b":color.b, "h":height}

class ColorMapEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, ColorMap):
            """
            Serialized as an array of {r, g, b, h} objects.
            """
            return [encodeColorHeight(color, obj.colorHeights[color]) for color in obj.colorHeights.keys()]
        return json.JSONEncoder.default(self, obj)


class FullMapEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, FullMap):
            return {"pixels": FullMapEncoder.default(self, obj.pixelMap), "colorMap": ColorMapEncoder.default(self, obj.colorMap)}

        if isinstance(obj, Color):
            return {"r": obj.r, "g": obj.g, "b": obj.b}

        if isinstance(obj, dict):
            return obj
        return json.JSONEncoder.default(self, obj)


def generate_color_map(image, pixel_heights):
    pixelMap = {}
    colorHeights = {}
    with Image.open(image, 'r') as im:
        pixel_values = list(im.getdata())
        image_size = im.size

    for i in range(image_size[1]):
        pixels = {}
        for j in range(image_size[0]):
            pixel_value = pixel_values[i * image_size[0] + j]
            color = Color(pixel_value[0], pixel_value[1], pixel_value[2])
            if pixel_value[3] != 0:
                pixels[j] = color
                if color not in colorHeights:
                    colorHeights[color] = pixel_heights[i][j]

        pixelMap[i] = pixels

    fullMap = FullMap(pixelMap, ColorMap(colorHeights))
    print(fullMap)
    return json.dumps(fullMap, cls=FullMapEncoder)
