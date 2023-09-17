import sys
import requests as req
import json

class search:
    url = "https://api.purdue.io/odata/Subjects"
    r = req.get(url)
    API_Data = r.json()
    json_formatted_str = json.dumps(API_Data, indent=2)
    print(json_formatted_str)

    with open('Subjects.json', 'w') as json_file:
        json_file.write(json.dumps(API_Data, indent=2))

    json_file.close()