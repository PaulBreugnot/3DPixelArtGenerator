from django.db import models
from .sprite import Sprite


class PixelMap(models.Model):
    sprite = models.OneToOneField(Sprite, on_delete=models.CASCADE, related_name="pixelMap", default=None, null=True)
    width = models.IntegerField()
    height = models.IntegerField()

class PixelRow(models.Model):
    pixelMap = models.ForeignKey(PixelMap, on_delete=models.CASCADE, related_name="rows")
    y = models.IntegerField()

class Pixel(models.Model):
    pixelRow = models.ForeignKey(PixelRow, on_delete=models.CASCADE, related_name="pixels")
    x = models.IntegerField()

class Color(models.Model):
    pixel = models.OneToOneField(Pixel, on_delete=models.CASCADE, default=None, null=True)
    r = models.IntegerField()
    g = models.IntegerField()
    b = models.IntegerField()


def unserializePixelMap(pixelMapObject, sprite):
    pixelMap = PixelMap(sprite = sprite, width = pixelMapObject.width, height = pixelMapObject.height)
    pixelMap.save()

    for row_index in pixelMapObject.pixels.keys():
        pixelRow = PixelRow(pixelMap = pixelMap, y = row_index)
        pixelRow.save()
        for column_index in pixelMapObject.pixels[row_index].keys():
            colorItem = pixelMapObject.pixels[row_index][column_index]

            pixel = Pixel(pixelRow = pixelRow, x = column_index)
            pixel.save()

            color = Color(pixel = pixel, r = colorItem.r, g = colorItem.g, b = colorItem.b)
            color.save()

    return pixelMap
