from fastapi import APIRouter
import joblib
import pandas as pd
import numpy as np
from api.schemas import PropertyInput


router = APIRouter()


model = joblib.load('C:\\Users\\aadarsh kumar verma\\Data science\\gurgaon-property-price-prediction\\models\\model1.pkl')
 
@router.post("/predict")
def predict_price(data: PropertyInput):

    input_data = pd.DataFrame([{
    "property_type": data.property_type,
    "sector": data.sector,
    "bedRoom": data.bedRoom,
    "bathroom": data.bathroom,
    "balcony": data.balcony,
    "additionalRoom": data.additionalRoom,
    "agePossession": data.agePossession,
    "built_up_area": data.built_up_area,
    "luxury_category": data.luxury_category,
    "floor_cat": data.floor_cat
}])
    prediction = np.expm1(model.predict(input_data)[0])

    return {
        "predicted_price": float(prediction)
    }
    
   