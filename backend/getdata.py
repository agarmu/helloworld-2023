import sys
import requests as req
import json
from search import *

class getData():
    count = 0
    arguments = sys.argv
    url = "https://api.purdue.io/odata/Courses?$filter="

    def preserve_context_search_and_replace(file_path, search_word, replace_word):
        with open(file_path, 'r') as file:
            file_contents = file.read()

            pattern = re.compile(rf'\b{re.escape(search_word)}\b', re.IGNORECASE)
            updated_contents = pattern.sub(lambda match: match.group().replace(search_word, replace_word),
                                           file_contents)

        with open(file_path, 'w') as file:
            file.write(updated_contents)

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

    j = 0
    for i in API_Data:
        id = API_Data['value'][j]['SubjectId']
        filepath = "Output.json"
        search_word = "old"
        replace_word = "new"

        # Create a dictionary with Id as the key and Abbreviation as the value
        id_abbreviation_dict = Search.create_id_abbreviation_dict()



        j += 1

    json_file.close()

# elif sys.argv[0] == 'Subjects':
#     url = "https://api.purdue.io/odata/Subjects?$select"
#     r = req.get(url)
#     json_formatted_str = json.dumps(API_Data, indent=2)
#     print(json_formatted_str)
