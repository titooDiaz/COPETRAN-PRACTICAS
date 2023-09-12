from django.shortcuts import render
from django.views.generic.base import View
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import PersonasForm

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
        
        contexto = {
            'form': form,
            'url': 0,
        }
        return render(request, 'components/index.html', contexto )