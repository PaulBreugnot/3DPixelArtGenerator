from django.db import models


class ColorMap(models.Model):
    pass

class ColorMapItem(models.Model):
    colorMap = models.ForeignKey(ColorMap, on_delete=models.CASCADE, related_name="colorMapItems")
    r = models.IntegerField()
    g = models.IntegerField()
    b = models.IntegerField()
    h = models.IntegerField()

def unserializeColorMap(colorMapArray):
    colorMap = ColorMap()
    colorMap.save()

    for color in colorMapArray:
        colorMapItem = ColorMapItem(colorMap = colorMap, r = color["r"], g = color["g"], b = color["b"],  h = color["h"])
        colorMapItem.save()

    return colorMap
