from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [
    path('users/', include('users.urls')),
    path('', include('personas.urls')),
]
