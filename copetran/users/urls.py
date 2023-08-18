from django.urls import path, include
from . import views
from django.contrib import admin

#bxdegfpiqbqksich
urlpatterns = [
    path("admin/", admin.site.urls),
    path('accounts/', include('allauth.urls')),

]