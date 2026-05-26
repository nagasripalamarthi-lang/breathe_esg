from django.http import JsonResponse
import pandas as pd
import numpy as np
def electricity_data(request):
    df = pd.read_csv('data/utility_electricity.csv')
    df = df.replace({np.nan: None})
    data = df.head(10).to_dict(orient='records')
    return JsonResponse(data, safe=False)
def travel_data(request):
    df = pd.read_csv('data/travel_data.csv')
    df = df.replace({np.nan: None})
    data = df.head(10).to_dict(orient='records')
    return JsonResponse(data, safe=False)
def fuel_data(request):
    df = pd.read_csv('data/sap_fuel_procurement.csv')
    data = df.head(10).to_dict(orient='records')
    df = df.replace({np.nan: None})
    return JsonResponse(data, safe=False)
