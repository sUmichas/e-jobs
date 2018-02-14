# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-02-04 18:54
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.IntegerField(default=999)),
                ('lng', models.FloatField()),
                ('lat', models.FloatField()),
                ('job_title', models.CharField(max_length=150)),
                ('job_description', models.TextField(max_length=500)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ReviewUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('rate', models.IntegerField(choices=[(5, 5), (4, 4), (3, 3), (2, 2), (1, 1)])),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('post_id', models.IntegerField(default=0)),
                ('place', models.CharField(max_length=100)),
                ('date_posted', models.DateTimeField(auto_now=True)),
                ('urgency_level', models.CharField(choices=[('VH', 'Very High'), ('H', 'High'), ('N', 'Normal'), ('L', 'Low'), ('VL', 'Very Low')], max_length=2)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
