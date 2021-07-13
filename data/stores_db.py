import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
with open("stores.json", mode = "r", encoding = "utf-8") as file:
    data = json.load(file)
for store in data:
    doc_ref = db.collection("stores").document(store["storeRealId"])
    doc_ref.set(store)