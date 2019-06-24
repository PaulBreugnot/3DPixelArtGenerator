from django.urls import include, path

from . import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'sprites', views.SpriteSet)
router.register(r'color_maps', views.ColorMapSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.index, name='index'),
]
