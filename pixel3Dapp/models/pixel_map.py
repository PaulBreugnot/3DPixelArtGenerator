from django.db import models


class Color(models.Model):
    r = models.IntegerField()
    g = models.IntegerField()
    b = models.IntegerField()

class PixelMap(models.Model):
    width = models.IntegerField()
    height = models.IntegerField()

class PixelRow(models.Model):
    pixelMap = models.ForeignKey(PixelMap, on_delete=models.CASCADE, related_name="rows")
    y = models.IntegerField()

class Pixel(models.Model):
    pixelRow = models.ForeignKey(PixelRow, on_delete=models.CASCADE, related_name="pixels")
    x = models.IntegerField()
    color = models.OneToOneField(Color, on_delete=models.SET_NULL, null=True)

def unserializePixelMap(pixelMapObject):
    pixelMap = PixelMap(width = pixelMapObject.width, height = pixelMapObject.height)
    pixelMap.save()

    for row_index in pixelMapObject.pixels.keys():
        pixelRow = PixelRow(pixelMap = pixelMap, y = row_index)
        pixelRow.save()
        for column_index in pixelMapObject.pixels[row_index].keys():
            colorItem = pixelMapObject.pixels[row_index][column_index]

            color = Color(r = colorItem.r, g = colorItem.g, b = colorItem.b)
            color.save()

            pixel = Pixel(pixelRow = pixelRow, x = column_index, color = color)
            pixel.save()

    return pixelMap
