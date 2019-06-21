from pixel3Dapp.models import ColorMap, ColorMapItem
from rest_framework import serializers


class ColorMapItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = ColorMapItem
        fields = ("r", "g", "b", "h")

class ColorMapSerializer(serializers.ModelSerializer):

    colorMapItems = ColorMapItemSerializer(many = True, read_only = True)

    class Meta:
        model = ColorMap
        fields = ("colorMapItems", "pixelSize", "maxHeight" )
