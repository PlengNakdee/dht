from django.urls import path
from main import views

urlpatterns = [
    path('', views.index),
    path('jokes/', views.jokes),
    path('card/', views.card)
]