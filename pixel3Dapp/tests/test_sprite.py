import os
from io import BytesIO

from django.test import TestCase
from django.core.files.images import ImageFile
from rest_framework import status
from django.conf import settings

from pixel3Dapp.models import Sprite

class UploadTestFile:
    # This context manager will ensure that test files are always deleted
    # even if an exception occured during the test.
    def __init__(self, testCase):
        self.testCase = testCase
        self.response = None
        self.fileName = None
        self.filePath = None

    def __enter__(self):
        with open(os.path.join(os.path.dirname(__file__), "dardargnan.png"),"r+b") as sprite:
            self.response = self.testCase.client.post("/api/sprites/", {'name' : 'test_sprite', 'sprite' : sprite })

        self.fileName = self.response.data["sprite"].split("/")[-1]
        self.filePath = os.path.join(settings.MEDIA_ROOT, "sprites", self.fileName)

        return self

    def __exit__(self, *args):
        if os.path.exists(self.filePath):
            os.remove(self.filePath)

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
            self.assertIs(uploadedFile.response.status_code, status.HTTP_201_CREATED)
            self.assertIs(os.path.exists(uploadedFile.filePath), True)
            uploadedTestFilePath = uploadedFile.filePath

        self.assertIs(os.path.exists(uploadedTestFilePath), False)

    def test_no_error_when_file_not_found(self):
        with UploadTestFile(self) as uploadedFile :
            # Deletes uploaded file
            os.remove(uploadedFile.filePath)

            # No internal error should occur (otherwise, all the request crashes)
            response = self.client.get("/api/sprites/")
            self.assertIs(response.status_code, status.HTTP_200_OK)

class RenameSpriteTests(TestCase):
    def test_rename_sprite(self):
        with UploadTestFile(self) as uploadedFile :
            self.assertEqual(uploadedFile.response.data["name"], "test_sprite")

            uploadedSpriteId = str(uploadedFile.response.data["id"])
            response = self.client.patch("/api/sprites/" + uploadedSpriteId + "/", {"name": "renamed_test_sprite"}, content_type="application/json")

            # Assert that the request went OK
            self.assertIs(response.status_code, status.HTTP_200_OK)

            # Assert that response contains updated name
            self.assertEqual(response.data["name"], "renamed_test_sprite")

            # Assert that updated name has been saved
            self.assertEqual(Sprite.objects.get(id=uploadedSpriteId).name, "renamed_test_sprite")
