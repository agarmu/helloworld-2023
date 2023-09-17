import sys
import requests as req
import json


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

    j = 0
    for i in API_Data:
        id = API_Data['value'][j]['SubjectId']
        print(id)
        j+=1


    # print(API_Data['value'][0]['SubjectId'])

    # json_formatted_str = json.dumps(API_Data, indent=2)
    # print(json_formatted_str)


    with open('Output.json', 'w') as json_file:
        json_file.write(json.dumps(API_Data, indent=2))

    subject_names = {}
    with open('Subjects.json', 'r') as f:
        data = json.loads(f.read())
        print(data['value'][0]['Id'])
        print(data['value'][0]['Abbreviation'])

    l = 0
    for k in data:
        subject_id = data['value'][l]['Id']
        subject_name = data['value'][l]['Abbreviation']

        subject_names[subject_id] = subject_name
        l += 1

    print(subject_names)

    json_file.close()

# elif sys.argv[0] == 'Subjects':
#     url = "https://api.purdue.io/odata/Subjects?$select"
#     r = req.get(url)
#     json_formatted_str = json.dumps(API_Data, indent=2)
#     print(json_formatted_str)
