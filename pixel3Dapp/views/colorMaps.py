from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response

from pixel3Dapp.models import ColorMap
from pixel3Dapp.serializers import ColorMapSerializer

class ColorMapSet(viewsets.ModelViewSet):
    queryset = ColorMap.objects.all()
    serializer_class = ColorMapSerializer

    def partial_update(self, request, pk=None):
        colorMap = ColorMap.objects.filter(id=pk)
        if colorMap.exists():
            serializer = ColorMapSerializer(colorMap.get(), data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)

