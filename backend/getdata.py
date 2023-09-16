import sys
import requests as req
import json

class getData():
    url = "https://api.purdue.io/odata/Courses?$filter="
    count = 0
    arguments = sys.argv

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
    json_formatted_str = json.dumps(API_Data, indent=2)
    print(json_formatted_str)

    with open('Output.json', 'w') as json_file:
        json_file.write(json.dumps(API_Data, indent=2))

    json_file.close()