import os
from pixel3Dapp.models import Sprite
from rest_framework import serializers

import pixel3d.utils.image
from django.conf import settings

from .color_map_serializer import ColorMapSerializer
from .pixel_map_serializer import PixelMapSerializer

class SpriteSerializer(serializers.ModelSerializer):

    colorMap = ColorMapSerializer(required=False)
    pixelMap = PixelMapSerializer(required=False)

    class Meta:
        model = Sprite
        fields = [
            'id',
            'name', # Name of the sprite
            'sprite', # URL of the original file
            'model3d', # URL of the generated STL
            'colorMap',
            'pixelMap'
            ]
#            'heightMap', # The JSON representation of pixel heights
#            'rgb_array' # The RGB array representation of the original sprite
 

    """
    def to_representation(self, instance):
        '''
        Overrides the parser to_representation function to compute the rgb_array
        representation of the sprite instance.
        '''
        rep = super().to_representation(instance)
        if os.path.exists(os.path.join(settings.MEDIA_ROOT, str(instance.sprite))) :
            rep['rgb_array'] = pixel3d.utils.image.imageToRGBarray(os.path.join(settings.MEDIA_ROOT, str(instance.sprite)))
        else :
            rep['rgb_array'] = []
        return rep
    """

    # def update(self, sprite, validated_data):
    #     sprite.name = validated_data.get('name', sprite.name)
    #     sprite.sprite = validated_data.get('sprite', sprite.sprite)
    #     sprite.model3d = validated_data.get('model3d', sprite.model3d)
    #     sprite.save()
    #     return sprite
