from django.urls import path
from .import views



urlpatterns = [
    path("home", views.home, name = "home"),
    path("adv", views.adv, name = "adv"),
    path('process_number/', views.process_number, name='process_number')
] 
