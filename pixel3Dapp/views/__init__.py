from .sprites import SpriteSet
from .colorMaps import ColorMapSet


def index(request):
    return render(request, 'pixel3d/index.html', {})
