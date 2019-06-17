from django.db import models

from .sprite import Sprite

class ColorMap(models.Model):
    sprite = models.OneToOneField(Sprite, on_delete=models.CASCADE, related_name="colorMap", default=None, null=True)
    pixelSize = models.FloatField(default = 10)
    maxHeight = models.FloatField(default = 10)

class ColorMapItem(models.Model):
    colorMap = models.ForeignKey(ColorMap, on_delete=models.CASCADE, related_name="colorMapItems")
    r = models.IntegerField()
    g = models.IntegerField()
    b = models.IntegerField()
    h = models.FloatField()

def unserializeColorMap(colorMapArray, sprite):
    colorMap = ColorMap(sprite = sprite)
    colorMap.save()

    for color in colorMapArray:
        colorMapItem = ColorMapItem(colorMap = colorMap, r = color["r"], g = color["g"], b = color["b"],  h = color["h"])
        colorMapItem.save()

    return colorMap
