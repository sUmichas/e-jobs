from .serializers import  UserSerializer, PostSerializer,\
                            CommentSerializer, PostCreateSerializer,\
                            CommentCreateSerializer
from rest_framework import generics, mixins

from .models import  Service,  Comment
from rest_framework.parsers import  JSONParser
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.permissions import AllowAny

from .permissions import IsOwnerOrReadOnly

from django.contrib.staticfiles import views
# Create your views here.seria


class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (AllowAny,)


class UserProfile(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)


class Register(generics.GenericAPIView, mixins.CreateModelMixin):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class PostList(generics.ListAPIView):
    serializer_class = PostSerializer
    queryset = Service.objects.all()
    parser_classes = (JSONParser,)
    permission_classes = (AllowAny,)


class PostCreate(generics.CreateAPIView):
    serializer_class = PostCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Service.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    serializer_class = PostSerializer

    def perform_create(self,serializer):
        serializer.save(user_id=self.request.user)


class GetUserPosts(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        queryset = Service.objects.all()
        user_name = self.request.user.username
        if user_name is not None:
            queryset = queryset.filter(user_name=user_name)
        return queryset

class CommentList(generics.ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        queryset = Comment.objects.all()
        post_id = self.kwargs.get('post_id', None)
        if post_id is not None:
            queryset = queryset.filter(post=post_id)
        return queryset


class CreateComment(generics.CreateAPIView):
    serializer_class = CommentCreateSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly)

    def perform_create(self,serializer):
        serializer.save(user_id=self.request.user)



