from django.shortcuts import render, redirect
from .models import CustomUser
from .forms import RegistroForm

def mi_vista(request):
    usuarios = CustomUser.objects.all()
    contexto = {
        'url': 1,
        'users': usuarios,
    }
    return render(request, 'users/users_table.html', contexto)
