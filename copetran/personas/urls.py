from django.urls import path, include
from .views import personas, list_personas
from . import views

#bxdegfpiqbqksich
urlpatterns = [
    path('', personas.as_view(), name='home'),
    path('list_personas/', views.list_personas, name='lista_personas'),
]