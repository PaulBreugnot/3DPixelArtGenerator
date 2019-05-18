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
