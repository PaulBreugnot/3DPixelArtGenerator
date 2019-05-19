import os

from django.shortcuts import render
from django.conf import settings
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response

from .serializers import SpriteSerializer
from .models import Sprite

def index(request):
    return render(request, 'pixel3d/index.html', {})

class SpriteSet(viewsets.ModelViewSet):
    queryset = Sprite.objects.all()
    serializer_class = SpriteSerializer

    def create(self, request):
        serializer = SpriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def partial_update(self, request, pk=None):
        sprite = Sprite.objects.filter(id=int(request.path.split("/")[-2]))
        if sprite.exists():
            serializer = SpriteSerializer(sprite.get(), data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)


    def destroy(self, request, pk=None):

        spriteToDestroy = Sprite.objects.filter(id=int(request.path.split("/")[-2]))
        if spriteToDestroy.exists():
            filePath = os.path.join(settings.MEDIA_ROOT, spriteToDestroy.get().sprite.name)
            deleted_rows = spriteToDestroy.delete()

            if deleted_rows[0] > 0:
                if(os.path.exists(filePath)):
                    os.remove(filePath)
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)
