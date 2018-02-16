from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User

from .models import Profile, Service, Comment


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('age', 'address', 'job_title',
                  'job_description', 'gender')


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)

    password = serializers.CharField(write_only=True, required=True, min_length=8)
    username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    first_name = serializers.CharField(required=True, allow_blank=False)
    last_name = serializers.CharField(required=True, allow_blank=False)
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password']
        )

        user.profile.age = int(profile_data.get('age', user.profile.age))
        user.profile.address = profile_data.get('address', user.profile.address)
        user.profile.job_description = profile_data.get('job_description', user.profile.job_description)
        user.profile.job_title = profile_data.get('job_title', user.profile.job_title)
        user.profile.gender = profile_data.get('gender', user.profile.gender)
        user.profile.save()
        return user

    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'first_name', 'last_name', 'password', 'profile'
        )


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = (
            'id', 'title', 'description', 'place', 'urgency_level', 'date_posted', 'user_name'
        )


class PostCreateSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField()

    class Meta:
        model = Service
        fields = (
            'title', 'description', 'place', 'urgency_level', 'date_posted', 'user_name'
        )
        read_only_fields = ('user_name',)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'id', 'title', 'description', 'user_name', 'post', 'date_posted'
        )


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'title', 'description', 'user_name', 'date_posted', 'post'
        )


