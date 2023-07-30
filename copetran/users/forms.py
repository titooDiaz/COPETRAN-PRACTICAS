from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class RegistroForm(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={
        'onkeyup': 'mayusEmail(this)',
        'autocomplete': 'off',
        'placeholder': 'correo electrónico',
        'required': True,
        'title': 'Ingrese un email válido',
        'class': 'pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
    }))
    nombre = forms.CharField(widget=forms.TextInput(attrs={
        'id': 'nombre',
        'type': 'text',
        'autocomplete': 'off',
        'onkeyup': 'mayus(this)',
        'onkeypress': 'return nonum(event);',
        'title': 'Ingresa tu nombre',
        'name': 'nombre',
        'placeholder': 'nombre',
        'required': True,
        'class': 'pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
    }))
    apellido = forms.CharField(widget=forms.TextInput(attrs={
        'id': 'apellido',
        'type': 'text',
        'autocomplete': 'off',
        'onkeyup': 'mayus(this)',
        'onkeypress': 'return nonum(event);',
        'title': 'Ingresa tu apellido',
        'name': 'apellido',
        'placeholder': 'apellido',
        'required': True,
        'class': 'pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
    }))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={
        'id': 'password1',
        'autocomplete': 'off',
        'placeholder': 'contraseña',
        'autocomplete': 'current-password',
        'required': True,
        'class': 'pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
    }))

    password2 = forms.CharField(widget=forms.PasswordInput(attrs={
        'id': 'password2',
        'autocomplete': 'off',
        'placeholder': 'confirmar contraseña',
        'autocomplete': 'current-password',
        'required': True,
        'class': 'pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
    }))
