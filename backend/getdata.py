import sys
import requests as req
import json
from search import *
import re

url = "https://api.purdue.io/odata/Subjects"
r = req.get(url)
api_data = r.json()

abbr = []
dc = {}
for subject in api_data['value']:
    abbr.append(subject['Abbreviation'])
    dc[subject['Id']] = subject['Abbreviation']

abbr.sort()

results = []
for abbreviation in abbr:
    print(f"Getting info for {abbreviation}")
    url = url = r'https://api.purdue.io/odata/Courses?$filter=Subject/Abbreviation%20eq%20%27' + abbreviation + r'%27&$orderby=Number%20asc'
    r = req.get(url)
    courses_data = r.json()['value']
    for c in courses_data:
        c['subject'] = abbreviation
    results.extend(courses_data)

for r in results:
    r['subject'] = dc[r['SubjectId']]

with open('out.json', 'w') as f:
    f.write(json.dumps(results, indent=2))
    f.close()
# count = 0
# arguments = sys.argv
# url = "https://api.purdue.io/odata/Courses?$filter="

#     if 'Title' in arguments:
#         title = input("Enter title: ")

#         count += 1
#         if count == 1:
#             url += f"contains(Title, '{title}')"
#         else:
#             url += " and "
#             url += f"contains(Title, '{title}')"

#     if 'CreditHours' in arguments:
#         credits1 = input("Enter credits: ")

#         count += 1
#         if count == 1:
#             url += f"CreditHours eq {credits1}"
#         else:
#             url += " and "
#             url += f"CreditHours eq {credits1}"

#     if 'Number' in arguments:
#         courseNum = input("Enter course number: ")

#         count += 1
#         if count == 1:
#             url += f"Number eq '{courseNum}'"
#         else:
#             url += " and "
#             url += f"Number eq '{courseNum}'"

#     # print(url)
#     r = req.get(url)
#     # print(r.json())
#     API_Data = r.json()
#     #print(API_Data)
#     # data = json.loads(API_Data)

#     # print(API_Data['value'][0]['SubjectId'])

#     # json_formatted_str = json.dumps(API_Data, indent=2)
#     # print(json_formatted_str)

#     # Dumps the output of the query to Output.json
#     with open('Output.json', 'w') as json_file:
#         json_file.write(json.dumps(API_Data, indent=2))

#     id_abbreviation_dict = Search.create_id_abbreviation_dict()

#     for subject in API_Data['value']:
#         if id_abbreviation_dict['Id'] == subject['value']['Id']:
#             subject['value']['Id'] = id_abbreviation_dict['Abbreviation']


#     with open('Output.json', 'w') as json_file:
#         json_file.write(json.dumps(API_Data, indent=2))


#     json_file.close()