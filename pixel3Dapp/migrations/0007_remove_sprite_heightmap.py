# Generated by Django 2.2.2 on 2019-06-16 17:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pixel3Dapp', '0006_auto_20190616_1647'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sprite',
            name='heightMap',
        ),
    ]
