from django.urls import path, include
from .views import personas

#bxdegfpiqbqksich
urlpatterns = [
    path('', personas.as_view(), name='home'), 
]