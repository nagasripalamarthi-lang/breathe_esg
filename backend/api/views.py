import pandas as pd
from django.http import JsonResponse
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"


def electricity_data(request):
    file_path = DATA_DIR / "utility_electricity.csv"
    df = pd.read_csv(file_path)
    df = df.fillna("")
    return JsonResponse(df.to_dict(orient="records"), safe=False)


def travel_data(request):
    file_path = DATA_DIR / "travel_data.csv"
    df = pd.read_csv(file_path)
    df = df.fillna("")
    return JsonResponse(df.to_dict(orient="records"), safe=False)


def fuel_data(request):
    file_path = DATA_DIR / "sap_fuel_procurement.csv"
    df = pd.read_csv(file_path)
    df = df.fillna("")
    return JsonResponse(df.to_dict(orient="records"), safe=False)