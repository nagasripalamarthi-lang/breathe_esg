from django.urls import path
from .views import electricity_data,travel_data,fuel_data
urlpatterns = [path('electricity/',electricity_data),path('travel/',travel_data),path('fuel/',fuel_data),]
