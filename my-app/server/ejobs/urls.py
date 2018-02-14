from django.conf.urls import url, include
from . import views

app_name = 'ejobs'

urlpatterns = [
    url(r'^users/?$', views.UserList.as_view()),
    url(r'^register/?$', views.Register.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/?$', views.UserProfile.as_view()),
    url(r'yourposts/?$', views.GetUserPosts.as_view()),
    url(r'^posts/?$', views.PostList.as_view()),
    url(r'^posts/create/?$', views.PostCreate.as_view()),
    url(r'^posts/(?P<pk>[0-9]+)/?$', views.PostDetail.as_view()),
    url(r'^posts/(?P<post_id>[0-9]+)/comments/?$', views.CommentList.as_view()),
    url(r'^posts/(?P<post_id>[0-9]+)/comments/create?$', views.CreateComment.as_view()),
    url(r'^posts/(?P<post_id>[0-9]+)/comments/(?P<pk>[0-9]+)/?$', views.CommentDetail.as_view()),
    ]
