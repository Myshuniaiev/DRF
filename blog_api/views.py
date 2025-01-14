from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import SAFE_METHODS, IsAuthenticatedOrReadOnly, BasePermission


class PostUserWritePermission(BasePermission):
    message = 'Editiong posts is restricted to the quthor only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.author == request.user


class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView, PostUserWritePermission):
    permission_classes = [PostUserWritePermission]
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer
