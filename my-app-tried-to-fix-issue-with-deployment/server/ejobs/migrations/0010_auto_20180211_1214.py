# Generated by Django 2.0.2 on 2018-02-11 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ejobs', '0009_auto_20180210_1332'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='lat',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='lng',
        ),
        migrations.AddField(
            model_name='profile',
            name='address',
            field=models.CharField(default=2, max_length=200),
            preserve_default=False,
        ),
    ]
