from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.http.response import JsonResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import PersonasForm
from .models import Personas

class personas(View):
    def get(self, request, *args, **kwargs):
        form = PersonasForm()
        contexto = {
            'form': form,
            'url': 0,
        }
        return render(request, 'components/index.html', contexto )

    def post(self, request, *args, **kwargs):
        form = PersonasForm(request.POST)
        if form.is_valid():
            nueva_persona = form.save(commit=False)
            nueva_persona.author = request.user
            form.save()
        return redirect('home')
    
def list_personas(request):
    personas = list(Personas.objects.values())#formato json
    data = {'personas': personas}
    return JsonResponse(data)