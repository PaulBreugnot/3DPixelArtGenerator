import json
from PIL import Image

class PixelArray:

    def __init__(self, pixelRows):
        self.pixelRows = pixelRows

class PixelRow:

    def __init__(self, x, pixels):
        self.x = x
        self.pixels = pixels

class Pixel:

    def __init__(self, y, color):
        self.y = y
        self.color = color

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

class ColorMap:

    def __init__(self, colorHeights):
        self.colorHeights = colorHeights

class FullMap:

    def __init__(self, pixelArray, colorMap):
        self.pixelArray = pixelArray
        self.colorMap = colorMap

def encodePixel(pixel):
    return {str(pixel.y): {"r": pixel.color.r, "g": pixel.color.g, "b": pixel.color.b}}

class PixelArrayEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, PixelArray):
            return {str(row.x): [encodePixel(pixel) for pixel in row.pixels] for row in obj.pixelRows}
        # Let the base class default method raise the TypeError
        return json.JSONEncoder.default(self, obj)


def encodeColorHeight(color, height):
    return {"r": color.r, "g":color.g, "b":color.b, "h":height}

class ColorMapEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, ColorMap):
            return [encodeColorHeight(color, obj.colorHeights[color]) for color in obj.colorHeights.keys()]
        return json.JSONEncoder.default(self, obj)


class FullMapEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, FullMap):
            return {"pixels": PixelArrayEncoder.default(self, obj.pixelArray), "colorMap": ColorMapEncoder.default(self, obj.colorMap)}
        return json.JSONEncoder.default(self, obj)

def generate_color_map(image, pixel_heights):
    pixelRows = []
    colorHeights = {}
    with Image.open(image, 'r') as im:
        pixel_values = list(im.getdata())
        image_size = im.size

    for i in range(image_size[1]):
        pixels = []
        for j in range(image_size[0]):
            pixel_value = pixel_values[i * image_size[0] + j]
            color = Color(pixel_value[0], pixel_value[1], pixel_value[2])
            if pixel_value[3] != 0:
                pixels.append(Pixel(j, color))
                if color not in colorHeights:
                    colorHeights[color] = pixel_heights[i][j]

        pixelRows.append(PixelRow(i, pixels))

    fullMap = FullMap(PixelArray(pixelRows), ColorMap(colorHeights))

    return json.dumps(fullMap, cls=FullMapEncoder)
