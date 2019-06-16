"""
Module used to encore an image into a pixel map.
"""

from PIL import Image

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

class PixelMap:

    def __init__(self, width, height, pixels):
        self.width = width
        self.height = height
        self.pixels = pixels

def generatePixelMap(image):
    pixels = {}

    with Image.open(image, 'r') as im:
        pixel_values = list(im.getdata())
        image_size = im.size

    for i in range(image_size[1]):
        row = {}
        for j in range(image_size[0]):
            pixel_value = pixel_values[i * image_size[0] + j]
            color = Color(pixel_value[0], pixel_value[1], pixel_value[2])
            if pixel_value[3] != 0:
                row[j] = color

        pixels[i] = row

    return PixelMap(image_size[0], image_size[1], pixels)
