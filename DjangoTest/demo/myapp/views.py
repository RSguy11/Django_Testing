from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
import json
from .testLogic import is_even

# Create your views here.

def home(request):
    return render(request, "base.html")

def adv(request):
    return render(request, "AdvancedPage.html")

def process_number(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        number = data.get('number')
        
        result = is_even(int(number))
        print("test Result", result)

        return JsonResponse({'result':result})
    
    print("error")
    return JsonResponse({'error' : 'Invalid method or not an AJAX request'})
