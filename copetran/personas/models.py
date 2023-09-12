from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
from django.utils import timezone

class Personas(models.Model):
    nombre = models.TextField()
    apellido = models.TextField()
    fecha_nacimiento = models.DateField()
    telefono = models.CharField(max_length=15)
    type_documento = models.TextField()
    #documento = models.TextField()
    email = models.EmailField(unique=True)
    ##No vistos##
    estado = models.BooleanField(default=True)
    created_on = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='creador_grado')

    def __str__(self):
        return self.nombre + self.apellido
