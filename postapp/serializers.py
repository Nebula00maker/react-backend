from .models import *
from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    poster = serializers.ReadOnlyField(source='poster.username')
    poster_id = serializers.ReadOnlyField(source='poster.id')
    class Meta:
        model = Post
        fields = ['id', 'title', 'category', 'url', 'image', 'description', 'poster', 'poster_id', 'created_at']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'category', 'image', 'description', 'created_at']