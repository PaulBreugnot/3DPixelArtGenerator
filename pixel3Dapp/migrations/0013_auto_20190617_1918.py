# Generated by Django 2.2.2 on 2019-06-17 19:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pixel3Dapp', '0012_auto_20190617_1854'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pixel',
            name='color',
        ),
        migrations.AddField(
            model_name='color',
            name='pixel',
            field=models.OneToOneField(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='pixel3Dapp.Pixel'),
        ),
    ]