from django.test import TestCase
from rest_framework import status

from .test_sprite import UploadTestFile

from pixel3Dapp.models import Sprite
from pixel3Dapp.models import ColorMap

def computeRealMaxHeight(colorMap):
    return max([colorMapItem.h for colorMapItem in colorMap.colorMapItems.all()])

class EditColorMapTests(TestCase):

    def testUpdateColorMapItems(self):

        with UploadTestFile(self) as testFile:
            testFile.process()

            sprite = Sprite.objects.get(id=testFile.uploadResponse.data["id"])

            colorMap = sprite.colorMap

            self.assertIsNotNone(colorMap)

            self.assertNotEqual(len(colorMap.colorMapItems.all()), 0)

            newColorMap = {"colorMapItems": []}
            for colorMapItem in colorMap.colorMapItems.all():
                newColorMap["colorMapItems"].append(
                        {
                            "id": colorMapItem.id,
                            "r": colorMapItem.r,
                            "g": colorMapItem.g,
                            "b": colorMapItem.b,
                            "h": colorMap.maxHeight - colorMapItem.h
                        })

            colorMapItemHeights = {colorMapItem["id"]: colorMapItem["h"] for colorMapItem in newColorMap["colorMapItems"]}

            updateResponse = self.client.patch("/api/color_maps/" + str(colorMap.id) + "/", newColorMap, content_type="application/json")

            self.assertIs(updateResponse.status_code, status.HTTP_200_OK)

            colorMap = Sprite.objects.get(id = sprite.id).colorMap

            self.assertEqual(len(colorMap.colorMapItems.all()), len(colorMapItemHeights))

            for colorMapItem in colorMap.colorMapItems.all():
                self.assertEqual(colorMapItem.h, colorMapItemHeights[colorMapItem.id])


    def testUpdatePixelSize(self):
        with UploadTestFile(self) as testFile:

            testFile.process()

            colorMap = Sprite.objects.get(id = testFile.uploadResponse.data["id"]).colorMap

            updateResponse = self.client.patch("/api/color_maps/" + str(colorMap.id) + "/", {"pixelSize": 20}, content_type="application/json")

            self.assertIs(updateResponse.status_code, status.HTTP_200_OK)


    def testUpdateMaxHeight(self):
        with UploadTestFile(self) as testFile:

            testFile.process()

            colorMap = Sprite.objects.get(id = testFile.uploadResponse.data["id"]).colorMap

            self.assertEqual(computeRealMaxHeight(colorMap), ColorMap.defaultMaxHeight)

            updateResponse = self.client.patch("/api/color_maps/" + str(colorMap.id) + "/", {"maxHeight": 20}, content_type="application/json")

            self.assertIs(updateResponse.status_code, status.HTTP_200_OK)

            # Reprocess the sprite with the new max height
            testFile.process()

            colorMap = Sprite.objects.get(id = testFile.uploadResponse.data["id"]).colorMap
            self.assertEqual(computeRealMaxHeight(colorMap), 20)

