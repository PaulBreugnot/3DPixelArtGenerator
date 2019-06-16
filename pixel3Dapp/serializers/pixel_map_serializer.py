from pixel3Dapp.models import ColorMap, ColorMapItem
from rest_framework import serializers

from pixel3Dapp.models.pixel_map import Color, PixelMap

class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Color
        fields = ("r", "g", "b")


class PixelsSerializer(serializers.BaseSerializer):

    def to_representation(self, rows):
        rep = {}
        for row in rows:
            row_rep = {}
            for pixel in row.pixels.all():
                colorSerializer = ColorSerializer(pixel.color)
                row_rep[pixel.x] = colorSerializer.data
            rep[row.y] = row_rep
        return rep


class PixelMapSerializer(serializers.ModelSerializer):

    class Meta:
        model = PixelMap
        fields = ("width", "height", "rows")

    def to_representation(self, obj):
        rep = super().to_representation(obj)

        pixelsSerializer = PixelsSerializer(self)
        rep["rows"] = pixelsSerializer.to_representation(obj.rows.all())

        return rep

