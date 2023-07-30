from django.shortcuts import render, redirect
from .models import *
from .forms import RegistroForm


def register(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirige a la página de inicio de sesión después del registro
    else:
        form = RegistroForm()
    return render(request, 'login/templates/register.html', {'form': form})

def login(request):
    return render(request, 'login/templates/login.html')
