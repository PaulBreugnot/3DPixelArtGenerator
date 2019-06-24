from pixel3Dapp.models import ColorMap, ColorMapItem
from rest_framework import serializers

from pixel3Dapp.models import ColorMapItem

class ColorMapItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = ColorMapItem
        fields = ("id", "r", "g", "b", "h")
        extra_kwargs = {'id': {'read_only': False}}


class ColorMapSerializer(serializers.ModelSerializer):

    colorMapItems = ColorMapItemSerializer(many = True)

    class Meta:
        model = ColorMap
        fields = ("id", "colorMapItems", "pixelSize", "maxHeight" )

    def update(self, instance, validated_data):
       
        if "pixelSize" in validated_data:
            instance.pixelSize = validated_data.pop("pixelSize")

        if "maxHeight" in validated_data:
            instance.maxHeight = validated_data.pop("maxHeight")

        if "colorMapItems" in validated_data:
            colorMapItemsData = validated_data.pop("colorMapItems")
            for colorMapItemData in colorMapItemsData:
                colorMapItem = ColorMapItem.objects.get(id = colorMapItemData["id"])
                colorMapItem.h = colorMapItemData["h"]
                colorMapItem.save()

        instance.save()

        return instance


