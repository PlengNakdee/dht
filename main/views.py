from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def jokes(request):
    return render(request, 'jokes.html')

def card(request):
    return render(request, 'card.html')
