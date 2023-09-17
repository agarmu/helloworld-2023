# import sys
# import requests as req
# import json
#
# class search:
#     url = "https://api.purdue.io/odata/Subjects"
#     r = req.get(url)
#     API_Data = r.json()
#     json_formatted_str = json.dumps(API_Data, indent=2)
#
#     def read_json_file(cls):
#         with open('Subjects.json', 'r') as f:
#             data = json.loads(f.read())
#         return data
#
#     l = 0
#     data = read_json_file()  # Call the method to get the data
#     while l < 10:
#         print(l)
#         subject_id = data['value'][2]['Id']
#         subject_name = data['value'][2]['Abbreviation']
#         print(subject_name)
#         l += 1



import requests as req

class Search:
    url = "https://api.purdue.io/odata/Subjects"
    r = req.get(url)
    api_data = r.json()

    @classmethod
    def create_id_abbreviation_dict(cls):
        id_abbreviation_dict = {}
        for subject in cls.api_data['value']:
            id_abbreviation_dict[subject['Id']] = subject['Abbreviation']
        return id_abbreviation_dict

# Create a dictionary with Id as the key and Abbreviation as the value
id_abbreviation_dict = Search.create_id_abbreviation_dict()

# Print the dictionary
for subject_id, abbreviation in id_abbreviation_dict.items():
    print(f"Id: {subject_id}, Abbreviation: {abbreviation}")
