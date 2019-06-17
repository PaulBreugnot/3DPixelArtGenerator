import os
from io import BytesIO

from django.test import TestCase
from django.core.files.images import ImageFile
from rest_framework import status
from django.conf import settings
from rest_framework.renderers import JSONRenderer
from django.db import models

from pixel3Dapp.models import Sprite
from pixel3Dapp.serializers import ColorMapSerializer
from pixel3Dapp.serializers import PixelMapSerializer

import pixel3d.pixel3dgenerator as pixel3dGenerator

from pixel3Dapp.models.color_map import ColorMap, ColorMapItem, unserializeColorMap 
from pixel3Dapp.models.pixel_map import PixelMap, PixelRow, Pixel, Color, unserializePixelMap 

class UploadTestFile:
    # This context manager will ensure that test files are always deleted
    # even if an exception occured during the test.
    def __init__(self, testCase):
        self.testCase = testCase
        self.uploadResponse = None
        self.spriteFileName = None
        self.spriteFilePath = None
        self.processResponse = None
        self.exportResponse = None
        self.modelFileName = None
        self.modelFilePath = None

    def __enter__(self):
        with open(os.path.join(os.path.dirname(__file__), "dardargnan.png"),"r+b") as sprite:
            self.uploadResponse = self.testCase.client.post("/api/sprites/", {'name' : 'test_sprite', 'sprite' : sprite })

        self.spriteFileName = os.path.basename(self.uploadResponse.data["sprite"])
        self.spriteFilePath = os.path.join(settings.MEDIA_ROOT, "sprites", self.spriteFileName)

        return self

    def __exit__(self, *args):
        if self.spriteFilePath and os.path.exists(self.spriteFilePath):
            os.remove(self.spriteFilePath)
        if self.modelFilePath and os.path.exists(self.modelFilePath):
            os.remove(self.modelFilePath)

    def process(self):
        uploadedSpriteId = str(self.uploadResponse.data["id"])
        self.processResponse = self.testCase.client.put("/api/sprites/" + uploadedSpriteId + "/process/")

    def export(self):
        uploadedSpriteId = str(self.uploadResponse.data["id"])
        self.exportResponse = self.testCase.client.put("/api/sprites/" + uploadedSpriteId + "/export/")
        self.modelFileName = os.path.basename(self.exportResponse.data["model3d"])
        self.modelFilePath = os.path.join(settings.MEDIA_ROOT, "models3d", self.modelFileName)


class UploadSpriteTests(TestCase):

    # Utils
    def upload_test_file(self):
        with open(os.path.join(os.path.dirname(__file__), "dardargnan.png"),"r+b") as sprite:
            response = self.client.post("/api/sprites/", {'name' : 'test_sprite', 'sprite' : sprite })
        return response

    def uploaded_test_file_path(self, upload_response):
        fileName = upload_response.data["sprite"].split("/")[-1]
        return os.path.join(settings.MEDIA_ROOT, "sprites", fileName)



    # Tests

    def test_upload_sprite(self):
        uploadedTestFilePath = ""
        with UploadTestFile(self) as uploadedFile :
            # Assert that the query succeeded
            self.assertIs(uploadedFile.uploadResponse.status_code, status.HTTP_201_CREATED)

            # Assert that the file has been uploaded
            self.assertIs(os.path.exists(uploadedFile.spriteFilePath), True)

            # Retrieves the created object
            sprite = Sprite.objects.get(id=uploadedFile.uploadResponse.data["id"])

            # Asserts that the pixel map has been created
            self.assertIsNotNone(sprite.pixelMap)

            # Asserts that the pixel map is consistent
            checkPixelMap = unserializePixelMap(pixel3dGenerator.generatePixelMap(uploadedFile.spriteFilePath), None)
            checkPixelMapSerializer = PixelMapSerializer(checkPixelMap)
            spritePixelMapSerializer = PixelMapSerializer(sprite.pixelMap)

            self.assertEqual(JSONRenderer().render(spritePixelMapSerializer.data), JSONRenderer().render(checkPixelMapSerializer.data))


            uploadedTestFilePath = uploadedFile.spriteFilePath

        self.assertIs(os.path.exists(uploadedTestFilePath), False)

    def test_no_error_when_file_not_found(self):
        with UploadTestFile(self) as uploadedFile :
            # Deletes uploaded file
            os.remove(uploadedFile.spriteFilePath)

            # No internal error should occur (otherwise, all the request crashes)
            response = self.client.get("/api/sprites/")
            self.assertIs(response.status_code, status.HTTP_200_OK)

class RenameSpriteTests(TestCase):
    def test_rename_sprite(self):
        with UploadTestFile(self) as uploadedFile :
            self.assertEqual(uploadedFile.uploadResponse.data["name"], "test_sprite")

            uploadedSpriteId = str(uploadedFile.uploadResponse.data["id"])
            response = self.client.patch("/api/sprites/" + uploadedSpriteId + "/", {"name": "renamed_test_sprite"}, content_type="application/json")

            # Assert that the request went OK
            self.assertIs(response.status_code, status.HTTP_200_OK)

            # Assert that response contains updated name
            self.assertEqual(response.data["name"], "renamed_test_sprite")

            # Assert that updated name has been saved
            self.assertEqual(Sprite.objects.get(id=uploadedSpriteId).name, "renamed_test_sprite")

    def test_error_404_when_file_dont_exist(self):
        response = self.client.patch("/api/sprites/-1/", {"name": "renamed_test_sprite"}, content_type="application/json")

        self.assertIs(response.status_code, status.HTTP_404_NOT_FOUND)


