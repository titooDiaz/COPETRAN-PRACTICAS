from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

context = {
    "url": 0,
}

urlpatterns = [
    path('', TemplateView.as_view(template_name='components/index.html', extra_context=context), name='home'),
    path('users/', include('users.urls')),
]
