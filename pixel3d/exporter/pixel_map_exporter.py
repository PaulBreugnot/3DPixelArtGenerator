"""
Module used to encore an image into a pixel map.
"""

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


