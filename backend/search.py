import sys
import requests as req
import json

class search:
    url = "https://api.purdue.io/odata/Courses?$filter=Subject/Abbreviation eq 'MA'&$orderby=Number asc"
    r = req.get(url)
    API_Data = r.json()
    json_formatted_str = json.dumps(API_Data, indent=2)
    print(json_formatted_str)
