import os
from io import BytesIO

from django.test import TestCase
from django.core.files.images import ImageFile
from rest_framework import status
from django.conf import settings

from pixel3Dapp.models import Sprite
import pixel3d.pixel3dgenerator as pixel3dGenerator

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
            self.assertIs(uploadedFile.uploadResponse.status_code, status.HTTP_201_CREATED)
            self.assertIs(os.path.exists(uploadedFile.spriteFilePath), True)
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

            uploadedFile.process()

            self.assertIs(uploadedFile.processResponse.status_code, status.HTTP_200_OK)
            sprite = Sprite.objects.get(id=uploadedFile.uploadResponse.data["id"])
            self.assertEqual(pixel3dGenerator.generateHeightMap(uploadedFile.spriteFilePath, 30), sprite.heightMap)

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
