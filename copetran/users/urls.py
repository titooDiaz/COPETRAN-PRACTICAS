from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='registro'),
    path('login/', views.login, name='login'),
]
