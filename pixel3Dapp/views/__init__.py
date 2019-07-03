from .sprites import SpriteSet
from .colorMaps import ColorMapSet
from django.shortcuts import render


def index(request):
    return render(request, 'pixel3d/index.html', {})
