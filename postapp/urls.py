from django.urls import path
from .views import *


urlpatterns = [
    path('post', PostList.as_view()),
    path('post/<int:pk>', PostIteam.as_view()),
    path('product', ProductList.as_view()),
    path('product/<int:pk>', ProductDetail.as_view()),
    path('login', login),
    path('sign-up', signup),
]
