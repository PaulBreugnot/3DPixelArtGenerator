import json
from PIL import Image
from .pixel_map_exporter import Color, generatePixelMap

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


def generateColorMap(image, pixel_heights):

    pixelMap = generatePixelMap(image)
    colorHeights = {}

    with Image.open(image, 'r') as im:
        pixel_values = list(im.getdata())
        image_size = im.size

    for i in range(image_size[1]):
        for j in range(image_size[0]):
            pixel_value = pixel_values[i * image_size[0] + j]
            color = Color(pixel_value[0], pixel_value[1], pixel_value[2])
            if pixel_value[3] != 0:
                if color not in colorHeights:
                    colorHeights[color] = pixel_heights[i][j]

    fullMap = FullMap(pixelMap, ColorMap(colorHeights))
    print(fullMap)
    return json.dumps(fullMap, cls=FullMapEncoder)
