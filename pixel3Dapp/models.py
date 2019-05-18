from django.db import models

# Create your models here.
class Sprite(models.Model):
    name = models.CharField(max_length=200)
    sprite = models.FileField(upload_to="sprites", blank=True)
    model3d = models.FileField(upload_to="models3d", blank=True)
    rgb_array = [] # Field declared as a Sprite field, but not stored in the database.
