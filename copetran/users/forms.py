from django import forms
from allauth.account.forms import PasswordField
from allauth.account.forms import SignupForm, LoginForm

class RegistroForm(SignupForm):
    email = forms.EmailField(widget=forms.EmailInput(attrs={
        'id': 'email',
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
    password1 = PasswordField(label=("Contraseña"), widget=forms.PasswordInput(attrs={
        'id': 'password1',
        'autocomplete': 'off',
        'placeholder': 'contraseña',
        'autocomplete': 'current-password',
        'required': True,
        'class': 'pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
    }))

    password2 = PasswordField(label=("Confirmar contraseña"), widget=forms.PasswordInput(attrs={
        'id': 'password2',
        'autocomplete': 'off',
        'placeholder': 'confirmar contraseña',
        'autocomplete': 'current-password',
        'required': True,
        'class': 'pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
    }))
    username = forms.CharField(widget=forms.TextInput(attrs={
        'id': 'username',
        'type': 'text',
        'autocomplete': 'off',
        'onkeyup': 'mayus(this)',
        'onkeypress': 'return nonum(event);',
        'title': 'Ingresa tu nombre de usuario',
        'name': 'username',
        'placeholder': 'nombre de usuario',
        'required': True,
        'class': 'pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
    }))
