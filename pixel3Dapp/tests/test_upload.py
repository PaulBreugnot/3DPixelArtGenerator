import os
from io import BytesIO

from django.test import TestCase
from django.core.files.images import ImageFile
from rest_framework import status
from django.conf import settings

from pixel3Dapp.models import Sprite

class UploadSpriteTests(TestCase):

    # Utils
    def upload_test_file(self):
        with open(os.path.join(os.path.dirname(__file__), "dardargnan.png"),"r+b") as sprite:
            response = self.client.post("/api/sprites/", {'name' : 'test_file', 'sprite' : sprite })
        return response

    def uploaded_test_file_path(self, upload_response):
        fileName = upload_response.data["sprite"].split("/")[-1]
        return os.path.join(settings.MEDIA_ROOT, "sprites", fileName)

    # Tests

    def test_upload_sprite(self):
        response = self.upload_test_file()

        self.assertIs(response.status_code, status.HTTP_201_CREATED)

        filePath = self.uploaded_test_file_path(response)
        self.assertIs(os.path.exists(filePath), True)

        os.remove(filePath)
        self.assertIs(os.path.exists(filePath), False)

    def test_no_error_when_file_not_found(self):
        # upload a test sprite
        response = self.upload_test_file()
        filePath = self.uploaded_test_file_path(response)

        # delete it
        os.remove(filePath)

        # No internal error should occur (otherwise, all the request crashes)
        get_response = self.client.get("/api/sprites/")
        self.assertIs(get_response.status_code, status.HTTP_200_OK)
