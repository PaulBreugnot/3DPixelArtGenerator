import os
from .models import Sprite
from rest_framework import serializers

import pixel3d.utils.image
from django.conf import settings

class SpriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sprite
        fields = [
            'name', # Name of the sprite
            'sprite', # URL of the original file
            'model3d', # URL of the generated STL
            'rgb_array' # The RGB array representation of the original sprite
            ]

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
