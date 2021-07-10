import requests
import json

url = "the restaurant location api"

payload="{\"query\":\"\",\"variables\":{}}"
headers = {
  "cURLData"
}

response = requests.request("GET", url, headers = headers, data = payload)
data = json.loads(response.text)
shopLists = data["features"]
lists = []

for shop in shopLists:
    shopId = (shop["properties"]["identifiers"]["storeIdentifier"][0]["identifierValue"])
    shopName = shop["properties"]["name"].replace("	","")
    latitude = float(shop["geometry"]["coordinates"][0])
    longtitude = float(shop["geometry"]["coordinates"][1])
    postCode = shop["properties"]["postcode"]
    address = shop["properties"]["addressLine1"]
    services = shop["properties"]["filterType"]
    if "WIFI" in services:
        wifi = True
    else:
        wifi = False
    if "TWENTYFOURHOURS" in services:
        open_allday = True
    else:
        open_allday = False
    if "MCCAFE" in services:
        mcCafe = True
    else:
        mcCafe = False

    try:
        tel = shop["properties"]["telephone"].replace(" ","")
    except:
        tel = ""
    try:
        Mon = shop["properties"]["restauranthours"]["hoursMonday"]
    except:
        Mon = "休息"
    Tue = shop["properties"]["restauranthours"]["hoursTuesday"]
    Wed = shop["properties"]["restauranthours"]["hoursWednesday"]
    Thu = shop["properties"]["restauranthours"]["hoursThursday"]
    Fri = shop["properties"]["restauranthours"]["hoursFriday"]
    Sat = shop["properties"]["restauranthours"]["hoursSaturday"]
    Sun = shop["properties"]["restauranthours"]["hoursSunday"]

    dic = {
        "storeRealId": shopId,
        "storeName": shopName,
        "coordinates": [latitude, longtitude],
        "address": postCode+address,
        "wifi": wifi ,
        "open_allday": open_allday,
        "macCafe": mcCafe,
        "tel":tel,
        "opentime":{
            "Mon": Mon,
            "Tue": Tue,
            "Wed": Wed,
            "Thu": Thu,
            "Fri": Fri,
            "Sat": Sat,
            "Sun": Sun
        }

    }
    lists.append(dic)

w_data = open("stores.json", "w")
json.dump(lists, w_data, indent = 4, ensure_ascii = False)