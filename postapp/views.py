from django.shortcuts import render
from rest_framework import generics, permissions, status
from .serializers import *
from .models import *
from rest_framework.validators import ValidationError
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.db import IntegrityError
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

# Create your views here.
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(poster=self.request.user)

class PostIteam(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def delete(self, request, *args, **kwargs):
        post = Post.objects.filter(id=kwargs['pk'])
        if post.exists():
            return self.destroy(request, *args, **kwargs)
        else:
            raise ValidationError('Post not found', status=404)


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def delete(self, request, *args, **kwargs):
        product = Product.objects.filter(id=kwargs['pk'])
        if product.exists():
            return self.destroy(request, *args, **kwargs)
        else:
            raise ValidationError('Product not found', status=404)

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            user = User.objects.create_user(data['username'], password=data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return JsonResponse({'token': str(token)}, status = status.HTTP_201_CREATED)
        except IntegrityError:
            return JsonResponse({'error': 'Username already exists'}, status = status.HTTP_400_BAD_REQUEST)
        
@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        user = authenticate(request, username=data['username'], password=data['password'])
        if user is None:
            return JsonResponse({'error': 'Email or password is incorrect'}, status = status.HTTP_400_BAD_REQUEST)
        else:
            try:
                token = Token.objects.get(user=user)
            except:
                token = Token.objects.create(user=user)
            return JsonResponse({'token': str(token)}, status = status.HTTP_200_OK)


# Serve React Frontend
class FrontendView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

# API root view
@csrf_exempt
def api_root(request):
    return JsonResponse({
        'message': 'Blog API',
        'endpoints': {
            'posts': '/api/post',
            'products': '/api/product',
            'admin': '/admin',
            'frontend': '/'
        }
    })