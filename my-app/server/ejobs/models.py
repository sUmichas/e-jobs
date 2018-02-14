from django.db import models
from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, primary_key=True, related_name='profile', on_delete=models.CASCADE)
    age = models.IntegerField(blank=True, null=True)
    address = models.CharField(max_length=200)
    job_title = models.CharField(blank=True, max_length=150)
    job_description = models.TextField(blank=True, max_length=500)
    GENDER = (
        ('M', 'Male'),
        ('F', 'Female')
    )
    gender = models.CharField(max_length=1, choices=GENDER)

    def __str__(self):
        return '%s %s %s' % (self.job_title, self.job_description, self.gender)

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)
            Token.objects.create(user=instance)


class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    user_name = models.CharField(max_length=100)
    post_id = models.IntegerField(default=0)
    place = models.CharField(max_length=100)
    date_posted = models.CharField(max_length=100)
    URGENCY_LEVEL = (
        ('VH', 'Very High'),
        ('H', 'High'),
        ('N', 'Normal'),
        ('L', 'Low'),
        ('VL', 'Very Low')
    )
    urgency_level = models.CharField(max_length=2, choices=URGENCY_LEVEL)

    def __str__(self):
        return '%s %s %s %s %s %s' % (self.title, self.description, self.place,
                                      self.date_posted, self.urgency_level, self.user_name)



class Comment(models.Model):
    user_name = models.CharField(max_length=100)
    post = models.ForeignKey(Service, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    date_posted = models.CharField(max_length=100)

    def __str__(self):
        return '%s %s %s %s' % (self.title, self.description, self.date_posted, self.user_name)

