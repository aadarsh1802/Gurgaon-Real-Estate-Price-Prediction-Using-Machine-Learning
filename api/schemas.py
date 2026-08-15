from pydantic import BaseModel
import joblib

model = joblib.load(
    r"C:\Users\aadarsh kumar verma\Data science\gurgaon-property-price-prediction\models\df.pkl"
)

columns = model.columns.tolist()

#print(columns)


class PropertyInput(BaseModel):
    property_type: str
    sector: str
    bedRoom: int
    bathroom: int
    balcony: str
    additionalRoom: str
    agePossession: str
    built_up_area: int
    luxury_category: str
    floor_cat: str    