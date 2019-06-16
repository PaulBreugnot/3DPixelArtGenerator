from django.db import models
from .pixel_map import PixelMap
from .color_map import ColorMap

# Create your models here.

class Sprite(models.Model):
    name = models.CharField(max_length=200)
    sprite = models.FileField(upload_to="sprites", blank=True)
    model3d = models.FileField(upload_to="models3d", blank=True)
    pixelMap = models.ForeignKey(PixelMap, on_delete=models.SET_NULL, null=True, blank=True)
    colorMap = models.ForeignKey(ColorMap, on_delete=models.SET_NULL, null=True, blank=True) 
#    heightMap = models.TextField(blank=True)
#    rgb_array = [] # Field declared as a Sprite field, but not stored in the database.