class DeleteSpriteTests(TestCase):

    def test_delete_sprite(self):
        with UploadTestFile(self) as uploadedFile:

            # Process the file so that is has a colorMap
            uploadedFile.process()

            sprite = Sprite.objects.get(id=uploadedFile.uploadResponse.data["id"])

            # Sprite ID before delete
            uploadedSpriteId = str(uploadedFile.uploadResponse.data["id"])

            # ColorMap info befor delete
            self.assertIsNotNone(sprite.colorMap)
            colorMapId = sprite.colorMap.id
            colorMapItemIds = [colorMapItem.id for colorMapItem in sprite.colorMap.colorMapItems.all()]

            # PixelMap info before delete
            self.assertIsNotNone(sprite.pixelMap)
            pixelMapId = sprite.pixelMap.id

            pixelRows = [pixelRow for pixelRow in sprite.pixelMap.rows.all()]
            pixelRowIds = [pixelRow.id for pixelRow in pixelRows]

            pixels = []
            for pixelRow in pixelRows:
                for pixel in pixelRow.pixels.all():
                    pixels.append(pixel)

            pixelIds = [pixel.id for pixel in pixels]
            colorIds = [pixel.color.id for pixel in pixels]

            # Delete sprite (and all linked objects)
            deleteResponse = self.client.delete("/api/sprites/" + uploadedSpriteId + "/")
            self.assertIs(deleteResponse.status_code, status.HTTP_200_OK)

            # Check Sprite deleted
            with self.assertRaises(Sprite.DoesNotExist) :
                Sprite.objects.get(id = uploadedSpriteId)

            # Check ColorMap delete
            with self.assertRaises(ColorMap.DoesNotExist) :
                ColorMap.objects.get(id = colorMapId)

            for colorMapItemId in colorMapItemIds:
                with self.assertRaises(ColorMapItem.DoesNotExist):
                    ColorMapItem.objects.get(id = colorMapItemId)

            # Check PixelMap delete
            with self.assertRaises(PixelMap.DoesNotExist):
                PixelMap.objects.get(id = pixelMapId)

            for pixelRowId in pixelRowIds:
                with self.assertRaises(PixelRow.DoesNotExist):
                    PixelRow.objects.get(id = pixelRowId)

            for pixelId in pixelIds:
                with self.assertRaises(Pixel.DoesNotExist):
                    Pixel.objects.get(id = pixelId)

            for colorId in colorIds:
                with self.assertRaises(Color.DoesNotExist):
                    Color.objects.get(id = colorId)


    def test_delete_sprite_without_3d_model(self):
        with UploadTestFile(self) as uploadedFile :
            uploadedSpriteId = str(uploadedFile.uploadResponse.data["id"])
            response = self.client.delete("/api/sprites/" + uploadedSpriteId + "/")

            self.assertIs(response.status_code, status.HTTP_200_OK)

            self.assertIs(os.path.exists(uploadedFile.spriteFilePath), False)

    def test_error_404_when_file_dont_exist(self):
        response = self.client.delete("/api/sprites/-1/")

        self.assertIs(response.status_code, status.HTTP_404_NOT_FOUND)


class ProcessTest(TestCase):
    def test_process(self):
        with UploadTestFile(self) as uploadedFile :

            self.assertIs(uploadedFile.uploadResponse.status_code, status.HTTP_201_CREATED)

            uploadedFile.process()

            self.assertIs(uploadedFile.processResponse.status_code, status.HTTP_200_OK)
            sprite = Sprite.objects.get(id=uploadedFile.uploadResponse.data["id"])

            self.assertIsNotNone(sprite.colorMap)

            # Check default pixel size and max heights
            self.assertEqual(sprite.colorMap.pixelSize, 10)
            self.assertEqual(sprite.colorMap.maxHeight, 10)

            checkColorMap = unserializeColorMap(pixel3dGenerator.generateColorMap(uploadedFile.spriteFilePath, 10), None)
            checkColorMapSerializer = ColorMapSerializer(checkColorMap)

            spriteColorMapSerializer = ColorMapSerializer(sprite.colorMap)

            self.assertEqual(JSONRenderer().render(spriteColorMapSerializer.data), JSONRenderer().render(checkColorMapSerializer.data))

"""
class ExportTest(TestCase):

    def test_export(self):
        with UploadTestFile(self) as uploadedFile :
            uploadedFile.process()
            uploadedFile.export()

            self.assertIs(uploadedFile.exportResponse.status_code, status.HTTP_200_OK)

            self.assertTrue(os.path.exists(uploadedFile.modelFilePath))

            sprite = Sprite.objects.get(id=uploadedFile.uploadResponse.data["id"])
            self.assertIsNotNone(sprite.model3d)
            self.assertEqual(sprite.model3d.name, os.path.join("models3d", uploadedFile.modelFileName))
"""
