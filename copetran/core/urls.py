from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='components/index.html'), name='home'),
    path('users/', include('users.urls')),
]
