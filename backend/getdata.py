import sys
import requests as req
import json
from search import *
import re

class getData():
    count = 0
    arguments = sys.argv
    url = "https://api.purdue.io/odata/Courses?$filter="

    if 'Title' in arguments:
        title = input("Enter title: ")

        count += 1
        if count == 1:
            url += f"contains(Title, '{title}')"
        else:
            url += " and "
            url += f"contains(Title, '{title}')"

    if 'CreditHours' in arguments:
        credits1 = input("Enter credits: ")

        count += 1
        if count == 1:
            url += f"CreditHours eq {credits1}"
        else:
            url += " and "
            url += f"CreditHours eq {credits1}"

    if 'Number' in arguments:
        courseNum = input("Enter course number: ")

        count += 1
        if count == 1:
            url += f"Number eq '{courseNum}'"
        else:
            url += " and "
            url += f"Number eq '{courseNum}'"

    # print(url)
    r = req.get(url)
    # print(r.json())
    API_Data = r.json()
    #print(API_Data)
    # data = json.loads(API_Data)

    # print(API_Data['value'][0]['SubjectId'])

    # json_formatted_str = json.dumps(API_Data, indent=2)
    # print(json_formatted_str)

    with open('Output.json', 'w') as json_file:
        json_file.write(json.dumps(API_Data, indent=2))

    # id_abbreviation_dict = Search.create_id_abbreviation_dict()

    json_file.close()