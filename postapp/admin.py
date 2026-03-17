from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title','poster', 'created_at']
    search_fields=['title',]
    list_filter = ['created_at',]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'created_at']
    search_fields = ['name', 'category']
    list_filter = ['category', 'created_at']
    readonly_fields = ['created_at']